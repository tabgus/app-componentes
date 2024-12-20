import React, {useContext} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[styles.switchRow, {backgroundColor: colors.cardBackground}]}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}

      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        // thumbColor={isEnabled ? '#3ff607' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
