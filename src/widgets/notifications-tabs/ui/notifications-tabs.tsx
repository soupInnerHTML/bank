import * as React from 'react';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Empty } from '@shared/ui/empty';
import { styles } from './notifications-tabs.styles.ts';
import { NotificationsSectionList } from '@features/notifications-section-list/ui';
import { ACCENT_COLOR } from '@shared/lib/consts';

const renderScene = SceneMap({
  all: NotificationsSectionList,
  payments: Empty,
  system: Empty,
  delivery: Empty,
  travel: Empty,
});

const routes = [
  { key: 'all', title: 'All' },
  { key: 'payments', title: 'Payments' },
  { key: 'system', title: 'System' },
  { key: 'delivery', title: 'Delivery' },
  { key: 'travel', title: 'Travel' },
];

export function NotificationsTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicatorStyle}
          style={styles.tabBar}
          tabStyle={styles.tabStyle}
          activeColor={ACCENT_COLOR}
          inactiveColor={'#AEAEAE'}
          contentContainerStyle={styles.tabBarContainer}
        />
      )}
    />
  );
}
