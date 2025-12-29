import { StartScreenProps } from '../types';

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start-screen">
      <div className="info-box">
        <h3>Что такое ОКР?</h3>
        <p>
          <strong>Обсессивно-компульсивное расстройство (ОКР)</strong> — это психическое расстройство,
          характеризующееся навязчивыми мыслями (обсессиями) и повторяющимися действиями (компульсиями).
        </p>
        <p>
          <strong>Обсессии</strong> — нежелательные, навязчивые мысли, образы или побуждения,
          которые вызывают тревогу.
        </p>
        <p>
          <strong>Компульсии</strong> — повторяющиеся действия или ритуалы, которые человек
          выполняет, чтобы уменьшить тревогу.
        </p>
      </div>
      <button className="btn btn-primary btn-large" onClick={onStart}>
        Начать тест
      </button>
    </div>
  );
}
