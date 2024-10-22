import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange}: Props) => {
  return (
    <View style={styles.switchRow}>
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
