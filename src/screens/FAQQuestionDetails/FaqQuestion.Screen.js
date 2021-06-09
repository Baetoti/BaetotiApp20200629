import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text } from 'react-native';
import styles from './FaqQuestion.styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { faq } from '../../DummyData/helpCenter';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';
import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
export default function BuyerSetting( { navigation ,route}) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.FAQ_Screen,
    );
    const item = route?.params.item
   
    function goto_answering(){

        navigation.navigate('FAQAnswers',{item:item});
        // navigation.navigate('FAQAnswers',{item:item.question});
    };
    const _showFaq = ({ item }) => {
        return (
        <View>
            <TouchableOpacityRowVise style={styles.textButtonContainer} activeOpacity={1} 
                onPress={()=>navigation.navigate('FAQAnswers',{item:item})}>
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
                backgroundColor={'#FFFFFF'}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FFFFFF' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={item.title}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        {/* <Text>{item.title}</Text> */}
                        <FlatList
                            data={item.questions}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                            renderItem={_showFaq}
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
