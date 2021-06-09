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
  ImageBackground,Alert
} from 'react-native';
import styles from './BuyerPendingOrders.Style';
import Colors from '../../utills/Colors';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import phoneImage from '../../assets/BuyerOrderDetails/phone.png';
// import pendingOrders from '../../DummyData/PendingOrders';
import chatImage from '../../assets/BuyerOrderDetails/chat.png';
import ellipseImage from '../../assets/HomeAssets/Ellipse.png';
import downloadImage from '../../assets/BuyerOrderDetails/download-alt.png';
import qrScanImage from '../../assets/BuyerOrderDetails/qr-scancopy.png';
import { width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import StepIndicator from '../../components/StepIndicatorBuyerTrackOrder/StepIndicatorBuyerTrackOrder.component';
import { phoneCall } from '../../utills/Methods'
import QrScannar from '../../components/QrScanner/QrScannar.Component';
import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
import TextRowWise from '../../components/TextRowVise/TextRowVise.Component';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import moment from 'moment'
const storeImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
export default function BuyerPendingOrders({ navigation, route }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.CurrentOrder_V1_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  const [pendingOrders, setPendingOrders] = useState(route.params?.item)

  /**
 * State used for user location and qr
 */
  const [qrVisible, setQrVisible] = useState(false)

  /**
   * Download invoice function
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
  /**
   * Component for individual item
   */

  const _showItems = ({ item }) => {
    return (
      <View>
        <ViewRowVise activeOpacity={1} style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item)
              setIsVisible(true)
            }}>
            <Image source={item.itemimage[0]} style={styles.itemImage} />
          </TouchableOpacity>
          <View style={styles.itemNameContainer}>
            <Text style={styles.itemName}>{item.itemname}</Text>
            <Text style={styles.itemIdText}>{item.itemId}</Text>
          </View>
          <Text style={styles.quantityText}>{item.quantity}x</Text>
          <Text style={styles.itemPriceText}>
            {currencyLabel}{(item.quantity * isDollar ? (Number(item.itemPrice) * sarToDollar) : Number(item.itemPrice)).toFixed(toFixed)}
          </Text>
        </ViewRowVise>
        <Text numberOfLines={2} style={styles.itemExtraText}>{item.shortDescription}</Text>
      </View>
    );
  };
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
          style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={styles.HeaderContainer}>
              <HomeHeader
                onPress={() => navigation.goBack()}
                title={languageJson.CurrentOrder_Heading}
                containerStyle={styles.containerStyle}
              />
              <View style={styles.orContainer}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  locations={[0.1, 0.7]}
                  colors={[Colors.backgroundWhite, Colors.buttonBlue]}
                  style={[styles.LinearGradient]}
                />
                <Text style={styles.pendingText}>{languageJson.Pending_Label}</Text>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  locations={[0.1, 0.7]}
                  colors={[Colors.buttonBlue, Colors.backgroundWhite]}
                  style={[styles.LinearGradient]}
                />
              </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
              style={styles.scrollViewStyle}>
              <View style={styles.topContainer}>
                <ViewRowVise style={styles.idCont}>
                  <Text style={styles.id}>{languageJson.ORID_Label}</Text>
                  <Text style={styles.idText}>OR563PO7890</Text>
                </ViewRowVise>

                <ViewRowVise style={styles.labelCont}>
                  <TouchableOpacity activeOpacity={0.7} >
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
                <TouchableOpacity activeOpacity={1} >
                  <ImageBackground
                    source={{ uri: storeImage }}
                    imageStyle={styles.backImg}
                    style={styles.backgroundImg}
                  />
                </TouchableOpacity>
                <View style={styles.imgCont}>
                  <View style={styles.line1} />
                  <View style={styles.orderCont}>
                    <Text style={styles.completed}>{languageJson.Pending_Label}</Text>
                  </View>
                  <View style={styles.line1} />
                </View>
                <ViewRowVise style={styles.priceContaierNew}>
                  <Text style={styles.priceNew}>{languageJson.Price_Label}</Text>
                  <Text style={styles.priceNew}>{currencyLabel}
                    {isDollar ? (Number(pendingOrders?.price) * sarToDollar).toFixed(toFixed) : Number(pendingOrders?.price)}</Text>
                </ViewRowVise>
                <ViewRowVise style={styles.priceContaierNew}>
                  <Text style={styles.priceNew}>{languageJson.TimeLeft_label}</Text>
                  <Text style={styles.priceNew}>{pendingOrders?.timeLeft}</Text>
                </ViewRowVise>
                <Text style={styles.time}>12:00 PM, Friday, 30 Mar, 2020</Text>
              </View>
              {/* <View style={styles.approvedOrdersContainer}>
                <ViewRowVise style={styles.approverImageContainer}>
                  <Image
                    source={pendingOrders.image}
                    style={styles.approverImage}
                  />
                  <ViewRowVise style={styles.approverNameContainer}>
                    <View>
                      <Text style={styles.approverName}>
                        {pendingOrders.name}
                      </Text>
                      <Text style={styles.oridText}>
                        {languageJson.ORID_Label}{' '}
                        <Text style={styles.orderIdTextName}>
                          {pendingOrders.orderId}
                        </Text>
                      </Text>
                    </View>
                    <ViewRowVise style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.chatButtonContainer}
                        onPress={() => phoneCall()}>
                        <Image source={phoneImage} style={styles.chatImage} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={(item) => navigation.navigate('BuyerChat', { name: pendingOrders.name, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Buyer' })} style={selectdLanguage == 'ar' ? [styles.phoneButtonContainer, { marginRight: width(1) }] : styles.phoneButtonContainer}>
                        <Image source={chatImage} style={styles.chatImage} />
                      </TouchableOpacity>
                    </ViewRowVise>
                  </ViewRowVise>
                </ViewRowVise>
                <ViewRowVise style={styles.dateDeliveryContainer}>
                  <Text style={styles.dateDeliveryText}>
                    {languageJson.Price_Label}
                  </Text>
                  <Text style={{
                    color: Colors.textBlack,
                    fontSize: width(3.25)
                  }}>
                    ${pendingOrders.price}.00
                </Text>
                  <Text style={styles.dateDeliveryText}>{languageJson.Comments_Label}</Text> 
                </ViewRowVise>
             <ViewRowVise style={styles.dateDeliveryhoursContainer}>
                  <Text style={styles.dateDeliveryTimeText}>
                    Delivery with carefully
                </Text>
                  <Text style={{
                    color: Colors.textBlack,
                    fontSize: width(3.25)
                  }}>
                    ${pendingOrders.price}.00
                </Text>
                </ViewRowVise> 
            <View style={styles.line} />
            <ViewRowVise style={styles.dateDeliveryContainer}>
              <Text style={styles.dateDeliveryText}>
                {languageJson.Deliverytimedate_label}
              </Text>
              <Text style={styles.dateDeliveryText}>{languageJson.TimeLeft_label}</Text>
            </ViewRowVise>
            <ViewRowVise style={styles.dateDeliveryhoursContainer}>
              <Text style={styles.dateDeliveryTimeText}>
                {pendingOrders.deliveryDateTime}
              </Text>
              <Text style={styles.timeLeftText}>
                {pendingOrders.timeLeft}
              </Text>
            </ViewRowVise>
            <View style={styles.line} />
            <View style={styles.addressContainer}>
              <ViewRowVise style={styles.addressHiddenContainer}>
                <Text style={styles.addressText}>{languageJson.Address_label}</Text>
                <View style={selectdLanguage == 'ar' ? [styles.hiddenContainer, { marginRight: width(3) }] : styles.hiddenContainer}>
                  <Text style={styles.hiddenText}>{languageJson.Hidden_label}</Text>
                </View>
              </ViewRowVise>
              <Text style={styles.address}>{pendingOrders.Address}</Text>
            </View>
          </View> */}

              <View style={styles.approvedOrdersItemsContainer}>
                <ViewRowVise style={styles.itemListContainer}>
                  <TextRowVise style={styles.itemListText}>{languageJson.ItemDetails_heading}</TextRowVise>
                </ViewRowVise>
                <View style={styles.line} />
                <FlatList
                  ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                  )}
                  style={styles.itemFlatlistContainer}
                  data={pendingOrders?.itemList}
                  showsVerticalScrollIndicator={false}
                  renderItem={_showItems}
                //   keyExtractor={key => item.itemList.key}
                />
                <View style={styles.servicesChargesContainer}>
                  <View style={styles.pricesContainer}>
                    <View style={styles.servicesPriceContainer}>
                      <Text style={styles.categoriesHeadingText}>
                        {languageJson.ServiceCharges_label}
                      </Text>
                      <Text style={styles.servicesPriceText}>{currencyLabel} {isDollar ? (Number("10") * sarToDollar).toFixed(toFixed) : Number("10")}</Text>
                    </View>
                    <View style={styles.lineSeparator} />
                    <View style={styles.servicesPriceContainer}>
                      <Text style={styles.categoriesHeadingText}>
                        {languageJson.DeliveryCharges_Label}
                      </Text>
                      {pendingOrders?.selfPickup ?
                       <Text style={styles.servicesPriceText}>{currencyLabel} {isDollar ? (Number("0") * sarToDollar).toFixed(toFixed) : Number(0)}</Text>:
                       <Text style={styles.servicesPriceText}>{currencyLabel} {isDollar ? (Number("15") * sarToDollar).toFixed(toFixed) : Number(15)}</Text>
                    }
                     
                    </View>
                    <View style={styles.lineSeparator} />
                    <View style={styles.servicesPriceContainer}>
                      <Text style={styles.categoriesHeadingText}>
                        {languageJson.PaybleAmount_label}
                      </Text>
                      <Text style={styles.servicesPriceText}>{currencyLabel} {isDollar ? (Number("120") * sarToDollar).toFixed(toFixed) : Number("120")}</Text>
                    </View>
                  </View>
                </View>
              </View>
              {pendingOrders?.selfPickup ?
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
                pendingOrders?.providerDelivery == true ?
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
              <View style={styles.trackingContainer}>
                <ViewRowVise style={styles.trackingHeadContainer}>
                  <TextRowVise style={styles.orderDetailText}>{languageJson.TrackOrder}</TextRowVise>
                  <TouchableOpacity onPress={() => navigation.navigate("BuyerOrderTracking")}>
                    <TextRowVise style={styles.viewOnMapText}>{languageJson.ViewOnMap}</TextRowVise>
                  </TouchableOpacity>
                </ViewRowVise>
                <View style={styles.line} />
                <StepIndicator currentPosition={pendingOrders?.trackingData.statusId} />
              </View>
              {pendingOrders?.selfPickup == false && pendingOrders?.providerDelivery == false &&
                <View style={styles.providerContainer}>
                  <TouchableOpacityRowVise activeOpacity={1}
                    style={styles.providerImageContainer}
                    onPress={() => { }
                    }>
                    <Image
                      source={pendingOrders?.providerBy.providerImage}
                      style={styles.providerImage}
                    />
                    <ViewRowVise
                      style={styles.providerNameContainer}>
                      <View>
                        <TextRowVise style={styles.providerName}>
                          {pendingOrders?.providerBy.providerName}
                        </TextRowVise>
                        <ViewRowVise style={styles.acceptedTextContainer}>
                          <Text style={styles.acceptedText}>{languageJson.Accepted_label} </Text>
                          <Image
                            source={ellipseImage}
                            resizeMode="contain"
                            style={styles.ellipseImage}
                          />
                          <Text style={styles.deliverByText}>
                            {' '}
                            {languageJson.DeliveryBy_Label} {pendingOrders?.providerBy.deliverBy}
                          </Text>
                        </ViewRowVise>
                      </View>
                      <ViewRowVise style={styles.providerButtonContainer}>
                        <TouchableOpacity
                          style={styles.providerPhoneButtonContainer}
                          onPress={() => phoneCall()}>
                          <Image source={phoneImage} style={styles.chatImage} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(item) => navigation.navigate('BuyerChat', { name: pendingOrders?.providerBy.providerName, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Buyer' })}
                          style={styles.providerChatButtonContainer}>
                          <Image
                            source={chatImage}
                            style={styles.providerChatImage}
                          />
                        </TouchableOpacity>
                      </ViewRowVise>
                    </ViewRowVise>
                  </TouchableOpacityRowVise>
                </View>
              }
              <View style={styles.clientContainer}>
                <View style={styles.orderDetailTextContainer}>
                  <TextRowVise style={styles.orderDetailText}>{languageJson.ClientDetails_Heading}</TextRowVise>
                </View>
                <View style={styles.line} />
                <ViewRowVise style={styles.clientImageContainer}>
                  <Image
                    resizeMode="cover"
                    source={pendingOrders?.client.clientImage}
                    style={styles.clientImage}
                  />

                  <TouchableOpacityRowVise style={styles.nameContainer}>
                    <View>
                      <TextRowVise style={styles.clientNameText}>
                        {pendingOrders?.client.clientName}
                      </TextRowVise>
                      <TextRowVise style={styles.clientText}>{languageJson.Client_Label}</TextRowVise>
                    </View>
                  </TouchableOpacityRowVise>
                </ViewRowVise>
                <TouchableOpacity onPress={createPDF} activeOpacity={0.7} //onPress={() => navigation.navigate('BuyerCurrentOrders')} 
                  style={styles.inVoiceButton}>
                  <ViewRowVise style={styles.inVoiceButtonInnerView}>
                    <Text style={styles.inVoiceText}>{languageJson.Invoice_Label}</Text>
                    <ViewRowVise style={styles.downloadImageContainer}>
                      <Image
                        source={downloadImage}
                        style={styles.downloadImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.downloadText}>{languageJson.DownloadInvoice_Button}</Text>
                    </ViewRowVise>
                  </ViewRowVise>
                </TouchableOpacity>
              </View>
              {/* <View style={styles.clientContainer}>
                <View style={styles.orderDetailTextContainer}>
                  <TextRowVise style={styles.orderDetailText}>{languageJson.ScanQR}</TextRowVise>
                </View>
                <View style={styles.line} />
                <TouchableOpacity activeOpacity={0.7} onPress={() => setQrVisible(true)}
                  style={styles.inVoiceButton}>
                  <Text style={styles.downloadText}>{languageJson.TaptoScan}</Text>
                </TouchableOpacity>
              </View> */}
            </ScrollView>
            {/* <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('OrderQRCode')} style={styles.receiveOrderButton}> */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => setQrVisible(true)}
              style={styles.receiveOrderButton}>
              <ViewRowVise style={styles.receiveOrderInnerView}>
                <Text style={styles.receiveOrderText}>{languageJson.ReceiveOrder_Button}</Text>
                <ViewRowVise style={styles.downloadImageContainer}>
                  <Text style={styles.showCodeText}>{languageJson.ScanQR}</Text>
                  <Image
                    source={qrScanImage}
                    style={styles.downloadImage}
                    resizeMode="contain"
                  />
                </ViewRowVise>
              </ViewRowVise>
            </TouchableOpacity>
          </View>

        </LinearGradient>
      </SafeAreaView >
      <QrScannar onPress={() => setQrVisible(false)} onRequsetClose={() => setQrVisible(false)} isVisible={qrVisible} />
      <OverViewModal
        isVisible={isVisible}
        isCartHide
        onChange={() => { }}
        onStorePress={() => {
          setIsVisible(!isVisible)
          navigation.navigate('ServiceDetailOverView')
        }}
        selectedItem={selectedItem}
        onPress={() => {
          setIsVisible(!isVisible);
        }}
      />
      <SafeAreaView backgroundColor='#f6f6f6' />
    </Fragment >
  );
}
