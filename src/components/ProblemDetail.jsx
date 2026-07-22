import React, { useState, useEffect } from 'react';
import { X, ExternalLink, RefreshCw, CheckCircle } from 'lucide-react';

export default function ProblemDetail({ problem, progressVal, onClose, onSaveNotes }) {
  const [notes, setNotes] = useState(progressVal?.notes || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setNotes(progressVal?.notes || '');
    setSaved(false);
  }, [problem, progressVal]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    await onSaveNotes(problem.id, notes);
    setSaving(false);
    setSaved(true);
  };

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="detail-header">
          <div className="detail-title-wrap">
            <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`} style={{ alignSelf: 'flex-start' }}>
              {problem.difficulty}
            </span>
            <h2 className="detail-title">{problem.name}</h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Pattern: {problem.pattern}</span>
          </div>
          <button className="btn-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Core Metadata */}
        <div className="detail-metadata-grid">
          <div className="metadata-item">
            <span className="metadata-label">Complexity</span>
            <span className="metadata-value" style={{ color: 'var(--color-secondary)' }}>
              TC: {problem.tc} | SC: {problem.sc}
            </span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Solve Time</span>
            <span className="metadata-value">{problem.solveTime}</span>
          </div>
        </div>

        {/* Prerequisites */}
        {problem.prerequisites && problem.prerequisites.length > 0 && (
          <div className="detail-section">
            <span className="detail-section-title">Prerequisites</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {problem.prerequisites.map((prereq, index) => (
                <span key={index} className="difficulty-badge" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                  {prereq}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Video & Article Resources */}
        <div className="detail-section">
          <span className="detail-section-title">Striver Solutions</span>
          <div className="detail-links">
            {problem.striverSolution?.article && (
              <a href={problem.striverSolution.article} target="_blank" rel="noopener noreferrer" className="detail-link-btn primary">
                Read TakeUForward Article <ExternalLink size={14} />
              </a>
            )}
            {problem.striverSolution?.video && (
              <a href={problem.striverSolution.video} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
                Watch YouTube Tutorial <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Alternative Videos */}
        {problem.alternativeVideos && problem.alternativeVideos.length > 0 && (
          <div className="detail-section">
            <span className="detail-section-title">Alternative Tutorials</span>
            <div className="detail-links">
              {problem.alternativeVideos.map((vid, idx) => (
                <a key={idx} href={vid.link} target="_blank" rel="noopener noreferrer" className="detail-link-btn">
                  Watch {vid.name} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Hints */}
        {problem.hints && problem.hints.length > 0 && (
          <div className="detail-section">
            <span className="detail-section-title">Hints</span>
            {problem.hints.map((hint, idx) => (
              <div key={idx} className="hint-box">
                <strong>Hint {idx + 1}:</strong> {hint}
              </div>
            ))}
          </div>
        )}

        {/* Notes Editor */}
        <div className="detail-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="detail-section-title">Personal Study Notes</span>
            <button 
              className="btn-detail" 
              onClick={handleSave} 
              disabled={saving}
              style={{ padding: '4px 10px', fontSize: '0.75rem', borderColor: saved ? 'var(--difficulty-easy)' : 'var(--border-color)' }}
            >
              {saving ? <RefreshCw size={12} className="animate-spin" /> : 'Save Notes'}
            </button>
          </div>
          <textarea
            className="notes-textarea"
            placeholder="Write code snippets, key approaches, or formulas here..."
            value={notes}
            onChange={handleNotesChange}
            onBlur={handleSave}
          />
          {saved && (
            <div className="save-indicator">
              <CheckCircle size={12} /> Notes synced to Supabase
            </div>
          )}
        </div>

        {/* Similar & Harder Followups */}
        <div className="detail-metadata-grid" style={{ marginTop: '12px' }}>
          {problem.similarProblems && problem.similarProblems.length > 0 && (
            <div className="metadata-item">
              <span className="metadata-label">Similar Problems</span>
              {problem.similarProblems.map((sim, idx) => (
                <a key={idx} href={sim.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', textDecoration: 'none', margin: '2px 0' }}>
                  {sim.name} ↗
                </a>
              ))}
            </div>
          )}
          {problem.harderFollowUps && problem.harderFollowUps.length > 0 && (
            <div className="metadata-item">
              <span className="metadata-label">Harder Follow-ups</span>
              {problem.harderFollowUps.map((fol, idx) => (
                <a key={idx} href={fol.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--difficulty-hard)', textDecoration: 'none', margin: '2px 0' }}>
                  {fol.name} ↗
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        {problem.tags && problem.tags.length > 0 && (
          <div className="detail-section" style={{ marginTop: '12px' }}>
            <span className="detail-section-title">Tags</span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {problem.tags.map((tag, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
