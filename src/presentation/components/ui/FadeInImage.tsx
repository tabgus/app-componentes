import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  estilos?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, estilos}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={Styles.containerFade}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="grey"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
        style={[estilos, {opacity: animatedOpacity}]}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  containerFade: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
