import { ICategory } from './types.ts';
import { ACCENT_COLOR } from '@shared/lib/consts';

export const categories: ICategory[] = [
  { name: 'Money Transfer', color: '#CC3F02', id: 1, expenses: 11 },
  { name: 'Food', color: ACCENT_COLOR, id: 2, expenses: 9 },
  { name: 'Entertainment', color: '#FF9332', id: 3, expenses: 7 },
  { name: 'Other', color: '#FFD8A5', id: 4, expenses: 5 },
];
