import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './tab-bar-icon.styles.ts';
import { ITabBarIconProps } from './tab-bar-icon.types.ts';
import { Text } from '@shared/ui/text';
import { ACCENT_COLOR } from '@shared/lib/consts';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const TabBarIcon: React.FC<ITabBarIconProps> = ({
  route,
  state,
  descriptors,
  index,
  navigation,
}) => {
  const { options } = descriptors[route.key];
  const isFocused = state.index === index;
  const progress = useSharedValue(isFocused ? 1 : 0);
  const scale = useSharedValue(1);

  useEffect(() => {
    progress.value = withTiming(isFocused ? 1 : 0);
    if (!isFocused) {
      scale.value = withTiming(1);
    }
  }, [isFocused]);

  const tabBarIcon = options.tabBarIcon;

  const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(progress.value, [0, 1], ['#FFFFFF', ACCENT_COLOR]),
    };
  });

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPress = () => {
    scale.value = withTiming(0.92, { duration: 80 }, () => {
      scale.value = withTiming(1, { duration: 120 });
    });

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <AnimatedTouchable onPress={onPress} style={[styles.container, containerStyle]}>
      {tabBarIcon?.({
        focused: isFocused,
        color: isFocused ? ACCENT_COLOR : '#FFFFFF',
        size: 24,
      })}
      <AnimatedText style={[textStyle, styles.label]}>{options.title}</AnimatedText>
    </AnimatedTouchable>
  );
};
