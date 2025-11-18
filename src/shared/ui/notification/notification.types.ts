import { StyleProp } from 'react-native';
import { ICard } from '@entities/cards/lib/types.ts';
import React from 'react';

type TReadStatus = 'read' | 'unread';

export interface INotification {
  Image: React.FC<{ style: StyleProp<any> }>;
  title: string;
  amount?: number;
  cardId?: number;
  readStatus: TReadStatus;
  date: number;
  type: string;
  description?: string;
  id: number;
}

export interface INotificationProps extends Omit<INotification, 'id'> {
  cards: ICard[];
}
