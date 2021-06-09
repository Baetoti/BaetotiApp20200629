import React, { Fragment } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from './SocialMedia.Style';
import Colors from '../../utills/Colors';
import editImage from '../../assets/MoreAssets/edit.png';
import faceBookImage from '../../assets/MoreAssets/facebook.png';
import twitterImage from '../../assets/MoreAssets/twitter.png';
import instagramImage from '../../assets/MoreAssets/instagram.png';
import youtubeImage from '../../assets/MoreAssets/youtube.png';
import whatsapImage from '../../assets/MoreAssets/whatsap.png';
import snapchatamImage from '../../assets/MoreAssets/snapchat.png';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import SocailMedia from '../../components/SocailMedia/SocailMedia.Component';
import { useSelector } from 'react-redux';
export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Socialmedia_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView backgroundColor={Colors.backgroundColor} />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={styles.container}>
                    <MoreHeader title={languageJson.Socialmedia_Heading} image={editImage} isImage={true} onPress={() => navigation.goBack()} />
                    <View style={styles.socailMediaContainer}>
                        <SocailMedia image={faceBookImage} link='www.facebook.com/sofiaretailHashamjhonwick' isConnected={languageJson.Connected_Label} />
                        <SocailMedia image={twitterImage} link='www.twitter.com/sofiaretailHashamjhonwick' isConnected={languageJson.Connected_Label} />
                        <SocailMedia image={instagramImage} link='www.Instagram.com/sofiaretailHashamjhonwick' isConnected={languageJson.Connected_Label} />
                        <SocailMedia image={youtubeImage} link='www.youtube.com/sofiaretailHashamjhonwick' isConnected={languageJson.Connected_Label} />
                        <SocailMedia image={snapchatamImage} link='www.snapchat.com/sofiaretailHashamjhonwick' isConnected={languageJson.Connected_Label} />
                        <SocailMedia image={whatsapImage} link='+79 894 789 3210' />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView backgroundColor={Colors.ofwhite} />
        </Fragment>
    );
}

