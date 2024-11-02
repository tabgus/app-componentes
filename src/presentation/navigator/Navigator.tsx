import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import React, {useContext} from 'react';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {Animation102Screen} from '../screens/animations/Animation102Screen';
import {SwitchScreen} from '../screens/switches/SwitchScreen';
import {AlertScreen} from '../screens/alerts/AlertScreen';
import {TextInputScreen} from '../screens/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../screens/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../screens/ui/CustomSectionListScreen';
import {ModalScreen} from '../screens/ui/ModalScreen';
import {InfiniteScrollScreen} from '../screens/ui/InfiniteScrollScreen';
import {SlidesScreen} from '../screens/ui/SlidesScreen';
import {ChangeThemeScreen} from '../screens/theme/ChangeThemeScreen';
import {ThemeContext} from '../context/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {colors} = useContext(ThemeContext);
  console.log(colors);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}>
      <Stack.Screen name="HomeScrenn" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
