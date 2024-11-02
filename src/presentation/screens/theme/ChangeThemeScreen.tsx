import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title text={`Cambiar tema ${currentTheme}`} safe />
      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={styles.divider} />
      <Button text="Dark" onPress={() => setTheme('dark')} />

      <View style={styles.divider} />
      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 10,
  },
});
