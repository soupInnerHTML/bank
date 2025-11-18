import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontSize: '16@ms',
  },
  avatarImage: {
    paddingRight: '4@s',
  },
  profileText: {
    fontSize: '16@ms',
  },
});
