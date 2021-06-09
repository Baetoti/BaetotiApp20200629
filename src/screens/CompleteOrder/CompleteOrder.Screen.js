import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Alert
} from 'react-native';
import styles from './CompleteOrder.Style';
import Colors from '../../utills/Colors';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import phoneImage from '../../assets/BuyerOrderDetails/phone.png';
import chatImage from '../../assets/BuyerOrderDetails/chat.png';
import { height, width } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import { phoneCall } from '../../utills/Methods';
import TextRowWise from '../../components/TextRowVise/TextRowVise.Component';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import moment from 'moment'
export default function CompleteOrder({ navigation, route }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.CompletedOrder_Screen)
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
   * State used for required screen data
   */
  const [data, setData] = useState(route.params?.item);
  /**
   * Component for individual Item
   */
  const renderItem = ({ item, index }) => {
    return (
      <View activeOpacity={0.7}
        // onPress={() => navigation.navigate('BuyerOrderReview')} 
        style={styles.itemContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={item.itemimage[0]} style={styles.itemImage} />
          <View style={styles.imageMainContainer}>
            <View>
              <Text style={styles.shopName} numberOfLines={1}>{item.itemname}</Text>
              <View style={styles.row}>
                <Text style={styles.categoriesHeadingText}>5623146</Text>
              </View>
            </View>
            <View style={styles.count}>
              <Text style={styles.quantityText}>{item.quantity}x</Text>
              <Text style={styles.itemPriceText}>{currencyLabel}{isDollar ? (Number("45") * sarToDollar).toFixed(toFixed) : Number("45")}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    );
  };
  /**
   * Download PDF
   */
  const createPDF = async () => {
    let options = {
      html: '<h1>Baetoti Order Invoice</h1>',
      fileName: 'Baetoti' + (moment().valueOf()).toString(),
      directory: 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath)
    Alert.alert("Invoice Downloaded", "PDF is downloaded to your phone's documents directory.");
  }
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundWhite}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}
        >
          <Header
            title={languageJson.CompletedOrder_Heading}
            hideRightIcon
            onPressBack={() => navigation.goBack()}
            containerStyle={styles.headerContainer}
            titleStyle={styles.headerTitle}
            backIconContainerStyle={styles.backIconContainerStyle}
            backIconStyle={styles.backIcon}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topContainer}>
              <ViewRowVise style={styles.idCont}>
                <Text style={styles.id}>{languageJson.OrderID_Label + ":"}</Text>
                <Text style={styles.idText}>OR563PO7890</Text>
              </ViewRowVise>

              <ViewRowVise style={styles.labelCont}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('BuyerOrderReview3')}>
                  <TextRowVise style={styles.label}>Sweethouse Store</TextRowVise>
                  <ViewRowVise style={styles.dispCont}>
                    <Image
                      style={styles.locationImg}
                      source={require('../../assets/buyerHome/map-active.png')}
                    />
                    <TextRowVise style={styles.adress}>
                      230, Golden Street, 23th East Street, New York.
                  </TextRowVise>
                  </ViewRowVise>
                </TouchableOpacity>

                <ViewRowVise style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.chatButtonContainer}
                    onPress={() => phoneCall()}>
                    <Image source={phoneImage} style={styles.chatImage} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={(item) => navigation.navigate('BuyerChat', { name: 'Sweethouse Store', online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Buyer' })}
                    style={styles.phoneButtonContainer}>
                    <Image source={chatImage} style={styles.chatImage} />
                  </TouchableOpacity>
                </ViewRowVise>
              </ViewRowVise>
              <ImageBackground
                source={{ uri: data.storeImage }}
                imageStyle={styles.backImg}
                style={styles.backgroundImg}
              />
              <View style={styles.imgCont}>
                <View style={styles.line} />
                <View style={styles.orderCont}>
                  <Text style={styles.completed}>{languageJson.OrderCompleted_Label}</Text>
                </View>
                <View style={styles.line} />
              </View>
              <Text style={styles.time}>12:00 PM, Friday, 30 Mar, 2020</Text>
            </View>
            <View style={styles.clientDetailsContainer}>
              <ViewRowVise style={styles.reviewConainer}>
                <TextRowVise style={styles.heading}>{languageJson.ItemDetails_heading}</TextRowVise>
                <TouchableOpacity style={styles.rateOrder}
                  onPress={() => navigation.navigate('BuyerOrderReview3')}>
                  <TextRowVise style={styles.rateOrder}>{languageJson.RateUs_Label}</TextRowVise>
                </TouchableOpacity>
              </ViewRowVise>
              <View style={styles.lineSeparator} />
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={styles.lineSeparator} />
                )}
                data={data.itemList}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
              />
              <View style={styles.lineSeparator} />
              <View style={styles.pricesContainer}>
                <View style={styles.priceContainer}>
                  <Text style={styles.categoriesHeadingText}>
                    {languageJson.ServiceCharges_label}
                  </Text>
                  <Text style={styles.priceText}>{currencyLabel}{isDollar ? (Number("10") * sarToDollar).toFixed(toFixed) : Number("10")}</Text>
                </View>
                <View style={styles.verticleLine} />
                <View style={styles.priceContainer}>
                  <Text style={styles.categoriesHeadingText}>
                    {languageJson.DeliveryChanges_Label}
                  </Text>
                  {
                    !data.selfPickup ?
                      <Text style={styles.priceText}>{currencyLabel}{isDollar ? (Number("15") * sarToDollar).toFixed(toFixed) : Number("15")}</Text> :
                      <Text style={styles.priceText}>{currencyLabel}{isDollar ? (Number("0") * sarToDollar).toFixed(toFixed) : Number("0")}</Text>
                  }

                </View>
                <View style={styles.verticleLine} />
                <View style={styles.priceContainer}>
                  <Text style={styles.categoriesHeadingText}>{languageJson.PaybleAmount_label}</Text>
                  <Text style={styles.priceText}>{currencyLabel}{isDollar ? (Number("165") * sarToDollar).toFixed(toFixed) : Number("165")}</Text>
                </View>
              </View>
            </View>
            {data.selfPickup ?
              <View style={[styles.acceptanceContainer, { backgroundColor: Colors.backgroundWhite, paddingVertical: 0 }]}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0.7 }}
                  locations={[0.1, 0.7]}
                  colors={[Colors.opacitiveBlue, 'transparent']}
                  style={styles.acceptanceContainer}>
                  <TextRowWise style={[styles.acceptanceText, { color: Colors.buttonBlue }]}>{languageJson.buyerPickup} </TextRowWise>
                </LinearGradient>
              </View>
              :
              data.providerDelivery == true ?
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0.7 }}
                  locations={[0.1, 0.7]}
                  colors={[Colors.greyishPurple, Colors.greyishPurple]}
                  style={styles.acceptanceContainer}>
                  <TextRowWise style={styles.acceptanceText}>Delivered By Provider</TextRowWise>
                </LinearGradient> :
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0.7 }}
                  locations={[0.1, 0.9]}
                  colors={[Colors.OpacitiveButtonSecondaryBlue, Colors.backgroundWhite]}
                  style={styles.acceptanceContainer}>
                  <TextRowWise style={[styles.acceptanceText, { color: Colors.buttonSecondaryBlue },]}>Delivered By Driver</TextRowWise>
                </LinearGradient>
            }
            {/* {item.selfPickup&&
                            <View style={styles.providerContainer}>
                                <TextRowVise>{Buye}</TextRowVise>
                            </View>
                        } */}
            {data.selfPickup == false && data.providerDelivery == false &&
              <ViewRowVise style={styles.approverImageContainer}>
                <Image source={{ uri: data.storeImage }} style={styles.approverImage} />
                <ViewRowVise style={styles.approverNameContainer}>
                  <View>
                    <TextRowVise style={styles.approverName}>{data.name}</TextRowVise>
                    <View style={styles.accepted}>
                      <Text style={styles.orderIdTextName}>{languageJson.Accepted_label}</Text>
                      <View style={styles.deleveryBy} />
                      {/* <Text style={styles.oridText}>Delivery By Driver</Text> */}
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.chatButtonContainer}
                      onPress={() => phoneCall()}>
                      <Image source={phoneImage} style={styles.chatImage} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={(item) => navigation.navigate('BuyerChat', { name: data.name, online: true, img: data.image, userType: 'Buyer' })}
                      style={styles.phoneButtonContainer}>
                      <Image source={chatImage} style={styles.chatImage} />
                    </TouchableOpacity>
                  </View>
                </ViewRowVise>
              </ViewRowVise>
            }
            {data.selfPickup == false && data.providerDelivery == false &&
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.7 }}
                locations={[0.1, 0.9]}
                colors={[Colors.OpacitiveButtonSecondaryBlue, Colors.backgroundWhite]}
                style={styles.acceptanceContainer}>
                  {console.log(data)}
                <TouchableOpacity   onPress={() => navigation.navigate('BuyerOrderReview3')}>
                  <TextRowWise style={[styles.acceptanceText, { color: Colors.buttonSecondaryBlue },]}>{languageJson.RateUs_Label}</TextRowWise></TouchableOpacity>
              </LinearGradient>
            }

            {/* <View
              style={[
                styles.clientDetailsContainer,
                { marginBottom: height(2.5) },
              ]}>
              <TextRowVise style={selectdLanguage == 'ar' ? [styles.clientheading, { paddingRight: width(5) }] : styles.clientheading}>{languageJson.ClientDetails_Heading}</TextRowVise>
              <View style={styles.lineSeparator} />
              <ViewRowVise style={styles.clientDataContainer}>
                <Image
                  style={styles.clientImage}
                  source={require('../../assets/HomeAssets/Layer755.png')}
                />
                <View style={styles.nameContainer}>
                  <TextRowVise style={styles.clientName}>Alex Joe</TextRowVise>
                  <TextRowVise style={styles.clientText}>{languageJson.Client_Label}</TextRowVise>
                </View>
              </ViewRowVise>
              <View style={styles.adressCont}>
                <ViewRowVise style={styles.locationCont}>
                  <Image
                    style={styles.locationImg}
                    source={require('../../assets/buyerHome/map-blue.png')}
                  />
                  <TextRowVise style={selectdLanguage == 'ar' ? [styles.adress1, { marginRight: width(3) }] : styles.adress1}>{languageJson.Address_label}</TextRowVise>
                </ViewRowVise>
                <TextRowVise style={styles.home}>{languageJson.Home_Title}</TextRowVise>
                <Text style={styles.adress2}>
                  C-404, Golden Street, East 25th Street, New york, US
              </Text>
              </View>
            </View> */}
            <Button
              title={languageJson.DownloadInvoice_Button}
              containerStyle={styles.button}
              textStyle={styles.buttonText}
              onPress={() => navigation.navigate('Cart')}
            />
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />
    </Fragment>
  );
}
