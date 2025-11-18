import { ScaledSheet } from 'react-native-size-matters';
import { ACCENT_COLOR } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  expensesTitleContainer: {
    gap: 16,
  },
  expensesTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    fontSize: '21@ms',
  },
  month: {
    color: ACCENT_COLOR,
  },
  expense: {
    color: '#AEAEAE',
    fontSize: '18@ms',
  },
  segments: {
    flexDirection: 'row',
    gap: '2@s',
    marginBottom: '8@vs',
    borderRadius: '3@ms',
    overflow: 'hidden',
  },
  segment: {
    height: '8@vs',
    borderRadius: '3@ms',
  },
});
