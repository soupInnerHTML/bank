import { ScaledSheet } from 'react-native-size-matters';
import { ACCENT_COLOR } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  notification: {
    flexDirection: 'row',
    gap: 12,
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '42@ms',
    height: '42@ms',
    borderRadius: '16@ms',
  },
  title: {
    fontWeight: '500',
  },
  amount: {
    color: ACCENT_COLOR,
    fontSize: '21@ms',
    fontWeight: '600',
    marginTop: '4@ms',
  },
  contentInfo: {
    marginTop: '6@ms',
    color: '#AEAEAE',
    lineHeight: '20@ms',
  },
  readStatus: {
    width: '6@ms',
    height: '6@ms',
    borderRadius: '6@ms',
    backgroundColor: ACCENT_COLOR,
    position: 'absolute',
    right: '22@ms',
    top: '6@ms',
  },
  notificationInfo: {
    color: '#616161',
    marginTop: '6@ms',
  },
});
