import React from 'react';
import { SectionList } from 'react-native';
import { notificationsSectionListData } from '../lib/data/notifications-section-list.sections.tsx';
import {
  NotificationsItemSeparatorComponent,
  notificationsSectionListKeyExtractor,
  NotificationsSectionSeparator,
  renderNotificationsSectionHeader,
  renderNotificationsSectionItem,
} from './notifications-section-list.sections.tsx';
import { styles } from './notifications-section-list.styles.ts';

export const NotificationsSectionList = () => (
  <SectionList
    sections={notificationsSectionListData}
    renderSectionHeader={renderNotificationsSectionHeader}
    renderItem={renderNotificationsSectionItem}
    keyExtractor={notificationsSectionListKeyExtractor}
    ItemSeparatorComponent={NotificationsItemSeparatorComponent}
    SectionSeparatorComponent={NotificationsSectionSeparator}
    stickySectionHeadersEnabled={false}
    style={styles.container}
  />
);
