import { CoreQuestion, FollowUpQuestion, Question } from '../types';

// ==========================================
// ОСНОВНЫЕ ВОПРОСЫ (Core Questions)
// ==========================================

export const coreQuestions: CoreQuestion[] = [
  {
    id: 1,
    text: "Как часто у вас возникают навязчивые мысли, которые вы не можете контролировать, и которые вызывают значительную тревогу?",
    subtype: 'obsessions',
    weight: 1.5,
    isCore: true,
    followUpQuestions: [101, 102],
    options: [
      { value: 0, text: "Никогда или очень редко" },
      { value: 1, text: "Несколько раз в месяц" },
      { value: 2, text: "Несколько раз в неделю" },
      { value: 3, text: "Почти каждый день" },
      { value: 4, text: "Постоянно, каждый день" }
    ]
  },
  {
    id: 2,
    text: "Проверяете ли вы что-то многократно (замки, плиту, выключатели), даже когда знаете, что уже проверили?",
    subtype: 'checking',
    weight: 1.3,
    isCore: true,
    followUpQuestions: [103, 104],
    options: [
      { value: 0, text: "Нет, проверяю один раз" },
      { value: 1, text: "Иногда проверяю дважды" },
      { value: 2, text: "Часто проверяю 3-5 раз" },
      { value: 3, text: "Проверяю 6-10 раз" },
      { value: 4, text: "Проверяю более 10 раз или теряю счет" }
    ]
  },
  {
    id: 3,
    text: "Как часто вы моете руки или убираетесь из-за страха загрязнения или микробов, даже когда в этом нет необходимости?",
    subtype: 'contamination',
    weight: 1.3,
    isCore: true,
    followUpQuestions: [105, 106, 107],
    options: [
      { value: 0, text: "Только когда нужно" },
      { value: 1, text: "Иногда мою чаще обычного" },
      { value: 2, text: "Часто мою руки без необходимости" },
      { value: 3, text: "Мою руки очень часто, это мешает" },
      { value: 4, text: "Постоянно, руки покраснели/потрескались" }
    ]
  },
  {
    id: 4,
    text: "Испытываете ли вы сильный дискомфорт, если предметы расположены не в определенном порядке или несимметрично?",
    subtype: 'symmetry',
    weight: 1.1,
    isCore: true,
    followUpQuestions: [108],
    options: [
      { value: 0, text: "Нет, меня это не беспокоит" },
      { value: 1, text: "Замечаю, но не исправляю" },
      { value: 2, text: "Чувствую дискомфорт и часто исправляю" },
      { value: 3, text: "Сильный дискомфорт, обязательно исправляю" },
      { value: 4, text: "Не могу успокоиться, пока не исправлю" }
    ]
  },
  {
    id: 5,
    text: "Беспокоят ли вас навязчивые мысли о том, что вы можете причинить вред себе или другим (даже если вы не хотите этого)?",
    subtype: 'obsessions',
    weight: 1.8,
    isCore: true,
    followUpQuestions: [109],
    options: [
      { value: 0, text: "Никогда" },
      { value: 1, text: "Очень редко, быстро проходят" },
      { value: 2, text: "Иногда, вызывают беспокойство" },
      { value: 3, text: "Часто, вызывают сильную тревогу" },
      { value: 4, text: "Постоянно, очень пугают" }
    ]
  },
  {
    id: 6,
    text: "Выполняете ли вы действия определенное количество раз или в определенной последовательности, чтобы предотвратить что-то плохое?",
    subtype: 'rituals',
    weight: 1.4,
    isCore: true,
    followUpQuestions: [110, 111],
    options: [
      { value: 0, text: "Нет" },
      { value: 1, text: "Редко, это не важно" },
      { value: 2, text: "Иногда, чувствую такую потребность" },
      { value: 3, text: "Часто, иначе тревожусь" },
      { value: 4, text: "Постоянно, не могу остановиться" }
    ]
  },
  {
    id: 7,
    text: "Беспокоят ли вас навязчивые сомнения религиозного, морального или сексуального характера, которые противоречат вашим ценностям?",
    subtype: 'obsessions',
    weight: 1.3,
    isCore: true,
    options: [
      { value: 0, text: "Нет" },
      { value: 1, text: "Очень редко" },
      { value: 2, text: "Иногда, это неприятно" },
      { value: 3, text: "Часто, вызывают стыд" },
      { value: 4, text: "Постоянно, очень мучительно" }
    ]
  },
  {
    id: 8,
    text: "Избегаете ли вы определенных мест, людей или ситуаций из-за навязчивых страхов или мыслей?",
    subtype: 'avoidance',
    weight: 1.2,
    isCore: true,
    followUpQuestions: [112],
    options: [
      { value: 0, text: "Нет" },
      { value: 1, text: "Редко избегаю" },
      { value: 2, text: "Иногда избегаю некоторых ситуаций" },
      { value: 3, text: "Часто избегаю, это ограничивает жизнь" },
      { value: 4, text: "Постоянно избегаю, серьезно ограничена жизнь" }
    ]
  },
  {
    id: 9,
    text: "Насколько навязчивые мысли или повторяющиеся действия мешают вашей работе, учебе, общению или повседневным делам?",
    subtype: 'functioning',
    weight: 1.8,
    isCore: true,
    options: [
      { value: 0, text: "Совсем не мешают" },
      { value: 1, text: "Слегка мешают, но справляюсь" },
      { value: 2, text: "Заметно мешают, трачу время" },
      { value: 3, text: "Сильно мешают, часто опаздываю" },
      { value: 4, text: "Очень сильно мешают, не могу нормально функционировать" }
    ]
  },
  {
    id: 10,
    text: "Сколько времени в день занимают навязчивые мысли и связанные с ними действия?",
    subtype: 'functioning',
    weight: 2.0,
    isCore: true,
    options: [
      { value: 0, text: "Менее 1 часа или совсем нет" },
      { value: 1, text: "1-3 часа" },
      { value: 2, text: "3-8 часов" },
      { value: 3, text: "Более 8 часов" },
      { value: 4, text: "Почти всё время бодрствования" }
    ]
  },
  {
    id: 11,
    text: "Накапливаете ли вы ненужные вещи или испытываете сильную трудность в выбрасывании предметов?",
    subtype: 'hoarding',
    weight: 1.0,
    isCore: true,
    followUpQuestions: [113],
    options: [
      { value: 0, text: "Нет, легко избавляюсь от ненужного" },
      { value: 1, text: "Иногда сохраняю что-то лишнее" },
      { value: 2, text: "Часто сложно выбросить вещи" },
      { value: 3, text: "Очень сложно расстаться с вещами" },
      { value: 4, text: "Не могу выбрасывать, накопление мешает жизни" }
    ]
  },
  {
    id: 12,
    text: "Испытываете ли вы потребность постоянно переспрашивать или искать подтверждения от других людей?",
    subtype: 'reassurance',
    weight: 1.1,
    isCore: true,
    followUpQuestions: [114],
    options: [
      { value: 0, text: "Нет" },
      { value: 1, text: "Редко" },
      { value: 2, text: "Иногда нуждаюсь в подтверждении" },
      { value: 3, text: "Часто переспрашиваю" },
      { value: 4, text: "Постоянно нуждаюсь в подтверждении" }
    ]
  }
];

// ==========================================
// УТОЧНЯЮЩИЕ ВОПРОСЫ (Follow-up Questions)
// ==========================================

export const followUpQuestions: FollowUpQuestion[] = [
  // Уточнения для обсессий (вопрос 1)
  {
    id: 101,
    text: "Какой характер носят ваши навязчивые мысли чаще всего?",
    subtype: 'obsessions',
    weight: 1.0,
    isCore: false,
    parentQuestionId: 1,
    triggerConditions: [{ questionId: 1, minValue: 2 }],
    options: [
      { value: 0, text: "Бытовые переживания (работа, отношения)" },
      { value: 1, text: "Страхи за здоровье себя или близких" },
      { value: 2, text: "Мысли о возможном вреде" },
      { value: 3, text: "Неприемлемые образы или мысли" },
      { value: 4, text: "Несколько типов одновременно" }
    ]
  },
  {
    id: 102,
    text: "Удается ли вам отвлечься от навязчивых мыслей?",
    subtype: 'obsessions',
    weight: 1.2,
    isCore: false,
    parentQuestionId: 1,
    triggerConditions: [{ questionId: 1, minValue: 2 }],
    options: [
      { value: 0, text: "Да, легко переключаюсь" },
      { value: 1, text: "Обычно удается с усилием" },
      { value: 2, text: "Сложно, но иногда получается" },
      { value: 3, text: "Очень редко удается" },
      { value: 4, text: "Практически невозможно" }
    ]
  },

  // Уточнения для проверок (вопрос 2)
  {
    id: 103,
    text: "Что вы чаще всего проверяете?",
    subtype: 'checking',
    weight: 0.8,
    isCore: false,
    parentQuestionId: 2,
    triggerConditions: [{ questionId: 2, minValue: 2 }],
    options: [
      { value: 0, text: "Замки и двери" },
      { value: 1, text: "Электроприборы (плита, утюг)" },
      { value: 2, text: "Документы и сообщения" },
      { value: 3, text: "Несколько категорий" },
      { value: 4, text: "Практически всё подряд" }
    ]
  },
  {
    id: 104,
    text: "Возвращаетесь ли вы домой для повторной проверки?",
    subtype: 'checking',
    weight: 1.3,
    isCore: false,
    parentQuestionId: 2,
    triggerConditions: [{ questionId: 2, minValue: 3 }],
    options: [
      { value: 0, text: "Никогда" },
      { value: 1, text: "Очень редко" },
      { value: 2, text: "Иногда" },
      { value: 3, text: "Часто" },
      { value: 4, text: "Почти всегда, даже с дороги" }
    ]
  },

  // Уточнения для контаминации (вопрос 3)
  {
    id: 105,
    text: "Избегаете ли вы прикасаться к определенным предметам или поверхностям?",
    subtype: 'contamination',
    weight: 1.1,
    isCore: false,
    parentQuestionId: 3,
    triggerConditions: [{ questionId: 3, minValue: 2 }],
    options: [
      { value: 0, text: "Нет, прикасаюсь ко всему свободно" },
      { value: 1, text: "Избегаю явно грязных предметов" },
      { value: 2, text: "Избегаю общественных поверхностей" },
      { value: 3, text: "Избегаю многих предметов дома и вне" },
      { value: 4, text: "Избегаю прикосновений максимально" }
    ]
  },
  {
    id: 106,
    text: "Сколько времени занимает одно мытье рук?",
    subtype: 'contamination',
    weight: 1.4,
    isCore: false,
    parentQuestionId: 3,
    triggerConditions: [{ questionId: 3, minValue: 2 }],
    options: [
      { value: 0, text: "Меньше минуты" },
      { value: 1, text: "1-2 минуты" },
      { value: 2, text: "3-5 минут" },
      { value: 3, text: "5-15 минут" },
      { value: 4, text: "Более 15 минут" }
    ]
  },
  {
    id: 107,
    text: "Есть ли у вас особые ритуалы мытья (определенное число намыливаний, порядок)?",
    subtype: 'contamination',
    weight: 1.2,
    isCore: false,
    parentQuestionId: 3,
    triggerConditions: [{ questionId: 3, minValue: 3 }],
    options: [
      { value: 0, text: "Нет, мою обычно" },
      { value: 1, text: "Иногда есть предпочтения" },
      { value: 2, text: "Обычно следую определенному порядку" },
      { value: 3, text: "Строгий порядок, начинаю сначала при ошибке" },
      { value: 4, text: "Сложные ритуалы, занимают много времени" }
    ]
  },

  // Уточнения для симметрии (вопрос 4)
  {
    id: 108,
    text: "Тратите ли вы значительное время на упорядочивание предметов?",
    subtype: 'symmetry',
    weight: 1.2,
    isCore: false,
    parentQuestionId: 4,
    triggerConditions: [{ questionId: 4, minValue: 2 }],
    options: [
      { value: 0, text: "Нет" },
      { value: 1, text: "Иногда, несколько минут" },
      { value: 2, text: "Регулярно, до 30 минут" },
      { value: 3, text: "Часто, может занять час" },
      { value: 4, text: "Очень много времени, более часа" }
    ]
  },

  // Уточнения для агрессивных обсессий (вопрос 5)
  {
    id: 109,
    text: "Предпринимаете ли вы какие-либо действия, чтобы \"нейтрализовать\" эти мысли?",
    subtype: 'obsessions',
    weight: 1.4,
    isCore: false,
    parentQuestionId: 5,
    triggerConditions: [{ questionId: 5, minValue: 2 }],
    options: [
      { value: 0, text: "Нет, просто жду, пока пройдут" },
      { value: 1, text: "Иногда пытаюсь отвлечься" },
      { value: 2, text: "Мысленно \"отменяю\" плохие мысли" },
      { value: 3, text: "Выполняю определенные действия/ритуалы" },
      { value: 4, text: "Множество способов, занимает много времени" }
    ]
  },

  // Уточнения для ритуалов (вопрос 6)
  {
    id: 110,
    text: "Есть ли у вас \"счастливые\" или \"несчастливые\" числа?",
    subtype: 'rituals',
    weight: 1.0,
    isCore: false,
    parentQuestionId: 6,
    triggerConditions: [{ questionId: 6, minValue: 2 }],
    options: [
      { value: 0, text: "Нет, не верю в такое" },
      { value: 1, text: "Немного суеверен, но не влияет на жизнь" },
      { value: 2, text: "Да, стараюсь учитывать их" },
      { value: 3, text: "Сильно влияют на действия" },
      { value: 4, text: "Полностью определяют мои действия" }
    ]
  },
  {
    id: 111,
    text: "Приходится ли вам повторять действие, если оно выполнено \"неправильно\"?",
    subtype: 'rituals',
    weight: 1.5,
    isCore: false,
    parentQuestionId: 6,
    triggerConditions: [{ questionId: 6, minValue: 2 }],
    options: [
      { value: 0, text: "Нет" },
      { value: 1, text: "Редко" },
      { value: 2, text: "Иногда" },
      { value: 3, text: "Часто, пока не будет \"правильно\"" },
      { value: 4, text: "Всегда, иначе сильная тревога" }
    ]
  },

  // Уточнения для избегания (вопрос 8)
  {
    id: 112,
    text: "Насколько избегание ограничивает вашу социальную жизнь?",
    subtype: 'avoidance',
    weight: 1.4,
    isCore: false,
    parentQuestionId: 8,
    triggerConditions: [{ questionId: 8, minValue: 2 }],
    options: [
      { value: 0, text: "Никак не ограничивает" },
      { value: 1, text: "Минимально" },
      { value: 2, text: "Заметно, но справляюсь" },
      { value: 3, text: "Значительно ограничивает" },
      { value: 4, text: "Почти не выхожу из дома / не общаюсь" }
    ]
  },

  // Уточнения для накопления (вопрос 11)
  {
    id: 113,
    text: "Мешают ли накопленные вещи использовать пространство по назначению?",
    subtype: 'hoarding',
    weight: 1.3,
    isCore: false,
    parentQuestionId: 11,
    triggerConditions: [{ questionId: 11, minValue: 2 }],
    options: [
      { value: 0, text: "Нет, всё убрано" },
      { value: 1, text: "Немного беспорядка" },
      { value: 2, text: "Некоторые поверхности заняты" },
      { value: 3, text: "Сложно использовать комнаты" },
      { value: 4, text: "Комнаты непригодны для использования" }
    ]
  },

  // Уточнения для поиска подтверждения (вопрос 12)
  {
    id: 114,
    text: "Помогает ли полученное подтверждение надолго успокоиться?",
    subtype: 'reassurance',
    weight: 1.2,
    isCore: false,
    parentQuestionId: 12,
    triggerConditions: [{ questionId: 12, minValue: 2 }],
    options: [
      { value: 0, text: "Да, успокаиваюсь надолго" },
      { value: 1, text: "Успокаиваюсь на несколько часов" },
      { value: 2, text: "Ненадолго, потом нужно снова" },
      { value: 3, text: "Очень ненадолго" },
      { value: 4, text: "Практически не помогает" }
    ]
  }
];

// ==========================================
// ЭКСПОРТ ВСЕХ ВОПРОСОВ
// ==========================================

export const allQuestions: Question[] = [...coreQuestions, ...followUpQuestions];

export function getQuestionById(id: number): Question | undefined {
  return allQuestions.find(q => q.id === id);
}

export function getCoreQuestions(): CoreQuestion[] {
  return coreQuestions;
}

export function getFollowUpQuestionsForParent(parentId: number): FollowUpQuestion[] {
  return followUpQuestions.filter(q => q.parentQuestionId === parentId);
}
