import React, { useState, createRef ,useEffect } from 'react';
import Container from '../../components/BuyerHomeContainer/BuyerHomeContainer.component';
import TextInput from './Components/TextInput';
import Heading from './Components/Text';
import BlueText from './Components/blueText';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { height, width } from 'react-native-dimension';
import CustomFlatlist from './Components/Flatlist';
import styles from './BuyerHome.styles';
import dummyData from './DummyData';
import ModalDropdown from 'react-native-modal-dropdown';
import arrowdownImage from '../../assets/buyerHome/angle-down.png';
import search from '../../assets/buyerHome/search.png';
import avatar from '../../assets/buyerHome/Layer777.png'
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import Services from "../../API/services"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors_1 from '../../utills/Colors';

const waiym = Dimensions.get("screen").width
export default function BuyerHome({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.BuyerHome_screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)

  /*
 *    Modal reference to open search modal
 */
  const modalDropdown = createRef(null);
  /*
 *    States used 
 */
  const [inputDropDown, setInputDropDown] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  /*
 *    Individual category item
 */
  const _renderCategories = ({ item }) => (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('BuyerCategories', item)} style={styles.categoryContainer}>
      <ImageBackground
        source={{ uri: item.categoryImage }}
        imageStyle={styles.categoryContainer}
        style={styles.categoryContainer}>
        <View style={styles.blurBackground}>
          <Text style={styles.categoryText}>{item.categoryName}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  /*
  *    individual provider item
  */
  const _renderProvider = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ServiceDetailOverView')} style={styles.providerContainer}>
      <Image source={{ uri: item.image }} style={styles.providerLogo} />
      <Text style={styles.providerRestaurant}>{item.restaurant}</Text>
      <Text style={styles.providerCategory}>{item.title}</Text>
    </TouchableOpacity>
  );

  const user = useSelector(
    state => state.Auth.user,
  ); 

  useEffect(() => {
    // alert(JSON.stringify(user))
    Getitemcategory()
  }, [])


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
      title={languageJson.Home_Title}
      avatar={avatar}
      bell
      onBackPress = {()=> navigation.navigate("MyProfile")}
      onBellPress={() => navigation.navigate('Notifications')}
     // Near_Me ={()=>navigation.navigate('NearMe_Screen')}
     nearme ={
      <TouchableOpacity 
          onPress={()=>navigation.navigate('NearMe_Screen')}
          onLongPress={()=>navigation.navigate('NearMe_Screen')}
          style={{backgroundColor:Colors_1.white, borderRadius:10,alignSelf:"center",alignItems:"center",padding:5,marginRight:10}}>
          <Icon name={"map-marker"} style={{color:Colors_1.gray,fontSize:25,alignSelf:'center'}} />
          <Text style = {[{color:Colors_1.textOpacitiveBlack,fontSize:14,alignSelf:'center',}]}>
              Near Me
          </Text>
      </TouchableOpacity>  
    }
    >
      <ScrollView
        style={{ width: width(100) }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: height(15) }}>

       {/* <TouchableOpacity style={{backgroundColor:"#fff",width:waiym-40,height:56,borderRadius:10,alignSelf:"center",flexDirection:"row",alignItems:"center",padding:5}}>
             <Icon name={"map-marker"} style={{color:"#000",fontSize:16,marginLeft:10}} />
             <Text style = {[{marginTop:0,color:"#000",fontSize:14,padding:5,marginLeft:10}]}>
                Current Location 
            </Text>
       </TouchableOpacity> */}


        <TextInput
          selectdLanguage={selectdLanguage}
          // onDropdownPress={() => {
          //   // modalDropdown.current.show();
          // }}
          onSearch={() => navigation.navigate('Search',{searchValue:inputDropDown})}
          down={arrowdownImage}
          search={search}
          placeHolder={languageJson.WhatYouLike_PlaceHolder}
          value={inputDropDown}
          onChangeText={(value) => setInputDropDown(value)}
        />
        {/* <ModalDropdown
          options={['Option 1', 'Option 2']}
          dropdownStyle={styles.dropDown}
          ref={modalDropdown}
          showsVerticalScrollIndicator={false}
          onSelect={(index, value) => setInputDropDown(value)}
          renderRow={(option, index, isSelected) => (
            <View style={styles.dropDownItemContainer}>
              <Text style={styles.dropDownItemText}>{option}</Text>
            </View>
          )}>
          <View />
        </ModalDropdown> */}


        {/* <TouchableOpacity style={styles.searchContainer}
        onPress={() => navigation.navigate('Search')}
        >
          <ViewRowVise style={styles.searchInnerContainer}>
            <Image style={styles.searchImage}
              source={search} />
              
              <TextRowVise style={styles.searchText}>{inputDropDown}</TextRowVise>
            <Image style={styles.arrowDown}
              source={arrowdownImage} />

          </ViewRowVise>
        </TouchableOpacity> */}
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.Categories_Heading}</Heading>
          <BlueText onPress={() => navigation.navigate('BuyerCategories', { data: dummyData.categories[0].data, title: languageJson.Categories_Heading })}>{languageJson.ViewAll_Heading}</BlueText>
        </ViewRowVise>
        <FlatList
          data={categories}
          inverted={selectdLanguage == 'ar'}
          renderItem={_renderCategories}
          keyExtractor={item => item.code}
          style={{ paddingLeft: width(5) }}
          contentContainerStyle={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ marginLeft: width(2.5) }} />
          )}
        />
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.AvailableNow_Heading}</Heading>
          <BlueText onPress={() =>
            navigation.navigate('BuyerFeature', { data: dummyData.availableNow, label: languageJson.AvailableNow_Heading })
          }>{languageJson.ViewAll_Heading}</BlueText>
        </ViewRowVise>
        <CustomFlatlist data={dummyData.availableNow} onPress={(item) => {
          setIsVisible(true)
          setSelectedItem(item)
        }} />
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.Featured_Heading}</Heading>
          <BlueText
            onPress={() =>
              navigation.navigate('BuyerFeature', { data: dummyData.feature, label: languageJson.Featured_Heading })
            }>
            {languageJson.ViewAll_Heading}
          </BlueText>
        </ViewRowVise>
        <CustomFlatlist data={dummyData.feature} onPress={(item) => {
          setIsVisible(true)
          setSelectedItem(item)
        }} />
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.NearMe_Heading}</Heading>
          <BlueText onPress={() =>
            navigation.navigate('BuyerFeature', { data: dummyData.nearMe, label: languageJson.NearMe_Heading })
          }>{languageJson.ViewAll_Heading}</BlueText>
        </ViewRowVise>
        <CustomFlatlist data={dummyData.nearMe} onPress={(item) => {
          setIsVisible(true)
          setSelectedItem(item)
        }} />
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.TopRated_Heading}</Heading>
          <BlueText onPress={() =>
            navigation.navigate('BuyerFeature', { data: dummyData.topRated, label: languageJson.TopRated_Heading })
          }>{languageJson.ViewAll_Heading}</BlueText>
        </ViewRowVise>
        <CustomFlatlist data={dummyData.topRated} onPress={(item) => {
          setIsVisible(true)
          setSelectedItem(item)
        }} />
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.Latest_Heading}</Heading>
          <BlueText onPress={() =>
            navigation.navigate('BuyerFeature', { data: dummyData.latest, label: languageJson.Latest_Heading })
          }>{languageJson.ViewAll_Heading}</BlueText>
        </ViewRowVise>
        <CustomFlatlist data={dummyData.latest} onPress={(item) => {
          setIsVisible(true)
          setSelectedItem(item)
        }} />
        <ViewRowVise style={styles.textContainer}>
          <Heading style={styles.headingText}>{languageJson.OnlineProviders_Heading}</Heading>
          <BlueText onPress={() => navigation.navigate('BuyerOnlineProvider')}>{languageJson.ViewAll_Heading}</BlueText>
        </ViewRowVise>
        <FlatList
          data={dummyData.provider}
          renderItem={_renderProvider}
          inverted={selectdLanguage == 'ar'}
          keyExtractor={item => item.code}
          contentContainerStyle={styles.container}
          horizontal={true}
          style={{ marginBottom: height(15), paddingBottom: 20, paddingLeft: width(5) }}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ marginLeft: width(2.5) }} />
          )}
        />
      </ScrollView>
      <OverViewModal
        isVisible={isVisible}
        onChange={() => { }}
        onStorePress={() => {
          setIsVisible(!isVisible)
          navigation.navigate('ServiceDetailOverView')
        }}
        selectedItem={selectedItem}
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      />
    </Container>
  );
}
