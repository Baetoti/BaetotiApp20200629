import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text } from 'react-native';
import styles from './Faq.styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { faq } from '../../DummyData/helpCenter';
import { faqAr } from '../../DummyData/helpCenterAR';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';
import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
export default function BuyerSetting({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    let myAccountData
    if(selectdLanguage=='ar'){
        myAccountData=faqAr;
    }
    else{
        myAccountData=faq;
    }
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.FAQ_Screen,
    );
    const _showFaq = ({ item }) => {
        return (
            
                <TouchableOpacityRowVise style={styles.textButtonContainer} activeOpacity={1}
                    onPress={()=> navigation.navigate('FaqQuestionDetails',{item:item,})}
                    >
                    <View style={{flexDirection:"row", }}>
                        <Icon_1 name="file-document-outline" size={25} color={Colors.themeColor}
                             style={{alignSelf:'flex-start',marginRight:width(1),}} />
                        <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    
                </TouchableOpacityRowVise>
        )
    }
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#FFFFFF'}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FFFFFF' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',]}
                    style={{ flex: 1, }}>
                    <MoreHeader
                        title={languageJson.faq_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <FlatList
                            data={myAccountData}
                            ItemSeparatorComponent={() => 
                                <View style={styles.itemSeparator} />}
                            renderItem={_showFaq}
                            contentContainerStyle={styles.flatList}
                        />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={"#F6F6F6"}
            />
        </Fragment>
    );
}
