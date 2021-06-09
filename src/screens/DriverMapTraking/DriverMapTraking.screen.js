import React, { useState, createRef, useEffect } from 'react';
import Container from '../../components/MapsContainer/MapsContainer.component';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { width, height } from 'react-native-dimension';
import color from '../../utills/Colors';
import styles from './DriverMapTraking.styles';
import boxImage from '../../assets/DriverHome/box.png'
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import QrScannar from '../../components/QrScanner/QrScannar.Component';
import { PERMISSIONS, requestMultiple, request, openSettings } from 'react-native-permissions';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
export default function DriverMapsHome({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.MapTracking)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
  /**
   * State used for user location and qr
   */
  const [userLocation, setUserLocation] = useState({
    latitude: 37.7853621,
    longitude: -122.4005841
  });
  const [qr, setQr] = useState(false)
  const [status, setStatus] = useState(0)

  /**
   * Create refernce for description textinput and search input
   */
  const card = (<View style={styles.orderContainer}>
    <TouchableOpacity style={selectdLanguage == 'ar' ? [styles.orderIdContainer, { flexDirection: 'row-reverse' }] : styles.orderIdContainer}
    // onPress={() => navigation.navigate('AllDeliveriesOrderDetails', { item })}
    >
      <View style={styles.boxContainer}>
        <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
      </View>
      <View style={styles.orderIdTextContainer}>
        <TextRowVise style={styles.orderIdLabelText}>{languageJson.OrderID_Label}</TextRowVise>
        <TextRowVise numberOfLines={1} style={styles.orderIdText}>ORD260RT5640</TextRowVise>
        {/* <Text style={styles.orderDate}>{item.orderDate}</Text> */}
      </View>
      <View style={styles.timeLeftContainer}>
        <Text style={styles.timeLeftText}>23 Mar, 2020</Text>
        <TouchableOpacity style={{ marginTop: height(0.5) }}
          onPress={() => setQr(true)}
        >
          <AntDesign name='scan1' size={width(6)} color={color.buttonSecondaryBlue} />
        </TouchableOpacity>
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
  </View>)
  /**
   * Ref of Map  view to animate programmatically
   */
  const mapRef = createRef(null);
  useEffect(() => {
    requestPermission()
  }, [])
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
              // {
              //   Geocoder.geocodePosition({
              //     lat: info.coords.latitude,
              //     lng: info.coords.longitude
              //   }).then(res => {
              //     setAddress(res[0].formattedAddress)

              //   })
              //     .catch(err => console.log(err))
              // }
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
  const _setStatus = () => {
    if (status == 0) {
      setStatus(1)
    }
    else if (status == 1) {
      setStatus(2)
    }
    else if (status == 2) {
      setStatus(3)
    }
    else if (status == 3) {
      setStatus(4)
    }
    else if (status == 4) {
      navigation.goBack()
    }
  }
  return (
    <>
      <Container onBackPress={() => navigation.goBack()} back title="ORD260RT5640" orderId>
        <MapView
          style={styles.map}
          ref={mapRef}
          loadingEnabled={false}
          provider={PROVIDER_GOOGLE}
          mapPadding={{ bottom: height(7) }}
          region={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,
          }}>
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
          </View>

        </MapView>

        <View style={styles.flatlistContainer}>
          <Text style={styles.orderId}>1.2 {selectedDistanceUnit}</Text>
          {card}
          <View style={styles.bottomButton}>
            <TouchableOpacity activeOpacity={0.7} style={styles.pickButton}
              onPress={_setStatus}
            >
              <Text style={styles.pickText}>{status == 0 ? 'Accepted' : status == 1 ? 'Picked up package' : status == 2 ? 'Arrived at client' : 'Delivered'}</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.cancilButton}>
              <Text style={styles.cancilText}>{languageJson.Cancel_Button}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <QrScannar onPress={() => setQr(false)} onRequsetClose={() => setQr(false)} isVisible={qr} />
      </Container>
      <SafeAreaView />
    </>
  );
}
