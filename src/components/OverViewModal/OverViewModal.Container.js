import React, { useState, Fragment, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './OverViewModal.Style';
import { AirbnbRating } from 'react-native-ratings';
import multiplyImage from '../../assets/HomeAssets/multiply.png';
import angleLeft from '../../assets/HomeAssets/angle-left.png';
import angleRight from '../../assets/HomeAssets/angle-right.png';
import ellipseImage from '../../assets/HomeAssets/Ellipse.png';
import trashImage from '../../assets/OverViewDetailAssets/trash.png';
import checkmarkImage from '../../assets/OverViewDetailAssets/check-mark.png';
import Modal from 'react-native-modal';
import { SliderBox } from 'react-native-image-slider-box';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../../utills/Colors';
import { SwipeRow } from 'react-native-swipe-list-view';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import Button from '../Button/Button.component';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign1 from 'react-native-vector-icons/Feather';
import closeWhiteImage from '../../assets/OverViewDetailAssets/closewhite.png';
import {useNavigation} from'@react-navigation/native'
export default function CurrentOrders({
  isVisible,
  report,
  onPress,
  selectedItem,
  onChange,
  onStorePress,
  isCartHide,
}) {
  const navigation =useNavigation()
  const languageJson1 = useSelector(
    state => state.Language.languageJson.ServiceDetailsOverview_Screen,
  );
  const languageJson2 = useSelector(
    state => state.Language.languageJson.BuyerSetting_Screen,
  );
  const popItems = [
    // {
    //   image: require('../../assets/OverViewDetailAssets/heart.png'),
    //   title: languageJson1.Favorite_Label,
    // },
    {
      image: require('../../assets/OverViewDetailAssets/flag.png'),
      title: languageJson1.Report_Label,
    },
  ];
  const languageJson = useSelector(
    state => state.Language.languageJson.ItemDetailsPopup,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const [isIssue, setIsIssue] = useState(false);
  const [isReport, setIsReport] = useState(false);
  /**
   * Reading Screen Data from redux
   */
  const selectedCurrency = useSelector(
    state => state.Configuration.selectedCurrency,
  );
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar);
  const toFixed = useSelector(state => state.Configuration.toFixed);
  const isDollar = selectedCurrency == 'USD';

  const [isCart, setIsCart] = useState(selectedItem.addedToCart);
  const [images, setSelectedItem] = useState([
    require('../../assets/OverViewDetailAssets/Layer718.png'),
    require('../../assets/OverViewDetailAssets/Layer718.png'),
    require('../../assets/OverViewDetailAssets/Layer718.png'),
    require('../../assets/OverViewDetailAssets/Layer718.png'),
  ]);
  const _showTags = ({ item }) => {
    return (
      <View style={styles.tagsViewContainer}>
        <Text style={styles.tagsText}>{item}</Text>
      </View>
    );
  };
  useEffect(() => {
    setIsCart(selectedItem.addedToCart);
  }, [isVisible]);
  const onClosed = () => {
    // setIsCart(null);
    onPress();
  };
  // const _popItemsDetail = ({ item, index }) => {
  //   return (
  //     <TouchableOpacityRowVise onPress={()=>{
  //       console.log(index)
  //       if(index == 0 )
  //       {setIsReport(false);
  //       setIsIssue(true)}
  //       }} style={styles.popUpMenuItemsContainer}>
  //       <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
  //       <TextRowVise style={selectdLanguage == 'ar' ? [styles.itemText, { marginRight: width(2.5) }] : styles.itemText} numberOfLines={1} >{item.title}</TextRowVise>
  //     </TouchableOpacityRowVise>
  //   );
  // };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      isVisible={isVisible}
      style={isIssue ? { justifyContent: 'center' } : {}}>

      <TouchableOpacity activeOpacity={1} onPress={()=>{
        setIsReport(false)
      }}
      style={{flex:1}}
      > 
      {isReport && (
        <View style={styles.popUpMenuContainer}>  
          <TouchableOpacityRowVise
            // onPress={() => {
            //   setIsReport(false);
            //   setIsIssue(true);
            // }}
            style={styles.popUpMenuItemsContainer}>
            <AntDesign name='sharealt' size={totalSize(1.75)} color={Colors.black} />
            <TextRowVise
              style={
                selectdLanguage == 'ar'
                  ? [styles.itemText, { marginRight: width(2.5) }]
                  : styles.itemText
              }
              numberOfLines={1}>
              {languageJson2.InviteFriends_Label}
            </TextRowVise>
          </TouchableOpacityRowVise>
          <TouchableOpacityRowVise
            onPress={() => {
              setIsReport(false);              
            }}
            style={styles.popUpMenuItemsContainer}>
            <AntDesign1 name='bookmark' size={totalSize(1.75)} color={Colors.black} />
            <TextRowVise
              style={
                selectdLanguage == 'ar'
                  ? [styles.itemText, { marginRight: width(2.5) }]
                  : styles.itemText
              }
              numberOfLines={1}>
             Add to favorite
            </TextRowVise>
          </TouchableOpacityRowVise>      
        <TouchableOpacityRowVise
            onPress={() => {
              setIsReport(false);
              setIsIssue(true);
            }}
            style={styles.popUpMenuItemsContainer}>
            <Image
              source={require('../../assets/OverViewDetailAssets/flag.png')}
              style={styles.itemImage}
              resizeMode="contain"
            />
            <TextRowVise
              style={
                selectdLanguage == 'ar'
                  ? [styles.itemText, { marginRight: width(2.5) }]
                  : styles.itemText
              }
              numberOfLines={1}>
              {languageJson1.Report_Label}
            </TextRowVise>
          </TouchableOpacityRowVise>              
        </View>
      )}
      {isIssue ? (
        <View style={styles.issueModalContainer}>
          <Text style={styles.headingText}>kindly describe your problem</Text>
          <View style={styles.textFieldCotainer}>
            <TextInput
              placeholder={'Describe your Problem'}
              autoCapitalize="none"
              placeholderTextColor={Colors.placeHolderTextColor}
              multiline={true}
              style={styles.textInput}
            />
          </View>
          <Button
            containerStyle={styles.submitButton}
            title="Submit"
            onPress={() => setIsIssue(!isIssue)}
          />
        </View>
      ) : (
          <View style={styles.modalContainer}>
            <ScrollView
              contentContainerStyle={styles.scroll}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: height(2) }}>
              <View>
                <View style={styles.sliderBoxContainer}>
                  <SliderBox
                    images={images}
                    parentWidth={width(90)}
                    disableOnPress={true}
                    sliderBoxHeight={height(35)}
                    dotColor="transparent"
                    dotStyle={styles.dotStyle}
                    ImageComponentStyle={styles.sliderImage}
                    paginationBoxStyle={{ alignSelf: 'flex-start' }}
                    paginationBoxVerticalPadding={height(3)}
                  />
                  <View style={styles.crossButtonContainer}>
                    <TouchableOpacity
                      style={styles.crossButton}
                      onPress={onClosed}>
                      <Image
                        source={multiplyImage}
                        resizeMode="contain"
                        style={styles.multiplyImage}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.priceContainer}>
                    <View style={styles.priceView}>
                      <Text style={styles.pricetext}>
                        {isDollar
                          ? (Number(selectedItem.price) * sarToDollar).toFixed(
                            toFixed,
                          )
                          : Number(selectedItem.price)}
                        <Text style={styles.currency}>
                          {selectedCurrency == 'USD' ? '$' : 'SAR'}
                        </Text>
                      </Text>
                      <View style={styles.perUnitContainer}>
                        <Text style={styles.perUnit}>{selectedItem.perUnit}</Text>
                      </View>
                    </View>
                  </View>
                  {/* <View style={styles.buttonContainer}>
                  <TouchableOpacity>
                    <Image source={angleLeft} style={styles.angleLeft} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={angleRight} style={styles.angleRight} />
                  </TouchableOpacity>
                </View> */}
                </View>
                <View style={styles.itemNameContainer}>
                  <Text style={styles.itemNameText}>{selectedItem.title}</Text>
                  {
                    <>
                      <TouchableOpacity onPress={() => setIsReport(!isReport)}>
                        <Entypo
                          name="dots-three-horizontal"
                          size={width(7)}
                          color={Colors.textRedColor}
                        />
                        {/* <Text style={styles.reportText}>Report Us</Text> */}
                      </TouchableOpacity>

                    </>
                  }
                </View>
                <TouchableOpacity onPress={()=>{
                    onClosed()
                    navigation.navigate('Rating')
                  }} style={styles.ratingStarsContainer}>
                  
                    <AirbnbRating
                      count={5}
                      defaultRating={4}
                      showRating={false}
                      isDisabled={true}
                      selectedColor={Colors.starColors}
                      starContainerStyle={{ padding: 0, margin: 0 }}
                      size={totalSize(1.8)}
                    />
                  <Text style={styles.ratingText}>4.0</Text>
                  <Text style={[styles.ratingText,{fontWeight:"normal",fontSize:12}]}>(224)</Text>
                </TouchableOpacity>
                <View style={styles.itemNamePicContainer}>
                  <Text style={styles.panCakeText}>{selectedItem.category}</Text>
                  <Image
                    source={ellipseImage}
                    style={styles.ellipseImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.HoneyText}>{selectedItem.subCat}</Text>
                </View>
                <ViewRowVise style={styles.storeContainer}>
                  <TextRowVise style={styles.tagText}>
                    {languageJson.Store}:
                </TextRowVise>
                  <TouchableOpacity onPress={onStorePress}>
                    <TextRowVise style={styles.storeName}>
                      Pasha Creez Bar
                  </TextRowVise>
                  </TouchableOpacity>
                </ViewRowVise>
                <View style={styles.tagsContainer}>
                  <TextRowVise style={styles.tagText}>
                    {languageJson.Tags_Heading}
                  </TextRowVise>
                  <FlatList
                    ItemSeparatorComponent={() => (
                      <View style={styles.itemSeparator} />
                    )}
                    style={styles.itemFlatlistContainer}
                    data={selectedItem.tags}
                    showsHorizontalScrollIndicator={false}
                    renderItem={_showTags}
                    horizontal={true}
                    keyExtractor={item => item.key}
                  />
                </View>
                <View style={styles.descriptionTextContainer}>
                  <TextRowVise style={styles.descriptionText}>
                    {languageJson.Description_Heading}
                  </TextRowVise>
                  <Text style={styles.allDescriptionText}>
                    {selectedItem.description}
                  </Text>
                </View>
              </View>
            </ScrollView>
            {isCartHide ? null : isCart ? (
              <TouchableOpacity
              style={[styles.addtocartedButton,{backgroundColor:'#0084C4'}]}
              onPress={() => {
                onChange();
                setIsCart(!isCart);
              }}>
              <Text style={styles.addToCartText}>
                {languageJson.DeleteCart_Button}
              </Text>
            </TouchableOpacity>
              // <SwipeRow
              //   disableRightSwipe={true}
              //   rightOpenValue={-60}
              //   swipeKey={1}>
              //   <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
              //     <TouchableOpacity
              //       style={styles.button}
              //       onPress={() => {
              //         onChange();
              //         setIsCart(!isCart);
              //       }}>
              //       <Image
              //         source={trashImage}
              //         style={styles.trashImage}
              //         resizeMode="contain"
              //       />
              //     </TouchableOpacity>
              //   </View>
              //   <ViewRowVise style={styles.swipeContentContainerStyle}>
              //     <Image
              //       source={checkmarkImage}
              //       style={styles.checkmarkImage}
              //       resizeMode="contain"
              //     />
              //     <Text style={styles.addedToCartText}>
              //       {languageJson.Addedtocart_Button}
              //     </Text>
              //   </ViewRowVise>
              // </SwipeRow>
            ) : (
                <TouchableOpacity
                  style={styles.addtocartedButton}
                  onPress={() => {
                    onChange();
                    setIsCart(!isCart);
                  }}>
                  <Text style={styles.addToCartText}>
                    {languageJson.Addtocart_Button}
                  </Text>
                </TouchableOpacity>
              )}
          </View>
        )}
        </TouchableOpacity> 
    </Modal>
  );
}
