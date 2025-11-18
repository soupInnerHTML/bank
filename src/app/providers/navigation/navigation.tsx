import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root-navigator';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    card: '#000000',
    text: '#FFFFFF',
  },
};

export const NavigationProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <RootNavigator />
      {children}
    </NavigationContainer>
  );
};
