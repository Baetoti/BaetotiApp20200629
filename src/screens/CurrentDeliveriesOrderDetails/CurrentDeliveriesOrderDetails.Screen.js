import React, { Fragment } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image,
    ScrollView, StatusBar
} from 'react-native';
import styles from './CurrentDeliveriesOrderDetails.Style';
import Button from '../../components/Button/Button.component';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import boxImage from '../../assets/DriverHome/box.png'
import commentImage from '../../assets/DriverHome/comment.png';
import phoneImage from '../../assets/DriverHome/phone.png';
import { height, width } from 'react-native-dimension';
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import qrCodeImage from '../../assets/DriverHome/qr-code.png';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import { phoneCall } from '../../utills/Methods'

export default function CurrentDeliveriesOrderDetails({ route, navigation }) {
    /**
     * Reading Item from Navigation Params
     */
    const { item } = route.params;
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.CurrentDeliveryDetail_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
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
                        <ScrollView style={{ height: height(77) }}
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
                            <View style={styles.orderStatusContainer}>
                                <View style={selectdLanguage == 'ar' ? [styles.orderStatusInnerContainer, { flexDirection: 'row-reverse' }] : styles.orderStatusInnerContainer}>
                                    <Text style={styles.orderStatusLabelText}>{languageJson.Status_Label}</Text>
                                    <Text style={styles.orderStatusText}>{item.status}</Text>
                                </View>
                            </View>
                            <View style={styles.orderDetailContainer}>
                                <View style={styles.headingTextContainer}>
                                    <TextRowVise style={styles.headingText}>{languageJson.OrderDetails_Heading}</TextRowVise>
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
                                <View style={selectdLanguage == 'ar' ? [styles.qrCodeImageContainer, { flexDirection: 'row-reverse' }] : styles.qrCodeImageContainer}>
                                    <Image source={qrCodeImage} resizeMode='contain' style={styles.qrCodeImage} />
                                    <View style={styles.orderIdTextLabelContainer}>
                                        <TextRowVise style={styles.orderIdTextLabel}>{languageJson.OrderID_Label}</TextRowVise>
                                        <Text style={selectdLanguage == 'ar' ? [styles.orderTextId, { textAlign: 'right' }] : styles.orderTextId}>{item.OrderId}</Text>
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
                                    <Text style={styles.deliveryChargesText}>${item.DeliveryCharges}.00</Text>
                                </View>
                                <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                                    <Text style={styles.deliveryChargesLabelText}>{languageJson.ServiceFees_Label}</Text>
                                    <Text style={styles.deliveryChargesText}>-${item.ServiceFees}.00</Text>
                                </View>
                                <View style={styles.halfLineSeparator} />
                                <View style={selectdLanguage == 'ar' ? [styles.totalChargesContainer, { flexDirection: 'row-reverse' }] : styles.totalChargesContainer}>
                                    <Text style={styles.totalChargesLabelText}>{languageJson.EarnedAmount_Label}</Text>
                                    <Text style={styles.totalChargesText}>${item.DeliveryCharges - item.ServiceFees}.00</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <Button title={languageJson.GetDirection_Label} containerStyle={styles.containerStyle}
                            onPress={() => navigation.navigate("DriverMapTraking")} />
                        <Button title={languageJson.Cancel_Button} containerStyle={styles.editDocumentButton} textStyle={styles.textStyle} />
                    </View>

                </LinearGradient>
            </SafeAreaView>
        </Fragment >
    )
}

