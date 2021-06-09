import React, { Fragment, useState } from 'react';
import {
    View, Text, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity, Platform
} from 'react-native';
import styles from './AllDeliveries.Style';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { height, width } from 'react-native-dimension';
import AllDeliveriesData from '../../DummyData/AllDeliveries'
import boxImage from '../../assets/DriverHome/box.png'
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import { useSelector } from 'react-redux';
import arrowdownImage from '../../assets/buyerHome/angle-down.png';
import search from '../../assets/buyerHome/search.png';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function AllDeliveries({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.AllDelivery_screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";

    /**
     * Component for Individual order request
     */
    const _showOrdersRequest = ({ item }) => {
        return (
            <TouchableOpacity style={styles.orderContainer}
                activeOpacity={0.9}
                onPress={() => navigation.navigate('AllDeliveriesOrderDetails', { item })}
            >
                <View style={selectdLanguage == 'ar' ? [styles.orderIdContainer, { flexDirection: 'row-reverse' }] : styles.orderIdContainer}
                >
                    <View style={styles.boxContainer}>
                        <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                    </View>
                    <View style={styles.orderIdTextContainer}>
                        <Text style={selectdLanguage == 'ar' ? [styles.orderIdLabelText, { textAlign: 'right' }] : styles.orderIdLabelText}>{languageJson.OrderID_Label}</Text>
                        <Text numberOfLines={1} style={selectdLanguage == 'ar' ? [styles.orderIdText, { alignSelf: 'flex-end' }] : styles.orderIdText}>{item.OrderId}</Text>
                        <Text style={selectdLanguage == 'ar' ? [styles.orderDate, { textAlign: 'right' }] : styles.orderDate}>{item.orderDate}</Text>
                    </View>
                    <View>
                    <View style={styles.timeLeftContainer}>
                        <Text style={styles.timeLeftText}>1h 26m {languageJson.left}</Text>
                    </View>
                    <MaterialIcons solid name='directions' onPress={() => navigation.navigate('DriverMapTraking')} color={Colors.buttonSecondaryBlue} style={{ alignSelf: 'flex-end', marginTop: height(0.5) }} size={width(7)} />
                    </View>
                </View>
                <View style={styles.distanceDeliverDateContainer}>
                    <View style={styles.deliveryTimeContainer}>
                        <Text style={styles.deliveryTimeTextLabel}>{languageJson.DeliveryTime_Label}</Text>
                        <Text style={styles.deliveryTimeText}>{item.DeliveryTime}</Text>
                    </View>
                    <View style={styles.distanceContainer}>
                        <Text style={styles.distanceTimeTextLabel}>{languageJson.Distance_Label}</Text>
                        <Text style={styles.distanceTimeText}>{item.distance} {selectedDistanceUnit}</Text>
                    </View>
                </View>
                <View style={styles.lineSeparator} />
                <View style={styles.addressContainer}>
                    <View style={styles.providerAddressContainer}>
                        <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                            <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.From_Label}</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.addressText}>{item.ProviderAddress}</Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.BuyerAddressContainer}>
                        <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                            <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.To_Label}</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.addressText}>{item.BuyerAddress}</Text>
                    </View>
                </View>
                <View style={styles.lineSeparator} />
                <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                    <Text style={styles.deliveryChargesLabelText}>{languageJson.DeliveryCharges_Label}</Text>
                    <Text style={styles.deliveryChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges)}</Text>
                </View>
                <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                    <Text style={styles.deliveryChargesLabelText}>{languageJson.ServiceFees_Label}</Text>
                    <Text style={styles.deliveryChargesText}>-{currencyLabel}{isDollar ? (Number(item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.ServiceFees)}</Text>
                </View>
                <View style={styles.halfLineSeparator} />
                <View style={selectdLanguage == 'ar' ? [styles.totalChargesContainer, { flexDirection: 'row-reverse' }] : styles.totalChargesContainer}>
                    <Text style={styles.totalChargesLabelText}>{languageJson.TotalEarned_Label}</Text>
                    <Text style={styles.totalChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges - item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges - item.ServiceFees)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor='#FCEAE6' />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FCEAE6' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    <View style={styles.headerContainer}>
                        <MoreHeader onPress={() => navigation.goBack()} isImage={true} imageInView={false}
                            title={languageJson.AllDeliveries_Title}
                        />
                    </View>
                    <View style={styles.searchContainer}>
                        <ViewRowVise style={styles.searchInnerContainer}>
                            <Image style={styles.searchImage}
                                source={search} />
                            <TextInputRowVise style={styles.searchText}
                                placeholderTextColor={Colors.lightGray}
                                placeholder={languageJson.Search_Label} />
                        </ViewRowVise>
                    </View>
                    <FlatList
                        ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                        style={styles.itemFlatlistContainer}
                        data={AllDeliveriesData}
                        showsVerticalScrollIndicator={false}
                        renderItem={_showOrdersRequest}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{ paddingVertical: height(3) }}
                    />

                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    )
}

