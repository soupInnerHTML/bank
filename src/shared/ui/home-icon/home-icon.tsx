import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IHomeIconProps } from './home-icon.types.ts';
import { styles } from './home-icon.styles.ts';
import { Text } from '@shared/ui/text';

export const HomeIcon: React.FC<IHomeIconProps> = ({ Icon, title }) => {
  return (
    <TouchableOpacity style={styles.homeIcon}>
      <Icon style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
