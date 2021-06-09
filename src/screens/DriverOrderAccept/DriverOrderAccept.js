import React, { useState, createRef, useEffect, Fragment } from 'react';
import Container from '../../components/MapsContainer/MapsContainer.component';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { width, height } from 'react-native-dimension';
import color from '../../utills/Colors';
import styles from './DriverOrderAccept.styles';
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
    Alert,
    SafeAreaView,
    StatusBar,
} from 'react-native';
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
    const[timers,setTimer] = useState(9)

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
        if (timers>0) {
           const timerId= setTimeout(()=>{setTimer(timers-1)},1000)
        //    clearInterval(timerId)
        }
       
    }, [timers])
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
                    if (statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == 'granted' || statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == 'granted'||statuses[android.permission.ACCESS_BACKGROUND_LOCATION== 'granted']) {
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
    return (
        <Fragment>
            <StatusBar barStyle={'dark-content'} backgroundColor={color.backgroundWhite} />
            <SafeAreaView style={styles.container}>
                <View style={styles.mapContainer}>
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
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>ACCEPT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.buttonText}>REJECT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeSecText}>{`${timers}s`}</Text>
                        </View>
                        <View style={styles.orderContainer}>
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
                    <QrScannar onPress={() => setQr(false)} onRequsetClose={() => setQr(false)} isVisible={qr} />
                </View>
            </ SafeAreaView >
            <SafeAreaView style={{ backgroundColor: color.backgroundWhite }} />
        </Fragment>


    );
}
