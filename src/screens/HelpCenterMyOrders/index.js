import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import { myOrders } from '../../DummyData/helpCenter';
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import { width } from 'react-native-dimension';
export default function HelpCenterMyOrders({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.helpCenterMyOrders_Screen,
    );
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const _showPastOrders = ({ item }) => {
        return (
            <View style={styles.flatListContainer}>
                <ViewRowVise style={styles.namePriceContainer}>
                    <Text style={styles.nameText}>{item.resturantName}</Text>
                    <Text style={styles.priceText}>{`${currencyLabel} ${item.price}`}</Text>
                </ViewRowVise>
                <ViewRowVise style={styles.itemNameContainer}>
                    <View>
                        <Text style={styles.foodText}>{item.food}</Text>
                        <Text style={styles.timeDateText}>{`${item.date} ${item.time}`}</Text>
                    </View>
                    <Button containerStyle={styles.reportButton} title={languageJson.report_Button} 
                    onPress={()=>navigation.navigate('HelpCenterOrderReport',{item:item})}
                    />
                </ViewRowVise>
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
                style={(styles.container, { backgroundColor: Colors.white})}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white,Colors.white]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.My_OrderHeading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <FlatList
                            data={myOrders}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                            renderItem={_showPastOrders}
                            contentContainerStyle={styles.flatList}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={() => {
                                return (
                                    <View>
                                        <TouchableOpacityRowVise activeOpacity={1} style={styles.anotherOrderCOntainer}
                                        onPress={()=>navigation.navigate('HelpCenterAnotherOrder')}
                                        >
                                            <Text style={styles.anOtherText}>{languageJson.AnotherOrder_Text}</Text>
                                            <Entypo name='chevron-small-right' size={width(8)} color={Colors.placeHolderTextColor} />
                                        </TouchableOpacityRowVise>
                                        {myOrders.length > 0 && (
                                            <TextRowVise style={styles.pastOrderText}>{languageJson.CurrentOrders}</TextRowVise>
                                        )}
                                    </View>
                                )

                            }}
                        />
                         <FlatList
                            data={myOrders}
                            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                            renderItem={_showPastOrders}
                            contentContainerStyle={styles.flatList}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={() => {
                                return (
                                    <View>
                                        {/* <TouchableOpacityRowVise activeOpacity={1} style={styles.anotherOrderCOntainer}
                                        onPress={()=>navigation.navigate('HelpCenterAnotherOrder')}
                                        >
                                            <Text style={styles.anOtherText}>{languageJson.AnotherOrder_Text}</Text>
                                            <Entypo name='chevron-small-right' size={width(8)} color={Colors.placeHolderTextColor} />
                                        </TouchableOpacityRowVise> */}
                                        {myOrders.length > 0 && (
                                            <TextRowVise style={styles.pastOrderText}>{languageJson.pastOrder_Text}</TextRowVise>
                                        )}
                                    </View>
                                )

                            }}
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
