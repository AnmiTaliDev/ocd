import { useState } from 'react';
import { SubtypeProfileProps, OCDSubtype } from '../types';
import { SUBTYPE_METADATA } from '../data/subtypes';
import { getSeverityColor, getSeverityText } from '../utils/scoring';

export default function SubtypeProfile({ subtypeResults }: SubtypeProfileProps) {
  const [expandedSubtype, setExpandedSubtype] = useState<OCDSubtype | null>(null);

  const activeResults = subtypeResults
    .filter(r => r.answeredQuestions > 0)
    .sort((a, b) => b.percentage - a.percentage);

  if (activeResults.length === 0) {
    return null;
  }

  return (
    <div className="subtype-profile">
      <h3 className="subtype-profile-title">Профиль по подтипам ОКР</h3>
      <p className="subtype-profile-description">
        Распределение симптомов по категориям
      </p>

      <div className="subtype-bars">
        {activeResults.map(result => {
          const metadata = SUBTYPE_METADATA[result.subtype];
          const isExpanded = expandedSubtype === result.subtype;

          return (
            <div
              key={result.subtype}
              className={`subtype-bar-container ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setExpandedSubtype(isExpanded ? null : result.subtype)}
            >
              <div className="subtype-bar-header">
                <div className="subtype-bar-info">
                  <span className="subtype-name">{metadata.name}</span>
                </div>
                <div className="subtype-bar-stats">
                  <span
                    className="subtype-severity"
                    style={{ color: getSeverityColor(result.severity) }}
                  >
                    {getSeverityText(result.severity)}
                  </span>
                  <span className="subtype-percentage">{result.percentage}%</span>
                </div>
              </div>

              <div className="subtype-bar-track">
                <div
                  className="subtype-bar-fill"
                  style={{
                    width: `${result.percentage}%`,
                    backgroundColor: metadata.color
                  }}
                />
              </div>

              {isExpanded && (
                <div className="subtype-details">
                  <p className="subtype-description">{metadata.description}</p>
                  <div className="subtype-stats">
                    <span>Вопросов: {result.answeredQuestions}</span>
                    <span>Балл: {result.score.toFixed(1)} / {result.maxPossibleScore.toFixed(1)}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
