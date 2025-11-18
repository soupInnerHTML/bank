import React from 'react';
import { HomeIcon } from '@shared/ui/home-icon';
import { View } from 'react-native';
import { styles } from './home-icons.styles.ts';
import { homeIconsData } from '@features/home-icons/ui/home-icons.data.ts';

export const HomeIcons: React.FC = () => {
  return (
    <View style={styles.homeIcons}>
      {homeIconsData.map(homeIcon => (
        <HomeIcon key={homeIcon.id} {...homeIcon} />
      ))}
    </View>
  );
};
