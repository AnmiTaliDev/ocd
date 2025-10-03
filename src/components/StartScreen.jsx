import React from 'react';

export default function StartScreen({ onStart }) {
  return (
    <>
      <div className="info-box">
        <h2 className="info-title">Что такое ОКР?</h2>
        <p className="info-text">
          <strong>Обсессивно-компульсивное расстройство (ОКР)</strong> — это психическое расстройство, при котором человек испытывает:
        </p>
        <p className="info-text">
          • <strong>Обсессии</strong> — навязчивые, нежелательные мысли, образы или побуждения, вызывающие значительную тревогу
        </p>
        <p className="info-text">
          • <strong>Компульсии</strong> — повторяющиеся действия или ментальные ритуалы, выполняемые для снижения тревоги от обсессий
        </p>
      </div>

      <div className="start-content">
        <div className="start-icon">🧠</div>
        <p className="start-description">
          Тест содержит 12 вопросов и займет около 5 минут.<br/>
          Отвечайте честно, основываясь на вашем состоянии за последний месяц.
        </p>
        <button className="btn btn-primary btn-large" onClick={onStart}>
          Начать тест
        </button>
      </div>
    </>
  );
}
