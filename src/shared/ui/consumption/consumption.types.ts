import { ImageSourcePropType } from 'react-native';
import { ICategory } from '@entities/categories/lib';

export interface IConsumption {
  image: ImageSourcePropType;
  title: string;
  category: number;
  amount: number;
  date: number;
  id: string;
}

export interface IConsumptionProps extends IConsumption {
  categories: ICategory[];
}
