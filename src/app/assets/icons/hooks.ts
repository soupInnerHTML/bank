import {
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { ACCENT_COLOR } from '@shared/lib/consts';

export const useAnimatedSvg = (isActive: boolean) => {
  const progress = useSharedValue(isActive ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isActive ? 1 : 0);
  }, [isActive]);

  const animatedProps = useAnimatedProps(() => {
    return {
      fill: interpolateColor(progress.value, [0, 1], ['#FFFFFF', ACCENT_COLOR]),
    };
  });

  return { animatedProps };
};
