import React, { useState } from 'react';
import { ChevronRight, Layers } from 'lucide-react';
import { allStepsData } from '../data/allSteps';

export default function Sidebar({ activeStep, activeTopic, onSelectTopic, progress = {} }) {
  // Expansion state for accordion steps.
  const [expandedSteps, setExpandedSteps] = useState({ 1: true });

  const toggleStep = (stepNum) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepNum]: !prev[stepNum]
    }));
  };

  // Dynamically map all 18 steps
  const stepsList = Array.from({ length: 18 }, (_, idx) => {
    const num = idx + 1;
    const data = allStepsData[num];
    return {
      number: num,
      title: data ? data.stepTitle : `Step ${num}`,
      data: data,
      disabled: !data
    };
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Layers size={24} className="sidebar-icon" style={{ color: '#8b5cf6' }} />
        <div>
          <div className="sidebar-logo">DSA Tracker</div>
          <div className="sidebar-logo-sub">Striver A2Z Sheet</div>
        </div>
      </div>

      <div className="sidebar-menu">
        {stepsList.map((step) => {
          const isExpanded = !!expandedSteps[step.number];
          const isActive = activeStep === step.number;
          
          if (step.disabled) {
            return (
              <div key={step.number} className="step-item" style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                <div className="step-header">
                  <div className="step-title-wrap">
                    <div className="step-num-badge" style={{ background: '#4b5563' }}>{step.number}</div>
                    <span className="step-title-text">{step.title}</span>
                  </div>
                  <ChevronRight size={16} className="step-chevron" />
                </div>
              </div>
            );
          }

          return (
            <div key={step.number} className={`step-item ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}>
              <div className="step-header" onClick={() => toggleStep(step.number)}>
                <div className="step-title-wrap">
                  <div className="step-num-badge">{step.number}</div>
                  <span className="step-title-text">{step.title}</span>
                </div>
                <ChevronRight size={16} className="step-chevron" />
              </div>

              {isExpanded && step.data && (
                <div className="topics-list">
                  {step.data.lectures.map((lecture) => {
                    const isTopicActive = activeStep === step.number && activeTopic === lecture.lectureNumber;
                    
                    // Check if all problems in this lecture are completed
                    const isLecCompleted = lecture.problems.length > 0 && lecture.problems.every(p => {
                      const status = progress[p.id]?.status;
                      return status === 'Solved' || status === 'Mastered' || (status && status.includes('Revision'));
                    });

                    return (
                      <div
                        key={lecture.lectureNumber}
                        className={`topic-link ${isTopicActive ? 'active' : ''}`}
                        onClick={() => onSelectTopic(step.number, lecture.lectureNumber)}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                      >
                        <input
                          type="checkbox"
                          className="topic-checkbox"
                          checked={isLecCompleted}
                          readOnly
                          style={{ pointerEvents: 'none' }}
                        />
                        <span>Lec {lecture.lectureNumber}: {lecture.lectureTitle.split('(')[0]}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
