import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../utills/Colors';
import styles from './BuyerOrderReview2.styles';
import { width, height } from 'react-native-dimension';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import { AirbnbRating } from 'react-native-ratings';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import TextInput from '../../components/TextInputRowVise/TextInputRowVise.Component'
import ImageExpandModal from '../../components/ImageExpandModal/ImageExpandModal.Component'
import LinearGradient from 'react-native-linear-gradient';
export default function BuyerOrderReview2({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.OrderReview1_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * User Data required for the screen
   */

  const providerRating = route.params.providerRating;
  const itemRating = route.params.itemRating;

const [imageExpand,setImageExpand] = useState('')
  const [data, setData] = useState({
    itemList: [
      {
        key: 0,
        itemname: 'Honey Pencake',
        itemId: 5623146,
        itemPrice: 140,
        comment: 'Food & Drinks',
        shortDescription: 'Extra chess and Extra with honey',
        quantity: 1,
        itemimage: [
          require('../../assets/HomeAssets/Layer888copy2.png'),
          require('../../assets/HomeAssets/Layer928.png'),
          require('../../assets/HomeAssets/Layer935.png'),
        ],
        tags: ['Thaifood', 'Spicy'],
        description:
          'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  });
  /**
   * Component for Inividual Item
   */
  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatlist}>
        <View style={styles.flatlistCont}>
          <ViewRowVise style={{ flexDirection: 'row', }}>
            <Image source={item.itemimage[0]} style={styles.img} />
            <View style={{ justifyContent: 'space-between', alignItems: selectdLanguage == 'ar' ? "flex-end" : 'flex-start' }}>
              <TextRowVise style={styles.heading}>{item.itemname}</TextRowVise>
              <ViewRowVise style={styles.skuRowContainer}>
                <TextRowVise style={styles.comment}>{item.comment}</TextRowVise>
                <TextRowVise
                  style={{
                    color: Colors.placeHolderTextColor,
                    fontSize: width(3.5),
                  }}>
                  {" SKU "}
                </TextRowVise>
                <Text style={{ color: Colors.textBlack, fontSize: width(3.5) }}>
                  2658940
              </Text>
              </ViewRowVise>
            </View>
          </ViewRowVise>
         
          <ViewRowVise style={styles.ratingCont}>
            
            <AirbnbRating
              count={5}
              defaultRating={4}
              showRating={false}
              isDisabled={true}
              selectedColor={Colors.starColors}
              starContainerStyle={{ padding: 0, margin: 0 }}
              size={width(4.5)}
            />
          </ViewRowVise>
          <FlatList
            horizontal={true}
            data={item.itemimage}
            style={{alignSelf:'center'}}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={()=><View style={{width:width(2)}}/>}
            renderItem={({item})=>{
              return(
                <TouchableOpacity onPress={()=>setImageExpand(item)}>
              <Image source={item} style={{width:width(12),height:width(12),borderRadius:15}} />
              </TouchableOpacity>
              )
            }}
            />
          <View style={styles.textInputContainer}>
            <TextInput
              value={itemRating ? itemRating : ''}
              placeholderTextColor={Colors.grayDarker}
              autoCapitalize="none"
              style={styles.textInput}
              multiline={true}
              textAlignVertical={'top'}
              editable={false}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <React.Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundWhite}
      />
      <SafeAreaView
        style={styles.container}
        backgroundColor={Colors.backgroundWhite}
      />

      <SafeAreaView style={styles.mainContainer}>
        <Header
          title={'Review'}
          hideRightIcon
          onPressBack={() => navigation.goBack()}
          containerStyle={styles.headerContainer}
          titleStyle={styles.headerTitle}
          backIconContainerStyle={styles.backIconContainerStyle}
        />

        <LinearGradient
          colors={['#F6F6F6', '#F9ECDC', '#F9ECDC', '#FAF8F7']}
          style={styles.linearGradient}
        >
          <KeyboardAvoidingView behavior="padding">
            <ScrollView
              contentContainerStyle={{ paddingBottom: height(10) }}
              showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: Colors.backgroundWhite,
                  borderBottomLeftRadius: width(5),
                  borderBottomRightRadius: width(5),
                }}>
                {/* <ViewRowVise
                  style={{
                    marginTop: height(2),
                    width: width(90),
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.id}>{languageJson.OrderID_Label}:</Text>
                  <Text style={styles.idNumber}>OR5630PO7890</Text>
                </ViewRowVise> */}
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={require('../../assets/HomeAssets/Layer928.png')}
                    style={styles.imgCircle}
                  />
                  <Text style={styles.headingTop}>Sofia Retailer Store</Text>
                </View>
                <View style={{ marginTop: height(1) }}>
                  <AirbnbRating
                    count={5}
                    defaultRating={3}
                    showRating={false}
                    isDisabled={true}
                    selectedColor={Colors.starColors}
                    starContainerStyle={{ padding: 0, margin: 0 }}
                    size={width(4.5)}
                  />
                </View>
                <View style={{ width: width(90), alignSelf: 'center' }}>
                  <TextInput
                    value={providerRating ? providerRating : ''}
                    placeholderTextColor={Colors.grayDarker}
                    autoCapitalize="none"
                    style={styles.textInputTop}
                    multiline={true}
                    textAlignVertical={'top'}
                    editable={false}
                  />
                </View>
              </View>
              <FlatList
                data={data.itemList}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
      <ImageExpandModal 
      isVisible={imageExpand?true:false}
      image={imageExpand}
      onClose={()=>setImageExpand('')}
      />
    </React.Fragment>
  );
}
