import { ScaledSheet } from 'react-native-size-matters';
import { CARD_HEIGHT } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  card: {
    height: CARD_HEIGHT,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16@s',
    padding: '12@s',
  },
  cardBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '350@s',
    height: '98@vs',
  },
  balance: {
    fontWeight: '600',
    fontSize: '18@ms',
    marginTop: '13@vs',
    marginBottom: '6@vs',
  },
  type: {
    fontSize: '14@ms',
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
