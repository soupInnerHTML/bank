import React from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './container.styles.ts';

export const Container: React.FC<ViewProps> = ({ children, style, ...props }) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};
