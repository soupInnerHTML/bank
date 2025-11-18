import { ScaledSheet } from 'react-native-size-matters';
import { CONTAINER_PADDING } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  header: {
    padding: CONTAINER_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: '21@ms',
  },
});
