import React, { useState, Fragment,useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './CurrentOrders.Style';
import Colors from '../../utills/Colors';
import searchImage from '../../assets/HomeAssets/search.png';
import approvedOrders from '../../DummyData/approvedOrders';
import pastOrders from '../../DummyData/pastOrders';
import ModalComponent from '../../components/ModalComponent/Modal.Component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import undrawemptyImage from '../../assets/HomeAssets/undrawempty.png';
import Tab from '../../components/Tab/Tab.component';
import Modal from 'react-native-modal'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import cross from '../../assets/HomeAssets/multiply1.png';
import tick from '../../assets/HomeAssets/check.png';
import search from '../../assets/buyerHome/search.png';
import dollarNote from '../../assets/HomeAssets/dollarNote.png';
import locationBasket from '../../assets/HomeAssets/locationBasket.png';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import DeliveryModal from '../../components/DeliveryModal/DeliveryModal.Component';
// import Deliveries from '../../DummyData/Deliveries';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png';
import { setOrderStatus } from '../../Redux/Actions/Configuration';
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"
export default function CurrentOrders({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.CurrentOrders_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(false);
  const [isIndex, setIsIndex] = useState('');
  /**
   * Reading Screen Data from redux ,"orderIsReady_Heading":"Order is Ready","orderIsReady_Heading":"الطلب جاهز",
   */
  const selectedCurrency = useSelector(
    state => state.Configuration.selectedCurrency,
  );
  const currencyLabel = selectedCurrency == 'USD' ? '$' : 'SAR';
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar);
  const toFixed = useSelector(state => state.Configuration.toFixed);
  const isDollar = selectedCurrency == 'USD';
  const [settingDriver, setSettingDriver] = useState(false)
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  /**
   * States used for item and tab selections
   */
  const [selectedItem, setSelectedItem] = useState(
    approvedOrders[0].itemList[0],
  );
  const [isItemVisible, setIsItemVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(approvedOrders);

  const [orderlistmain, setorderlistmain] = useState([]) 
  const [Deliveries, setDeliveries] = useState([])



  const renderInProcessOrder = ({ item, index }) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.topContainer}>
          <ViewRowVise style={styles.row}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.nameContainer}>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.orderId}>{item.orderId}</Text>
                <Text style={styles.dateTimeText}>
                  {moment().format('DD MMM YYYY')}
                </Text>
              </ViewRowVise>
              <TextRowVise style={styles.storeName}>{item.name}</TextRowVise>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.priceHeading}>
                  {languageJson.Price_Label}
                </Text>
                <Text style={styles.priceText}>
                  {currencyLabel}{' '}
                  {isDollar
                    ? (Number(item.price) * sarToDollar).toFixed(toFixed)
                    : Number(item.price)}
                </Text>
              </ViewRowVise>
            </View>
          </ViewRowVise>
          <View />
        </View>
        <View style={styles.lineSeparator} />
        <ViewRowVise style={styles.bottomRowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/BuyerOrderDetails/package.png')}
              style={styles.packageImage}
            />
            <Text style={styles.itemsText}>
              {item.itemList.length} {languageJson.ItemsPurchased}
            </Text>
          </View>
          <TouchableOpacityRowVise
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('OrderDetails', {
                item,
                isOrderCompleted: false,
              })
            }
            style={styles.row}>
            <Text style={styles.detailsText}>
              {languageJson.ViewDetails_Button}
            </Text>
            <Image
              source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
              style={
                selectdLanguage == 'ar'
                  ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }]
                  : styles.arrowRight
              }
            />
          </TouchableOpacityRowVise>
        </ViewRowVise>
      </View>
    );
  };
  const renderPastOrders = ({ item, index }) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.topContainer}>
          <ViewRowVise style={styles.row}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.nameContainer}>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.orderId}>{item.orderId}</Text>
                <Text style={styles.dateTimeText}>
                  {moment().format('DD MMM YYYY')}
                </Text>
              </ViewRowVise>
              <TextRowVise style={styles.storeName}>{item.name}</TextRowVise>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.priceHeading}>
                  {languageJson.Price_Label}
                </Text>
                <Text style={styles.priceText}>
                  {currencyLabel}
                  {isDollar
                    ? (Number(item.price) * sarToDollar).toFixed(toFixed)
                    : Number(item.price)}
                </Text>
              </ViewRowVise>
            </View>
          </ViewRowVise>
          <View />
        </View>
        <View style={styles.lineSeparator} />
        <ViewRowVise style={styles.bottomRowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/BuyerOrderDetails/package.png')}
              style={styles.packageImage}
            />
            <Text style={styles.itemsText}>
              {item.itemList.length} {languageJson.ItemsPurchased}
            </Text>
          </View>
          <TouchableOpacityRowVise
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('ProviderPastOrders', {
                item,
                isOrderCompleted: true,
              })
            }
            style={styles.row}>
            <Text style={styles.detailsText}>
              {languageJson.ViewDetails_Button}
            </Text>
            <Image
              source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
              style={
                selectdLanguage == 'ar'
                  ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }]
                  : styles.arrowRight
              }
            />
          </TouchableOpacityRowVise>
        </ViewRowVise>
      </View>
    );
  };
  const removePendingOrder = index => {
    var updatedPendingOrders = pendingOrders.filter((item, i) => index != i);
    setPendingOrders(updatedPendingOrders);
  };
  const renderPendingOrders = ({ item, index }) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.topContainer}>
          <ViewRowVise style={styles.row}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.nameContainer}>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.orderId}>{item.orderID}</Text>
                <ViewRowVise style={styles.buttonContainer}>
                  <TouchableOpacityRowVise
                    onPress={() => removePendingOrder(index)}
                    style={styles.chatButtonContainer}>
                    <Image source={cross} style={styles.chatImage} />
                  </TouchableOpacityRowVise>
                  <TouchableOpacityRowVise
                    onPress={() => {
                      // removePendingOrder(index)
                      if (item.selfPickup == true) {
                        removePendingOrder(index);
                        setIsIndex(index);
                        setIsDeliveryVisible(!isDeliveryVisible);
                      } else {
                        setIsIndex(index);
                        setIsDeliveryVisible(!isDeliveryVisible);
                      }
                    }}
                    style={styles.phoneButtonContainer}>
                    <Image source={tick} style={styles.chatImage} />
                  </TouchableOpacityRowVise>
                </ViewRowVise>
              </ViewRowVise>
              <TextRowVise style={styles.storeName}>{item.driverName}</TextRowVise>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.priceHeading}>
                  {languageJson.Price_Label}
                </Text>
                <Text style={styles.priceText}>
                  {currencyLabel}{' '}
                  {isDollar
                    ? (Number(item.serviceCharge) * sarToDollar).toFixed(toFixed)
                    : Number(item.serviceCharge)}
                </Text>
              </ViewRowVise>
            </View>
          </ViewRowVise>
          <View />
        </View>
        <View style={styles.lineSeparator} />
        <ViewRowVise style={styles.bottomRowContainer}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/BuyerOrderDetails/package.png')}
              style={styles.packageImage}
            />
            <Text style={styles.itemsText}>
              {item.orderItems.length} {languageJson.ItemsPurchased}
            </Text>
          </View>
          <TouchableOpacityRowVise
            activeOpacity={0.7}
            onPress={() =>
              selectedTab == 0
                ? navigation.navigate('OrderDetails', {
                  item,
                  isOrderCompleted: false,
                })
                : selectedTab == 1
                  ? navigation.navigate('PendingOrdersDetail', {
                    item,
                    isOrderCompleted: false,
                  })
                  : // ProviderPastOrders
                  null
            }
            style={styles.row}>
            <Text style={styles.detailsText}>
              {languageJson.ViewDetails_Button}
            </Text>
            <Image
              source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
              style={
                selectdLanguage == 'ar'
                  ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }]
                  : styles.arrowRight
              }
            />
          </TouchableOpacityRowVise>
        </ViewRowVise>
      </View>
    );
  };
  /**
   * Component for Individual item
   */
  const _showItems = ({ item }) => {
    return (
      <TouchableOpacityRowVise
        style={styles.itemContainer}
        onPress={() => {
          setSelectedItem(item);
          setIsItemVisible(!isItemVisible);

        }}>
        <Image source={item.itemimage[0]} style={styles.itemImage} />
        <View style={styles.itemNameContainer}>
          <TextRowVise style={styles.itemName} numberOfLines={1}>
            {item.itemname}
          </TextRowVise>
          <TextRowVise style={styles.commentText}>
            {languageJson.Comments_label}
          </TextRowVise>
          <TextRowVise style={styles.deliveryWithCarefully}>
            {languageJson.DeliverCarefully}
          </TextRowVise>
        </View>
      </TouchableOpacityRowVise>
    );
  };
  /**
   * Component for Individual Item
   */
  const _showOrders = ({ item }) => {
    return (
      <View>
        <LinearGradient
          colors={['#F9F9F9', '#FFFFFF']}
          style={styles.approvedOrdersContainer}>
          <TouchableOpacityRowVise
            style={styles.approverImageContainer}
            onPress={() =>
              navigation.navigate('OrderDetails', {
                item,
                isOrderCompleted: false,
              })
            }>
            <Image
              resizeMode="contain"
              source={item.image}
              style={styles.approverImage}
            />
            <View style={styles.approverNameContainer}>
              <TextRowVise style={styles.approverName} numberOfLines={1}>
                {item.name}
              </TextRowVise>
              <TextRowVise style={styles.oridText}>
                {languageJson.ORID_Label}{' '}
                <TextRowVise style={styles.orderIdTextName}>
                  {item.orderId}
                </TextRowVise>
              </TextRowVise>
            </View>
          </TouchableOpacityRowVise>
          <ViewRowVise style={styles.priceContainer}>
            <Text style={styles.priceText}>{languageJson.Price_Label}</Text>
            <Text style={styles.totalPriceText}>
              {currencyLabel}
              {isDollar
                ? (Number(item.price) * sarToDollar).toFixed(toFixed)
                : Number(item.price)}
            </Text>
          </ViewRowVise>
          <View style={styles.line} />
          <ViewRowVise style={styles.itemListContainer}>
            {item.providerBy.deliverBy == 'Provider' ? (
              <Text style={styles.itemListText}>
                {languageJson.ServiceList_heading}
              </Text>
            ) : (
                <Text style={styles.itemListText}>
                  {languageJson.ItemList_heading}
                </Text>
              )}
            {item.itemList.length < 10 ? (
              <Text style={styles.itemListLength}>0{item.itemList.length}</Text>
            ) : (
                <Text style={styles.itemListLength}>{item.itemList.length}</Text>
              )}
          </ViewRowVise>
          <View style={{ marginTop: height(1.8) }}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View style={styles.itemListSeparator} />
              )}
              data={item.itemList}
              showsVerticalScrollIndicator={false}
              renderItem={_showItems}
              keyExtractor={key => item.itemList.key}
            />
          </View>
          <View style={[styles.line, { marginTop: height(2.5) }]} />
          <ViewRowVise style={styles.dateDeliveryContainer}>
            {item.providerBy.deliverBy == 'Provider' ? (
              <Text style={styles.dateDeliveryText}>
                {languageJson.Servicetimedate_label}
              </Text>
            ) : (
                <Text style={styles.dateDeliveryText}>
                  {languageJson.Deliverytimedate_label}
                </Text>
              )}

            <Text style={styles.dateDeliveryText}>
              {languageJson.TimeLeft_label}
            </Text>
          </ViewRowVise>
          <ViewRowVise style={styles.dateDeliveryleftContainer}>
            <Text style={styles.dateDeliveryTimeText}>
              {item.deliveryDateTime}
            </Text>
            <Text style={styles.timeLeftText}>{item.timeLeft}</Text>
          </ViewRowVise>
          <View style={styles.line} />
          <View style={styles.addressContainer}>
            <ViewRowVise style={styles.addressHiddenContainer}>
              <Text style={styles.addressText}>
                {languageJson.Address_label}
              </Text>
              <View style={styles.hiddenContainer}>
                <Text style={styles.hiddenText}>
                  {languageJson.Hidden_label}
                </Text>
              </View>
            </ViewRowVise>
            <TextRowVise style={styles.address} numberOfLines={2}>
              {item.Address}
            </TextRowVise>
          </View>
        </LinearGradient>
        {item.providerBy.deliverBy == 'Driver' ? (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.7 }}
            locations={[0.1, 0.7]}
            colors={['#F9F9F9', '#FFFFFF']}
            style={styles.providerContainer}>
            <ViewRowVise style={styles.providerContainerInner}>
              <ViewRowVise style={styles.providerImageContainer}>
                <Image
                  style={styles.providerimage}
                  source={{ uri: item.providerBy.providerImage }}
                />
                <Text style={styles.providerNameText}>
                  {item.providerBy.providerName}
                </Text>
              </ViewRowVise>
              <View style={styles.DeliverByTextContainer}>
                <Text style={styles.DeliverByText}>
                  Delivery by{' '}
                  <Text style={styles.DeliverBy}>
                    {item.providerBy.deliverBy}
                  </Text>
                </Text>
              </View>
            </ViewRowVise>
          </LinearGradient>
        ) : item.providerBy.deliverBy == 'Provider' ? (
          <View />
        ) : (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.7 }}
                locations={[0.1, 0.7]}
                colors={['#F9F9F9', '#FFFFFF']}
                style={styles.acceptanceContainer}>
                <TextRowVise numberOfLines={1} style={styles.acceptanceText}>
                  {item.providerBy.deliverBy}
                </TextRowVise>
              </LinearGradient>
            )}
      </View>
    );
  };
  /**
   * Component for Individual Item
   */
  const _showPastOrders = ({ item }) => {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.7 }}
        locations={[0.1, 0.7]}
        colors={['#F9F9F9', '#FFFFFF']}
        style={styles.pastOrderContainer}>
        <TouchableOpacity
          style={styles.pastOrderInnerContainer}
          onPress={() =>
            navigation.navigate('OrderDetails', { item, isOrderCompleted: true })
          }>
          <Image
            source={item.image}
            resizeMode="cover"
            style={styles.personImage}
          />
          <View>
            <View style={styles.nameDateContainer}>
              <Text style={styles.personNameText}>{item.name}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <ViewRowVise style={styles.orerIdContainer}>
              <Text style={styles.orderIdText}>{languageJson.ORID_Label}</Text>
              <Text style={styles.pastOrderPriceText}>
                {languageJson.Price_Label}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.pastOrderpriceContainer}>
              <Text style={styles.pastorderIdText}>{item.orderId}</Text>
              <Text style={styles.pastOrderTotalPriceText}>
                {currencyLabel}
                {isDollar
                  ? (Number(item.price) * sarToDollar).toFixed(toFixed)
                  : Number(item.price)}
              </Text>
            </ViewRowVise>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };
  const _renderDeliveries = ({ item }) => {
    return (
      <View style={styles.deliveriesContainer}>
        <ViewRowVise style={styles.driverNameContainer}>
          <Image
            source={{ uri: "https://www.atmegame.com/blog/images/users/avtar/avtar.png"}}
            resizeMode='cover'
            style={styles.locationBasket}
          />
          <View>
            <ViewRowVise style={styles.deliveriesPriceContainer}>
              <Text style={styles.driverNameText}>{item.driverName}</Text>
              <TouchableOpacity>
                <Feather
                  name="phone"
                  size={totalSize(2.5)}
                  color={Colors.lightGray}
                />
              </TouchableOpacity>

              {/* <Text style={styles.deliveriesPriceText}>${item.price}</Text> */}
            </ViewRowVise>
            {/* <ViewRowVise style={styles.deliveriesPriceContainer}>
              <Text style={styles.driverNameText}>{item.driverName}</Text>
              <Text style={styles.deliveriesPriceText}>${item.price}</Text>
            </ViewRowVise> */}
            <ViewRowVise style={styles.deliveriesOrderContainer}>
              <Text
                numberOfLines={1}
                style={styles.deliveriesNumberText}>{`ID ${item.driverID
                  }`}</Text>
              <TouchableOpacity>
                <Ionicons
                  name="chatbubble-sharp"
                  size={totalSize(2.5)}
                  color={Colors.lightGray}
                />
              </TouchableOpacity>
            </ViewRowVise>
          </View>
        </ViewRowVise>
        {/* <ViewRowVise style={styles.delivriesAddressContainer}>
          <Text numberOfLines={2} style={styles.delivriesAddressText}>
            {item.deliveryAddress}
          </Text>
          <Feather
            name="phone"
            size={totalSize(2)}
            color={Colors.lightGray}
            style={{ width: width(9) }}
          />
        </ViewRowVise> */}
        <ViewRowVise style={styles.deliveriesMessageContainer}>
          {/* <Text numberOfLines={1} style={styles.delivriesMessageText}>
            {item.message}
          </Text> */}
          <TouchableOpacity style={styles.reassignButton}
            onPress={() => {
              removePendingOrder(isIndex);
              setSettingDriver(false)
            }}
          >
            <Ionicons
              name="return-up-back-outline"
              size={totalSize(1.75)}
              color={Colors.backgroundWhite}
            />
            <Text style={styles.reassignText}>
              {languageJson.reAssignButton}
            </Text>
          </TouchableOpacity>
        </ViewRowVise>
      </View>
    );
  };


  const user = useSelector(
    state => state.Auth.user,
  ); 

  useEffect(() => {
    // alert(JSON.stringify(user))
    Getstoreitems()
    Getdriverlist()
  }, [])

  const [spinner, setspinner] = useState(false)

  const Getstoreitems = async () => {
    try {     
        setspinner(true)
        var formData = new FormData(); 
        formData.append('userID', user.userID);
        formData.append('storeID', "607c4fa19524d35c01035c0b");
        formData.append("orderStatusCode","1")
        const {data} = await Services.Getstoreorders(formData)
        console.log(data);       
        setorderlistmain(data)                
    }catch(error){
      alert("Something went wrong")
      setspinner(false)
      console.log(error);              
    }
}


const Getdriverlist = async () => {
  try {     
      setspinner(true)
      var formData = new FormData(); 
      formData.append('userID', user.userID);
      formData.append('storeID', "607c4fa19524d35c01035c0b");
      const {data} = await Services.Getdriverlist(formData)
      console.log(data);       
      setDeliveries(data)               
  }catch(error){
    alert("Something went wrong")
    setspinner(false)
    console.log(error);              
  }
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
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={styles.HeaderContainer}>
              {isSearch ? (
                <ViewRowVise style={styles.backContainer}>
                  {/* <TouchableOpacity style={styles.backButtonContainer} onPress={() =>  setIsSearch(!isSearch)}>
                    <Entypo size={totalSize(2)} color={Colors.backgroundWhite} name='chevron-small-left' />
                  </TouchableOpacity> */}
                  <TouchableOpacity style={styles.backButtonContainer}
                    onPress={() => setIsSearch(!isSearch)}
                  >
                    <Image style={styles.arrowLeft}
                      resizeMode='contain'
                      source={arrowLeft} />
                  </TouchableOpacity>
                  <ViewRowVise style={styles.searchContainer}>
                    <Image style={styles.searchImage} source={search} />
                    <TextInputRowVise
                      style={styles.searchText}
                      placeholderTextColor={Colors.lightGray}
                      placeholder={languageJson.Search_Label}
                      value={searchText}
                      onChangeText={val => setSearchText(val)}
                    />
                    {searchText.length > 0 ? (
                      <TouchableOpacity
                        onPress={() => {
                          setSearchText('');
                          setIsSearch(!isSearch);
                        }}>
                        <AntDesign
                          name="closecircle"
                          size={totalSize(2.5)}
                          color={Colors.opacitiveBlack}
                        />
                      </TouchableOpacity>
                    ) : (
                        <View style={{ width: width(5) }} />
                      )}
                  </ViewRowVise>
                </ViewRowVise>
              ) : (
                  <HomeHeader
                    title={languageJson.AllOrders_Title}
                    onRightPress={() => setIsSearch(!isSearch)}
                    onPress={() => navigation.goBack()}
                    image={searchImage}
                    containerStyle={styles.containerStyle}
                  />
                )}

              <View style={styles.tabContainer}>
                {/* // "Search_Label": "Search",,
                                "Search_Label": "بحث",,
                                */}
                <Tab
                  selectedTextColor={Colors.textBlack}
                  textColor={Colors.gray}
                  inverted={selectdLanguage == 'ar'}
                  selectedIndex={selectedTab}
                  selectedTabText={styles.selectedTabText}
                  textStyle={styles.tabtextStyle}
                  renderSelectedTabFooter={() => (
                    <View style={styles.renderTabFooter} />
                  )}
                  containerStyle={{ paddingRight: width(5) }}
                  onChangeTab={(item, index) => {
                    setSelectedTab(index)
                    dispatch(setOrderStatus(index))
                  }}
                  options={[
                    languageJson.PendingOrders_tab,
                    languageJson.ApprovedOrders_tab,
                    languageJson.preparing_Order,
                    languageJson.orderIsReady_Heading,
                    languageJson.Delivered_Heading,
                  ]}
                />
              </View>
            </View>

            {selectedTab == 1 ? (
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                data={approvedOrders}
                showsVerticalScrollIndicator={false}
                renderItem={renderInProcessOrder}
                keyExtractor={item => item.key}
                contentContainerStyle={{ paddingBottom: height(3) }}
              />
            ) : selectedTab == 0 ? (
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                data={orderlistmain}
                showsVerticalScrollIndicator={false}
                renderItem={renderPendingOrders}
                keyExtractor={item => item.key}
                contentContainerStyle={{ paddingBottom: height(3) }}
              />
            ) : selectedTab == 2 ? (
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                data={approvedOrders}
                showsVerticalScrollIndicator={false}
                renderItem={renderInProcessOrder}
                keyExtractor={item => item.key}
                contentContainerStyle={{ paddingBottom: height(3) }}
              />
            ) : selectedTab == 3 ? (
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                data={approvedOrders}
                showsVerticalScrollIndicator={false}
                renderItem={renderInProcessOrder}
                keyExtractor={item => item.key}
                contentContainerStyle={{ paddingBottom: height(3) }}
              />
            ) : (
                      <FlatList
                        ItemSeparatorComponent={() => (
                          <View style={styles.itemSeparator} />
                        )}
                        data={approvedOrders}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderInProcessOrder}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{ paddingBottom: height(3) }}
                      />
                    )}
            <ModalComponent
              isVisible={isItemVisible}
              selectedItem={selectedItem}
              onPress={() => {
                setIsItemVisible(!isItemVisible);
              }}
            />
            {/* <FlatList
              ItemSeparatorComponent={() => (
                <View style={styles.pastItemSeparator} />
                // <View style={styles.itemSeparator} />
              )}
              contentContainerStyle={{paddingVertical: height(4)}}
              data={Deliveries}
              // data={approvedOrders}
              showsVerticalScrollIndicator={false}
              renderItem={_renderDeliveries}
              // renderItem={renderInProcessOrder}
              keyExtractor={item => item.key}
              contentContainerStyle={{ paddingBottom: height(3) }}
            /> */}
          </View>
        </LinearGradient>
        <DeliveryModal
          isVisible={isDeliveryVisible}
          onPressNo={() => {
            setIsDeliveryVisible(false);
            removePendingOrder(isIndex);
          }}
          onPressYes={() => {
            setIsDeliveryVisible(false);
            removePendingOrder(isIndex);
          }}
          onPressAssign={() => {
            setIsDeliveryVisible(false)
            // unCheckItem(itemDelete)
            setTimeout(() => {
              setSettingDriver(true)
            }, 1000)
          }}
        />
      </SafeAreaView>
      <Modal onDismiss={() => setSettingDriver(false)} onBackButtonPress={() => setSettingDriver(false)} backdropColor={Colors.backgroundColor} backdropOpacity={1} isVisible={settingDriver}>

        <TouchableOpacity onPress={() => setSettingDriver(false)}
          style={[styles.backIconContainer]}>
          <Image style={[styles.backIcon]}
            source={!false ?
              require('../../assets/AddNewAssets/arrow-left.png') :
              require('../../assets/BuyerOrderDetails/arrow-left-white.png')} />
        </TouchableOpacity>
        <FlatList
          ItemSeparatorComponent={() => (
            <View style={styles.pastItemSeparator} />
          )}
          contentContainerStyle={{ paddingVertical: height(3) }}
          data={Deliveries}
          showsVerticalScrollIndicator={false}
          renderItem={_renderDeliveries}
          keyExtractor={item => item.driverID.toString()}
        />
      </Modal>
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.ofwhite })}
      />
    </Fragment>
  );
}
