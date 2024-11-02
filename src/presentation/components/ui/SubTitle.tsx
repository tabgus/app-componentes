import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../../config/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor: string;
}

export const SubTitle = ({
  text,
  safe,
  backgroundColor = colors.background,
}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={[
        styles.texto,
        {
          marginTop: safe ? top : 0,
          backgroundColor: backgroundColor,
          color: colors.primary,
        },
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  texto: {
    //...globalStyles.subTitle,
    marginBottom: 10,
  },
});
