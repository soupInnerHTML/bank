import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@pages/home/home.tsx';
import { MainTabParamList } from '@app/providers/navigation/types.ts';
import { TabBar } from '@features/tab-bar/ui';
import { Empty } from '@shared/ui/empty';
import { AnalyticsIcon, ChatsIcon, HistoryIcon, HomeIcon, PaymentsIcon } from '@app/assets/icons';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <HomeIcon isActive={focused} />,
        }}
        component={Home}
      />
      <Tab.Screen
        name='Analytics'
        options={{
          title: 'Analytics',
          tabBarIcon: ({ focused }) => <AnalyticsIcon isActive={focused} />,
        }}
        component={Empty}
      />
      <Tab.Screen
        name='History'
        options={{
          title: 'History',
          tabBarIcon: ({ focused }) => <HistoryIcon isActive={focused} />,
        }}
        component={Empty}
      />
      <Tab.Screen
        name='Payments'
        options={{
          title: 'Payments',
          tabBarIcon: ({ focused }) => <PaymentsIcon isActive={focused} />,
        }}
        component={Empty}
      />
      <Tab.Screen
        name='Chats'
        options={{ title: 'Chats', tabBarIcon: ({ focused }) => <ChatsIcon isActive={focused} /> }}
        component={Empty}
      />
    </Tab.Navigator>
  );
};
