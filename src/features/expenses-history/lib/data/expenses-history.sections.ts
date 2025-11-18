import { DefaultSectionT, SectionListData } from 'react-native';
import { IConsumption } from '@shared/ui/consumption';
import {
  MatthewImage,
  NetflixImage,
  StarbucksImage,
} from '@features/expenses-history/assets/images';

export const expensesHistorySections: SectionListData<IConsumption, DefaultSectionT>[] = [
  {
    data: [
      {
        id: '1',
        image: MatthewImage,
        title: 'Matthew Billson',
        category: 1,
        amount: 56.19,
        date: 1717916880,
      },
    ],
    title: 'Today',
  },
  {
    data: [
      {
        id: '2',
        image: StarbucksImage,
        title: 'Starbucks',
        category: 2,
        amount: 122.47,
        date: 1717856460,
      },
      {
        id: '3',
        image: NetflixImage,
        title: 'Netflix',
        category: 3,
        amount: 13.17,
        date: 1717818780,
      },
    ],
    title: 'Yesterday',
  },
];
