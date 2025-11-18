import React from 'react';
import { THeaderProps } from './header.types.ts';
import { TouchableOpacity, View } from 'react-native';
import { BackIcon } from '@shared/assets/icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './header.styles.ts';
import { Text } from '@shared/ui/text';

export const Header: React.FC<THeaderProps> = ({ options: { headerTitle, headerRight } }) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{headerTitle as string}</Text>
      {headerRight && headerRight({})}
    </View>
  );
};
