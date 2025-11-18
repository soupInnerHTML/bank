import React from 'react';
import { TextProps } from 'react-native';
import { styles } from './text.styles.ts';
import { Text as RNText } from 'react-native';

export const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
  return (
    <RNText {...props} style={[styles.text, style]}>
      {children}
    </RNText>
  );
};
