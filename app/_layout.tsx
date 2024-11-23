import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Slot } from 'expo-router';  
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isSplashScreenReady, setIsSplashScreenReady] = useState(false);

  useEffect(() => {
    const hideSplashScreen = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await SplashScreen.hideAsync();
        setIsSplashScreenReady(true);
      } catch (error) {
        console.error('Error hiding splash screen:', error);
        setIsSplashScreenReady(true);
      }
    };

    hideSplashScreen();
  }, []);

  if (!isSplashScreenReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}