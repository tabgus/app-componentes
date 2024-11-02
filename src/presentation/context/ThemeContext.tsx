import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import {darkColors, lightColors, ThemeColors} from '../../config/theme';
import {
  // Appearance,
  // AppState,
  useColorScheme,
} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  /*La siguiente es la primera forma para cambiar el tema */
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  /*La siguiente es la segunda forma para cambiar tema */
  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     const colorScheme = Appearance.getColorScheme();
  //     setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          isDark: isDark,
          colors: colors,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
