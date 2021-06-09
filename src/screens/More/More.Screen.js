import React, { Fragment ,useState ,useEffect} from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image,
    ScrollView, StatusBar, Share
} from 'react-native';
import styles from './More.Style';
import Colors from '../../utills/Colors';
import cogImage from '../../assets/MoreAssets/cog.png';
import providerProfileUri from '../../assets/MoreAssets/Layer774.png';
import walletImage from '../../assets/MoreAssets/wallet.png';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
import userImage from '../../assets/MoreAssets/user.png';
import bikingImage from '../../assets/MoreAssets/biking.png';
import moneyImage from '../../assets/MoreAssets/money.png';
import boxImage from '../../assets/MoreAssets/box.png';
import shareImage from '../../assets/MoreAssets/share.png';
import phoneImage from '../../assets/MoreAssets/phone.png';
import trackImage from '../../assets/BuyerMore/track.png';
import likeImage from '../../assets/BuyerMore/like.png';
import helpImage from '../../assets/BuyerMore/help.png';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import MoreComponent from '../../components/More/More.Component';
import qrCodeImage from '../../assets/BuyerMore/qr-code.png';
import { height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setBuyer, setDriver } from '../../Redux/Actions/Auth';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import QRModal from '../../components/QRScan/QrScannar.Component';
export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.BuyerSetting_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const [qrVisible, setQrVisible] = useState( false);
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    /**
     * Redux Dispatch to Logout User
     */
    const dispatch = useDispatch();
    /**
     * Share Method
     */

    var user = useSelector(
        state => state.Auth.user,
    );
     

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
    const checkList = () => {
        setQrVisible(false)
      };
      
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView backgroundColor={Colors.backgroundColor} />
            {/* <SafeAreaView style={styles.container}> */}
            <LinearGradient
                colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                style={styles.container}>
                <MoreHeader title={languageJson.More_Title} isImage={false} imageInView={true} image={cogImage}
                    onPress={() => navigation.navigate('Setting')} />
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:height(15)}}
                >
                    <View style={styles.accountContainer}>
                        <View style={styles.accountInnerContainer}>
                            <Image source={providerProfileUri} style={styles.providerProfileUri} resizeMode='cover' />
                            <View style={styles.accountInfoContainer}>
                                <Text style={styles.providerText}>{user.firstName} {user.lastName}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                                    <Text style={styles.myAccountText}>{languageJson.MyAccount_Label}</Text>
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
                        <MoreComponent image={userImage} title={languageJson.BuyerDashboard_Label} onPress={() => dispatch(setBuyer())} />
                        <MoreComponent image={bikingImage} title={languageJson.DriverMode_Label} onPress={() => dispatch(setDriver())} />
                        <MoreComponent image={trackImage} iconImage={{ tintColor: Colors.purplePrimary }} title={languageJson.TrackOrder_Label} onPress={() => navigation.navigate('ProviderOrderTracker')} />
                        <MoreComponent image={boxImage} title={languageJson.ManageOrders_Label} onPress={() => navigation.navigate('CurrentOrders')} />
                        <MoreComponent title={languageJson.Qr_Label} iconImage={{ tintColor: Colors.purplePrimary }} image={qrCodeImage} onPress={() => setQrVisible(true)} />
                        <MoreComponent image={moneyImage} title={languageJson.MyEarnings_Label} onPress={() => navigation.navigate('MyEarning')} />
                        <MoreComponent image={shareImage} title={languageJson.InviteFriends_Label} onPress={inviteFriends} />
                        <MoreComponent image={likeImage} title={languageJson.Favourite_Driver_Label} onPress={() => navigation.navigate('FavouriteDriver')} />
                        <MoreComponent image={phoneImage} title={languageJson.Contactus_Label} onPress={() => navigation.navigate('ContactUs')} />
                        <MoreComponent title={languageJson.Help_Label} image={helpImage} onPress={() => navigation.navigate('HelpCenter')} iconImage={{ tintColor: Colors.purplePrimary }} />
                        <MoreComponent title={languageJson.Logout_Label} isIcon={true} onPress={() => dispatch(logout())} />
                    </View>
                    <Text style={styles.appVersionText}>AppVersion: 1.1.4</Text>
                </ScrollView>
            </LinearGradient>
            <QRModal
                isVisible={qrVisible}
                onScanningComplete={checkList}
                onRequsetClose={() => setQrVisible(false)}
            />
            {/* </SafeAreaView> */}
        </Fragment>
    );
}