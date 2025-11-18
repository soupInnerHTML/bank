import { ScaledSheet } from 'react-native-size-matters';
import { CONTAINER_PADDING } from '@shared/lib/consts';

export const styles = ScaledSheet.create({
  container: {
    marginTop: '16@vs',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: '12@ms',
    marginLeft: CONTAINER_PADDING,
    textTransform: 'uppercase',
    color: '#AEAEAE',
  },
  separator: {
    marginTop: '16@vs',
  },
  borderedSeparator: {
    height: '1@vs',
    backgroundColor: '#1F1F1F',
    marginVertical: '16@vs',
  },
});
