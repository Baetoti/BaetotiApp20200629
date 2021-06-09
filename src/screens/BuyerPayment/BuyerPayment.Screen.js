import React, { Fragment, useState } from 'react';
import {
    SafeAreaView, StatusBar, View, ScrollView,
    Image, Text, TouchableOpacity, FlatList, Linking, Platform
} from 'react-native';
import styles from './BuyerPayment.Style';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import phoneImage from '../../assets/BuyerOrderDetails/phone.png';
import chatImage from '../../assets/BuyerOrderDetails/chat.png';
import walletImage from '../../assets/BuyerOrderDetails/wallet.png';
import LinearGradient from 'react-native-linear-gradient';
import { height, width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import { phoneCall } from '../../utills/Methods';
import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
export default function CurrentOrders({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Payment1_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    const [isVisible, setIsVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const selfPickup = route?.params?.selfPickup
    console.log(selfPickup)
    /**
     * State used data required for the screen's frontend
     */
    const [data, setData] = useState({
        key: 1,
        name: 'Sofia Retailer Store',
        orderId: 'OR4569EB320',
        price: 210.00,
        timeLeft: '1 day,18 hours',
        deliveryDateTime: '09:30 PM, 18 Apr,2020',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        isHidden: 'true',
        Address: 'C-404, Golden Street, East 25th Street, New york City, US',
        providerBy: {
            deliverBy: 'Driver',
            providerName: 'julia Doe',
            providerImage: require('../../assets/HomeAssets/Layer861copy.png'),
            providerPrice: 15,
            userType: 'provider'
        },
        client: {
            clientName: 'Martin Goe',
            clientImage: require('../../assets/HomeAssets/Layer755.png'),
            clientPrice: 45,
            userType: 'client'
        },
        itemList: [
            {
                key: 0,
                itemname: 'Honey Pancake',
                itemId: 5623146,
                itemPrice: 45,
                comment: 'Delivery with carefully',
                shortDescription: 'Extra chess and Extra with honey',
                quantity: 1,
                itemimage: [
                    require('../../assets/HomeAssets/Layer888copy2.png'),
                    require('../../assets/HomeAssets/Layer928.png'),
                    require('../../assets/HomeAssets/Layer935.png')
                ],
                tags: [
                    'Thaifood',
                    'Spicy'
                ],
                description: 'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                key: 1,
                itemname: 'Fruit Pancake',
                itemPrice: 120,
                itemId: 5623120,
                quantity: 2,
                comment: 'Delivery with carefully',
                shortDescription: 'Extra chess and Extra...',
                itemimage: [
                    require('../../assets/HomeAssets/Layer889copy2.png'),
                    require('../../assets/HomeAssets/Layer889copy2.png'),
                    require('../../assets/HomeAssets/Layer889copy2.png'),
                ],
                tags: [
                    'Thaifood',
                    'Spicy'
                ],
                description: 'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

            },
            {
                key: 2,
                itemname: 'Butter Pancake',
                itemPrice: 15,
                comment: 'Delivery with carefully',
                itemId: 5623135,
                quantity: 1,
                shortDescription: 'Extra chess and Extra with honey',
                itemimage: [
                    require('../../assets/HomeAssets/Layer935.png'),
                    require('../../assets/HomeAssets/Layer935.png'),
                    require('../../assets/HomeAssets/Layer935.png')
                ],
                tags: [
                    'Thaifood',
                    'Spicy'
                ],
                description: 'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

            },
        ]
    });
    /**
     * Component for indevidual item 
     */
    const renderItem = ({ item, index }) => {
        return (
            <ViewRowVise style={styles.itemContainer}>
                <TouchableOpacity
                    onPress={() => {
                        setSelectedItem(item)
                        setIsVisible(true)
                    }}
                >
                    <Image
                        source={item.itemimage[0]}
                        style={styles.itemImage} />
                </TouchableOpacity>
                <ViewRowVise style={styles.imageMainContainer}>
                    <View>
                        <Text style={styles.shopName}>{item.itemname}</Text>
                        <ViewRowVise style={styles.row}>
                            <Text numberOfLines={1} style={styles.categoriesHeadingText}>{languageJson.Categories_Label}
                                <Text style={styles.categoriesText}>   {item.comment}</Text></Text>
                        </ViewRowVise>
                    </View>
                    <Text style={styles.shopName}>{selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number(item.itemPrice) * sarToDollar).toFixed(toFixed) : Number(item.itemPrice)}</Text>
                </ViewRowVise>
            </ViewRowVise>
        )
    }
    const phoneCall = () => {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${1122334455}';
        }
        else {
            number = 'tel:${1122334455}';
        }
        Linking.openURL(number);
    }
    return (
        <Fragment>
            <StatusBar barStyle={"light-content"} backgroundColor={'#253851'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#253851' })}
            />
            <SafeAreaView style={styles.container}>
                {/* <View> */}
                <Header
                    title={languageJson.Payment_Title}
                    hideRightIcon
                    onPressBack={() => navigation.goBack()}
                    containerStyle={styles.headerContainer}
                    titleStyle={styles.headerTitle}
                    backIconContainerStyle={styles.backIconContainerStyle}
                    backIconStyle={styles.backIcon}
                />
                <View style={styles.innerContainer}>
                    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}
                    //containerStyle={{ paddingBottom: height(10) }}
                    >
                        <LinearGradient
                            colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                            style={{ borderTopRightRadius: width(9), borderTopLeftRadius: width(9), flex: 1 }}
                        >
                            <View style={styles.itemsDetailContainer}>
                                <FlatList
                                    data={data.itemList}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={renderItem} />
                                <View style={styles.lineSeparator} />
                                <View style={styles.pricesContainer}>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceText}>{selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number("10") * sarToDollar).toFixed(toFixed) : Number("10")}</Text>
                                        <Text style={styles.categoriesHeadingText}>{languageJson.ServiceCharges_Label}</Text>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceText}>{selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number("15") * sarToDollar).toFixed(toFixed) : Number("15")}</Text>
                                        <Text style={styles.categoriesHeadingText}>{languageJson.DelivaryCharges_Label}</Text>
                                    </View>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.priceText}>{selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number("105") * sarToDollar).toFixed(toFixed) : Number("105")}</Text>
                                        <Text style={styles.categoriesHeadingText}>{languageJson.TotalAmount_Label}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.clientDetailsContainer}>
                                <TextRowVise style={selectdLanguage == 'ar' ? [styles.heading, { paddingRight: width(5) }] : styles.heading}>
                                    {languageJson.ClientDetails_Label}
                                </TextRowVise>
                                <View style={styles.lineDoted} />
                                <ViewRowVise style={styles.clientDataContainer}>
                                    <Image
                                        style={styles.clientImage}
                                        source={require('../../assets/HomeAssets/Layer755.png')} />
                                    <View style={selectdLanguage == 'ar' ? [styles.nameContainer, { paddingRight: width(7) }] : styles.nameContainer}>
                                        <TextRowVise style={styles.clientName}>Alex Joe</TextRowVise>
                                        <TextRowVise style={styles.clientText}>{languageJson.Client_Label}</TextRowVise>
                                    </View>
                                </ViewRowVise>
                            </View>
                            {!selfPickup &&
                                <View style={[styles.clientDetailsContainer, { paddingHorizontal: width(5), marginBottom: height(2) }]}>
                                    <TextRowVise style={styles.notForDriverText}>{languageJson.NotForDriver_Heading}</TextRowVise>
                                    <TextRowVise style={[styles.categoriesText, { marginTop: height(2) }]}>kindly be on time</TextRowVise>
                                </View>
                            }

                            {/* <TextRowVise style={selectdLanguage == 'ar' ? [styles.paymentMethodsHeadingText, { paddingRight: width(7) }] : styles.paymentMethodsHeadingText}>{languageJson.SelectPaymentmethod_Hedaing}</TextRowVise> */}
                            {/* <ViewRowVise style={styles.walletContainer}>
                                    <ViewRowVise style={styles.row}>
                                        <View
                                            style={selectdLanguage == 'ar' ? [styles.walletButtonContainer, { marginLeft: width(4) }] :
                                                styles.walletButtonContainer}>
                                            <Image source={walletImage} style={styles.chatImage} />
                                        </View>
                                        <Text style={styles.clientName}>
                                            {languageJson.Wallet_Label}
                                        </Text>
                                    </ViewRowVise>
                                    <ViewRowVise style={styles.row}>
                                        <Text style={styles.balHeadingText}>{languageJson.Bal_Text}</Text>
                                        <Text style={styles.shopName}> {selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number("300") * sarToDollar).toFixed(toFixed) : Number("300")}</Text>
                                        <TouchableOpacity style={styles.addMethodButton}
                                            onPress={() => navigation.navigate('PaymentPayNow')}>
                                            <Text style={styles.addMethodButtonText}>
                                                + {languageJson.ADD_Button}
                                            </Text>
                                        </TouchableOpacity>
                                    </ViewRowVise>

                                </ViewRowVise> */}
                        </LinearGradient>
                        {/* + " " + currencyLabel + String(isDollar ? (Number("46") * sarToDollar).toFixed(toFixed) : Number("46")) */}
                    </ScrollView>
                    <Button title={languageJson.PayNow_Button} containerStyle={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => navigation.navigate('PaymentPayNow')} />
                    {/* 'Failure' */}
                </View>
                <View style={styles.approvedOrdersContainer}>
                    <ViewRowVise style={styles.approverImageContainer}>
                        <Image
                            source={{ uri: data.image }}
                            style={styles.approverImage} />
                        <ViewRowVise style={styles.approverNameContainer}>
                            <View>
                                <Text style={styles.approverName}>{data.name}</Text>
                                <Text style={styles.oridText}>{languageJson.ORID_Label} <Text style={styles.orderIdTextName}>{data.orderId}</Text></Text>
                            </View>
                            <ViewRowVise style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.chatButtonContainer}
                                    onPress={() => phoneCall()}>
                                    <Image source={phoneImage} style={styles.chatImage} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={(item) => navigation.navigate('BuyerChat', { name: data.name, online: true, img: data.image, userType: 'Buyer' })}
                                    style={selectdLanguage == 'ar' ? [styles.phoneButtonContainer, { marginRight: width(2) }] : styles.phoneButtonContainer}>
                                    <Image source={chatImage}
                                        style={styles.chatImage} />
                                </TouchableOpacity>
                            </ViewRowVise>
                        </ViewRowVise>
                    </ViewRowVise>
                    <View style={styles.lineDoted} />
                    <ViewRowVise style={styles.dateDeliveryContainer}>
                        {data.providerBy.deliverBy == 'Provider' ?
                            <Text style={styles.dateDeliveryText}>Service Time and Date</Text> :
                            <Text style={styles.dateDeliveryText}>{languageJson.Deliverytimedate}</Text>
                        }
                        <Text style={styles.dateDeliveryText}>{languageJson.TimeLeft_Label}</Text>
                    </ViewRowVise>
                    <ViewRowVise style={styles.dateDeliveryhoursContainer}>
                        <Text style={styles.dateDeliveryTimeText}>{data.deliveryDateTime}</Text>
                        <Text style={styles.timeLeftText}>{data.timeLeft}</Text>
                    </ViewRowVise>
                </View>
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
                {/* </View> */}

            </SafeAreaView>
        </Fragment >
    );
}

