import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text } from 'react-native';
import styles from './MakingPayment.Styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { payments } from '../../DummyData/helpCenter';
import { paymentsAr } from '../../DummyData/helpCenterAR';
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
        myAccountData=paymentsAr;
    }
    else{
        myAccountData=payments;
    }
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.MakingPaymnet_Screen,
    );
    const _showPayments = ({ item }) => {
        return (
            <View>
                <TouchableOpacityRowVise style={styles.textButtonContainer} activeOpacity={1} 
                onPress={()=>navigation.navigate('MakingPaymentAnswer',{item:item})}
                >
                    <View style={{flexDirection:"row"}}>
                        <Icon_1 name="file-question-outline" size={25} color={Colors.themeColor}
                        style={{alignSelf:'flex-start', marginRight:width(1)}} />
                        <Text style={styles.titleText}>{item.question}</Text>
                    </View>
                    {/* <Entypo name='chevron-small-right' size={width(8)} color={Colors.placeHolderTextColor} /> */}
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
                style={(styles.container, { color:Colors.white})}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white,Colors.white]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.payment_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <FlatList
                            data={myAccountData}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                            renderItem={_showPayments}
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
