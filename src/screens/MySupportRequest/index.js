import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import { mySupportRequest } from '../../DummyData/helpCenter';
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import { width, height } from 'react-native-dimension';

export default function MySupportRequest({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.mySupportRequest,
    );
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const _showMySupportRequest = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatListContainer}
                activeOpacity={1} onPress={() => navigation.navigate('MySupportRequestDetail')}
            >
                <TextRowVise style={styles.topicText}>{item.topic}</TextRowVise>
                <ViewRowVise style={styles.issueContainer}>
                    <Text style={styles.issueText}>{item.issue}</Text>
                    <Entypo name={selectdLanguage == 'ar' ? 'chevron-small-left' : 'chevron-small-right'} size={width(8)} color={Colors.placeHolderTextColor} />
                </ViewRowVise>
                <TextRowVise style={styles.dateTimeText}>{`${item.date} ${item.time}`}</TextRowVise>
            </TouchableOpacity>
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
                    colors={[Colors.white,Colors.white,]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.SupportRequest_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                   
                        <View style={styles.mainContainer}>
                            <FlatList
                                data={mySupportRequest}
                                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                                renderItem={_showMySupportRequest}
                                contentContainerStyle={styles.flatList}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled={true}
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
