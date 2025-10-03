import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Progress from './components/Progress';
import Result from './components/Result';
import { questions } from './data/questions';
import './styles/App.css';

export default function App() {
  const [stage, setStage] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setStage('test');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswer = (value) => {
    const questionId = questions[currentQuestion].id;
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStage('result');
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setStage('start');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 4;
    return Math.round((total / maxScore) * 100);
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ?.id];

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1 className="title">Тест на признаки ОКР</h1>
          <p className="subtitle">Скрининговый опросник для самооценки</p>
        </div>

        <div className="warning-box">
          <div className="warning-title">
            ⚠️ Это НЕ медицинская диагностика
          </div>
          <div className="warning-text">
            Данный тест создан исключительно в образовательных целях и НЕ заменяет профессиональную медицинскую диагностику. Только квалифицированный специалист (психотерапевт, психиатр) может поставить диагноз ОКР. При наличии тревожных симптомов обратитесь к врачу.
          </div>
        </div>

        {stage === 'start' && <StartScreen onStart={handleStart} />}

        {stage === 'test' && (
          <>
            <Progress current={currentQuestion + 1} total={questions.length} />
            <Question
              question={currentQ}
              selectedValue={currentAnswer}
              onSelect={handleAnswer}
            />
            <div className="navigation">
              {currentQuestion > 0 && (
                <button className="btn btn-secondary" onClick={handlePrev}>
                  ← Назад
                </button>
              )}
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={currentAnswer === undefined}
                style={{ marginLeft: currentQuestion === 0 ? 'auto' : '0' }}
              >
                {currentQuestion === questions.length - 1 ? 'Показать результат' : 'Далее →'}
              </button>
            </div>
          </>
        )}

        {stage === 'result' && (
          <Result
            percentage={calculateScore()}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
