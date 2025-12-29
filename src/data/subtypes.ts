import { SubtypeMetadata, OCDSubtype } from '../types';

export const SUBTYPE_METADATA: Record<OCDSubtype, SubtypeMetadata> = {
  obsessions: {
    id: 'obsessions',
    name: 'Обсессии',
    shortName: 'ОБС',
    description: 'Навязчивые, нежелательные мысли, образы или побуждения, которые повторяются и вызывают значительную тревогу или дискомфорт.',
    color: '#8B5CF6',
    clinicalWeight: 1.5
  },
  checking: {
    id: 'checking',
    name: 'Проверки',
    shortName: 'ПРО',
    description: 'Повторяющиеся проверки (замков, плиты, документов) для предотвращения воображаемого вреда.',
    color: '#F59E0B',
    clinicalWeight: 1.3
  },
  contamination: {
    id: 'contamination',
    name: 'Контаминация',
    shortName: 'КОН',
    description: 'Страх загрязнения или заражения, чрезмерное мытье рук или уборка.',
    color: '#10B981',
    clinicalWeight: 1.3
  },
  symmetry: {
    id: 'symmetry',
    name: 'Симметрия',
    shortName: 'СИМ',
    description: 'Потребность в симметрии, порядке и точном расположении предметов.',
    color: '#3B82F6',
    clinicalWeight: 1.1
  },
  rituals: {
    id: 'rituals',
    name: 'Ритуалы',
    shortName: 'РИТ',
    description: 'Выполнение действий определенное количество раз или в определенной последовательности.',
    color: '#EC4899',
    clinicalWeight: 1.4
  },
  avoidance: {
    id: 'avoidance',
    name: 'Избегание',
    shortName: 'ИЗБ',
    description: 'Избегание мест, людей или ситуаций из-за навязчивых страхов.',
    color: '#EF4444',
    clinicalWeight: 1.2
  },
  functioning: {
    id: 'functioning',
    name: 'Функционирование',
    shortName: 'ФУН',
    description: 'Влияние симптомов на повседневную жизнь, работу и отношения.',
    color: '#6366F1',
    clinicalWeight: 1.8
  },
  hoarding: {
    id: 'hoarding',
    name: 'Накопление',
    shortName: 'НАК',
    description: 'Трудности с выбрасыванием вещей, накопление ненужных предметов.',
    color: '#78716C',
    clinicalWeight: 1.0
  },
  reassurance: {
    id: 'reassurance',
    name: 'Поиск подтверждения',
    shortName: 'ПОД',
    description: 'Постоянная потребность в подтверждении от других людей.',
    color: '#14B8A6',
    clinicalWeight: 1.1
  }
};

export const SUBTYPE_DISPLAY_ORDER: OCDSubtype[] = [
  'obsessions',
  'checking',
  'contamination',
  'symmetry',
  'rituals',
  'avoidance',
  'functioning',
  'hoarding',
  'reassurance'
];
