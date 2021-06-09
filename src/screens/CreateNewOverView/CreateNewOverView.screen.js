import React, {useEffect, useState, createRef, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  StatusBar,
  SafeAreaView,
  Platform,
  Alert,
} from 'react-native';
import styles from './CreateNewOverView.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import Colors from '../../utills/Colors';
import StepIndicator from '../../components/StepIndicatorCreateNew/StepIndicatorCreateNew.component';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {totalSize, height} from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button/Button.component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  PERMISSIONS,
  requestMultiple,
  request,
  openSettings,
} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Popup from '../../components/PopUp/PopUp.Component';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector,useDispatch} from 'react-redux';
import Geocoder from 'react-native-geocoder';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TagsSelectionModal from '../../components/TagsSelectionModal/TagsSelectionModal.Component';
import postDataDummy from '../../DummyData/ProviderPost';
import { logout, setBuyer, setDriver } from '../../Redux/Actions/Auth';
import { setProvider, login } from '../../Redux/Actions/Auth';
export default function CreateNewOverView({navigation}) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.CreateNew_Overview_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const isStoreCreated = useSelector(
    state => state.Configuration.isStoreCreated,
  );
  /**
   * State used for Hide Location Switch
   */
  const dispatch = useDispatch();
  const [isHideLocation, toggleHideLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(false);
  const [latDelta, setLatDelta] = useState(0.02);
  const [lonDelta, setLonDelta] = useState(0.02);
  const [userLocation, setUserLocation] = useState({
    latitude: 37.7853621,
    longitude: -122.4005841
  });
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [address, setAddress] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('Please Wait');
  const [storeDesciption, setStoreDescription] = useState('');
  const [itemDetailsError, setItemDetailsError] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [unSelectedTags, setUnSelectedTags] = useState(postDataDummy.tags);
  const [tags, setTags] = useState([]);
  const [selectedTagIndex, setSelectedTagIndex] = useState(-1);
  const [timtle, settimtle] = useState("")

  const updateUnSelectedTags = () => {
    var newUnselectedTags = [];
    postDataDummy.tags.map(item => {
      let found = false;
      tags.map(datum => {
        if (datum.key == item.key) found = true;
      });
      if (!found) newUnselectedTags.push(item);
    });
    setUnSelectedTags(newUnselectedTags);
  };
  /**
   * Requesting Location Permission on Screen Load
   */
  useEffect(() => {
    requestPermission();
  }, []);
  /**
   * Function to remove a tag from tags array
   */
  const removeTag = index => {
    var newTags = [...tags];
    newTags = newTags.filter((item, i) => i != index);
    setTags(tags => (tags = [...newTags]));
  };
  /**
   * Function to add a tag from tags array
   */
  const addTag = tag => {
    var newTags = [...tags];
    newTags.push(tag);
    setTags(tags => (tags = [...newTags]));
  };
  /**
   * Create refernce for description textinput and search input
   */
  const description = createRef(null);
  const mapRef = useRef(null);
  /**
   * Update description text and also check for special characters
   */
  const updateDescription = val => {
    setStoreDescription(val);
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
    if (format.test(val)) {
      setItemDetailsError(true);
    } else {
      setItemDetailsError(false);
    }
  };
  /**
   * Permission Request Method
   */
  const requestPermission = () => {
    try {
      requestMultiple(
        Platform.select({
          ios: [
            PERMISSIONS.IOS.LOCATION_ALWAYS,
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          ],
          android: [
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
          ],
        }),
      ).then(statuses => {
        console.log(statuses);
        if (
          statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == 'granted' ||
          statuses[android.permission.ACCESS_BACKGROUND_LOCATION== 'granted']
        ) {
          Geolocation.getCurrentPosition(info => {
            setUserLocation({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            });
            mapRef.current.animateToRegion(
              {
                ...info.coords,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              },
              2000,
            );
            {
              Geocoder.geocodePosition({
                lat: info.coords.latitude,
                lng: info.coords.longitude,
              })
                .then(res => {
                  setAddress(res[0].formattedAddress);
                })
                .catch(err => console.log(err));
            }
          });
        } else {
          request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(result => {
            if (result == 'granted') {
              Geolocation.getCurrentPosition(info => {
                loc = {
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                };
                setLocation(loc);
                setUserLocation(loc);

                mapRef.current.animateToRegion(
                  {
                    ...loc,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                  },
                  1000,
                );
              }).catch(e => console.log(e));
            } else {
              Alert.alert(
                null,
                'We need Premission',
                [
                  {
                    text: 'Open Settings',
                    onPress: () => {
                      openSettings().catch(() =>
                        console.warn('cannot open settings'),
                      );
                    },
                    style: 'cancel',
                  },
                  {text: 'Close', onPress: () => {}},
                ],
                {cancelable: false},
              );
            }
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * Selecting Video from gallery
   */
  const uploadVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    }).then(video => {
      console.log(video);
    });
  };
  /**
   * Render Individual Tag
   */
  const renderTag = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.tagButtonContainer,
          {
            backgroundColor:
              index == selectedTagIndex
                ? Colors.purplePrimary
                : Colors.opacitivePurple,
          },
        ]}
        onPress={() => setSelectedTagIndex(index)}>
        {index != selectedTagIndex && (
          <Image
            source={{uri: item.imageUri}}
            style={styles.tagButtonImage}
            resizeMode={'contain'}
          />
        )}
        <Text
          style={[
            styles.tagButtonText,
            {
              color:
                index == selectedTagIndex
                  ? Colors.backgroundWhite
                  : Colors.purplePrimary,
            },
          ]}>
          {item.label}
        </Text>
        {index == selectedTagIndex && (
          <TouchableOpacity onPress={() => removeTag(index)}>
            <AntDesign
              name="close"
              color={Colors.backgroundWhite}
              size={totalSize(1.55)}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };


  
  const user = useSelector(
    state => state.Auth.user,
  );

  return (
    <React.Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      <SafeAreaView backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={styles.container}>
          {!isStoreCreated ? (
            <HeaderAddNew
              title={languageJson.CreateNew_Heading}
              hideRightIcon
              onPressBack={() => dispatch(setBuyer())}
              containerStyle={{marginTop: height(2)}}
            />
          ) : (
            <HeaderAddNew
              title={languageJson.CreateNew_Heading}
              hideRightIcon
              onPressBack={() => navigation.goBack()}
              containerStyle={{marginTop: height(2)}}
            />
          )}

          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            extraScrollHeight={height(8)}>
            <StepIndicator currentPosition={0} />
            <View style={styles.titleContainer}>
              <TextRowVise style={styles.titleHead}>
                {languageJson.Title_Heading}
              </TextRowVise>
              <TextInputRowVise
                style={styles.titleInputContainer}
                placeholder={languageJson.EnterName_PlaceHolder}
                placeholderTextColor={Colors.placeHolderTextColor}
                returnKeyType="next"
                onSubmitEditing={() => description.current.focus()}
                onChangeText={(text)=> settimtle(text)}
                
              />
            </View>
            <View style={styles.descriptionContainer}>
              <TextRowVise style={styles.inputTitle}>
                {languageJson.Description_Heading}
              </TextRowVise>
              <View style={styles.descriptionInputContainer}>
                <TextInputRowVise
                  textAlignVertical="top"
                  placeholder={languageJson.EnterDescription_PlaceHolder}
                  style={styles.descriptionInput}
                  placeholderTextColor={Colors.placeHolderTextColor}
                  multiline={true}
                  ref={description}
                  val={storeDesciption}
                  onChangeText={updateDescription}
                />
              </View>
            </View>
            {itemDetailsError && (
              <Text style={styles.errorText}>
                {languageJson.SpecialCharacterError}
              </Text>
            )}
            <View style={styles.locationContainer}>
              <ViewRowVise
                style={[
                  styles.inputLocationContainer,
                  {justifyContent: 'space-between'},
                ]}>
                {currentLocation ? (
                  <Text numberOfLines={1} style={styles.locationInput}>
                    {address}
                  </Text>
                ) : (
                  <TextInputRowVise
                    placeholder={languageJson.EnterLocation_placeHolder}
                    placeholderTextColor={Colors.placeHolderTextColor}
                    numberOfLines={1}
                    style={[styles.locationInput, {}]}
                  />
                )}
                <Text style={styles.currentLocationText}>
                  {languageJson.CurrentLocation_Button}
                </Text>
                <View style={styles.currentLocationContainer}>
                  <TouchableOpacity
                    style={styles.locationIconContainer}
                    onPress={
                      () => requestPermission()
                      // setCurrentLocation(true)
                    }>
                    <Image
                      source={require('../../assets/AddNewAssets/location.png')}
                      style={styles.locationIcon}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </View>
              </ViewRowVise>
              <ViewRowVise style={styles.hideLocationMainConainer}>
                <View
                  style={[
                    styles.hideLocationContainer,
                    {
                      backgroundColor: isHideLocation
                        ? Colors.purplePrimary
                        : Colors.placeHolderTextColor,
                    },
                  ]}>
                  <Switch
                    trackColor={{
                      false: 'transparent',
                      true: Colors.purplePrimary,
                    }}
                    thumbColor={
                      isHideLocation
                        ? Colors.backgroundWhite
                        : Colors.purplePrimary
                    }
                    onValueChange={() => {
                      setPopupVisible(true);
                      setPopupText(
                        isHideLocation
                          ? 'Your Location will be visible'
                          : 'Your location will be hidden and a circle of 500 meters will be shown',
                      );
                      toggleHideLocation(!isHideLocation);
                    }}
                    ios_backgroundColor={
                      isHideLocation
                        ? Colors.purplePrimary
                        : Colors.placeHolderTextColor
                    }
                    value={isHideLocation}
                  />
                </View>
                <Text style={styles.hideLocationText}>
                  {languageJson.HiddenAddress_Label}
                </Text>
              </ViewRowVise>
              <View style={styles.mapContainer}>
                <MapView
                  onPress={obj => {
                    setUserLocation(obj.nativeEvent.coordinate);
                    setLatDelta(0.02);
                    setLonDelta(0.02);
                    setLocation({
                      latitude: obj.nativeEvent.latitude,
                      longitude: obj.nativeEvent.longitude,
                    });
                    mapRef.current.animateToRegion(
                      {
                        ...obj.nativeEvent.coordinate,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                      },
                      1000,
                    );
                  }}
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  ref={mapRef}
                  region={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.012,
                  }}
                  // showsUserLocation={!isHideLocation}
                >
                  {isHideLocation ? (
                    <Circle
                      center={{
                        latitude: userLocation.latitude + 0.002,
                        longitude: userLocation.longitude,
                      }}
                      radius={500}
                      strokeColor={Colors.purplePrimary}
                      fillColor={'rgba(117, 81, 233, 0.1)'}
                    />
                  ) : (
                    <Marker
                      pinColor={Colors.purplePrimary}
                      coordinate={{
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                      }}
                    />
                  )}
                </MapView>
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <ViewRowVise style={styles.tagsUpperContainer}>
                <Text style={styles.inputTitle}>
                  {languageJson.Tags_Heading}
                </Text>
                <Text style={styles.optionalText}>
                  {languageJson.Optional_Label}
                </Text>
              </ViewRowVise>
              <TouchableOpacityRowVise
                style={styles.inputLocationContainer}
                onPress={() => {
                  updateUnSelectedTags();
                  setShowTagsModal(true);
                }}>
                <AntDesign
                  name="search1"
                  color={Colors.gray}
                  size={totalSize(2)}
                  style={styles.searchIconStyle}
                />
                <TextInput
                  placeholder={languageJson.SearchTags_placeHolder}
                  style={styles.searchTagInput}
                  returnKeyType="done"
                  editable={false}
                  placeholderTextColor={Colors.placeHolderTextColor}
                />
              </TouchableOpacityRowVise>
              <View style={styles.tagFlatlistContainer}>
                {tags.map(renderTag)}
              </View>
            </View>
            <View style={styles.tagsContainer}>
              <ViewRowVise style={styles.tagsUpperContainer}>
                <Text style={styles.inputTitle}>
                  {languageJson.VideoPresentation_Title}
                </Text>
                <Text style={styles.optionalText}>
                  {languageJson.Optional_Label}
                </Text>
              </ViewRowVise>
              <TouchableOpacityRowVise
                style={styles.inputLocationContainer}
                onPress={uploadVideo}>
                <View style={styles.uploadIconContainer}>
                  <Image
                    source={require('../../assets/AddNewAssets/cloud-upload.png')}
                    style={styles.locationIcon}
                    resizeMode={'contain'}
                  />
                </View>
                <Text style={styles.uploadVideoText}>
                  {languageJson.UploadPresentationVideo_Label}
                </Text>
              </TouchableOpacityRowVise>
              <View style={styles.orContainer}>
                <Text style={styles.or}>{languageJson.OR_Label}</Text>
              </View>
              <ViewRowVise style={styles.inputLocationContainer}>
                <Image
                  source={require('../../assets/AddNewAssets/youtube.png')}
                  style={styles.youtubeIcon}
                  resizeMode={'contain'}
                />
                <TextInputRowVise
                  placeholder={languageJson.OEnterYoutubeLink_Label}
                  style={styles.searchYoutubeInput}
                  returnKeyType="done"
                  placeholderTextColor={Colors.placeHolderTextColor}
                />
              </ViewRowVise>
            </View>
            <Button
              title={languageJson.Next_Button}
              onPress={() => {
                var usertext = user
                usertext["storename"] = timtle
                usertext["StoreDescription"] = storeDesciption
                dispatch(login(
                  usertext
              )) 
                navigation.navigate('CreateNewAbout')
              }}
            />
          </KeyboardAwareScrollView>
        </LinearGradient>
        <Popup
          isVisible={popupVisible}
          text={popupText}
          onRequsetClose={() => setPopupVisible(false)}
        />
        <TagsSelectionModal
          isVisible={showTagsModal}
          tags={unSelectedTags}
          onSelect={addTag}
          onClose={() => {
            setShowTagsModal(false);
          }}
        />
      </SafeAreaView>
      <SafeAreaView backgroundColor="#f6f6f6" />
    </React.Fragment>
  );
}
