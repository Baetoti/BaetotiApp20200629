import React, { Fragment, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar, Share, Switch } from 'react-native';
import styles from './DriverMore.Style';
import Colors from '../../utills/Colors';
import cogImage from '../../assets/MoreAssets/cog.png';
import providerProfileUri from '../../assets/MoreAssets/Layer774.png';
import walletImage from '../../assets/MoreAssets/wallet.png';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
import userImage from '../../assets/DriverHome/user.png';
import bikingImage from '../../assets/DriverHome/shop.png';
import moneyImage from '../../assets/DriverHome/money-withdraw.png';
import boxImage from '../../assets/DriverHome/box.png';
import shareImage from '../../assets/DriverHome/share.png';
import phoneImage from '../../assets/DriverHome/contact.png';
import trackImage from '../../assets/DriverHome/track.png';
import helpImage from '../../assets/BuyerMore/help.png';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import MoreComponent from '../../components/More/More.Component'
import { height } from 'react-native-dimension';
import { logout, setBuyer, setProvider } from '../../Redux/Actions/Auth';
import LinearGradient from 'react-native-linear-gradient';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import { useDispatch, useSelector } from 'react-redux';
import QRModal from '../../components/QRScan/QrScannar.Component';
import qrCodeImage from '../../assets/BuyerMore/qr-code.png';
export default function CurrentOrders({ navigation }) {
    /**
     * Redux Dispatch to Logout User
     */
    const dispatch = useDispatch();
    /**
     * Share Method
     */
    const inviteFriends = async () => {
        try {
            const result = await Share.share({
                title:
                    'Baetoti',
                message: "Baetoti\nUse this awsome app\nhttps://Playstore.baetooti...",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.DriverSetting_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    const [qrVisible, setQrVisible] = useState(false);

    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const checkList = () => {
        setQrVisible(false)
    };
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundColor })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    <MoreHeader title='More' isImage={false} imageInView={true} image={cogImage}
                        onPress={() => navigation.navigate('DriverSetting')} />
                    <ScrollView contentContainerStyle={{paddingBottom:height(10)}}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.accountContainer}>
                            <View style={styles.accountInnerContainer}>
                                <Image source={providerProfileUri} style={styles.providerProfileUri} resizeMode='cover' />
                                <View style={styles.accountInfoContainer}>
                                    <Text style={styles.providerText}>Sofia Devidson</Text>
                                    <ViewRowVise style={styles.switchContainer}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("DriverProfile")}>
                                            <Text style={styles.myAccountText}>{languageJson.MyProfile_Button}</Text>
                                        </TouchableOpacity>
                                        {/* <ViewRowVise style={styles.switchContainer}>
                                            <Text style={styles.onlineText} >{isEnabled?`online`:`offline`}</Text>
                                            <Switch
                                                trackColor={{ false: "#767577", true: Colors.buttonSecondaryBlue }}
                                                thumbColor={"#f4f3f4"}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={isEnabled}
                                            />
                                        </ViewRowVise> */}
                                    </ViewRowVise>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.walletContainer}
                            onPress={() => { navigation.navigate('MyWallet') }}
                            activeOpacity={0.8}>
                            <ViewRowVise style={styles.walletInnerContainer}>
                                <View style={styles.walletImageContainer}>
                                    <Image source={walletImage} resizeMode='contain' style={styles.walletImage} />
                                </View>
                                <View style={styles.walletAmoutContainer}>
                                    <TextRowVise style={styles.walletText}>{languageJson.MyWallet_Label}</TextRowVise>
                                    <TextRowVise style={styles.amountText}>{currencyLabel}{isDollar ? (Number("3900") * sarToDollar).toFixed(toFixed) : Number("3900")}</TextRowVise>
                                </View>
                                <ViewRowVise style={styles.addContainer}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Calculator')} style={styles.addTextContainer}>
                                        <Text style={styles.addText}>{languageJson.Add_Button}</Text>
                                    </TouchableOpacity>
                                    <Image source={angleRightImage} style={selectdLanguage == 'ar' ? [styles.angleRightImage, { transform: [{ rotate: '180 deg' }] }] : styles.angleRightImage} resizeMode='center' />
                                </ViewRowVise>
                            </ViewRowVise>
                        </TouchableOpacity>
                        <View >
                            <MoreComponent image={userImage} title={languageJson.BuyerDashboard_Label} imageContainerStyle={styles.imageContainerStyle}
                                onPress={() => dispatch(setBuyer())} />
                            <MoreComponent image={bikingImage} title={languageJson.ProviderDashboard_Label} onPress={() => dispatch(setProvider())} imageContainerStyle={styles.imageContainerStyle} />
                            <MoreComponent isBox title={languageJson.ManageOrders_Label} onPress={() => navigation.navigate('AllDeliveries')} imageContainerStyle={styles.imageContainerStyle} />
                            <MoreComponent title={'QR Scanner'}  imageContainerStyle={styles.imageContainerStyle} image={qrCodeImage}iconImage={styles.iconImage} onPress={() => setQrVisible(true)} />
                            <MoreComponent image={trackImage} title={languageJson.TrackOrder_Label} onPress={() => navigation.navigate('DriverTrackOrder')} imageContainerStyle={styles.imageContainerStyle} />
                            <MoreComponent image={moneyImage} title={languageJson.MyEarnings_Label} imageContainerStyle={styles.imageContainerStyle} onPress={() => navigation.navigate('MyEarning')} />
                            <MoreComponent image={shareImage} title={languageJson.InviteFriends_Label} imageContainerStyle={styles.imageContainerStyle} onPress={inviteFriends} />
                            {/* <MoreComponent image={phoneImage} title={languageJson.Contactus_Label} imageContainerStyle={styles.imageContainerStyle} onPress={() => navigation.navigate('ContactUs')} /> */}
                            <MoreComponent title={languageJson.Help_Label} image={helpImage} imageContainerStyle={styles.imageContainerStyle} onPress={() => navigation.navigate('HelpCenter')} iconImage={styles.iconImage} />
                            <MoreComponent title={languageJson.Logout_Label} iconColor={Colors.buttonSecondaryBlue} isIcon={true} onPress={() => dispatch(logout())} imageContainerStyle={styles.imageContainerStyle} />
                        </View>
                        <Text style={styles.appVersionText}>AppVersion: 1.1.4</Text>
                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
            <QRModal
                isVisible={qrVisible}
                onScanningComplete={checkList}
                onRequsetClose={() => setQrVisible(false)}
            />
        </Fragment>
    );
}

