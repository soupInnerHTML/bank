import React from 'react';
import { View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@shared/ui/tab-bar-icon';
import { styles } from './tab-bar.styles.ts';

export const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => (
        <TabBarIcon
          key={route.key}
          route={route}
          index={index}
          descriptors={descriptors}
          state={state}
          navigation={navigation}
        />
      ))}
    </View>
  );
};
