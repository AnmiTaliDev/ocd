import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Progress from './components/Progress';
import Result from './components/Result';
import { useAdaptiveTest } from './hooks/useAdaptiveTest';
import './styles/App.css';

export default function App() {
  const {
    stage,
    currentQuestion,
    currentIndex,
    answers,
    totalQuestions,
    start,
    answer,
    next,
    prev,
    restart,
    getResult,
    isFollowUp,
    canGoNext,
    canGoPrev,
    isLastQuestion
  } = useAdaptiveTest();

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1 className="title">Тест на признаки ОКР</h1>
          <p className="subtitle">Скрининговый опросник для самооценки</p>
        </div>

        <div className="warning-box">
          <div className="warning-title">
            Это НЕ медицинская диагностика
          </div>
          <div className="warning-text">
            Данный тест создан исключительно в образовательных целях и НЕ заменяет профессиональную медицинскую диагностику. Только квалифицированный специалист (психотерапевт, психиатр) может поставить диагноз ОКР. При наличии тревожных симптомов обратитесь к врачу.
          </div>
        </div>

        {stage === 'start' && <StartScreen onStart={start} />}

        {stage === 'test' && currentQuestion && (
          <>
            <Progress current={currentIndex + 1} total={totalQuestions} />
            {isFollowUp && (
              <div className="follow-up-badge">
                Уточняющий вопрос
              </div>
            )}
            <Question
              question={currentQuestion}
              selectedValue={answers[currentQuestion.id]}
              onSelect={answer}
            />
            <div className="navigation">
              {canGoPrev && (
                <button className="btn btn-secondary" onClick={prev}>
                  Назад
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={next}
                disabled={!canGoNext}
                style={{ marginLeft: !canGoPrev ? 'auto' : '0' }}
              >
                {isLastQuestion ? 'Показать результат' : 'Далее'}
              </button>
            </div>
          </>
        )}

        {stage === 'result' && (
          <Result
            result={getResult()}
            onRestart={restart}
          />
        )}
      </div>
    </div>
  );
}
