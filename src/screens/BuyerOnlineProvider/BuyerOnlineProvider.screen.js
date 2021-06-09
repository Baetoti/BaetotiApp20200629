import React, { useState, useEffect } from 'react';
import FlatList from './Components/Flatlist';
import Container from '../../components/BuyerHomeContainer/BuyerHomeContainer.component';
import { View } from 'react-native';
import styles from './BuyerOnlineProvider.styles';
import { useSelector } from 'react-redux';
import dummyData from '../BuyerHome/DummyData';
export default function BuyerHome({ route, navigation, label }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.BuyerHome_screen)
  /*
   * provider data
   */
  var [data, setData] = useState(null);
  /*
   * when Screen loads fetch data from prev screen
   */
  useEffect(() => {
    setData(dummyData.provider);
  }, []);
  return (
    <Container
      onBackPress={() => navigation.goBack()}
      title={route.params?.title ? route.params.title : languageJson.OnlineProviders_Heading}
      back
      onFilterPress={() => navigation.navigate('BuyerFilters')}
      filter>
      <View style={styles.mainContainer}>
        <FlatList onPress={() => navigation.navigate('ServiceDetailOverView')} data={data} />
      </View>
    </Container>
  );
}
