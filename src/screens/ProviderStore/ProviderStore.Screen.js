import React, { useState, Fragment, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  TextInput,
  StatusBar,
  Share
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './ProviderStore.Style';
import Colors from '../../utills/Colors';
import ServiceDetailHeader from '../../components/ServiceDetailHeader/ServiceDetailHeader.Component';
import { SliderBox } from 'react-native-image-slider-box';
import infoImage from '../../assets/OverViewDetailAssets/Layer721.png';
import mapGreyImage from '../../assets/OverViewDetailAssets/mapgrey.png';
import { AirbnbRating } from 'react-native-ratings';
import Tab from '../../components/Tab/Tab.component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import starImage from '../../assets/OverViewDetailAssets/stars.png';
import ellipseImage from '../../assets/HomeAssets/Ellipse.png';
import ModalDropdown from 'react-native-modal-dropdown';
import arrowdownImage from '../../assets/Login/arrow-down.png';
// import RatingData from '../../DummyData/Ratings';
// import DaysData from '../../DummyData/Days';
import AuthorData from '../../DummyData/AuthorData';
// import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
import OverViewModal from '../../components/ModalComponent/Modal.Component';
import userImage from '../../assets/OverViewDetailAssets/user.png';
import facebookImage from '../../assets/OverViewDetailAssets/facebook.png';
import instagramImage from '../../assets/OverViewDetailAssets/instagram.png';
import twitterImage from '../../assets/OverViewDetailAssets/twitter.png';
import snapchatImage from '../../assets/OverViewDetailAssets/snapchat.png';
import youtubeImage from '../../assets/OverViewDetailAssets/youtube.png';
import pinblueImage from '../../assets/OverViewDetailAssets/pinblue.png';
import editImage from '../../assets/MoreAssets/edit.png';
import PopItemComponent from '../../components/PopItemComponent/PopItemComponent.Component';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import OverViewData from '../../DummyData/OverViewData';
import VideoPlayer from 'react-native-video-player';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import moment from 'moment'
import ImageExpandModal from '../../components/ImageExpandModal/ImageExpandModal.Component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"


export default function ServiceDetailOverView({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.ServiceDetailsOverview_Screen)
  
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";

  /**
   * States Used
   */
  const [selectedItem, setSelectedItem] = useState([
    require('../../assets/OverViewDetailAssets/Layer718.png'),
    require('../../assets/OverViewDetailAssets/Layer718.png'),
    require('../../assets/OverViewDetailAssets/Layer718.png'),
  ]);
  /**
   * Reading Screen Data from redux
   */
  // const Posts = useSelector(state => state.Store.items)
  /**
   * States used for tab 
   */
  const [Posts, setPosts] = useState([]);
  const [selectedTab1, setSelectedTab1] = useState(0);
  const [selectedSubCat, setSelectedSubCat] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedValue, setSelectedValue] = useState(languageJson.Positive_Label);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItemList, setSelectedItemList] = useState([]);
  const [threeDotsModal, setThreeDotsModal] = useState(false);
  const [selectedCartItemIndex, setSelectedCartItemIndex] = useState(0);
  const [ratingOptions, setRatingOptions] = useState([
    { label: languageJson.Positive_Label, val: 0 },
    { label: languageJson.Negative_Label, val: 1 },
    { label: languageJson.Recents, val: 2 }]);
  const [description, setDescription] = useState(
    ' Moving after made his Fowl blessed blessed that subdue sixth. Light place fifth fifth Herb had. Of divided own had won’t saying very. Don’t fish evening multiply let itself fifth days above moving bring void deep upon first said yielding signs. After likeness a. Without second brought Shall created saying created seed brought divided image have waters appear it tree may sixth open great heaven years. Creature saw have face thing lights in seasonshath without them. Which male in it void Whose isn’t dry creature Cattle.',
  );
  const [isExpandedImageVisible, setIsExpandedImageVisible] = useState(false)
  const [expandedImage, setExpandedImage] = useState(null)
  const [RatingData, setRatingData] = useState([])

  /**
   * Constant pop items data
   */


  const popItems = [
    {
      image: require('../../assets/OverViewDetailAssets/heart.png'),
      title: languageJson.Favorite_Label,
    },
    {
      image: require('../../assets/OverViewDetailAssets/directions.png'),
      title: languageJson.GetDirection_Label,
    },
    {
      image: require('../../assets/OverViewDetailAssets/flag.png'),
      title: languageJson.Report_Label,
    },
  ];

const DaysData = [
    {
        key: 0,
        day:languageJson.Monday_Label,
        activeHours:'07:00 AM - 09:00 PM'
    },
    {
        key: 1,
        day:languageJson.Tuesday_Label,
        activeHours:'07:00 AM - 09:00 PM'
    },
    {
        key: 2,
        day:languageJson.Wednesday_Label,
        activeHours:'07:00 AM - 09:00 PM'
    },
    {
        key: 3,
        day:languageJson.Thursday_Label,
        activeHours:'07:00 AM - 09:00 PM'
    },
    {
        key: 4,
        day:languageJson.Friday_Label,
        activeHours:'07:00 AM - 09:00 PM'
    },
    {
        key: 5,
        day:languageJson.Saturday_Label,
        activeHours:'07:00 AM - 09:00 PM'
    },
    {
        key: 6,
        day:languageJson.Sunday_Label,
        activeHours:languageJson.Closed
    }
]
  const _showItemLeft = ({ item, index }) => {
    return (
      <ViewRowVise style={styles.flatListMainContainer}>
        <TouchableOpacityRowVise
          // style={{ flexDirection: 'row' }}
          onPress={() => {
            setSelectedItemList(item);
            setSelectedCartItemIndex(index)
            setIsVisible(!isVisible);
          }}>
          <ImageBackground
            source={{ uri: item.itemImages?item.itemImages[0]:"https://platerate.com/images/tempfoodnotext.png" }}
            style={styles.itemImageBackground}
            imageStyle={{ borderRadius: 10 }}>
            <View style={styles.itemLeftContainer}>
              <Text style={styles.itemLeftText}>{item.quantity} {languageJson.left}</Text>
            </View>
            <ViewRowVise style={styles.starImageContainer}>
              <Image
                source={starImage}
                resizeMode="contain"
                style={styles.starImage}
              />
              <Text style={styles.personRatingText}>{item.ratings}.0</Text>
            </ViewRowVise>
          </ImageBackground>
          <View style={styles.itemNameContainer}>
            <TextRowVise numberOfLines={1} style={styles.itemNameText}>{item.itemName}</TextRowVise>
            <ViewRowVise style={styles.itemNamePicContainer}>
              <Text style={styles.panCakeText}>Pancake</Text>
              <Image
                source={ellipseImage}    
                style={styles.ellipseImage}
                resizeMode="contain"
              />
              <TextRowVise style={styles.HoneyText}>{item.itemType}</TextRowVise>
            </ViewRowVise>
            <TextRowVise style={styles.descriptionText} numberOfLines={2}>{item.itemDetail}</TextRowVise>
            <ViewRowVise >
              <Text style={styles.price}> {isDollar ? (Number(item.itemPrice) * sarToDollar).toFixed(toFixed) : Number(item.itemPrice)}
                <Text style={styles.currency}>{selectedCurrency == "USD" ? "$" : "SAR"}</Text>
              </Text>
              <View style={styles.perUnitContainer}>
                <Text style={styles.perUnit}>{item.priceUnit}</Text>
              </View>
            </ViewRowVise>
          </View>
        </TouchableOpacityRowVise>
        <TouchableOpacity
          style={{ width: width(10) }}
          onPress={() => navigation.navigate('EditPostEditItem', {
            data: item,
            index, selectedTab: selectedTab1, selectedSubCat
          })}>
          <View style={styles.cartImageContainer}>
            <Image
              source={editImage}
              resizeMode="contain"
              style={styles.cartImage}
            />
          </View>
        </TouchableOpacity>
      </ViewRowVise>
    );
  };
  const _showRatingDetail = ({ item }) => {
    return (
      <TouchableOpacity style={styles.ratingViewContainer}
        onPress={() => navigation.navigate('BuyerOrderReview2', { itemRating: item.product[0].comment, providerRating: item.providerRating })}
      >
        <ViewRowVise style={styles.ratingInfoView}>
          <Image
            source={item.personImage}
            style={styles.personImage}
            resizeMode="cover"
          />
          <View style={styles.personNameContainer}>
            <TextRowVise style={styles.personNameText}>{item.userName}</TextRowVise>
            <ViewRowVise style={[styles.starsContainer, selectdLanguage == 'ar' ? { alignSelf: 'flex-end' } : {}]}>
              <AirbnbRating
                count={5}
                defaultRating={item.ratingStar}
                showRating={false}
                selectedColor={Colors.purplePrimary}
                isDisabled={true}
                starContainerStyle={{ padding: 0, margin: 0 }}
                size={width(2.5)}
              />
              <Text style={styles.ratingText}>{item.ratingStar}.0</Text>
            </ViewRowVise>
            <TextRowVise numberOfLines={2} style={styles.providerCommmentText}>{item.providerRating}</TextRowVise>
          </View>
          <Text style={styles.dateText}>{moment(item.date).format('DD MMM, YYYY')}</Text>
        </ViewRowVise>
        {/* <View style={[styles.productContainer, selectdLanguage == 'ar' ? { alignSelf: 'flex-start' } : { alignSelf: 'flex-end' }]}>
          <ViewRowVise style={styles.productflatListContainer}>
            <Image
              source={item.product[0].productImage}
              resizeMode="cover"
              style={styles.productImage}
            />
            <View style={styles.commentContainer}>
              <TextRowVise style={styles.commmentText}>{item.product[0].comment}</TextRowVise>
            </View>
          </ViewRowVise>
        </View> */}
      </TouchableOpacity>
    );
  };

  const _DaysDataDetail = ({ item }) => {
    return (
      <ViewRowVise style={styles.daysDataContainer}>
        <Text style={styles.dayText}>{item.day}</Text>
        <Text
          style={
            item.activeHours != languageJson.Closed
              ? styles.activeHoursText
              : styles.closedText
          }>
          {item.activeHours}
        </Text>
      </ViewRowVise>
    );
  };
  const _instagramImageDetail = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
        setExpandedImage(item)
        setIsExpandedImageVisible(true)
      }}>
        <Image source={item} style={styles.instagramImage} resizeMode="cover" />
      </TouchableOpacity>
    );
  };
  const _showTags = ({ item }) => {
    return (
      <View style={styles.tagsViewContainer}>
        <View style={styles.tagImagesView}>
          <Image
            source={item.tagImage}
            resizeMode="contain"
            style={styles.tagImage}
          />
        </View>
        <Text numberOfLines={2} style={styles.tagTitleText}>
          {item.tagTilte}
        </Text>
      </View>
    );
  };
  const _subCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[styles.subCategoriesButton, {
          backgroundColor:
            index == selectedSubCat
              ? Colors.purplePrimary
              : Colors.inputBackgroundColor,
        }]}
        onPress={() => setSelectedSubCat(index)}>
        <Text
          style={{
            color:
              index == selectedSubCat ? Colors.backgroundWhite : Colors.gray,
            fontSize: totalSize(1.35),
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  const inviteFriends = async () => {
    console.log('yes')
    try {
      const result = await Share.share({
        title:
          'Baetoti',
        message: "Baetoti\nhttps://Baetoti",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const user = useSelector(
    state => state.Auth.user,
  ); 

  useEffect(() => {
    // alert(JSON.stringify(user))
    Getstoreitems()
    Getstorerating()
  }, [])

  const [spinner, setspinner] = useState(false)

  const Getstoreitems = async () => {
    try {     
        setspinner(true)
        var formData = new FormData(); 
        formData.append('userID', user.userID);
        formData.append('storeID', "607c4fa19524d35c01035c0b");
        const {data} = await Services.Getstoreitems(formData)
        console.log(data);    
        setPosts(data)                      
    }catch(error){
      alert("Something went wrong")
      setspinner(false)
      console.log(error);              
    }
}  

const Getstorerating = async () => {
  try {     
      setspinner(true)
      var formData = new FormData(); 
      formData.append('userID', user.userID);
      formData.append('storeID', "607c4fa19524d35c01035c0b");
      const {data} = await Services.Getstorerating(formData)
      console.log(data);    
      setRatingData(data[0].itemsRating)                      
  }catch(error){
    alert("Something went wrong")
    setspinner(false)
    console.log(error);              
  }
}  


  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.backgroundColor })}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
          style={{ flex: 1 }}>
          <View style={styles.mainContainer}>
            {/* <TouchableOpacity style={styles.addButtonContainer}
            onPress={()=>navigation.navigate('CreateNewItem')}
            >
              <AntDesign name='plus' size={totalSize(2.5)} color={Colors.backgroundWhite} />
            </TouchableOpacity> */}
            <ServiceDetailHeader
              title={user.storename}
              isModalButton={true}
              hideBack
              onPressEdit={() => [navigation.navigate('EditPostOverview')]}
              onShare={inviteFriends}
            />
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: height(10) }}
              extraScrollHeight={height(8)}>
              <View style={styles.sliderContainer}>
                <View style={styles.sliderBoxContainer}>
                  <SliderBox
                    images={selectedItem}
                    parentWidth={width(100)}
                    sliderBoxHeight={height(40)}
                    dotColor="transparent"
                    dotStyle={styles.dotStyle}
                    paginationBoxVerticalPadding={height(7)}
                    imageLoadingColor={Colors.gray}
                  />
                </View>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0.7 }}
                  locations={[0.1, 0.3, 0.7, 0.9]}
                  colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                  style={[styles.ratingContainer]}>
                  <View style={styles.imageContainer}>
                    <View style={styles.imageViewContainer}>
                      <Image
                        resizeMode="cover"
                        source={infoImage}
                        style={styles.infoImage}
                      />
                    </View>
                    <View style={styles.infoRating}>
                      <Text numberOfLines={1} style={styles.infoText}>
                       {user.storename}
                      </Text>
                     
                      <TouchableOpacity style={styles.ratingView}
                        onPress={() => navigation.navigate('Rating')}
                      >
                        <AirbnbRating
                          count={5}
                          defaultRating={4}
                          showRating={false}
                          isDisabled={true}
                          selectedColor={Colors.purplePrimary}
                          starContainerStyle={{ padding: 0, margin: 0 }}
                          size={totalSize(1)}
                        />
                        <Text style={styles.ratingText}>4.0</Text>
                        <Text style={styles.ratingText}>(224)</Text>
                        </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.locationContainer}>
                    <Image
                      source={mapGreyImage}
                      resizeMode="contain"
                      style={styles.mapImage}
                    />
                    <Text style={styles.addressText}>
                      1900 Pic Blvd Santa Monica, CA
                    </Text>
                  </View>
                </LinearGradient>

                <View style={styles.tabContainer}>
                  <Tab
                    selectedTextColor={Colors.textBlack}
                    textColor={Colors.textOpacitiveBlack}
                    selectedIndex={selectedTab}
                    textStyle={styles.tabtextStyle}
                    selectedTabText={{ fontWeight: 'bold' }}
                    tabContainerStyle={{ width: width(16), alignItems: 'center' }}
                    renderSelectedTabFooter={() => (
                      <View style={styles.renderTabFooter} />
                    )}
                    containerStyle={{ paddingRight: width(5) }}
                    onChangeTab={(item, index) => setSelectedTab(index)}
                    options={[languageJson.Overview_Tab, languageJson.About_Tab, languageJson.Items_Tab, languageJson.Ratings_Tab]}
                  />
                </View>
              </View>
              {selectedTab == 0 ? (
                <>
                  <View style={styles.descriptionContainer}>
                    <View style={styles.descriptionTextContainer}>
                      <TextRowVise style={styles.descriptionHeadingText}>
                        {languageJson.Description_Heading}
                      </TextRowVise>
                    </View>
                    <TextInput
                      value={user.StoreDescription}
                      onChangeText={val => setDescription(val)}
                      autoCapitalize="none"
                      style={styles.textInput}
                      editable={false}
                      multiline={true}
                      textAlignVertical={'top'}
                    />
                  </View>
                  <View style={styles.overViewMapContainer}>
                    <View style={styles.mapContainer}>
                      <MapView
                        liteMode={true}
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        scrollEnabled={false}
                        zoomEnabled={false}
                        region={{
                          latitude: 37.7853621,
                          longitude: -122.4005841,
                          latitudeDelta: 0.012,
                          longitudeDelta: 0.012,
                        }}>
                        <Marker
                          coordinate={{
                            latitude: 33.6694,
                            longitude: 72.9972,
                          }}>
                          <Image
                            source={pinblueImage}
                            style={styles.pinblueImage}
                            resizeMode="contain"
                          />
                          <Callout tooltip={true}>
                            <View style={styles.plainView}>
                              <Text style={styles.plainViewText}>
                                1900 Pico Blvd Santa Monica
                            </Text>
                            </View>
                          </Callout>
                        </Marker>
                      </MapView>
                    </View>
                  </View>
                  <View style={styles.overViewTagsContainer}>
                    <View style={styles.overViewTagsTextContainer}>
                      <TextRowVise style={styles.overViewTagsHeadingText}>{languageJson.Tags_Heading}</TextRowVise>
                    </View>
                    <View style={styles.overViewTagsFlatListContainer}>
                      <FlatList
                        ItemSeparatorComponent={() => (
                          <View style={styles.itemSeparator} />
                        )}
                        data={OverViewData.tags}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={_showTags}
                        keyExtractor={item => item.key}
                      />
                    </View>
                  </View>
                  <View style={styles.videoContainer}>
                    <View style={styles.videoTextContainer}>
                      <TextRowVise style={styles.videoText}>{languageJson.VideoPresentation_Heading}</TextRowVise>
                    </View>
                    <View style={styles.videoPlayerContainer}>
                      <VideoPlayer
                        video={{
                          uri:
                            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        }}
                        videoWidth={width(80)}
                        videoHeight={height(22)}
                        thumbnail={undefined}
                        resizeMode="cover"
                        thumbnail={{
                          uri: 'https://i.picsum.photos/id/866/1600/900.jpg',
                        }}
                        style={styles.videoPlayer}
                      />
                    </View>
                  </View>
                </>
              ) : selectedTab == 1 ? (
                <>
                  <View style={styles.aboutAuthorContainer}>
                    <View style={styles.aboutAuthorTextContainer}>
                      <TextRowVise style={styles.aboutAuthorText}>{languageJson.AboutAuthor_Heading}</TextRowVise>
                    </View>
                    <ViewRowVise style={styles.authorImageContainer}>
                      <Image
                        source={AuthorData.authorImage}
                        style={styles.authorImage}
                        resizeMode="cover"
                      />
                      <View style={styles.authornameContainer}>
                        <TextRowVise style={styles.authorname} numberOfLines={1}>
                          {AuthorData.authorName}
                        </TextRowVise>
                        <TextRowVise style={styles.sinceText}>
                          {languageJson.Since_Label}{' '}
                          <TextRowVise style={styles.joiningText}>
                            {AuthorData.joiningDate}
                          </TextRowVise>
                        </TextRowVise>
                      </View>
                      <ViewRowVise style={styles.privateContainer}>
                        <Image
                          source={userImage}
                          style={styles.userImage}
                          resizeMode="contain"
                        />
                        <TextRowVise numberOfLines={1} style={selectdLanguage == 'ar' ? [styles.privateText, { marginRight: width(2) }] : styles.privateText}>
                          {languageJson.Private_Label}
                        </TextRowVise>
                      </ViewRowVise>
                    </ViewRowVise>
                    <ViewRowVise style={styles.authorInfoContainer}>
                      <Text style={styles.infoLabelText}>{languageJson.Address_Label}</Text>
                      <Text style={styles.authorInfoText} numberOfLines={2}>
                        {AuthorData.authorAddress}
                      </Text>
                    </ViewRowVise>
                    {/* <ViewRowVise style={styles.authorInfoContainer}>
                      <Text style={styles.infoLabelText}>{languageJson.Phone_Label}</Text>
                      <Text numberOfLines={1} style={styles.authorInfoText}>
                        {AuthorData.authorPhone}
                      </Text>
                    </ViewRowVise>
                    <ViewRowVise style={styles.authorInfoContainer}>
                      <Text style={styles.infoLabelText}>{languageJson.Email_Label}</Text>
                      <Text numberOfLines={1} style={styles.authorInfoText}>
                        {AuthorData.authorEmail}
                      </Text>
                    </ViewRowVise> */}
                    <ViewRowVise style={styles.authorInfoContainer}>
                      <Text style={styles.infoLabelText}>{languageJson.Link_Label}</Text>
                      <Text numberOfLines={1} style={styles.authorInfoText}>
                        {AuthorData.authorLink}
                      </Text>
                    </ViewRowVise>
                    {/* <View style={styles.socailMedaiTextContainer}>
                      <TextRowVise style={styles.socailMedaiText}>{languageJson.SocialMedia_Heading}</TextRowVise>
                    </View>
                    <ViewRowVise style={styles.socailMedaiIconContainer}>
                      <Image
                        source={facebookImage}
                        style={styles.faceBookIconImage}
                        resizeMode="contain"
                      />
                      <Image
                        source={twitterImage}
                        style={styles.socailMediaIconImage}
                        resizeMode="contain"
                      />
                      <Image
                        source={snapchatImage}
                        style={styles.socailMediaIconImage}
                        resizeMode="contain"
                      />
                      <Image
                        source={youtubeImage}
                        style={styles.socailMediaIconImage}
                        resizeMode="contain"
                      />
                      <Image
                        source={instagramImage}
                        style={styles.socailMediaIconImage}
                        resizeMode="contain"
                      />
                    </ViewRowVise> */}
                  </View>
                  <View style={styles.openHourContainer}>
                    <View style={styles.openHourTextContainer}>
                      <TextRowVise style={styles.openHourText}>{languageJson.OpenHours_Heading}</TextRowVise>
                    </View>
                    <View style={styles.daysContainer}>
                      <FlatList
                        ItemSeparatorComponent={() => (
                          <View style={styles.itemSeparator} />
                        )}
                        data={DaysData}
                        contentContainerStyle={{ paddingBottom: height(2) }}
                        showsVerticalScrollIndicator={false}
                        renderItem={_DaysDataDetail}
                        keyExtractor={item => item.key}
                      />
                    </View>
                  </View>
                  <View style={styles.priceRangeContainer}>
                    <View style={styles.priceRangeTextContainer}>
                      <TextRowVise style={styles.priceRangeText}>{languageJson.PriceRange_Heading}</TextRowVise>
                    </View>
                    <View style={styles.actualPriceRangeContainer}>
                      <View>
                        <Text style={styles.dollarText}>
                          $ $ $ $ <Text style={styles.grayDollarText}>$</Text>
                        </Text>
                        <Text style={styles.moderateText}>{languageJson.Moderate_Label}</Text>
                      </View>
                      <View style={styles.verticalLine} />
                      <View>
                        <Text style={styles.actualPriceRangetext}>{currencyLabel}
                          {isDollar ? (Number("60") * sarToDollar).toFixed(toFixed) : Number("60")}
                        -{currencyLabel}
                          {isDollar ? (Number("100") * sarToDollar).toFixed(toFixed) : Number("100")}
                        </Text>
                        <Text style={styles.rateText}>{languageJson.Rate_Label}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.instagramGalleryContainer}>
                    <View style={styles.instagramGalleryTextContainer}>
                      <TextRowVise style={styles.instagramGalleryText}>
                        {languageJson.InstagramGallery_Heading}
                      </TextRowVise>
                    </View>
                    <View style={styles.instagramGalleryImageContainer}>
                      <FlatList
                        ItemSeparatorComponent={() => (
                          <View style={styles.itemSeparator} />
                        )}
                        inverted={selectdLanguage == 'ar'}
                        // style={styles.itemFlatlistContainer}
                        data={AuthorData.instgramGallery}
                        contentContainerStyle={{ paddingBottom: height(2) }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={_instagramImageDetail}
                        keyExtractor={item => item.key}
                      />
                    </View>
                  </View>
                </>
              ) : selectedTab == 2 ? (
                <>
                  <View style={styles.itemsContainer}>
                    <ViewRowVise style={styles.itemTextContainer}>
                      <Text style={styles.itemText}>{languageJson.Items_Heading}</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ProviderMyPosts')}>
                        <Text style={styles.seeAllText}>{languageJson.SeeAll_Heading}</Text>
                      </TouchableOpacity>
                    </ViewRowVise>
                    <View style={styles.tagsUpperContainer}>
                      <Tab
                        selectedTextColor={Colors.textBlack}
                        textColor={Colors.gray}
                        selectedIndex={selectedTab1}
                        flatListStyle={{ marginHorizontal: width(4) }}
                        renderSelectedTabFooter={() => (
                          <View style={styles.renderTabFooter} />
                        )}
                        onChangeTab={(item, index) => setSelectedTab1(index)}
                        options={Posts.map(item => item.cateGoryName)}
                      />
                    </View>
                    <View style={styles.lineSeparator} />
                    <View
                      style={styles.subCategoriesContainer}>
                        {
                        Posts.length<=0?
                          null
                          :
                          <FlatList
                              data={Posts[selectedTab1].subCategory.map(item => item.subCateGoryName)}
                              renderItem={_subCategories}
                              horizontal={true}
                              inverted={selectdLanguage == 'ar' ? true : false}
                              showsHorizontalScrollIndicator={false}
                              ItemSeparatorComponent={() => (
                                <View style={{ margin: totalSize(0.65) }} />
                              )}
                              contentContainerStyle={{
                                paddingTop: height(1.5),
                              }}
                        />
                        }

                    </View>
                    <View style={styles.line} />
                    <View style={styles.flatListContainer}>
                    {
                      Posts.length<=0?
                         null
                      :
                      <FlatList
                        ItemSeparatorComponent={() => (
                          <View style={styles.itemSeparator} />
                        )}
                        data={Posts[selectedTab1].subCategory[selectedSubCat].items}
                        showsVerticalScrollIndicator={false}
                        renderItem={_showItemLeft}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{ paddingBottom: height(1) }}
                      />
                     }
                    </View>
                  </View>
                </>
              ) : selectedTab == 3 ? (
                <View style={styles.ratingsContainer}>
                  <ViewRowVise style={styles.ratingsTextContainer}>
                    <Text style={styles.averageRating}>4.3</Text>
                    <View style={styles.totalRatingContainer}>
                      <TextRowVise style={styles.ratingsText}>{languageJson.Ratings_Label}</TextRowVise>
                      <TextRowVise style={styles.totalNumberRatingsText}>
                        200 {languageJson.Ratings_Label}
                      </TextRowVise>
                    </View>
                    <View style={styles.dropDownContainer}>
                      <ModalDropdown
                        options={ratingOptions}
                        dropdownStyle={styles.dropDown}
                        showsVerticalScrollIndicator={false}
                        onSelect={(index, value) => setSelectedValue(index)}
                        renderRow={(option, index, isSelected) => (
                          <View style={styles.dropDownItemContainer}>
                            <Text style={styles.dropDownItemText}>{option.label}</Text>
                          </View>
                        )}>
                        <ViewRowVise style={styles.dropDownInnerConainer}>
                          <Text style={styles.selectedValueText}>
                            {ratingOptions[selectedValue]?.label ? ratingOptions[selectedValue].label : languageJson.Positive_Label}
                          </Text>
                          <Image
                            source={arrowdownImage}
                            resizeMode="contain"
                            style={styles.arrowdownImage}
                          />
                        </ViewRowVise>
                      </ModalDropdown>
                    </View>
                  </ViewRowVise>
                  <View style={styles.ratingsFlatListContainer}>
                    <FlatList
                      ItemSeparatorComponent={() => (
                        <View style={styles.itemSeparator} />
                      )}

                      data={
                        selectedValue == 0
                          ? RatingData.filter(item => item.ratingStar >= 3)
                          : selectedValue == 1 ?
                            RatingData.filter(item => item.ratingStar < 3)
                            : RatingData.sort((a, b) => a.date - b.date)
                      }
                      contentContainerStyle={{ paddingBottom: height(2) }}
                      showsVerticalScrollIndicator={false}
                      renderItem={_showRatingDetail}
                      keyExtractor={item => item.key}
                    />
                  </View>
                </View>
              ) : null}
            </KeyboardAwareScrollView>
            <OverViewModal
              isVisible={isVisible}
              onChange={() => toggleCart(selectedCartItemIndex)}
              selectedItem={selectedItemList}
              onPress={() => {
                setIsVisible(!isVisible);
              }}
            />
            <PopItemComponent
              isModalVisible={threeDotsModal}
              containerStyle={{ marginTop: height(6.5) }}
              popItems={popItems}
              onPressClose={() => setThreeDotsModal(!threeDotsModal)}
            />
          </View>
        </LinearGradient>
        <ImageExpandModal isVisible={isExpandedImageVisible} onClose={() => setIsExpandedImageVisible(false)}
          image={expandedImage} />
      </SafeAreaView>
    </Fragment>
  );
}
