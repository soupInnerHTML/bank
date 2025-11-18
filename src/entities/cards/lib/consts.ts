import { CardBgGreyImage, CardBgImage } from '@features/cards/assets/images';
import { ICard } from './types.ts';

export const cards: ICard[] = [
  {
    id: 1,
    balance: 4098.12,
    type: 'Debit',
    cardImageBg: CardBgImage,
    cardNumber: '4242 4242 4242 4385',
  },
  {
    id: 2,
    balance: 14.71,
    type: 'Virtual',
    cardImageBg: CardBgGreyImage,
    cardNumber: '4242 4242 4242 9081',
  },
];
