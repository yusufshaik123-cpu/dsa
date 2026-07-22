import React, { useState } from 'react';
import { ExternalLink, Search, Star } from 'lucide-react';

export default function ProblemList({ 
  lecture, 
  progress, 
  onUpdateStatus, 
  onUpdateConfidence, 
  onOpenDetails 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredProblems = lecture.problems.filter((prob) => {
    const userProg = progress[prob.id] || { status: 'Not Started', confidence: 0 };
    
    // Status Filter
    if (statusFilter !== 'All') {
      if (statusFilter === 'Solved' && userProg.status !== 'Solved' && userProg.status !== 'Mastered' && !userProg.status.includes('Revision')) {
        return false;
      }
      if (statusFilter === 'Not Started' && userProg.status !== 'Not Started') {
        return false;
      }
      if (statusFilter === 'Solving' && userProg.status !== 'Solving') {
        return false;
      }
    }

    // Search Query
    const query = searchQuery.toLowerCase();
    const matchName = prob.name.toLowerCase().includes(query);
    const matchPattern = prob.pattern.toLowerCase().includes(query);
    const matchCompany = prob.companies.some(c => c.toLowerCase().includes(query));
    
    return matchName || matchPattern || matchCompany;
  });

  return (
    <div className="problems-section-card">
      <div className="topic-header-bar">
        <div>
          <h2>Lec {lecture.lectureNumber}: {lecture.lectureTitle}</h2>
          <p className="topic-subtitle">Total Problems: {lecture.problems.length} | Unlocked & synced</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="filter-bar">
        <div className="search-input-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search problems, patterns, or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-pills">
          {['All', 'Not Started', 'Solving', 'Solved'].map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${statusFilter === filter ? 'active' : ''}`}
              onClick={() => setStatusFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Problems Table */}
      <div style={{ overflowX: 'auto' }}>
        <table className="problems-table">
          <thead>
            <tr>
              <th style={{ width: '40px', textAlign: 'center' }}></th>
              <th style={{ width: '40%' }}>Problem Name</th>
              <th>Difficulty</th>
              <th>Pattern</th>
              <th>Status</th>
              <th>Confidence</th>
              <th>Practice</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '24px' }}>
                  No problems matched your search or filters.
                </td>
              </tr>
            ) : (
              filteredProblems.map((prob) => {
                const userProg = progress[prob.id] || { status: 'Not Started', confidence: 0 };
                const isCompleted = userProg.status === 'Solved' || userProg.status === 'Mastered' || userProg.status.includes('Revision');
                
                return (
                  <tr key={prob.id} className={`problem-row ${isCompleted ? 'completed-row' : ''}`}>
                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                      <input
                        type="checkbox"
                        className="problem-checkbox"
                        checked={isCompleted}
                        onChange={(e) => onUpdateStatus(prob.id, e.target.checked ? 'Solved' : 'Not Started')}
                      />
                    </td>
                    <td>
                      <div style={{ 
                        fontWeight: 600, 
                        color: isCompleted ? 'var(--text-muted)' : 'var(--text-primary)',
                        textDecoration: isCompleted ? 'line-through' : 'none',
                        transition: 'all 0.2s ease'
                      }}>
                        {prob.name}
                      </div>
                      {prob.companies && prob.companies.length > 0 && (
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          🏢 {prob.companies.join(', ')}
                        </div>
                      )}
                    </td>
                    <td>
                      <span className={`difficulty-badge ${prob.difficulty.toLowerCase()}`}>
                        {prob.difficulty}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {prob.pattern}
                      </span>
                    </td>
                    <td>
                      <select
                        className="status-select"
                        value={userProg.status}
                        onChange={(e) => onUpdateStatus(prob.id, e.target.value)}
                      >
                        <option value="Not Started">Not Started</option>
                        <option value="Solving">Solving</option>
                        <option value="Solved">Solved</option>
                        <option value="Revision 1">Revision 1</option>
                        <option value="Revision 2">Revision 2</option>
                        <option value="Revision 3">Revision 3</option>
                        <option value="Mastered">Mastered</option>
                      </select>
                    </td>
                    <td>
                      <div className="stars-container">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={`star ${star <= userProg.confidence ? 'active' : ''}`}
                            onClick={() => onUpdateConfidence(prob.id, star)}
                            fill={star <= userProg.confidence ? '#fbbf24' : 'none'}
                          />
                        ))}
                      </div>
                    </td>
                    <td>
                      {prob.primaryLink && (
                        <a
                          href={prob.primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="problem-link-icon"
                        >
                          Solve <ExternalLink size={14} />
                        </a>
                      )}
                    </td>
                    <td>
                      <button 
                        className="btn-detail"
                        onClick={() => onOpenDetails(prob)}
                      >
                        Study
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
