import React from 'react';
import 'react-native-gesture-handler';

// import {Text, View} from 'react-native';
import {Navigator} from './presentation/navigator/Navigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};
