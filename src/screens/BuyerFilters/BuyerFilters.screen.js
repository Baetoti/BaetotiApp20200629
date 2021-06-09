import React, { useState, createRef, useEffect } from 'react';
import Container from '../../components/BuyerHomeContainer/BuyerHomeContainer.component';
import Button from '../../components/Button/Button.component';
import { ScrollView, View } from 'react-native';
import styles from './BuyerFilters.styles';
import TextInput from './Components/TextInput';
import RangeSlider from './Components/RangeSlider'
import { height } from 'react-native-dimension';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';
import { useSelector, useDispatch } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import {NavigationAction } from '@react-navigation/native';
import { setCurrency, setRadiusInMeters, setProvidersFilter } from '../../Redux/Actions/Configuration'
import SettingComponent from '../../components/BuyerSetting/BuyerSetting.Component';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
export default function BuyerHome({ route, navigation }) {
  /**
   * Dispatch to save values in Redux for global access
   */
  const dispatch = useDispatch()
  /**
   * Ref for reseting range slider
   */
  const locationSliderRef = createRef(null)
  const priceSliderRef = createRef(null)
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Filter_Screen)
  const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
  const RADIUS = useSelector(state => state.Configuration.selectedRadiusInMeters)
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyOptions = useSelector(state => state.Configuration.currencyOptions)
  const providersFilter = useSelector(state => state.Configuration.showProviders)
  /**
   * States used for filtering data
   */
  const [cat, setCat] = useState('')
  const [subCat, setSubCat] = useState('')
  const [radius, setRadius] = useState(5)
  const [minLoc, setMinLoc] = useState(0)
  const [maxloc, setMaxLoc] = useState(200)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(100)
  const [location, setLocation] = useState('');
  const [providers, setProviders] = useState(providersFilter == 'all' ? languageJson.All :
    providersFilter == 'online' ? languageJson.Online_Label :
      languageJson.Offline_Label);
  /**
   * Reading Current Location of the user
   */
  const getLocation = () => {
    try {
      
      requestMultiple(
        Platform.select({
         ios:[PERMISSIONS.IOS.LOCATION_ALWAYS,PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
          android:[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION],
         })).then(statuses => {
        Geolocation.getCurrentPosition(info => {
          Geocoder.geocodePosition({
            lat: info.coords.latitude,
            lng: info.coords.longitude,
          }).then(res => {
            setLocation(res[0].formattedAddress)
          }).catch(err => console.log(err))
        })
      })
        .catch(e => console.log(e))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    locationSliderRef.current.setLowValue((RADIUS / 1000).toFixed(0))
    let meters = RADIUS;
    if (selectedDistanceUnit == "Km")
      meters = RADIUS / 1000;
    else
      meters = RADIUS/ 1000 * 1.609344;
      // console.log(meters)
    setRadius(meters)
  }, [])
  const onPressApply = () => {
    let meters = RADIUS;
    if (selectedDistanceUnit == "Km")
      meters = radius * 1000;
    else
      meters = radius * 1000 * 1.609344;
    dispatch(setRadiusInMeters(meters))
    navigation.goBack()
  }
  return (
    <Container
      onBackPress={() => navigation.goBack()}
      title={languageJson.Filter_Title}
      back
      onResetPress={() => {
        setMinLoc(0)
        setMaxLoc(200)
        setMinPrice(0)
        setMaxPrice(200)
        setCat('')
        setSubCat('')
        setLocation('')
        setRadius(5)
        locationSliderRef.current.setLowValue(5)
        locationSliderRef.current.setHighValue(200)
        priceSliderRef.current.setLowValue(0)
        priceSliderRef.current.setHighValue(200)
      }}
      reset>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: height(75) }}>
        <TextInput value={cat} onChange={(val) => setCat(val)} heading={languageJson.Categories_Heading} placeHolder={languageJson.Categories_PlaceHolder} />
        <TextInput disable={cat == '' ? true : false} value={subCat} onChange={(val) => setSubCat(val)} heading={languageJson.Subcategory_Heading} placeHolder={languageJson.Subcategory_PlaceHolder} />
        <TextInput onPress={getLocation} onChangeText={(val) => setLocation(val)} heading={languageJson.Location_Heading} value={location} placeHolder={languageJson.CurrentLocation_PlaceHolder} location />
        {/* <ModalDropdown
          options={currencyOptions}
          dropdownStyle={styles.dropDown}
          onSelect={(index, value) => dispatch(setCurrency(value))}
        >
          <SettingComponent
            nameTouchDisabled
            title={languageJson.Currency_PlaceHolder}
            image={angleRightImage}
            text={selectedCurrency}
          />
        </ModalDropdown> */}
        <ModalDropdown
          options={[languageJson.All, languageJson.Online_Label, languageJson.Offline_Label]}
          dropdownStyle={styles.dropDown}
          onSelect={(index, value) => {
            setProviders(value)
            if (value == languageJson.All) {
              setProvidersFilter("all")
            }
            else if (value == languageJson.Online_Label) {
              setProvidersFilter("online")
            }
            else if (value == languageJson.Offline_Label) {
              setProvidersFilter("offline")
            }
          }}
        >
          <SettingComponent
            nameTouchDisabled
            title={languageJson.ProvidersLabel}
            image={angleRightImage}
            text={providers}
          />
        </ModalDropdown>
        <RangeSlider
          onValueChanged={(low, high) => {  }} radius={radius}
          single ref={locationSliderRef} heading={languageJson.LocationRange_Heading} setMinimum={val => {setMinLoc(val);setRadius(val)}} setMaximun={val => setMaxLoc(val)}   min={(RADIUS / 1000).toFixed(0)} max={100} start={5} end={100} />
        <RangeSlider onValueChanged={(low, high) => { }}
          ref={priceSliderRef} heading={languageJson.PriceRange_Heading} setMinimum={val => setMinPrice(val)} setMaximun={val => setMaxPrice(val)} min={minPrice} max={maxPrice} start={0} end={200} />
       
      </ScrollView>
      <View style={{ marginBottom: height(3) }}>
          <Button
            title={languageJson.Apply_Button}
            onPress={onPressApply}
            containerStyle={styles.buttonContainer}
          />
        </View>
    </Container>
  );
}
