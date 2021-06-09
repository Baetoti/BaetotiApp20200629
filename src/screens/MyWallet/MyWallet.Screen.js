import React, { Fragment, useState, createRef } from 'react';
import {
    SafeAreaView, StatusBar, View,
    Text, FlatList, Image,
    TouchableOpacity, LayoutAnimation, UIManager
} from 'react-native';
import styles from './MyWallet.Style';
import Colors from '../../utills/Colors';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import PlusImage from '../../assets/BuyerMore/plus-white.png'
import downloadImage from '../../assets/BuyerMore/statement-purple.png'
import receiveImage from '../../assets/BuyerMore/receive.png'
import sendImage from '../../assets/BuyerMore/send.png'
import { ScrollView } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import Transactions from '../../DummyData/Transactions';
import LinearGradient from 'react-native-linear-gradient';
import PopItemComponent from '../../components/PopItemComponent/PopItemComponent.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
const cardImages = [
    require('../../assets/BuyerOrderDetails/visacard.png'),
    require('../../assets/BuyerOrderDetails/mastercard.png'),
];
export default function MyWallet({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.MyWallet)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";

    /**
     * Constant pop items data
     */
    const popItems = [
        {
            image: require('../../assets/BuyerMore/atm.png'),
            title: languageJson.PaymentOptions_Label
        },
        {
            image: require('../../assets/BuyerMore/invoice.png'),
            title: languageJson.Invoice_Label
        }
    ];
    /**
     * States  
     */
    const [selectedTransactionsInterval, setSelectedTransactionsInterval] = useState(languageJson.All_Label);
    const [selectedDownloadTransactionsInterval, setSelectedDownloadTransactionsInterval] = useState(languageJson.LastWeek_Label);
    const [threeDotsModalVisible, setThreeDotsModalVisible] = useState(false);
    const [zIndex, setzIndex] = useState(1);
    /**
     * Ref of Scroll View
     */
    const scrollRef = createRef(null);
    /**
     * Layout Animation configuration
     */
    if (
        Platform.OS === "android" &&
        UIManager.setLayoutAnimationEnabledExperimental
    ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    /**
     * card image component
     */
    const renderCardImage = ({ item, index }) => {
        return (
            <Image
                source={item}
                style={styles.cardImage} />
        )
    }
    /**
     * Transaction individaul component
     */
    const renderTransaction = ({ item, index }) => {
        return (
            <ViewRowVise style={styles.transactionCOntainer}>
                <ViewRowVise style={styles.row}>
                    <View style={item.transactionType == 'in' ?
                        styles.receiveImageContainer : item.transactionType == 'out' ?
                            styles.sendImageContainer : styles.addImageContainer}>
                        <Image
                            source={item.transactionType == 'in' ?
                                receiveImage : item.transactionType == 'out' ?
                                    sendImage : PlusImage}
                            style={styles.inoutImage} />
                    </View>
                    <View style={styles.transactionDataContainer}>
                        <TextRowVise style={styles.transactionTitle}>{item.title}</TextRowVise>
                        <TextRowVise style={styles.transactionDate}>{item.date}</TextRowVise>
                    </View>
                </ViewRowVise>
                <Text style={styles.transactionAmoutText}>{currencyLabel}{isDollar ? (Number(item.amount) * sarToDollar).toFixed(toFixed) : Number(item.amount)}</Text>
            </ViewRowVise>
        )
    }
    return (
        <Fragment>
            <StatusBar barStyle={"light-content"} backgroundColor={'#1C2D41'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#1C2D41' })}
            />
            <SafeAreaView style={styles.container}>
                <View>
                    <Header
                        title={languageJson.MyWallet_Title}
                        optionsIcon
                        whiteBackIcon
                        onPressRight={() => setThreeDotsModalVisible(true)}
                        onPressBack={() => navigation.goBack()}
                        containerStyle={styles.headerContainer}
                        titleStyle={{ color: Colors.backgroundWhite }}
                        backIconContainerStyle={styles.backIconContainerStyle}
                    />
                    <View >
                        <View style={styles.totalBalanceContainer}>
                            <TextRowVise style={styles.totalBalanceText}>{languageJson.TotalBalance_Label}</TextRowVise>
                            {zIndex == 0 &&
                                <Text style={styles.smallBalanceText}>{currencyLabel} {isDollar ? (Number("3900") * sarToDollar).toFixed(toFixed) : Number("3900")}</Text>
                            }
                        </View>
                        <View style={[styles.fixContainer, { zIndex: zIndex }]}>
                            <ViewRowVise style={styles.balanceContainer}>
                                <Text style={styles.balanceText}>{currencyLabel} {isDollar ? (Number("3900") * sarToDollar).toFixed(toFixed) : Number("3900")}</Text>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Calculator')} style={styles.addButtonContainer}>
                                    <Image
                                        source={PlusImage}
                                        style={styles.plusImage}
                                    />
                                </TouchableOpacity>
                            </ViewRowVise>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('CalculatorWithdraw')} style={styles.withdrawContainer}>
                                <Text style={styles.withdrawText}>{languageJson.Withdraw_Label}</Text>
                            </TouchableOpacity>
                            <View style={styles.balanceContainer}>
                                <Text style={styles.yourCardsHeading}>{languageJson.YourCards_Label}</Text>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('BuyerPaymentAddCard')}>
                                    <Text style={styles.addCardText}>+ {languageJson.AddCard_Label}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.flatList}>
                                <FlatList
                                    style={styles.flatList}
                                    contentContainerStyle={styles.flatListContainer}
                                    data={cardImages}
                                    renderItem={renderCardImage}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                        <View style={styles.scrollContainer}>
                            <ScrollView
                                decelerationRate={0}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.scroll}
                                ref={scrollRef}
                                scrollEventThrottle={1}
                                onScroll={(event) => {
                                    console.log(event.nativeEvent)
                                    if (event.nativeEvent.contentOffset.y > 35) {
                                        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                                        setzIndex(0)
                                    }
                                    else {
                                        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                                        setzIndex(1)
                                    }
                                }}
                            >
                                <View style={styles.scrollMainContainer}>
                                    <ViewRowVise style={styles.rowTransactionsHead}>
                                        <Text style={styles.yourTransactionsHeadText}>{languageJson.YourTransactions_Label}</Text>
                                        <ModalDropdown
                                            options={[languageJson.LastWeek_Label, languageJson.LastMonth_Label, languageJson.All_Label]}
                                            dropdownStyle={styles.privateDropDown}
                                            renderRow={(option, index, isSelected) => (
                                                <View style={styles.privateDropDownItemContainer}>
                                                    <Text style={styles.privateDropDownItemText}>{option}</Text>
                                                </View>
                                            )}
                                            onSelect={(index, option) => {
                                                setSelectedTransactionsInterval(option)
                                            }}>
                                            <View style={styles.privateInnerContainer}>
                                                <Text style={styles.privateText}>{selectedTransactionsInterval}</Text>
                                                <Image
                                                    source={require('../../assets/AddNewAssets/angle-down.png')}
                                                    style={styles.arrowDown}
                                                    resizeMode={"contain"} />
                                            </View>
                                        </ModalDropdown>
                                    </ViewRowVise>
                                    <View style={styles.transactionsInnerContainer}>
                                        <ViewRowVise style={styles.rowTransactionsHead}>
                                            <ModalDropdown
                                                options={[languageJson.LastWeek_Label, languageJson.LastMonth_Label, languageJson.All_Label]}
                                                dropdownStyle={styles.downloadDropDownContainer}
                                                renderRow={(option, index, isSelected) => (
                                                    <View style={styles.privateDropDownItemContainer}>
                                                        <Text style={styles.downloadTransactionsIntervalText}>{option}</Text>
                                                    </View>
                                                )}
                                                onSelect={(index, option) => {
                                                    setSelectedDownloadTransactionsInterval(option)
                                                }}
                                            >
                                                <View style={styles.downloadDropdownRow}>
                                                    <Text style={styles.selectedDownloadTransactionsInterval}>{selectedDownloadTransactionsInterval}</Text>
                                                    <Image
                                                        source={require('../../assets/AddNewAssets/angle-down.png')}
                                                        style={styles.arrowDown}
                                                        resizeMode={"contain"} />
                                                </View>
                                            </ModalDropdown>
                                            <TouchableOpacity style={styles.row}>
                                                <Image
                                                    source={downloadImage}
                                                    style={styles.downloadImage}
                                                />
                                                <Text style={styles.downloadText}>{languageJson.Statement_Label}</Text>
                                            </TouchableOpacity>
                                        </ViewRowVise>

                                        <LinearGradient
                                            colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                                            style={{ flex: 1 }}
                                        >
                                            <FlatList
                                                nestedScrollEnabled={true}
                                                contentContainerStyle={styles.transactionFlatList}
                                                data={Transactions}
                                                style={styles.flatListTransaction}
                                                renderItem={renderTransaction}
                                                showsVerticalScrollIndicator={false} />

                                        </LinearGradient>
                                    </View>
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                </View>
                <PopItemComponent
                    isModalVisible={threeDotsModalVisible}
                    popItems={popItems}
                    onPressClose={() => setThreeDotsModalVisible(!threeDotsModalVisible)} />
            </SafeAreaView>
        </Fragment>
    );
}

