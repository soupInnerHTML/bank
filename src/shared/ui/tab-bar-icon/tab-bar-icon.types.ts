import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export type ITabBarIconProps = Pick<BottomTabBarProps, 'state' | 'descriptors' | 'navigation'> & {
  route: BottomTabBarProps['state']['routes'][number];
  index: number;
};
