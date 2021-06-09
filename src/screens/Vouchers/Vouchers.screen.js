import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text } from 'react-native';
import styles from './Vouchers.Styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { vouchers } from '../../DummyData/helpCenter';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';
export default function BuyerSetting({ navigation ,route}) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.Voucher_Screen,
    );
    const _showVouchers = ({ item }) => {
        return (
            <View>
                <TouchableOpacityRowVise style={styles.textButtonContainer} activeOpacity={1} 
                onPress={()=>navigation.navigate('VouchersAnswer',{item:item})}
                >
                    <Text style={styles.titleText}>{item.question}</Text>
                    <Entypo name='chevron-small-right' size={width(8)} color={Colors.placeHolderTextColor} />
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
                    colors={[Colors.white,Colors.white]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.voucher_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        {/* <FlatList
                            data={vouchers}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                            renderItem={_showVouchers}
                            contentContainerStyle={styles.flatList}
                            showsVerticalScrollIndicator={false}
                        /> */}
                        <Text style={styles.text}>{languageJson.avalibleSoon}</Text>
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={Colors.backgroundWhite}
            />
        </Fragment>
    );
}
