import React, { useState, Fragment } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
} from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
import searchImage from '../../assets/HomeAssets/search.png';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import InProcessOrders from '../../DummyData/InProcessOrders';
import { width, height } from 'react-native-dimension'
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import StepIndicator from '../../components/StepIndicatorBuyerTrackOrder/StepIndicatorBuyerTrackOrder.component';
export default function MyOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.YourOrder_Inprocess_Screen)
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
     * States Used
     */

    /**
     * Component for Individual in Process order item
     */
    const renderInProcessOrder = ({ item, index }) => {
        return (
            <View style={styles.orderContainer}>
                <View style={styles.topContainer}>
                    <ViewRowVise style={styles.row}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.nameContainer}>
                            <ViewRowVise style={styles.idDateContainer}>
                                <Text style={styles.orderId}>{item.id}</Text>
                                <Text style={styles.dateTimeText}>{item.dateTime}</Text>
                            </ViewRowVise>
                            <TextRowVise style={styles.storeName}>{item.storeName}</TextRowVise>
                            <ViewRowVise style={styles.idDateContainer}>
                                <Text style={styles.priceHeading}>{languageJson.Price_Label}</Text>
                                <Text style={styles.priceText}>
                                    {currencyLabel}{isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
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
                        <Text style={styles.itemsText}>{item.items}</Text>
                    </View>
                    {/* <TouchableOpacityRowVise
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('BuyerPendingOrders', { item: { ...item } })}
                        style={styles.row}>
                        <Text style={styles.detailsText}>{languageJson.ViewDetails_Button}</Text>
                        <Image
                            source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
                            style={selectdLanguage == 'ar' ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }] : styles.arrowRight}
                        />
                    </TouchableOpacityRowVise> */}
                </ViewRowVise>
            </View>
        );
    };
    /**
     * Reading Screen Data from redux depending on selected language
     */

    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.backgroundWhite}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.HeaderContainer}>
                            <HomeHeader
                                onPress={() => navigation.popToTop()}
                                title={languageJson.YourOrder_Heading}
                                image={searchImage}
                                containerStyle={styles.containerStyle}
                            />

                        </View>

                        <FlatList
                            data={InProcessOrders}
                            renderItem={renderInProcessOrder}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: height(3) }}
                        />

                    </View>

                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView backgroundColor='#f6f6f6' />
        </Fragment>
    );
}
