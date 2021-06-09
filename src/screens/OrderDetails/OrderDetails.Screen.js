import React, { Fragment, useState } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList,
    ImageBackground, StatusBar, Switch
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import styles from './OrderDetails.Style';
import Colors from '../../utills/Colors';
import phoneImage from '../../assets/HomeAssets/phone.png';
import chatImage from '../../assets/HomeAssets/chatcopy.png';
import Button from '../../components/Button/Button.component';
import ellipseImage from '../../assets/HomeAssets/Ellipse.png';
import QrImage from '../../assets/DriverHome/qr-code.png';
import angleRightImage from '../../assets/HomeAssets/angle-rightcopy.png';
import barCodeImage from '../../assets/HomeAssets/barCode.png';
import downloadImage from '../../assets/HomeAssets/download.png';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import { height } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import { phoneCall } from '../../utills/Methods'
import ModalComponent from '../../components/ModalComponent/Modal.Component';
import ImageExpandModal from '../../components/ImageExpandModal/ImageExpandModal.Component';
import expandAbleImage from '../../assets/HomeAssets/expandAble.jpg';
import TextRowWise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowWise from '../../components/ViewRowVise/ViewRowVise.Component';
import NotificationModal from '../../components/NotificationModal/NotificationModal';
export default function CurrentOrders({ route, navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.ProviderOrderDetails_Screen)
    // "WantToDeliver":"Want to deliver by yourself",
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const isArabic = selectdLanguage == 'ar';
    const [isExpandedImageVisible, setIsExpandedImageVisible] = useState(false)
    const [expandedImage, setExpandedImage] = useState(null)
    const [orderStaus, setOrderStatus] = useState(false)
    /**
     * Reading Screen Data from redux
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isOrderStaus = useSelector(state => state.Configuration.orderStatus)
    const isDollar = selectedCurrency == "USD";
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    /**
     * Reading Data from previous Screen
     */
    const [item, setItem] = useState(route.params?.item);
    const isOrderCompleted = route.params?.isOrderCompleted
    const name = item.name;
    const pName = item.providerBy.providerName;
    /**
     * States Used
     */
    const [qrVisible, setQrVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(item.itemList[0])
    const [isItemVisible, setIsItemVisible] = useState(false)
    const [isNotification, setIsNotification] = useState(false)

    /**
     * Individual Item View
     */
    const _showItems = ({ item }) => {
        return (
            <TouchableOpacityRowVise style={styles.itemContainer}
                onPress={() => {
                    setSelectedItem(item)
                    setIsItemVisible(!isItemVisible)
                }}>
                <Image
                    source={item.itemimage[0]}
                    style={styles.itemImage} />
                <View style={[styles.itemNameContainer, { alignItems: isArabic ? 'flex-end' : 'flex-start' }]}>
                    <Text numberOfLines={1} style={styles.itemName}>{item.itemname}</Text>
                    <Text style={styles.itemIdText}>{item.itemId}</Text>
                    <TextRowVise numberOfLines={2} style={styles.shortDescriptionText}>{item.shortDescription}</TextRowVise>
                </View>
                <Text style={styles.quantityText}>{item.quantity}x</Text>
                <Text style={styles.itemPriceText}>{currencyLabel}{(item.quantity * isDollar ? (Number(item.itemPrice) * sarToDollar) : Number(item.itemPrice)).toFixed(toFixed)} </Text>
            </TouchableOpacityRowVise>
        )
    }
    const unCheckItemDelivery = () => {
        var newOrdersData = { ...item };
        newOrdersData.providerDelivery = !newOrdersData.providerDelivery;
        setItem(newOrdersData);
    };
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundWhite} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={{ flex: 1 }}
                >
                    <View style={styles.HeaderContainer}>
                        <HomeHeader onPress={() => navigation.goBack()} title={languageJson.OrderDetails_Heading} onPress={() => navigation.goBack()} />
                    </View>

                    <ScrollView style={styles.scrollViewStyle}
                        showsVerticalScrollIndicator={false}>
                        <LinearGradient
                            colors={['#F9F9F9', '#FFFFFF']} style={styles.approvedOrdersContainer}>
                            <ViewRowVise style={styles.approverImageContainer}>
                                <Image
                                    resizeMode='cover'
                                    source={item.image}
                                    style={styles.approverImage} />
                                <ViewRowVise style={styles.approverNameContainer}>
                                    <View>
                                        <TextRowVise style={styles.approverName} numberOfLines={1}>{item.name}</TextRowVise>
                                        <Text numberOfLines={1} style={styles.oridText}>{languageJson.ORID_Label} <Text style={styles.orderIdTextName}>{item.orderId}</Text></Text>
                                    </View>
                                    <ViewRowVise style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.chatButtonContainer}
                                            onPress={() => phoneCall()}>
                                            <Image source={phoneImage}
                                                style={selectdLanguage == 'ar' ? [styles.chatImage, { transform: [{ rotate: '0 deg' }] }] : styles.chatImage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={(item) => navigation.navigate('BuyerChat', { name, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Provider' })}
                                            style={styles.phoneButtonContainer}>
                                            <Image source={chatImage} style={styles.chatImage} />
                                        </TouchableOpacity>
                                    </ViewRowVise>
                                </ViewRowVise>
                            </ViewRowVise>
                            <ViewRowVise style={styles.priceContainer}>
                                <Text style={styles.priceText}>{languageJson.Price_Label}</Text>
                                <Text style={styles.totalPriceText}>{currencyLabel}{isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}</Text>
                            </ViewRowVise>
                            <View style={styles.line} />
                            <ViewRowVise style={styles.dateDeliveryContainer}>
                                {item.providerBy.deliverBy == 'Provider' ?
                                    <Text style={styles.dateDeliveryText}>{languageJson.Servicetimedate_label}</Text> :
                                    <Text style={styles.dateDeliveryText}>{languageJson.Deliverytimedate_label}</Text>
                                }
                                <Text style={styles.dateDeliveryText}>{languageJson.TimeLeft_label}</Text>
                            </ViewRowVise>
                            <ViewRowVise style={styles.dateDeliveryhoursContainer}>
                                <Text style={styles.dateDeliveryTimeText}>{item.deliveryDateTime}</Text>
                                <Text style={styles.timeLeftText}>{item.timeLeft}</Text>
                            </ViewRowVise>
                            <View style={styles.line} />
                            <View style={styles.addressContainer}>
                                <ViewRowVise style={styles.addressHiddenContainer}>
                                    <Text style={styles.addressText}>{languageJson.Address_label}</Text>
                                    <View style={styles.hiddenContainer}>
                                        <Text style={styles.hiddenText}>{languageJson.Hidden_label}</Text>
                                    </View>
                                </ViewRowVise>
                                <TextRowVise numberOfLines={2} style={styles.address}>{item.Address}</TextRowVise>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#F9F9F9', '#FFFFFF']}
                            style={styles.approvedOrdersItemsContainer}>
                            <ViewRowVise style={styles.itemListContainer}>
                                {item.providerBy.deliverBy == 'Provider' ?
                                    <TextRowVise style={styles.itemListText}>Service Details</TextRowVise> :
                                    <TextRowVise style={styles.itemListText}>{languageJson.ItemDetails_heading}</TextRowVise>
                                }
                                <TouchableOpacity onPress={() => navigation.navigate('Review', { data: item.providerBy })}>
                                    <Text style={styles.rateHere}>{languageJson.Rate_Here}</Text>
                                </TouchableOpacity>
                            </ViewRowVise>
                            <View style={styles.line} />
                            <FlatList
                                ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                                style={styles.itemFlatlistContainer}
                                data={item.itemList}
                                showsVerticalScrollIndicator={false}
                                renderItem={_showItems}
                                keyExtractor={key => item.itemList.key} />
                            {/* {!item.selfPickup && (
                                <>
                                    <View style={styles.line} />
                                    <ViewRowWise style={styles.selfDelivery}>
                                        <Text style={styles.wantToDeliveryText}>{languageJson.WantToDeliver}</Text>
                                        <View
                                            style={[
                                                styles.hideLocationContainer,
                                                {
                                                    backgroundColor: item.providerDelivery
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
                                                    item.providerDelivery
                                                        ? Colors.backgroundWhite
                                                        : Colors.purplePrimary
                                                }
                                                onValueChange={unCheckItemDelivery}
                                                ios_backgroundColor={
                                                    item.providerDelivery
                                                        ? Colors.purplePrimary
                                                        : Colors.placeHolderTextColor
                                                }
                                                value={item.providerDelivery}
                                            />
                                        </View>
                                    </ViewRowWise>
                                </>)} */}
                        </LinearGradient>
                        {item.selfPickup ?
                            <View style={[styles.acceptanceContainer, { backgroundColor: Colors.backgroundWhite, paddingVertical: 0 }]}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0.7 }}
                                    locations={[0.1, 0.7]}
                                    colors={[Colors.opacitiveBlue, 'transparent']}
                                    style={styles.acceptanceContainer}>
                                    <TextRowWise style={styles.acceptanceText}>{languageJson.buyerPickup}</TextRowWise>
                                </LinearGradient>
                            </View>
                            :
                            item.providerDelivery == true ?
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0.7 }}
                                    locations={[0.1, 0.7]}
                                    colors={[Colors.greyishPurple, Colors.greyishPurple]}
                                    style={styles.acceptanceContainer}>
                                    <TextRowWise style={styles.acceptanceText}>Delivered By Provider</TextRowWise>
                                </LinearGradient> :
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0.7 }}
                                    locations={[0.1, 0.7]}
                                    colors={[Colors.greyishPurple, Colors.greyishPurple]}
                                    style={styles.acceptanceContainer}>
                                    <TextRowWise style={styles.acceptanceText}>Delivered By Driver</TextRowWise>
                                </LinearGradient>
                        }
                        {/* {item.selfPickup&&
                            <View style={styles.providerContainer}>
                                <TextRowVise>{Buye}</TextRowVise>
                            </View>
                        } */}
                        {!item.selfPickup && item.providerDelivery == false &&
                            <>
                                <View style={styles.providerContainer}>
                                    <TouchableOpacityRowVise style={styles.providerImageContainer}
                                        onPress={
                                            isOrderCompleted ?
                                                () => navigation.navigate('Review', { data: item.providerBy })
                                                : null}
                                        activeOpacity={isOrderCompleted ? 0 : 1}>
                                        <Image
                                            source={{ uri: item.providerBy.providerImage }}
                                            style={styles.providerImage} />
                                        <ViewRowVise style={styles.providerNameContainer}>
                                            <View>
                                                <TextRowVise numberOfLines={1} style={styles.providerName}>{item.providerBy.providerName}</TextRowVise>
                                                <ViewRowVise style={styles.acceptedTextContainer}>
                                                    <Text style={styles.acceptedText}>{languageJson.Accepted_Label}</Text>
                                                    <Image source={ellipseImage}
                                                        resizeMode='contain'
                                                        style={styles.ellipseImage} />
                                                    <Text numberOfLines={1} style={styles.deliverByText}> {languageJson.Deliveryby_label} {item.providerBy.deliverBy}</Text>
                                                </ViewRowVise>
                                            </View>
                                            <ViewRowVise style={styles.providerButtonContainer}>
                                                <TouchableOpacity style={styles.providerPhoneButtonContainer}
                                                    onPress={() => phoneCall()}>
                                                    <Image source={phoneImage} style={styles.chatImage} />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    onPress={(item) => navigation.navigate('BuyerChat', { name: pName, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Provider' })}
                                                    style={styles.providerChatButtonContainer}>
                                                    <Image source={chatImage} style={styles.providerChatImage} />
                                                </TouchableOpacity>
                                            </ViewRowVise>
                                        </ViewRowVise>
                                    </TouchableOpacityRowVise>
                                </View>
                                {console.log(isOrderStaus)}
                                {isOrderStaus==4 &&
                                <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0.7 }}
                                locations={[0.1, 0.7]}
                                colors={[Colors.greyishPurple, Colors.greyishPurple]}
                                style={styles.acceptanceContainer}>
                                <TextRowWise style={[styles.acceptanceText,{marginBottom:height(1)}]}>Add to Favourite</TextRowWise>
                                <Switch
                                    trackColor={{ false: "#767577", true: Colors.purplePrimary }}
                                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </LinearGradient>
                                }
                                
                            </>
                        }
                        <LinearGradient
                            colors={['#F9F9F9', '#FFFFFF']} style={styles.clientContainer}>
                            <ViewRowVise style={styles.orderDetailTextContainer}>
                                <Text style={styles.orderDetailText}>{languageJson.OrderDetails_Heading}</Text>
                                { isOrderStaus==4 && <TouchableOpacity onPress={() => navigation.navigate('Review', { data: item.client })}>
                                    <Text style={styles.rateHere}>{languageJson.Rate_Here}</Text>
                                </TouchableOpacity>}
                            </ViewRowVise>
                            <View style={styles.line} />
                            <ViewRowVise style={styles.clientImageContainer}>
                                <Image
                                    resizeMode='cover'
                                    source={item.client.clientImage}
                                    style={styles.clientImage} />

                                <TouchableOpacityRowVise onPress={
                                    isOrderCompleted ?
                                        () => navigation.navigate('Review', { data: item.client })
                                        : null}
                                    activeOpacity={isOrderCompleted ? 0 : 1}
                                    style={styles.nameContainer}>
                                    <View>
                                        <TextRowVise style={styles.clientNameText}>{item.client.clientName}</TextRowVise>
                                        <TextRowVise style={styles.clientText}>{languageJson.Client_Label}</TextRowVise>
                                    </View>
                                    <Image source={angleRightImage}
                                        resizeMode='contain'
                                        style={[styles.angleRightImage, { transform: [{ rotate: selectdLanguage == 'ar' ? '180deg' : '0deg' }] }]} />

                                </TouchableOpacityRowVise>
                            </ViewRowVise>
                            {!isOrderCompleted && !qrVisible ?

                                <ImageBackground
                                    source={qrVisible ? QrImage : barCodeImage}
                                    style={styles.barCodeImage}
                                    resizeMode={"contain"}

                                >

                                    <TouchableOpacityRowVise
                                        activeOpacity={0.7}
                                        style={styles.barCodeContainer}
                                        onPress={() => setQrVisible(!qrVisible)}
                                    >
                                        <Image source={barCodeImage}
                                            style={styles.barCodeWhiteImage}
                                            resizeMode='contain' />
                                        <Text style={styles.showQrText}>{languageJson.ShowQR_Button}</Text>
                                    </TouchableOpacityRowVise>

                                </ImageBackground> :
                                <TouchableOpacity
                                    onPress={() => {
                                        setExpandedImage(expandAbleImage)
                                        setIsExpandedImageVisible(true)
                                    }}
                                >
                                    <Image source={QrImage} style={styles.barCodeImage}
                                        resizeMode={"contain"} />
                                </TouchableOpacity>
                            }
                            <TouchableOpacityRowVise style={styles.inVoiceButton}>
                                <Image source={downloadImage}
                                    resizeMode='contain'
                                    style={styles.downloadImage} />
                                <Text style={styles.inVoiceText}>{languageJson.Invoice_Button}</Text>
                            </TouchableOpacityRowVise>
                        </LinearGradient>
                    </ScrollView>
                    {isOrderStaus < 4 &&
                        <Button title={isOrderStaus == 0 ? languageJson.AcceptOrder_Label : isOrderStaus == 1 ? languageJson.Prepare_Order : isOrderStaus == 2 ? languageJson.orderIsReady_Heading : languageJson.start_Delivery}
                            //  onPress={() => navigation.navigate('ProviderHome')} 
                            onPress={() => setIsNotification(!isNotification)}
                            containerStyle={{ backgroundColor: Colors.lightPurple, marginTop: height(0) }} />
                    }
                </LinearGradient>
            </SafeAreaView>
            <ModalComponent isVisible={isItemVisible} selectedItem={selectedItem} onPress={() => {
                setIsItemVisible(!isItemVisible)
            }} />
            <ImageExpandModal isVisible={isExpandedImageVisible} onClose={() => setIsExpandedImageVisible(false)}
                image={expandedImage}
            />
            <NotificationModal
                isVisible={isNotification} message={languageJson.messageText}
                buttonText={languageJson.Okay_Button}
                onPress={() => {
                    if (orderStaus) {
                        setIsNotification(!isNotification)
                        navigation.goBack()
                    }
                    else {
                        setIsNotification(!isNotification)
                        setOrderStatus(!orderStaus)
                        navigation.goBack()
                    }

                }}
            />
            <SafeAreaView
                backgroundColor={Colors.ofwhite}
            />
        </Fragment>
    );
}

