import {
  Question,
  AnswersMap,
  OCDSubtype,
  SubtypeResult,
  TestResult,
  SeverityLevel,
  ResultInterpretation
} from '../types';
import { SUBTYPE_METADATA, SUBTYPE_DISPLAY_ORDER } from '../data/subtypes';

// ==========================================
// ОПРЕДЕЛЕНИЕ УРОВНЯ ВЫРАЖЕННОСТИ
// ==========================================

export function getSeverityLevel(percentage: number): SeverityLevel {
  if (percentage <= 20) return 'minimal';
  if (percentage <= 35) return 'mild';
  if (percentage <= 50) return 'moderate';
  if (percentage <= 70) return 'severe';
  return 'extreme';
}

// ==========================================
// РАСЧЕТ РЕЗУЛЬТАТА ПО ПОДТИПУ
// ==========================================

export function calculateSubtypeResult(
  subtype: OCDSubtype,
  answers: AnswersMap,
  answeredQuestions: Question[]
): SubtypeResult {
  const subtypeQuestions = answeredQuestions.filter(q => q.subtype === subtype);

  if (subtypeQuestions.length === 0) {
    return {
      subtype,
      score: 0,
      maxPossibleScore: 0,
      percentage: 0,
      normalizedScore: 0,
      severity: 'minimal',
      answeredQuestions: 0,
      totalQuestions: 0
    };
  }

  let weightedScore = 0;
  let maxWeightedScore = 0;
  let answeredCount = 0;

  for (const question of subtypeQuestions) {
    const answer = answers[question.id];
    if (answer !== undefined) {
      weightedScore += answer * question.weight;
      answeredCount++;
    }
    maxWeightedScore += 4 * question.weight;
  }

  const clinicalWeight = SUBTYPE_METADATA[subtype].clinicalWeight;
  const normalizedScore = maxWeightedScore > 0
    ? (weightedScore / maxWeightedScore) * clinicalWeight
    : 0;
  const percentage = maxWeightedScore > 0
    ? Math.round((weightedScore / maxWeightedScore) * 100)
    : 0;

  return {
    subtype,
    score: weightedScore,
    maxPossibleScore: maxWeightedScore,
    percentage,
    normalizedScore,
    severity: getSeverityLevel(percentage),
    answeredQuestions: answeredCount,
    totalQuestions: subtypeQuestions.length
  };
}

// ==========================================
// РАСЧЕТ ПОЛНОГО РЕЗУЛЬТАТА ТЕСТА
// ==========================================

export function calculateTestResult(
  answers: AnswersMap,
  answeredQuestions: Question[]
): TestResult {
  const subtypeResults: SubtypeResult[] = SUBTYPE_DISPLAY_ORDER.map(subtype =>
    calculateSubtypeResult(subtype, answers, answeredQuestions)
  );

  const activeSubtypeResults = subtypeResults.filter(r => r.answeredQuestions > 0);

  let totalWeightedScore = 0;
  let totalMaxScore = 0;
  let totalNormalizedScore = 0;
  let totalAnswered = 0;

  for (const result of activeSubtypeResults) {
    totalWeightedScore += result.score;
    totalMaxScore += result.maxPossibleScore;
    totalNormalizedScore += result.normalizedScore;
    totalAnswered += result.answeredQuestions;
  }

  const overallPercentage = totalMaxScore > 0
    ? Math.round((totalWeightedScore / totalMaxScore) * 100)
    : 0;

  const dominantSubtypes = activeSubtypeResults
    .filter(r => r.percentage >= 50)
    .sort((a, b) => b.percentage - a.percentage)
    .map(r => r.subtype);

  return {
    overallScore: totalWeightedScore,
    overallPercentage,
    overallSeverity: getSeverityLevel(overallPercentage),
    subtypeResults,
    dominantSubtypes,
    totalQuestionsAnswered: totalAnswered,
    weightedScore: totalNormalizedScore,
    timestamp: new Date()
  };
}

// ==========================================
// ИНТЕРПРЕТАЦИЯ РЕЗУЛЬТАТОВ
// ==========================================

export function getResultInterpretation(result: TestResult): ResultInterpretation {
  const { dominantSubtypes, overallSeverity } = result;

  const interpretations: Record<SeverityLevel, ResultInterpretation> = {
    minimal: {
      title: "Низкая вероятность ОКР",
      description: "Ваши результаты показывают минимальные признаки ОКР. У вас могут быть редкие навязчивые мысли или привычки, что является нормой для большинства людей.",
      recommendations: [
        "Следите за своим состоянием",
        "При усилении симптомов обратитесь к специалисту"
      ]
    },
    mild: {
      title: "Легкие признаки",
      description: "Вы демонстрируете некоторые признаки, характерные для ОКР, но они минимально влияют на вашу жизнь. Это может быть проявлением тревожности или обычных привычек.",
      recommendations: [
        "Изучите техники управления тревогой",
        "При усилении симптомов проконсультируйтесь со специалистом"
      ]
    },
    moderate: {
      title: "Умеренные признаки",
      description: "У вас наблюдаются заметные признаки, характерные для ОКР, которые могут влиять на повседневную жизнь.",
      recommendations: [
        "Рекомендуется консультация психолога или психотерапевта",
        "Когнитивно-поведенческая терапия (КПТ) эффективна при ОКР",
        "Не затягивайте с обращением к специалисту"
      ]
    },
    severe: {
      title: "Выраженные признаки",
      description: "Ваши результаты указывают на значительные признаки ОКР, которые существенно влияют на качество жизни.",
      recommendations: [
        "Настоятельно рекомендуется обратиться к психотерапевту или психиатру",
        "ОКР успешно лечится с помощью КПТ и ERP-терапии",
        "При необходимости может быть назначено медикаментозное лечение"
      ]
    },
    extreme: {
      title: "Тяжелые признаки",
      description: "Ваши результаты показывают очень выраженные признаки ОКР, которые серьезно нарушают повседневную жизнь.",
      recommendations: [
        "Необходима срочная консультация специалиста",
        "ОКР эффективно лечится - помощь доступна",
        "Рассмотрите комбинацию терапии и медикаментов",
        "Вы не одиноки - многие успешно справляются с ОКР"
      ]
    }
  };

  const baseInterpretation = { ...interpretations[overallSeverity] };

  if (dominantSubtypes.length > 0) {
    const subtypeNames = dominantSubtypes
      .slice(0, 3)
      .map(s => SUBTYPE_METADATA[s].name)
      .join(', ');

    baseInterpretation.description += ` Наиболее выражены: ${subtypeNames}.`;
  }

  return baseInterpretation;
}

// ==========================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ==========================================

export function getSeverityColor(severity: SeverityLevel): string {
  const colors: Record<SeverityLevel, string> = {
    minimal: '#10B981',
    mild: '#84CC16',
    moderate: '#F59E0B',
    severe: '#EF4444',
    extreme: '#7C2D12'
  };
  return colors[severity];
}

export function getSeverityText(severity: SeverityLevel): string {
  const texts: Record<SeverityLevel, string> = {
    minimal: 'Минимально',
    mild: 'Легко',
    moderate: 'Умеренно',
    severe: 'Выражено',
    extreme: 'Тяжело'
  };
  return texts[severity];
}
