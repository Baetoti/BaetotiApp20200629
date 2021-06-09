import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text } from 'react-native';
import styles from './MyAccount.Styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { myAccount } from '../../DummyData/helpCenter';
import { myAccountAr } from '../../DummyData/helpCenterAR';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';

import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BuyerSetting({ navigation ,route}) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    let myAccountData
    if(selectdLanguage=='ar'){
        myAccountData=myAccountAr;
    }
    else{
        myAccountData=myAccount;
    }
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.MyAccount_Screen,
    );
    const _myAccount = ({ item }) => {
        return (
            <View>
                <TouchableOpacityRowVise style={styles.textButtonContainer} activeOpacity={1} 
                    onPress={()=>navigation.navigate('MyAccountAnswer',{item:item})}
                >
                    <View style={{flexDirection:"row"}}>
                        <Icon_1 name="file-question-outline" size={25} color={Colors.themeColor}
                            style={{alignSelf:'flex-start',marginRight:width(1)}} />
                        <Text style={styles.titleText}>{item.question}</Text>
                    </View>
                </TouchableOpacityRowVise>
                <View style={styles.line} />
            </View>
        )
    }
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.white}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.white })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white, Colors.white,]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.myAccount_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <FlatList
                            data={myAccountData}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                            renderItem={_myAccount}
                            contentContainerStyle={styles.flatList}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={Colors.backgroundWhite}
            />
        </Fragment>
    );
}
