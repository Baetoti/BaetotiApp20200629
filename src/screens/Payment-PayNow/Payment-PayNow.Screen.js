import React, { Fragment, useState } from 'react';
import {
    SafeAreaView, StatusBar, ImageBackground, View,
    Text, FlatList, Image, ScrollView, TouchableOpacity
} from 'react-native';
import styles from './Payment-PayNow.Style';
import Colors from '../../utills/Colors';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import PaymentOptions from '../../components/PaymentMethod/PaymentMethod.component';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageButton from '../../components/ImageButton/ImageButton.component'
import LinearGradient from 'react-native-linear-gradient';
import walletImage from '../../assets/BuyerOrderDetails/wallet.png';
import { height, width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import check from '../../assets/PaymentMethod/check.png';
const cardImages = [
    require('../../assets/BuyerOrderDetails/visacard.png'),
    require('../../assets/BuyerOrderDetails/mastercard.png'),
]

export default function CurrentOrders({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [itemList, setItemList] = useState([
        {
            key: 0,
            itemname: 'XXXX - 3210',
            itemimage: [require('../../assets/BuyerMore/visa.png')],
        },
        {
            key: 1,
            itemname: 'XXXX - 5545',
            itemimage: [require('../../assets/BuyerMore/american-express.png')],
        },
    ]);
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Payment_Screen)
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
     * state for payment method selection
     */
    const [selectedMethodIndex, setSelectedMethodIndex] = useState(-1);
    const [selectedCard, setSelectedCard] = useState(0);
    const [walletPayment, setWalletPayment] = useState(false);
    /**
     * Card image component
     */
    // const renderCardImage = ({ item, index }) => {
    //     return (
    //         <TouchableOpacity onPress={() => {
    //             setWalletPayment(false)
    //             setSelectedMethodIndex(-1)
    //             setSelectedCard(index)
    //         }}>
    //             <View style={[styles.checkBoxContainer, { position: 'absolute', zIndex: 1, right: width(7), top: width(3) }]}
    //             >
    //                 {index == selectedCard ? <View style={styles.checkBoxInnerContainer}></View> : null}
    //             </View>
    //             <Image
    //                 source={item}
    //                 style={styles.cardImage} />
    //         </TouchableOpacity>
    //     )
    // }
    const renderItem = ({ item, index }) => {
        return (
          <View style={styles.itemsDetailContainer}>
            <View style={styles.itemContainer}>
              <View style={styles.cardImageContainer}>
                <Image source={item.itemimage[0]} style={styles.itemImage} resizeMode='contain' />
              </View>
              <View style={styles.imagesMainContainer}>
                <Text style={styles.shopsName}>{item.itemname}</Text>
                <TouchableOpacity
                  style={styles.checksBoxContainer}
                  onPress={() => setSelectedIndex(index)}
                  >
                  {index == selectedIndex ? (
                    <Image source={check} style={styles.checkImage} resizeMode='contain' />
                  ) : null}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      };
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundColor })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    {/* <View> */}
                    <Header
                        title={languageJson.Payment_Title}
                        hideRightIcon
                        onPressBack={() => navigation.goBack()}
                        containerStyle={styles.headerContainer}
                        backIconContainerStyle={styles.backIconContainerStyle}
                    />
                    <ScrollView
                        // style={styles.scroll}
                        contentContainerStyle={{ paddingBottom: height(2) }}
                        showsVerticalScrollIndicator={false}>
                        <ImageBackground
                            style={styles.coverImageContainer}
                            imageStyle={styles.coverImage}
                            source={{ uri: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80' }}>
                            <ViewRowVise style={styles.imageMainContainer}>
                                <View>
                                    <Text style={styles.shopName}>Pasha Creeze Bar</Text>
                                    <ViewRowVise style={styles.row}>
                                        <Text style={styles.categoriesHeadingText}>{languageJson.Categories_Label}</Text>
                                        <Text style={styles.categoriesText}> Hotel Bar</Text>
                                    </ViewRowVise>
                                </View>
                                <Text style={styles.shopName}>{currencyLabel}{isDollar ? (Number("45") * sarToDollar).toFixed(toFixed) : Number("45")}</Text>
                            </ViewRowVise>
                        </ImageBackground>
                        <View style={styles.priceContainer}>
                            <ViewRowVise style={styles.priceRowContainer}>
                                <Text style={styles.priceText}>{languageJson.ServiceCharges_Label}</Text>
                                <Text style={styles.priceText}>{currencyLabel}{isDollar ? (Number("10") * sarToDollar).toFixed(toFixed) : Number("10")}</Text>
                            </ViewRowVise>
                            <ViewRowVise style={styles.priceRowContainer}>
                                <Text style={styles.priceText}>{languageJson.DeliveryCharges}</Text>
                                <Text style={styles.priceText}>{currencyLabel}{isDollar ? (Number("15") * sarToDollar).toFixed(toFixed) : Number("15")}</Text>
                            </ViewRowVise>
                            <View style={styles.lineSeparator}></View>
                            <ViewRowVise style={styles.priceRowContainer}>
                                <Text style={styles.totalPriceText}>{languageJson.TotalAmount_Label}</Text>
                                <Text style={styles.totalPriceText}>{currencyLabel}{isDollar ? (Number("70") * sarToDollar).toFixed(toFixed) : Number("70")}</Text>
                            </ViewRowVise>
                        </View>
                        <TextRowVise style={styles.paymentMethodsHeadingText}>{languageJson.PaymentMethod_Heading}</TextRowVise>
                        <ViewRowVise style={styles.walletContainer}>
                            <ViewRowVise style={styles.row}>
                                <TouchableOpacity style={styles.checkBoxContainer}
                                    onPress={() => {
                                        setWalletPayment(true)
                                        setSelectedMethodIndex(-1)
                                        setSelectedCard(-1)
                                    }}>
                                    {walletPayment ? <View style={styles.checkBoxInnerContainer}></View> : null}
                                </TouchableOpacity>
                                <View
                                    style={selectdLanguage == 'ar' ? [styles.walletButtonContainer, { marginLeft: width(4) }] :
                                        styles.walletButtonContainer}>
                                    <Image source={walletImage} style={styles.chatImage} />
                                </View>
                                <Text style={styles.clientName}>
                                    {languageJson.Wallet_Label}
                                </Text>
                            </ViewRowVise>
                            <ViewRowVise style={styles.row}>
                                <Text style={styles.balHeadingText}>{languageJson.Bal_Text}</Text>
                                <Text style={styles.shopName}> {selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number("300") * sarToDollar).toFixed(toFixed) : Number("300")}</Text>
                                <TouchableOpacity style={styles.addMethodButton}
                                    onPress={() => navigation.navigate('Calculator', { screen: 'PaymentPayNow' })}>
                                    <Text style={styles.addMethodButtonText}>
                                        + {languageJson.ADD_Button}
                                    </Text>
                                </TouchableOpacity>
                            </ViewRowVise>
                        </ViewRowVise>
                        <View style={styles.flatList}>
                            <FlatList
                                style={styles.flatList}
                                inverted={selectdLanguage == 'ar'}
                                contentContainerStyle={styles.flatListContainer}
                                data={itemList}
                                renderItem={renderItem}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <PaymentOptions
                            selectedIndex={selectedMethodIndex}
                            onChange={(index) => {
                                setWalletPayment(false)
                                setSelectedCard(-1)
                                setSelectedMethodIndex(index)
                            }} />

                        {/* <ImageButton
                                // onPress={() => navigation.navigate('OrderQRCode')}
                                textStyle={styles.qrButtonText}
                                title={languageJson.PaymentCodeDelivery_Button} containerStyle={styles.qrButtonContainer}
                                renderImage={(<MaterialCommunityIcons name="qrcode"
                                    size={height(3)} style={styles.qrIcon} color={Colors.buttonBlue} />)}
                            /> */}
                    </ScrollView>
                    {/* </View> */}
                    {/* + " " + currencyLabel + String(isDollar ? (Number("45") * sarToDollar).toFixed(toFixed) : Number("45")) */}
                    <Button title={languageJson.PayNow_Button} containerStyle={styles.button}
                        textStyle={styles.buttonText}
                        onPress={() => navigation.navigate('Failure')} />
                </LinearGradient>
            </SafeAreaView>

        </Fragment >
    );
}

