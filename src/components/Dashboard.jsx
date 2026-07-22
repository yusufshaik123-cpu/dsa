import React from 'react';
import { CheckCircle2, Clock, Award, Star } from 'lucide-react';

export default function Dashboard({ stepData, progress }) {
  // Aggregate stats
  let totalProblems = 0;
  let solvedProblems = 0;
  let easyCount = 0;
  let easySolved = 0;
  let mediumCount = 0;
  let mediumSolved = 0;
  let hardCount = 0;
  let hardSolved = 0;

  stepData.lectures.forEach(lec => {
    lec.problems.forEach(prob => {
      totalProblems++;
      const isSolved = progress[prob.id]?.status === 'Solved' || progress[prob.id]?.status === 'Mastered' || progress[prob.id]?.status.includes('Revision');
      
      if (prob.difficulty === 'Easy') {
        easyCount++;
        if (isSolved) easySolved++;
      } else if (prob.difficulty === 'Medium') {
        mediumCount++;
        if (isSolved) mediumSolved++;
      } else if (prob.difficulty === 'Hard') {
        hardCount++;
        if (isSolved) hardSolved++;
      }

      if (isSolved) solvedProblems++;
    });
  });

  const completionPercent = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  return (
    <div className="dashboard-summary">
      <div className="stats-grid">
        {/* Progress Card */}
        <div className="stat-card">
          <div className="stat-icon-wrap purple">
            <Award size={24} />
          </div>
          <div className="progress-container">
            <div className="progress-header">
              <span>Current Step Progress</span>
              <span>{completionPercent}% ({solvedProblems}/{totalProblems})</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${completionPercent}%` }}></div>
            </div>
          </div>
        </div>

        {/* Easy Tracker */}
        <div className="stat-card">
          <div className="stat-icon-wrap emerald">
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Easy Solved</span>
            <span className="stat-value" style={{ color: 'var(--difficulty-easy)' }}>
              {easySolved} / {easyCount}
            </span>
          </div>
        </div>

        {/* Medium/Hard Tracker */}
        <div className="stat-card">
          <div className="stat-icon-wrap cyan">
            <Star size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Medium & Hard Solved</span>
            <span className="stat-value" style={{ color: 'var(--color-secondary)' }}>
              {mediumSolved + hardSolved} / {mediumCount + hardCount}
            </span>
          </div>
        </div>

        {/* Solve Time Tracker */}
        <div className="stat-card">
          <div className="stat-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--difficulty-medium)' }}>
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Est. Solve Time Remaining</span>
            <span className="stat-value">
              {Math.max(0, (totalProblems - solvedProblems) * 30)} mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
