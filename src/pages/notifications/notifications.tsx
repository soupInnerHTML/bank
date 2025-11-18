import React from 'react';
import { View } from 'react-native';
import { NotificationsTabs } from '@widgets/notifications-tabs/ui';
import { styles } from './notifications.styles.ts';

export const Notifications = () => {
  return (
    <View style={styles.view}>
      <NotificationsTabs />
    </View>
  );
};
