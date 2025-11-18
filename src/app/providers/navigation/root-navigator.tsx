import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { TabNavigator } from '@app/providers';
import { Notifications } from '@pages/notifications';
import { Header } from '@shared/ui/header';
import { TouchableOpacity } from 'react-native';
import { CommentsIcon } from '@app/assets/icons';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name='Main' component={TabNavigator} />
      <Stack.Screen
        name='Notifications'
        component={Notifications}
        options={{
          header: props => <Header {...props} />,
          headerTitle: 'Notifications',
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity>
              <CommentsIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
