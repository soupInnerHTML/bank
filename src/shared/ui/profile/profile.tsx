import React from 'react';
import AvatarIcon from '@shared/assets/icons/avatar.svg';
import ChevronRightIcon from '@shared/assets/icons/chevron-right.svg';
import { View } from 'react-native';
import { styles } from './profile.styles.ts';
import { IProfileProps } from './profile.types.ts';
import { Text } from '@shared/ui/text';

export const Profile: React.FC<IProfileProps> = ({ username }) => {
  return (
    <View style={styles.profile}>
      <AvatarIcon style={styles.avatarImage} />
      <Text style={styles.profileText}>{username}</Text>
      <ChevronRightIcon />
    </View>
  );
};
