import React, { useState, useEffect } from 'react';
import FlatList from './Components/Flatlist';
import Container from '../../components/BuyerHomeContainer/BuyerHomeContainer.component';
import {
  View
} from 'react-native';
import styles from './BuyerCategories.styles';
import dummyData from '../BuyerHome/DummyData';
import Services from "../../API/services"
import { useSelector } from 'react-redux';
export default function BuyerHome({ route, navigation }) {
  /*
   * data for categories
   */
  var [data, setData] = useState([]);
  /*
   * when Screen roads fetch data from prev screen
   */
  const user = useSelector(
    state => state.Auth.user,
  ); 

  useEffect(() => {
    setData(route.params);
    Getitemcategory()
  }, []);


  const [spinner, setspinner] = useState(false)

  const [categories, setcategories] = useState([])

  const Getitemcategory = async () => {
    try {     
        setspinner(true)
        var formData = new FormData(); 
        formData.append('userID', user.userID);
        const {data} = await Services.Getitemcategory(formData)
        console.log(data);   
        setcategories(data)                     
    }catch(error){
      alert("Something went wrong")
      setspinner(false)
      console.log(error);              
    }
}  

  return (
    <Container
      onBackPress={() => navigation.goBack()}
      title={data && data.title}
      back>
      <View style={styles.mainContainer}>
        <FlatList data={data ? categories : categories}
          onPress={(item) => {
              navigation.navigate('BuyerFeature', { data: dummyData.feature, label: item.title ,id:item.categoryID})
          }
            }/>
      </View>
    </Container>
  );
}
