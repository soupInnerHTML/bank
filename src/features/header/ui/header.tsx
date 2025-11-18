import React from 'react';
import { Profile } from '@shared/ui/profile';
import { TouchableOpacity, View } from 'react-native';
import { QrIcon } from '../assets/icons';
import { styles } from './header.styles.ts';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigate('Notifications')}>
        <Profile username={'Charlotte'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <QrIcon />
      </TouchableOpacity>
    </View>
  );
};
