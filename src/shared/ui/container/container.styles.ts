import { ScaledSheet } from 'react-native-size-matters';
import { CONTAINER_PADDING } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: CONTAINER_PADDING,
  },
});
