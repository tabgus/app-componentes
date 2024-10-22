import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
  },
  line: {
    alignSelf: 'center',
    width: '90%',
    height: 1,
    backgroundColor: colors.text,
    opacity: 0.1,
    marginVertical: 8,
  },
});
