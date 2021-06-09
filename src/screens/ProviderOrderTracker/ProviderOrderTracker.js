import React, { useState, Fragment } from 'react';
import {
    View, Text, SafeAreaView,
    Image, FlatList, StatusBar, TouchableOpacity
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import { width, height } from 'react-native-dimension';
import styles from './ProviderOrderTracker.Style'
import Colors from '../../utills/Colors';
import searchImage from '../../assets/HomeAssets/search.png'
import approvedOrders from '../../DummyData/approvedOrders';
import ModalComponent from '../../components/ModalComponent/Modal.Component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import moment from 'moment'
import StepIndicator from '../../components/StepIndicatorBuyerTrackOrder/StepIndicatorBuyerTrackOrder.component';
export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.CurrentOrders_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    /**
     * States used for item and tab selections
     */
    const [selectedItem, setSelectedItem] = useState(approvedOrders[0].itemList[0])
    const [isItemVisible, setIsItemVisible] = useState(false)
    const renderInProcessOrder = ({ item, index }) => {
        return (
            <View style={styles.orderContainer}>
                <View style={styles.topContainer}>
                    <ViewRowVise style={styles.row}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.nameContainer}>
                            <ViewRowVise style={styles.idDateContainer}>
                                <Text style={styles.orderId}>{item.orderId}</Text>
                                <Text style={styles.dateTimeText}>{moment().format("DD MMM YYYY")}</Text>
                            </ViewRowVise>
                            <TextRowVise style={styles.storeName}>{item.name}</TextRowVise>
                            <ViewRowVise style={styles.idDateContainer}>
                                <Text style={styles.priceHeading}>{languageJson.Price_Label}</Text>
                                <Text style={styles.priceText}>
                                    {currencyLabel} {isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
                                </Text>
                            </ViewRowVise>
                        </View>
                    </ViewRowVise>
                    <View />
                </View>
                <View style={styles.lineSeparator} />
                <StepIndicator currentPosition={pendingOrders.trackingData.statusId} containerStyle={{ alignSelf: 'center' }} />
                <View style={styles.lineSeparator} />
                <ViewRowVise style={styles.bottomRowContainer}>
                    <View style={styles.row}>
                        <Image
                            source={require('../../assets/BuyerOrderDetails/package.png')}
                            style={styles.packageImage}
                        />
                        <Text style={styles.itemsText}>{item.itemList.length} {languageJson.ItemsPurchased}</Text>
                    </View>
                    <TouchableOpacityRowVise
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('OrderDetails', { item, isOrderCompleted: false })}
                        style={styles.row}>
                        <Text style={styles.detailsText}>{languageJson.ViewDetails_Button}</Text>
                        <Image
                            source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
                            style={selectdLanguage == 'ar' ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }] : styles.arrowRight}
                        />
                    </TouchableOpacityRowVise>
                </ViewRowVise>
            </View>
        );
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
                    <View style={{ flex: 1 }}>
                        <View style={styles.HeaderContainer}>
                            <HomeHeader title={languageJson.AllOrders_Title} onPress={() => navigation.goBack()} image={searchImage} containerStyle={styles.containerStyle} />
                        </View>
                        <FlatList
                            ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                            style={styles.itemFlatlistContainer}
                            data={approvedOrders}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderInProcessOrder}
                            keyExtractor={item => item.key}
                            contentContainerStyle={{ paddingBottom: height(3) }}
                        />

                        <ModalComponent isVisible={isItemVisible} selectedItem={selectedItem} onPress={() => {
                            setIsItemVisible(!isItemVisible)
                        }} />
                    </View>

                </LinearGradient>

            </SafeAreaView>
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.ofwhite })}
            />
        </Fragment>
    );
}

