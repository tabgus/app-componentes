import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({style, children}: Props) => {
  return (
    <View
      style={[
        {backgroundColor: colors.cardBackground, borderRadius: 10, padding: 10},
        style,
      ]}>
      {children}
    </View>
  );
};
