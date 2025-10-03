import React from 'react';

export default function Question({ question, selectedValue, onSelect }) {
  return (
    <div className="question-card">
      <div className="question-number">Вопрос {question.id}</div>
      <div className="question-text">{question.text}</div>
      <div className="options">
        {question.options.map(option => (
          <div
            key={option.value}
            className={`option ${selectedValue === option.value ? 'selected' : ''}`}
            onClick={() => onSelect(option.value)}
          >
            <div className="option-radio">
              <div className="option-radio-dot"></div>
            </div>
            <div className="option-text">{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
