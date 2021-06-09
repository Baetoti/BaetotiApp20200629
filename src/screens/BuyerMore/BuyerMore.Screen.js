import React, { useState, Fragment ,useEffect } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar,
    Share
} from 'react-native';
import styles from './BuyerMore.Style';
import Colors from '../../utills/Colors';
import cogImage from '../../assets/MoreAssets/cog.png';
import walletImage from '../../assets/MoreAssets/wallet.png';
import LinearGradient from 'react-native-linear-gradient';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
import avatar from '../../assets/buyerHome/Layer777.png';
import userImage from '../../assets/BuyerMore/shop.png';
import bikingImage from '../../assets/BuyerMore/biking.png';
import heartImage from '../../assets/BuyerMore/heart.png';
import boxImage from '../../assets/BuyerMore/box.png';
import shareImage from '../../assets/BuyerMore/share.png';
import phoneImage from '../../assets/BuyerMore/phone.png';
import trackImage from '../../assets/BuyerMore/track.png';
import helpImage from '../../assets/BuyerMore/help.png';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import MoreComponent from '../../components/More/More.Component'
import { height } from 'react-native-dimension';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setProvider, setDriver } from '../../Redux/Actions/Auth';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import QRModal from '../../components/QRScan/QrScannar.Component';
import qrCodeImage from '../../assets/BuyerMore/qr-code.png';



export default function BuyerMore({ navigation }) {
    /**
     * Redux Dispatch to Logout User
     */
    const dispatch = useDispatch();

    const user = useSelector(
        state => state.Auth.user,
    );
    
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
    const languageJson = useSelector(state => state.Language.languageJson.BuyerMOre_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const isProfileCompleted = useSelector(state => state.Configuration.isProfileCompleted)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    const [qrVisible, setQrVisible] = useState(false);
    const checkList = () => {
        setQrVisible(false)
    };
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#FCEAE6'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FCEAE6' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    <MoreHeader title={languageJson.More_Title} isImage={false} imageInView={true} image={cogImage}
                        onPress={() => navigation.navigate('Setting')} />
                    <ScrollView contentContainerStyle={{paddingBottom:height(5)}}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.accountContainer}>
                            <View style={styles.accountInnerContainer}>
                                <Image
                                    source={avatar}
                                    style={styles.providerProfileUri} resizeMode='cover' />
                                <View style={styles.accountInfoContainer}>
                                    <Text style={styles.providerText}>{user.firstName} {user.lastName}</Text>
                                    <TouchableOpacity activeOpacity={0.7} onPress={() => isProfileCompleted == false ? navigation.navigate('SignUp', { nextScreen: "BuyerProfile" }) : navigation.navigate('BuyerProfile')}>
                                        <Text style={styles.myAccountText}>{languageJson.MyProfile_Button}</Text>
                                    </TouchableOpacity>
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
                        <View>
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={userImage} title={languageJson.ProviderDashboard_Label} onPress={() => isProfileCompleted == false ? navigation.navigate('SignUp', { nextScreen: "provider" }) : dispatch(setProvider())}
                                dotColor='red' isDot
                            />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={bikingImage} title={languageJson.DriverDashboard_Label} onPress={() => dispatch(setDriver())}
                                dotColor={Colors.textGreen} isDot
                            />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={trackImage} iconImage={{ tintColor: Colors.buttonBlue }} title={languageJson.TrackOrder_Label} onPress={() => navigation.navigate('BuyerTrackOrder')} />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={boxImage} title={languageJson.ManageOrders_Label} onPress={() => navigation.navigate('MyOrders')} />
                            <MoreComponent title={languageJson.Qr_Label} imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={qrCodeImage} onPress={() => setQrVisible(true)} />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={heartImage} title={languageJson.YourFavorite_Label} onPress={() => navigation.navigate('BuyerFavourites', { title: languageJson.YourFavorite_Label })} />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={shareImage} title={languageJson.InviteFriends_Label} onPress={inviteFriends} />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} image={phoneImage} title={languageJson.Contactus_Label} onPress={() => navigation.navigate('ContactUs')} />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} title={languageJson.Help_Label} image={helpImage} onPress={() => navigation.navigate('HelpCenter')} />
                            <MoreComponent imageContainerStyle={{ backgroundColor: Colors.opacitiveBlue }} title={languageJson.Logout_Label} isIcon={true} iconColor={Colors.buttonBlue} onPress={() => dispatch(logout())} />
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

