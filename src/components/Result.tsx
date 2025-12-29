import { ResultProps } from '../types';
import { getResultInterpretation, getSeverityColor } from '../utils/scoring';
import SubtypeProfile from './SubtypeProfile';

export default function Result({ result, onRestart }: ResultProps) {
  const interpretation = getResultInterpretation(result);
  const severityColor = getSeverityColor(result.overallSeverity);

  return (
    <div className="result-container">
      <div className="result-score" style={{ color: severityColor }}>
        {result.overallPercentage}%
      </div>
      <div className="result-title">{interpretation.title}</div>
      <div className="result-description">{interpretation.description}</div>

      <SubtypeProfile subtypeResults={result.subtypeResults} />

      <div className="recommendations">
        <h3 className="recommendations-title">Рекомендации</h3>
        <ul className="recommendations-list">
          {interpretation.recommendations.map((rec, index) => (
            <li key={index} className="recommendation-item">{rec}</li>
          ))}
        </ul>
      </div>

      <div className="result-stats">
        <div className="stat-item">
          <span className="stat-label">Вопросов отвечено:</span>
          <span className="stat-value">{result.totalQuestionsAnswered}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Доминирующих подтипов:</span>
          <span className="stat-value">{result.dominantSubtypes.length}</span>
        </div>
      </div>

      <div className="disclaimer">
        <p className="disclaimer-text">
          <strong>Важно:</strong> Этот результат является ориентировочным и НЕ является диагнозом.
          Для точной диагностики необходима консультация квалифицированного специалиста.
          ОКР успешно лечится с помощью когнитивно-поведенческой терапии (КПТ) и, при необходимости, медикаментозного лечения.
        </p>
      </div>

      <button className="btn btn-primary btn-large" onClick={onRestart} style={{ marginTop: '20px' }}>
        Пройти тест заново
      </button>
    </div>
  );
}
