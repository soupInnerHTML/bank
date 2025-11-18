import React, { useMemo } from 'react';
import { DefaultSectionT, SectionListData, SectionListRenderItem, View } from 'react-native';
import { Text } from '@shared/ui/text';
import { INotification, Notification } from '@shared/ui/notification';
import { styles } from './notifications-section-list.styles.ts';
import { cards } from '@entities/cards/lib';

type TSection = SectionListData<INotification, DefaultSectionT>;

export const renderNotificationsSectionHeader = ({ section }: { section: TSection }) => (
  <Text style={styles.sectionTitle}>{section.title}</Text>
);

export const renderNotificationsSectionItem: SectionListRenderItem<
  INotification,
  DefaultSectionT
> = ({ item }) => <Notification {...item} cards={cards} />;

export const notificationsSectionListKeyExtractor = (item: INotification) => item.id.toString();

interface ISectionSeparatorProps {
  leadingItem?: INotification;
  section?: TSection;
  trailingItem?: INotification;
  trailingSection?: TSection;
}

export const NotificationsSectionSeparator: React.FC<ISectionSeparatorProps> = ({
  leadingItem,
  section,
  trailingItem,
  trailingSection,
}) => {
  const currentItemIndex = useMemo(
    () => (leadingItem ? section?.data.indexOf(leadingItem) : -1),
    [leadingItem],
  );
  const isLastItemInSection = currentItemIndex === (section?.data.length ?? 0) - 1;
  const isLastItem = !trailingItem && !trailingSection;
  return (
    <View
      style={
        !leadingItem || !isLastItemInSection || isLastItem
          ? styles.separator
          : styles.borderedSeparator
      }
    />
  );
};

export const NotificationsItemSeparatorComponent: React.FC<['ItemSeparatorComponent']> = () => {
  return <View style={styles.separator} />;
};
