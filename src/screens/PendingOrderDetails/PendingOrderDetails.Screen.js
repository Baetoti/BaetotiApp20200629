import React, { Fragment,useState ,useEffect ,useRef } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar,Alert
} from 'react-native';
import styles from './PendingOrderDetails.Style';
import Button from '../../components/Button/Button.component';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import boxImage from '../../assets/DriverHome/box.png'
import commentImage from '../../assets/DriverHome/comment.png';
import phoneImage from '../../assets/DriverHome/phone.png';
import { height, width } from 'react-native-dimension';
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import { phoneCall } from '../../utills/Methods'
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Colors from '../../utills/Colors';

export default function AllDeliveriesOrderDetails({ route, navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const { item } = route.params;
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.PendingOrderRequest_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
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
    const mapRef = useRef(null);
      useEffect(() => {
        requestPermission();
      }, []);

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

    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#f8f0ed'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#f8f0ed' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
                    style={{ flex: 1 }}
                >
                    <View style={{ flex: 1, justifyContent: "space-between" }}>
                        <View style={styles.headerContainer}>
                            <MoreHeader onPress={() => navigation.goBack()} isImage={true} imageInView={false} title={languageJson.OrderDetails_Title} />
                        </View>
                        <ScrollView style={{ height: height(70) }}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.orderIdDetailContainer}>
                                <View style={styles.orderIdInnerDetailContainer}>
                                    <View style={styles.boxContainer}>
                                        <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                                    </View>
                                    <View style={styles.orderIdTextContainer}>
                                        <Text numberOfLines={1} style={styles.orderIdText}>{item.OrderId}</Text>
                                        <Text style={styles.deliveryDateText}>{item.DeliveryTime}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.orderDetailContainer}>
                                <View style={styles.headingTextContainer}>
                                    <TextRowVise style={styles.headingText}>{languageJson.OrderDetails_Title}</TextRowVise>
                                </View>
                                <View style={styles.lineSeparator} />
                                <View style={styles.providerNameContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.providerInnerNameContainer, { flexDirection: 'row-reverse' }] : styles.providerInnerNameContainer}>
                                        <Image source={item.providerImage} resizeMode='cover' style={styles.providerImage} />
                                        <View style={styles.providerNameTextContainer}>
                                            <TextRowVise numberOfLines={1} style={styles.providerNameText}>{item.providerName}</TextRowVise>
                                            <TextRowVise style={styles.providerNameTextLabel}>{languageJson.Provider_Label}</TextRowVise>
                                        </View>
                                        <View style={selectdLanguage == 'ar' ? [styles.contactContainer, { flexDirection: 'row-reverse' }] : styles.contactContainer}>
                                            <TouchableOpacity style={styles.messageButton}>
                                                <Image source={commentImage} resizeMode='contain' style={styles.commentImage} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={selectdLanguage == 'ar' ? [styles.phoneButton, { marginRight: width(2) }] : styles.phoneButton}
                                                onPress={() => phoneCall()}>
                                                <Image source={phoneImage} resizeMode='contain' style={selectdLanguage == 'ar' ? [styles.phoneImage, { transform: [{ rotate: '270deg' }] }] : styles.phoneImage} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.providerAddressContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                                        <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                                        <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.From_Label}</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.addressText}>{item.ProviderAddress}</Text>
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
                                <View style={styles.clientNameContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.clientInnerNameContainer, { flexDirection: 'row-reverse' }] : styles.clientInnerNameContainer}>
                                        <Image source={item.clientImage} resizeMode='cover' style={styles.clientImage} />
                                        <View style={styles.providerNameTextContainer}>
                                            <TextRowVise numberOfLines={1} style={styles.clientNameText}>{item.clientName}</TextRowVise>
                                            <TextRowVise style={styles.clientNameTextLabel}>{languageJson.Client_Label}</TextRowVise>
                                        </View>
                                        <View style={selectdLanguage == 'ar' ? [styles.contactContainer, { flexDirection: 'row-reverse' }] : styles.contactContainer}>
                                            <TouchableOpacity style={styles.messageButton}>
                                                <Image source={commentImage} resizeMode='contain' style={styles.commentImage} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={selectdLanguage == 'ar' ? [styles.phoneButton, { marginRight: width(2) }] : styles.phoneButton}
                                                onPress={() => phoneCall()}>
                                                <Image source={phoneImage} resizeMode='contain'
                                                    style={selectdLanguage == 'ar' ? [styles.phoneImage, { transform: [{ rotate: '270deg' }] }] : styles.phoneImage} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.providerAddressContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                                        <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                                        <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.To_Label}</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.addressText}>{item.BuyerAddress}</Text>
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
                            </View>
                            {item?.notefromUser &&
                            <View style={styles.packageDetailContainer}>
                               <View style={styles.headingTextContainer}>
                                    <TextRowVise style={styles.headingText}>Notes from user</TextRowVise>
                                    <TextRowVise  style={[styles.addressText,{lineHeight:height(2.5)}]}>{item.notefromUser}</TextRowVise>
                                </View>
                            </View>
                            }
                            <View style={styles.packageDetailContainer}>
                                <View style={styles.headingTextContainer}>
                                    <TextRowVise style={styles.headingText}>{languageJson.PackageDetails_Heading}</TextRowVise>
                                </View>
                                <View style={styles.lineSeparator} />
                                <View style={styles.orderIdTextLabelContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.orderIdTextLabelInnerContainer, { flexDirection: 'row-reverse' }] : styles.orderIdTextLabelInnerContainer}>
                                        <Text style={styles.orderIdTextLabel}>{languageJson.OrderID_Label}</Text>
                                        <Text style={styles.orderTextId}>{item.OrderId}</Text>
                                    </View>
                                </View>
                                <View style={selectdLanguage == 'ar' ? [styles.totalPackageContainer, { flexDirection: 'row-reverse' }] : styles.totalPackageContainer}>
                                    <Text style={styles.totalPackageTextLabel}>{languageJson.Total_Package}</Text>
                                    {item.totalPackage < 10 ?
                                        <Text style={styles.totalPackageText}>0{item.totalPackage}</Text> :
                                        <Text style={styles.totalPackageText}>{item.totalPackage}</Text>
                                    }
                                </View>
                                <View style={styles.lineSeparator} />
                                <View style={styles.amountStatusContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.amountStatusInnerContainer, { flexDirection: 'row-reverse' }] : styles.amountStatusInnerContainer}>
                                        <Text style={styles.amountStatusTextLabel}>{languageJson.AmountStatus_Label}</Text>
                                        <Text style={styles.amountStatusText}>{item.amountStatus}</Text>
                                    </View>
                                </View>
                                <View style={styles.lineSeparator} />
                                <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                                    <Text style={styles.deliveryChargesLabelText}>{languageJson.DeliveryCharges_Label}</Text>
                                    <Text style={styles.deliveryChargesText}>{currencyLabel}{item.DeliveryCharges}.00</Text>
                                </View>
                                <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                                    <Text style={styles.deliveryChargesLabelText}>{languageJson.ServiceFees_Label}</Text>
                                    <Text style={styles.deliveryChargesText}>-{currencyLabel}{item.ServiceFees}.00</Text>
                                </View>
                                <View style={styles.halfLineSeparator} />
                                <View style={selectdLanguage == 'ar' ? [styles.totalChargesContainer, { flexDirection: 'row-reverse' }] : styles.totalChargesContainer}>
                                    <Text style={styles.totalChargesLabelText}>{languageJson.EarnedAmount_Label}</Text>
                                    <Text style={styles.totalChargesText}>{currencyLabel}{item.DeliveryCharges - item.ServiceFees}.00</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <View>
                            <Button title={languageJson.Accept_Button} containerStyle={styles.containerStyle} />
                            <Button title={languageJson.Ignore_Button} containerStyle={styles.editDocumentButton} textStyle={styles.textStyle} />
                        </View>
                    </View>

                </LinearGradient>
            </SafeAreaView>

        </Fragment >
    )
}

