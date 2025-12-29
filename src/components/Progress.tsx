import { ProgressProps } from '../types';

export default function Progress({ current, total }: ProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-text">
        Вопрос {current} из {total}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
