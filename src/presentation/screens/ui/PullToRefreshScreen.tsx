import React, {useContext, useState} from 'react';
import {Title} from '../../components/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const {colors} = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      5000;
    });
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
          onRefresh={onRefresh}
        />
      }>
      <CustomView margin>
        <Title text="Pull to refresh" safe />
      </CustomView>
    </ScrollView>
  );
};
