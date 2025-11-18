import React from 'react';
import { DefaultSectionT, Image, SectionListData } from 'react-native';
import { INotification } from '@shared/ui/notification';
import { NotificationAvatarImage } from '../../assets/images';
import { SecurityIcon, SentIcon, TravelIcon } from '../../assets/icons';

export const notificationsSectionListData: SectionListData<INotification, DefaultSectionT>[] = [
  {
    title: 'Today, 17 June',
    data: [
      {
        id: 1,
        Image: props => <Image {...props} source={NotificationAvatarImage} />,
        title: 'Received from Anna',
        amount: 110,
        cardId: 1,
        readStatus: 'unread',
        date: 1750164540,
        type: 'Payments',
      },
    ],
  },
  {
    title: 'Yesterday, 16 June',
    data: [
      {
        id: 2,
        Image: props => <TravelIcon {...props} />,
        title: 'See our limited offer!',
        description: 'Would you like to visit new countries?\nMaybe it’s your time!',
        readStatus: 'read',
        date: 1750057680,
        type: 'Income',
      },
      {
        id: 3,
        Image: props => <SentIcon {...props} />,
        title: 'Sent to •• 2041',
        amount: -14.62,
        cardId: 1,
        readStatus: 'read',
        date: 1750050000,
        type: 'Payments',
      },
    ],
  },
  {
    title: '24 March, 2025',
    data: [
      {
        id: 4,
        Image: props => <SecurityIcon {...props} />,
        title: 'New login into account',
        readStatus: 'read',
        date: 1742813040,
        description:
          'You have logged in from a new location:\n' + 'iOS 26.0.1 · 109.255.84.7 · Spain',
        type: 'Security',
      },
    ],
  },
];
