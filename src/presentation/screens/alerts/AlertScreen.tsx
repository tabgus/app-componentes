import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/Title';
import {globalStyles} from '../../../config/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {userInterfaceStyle: 'dark'},
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('On Dismis');
        },
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Contraseña',
      subTitle: 'Ingresa una contraseña válida',
      buttons: [{text: 'OK', onPress: () => console.log('Click OK')}],
      promptType: 'secure-text',
      placeholder: 'Contraseña',
    });
    // !Codigo nativo no funciona en Android
    // Alert.prompt(
    //   'Email',
    //   'Ingresa tu email para estar actualizado',
    //   (valor: string) => console.log({valor}),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text="Alerta 2 botones" onPress={createTwoButtonAlert} />
      <View style={styles.heightSeparator} />
      <Button text="Alerta 3 botones" onPress={createThreeButtonAlert} />
      <View style={styles.heightSeparator} />
      <Button text="Alerta Promt Inpu" onPress={onShowPrompt} />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  heightSeparator: {
    height: 10,
  },
});
