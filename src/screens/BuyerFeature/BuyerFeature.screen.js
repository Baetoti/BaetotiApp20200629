import React, { useState, useEffect } from 'react';
import FlatList from './Components/Flatlist';
import Container from '../../components/BuyerHomeContainer/BuyerHomeContainer.component';
import { View } from 'react-native';
import styles from './BuyerFeature.style';
import Services from "../../API/services"
import { useSelector } from 'react-redux';
export default function BuyerHome({ route, navigation }) {
  /*
   * data for  nearme, featured and every category which call the Screen
   */
  var [data, setData] = useState(null);
  /*
   * when Screen roads fetch data from prev screen
   */
  useEffect(() => {
    setData(route.params);
  }, []);

  useEffect(() => {
    // setData(route.params);
    Getcategoryproducts()
  }, []);
  const user = useSelector(
    state => state.Auth.user,
  ); 

  const [spinner, setspinner] = useState(false)

  const [categories, setcategories] = useState([])

  const Getcategoryproducts = async () => {
    try {     
        setspinner(true)
        var formData = new FormData(); 
        formData.append('userID', user.userID);
        formData.append('categoryID', route.params.id);
        formData.append('productSkip', 0);
        formData.append('productCount', 30);
        const {data} = await Services.Getcategoryproducts(formData)
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
      title={data && data.label}
      back
      filter
      onFilterPress={() => navigation.navigate('BuyerFilters')}
    >
      <View style={styles.mainContainer}>
        <FlatList data={categories && categories} />
      </View>
    </Container>
  );
}
