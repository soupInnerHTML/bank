import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Notifications: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Payments: undefined;
  History: undefined;
  Analytics: undefined;
  Chats: undefined;
};

// Типы для useNavigation
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line
    interface RootParamList extends RootStackParamList {}
  }
}
