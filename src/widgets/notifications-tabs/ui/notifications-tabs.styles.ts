import { ACCENT_COLOR, CONTAINER_PADDING } from '@shared/lib/consts';
import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  tabBarContainer: {
    paddingHorizontal: CONTAINER_PADDING,
    borderBottomWidth: 1,
    borderBottomColor: '#1F1F1F',
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
  indicatorStyle: {
    backgroundColor: ACCENT_COLOR,
    height: 3,
  },
  tabStyle: {
    padding: 0,
    width: 'auto',
    paddingHorizontal: '10@s',
  },
});
