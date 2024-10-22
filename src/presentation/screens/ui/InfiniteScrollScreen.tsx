import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../../config/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [number, setNumber] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => number.length + i);
    setTimeout(() => {
      setNumber([...number, ...newArray]);
    }, 300);
  };
  return (
    <View style={Styles.container}>
      <FlatList
        data={number}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={Styles.ListFooter}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
        //contentContainerStyle={Styles.contentContainer}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      estilos={Styles.stiloImage}
    />
    // <View style={Styles.imageContainer}>
    //   <Image
    //     source={{uri: `https://picsum.photos/id/${number}/200/300`}}
    //     style={Styles.stiloImage}
    //   />
    // </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    alignItems: 'center', // Centrar horizontalmente el contenido
    paddingBottom: 20, // Espaciado en la parte inferior
  },
  imageContainer: {
    marginBottom: 10, // Espaciado entre imágenes
    width: '100%', // Asegura que la imagen ocupe todo el ancho
  },
  stiloImage: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    //resizeMode: 'contain',
  },
  ListFooter: {
    height: 150,
    justifyContent: 'center',
  },
});
