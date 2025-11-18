import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles.ts';
import { NavigationProvider } from '@app/providers/navigation/navigation.tsx';

export function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationProvider />
    </SafeAreaView>
  );
}
