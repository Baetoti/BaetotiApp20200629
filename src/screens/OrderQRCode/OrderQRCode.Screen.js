import React, { Fragment, useState } from 'react';
import {
    View, Text, SafeAreaView,
    Image, StatusBar
} from 'react-native';
import styles from './OrderQRCode.Style';
import Colors from '../../utills/Colors';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import boxImage from '../../assets/BuyerMore/box.png'
import FromImage from '../../assets/BuyerOrderDetails/map-blue.png'
import Data from '../../DummyData/InProcessOrders'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
export default function OrderQRCode({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.OrderQRCode_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * State for order data
     */
    const [orderData, setOrderData] = useState(Data[0])
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundWhite} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    <View style={styles.HeaderContainer}>
                        <HomeHeader onPress={() => navigation.goBack()} title={languageJson.OrderQRCode_Heading} containerStyle={styles.containerStyle} />
                    </View>
                    <View style={styles.orderDetailsContainer}>
                        <ViewRowVise style={styles.orderTopContainer}>
                            <View style={styles.boxImageContainer}>
                                <Image
                                    style={styles.boxImage}
                                    source={boxImage}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.itemDetailTopRightContainer}>
                                <ViewRowVise style={selectdLanguage == 'ar' ? [styles.rowBetween, { marginRight: width(4) }] : styles.rowBetween}>
                                    <Text style={styles.orderIdHeading}>{languageJson.OrderID_Label}</Text>
                                    <Text style={styles.dateText}>23, March 2020</Text>
                                </ViewRowVise>
                                <TextRowVise style={selectdLanguage == 'ar' ? [styles.orderIdText, { marginRight: width(4) }] : styles.orderIdText}>{orderData.id}</TextRowVise>
                            </View>
                        </ViewRowVise>
                        <View style={styles.lineSeparator} />
                        <View style={styles.OrderDetailsBottomContainer}>
                            <View style={styles.bottomDataContainer}>
                                <ViewRowVise style={styles.row}>
                                    <Image
                                        style={styles.fromImage}
                                        source={FromImage}
                                        resizeMode="contain"
                                    />
                                    <Text style={selectdLanguage == 'ar' ? [styles.toFromText, { marginRight: width(1) }] : styles.toFromText}>{languageJson.From_Label}</Text>
                                </ViewRowVise>
                                <Text
                                    numberOfLines={2}
                                    style={styles.addressText}>C-40 Golden Street East 6th Street, New York, USA</Text>
                            </View>
                            <View style={styles.verticleLine}></View>
                            <View style={styles.bottomDataContainer}>
                                <ViewRowVise style={styles.row}>
                                    <Image
                                        style={styles.fromImage}
                                        source={FromImage}
                                        resizeMode="contain"
                                    />
                                    <Text style={selectdLanguage == 'ar' ? [styles.toFromText, { marginRight: width(1) }] : styles.toFromText}>{languageJson.To_Label}</Text>
                                </ViewRowVise>
                                <Text
                                    numberOfLines={2}
                                    style={styles.addressText}>
                                    C-40 Golden Street East 6th Street, New York, USA</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.qrMainContainer}>
                        <View style={styles.qrIconContainer}>
                            <AntDesign name="qrcode" size={width(60)} color={Colors.textBlack} />
                            <Text style={styles.qrOrderID}>{orderData.id}</Text>
                            <View style={styles.lineSeparator} />
                            <Text style={styles.scanQrText}>
                                {languageJson.Note}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView backgroundColor='#f6f6f6' />
        </Fragment>
    );
}

