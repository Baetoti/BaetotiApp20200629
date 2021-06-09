import React, { useState, Fragment } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity,
    Image, FlatList, Platform, StatusBar
} from 'react-native';
import styles from './MyEarning.Style';
import Colors from '../../utills/Colors';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import ModalDropdown from 'react-native-modal-dropdown';
import arrowdownImage from '../../assets/Login/arrow-down.png';
import downloadImage from '../../assets/MoreAssets/download.png';
import bankData from '../../DummyData/bankData';
import receiveImage from '../../assets/MoreAssets/receive.png'
import sendImage from '../../assets/MoreAssets/send.png';
import LinearGraph from '../../components/LinearGraph/LinearGraph.component'
import { height } from 'react-native-dimension';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';

export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.MyEarning_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const appMode = useSelector(state => state.Auth.appMode)
    const isDollar = selectedCurrency == "USD";
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    /**
     * Earning Interval View
     */
    const [selectedEarningInterval, setSelectedEarningInterval] = useState(languageJson.Last30Days_Label);
    /**
     * Individual Transaction View
     */
    const _showTransactionsDetail = ({ item }) => {
        return (
            <View style={styles.transactionsDetailContainer}>
                <View style={styles.transactionsInnerDetailContainer}>
                    <View style={styles.arrowImageContainer}>
                        {item.transactionStatus == 'send' ?
                            <Image source={sendImage} resizeMode='contain' style={[styles.arrowImage, {
                                tintColor: appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary
                            }]} /> :
                            <Image source={receiveImage} resizeMode='contain' style={[styles.arrowImage, {
                                tintColor: appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary
                            }]} />}
                    </View>
                    <View style={styles.bankDetailContainer}>
                        <Text style={styles.bankNameText}>{item.bankname}</Text>
                        <Text style={styles.bankIdText}>{item.bankId}</Text>
                    </View>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </View>
        )
    }
    return (
        <Fragment>
            <StatusBar barStyle={"light-content"} backgroundColor={appMode == 'driver' ? Colors.buttonSecondaryBlue : '#7551E9'} />
            <SafeAreaView
                style={(styles.mainContainer, { backgroundColor: appMode == 'driver' ? Colors.buttonSecondaryBlue : '#7551E9' })}
            />
            <SafeAreaView style={styles.mainContainer}>

                <View style={styles.balanceContainer}>
                    <Text style={styles.amountText}>{currencyLabel}{isDollar ? (Number("3900") * sarToDollar).toFixed(toFixed) : Number("3900")}</Text>
                    <Text style={styles.balanceText}>{languageJson.Balance_Label}</Text>
                    <View style={styles.line}></View>
                    <View style={styles.bankContainer}>
                        <View>
                            <Text style={styles.bankName}>UNS Bank</Text>
                            <Text style={styles.bankNumber}>XXXX-3260</Text>
                        </View>
                        <View style={[styles.withdrawContainer, {
                            backgroundColor: appMode == 'driver' ? Colors.OpacitiveButtonSecondaryBlue : Colors.opacitiveLightPurple,
                        }]}>
                            <Text style={[styles.withdrawText, {
                                color: appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary
                            }]}>{languageJson.Withdraw_Label}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.headerViewContainer, { backgroundColor: appMode == 'driver' ? Colors.buttonSecondaryBlue : '#7551E9' }]}>
                    <MoreHeader title={languageJson.MyEarnings_Heading} isImage={true} onPress={() => navigation.goBack()}
                        titlecontainerStyle={{ color: Colors.backgroundWhite }}
                        containerStyle={{ marginTop: Platform.OS == 'ios' ? 0 : height(2) }} />

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LinearGradient
                        colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.OverViewContainer}>
                            <View style={styles.flexRow}>
                                <Text style={styles.overViewText}>{languageJson.Overview_Label}</Text>
                                <View style={styles.dropDownContainer}>
                                    <ModalDropdown
                                        options={[languageJson.Last30Days_Label, 'Last Year', languageJson.LifeTime]}
                                        dropdownStyle={styles.dropDown}
                                        showsVerticalScrollIndicator={false}
                                        onSelect={(index, value) => setSelectedEarningInterval(value)}
                                        renderRow={(option, index, isSelected) => (
                                            <View style={styles.dropDownItemContainer}>
                                                <Text style={styles.dropDownItemText}>{option}</Text>
                                            </View>
                                        )}
                                    >
                                        <View style={styles.dropDownInnerConainer}>
                                            <Text style={styles.selectedValueText}>{selectedEarningInterval}</Text>
                                            <Image source={arrowdownImage}
                                                resizeMode='contain'
                                                style={styles.arrowdownImage} />
                                        </View>
                                    </ModalDropdown>
                                </View>
                            </View>
                            <LinearGraph driver={appMode == 'driver'} />
                        </View>
                    </LinearGradient>
                    <View style={styles.transactionsContainer}>
                        <ViewRowVise style={styles.transactionsTextContainer}>
                            <Text style={styles.transactionsText}>{languageJson.Transactions_Heading}</Text>
                            <TouchableOpacity style={styles.downloadImageContainer}>
                                <Image source={downloadImage} resizeMode='contain' style={[styles.downloadImage, {
                                    tintColor: appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary
                                }]} />
                                <Text style={[styles.downloadText, {
                                    color: appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary
                                }]}>{languageJson.DownloadPDF_Button}</Text>
                            </TouchableOpacity>
                        </ViewRowVise>
                        <View style={styles.flatListContainer}>
                            <FlatList
                                ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                                // style={styles.itemFlatlistContainer}
                                data={bankData}
                                showsVerticalScrollIndicator={false}
                                renderItem={_showTransactionsDetail}
                                keyExtractor={item => item.key}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}

