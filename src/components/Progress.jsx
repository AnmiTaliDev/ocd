import React from 'react';

export default function Progress({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-label">Вопрос {current} из {total}</span>
        <span className="progress-label">{Math.round(percentage)}%</span>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
