import React, {useContext, useRef, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {colors, globalStyles} from '../../../config/theme';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
  {
    title: 'Titulo 4',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-4.png'),
  },
];

export const SlidesScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [currenSlideIndex, setCurrenSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrenSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };
  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        decelerationRate={'fast'}
        scrollEnabled={false}
        onScroll={onScroll}
      />
      {currenSlideIndex === items.length - 1 ? (
        <Button
          text="Fin"
          onPress={() => navigation.goBack()}
          styles={styles.buttonStyles}
        />
      ) : (
        <Button
          text="Next"
          onPress={() => scrollToSlide(currenSlideIndex + 1)}
          styles={styles.buttonStyles}
        />
      )}
    </View>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const {title, desc, img} = item;
  return (
    <View
      style={[
        styles2.containerSlide,
        {
          width: width,
          backgroundColor: colors.background,
        },
      ]}>
      <Image
        source={img}
        style={[
          styles2.imageStyle,
          {
            width: width * 0.7,
            height: width * 0.7,
            //backgroundColor: colors.background,
          },
        ]}
      />
      <Text
        style={[
          globalStyles.title,
          {
            color: colors.primary,
          },
        ]}>
        {title}
      </Text>
      <Text style={[styles2.textDesc, {color: colors.text}]}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.background,
  },
  buttonStyles: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    width: 100,
  },
});

const styles2 = StyleSheet.create({
  containerSlide: {
    flex: 1,
    //backgroundColor: 'white',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  imageStyle: {
    resizeMode: 'center',
    alignSelf: 'center',
  },
  textDesc: {
    //color: colors.text,
    marginTop: 20,
  },
});
