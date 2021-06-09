import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import styles from './Thankyou.Style';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import Button from '../../components/Button/Button.component'
export default function BuyerSetting({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.Thankyou_Screen,
    );

    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#FCEAE6'}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FCEAE6' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6',]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.HelpCenter_heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <Text style={styles.thankYouText}>{languageJson.ThankYou_Text}</Text>
                        <Button title={languageJson.keep_Button} containerStyle={styles.keepButton} 
                        onPress={()=>navigation.navigate('BuyerMore')}
                        />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={'#F6F6F6'}
            />
        </Fragment>
    );
}
