import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProblemList from './components/ProblemList';
import ProblemDetail from './components/ProblemDetail';
import { allStepsData } from './data/allSteps';

export default function App() {
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [activeTopic, setActiveTopic] = useState(1);
  const [progress, setProgress] = useState({});
  const [selectedProblem, setSelectedProblem] = useState(null);

  // Get active step data (1 to 18)
  const getStepData = () => {
    return allStepsData[activeStep] || allStepsData[1];
  };

  const activeStepData = getStepData();
  const activeLecture = activeStepData.lectures.find(l => l.lectureNumber === activeTopic) || activeStepData.lectures[0];

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingSession(false);
      if (session) fetchProgress(session.user.id);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoadingSession(false);
      if (session) {
        fetchProgress(session.user.id);
      } else {
        setProgress({});
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProgress = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId);
      
      if (error) throw error;
      
      const progressMap = {};
      data.forEach((row) => {
        progressMap[row.problem_id] = {
          status: row.status,
          confidence: row.confidence,
          notes: row.notes || ''
        };
      });
      setProgress(progressMap);
    } catch (err) {
      console.error('Error fetching progress:', err.message);
    }
  };

  const updateProgressValue = async (problemId, fields) => {
    if (!session) return;
    const userId = session.user.id;

    // Get current item state or construct fallback
    const current = progress[problemId] || { status: 'Not Started', confidence: 0, notes: '' };
    const updated = { ...current, ...fields };

    // Update local state first (optimistic UI update)
    setProgress((prev) => ({
      ...prev,
      [problemId]: updated
    }));

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          problem_id: problemId,
          status: updated.status,
          confidence: updated.confidence,
          notes: updated.notes,
          last_updated: new Date().toISOString()
        }, { onConflict: 'user_id,problem_id' });

      if (error) throw error;
    } catch (err) {
      console.error('Error saving progress:', err.message);
      // Revert state on error
      fetchProgress(userId);
    }
  };

  const handleUpdateStatus = (problemId, status) => {
    updateProgressValue(problemId, { status });
  };

  const handleUpdateConfidence = (problemId, confidence) => {
    updateProgressValue(problemId, { confidence });
  };

  const handleSaveNotes = async (problemId, notes) => {
    await updateProgressValue(problemId, { notes });
  };

  const handleSelectTopic = (stepNum, topicNum) => {
    setActiveStep(stepNum);
    setActiveTopic(topicNum);
    setSelectedProblem(null);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loadingSession) {
    return (
      <div className="auth-container">
        <div className="auth-card" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <h2 className="auth-title" style={{ marginBottom: '16px' }}>Loading DSA Tracker...</h2>
          <div style={{ color: 'var(--text-muted)' }}>Checking database session...</div>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Auth />;
  }

  return (
    <div className="app-container">
      {/* Sidebar navigation */}
      <Sidebar
        activeStep={activeStep}
        activeTopic={activeTopic}
        onSelectTopic={handleSelectTopic}
      />

      {/* Main Container */}
      <main className="main-content">
        {/* Navigation Navbar */}
        <header className="navbar">
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>
            {activeStepData.stepTitle}
          </div>
          <div className="navbar-user">
            <span className="user-email">{session.user.email}</span>
            <button className="btn-signout" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </header>

        {/* Workspace Body */}
        <div className="content-body">
          <div className="dashboard-header">
            <h1>DSA Learning Tracker</h1>
            <p>Sync your progress seamlessly. Revisit solved problems to master core structures.</p>
          </div>

          {/* Stats Summary Dashboard */}
          <Dashboard stepData={activeStepData} progress={progress} />

          {/* Problems Listing Grid */}
          <ProblemList
            lecture={activeLecture}
            progress={progress}
            onUpdateStatus={handleUpdateStatus}
            onUpdateConfidence={handleUpdateConfidence}
            onOpenDetails={(prob) => setSelectedProblem(prob)}
          />
        </div>
      </main>

      {/* Slide-out Study Sheet Details Drawer */}
      {selectedProblem && (
        <ProblemDetail
          problem={selectedProblem}
          progressVal={progress[selectedProblem.id] || { status: 'Not Started', confidence: 0, notes: '' }}
          onClose={() => setSelectedProblem(null)}
          onSaveNotes={handleSaveNotes}
        />
      )}
    </div>
  );
}
