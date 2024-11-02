import React, {useContext, useState} from 'react';
import {Modal, Platform, StyleSheet, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {colors} = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title text="Modal" safe />
      <Button text="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="slide">
        <View style={Styles.stiloModal}>
          <View
            style={[Styles.stiloModal2, {backgroundColor: colors.background}]}>
            <Title text="Modal Content" safe />
            <Button
              text="Cerrar Modal"
              onPress={() => setIsVisible(false)}
              styles={Styles.stiloModal4}
            />
          </View>
          {/* <View style={Styles.stiloModal3} /> */}
        </View>
      </Modal>
    </CustomView>
  );
};

const Styles = StyleSheet.create({
  stiloModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
    //backgroundColor: 'red',
  },
  stiloModal2: {
    margin: 20,
    //backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  stiloModal3: {
    flex: 1,
  },
  stiloModal4: {
    height: Platform.OS === 'android' ? 40 : 60,

    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
