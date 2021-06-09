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
} from 'react-native';
import styles from './BuyerCurrentOrders.Style';
import Colors from '../../utills/Colors';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import phoneImage from '../../assets/BuyerOrderDetails/phone.png';
import OrderInProgress from '../../DummyData/OrderInProgress';
import chatImage from '../../assets/BuyerOrderDetails/chat.png';
import locationPointImage from '../../assets/BuyerOrderDetails/location-black.png';
import ellipseImage from '../../assets/HomeAssets/Ellipse.png';
import downloadImage from '../../assets/BuyerOrderDetails/download.png';
import locationPointBlueImage from '../../assets/BuyerOrderDetails/map-blue.png';
import qrScanImage from '../../assets/BuyerOrderDetails/qr-scancopy.png';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { phoneCall } from '../../utills/Methods'
export default function BuyerCurrentOrders({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.CurrentsOrder_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Component for Individual Item
   */
  const _showItems = ({ item }) => {
    return (
      <>
        <TouchableOpacity activeOpacity={1} style={styles.itemContainer}>
          <Image source={item.itemimage[0]} style={styles.itemImage} />
          <View style={styles.itemNameContainer}>
            <Text style={styles.itemName}>{item.itemname}</Text>
            <Text style={styles.itemIdText}>{item.itemId}</Text>
          </View>
          <Text style={styles.quantityText}>{item.quantity}x</Text>
          <Text style={styles.itemPriceText}>
            ${item.quantity * item.itemPrice}.00
          </Text>
        </TouchableOpacity>
        <View style={styles.shortDescriptionContainer}>
          <Text style={styles.shortDescriptionText}>{item.shortDescription}</Text>
        </View>
        <View style={styles.line} />
      </>
    );
  };
  return (
    <Fragment>
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scrollViewStyle}>
              <View style={styles.HeaderContainer}>
                <HomeHeader
                  onPress={() => navigation.goBack()}
                  title={languageJson.CurrentOrder_Heading}
                />
                <ViewRowVise style={styles.orderIdContainer}>
                  <Text style={styles.orderIdLabelText}>{languageJson.ORID_Label}</Text>
                  <Text style={styles.orderIdText}>
                    {OrderInProgress.orderId}
                  </Text>
                </ViewRowVise>
                <View style={styles.restaurantContainer}>
                  <View style={styles.restaurantNameContainer}>
                    <Text style={styles.restaurantNameText}>
                      {OrderInProgress.restaurantName}
                    </Text>
                    <View style={styles.restaurantAddressContainer}>
                      <Image
                        source={locationPointImage}
                        resizeMode="contain"
                        style={styles.locationPointImage}
                      />
                      <Text style={styles.restaurantAddressText}>
                        {OrderInProgress.restaurantAddress}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.chatButtonContainer}
                      onPress={() => phoneCall()}>
                      <Image source={phoneImage} style={styles.chatImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(item) => navigation.navigate('BuyerChat', { name: OrderInProgress.restaurantName, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Buyer' })} style={styles.phoneButtonContainer}>
                      <Image source={chatImage} style={styles.chatImage} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.restaurantImageContainer}>
                  <Image
                    source={OrderInProgress.restaurantImage}
                    resizeMode="cover"
                    style={styles.restaurantImage}
                  />
                </View>
                <View style={styles.orderInprogressView}>
                  <View style={styles.blueLineSeparator} />
                  <View style={styles.orderInprogressContainer}>
                    <Text style={styles.orderInProgressText}>
                      {languageJson.OrderInProgress_Label}
                    </Text>
                  </View>
                  <View style={styles.blueLineSeparator} />
                </View>
                <View style={styles.deliveryDateTimeContainer}>
                  <Text style={styles.deliveryDateTimeText}>
                    {OrderInProgress.deliveryDateTime}
                  </Text>
                </View>
                <View />
              </View>

              <View style={styles.approvedOrdersItemsContainer}>
                <View style={styles.itemListContainer}>
                  <TextRowVise style={styles.itemListText}>{languageJson.ItemDetails_heading}</TextRowVise>
                </View>
                <View style={styles.line} />
                <FlatList
                  ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                  )}
                  style={styles.itemFlatlistContainer}
                  data={OrderInProgress.itemList}
                  showsVerticalScrollIndicator={false}
                  renderItem={_showItems}
                />
                <View style={styles.servicesChargesContainer}>
                  <View style={styles.pricesContainer}>
                    <View style={styles.servicesPriceContainer}>
                      <Text style={styles.categoriesHeadingText}>
                        {languageJson.ServiceCharges_label}
                      </Text>
                      <Text style={styles.servicesPriceText}>$15.00</Text>
                    </View>
                    <View style={styles.lineSeparator} />
                    <View style={styles.servicesPriceContainer}>
                      <Text style={styles.categoriesHeadingText}>
                        {languageJson.DeliveryChanges_Label}
                      </Text>
                      <Text style={styles.servicesPriceText}>$15.00</Text>
                    </View>
                    <View style={styles.lineSeparator} />
                    <View style={styles.servicesPriceContainer}>
                      <Text style={styles.categoriesHeadingText}>
                        {languageJson.PaybleAmount_label}
                      </Text>
                      <Text style={styles.servicesPriceText}>$165.00</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.providerContainer}>
                <TouchableOpacityRowVise activeOpacity={1}
                  style={styles.providerImageContainer}
                  onPress={() => { }
                  }>
                  <Image
                    resizeMode="contain"
                    source={OrderInProgress.providerBy.providerImage}
                    style={styles.providerImage}
                  />
                  <ViewRowVise style={styles.providerNameContainer}>
                    <View>
                      <Text style={styles.providerName}>
                        {OrderInProgress.providerBy.providerName}
                      </Text>
                      <ViewRowVise style={styles.acceptedTextContainer}>
                        <Text style={styles.acceptedText}>{languageJson.Accepted_label} </Text>
                        <Image
                          source={ellipseImage}
                          resizeMode="contain"
                          style={styles.ellipseImage}
                        />
                        <Text style={styles.deliverByText}>
                          {' '}
                        Delivery by {pendingOrders.providerBy.deliverBy}
                        </Text>
                      </ViewRowVise>
                    </View>
                    <View style={styles.providerButtonContainer}>
                      <TouchableOpacity
                        style={styles.providerPhoneButtonContainer}
                        onPress={() => phoneCall()}>
                        <Image source={phoneImage} style={styles.chatImage} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={(item) => navigation.navigate('BuyerChat', { name: OrderInProgress.providerBy.providerName, online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Buyer' })}
                        style={styles.providerChatButtonContainer}>
                        <Image
                          source={chatImage}
                          style={styles.providerChatImage}
                        />
                      </TouchableOpacity>
                    </View>
                  </ViewRowVise>
                </TouchableOpacityRowVise>
              </View>

              <View style={styles.clientContainer}>
                <View style={styles.orderDetailTextContainer}>
                  <TextRowVise style={styles.orderDetailText}>{languageJson.ClientDetails_Heading}</TextRowVise>
                </View>
                <View style={styles.line} />
                <ViewRowVise style={styles.clientImageContainer}>
                  <Image
                    resizeMode="cover"
                    source={pendingOrders.client.clientImage}
                    style={styles.clientImage}
                  />

                  <TouchableOpacityRowVise style={styles.nameContainer}>
                    <View>
                      <TextRowVise style={styles.clientNameText}>
                        {OrderInProgress.client.clientName}
                      </TextRowVise>
                      <TextRowVise style={styles.clientText}>{languageJson.Client_Label}</TextRowVise>
                    </View>
                  </TouchableOpacityRowVise>
                </ViewRowVise>
                <View style={styles.clientAddressContainer}>
                  <ViewRowVise style={styles.clientAddressLabelsContainer}>
                    <Image source={locationPointBlueImage} resizeMode='contain' style={styles.locationPointBlueImage} />
                    <Text style={styles.addressLabelText}>{languageJson.Address_label}</Text>
                  </ViewRowVise>
                  <View style={styles.clientHomeLabelsContainer}>
                    <TextRowVise style={styles.homeTextLabel}>{languageJson.Home_Title}</TextRowVise>
                    <TextRowVise style={styles.clientAddressText}>{OrderInProgress.client.clientAddress}</TextRowVise>
                  </View>
                  <ViewRowVise style={styles.downloadButtonContainer}>
                    <Image source={downloadImage} resizeMode='contain' style={styles.downloadImage} />
                    <Text style={styles.downloadLabelText}>{languageJson.DownloadInvoice_Button}</Text>
                  </ViewRowVise>
                </View>
              </View>

            </ScrollView>

            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('OrderQRCode')} style={styles.receiveOrderButton}>
              <ViewRowVise style={styles.receiveOrderInnerView}>
                <Text style={styles.receiveOrderText}>{languageJson.ReceiveOrder_Button}</Text>
                <View style={styles.qrImageImageContainer}>
                  <Text style={styles.showCodeText}>{languageJson.ShowCode_Label}</Text>
                  <Image
                    source={qrScanImage}
                    style={styles.qrImage}
                    resizeMode="contain"
                  />
                </View>
              </ViewRowVise>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>

      <SafeAreaView
        style={(styles.container, { backgroundColor: '#f6f6f6' })}
      />
    </Fragment>
  );
}
