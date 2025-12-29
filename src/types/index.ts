// ==========================================
// ПОДТИПЫ ОКР (OCD Subtypes)
// ==========================================

export type OCDSubtype =
  | 'obsessions'        // Обсессии/навязчивые мысли
  | 'checking'          // Проверки
  | 'contamination'     // Контаминация/загрязнение
  | 'symmetry'          // Симметрия/порядок
  | 'rituals'           // Ритуалы
  | 'avoidance'         // Избегание
  | 'functioning'       // Влияние на функционирование
  | 'hoarding'          // Накопление
  | 'reassurance';      // Поиск подтверждения

// Метаданные подтипа (для UI)
export interface SubtypeMetadata {
  id: OCDSubtype;
  name: string;
  shortName: string;
  description: string;
  color: string;
  clinicalWeight: number;
}

// ==========================================
// ВОПРОСЫ (Questions)
// ==========================================

export interface AnswerOption {
  value: number;
  text: string;
}

// Условие для показа уточняющего вопроса
export interface TriggerCondition {
  questionId: number;
  minValue: number;
}

// Базовый вопрос
export interface BaseQuestion {
  id: number;
  text: string;
  options: AnswerOption[];
  subtype: OCDSubtype;
  weight: number;
  isCore: boolean;
}

// Основной вопрос (всегда показывается)
export interface CoreQuestion extends BaseQuestion {
  isCore: true;
  followUpQuestions?: number[];
}

// Уточняющий вопрос (условно показывается)
export interface FollowUpQuestion extends BaseQuestion {
  isCore: false;
  triggerConditions: TriggerCondition[];
  parentQuestionId: number;
}

export type Question = CoreQuestion | FollowUpQuestion;

// ==========================================
// ОТВЕТЫ И СОСТОЯНИЕ (Answers & State)
// ==========================================

export type AnswersMap = Record<number, number>;

// Стадии теста
export type TestStage = 'start' | 'test' | 'result';

// ==========================================
// РЕЗУЛЬТАТЫ (Results)
// ==========================================

// Уровни выраженности
export type SeverityLevel =
  | 'minimal'     // 0-20%
  | 'mild'        // 21-35%
  | 'moderate'    // 36-50%
  | 'severe'      // 51-70%
  | 'extreme';    // 71-100%

// Результат по подтипу
export interface SubtypeResult {
  subtype: OCDSubtype;
  score: number;
  maxPossibleScore: number;
  percentage: number;
  normalizedScore: number;
  severity: SeverityLevel;
  answeredQuestions: number;
  totalQuestions: number;
}

// Полный результат теста
export interface TestResult {
  overallScore: number;
  overallPercentage: number;
  overallSeverity: SeverityLevel;
  subtypeResults: SubtypeResult[];
  dominantSubtypes: OCDSubtype[];
  totalQuestionsAnswered: number;
  weightedScore: number;
  timestamp: Date;
}

// Интерпретация результата
export interface ResultInterpretation {
  title: string;
  description: string;
  recommendations: string[];
}

// ==========================================
// PROPS КОМПОНЕНТОВ
// ==========================================

export interface StartScreenProps {
  onStart: () => void;
}

export interface ProgressProps {
  current: number;
  total: number;
}

export interface QuestionProps {
  question: Question;
  selectedValue: number | undefined;
  onSelect: (value: number) => void;
  isFollowUp?: boolean;
}

export interface ResultProps {
  result: TestResult;
  onRestart: () => void;
}

export interface SubtypeProfileProps {
  subtypeResults: SubtypeResult[];
}
