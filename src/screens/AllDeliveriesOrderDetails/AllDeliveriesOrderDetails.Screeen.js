import React, { Fragment, createRef, useState } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView,
    StatusBar
} from 'react-native';
import styles from './AllDeliveriesOrderDetails.Style';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import boxImage from '../../assets/DriverHome/box.png'
import commentImage from '../../assets/DriverHome/comment.png';
import phoneImage from '../../assets/DriverHome/phone.png';
import { height } from 'react-native-dimension';
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import qrCodeImage from '../../assets/DriverHome/qr-code.png';
import { useSelector } from 'react-redux';
import { width } from 'react-native-dimension';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ImageExpandModal from '../../components/ImageExpandModal/ImageExpandModal.Component';
import expandAbleImage from '../../assets/HomeAssets/expandAble.jpg'
import { phoneCall } from '../../utills/Methods'

export default function AllDeliveriesOrderDetails({ route, navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.AllDelivery_OrdersDetails_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const [isExpandedImageVisible, setIsExpandedImageVisible] = useState(false)
    const [expandedImage, setExpandedImage] = useState(null)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR"; 
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
  
    /**
     * Item from Navigation parameters
     */
    const { item } = route.params;
    const clientName = item.clientName;
    const providerName = item.providerName
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
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
                        <ScrollView style={{ height: height(78) }}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.orderIdDetailContainer}>
                                <View style={selectdLanguage == 'ar' ? [styles.orderIdInnerDetailContainer, { flexDirection: 'row-reverse' }] : styles.orderIdInnerDetailContainer}>
                                    <View style={styles.boxContainer}>
                                        <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                                    </View>
                                    <View style={styles.orderIdTextContainer}>
                                        <TextRowVise style={styles.orderIdLabelText}>{languageJson.OrderID_Label}</TextRowVise>
                                        <Text numberOfLines={1}
                                            style={selectdLanguage == 'ar' ? [styles.orderIdText, { textAlign: 'right' }] : styles.orderIdText}>{item.OrderId}</Text>
                                        <Text style={selectdLanguage == 'ar' ? [styles.deliveryDateText, { textAlign: 'right' }] : styles.deliveryDateText}>{item.DeliveryTime}</Text>
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
                                            <TouchableOpacity
                                                onPress={(item) => navigation.navigate('BuyerChat', { name: providerName, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Provider' })}
                                                style={styles.messageButton}>
                                                <Image source={commentImage} resizeMode='contain' style={styles.commentImage} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={selectdLanguage == 'ar' ? [styles.phoneButton, { marginRight: width(2) }] : styles.phoneButton}
                                                onAccessibilityAction={() => phoneCall()}>
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
                                </View>
                                <View style={styles.clientNameContainer}>
                                    <View style={selectdLanguage == 'ar' ? [styles.clientInnerNameContainer, { flexDirection: 'row-reverse' }] : styles.clientInnerNameContainer}>
                                        <Image source={item.clientImage} resizeMode='cover' style={styles.clientImage} />
                                        <View style={styles.providerNameTextContainer}>
                                            <TextRowVise numberOfLines={1} style={styles.clientNameText}>{item.clientName}</TextRowVise>
                                            <TextRowVise style={styles.clientNameTextLabel}>{languageJson.Client_Label}</TextRowVise>
                                        </View>
                                        <View style={selectdLanguage == 'ar' ? [styles.contactContainer, { flexDirection: 'row-reverse' }] : styles.contactContainer}>
                                            <TouchableOpacity
                                                onPress={(item) => navigation.navigate('BuyerChat', { name: clientName, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Provider' })}
                                                style={styles.messageButton}>
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
                                </View>
                            </View>
                            <View style={styles.packageDetailContainer}>
                                <View style={styles.headingTextContainer}>
                                    <TextRowVise style={styles.headingText}>{languageJson.PackageDetails_Heading}</TextRowVise>
                                </View>
                                <View style={styles.lineSeparator} />
                                <TouchableOpacity
                                onPress={() => {
                                    setExpandedImage(expandAbleImage)
                                    setIsExpandedImageVisible(true)
                                }}
                                >
                                <Image source={qrCodeImage} resizeMode='contain' style={styles.qrCodeImage} />
                                </TouchableOpacity>
                                <Text style={styles.orderIdTextLabel}>{languageJson.OrderDetails_Label}</Text>
                                <Text style={styles.orderTextId}>{item.OrderId}</Text>
                                <ViewRowVise style={styles.totalPackageContainer}>
                                    <Text style={styles.totalPackageTextLabel}>{languageJson.Total_Package}</Text>
                                    {item.totalPackage < 10 ?
                                        <Text style={styles.totalPackageText}>0{item.totalPackage}</Text> :
                                        <Text style={styles.totalPackageText}>{item.totalPackage}</Text>
                                    }
                                </ViewRowVise>
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
                                    <Text style={styles.deliveryChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges)}</Text>
                                </View>
                                <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                                    <Text style={styles.deliveryChargesLabelText}>{languageJson.ServiceFees_Label}</Text>
                                    <Text style={styles.deliveryChargesText}>-{currencyLabel}{isDollar ? (Number(item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.ServiceFees)}</Text>
                                </View>
                                <View style={styles.halfLineSeparator} />
                                <View style={selectdLanguage == 'ar' ? [styles.totalChargesContainer, { flexDirection: 'row-reverse' }] : styles.totalChargesContainer}>
                                    <Text style={styles.totalChargesLabelText}>{languageJson.EarnedAmount_Label}</Text>
                                    <Text style={styles.totalChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges - item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges - item.ServiceFees)}</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <Button onPress={() => navigation.navigate('DriverMapTraking')} title={languageJson.GetDirection_Button} containerStyle={styles.containerStyle} />
                    </View>
                    <ImageExpandModal isVisible={isExpandedImageVisible} onClose={() => setIsExpandedImageVisible(false)}
            image={expandedImage} 
            />
                </LinearGradient>
            </SafeAreaView>
        </Fragment >
    )
}

