import React, {useContext} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={[{backgroundColor: colors.cardBackground}]}>
      <View style={[styles.line, {backgroundColor: colors.text}, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
    width: '80%',
    height: 1,
    opacity: 0.1,
    marginVertical: 8,
  },
});
