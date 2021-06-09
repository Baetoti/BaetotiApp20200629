import React, { Fragment, useState, useEffect, createRef, useRef } from 'react';
import {
    SafeAreaView, View, StatusBar, FlatList,
    Image, Text, TouchableOpacity, Switch
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import styles from './MyCart.Style';
import Colors from '../../utills/Colors';
import MyCart from '../../DummyData/MyCart'
import Button from '../../components/Button/Button.component'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { width,height } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Geolocation from '@react-native-community/geolocation';
import LinearGradient from 'react-native-linear-gradient';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import Geocoder from 'react-native-geocoder';
import DatePicker from 'react-native-datepicker'
import { useSelector } from 'react-redux';
import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
import undrawemptyImage from '../../assets/HomeAssets/undrawempty.png';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected languages
     * 
     */
    const languageJson = useSelector(state => state.Language.languageJson.MyCart_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const isProfileCompleted = useSelector(state => state.Configuration.isProfileCompleted)
    const [isVisible, setIsVisible] = useState(false)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    const isArabic = selectdLanguage == 'ar'
    /**
     * Ref of date and time picker to open programmatically
     */
    const timeRef = createRef(null);
    const dateRef = createRef(null);
    const mapRef = useRef(null);
    /**
     * States used for time, date address and others
     */

    const [time, setTime] = useState('12:00 PM');
    const [date, setDate] = useState('15, June 2020');
    const [myCart, setMyCart] = useState(MyCart);
    const [address, setAddress] = useState("C-404, Golden Street, East 25th street,\nNew york, US");
    const [location, setLocation] = useState("C-404, Golden Street, East 25th street,\nNew york, US");
    const [totalCharges, setTotalCharges] = useState(180);
    const [selfPickup, setSelfPickup] = useState(false);
    const [selectedItem, setSelectedItem] = useState({})
    const [isAddress, setIsAddress] = useState(false);
    const [userLocation, setUserLocation] = useState({
        latitude: 37.7853621,
        longitude: -122.4005841
    });
    /**
     * Calling get location method at the start of the screen
     */
    useEffect(() => {
        getCurrentLocation();
    }, []);
    /**
     * Function to access location of the user
     */
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(info => {
            Geocoder.geocodePosition({
                lat: info.coords.latitude,
                lng: info.coords.longitude
            }).then(res => {
                setLocation(res[0].formattedAddress)
            })
                .catch(err => console.log(err))
        }, (err) => console.log(err));
    }
    /**
     * Function used to time conversion
     */
    const tConvert = (time) => {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? ' AM' : ' PM';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    }
    /**
     * Function to set Comments
     */
    const setComments = (val, item, index) => {
        var newMyCart = myCart;
        newMyCart[index].comments = val;
        setMyCart(myCart => (myCart = [...newMyCart]))
    }
    /**
     * function to increment quantity
     */
    const addQuantity = (index) => {
        var newMyCart = myCart;
        newMyCart[index].quantity += 1;
        setMyCart(myCart => (myCart = [...newMyCart]))
        countTotal()
    }
    /**
     * function to decrement quantity
     */
    const subtractQuantity = (index) => {
        var newMyCart = myCart;
        newMyCart[index].quantity -= 1;
        setMyCart(myCart => (myCart = [...newMyCart]))
        countTotal()
    }
    /**
     * function to count total chargees
     */
    const countTotal = () => {
        var newTotalCharges = 0;
        myCart.map(item => {
            newTotalCharges += item.quantity * item.price
        })
        setTotalCharges(newTotalCharges)
    }
    /**
     * Component for individual item of cart
     */
    const renderCartItem = ({ item, index }) => {
        return (
            <View style={styles.cartItemContainer}>
                <View style={styles.topConainer}>
                    <View style={styles.leftContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedItem(item)
                                setIsVisible(true)
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={styles.itemImage} />
                        </TouchableOpacity>
                        <View style={styles.itemDetailContainer}>
                            <Text style={styles.itemName}>{item.itemName}</Text>
                            <Text style={styles.shopName}>{item.shopName}</Text>
                            <Text style={styles.price}>{selectedCurrency == 'USD' ? "$" : "SAR"}{(item.quantity * (isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price))).toFixed(toFixed)}</Text>
                        </View>
                    </View>
                    <View style={styles.orderDataContainer}>
                        <Text style={styles.orderId}>{item.id}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                onPress={() => subtractQuantity(index)}
                                disabled={item.quantity == 1}>
                                <Entypo name="minus"
                                    color={item.quantity == 1 ? Colors.gray : Colors.buttonBlue}
                                    size={width(5.5)} />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity < 10 ? "0" + item.quantity : item.quantity}</Text>
                            <TouchableOpacity
                                onPress={() => addQuantity(index)}
                            >
                                <Entypo name="plus"
                                    color={Colors.buttonBlue}
                                    size={width(5.5)} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => removeItem(item.id)}>
                            <Text style={styles.removeItem}>{languageJson.Remove}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineSeparator}></View>
                <TextInputRowVise
                    style={styles.inputComments}
                    placeholder={languageJson.AddComments_PlaceHolder}
                    value={item.comments}
                    multiline={true}
                    placeholderTextColor={Colors.grayDarker}
                    onChangeText={val => setComments(val, item, index)}
                />
            </View>
        )
    }
    const removeItem = (id) => {
        console.log(myCart)
        var newMyCart = myCart.filter(item => item.id != id)
        setMyCart(newMyCart)
    }
    const ListEmptyComponent = () => (
        <View style={styles.listEmptyContainer}>
            <Image source={undrawemptyImage}
                resizeMode='contain'
                style={styles.undrawemptyImage} />
            <TextRowVise style={styles.emptyText}>Cart is Empty!</TextRowVise>
        </View>
    )
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundWhite} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
            />
            <SafeAreaView style={styles.container}>

                {
                    !isAddress ?
                        <LinearGradient
                            colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6',]}
                            style={{ flex: 1 }}
                        >
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerText}>{languageJson.MyCart_Title}</Text>
                            </View>
                            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                            extraScrollHeight={height(8)}
                            >
                                <FlatList
                                    style={styles.flatList}
                                    data={myCart}
                                    renderItem={renderCartItem}
                                    showsVerticalScrollIndicator={false}
                                    ListEmptyComponent={ListEmptyComponent}
                                />
                                {myCart.length > 0 &&
                                    <View style={styles.deliveryDetail}>
                                        <ViewRowVise style={styles.totalPriceContainer}>
                                            <TextRowVise style={styles.deliveryText}>{languageJson.ServiceCharges_Label}</TextRowVise>
                                            <TextRowVise style={styles.deliveryText}>
                                                {selectedCurrency == 'USD' ? "$" : "SAR"}{((isDollar ? (Number(10) * sarToDollar).toFixed(toFixed) : Number(10))).toFixed(toFixed)}
                                            </TextRowVise>
                                        </ViewRowVise>
                                        {!selfPickup && <ViewRowVise style={styles.totalPriceContainer}>
                                            <TextRowVise style={styles.deliveryText}>{languageJson.DeliveryCharges}</TextRowVise>
                                            <TextRowVise style={styles.deliveryText}>
                                                {selectedCurrency == 'USD' ? "$" : "SAR"}{((isDollar ? (Number(15) * sarToDollar).toFixed(toFixed) : Number(15))).toFixed(toFixed)}
                                            </TextRowVise>
                                        </ViewRowVise>}
                                        <ViewRowVise style={styles.totalPriceContainer}>
                                            <TextRowVise style={styles.deliveryText}>{languageJson.TotalCharges_Label}</TextRowVise>
                                            <TextRowVise style={styles.deliveryText}>
                                                {selectedCurrency == 'USD' ? "$" : "SAR"}{((isDollar ? (Number(selfPickup ? totalCharges - 15 : totalCharges) * sarToDollar).toFixed(toFixed) : Number(selfPickup ? totalCharges - 15 : totalCharges))).toFixed(toFixed)}
                                            </TextRowVise>
                                        </ViewRowVise>
                                        <ViewRowVise style={styles.selfDelivery}>
                                            <Text style={styles.wantToDeliveryText}>{languageJson.WantToDeliver}</Text>
                                            <View
                                                style={[
                                                    styles.hideLocationContainer,
                                                    {
                                                        backgroundColor: selfPickup
                                                            ? Colors.purplePrimary
                                                            : Colors.placeHolderTextColor,
                                                    },
                                                ]}>
                                                <Switch
                                                    style={{ transform: [{ rotate: isArabic ? '180deg' : '0deg' }] }}
                                                    trackColor={{
                                                        false: 'transparent',
                                                        true: Colors.purplePrimary,
                                                    }}
                                                    thumbColor={
                                                        selfPickup
                                                            ? Colors.backgroundWhite
                                                            : Colors.purplePrimary
                                                    }
                                                    onValueChange={() => {
                                                        setSelfPickup(!selfPickup)
                                                    }}
                                                    ios_backgroundColor={
                                                        selfPickup
                                                            ? Colors.purplePrimary
                                                            : Colors.placeHolderTextColor
                                                    }
                                                    value={selfPickup}
                                                />
                                            </View>
                                        </ViewRowVise>
                                        <TextRowVise style={styles.deliveryText}>{selfPickup ? languageJson.SetPickupSchedule_Label : languageJson.SetDeliverySchedule_Label}</TextRowVise>
                                        {selfPickup == false && <View style={styles.addressContainer}>
                                            <ViewRowVise style={styles.addressTopContainer}>
                                                <TouchableOpacityRowVise style={styles.row}>
                                                    <Image
                                                        style={styles.mapImage}
                                                        source={require('../../assets/BuyerOrderDetails/map-blue.png')} />

                                                    <Text style={styles.addressText}>{languageJson.Address_Label}</Text>
                                                </TouchableOpacityRowVise>
                                                <TouchableOpacityRowVise style={styles.row}
                                                    onPress={() => setAddress(location)}>
                                                    <Image
                                                        style={styles.currentLocationImage}
                                                        source={require('../../assets/BuyerOrderDetails/location-arrow.png')} />
                                                    <Text style={styles.currentLocationText}>{languageJson.CurrentLocation_Label}</Text>
                                                </TouchableOpacityRowVise>
                                            </ViewRowVise>
                                            <TextInputRowVise style={styles.address}
                                                value={address}
                                                onChangeText={val => setAddress(val)} />
                                            <TouchableOpacity style={styles.setUpPinButton}
                                                onPress={() => setIsAddress(true)}
                                            >
                                                <Text>{languageJson.pickUPAddress_Label}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        }
                                        <View style={styles.dateTimeContainer}>
                                            <ViewRowVise style={styles.addressTopContainer}>
                                                <ViewRowVise style={styles.row}>
                                                    <Image
                                                        style={styles.mapImage}
                                                        source={require('../../assets/BuyerOrderDetails/calender.png')} />
                                                    <Text style={selectdLanguage == 'ar' ? [styles.addressText, { marginRight: width(2.2) }] : styles.addressText}>{selfPickup ? languageJson.PickupDate_Label : languageJson.DeliveryDate_Label}</Text>
                                                </ViewRowVise>
                                                <TouchableOpacity style={styles.row}
                                                    onPress={() => dateRef.current.onPressDate()}
                                                >
                                                    <Text style={styles.dateTimeText}>{date}</Text>
                                                </TouchableOpacity>
                                            </ViewRowVise>
                                        </View>
                                        <View style={styles.dateTimeContainer}>
                                            <ViewRowVise style={styles.addressTopContainer}>
                                                <ViewRowVise style={styles.row}>
                                                    <Image
                                                        style={styles.mapImage}
                                                        source={require('../../assets/BuyerOrderDetails/clock.png')} />
                                                    <Text style={selectdLanguage == 'ar' ? [styles.addressText, { marginRight: width(2.2) }] : styles.addressText}>{selfPickup ? languageJson.PickupTime_Label : languageJson.DeliveryTime_Label}</Text>
                                                </ViewRowVise>
                                                <TouchableOpacity style={styles.row}
                                                    onPress={() => timeRef.current.onPressDate()}
                                                >
                                                    <Text style={styles.dateTimeText}>{time}</Text>
                                                </TouchableOpacity>
                                            </ViewRowVise>
                                        </View>
                                    </View>
                                }
                                {selfPickup == false &&
                                <View style={styles.notForDriverContainer}>
                                    <TextRowVise style={styles.notForDriverText}>{languageJson.NotForDriver_Heading}</TextRowVise>
                                    <TextInputRowVise
                                        style={styles.inputNotComments}
                                        placeholder={languageJson.NotForDriver_Heading}
                                        multiline={true}
                                        placeholderTextColor={Colors.grayDarker}
                                        // onChangeText={val => setComments(val, item, index)}
                                    />
                                </View>}
                            </KeyboardAwareScrollView>
                            {myCart.length > 0 && <Button title={languageJson.Confrim_text} containerStyle={styles.button}
                                textStyle={styles.buttonText} onPress={() => isProfileCompleted == false ? navigation.navigate('SignUp', { nextScreen: "BuyerPayment" }) : navigation.navigate('BuyerPayment',{selfPickup:selfPickup})} />}
                            <DatePicker
                                style={styles.DatePicker}
                                showIcon={false}
                                ref={timeRef}
                                is24Hour={false}
                                mode="time"
                                confirmBtnText="Confirm"
                                androidMode={'spinner'}
                                cancelBtnText="Cancel"
                                onDateChange={time => {
                                    setTime(tConvert(time))
                                }}
                            />
                            <DatePicker
                                style={styles.DatePicker}
                                showIcon={false}
                                ref={dateRef}
                                is24Hour={false}
                                mode="date"
                                format={"DD MMMM YYYY"}
                                confirmBtnText="Confirm"
                                androidMode={'spinner'}
                                cancelBtnText="Cancel"
                                onDateChange={date => {
                                    setDate(date)
                                    console.log(date)
                                }}
                            />
                            <OverViewModal
                                isVisible={isVisible}
                                isCartHide
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
                        </LinearGradient> :
                        <View style={styles.mapContainer}>
                            <MapView
                                style={styles.map}
                                loadingEnabled={false}
                                ref={mapRef}
                                showsCompass={false}
                                provider={PROVIDER_GOOGLE}
                                initialRegion={{
                                    latitude: userLocation.latitude,
                                    longitude: userLocation.longitude,
                                    latitudeDelta: 0.090,
                                    longitudeDelta: 0.090
                                }}
                                onPress={async (obj) => {
                                    mapRef.current.animateCamera(
                                        {
                                            center: {
                                                latitude: obj.nativeEvent.coordinate.latitude,
                                                longitude: obj.nativeEvent.coordinate.longitude,
                                            },
                                            zoom: 15,
                                        },
                                        2000,
                                    );
                                    Geocoder.geocodePosition({
                                        lat: obj.nativeEvent.coordinate.latitude,
                                        lng: obj.nativeEvent.coordinate.longitude,
                                    }).then(res => {
                                        console.log(res[0].formattedAddress)
                                        setAddress(res[0].formattedAddress)
                                    })
                                        .catch(err => console.log(err))
                                    setUserLocation({
                                        latitude: obj.nativeEvent.coordinate.latitude,
                                        longitude: obj.nativeEvent.coordinate.longitude,
                                    })
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: userLocation.latitude,
                                        longitude: userLocation.longitude,
                                    }}
                                />
                            </MapView>
                            <TouchableOpacity style={styles.backButtonContainer}
                                onPress={() => setIsAddress(false)}
                            >
                                <AntDesign name='arrowleft' size={width(5)} color={Colors.black} />
                            </TouchableOpacity>
                            <Button title='pickup Address' containerStyle={styles.pickUpAddress}
                                onPress={() => setIsAddress(false)}
                            />

                        </View>
                }
            </SafeAreaView>
        </Fragment>
    );
}

