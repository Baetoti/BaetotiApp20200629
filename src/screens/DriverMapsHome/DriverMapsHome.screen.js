import React, { useState, createRef, useEffect } from 'react';
import Container from '../../components/MapsContainer/MapsContainer.component';
import MapView, { Marker, Circle, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { width, height } from 'react-native-dimension';
import { PERMISSIONS, requestMultiple, request, openSettings } from 'react-native-permissions';
import color from '../../utills/Colors';
import styles from './DriverMapsHome.styles';
import FlatList from './Components/Flatlist';
import AllDeliveriesData from '../../DummyData/AllDeliveries';
import avatar from '../../assets/buyerHome/Layer777.png';
import { useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import boxImage from '../../assets/DriverHome/box.png';
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Switch
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
export default function DriverMapsHome({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.DriverHome_screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * State Used for User Location
   */
  const [userLocation, setUserLocation] = useState({
    latitude: 37.7853621,
    longitude: -122.4005841
  });
  const [timers, setTimer] = useState(9)
  const [status, setStatus] = useState(-1)

  const [isAccept, setIsAccept] = useState(false)
  const [isOffLine, setisOffLine] = useState(false)
  const toggleAccept = () => setIsAccept(previousState => !previousState);
  const toggleOffLine = () => {
    setisOffLine(previousState => !previousState)
    if (!isOffLine) {
      setStatus(0)
    }

  };
  // useEffect(() => {
  //   var marker = dummyData.feature.map(item => item.location);
  //   setMarkers([...marker]);
  // }, []);
  /**
   * Create refernce for MapView to animate programmatically
   */
  useEffect(() => {

    setInterval(() => {
      circle2.current && circle2.current.setNativeProps({ fillColor: 'rgba(36,198,209,0.12)', strokeColor: 'transparent' });
    }, 10);
  }, [])
  useEffect(() => {
    requestPermission()
    setInterval(() => {
      circle1.current && circle1.current.setNativeProps({ fillColor: 'rgba(255,255,255,0.5)', strokeColor: 'transparent' });
    }, 10);
    // setTimeout(() => {
    //   setStatus(0)
    // }
    // , 5000);
  }, [])
  useEffect(() => {
    if (status == 0 && timers > 0) {
      const timerId = setTimeout(() => { setTimer(timers - 1) }, 1000)
    }
    if (timers == 0) {
      setStatus(-1)
    }
  }, [timers])
  const mapRef = createRef(null);
  const circle2 = createRef(null);
  const circle1 = createRef(null);
  const requestPermission = () => {
    try {

      requestMultiple(
        Platform.select({
          ios: [PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE],
          android: [PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION],
        })).then(statuses => {
          console.log(statuses)
          if (statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == 'granted' || statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == 'granted') {
            Geolocation.getCurrentPosition(info => {
              setUserLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
              });
            });
          }
          else {
            request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
              if (result == 'granted') {
                Geolocation.getCurrentPosition(info => {

                  setUserLocation({
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude
                  })
                }).catch(e => console.log(e))
              }
              else {
                Alert.alert(
                  null,
                  'We need Premission',
                  [
                    {
                      text: "Open Settings",
                      onPress: () => {
                        openSettings().catch(() => console.warn('cannot open settings'));
                      },
                      style: "cancel"
                    },
                    { text: "Close", onPress: () => { } }
                  ],
                  { cancelable: false }
                );
              }
            });
          }
        });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    // <>
    <Container onBellPress={() => navigation.navigate('DriverNotifications')} avatar={avatar} title={languageJson.Home_Title} bell>
      <MapView
        style={styles.map}
        ref={mapRef}
        loadingEnabled={false}
        provider={PROVIDER_GOOGLE}
        mapPadding={{ bottom: height(42) }}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        }}>
        {
          status == -1 ?
            <>
              <Circle
                // key = { (this.state.currentLongitude + this.state.currentLongitude).toString() }
                ref={circle1}
                center={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                  latitudeDelta: 0.012,
                  longitudeDelta: 0.012,
                }}
                radius={350}
                strokeWidth={0}
                strokeColor={'transparent'}
                fillColor={'rgba(255,255,255,0.5)'}
              // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
              />
              <Circle
                key={(userLocation.latitude + userLocation.longitude).toString()}
                ref={circle2}
                center={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                  latitudeDelta: 0.012,
                  longitudeDelta: 0.012,
                }}
                radius={700}
                strokeWidth={0}
                lineJoin='round'
                strokeColor={'transparent'}
                fillColor={'rgba(36,198,209,0.12)'}
              />
              <View>
                <Marker
                  coordinate={userLocation}
                  anchor={{ y: 0.29, x: 0.5 }}
                  image={require('../../assets/DriverHome/pin.png')}
                >
                </Marker>
              </View>
            </> :
            <>
              <Polyline
                strokeColor={color.buttonSecondaryBlue}
                coordinates={[
                  { latitude: userLocation.latitude, longitude: userLocation.longitude }, // optional
                  // ...this.state.coords,
                  {
                    latitude: 33.6682255,
                    longitude: 72.9892784
                  },
                  {
                    latitude: 33.6700113,
                    longitude: 72.9879802
                  },
                  {
                    latitude: 33.690618,
                    longitude: 73.005442
                  } // optional
                ]}

                strokeWidth={4}
              />
              <View>
                <Marker
                  coordinate={userLocation}
                  title={'marker.title'}
                  anchor={{ y: 0.23 }}
                  image={require('../../assets/DriverHome/pin.png')}
                  description={'marker.description'}>
                </Marker>
                <Marker
                  coordinate={{
                    latitude: 33.690618,
                    longitude: 73.005442
                  }}
                  title={'marker.title'}
                  // anchor={{y:0.23}}
                  image={require('../../assets/DriverHome/map.png')}
                  description={'marker.description'}>
                </Marker>
              </View></>
        }
      </MapView>

      {/* <View style={styles.flatlistContainer}> */}
      {/* <ViewRowVise
          // 
          style={styles.flatlistInnerContainer}>
          <Text style={{ fontSize: width(4.5), fontWeight: 'bold', color: color.textBlack }}>{languageJson.YourDeliveries_Heading}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('AllDeliveries')}
            style={selectdLanguage == 'ar' ? [styles.seeAllButton, { flexDirection: 'row-reverse' }] : styles.seeAllButton}>
            <Text style={{ fontSize: width(3.8), color: color.buttonSecondaryBlue }}>{languageJson.SeeAll}</Text>
            <Image
              source={selectdLanguage == 'ar' ?
                require('../../assets/DriverHome/arrow-left.png') :
                require('../../assets/DriverHome/arrow-right.png')}
              style={{ resizeMode: 'contain', height: height(2.5), width: width(3.5) }}
            />
          </TouchableOpacity>
        </ViewRowVise> */}

      {
        status >= 0 && (
          <View style={styles.flatlistContainer}>
            {
              status == 0 ?
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity onPress={() => setStatus(1)}>
                    <Text style={styles.buttonText}>ACCEPT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setStatus(-1)}>
                    <Text style={styles.buttonText}>REJECT</Text>
                  </TouchableOpacity>
                </View> :
                status == 1 ?
                  <View style={styles.buttonsSignleContainer}>
                    <TouchableOpacity onPress={() => setStatus(2)} >
                      <Text style={styles.buttonText}>ARRIVE AT DELIVERY PICKUP</Text>
                    </TouchableOpacity>
                  </View> : status == 2 ?
                    <View style={styles.buttonsSignleContainer}>
                      <TouchableOpacity onPress={() => setStatus(3)} >
                        <Text style={styles.buttonText}>ARRIVE AT DELIVERY Point</Text>
                      </TouchableOpacity>
                    </View> :
                    status == 3 ?
                      <View style={styles.buttonsSignleContainer}>
                        <TouchableOpacity onPress={() => setStatus(4)} >
                          <Text style={styles.buttonText}>Completed</Text>
                        </TouchableOpacity>
                      </View> : null
            }
            {
              status == 4 && (
                Alert.alert(
                  null,
                  'Your Order Is Complete',
                  [
                    {
                      text: "Ok",
                      onPress: () => {
                        setStatus(-1)
                        // openSettings().catch(() => console.warn('cannot open settings'));
                      },
                      style: "cancel"
                    },
                  ],
                  { cancelable: false }
                ))
            }
            {
              status == 0 && (
                <View style={styles.timeContainer}>
                  <Text style={styles.timeSecText}>{`${timers}s`}</Text>
                </View>)
            }
            <View style={styles.orderContainer}>
              <TouchableOpacity style={selectdLanguage == 'ar' ? [styles.orderIdContainer, { flexDirection: 'row-reverse' }] : styles.orderIdContainer}
              >
                <View style={styles.boxContainer}>
                  <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                </View>
                <View style={styles.orderIdTextContainer}>
                  <TextRowVise style={styles.orderIdLabelText}>{languageJson.OrderID_Label}</TextRowVise>
                  <TextRowVise numberOfLines={1} style={styles.orderIdText}>ORD260RT5640</TextRowVise>
                </View>
                <View style={styles.timeLeftContainer}>
                  <Text style={styles.timeLeftText}>23 Mar, 2020</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.lineSeparator} />
              <ViewRowVise style={styles.addressContainer}>
                <View style={styles.providerAddressContainer}>
                  <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                    <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                    <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.From_Label}</Text>
                  </View>
                  <Text numberOfLines={2} style={styles.addressText}>C-40, Golden Street, East 6th Street, New York,USA</Text>
                </View>
                <View style={styles.verticalLine} />
                <View style={styles.BuyerAddressContainer}>
                  <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                    <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                    <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.To_Label}</Text>
                  </View>
                  <Text numberOfLines={2} style={styles.addressText}>C-40, Golden Street, East 6th Street, New York,USA</Text>
                </View>
              </ViewRowVise>
            </View>
          </View>

        )}
      {
        status === -1 && (
          <View style={styles.bottomContainer}>
            <ViewRowVise style={styles.avaiableDeliveryContainer}>
              <Text style={styles.avaiableDeliveryText}>Available Deliveries</Text>
              <View style={styles.deliveryQuantityContainer}>
                <Text style={styles.deliveryQuantityText}>0</Text>
              </View>
            </ViewRowVise>
            <View style={styles.line} />
            <ViewRowVise style={styles.bottomInfoContainer}>
              <ViewRowVise style={styles.acceptJobContainer}>
                <Text>Accept Job</Text>
                <Switch
                  trackColor={{ false: "#767577", true: color.buttonSecondaryBlue }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleAccept}
                  value={isAccept}
                />
              </ViewRowVise>
              <View style={styles.verticalLines} />
              <ViewRowVise style={styles.acceptJobContainer}>
                <Text>Go Offline</Text>
                <Switch
                  trackColor={{ false: "#767577", true: color.buttonSecondaryBlue }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleOffLine}
                  value={isOffLine}
                />
              </ViewRowVise>
            </ViewRowVise>
          </View>
        )}

      {/* <FlatList onPressTitle={(item) => navigation.navigate('AllDeliveriesOrderDetails', { item })} data={AllDeliveriesData} /> */
      /* </View> */}
    </Container>
  );
}
