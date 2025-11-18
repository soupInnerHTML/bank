import { ImageSourcePropType } from 'react-native';

export interface ICardBase {
  balance: number;
  type: string;
  cardImageBg: ImageSourcePropType;
  cardNumber: string;
}

export type TCardProps = ICardBase;
