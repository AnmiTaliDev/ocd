import { useState, useCallback } from 'react';
import {
  Question,
  FollowUpQuestion,
  AnswersMap,
  TestStage,
  TriggerCondition,
  TestResult
} from '../types';
import { coreQuestions, followUpQuestions } from '../data/questions';
import { calculateTestResult } from '../utils/scoring';

interface UseAdaptiveTestReturn {
  stage: TestStage;
  currentQuestion: Question | null;
  currentIndex: number;
  answers: AnswersMap;
  totalQuestions: number;
  progress: number;
  start: () => void;
  answer: (value: number) => void;
  next: () => void;
  prev: () => void;
  restart: () => void;
  getResult: () => TestResult;
  isFollowUp: boolean;
  canGoNext: boolean;
  canGoPrev: boolean;
  isLastQuestion: boolean;
}

export function useAdaptiveTest(): UseAdaptiveTestReturn {
  const [stage, setStage] = useState<TestStage>('start');
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [questionSequence, setQuestionSequence] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkTriggerCondition = useCallback(
    (condition: TriggerCondition, currentAnswers: AnswersMap): boolean => {
      const answer = currentAnswers[condition.questionId];
      return answer !== undefined && answer >= condition.minValue;
    },
    []
  );

  const shouldShowFollowUp = useCallback(
    (followUp: FollowUpQuestion, currentAnswers: AnswersMap): boolean => {
      const { triggerConditions } = followUp;
      if (triggerConditions.length === 0) return false;
      return triggerConditions.every(c => checkTriggerCondition(c, currentAnswers));
    },
    [checkTriggerCondition]
  );

  const buildQuestionSequence = useCallback(
    (currentAnswers: AnswersMap): Question[] => {
      const sequence: Question[] = [];

      for (const coreQ of coreQuestions) {
        sequence.push(coreQ);

        if (coreQ.followUpQuestions && coreQ.followUpQuestions.length > 0) {
          for (const followUpId of coreQ.followUpQuestions) {
            const followUp = followUpQuestions.find(q => q.id === followUpId);
            if (followUp && shouldShowFollowUp(followUp, currentAnswers)) {
              sequence.push(followUp);
            }
          }
        }
      }

      return sequence;
    },
    [shouldShowFollowUp]
  );

  const start = useCallback(() => {
    setAnswers({});
    setCurrentIndex(0);
    setQuestionSequence(buildQuestionSequence({}));
    setStage('test');
  }, [buildQuestionSequence]);

  const answer = useCallback((value: number) => {
    const question = questionSequence[currentIndex];
    if (!question) return;

    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    const newSequence = buildQuestionSequence(newAnswers);
    setQuestionSequence(newSequence);
  }, [questionSequence, currentIndex, answers, buildQuestionSequence]);

  const next = useCallback(() => {
    if (currentIndex < questionSequence.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStage('result');
    }
  }, [currentIndex, questionSequence.length]);

  const prev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const restart = useCallback(() => {
    setStage('start');
    setAnswers({});
    setCurrentIndex(0);
    setQuestionSequence([]);
  }, []);

  const getResult = useCallback((): TestResult => {
    const answeredQuestions = questionSequence.filter(q => answers[q.id] !== undefined);
    return calculateTestResult(answers, answeredQuestions);
  }, [answers, questionSequence]);

  const currentQuestion = questionSequence[currentIndex] || null;
  const isFollowUp = currentQuestion ? !currentQuestion.isCore : false;
  const canGoNext = currentQuestion ? answers[currentQuestion.id] !== undefined : false;
  const canGoPrev = currentIndex > 0;
  const isLastQuestion = currentIndex === questionSequence.length - 1;
  const progress = questionSequence.length > 0
    ? Math.round(((currentIndex + 1) / questionSequence.length) * 100)
    : 0;

  return {
    stage,
    currentQuestion,
    currentIndex,
    answers,
    totalQuestions: questionSequence.length,
    progress,
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
  };
}
