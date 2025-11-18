import React from 'react';
import Svg from 'react-native-svg';
import { AnimatedIconProps } from './types.ts';
import { AnimatedPath } from './components.ts';
import { useAnimatedSvg } from './hooks.ts';

const HomeIcon: React.FC<AnimatedIconProps> = ({ size = 20, isActive = false }) => {
  const { animatedProps } = useAnimatedSvg(isActive);
  return (
    <Svg width={size} height={size} viewBox='0 0 20 20'>
      <AnimatedPath
        animatedProps={animatedProps}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.25 8.25L9.625 0L0 8.25V19.1628H19.25V8.25Z'
      />
    </Svg>
  );
};

export default HomeIcon;
