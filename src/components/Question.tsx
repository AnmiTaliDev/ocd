import { QuestionProps } from '../types';

export default function Question({ question, selectedValue, onSelect }: QuestionProps) {
  return (
    <div className="question-container">
      <div className="question-text">{question.text}</div>
      <div className="options">
        {question.options.map((option) => (
          <div
            key={option.value}
            className={`option ${selectedValue === option.value ? 'selected' : ''}`}
            onClick={() => onSelect(option.value)}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
}
