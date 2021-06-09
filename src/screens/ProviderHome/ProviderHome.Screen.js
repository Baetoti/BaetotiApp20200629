import React, { useState, Fragment } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
  Switch,
  TouchableOpacity
} from 'react-native';
import ViewRowWise from '../../components/ViewRowVise/ViewRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import TextRowWise from '../../components/TextRowVise/TextRowVise.Component'
import { width, height, totalSize } from 'react-native-dimension';
import styles from './ProviderHome.Style';
import Colors from '../../utills/Colors';
import approvedOrders from '../../DummyData/approvedOrders';
import ModalDropdown from 'react-native-modal-dropdown';
import { LineChart } from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import cross from '../../assets/HomeAssets/multiply1.png';
import locationBasket from '../../assets/HomeAssets/locationBasket.png';
import dollarNote from '../../assets/HomeAssets/dollarNote.png';
import Feather from 'react-native-vector-icons/Feather';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tick from '../../assets/HomeAssets/check.png';
import Modal from 'react-native-modal'
import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
import DeliveryModal from '../../components/DeliveryModal/DeliveryModal.Component';
import Deliveries from '../../DummyData/Deliveries';

/**
 * Graph Component
 */
const Component = ({ data }) => {
  return (
    <LineChart
      bezier
      // withHorizontalLabels={false}
      // withVerticalLabels={false}
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.views,
            strokeWidth: 4,
            color: (opacity = 1) => `#dc44a8`, // optional
          },
          {
            data: data.sales,
            strokeWidth: 4,
            color: (opacity = 1) => '#a17efd', // optional
          },
        ],
      }
      }
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      width={width(100)}
      height={200}
      chartConfig={{
        backgroundColor: Colors.darkBackground,
        backgroundGradientFrom: Colors.darkBackground,
        backgroundGradientTo: Colors.darkBackground,
        useShadowColorFromDataset: true,
        decimalPlaces: 0,
        labelColor: (opacity = 1) => Colors.backgroundWhite,
        color: (opacity = 1) => `#FFFFFF`,
        style: {
          borderRadius: 16,
        },
        fillShadowGradientOpacity: 0.3,
        propsForDots: {
          r: '6',
          strokeWidth: '0',
          stroke: '#ffa726',
          width: 0,
          height: 0,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default function CurrentOrders({ navigation }) {
  /**
  * Reading Screen Data from redux 
  */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";
  const [isDeliveryVisible, setIsDeliveryVisible] = useState(false)
  const [settingDriver, setSettingDriver] = useState(false)
  const [isIndex, setIsIndex] = useState(null)
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Dashboard_Screen);
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const isArabic = selectdLanguage == 'ar'
  /**
   * States Used
   */
  const [isHideLocation, toggleHideLocation] = useState(false);
  const [graphDropdownOptions, setGraphDropdownOptions] = useState([
    {
      label: languageJson.ByWeek,
      data: {
        labels: [languageJson.Mon, languageJson.Tue, languageJson.Wed,
        languageJson.Thu, languageJson.Fri, languageJson.Sat, languageJson.Sun],
        sales: [0, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100,],
        views: [0, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100,],
      }
    },
    {
      label: languageJson.ByMonth,
      data: {
        labels: ['1', '6', '12', '18', '24', '30'],
        sales: [0, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100],
        views: [0 * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100],
      }
    },
    {
      label: languageJson.ByYear,
      data: {
        labels: [languageJson.Jan, languageJson.Feb, languageJson.Mar,
        languageJson.Apr, languageJson.May, languageJson.Jun, languageJson.Jul,
        languageJson.Aug, languageJson.Sep, languageJson.Oct, languageJson.Nov,
        languageJson.Dec],
        sales: [0, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100],
        views: [0 * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100,
        Math.random() * 100, Math.random() * 100, Math.random() * 100],
      }
    },
  ])
  const [selectedGraphDropdownOption, setSelectedGraphDropdownOption] = useState(graphDropdownOptions[0]);
  const [selectedItem, setSelectedItem] = useState(
    approvedOrders[0].itemList[0],
  );
  const [isVisible, setIsVisible] = useState(false)
  const [selectedItems, setSelectedItems] = useState({})
  const [orderData, setOrderData] = useState(approvedOrders);
  const [isItemVisible, setIsItemVisible] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [statsType, setStatsType] = useState(languageJson.ByStore);
  const [itemDelete, setItemDelete] = useState([])
  /**
   * Uncheck Item from list
   */
  const unCheckItem = item => {
    setOrderData(orderData.filter(items => item != items));
  };
  /**
   * Uncheck Item from list
   */
  const unCheckItemDelivery = index => {
    var newOrdersData = [...orderData];
    newOrdersData[index].providerDelivery = !newOrdersData[index].providerDelivery;
    setOrderData(newOrdersData);
  };
  const _showItems = ({ item }) => {
    return (
      <TouchableOpacityRowVise
        style={styles.itemContainer}
        onPress={() => {
          setSelectedItem(item);
          setIsItemVisible(!isItemVisible);
          setSelectedItems(item)
          setIsVisible(true)
        }}>
        <Image source={item.itemimage[0]} style={styles.itemImage} />
        <View style={styles.itemNameContainer}>
          <TextRowWise style={styles.itemName}>{item.itemname}</TextRowWise>
          <TextRowWise style={styles.commentText}>{languageJson.Comments_label}</TextRowWise>
          <TextRowWise style={styles.deliveryWithCarefully}>
            {languageJson.DeliverCarefully}
          </TextRowWise>
        </View>
      </TouchableOpacityRowVise>
    );
  };
  const _renderDeliveries = ({ item }) => {
    return (
      <View style={styles.deliveriesContainer}>
        <ViewRowVise style={styles.driverNameContainer}>
          <Image
            source={locationBasket}
            resizeMode="contain"
            style={styles.locationBasket}
          />
          <View>
            <ViewRowVise style={styles.deliveriesPriceContainer}>
              <Text style={styles.driverNameText}>{item.driverName}</Text>
              <Feather
                name="phone"
                size={totalSize(2)}
                color={Colors.lightGray}
                style={{ width: width(9) }}
              />
              {/* <Text style={styles.deliveriesPriceText}>${item.price}</Text> */}
            </ViewRowVise>
            {/* <ViewRowVise style={styles.deliveriesOrderContainer}>
              <Text
                numberOfLines={1}
                style={styles.deliveriesNumberText}>{`Order No. ${item.orderId
                  }`}</Text>
              <Image
                source={dollarNote}
                resizeMode="contain"
                style={styles.noteDollar}
              />
            </ViewRowVise> */}
          </View>
        </ViewRowVise>
        <ViewRowVise style={styles.delivriesAddressContainer}>
          <Text numberOfLines={2} style={styles.delivriesAddressText}>
            {item.deliveryAddress}
          </Text>
        </ViewRowVise>
        <ViewRowVise style={styles.deliveriesMessageContainer}>
          {/* <Text numberOfLines={1} style={styles.delivriesMessageText}>
            {item.message}
          </Text> */}
          <TouchableOpacity onPress={() => setSettingDriver(false)} style={styles.reassignButton}>
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
  const _showOrders = ({ item, index }) => {
    return (
      <View>
        <LinearGradient
          colors={['#F9F9F9', '#FFFFFF']}
          style={styles.approvedOrdersContainer}>
          <ViewRowWise style={{ flexDirection: 'row', paddingLeft: width(2) }}>
            <TouchableOpacityRowVise

              style={styles.approverImageContainer}
              onPress={() => navigation.navigate('OrderDetails', { item })}>
              <Image
                resizeMode="contain"
                source={item.image}
                style={styles.approverImage}
              />
              <View style={styles.approverNameContainer}>
                <TextRowWise numberOfLines={1} style={styles.approverName}>
                  {item.name}
                </TextRowWise>
                <TextRowWise style={styles.oridText}>
                  {languageJson.ORID_Label}
                  <Text style={styles.orderIdTextName}>{item.orderId}</Text>
                </TextRowWise>
              </View>
            </TouchableOpacityRowVise>
            <ViewRowWise style={styles.buttonContainer}>
              <TouchableOpacityRowVise
                onPress={() => unCheckItem(item)}
                style={styles.chatButtonContainer}>
                <Image source={cross} style={styles.chatImage} />
              </TouchableOpacityRowVise>
              <TouchableOpacityRowVise
                onPress={() => {
                  if (item.selfPickup == true) {
                    unCheckItem(item)
                  }
                  else {
                    setItemDelete(item)
                    setIsDeliveryVisible(!isDeliveryVisible)
                  }

                }}
                style={styles.phoneButtonContainer}>
                <Image source={tick} style={styles.chatImage} />
              </TouchableOpacityRowVise>
            </ViewRowWise>
          </ViewRowWise>
          <ViewRowWise style={styles.priceContainer}>
            <Text style={styles.priceText}>{languageJson.Price_Label}</Text>
            <Text style={styles.totalPriceText}>{currencyLabel}{isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}</Text>
          </ViewRowWise>
          <View style={styles.line} />
          <ViewRowWise style={styles.itemListContainer}>
            {item.providerBy.deliverBy == 'Provider' ? (
              <Text style={styles.itemListText}>Service List</Text>
            ) : (
                <Text style={styles.itemListText}>{languageJson.ItemList_heading}</Text>
              )}
            {item.itemList.length < 10 ? (
              <Text style={styles.itemListLength}>0{item.itemList.length}</Text>
            ) : (
                <Text style={styles.itemListLength}>{item.itemList.length}</Text>
              )}
          </ViewRowWise>
          <View style={{ marginTop: height(1.8) }}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View style={styles.itemListSeparator} />
              )}
              // style={styles.itemListFlatlistContainer}
              data={item.itemList}
              showsVerticalScrollIndicator={false}
              renderItem={_showItems}
              keyExtractor={key => item.itemList.key}
            />
          </View>
          <View style={[styles.line, { marginTop: height(2.5) }]} />
          <ViewRowWise style={styles.dateDeliveryContainer}>
            {item.providerBy.deliverBy == 'Provider' ? (
              <Text style={styles.dateDeliveryText}>{languageJson.ServiceDateTime}</Text>
            ) : (
                <Text style={styles.dateDeliveryText}>
                  {languageJson.Deliverytimedate_label}
                </Text>
              )}
            <Text style={styles.dateDeliveryText}>{languageJson.TimeLeft_label}</Text>
          </ViewRowWise>
          <ViewRowWise style={styles.dateDeliveryleftContainer}>
            <Text style={styles.dateDeliveryTimeText}>
              {item.deliveryDateTime}
            </Text>
            <Text style={styles.timeLeftText}>{item.timeLeft}</Text>
          </ViewRowWise>
          {/* {!item.selfPickup && (
            <>
              <View style={styles.line} />
              <ViewRowWise style={styles.selfDelivery}>
                <Text style={styles.wantToDeliveryText}>{languageJson.WantToDeliver}</Text>
                <View
                  style={[
                    styles.hideLocationContainer,
                    {
                      backgroundColor: item.providerDelivery
                        ? Colors.purplePrimary
                        : Colors.placeHolderTextColor,
                    },
                  ]}>
                  <Switch
                    style={{ transform: [{ rotate: isArabic ? '180deg' : '0deg' }] }}
                    trackColor={{
                      false: 'transparent',
                      true: Colors.purplePrimary,
                    }}
                    thumbColor={
                      item.providerDelivery
                        ? Colors.backgroundWhite
                        : Colors.purplePrimary
                    }
                    onValueChange={() => {
                      unCheckItemDelivery(index)
                    }}
                    ios_backgroundColor={
                      item.providerDelivery
                        ? Colors.purplePrimary
                        : Colors.placeHolderTextColor
                    }
                    value={item.providerDelivery}
                  />
                </View>
              </ViewRowWise>
            </>)} */}
          <View style={styles.line} />
          <View style={styles.addressContainer}>
            <ViewRowWise style={styles.addressHiddenContainer}>
              <Text style={styles.addressText}>{languageJson.Address_label}</Text>
              <View style={styles.hiddenContainer}>
                <Text style={styles.hiddenText}>{languageJson.Hidden_label}</Text>
              </View>
            </ViewRowWise>
            <TextRowWise numberOfLines={1} style={styles.address}>
              {item.Address}
            </TextRowWise>
          </View>
        </LinearGradient>
        {/* {item.providerBy.deliverBy == 'Driver' ? (
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.7 }}
            locations={[0.1, 0.7]}
            colors={['#F9F9F9', '#FFFFFF']}
            style={styles.providerContainer}>
            <ViewRowWise style={styles.providerImageContainer}>
              <Image
                style={styles.providerimage}
                source={{ uri: item.providerBy.providerImage }}
              />
              <Text style={styles.providerNameText}>
                {item.providerBy.providerName}
              </Text>
            </ViewRowWise>
            <View style={styles.DeliverByTextContainer}>
              <Text style={styles.DeliverByText}>
                {languageJson.Deliveryby_label}{' '}
                <Text style={styles.DeliverBy}>
                  {item.providerBy.deliverBy}
                </Text>
              </Text>
            </View>
          </LinearGradient>
        ) : item.providerBy.deliverBy == 'Provider' ? (
          <View />
        ) : ( */}
        {item.selfPickup ?
          <View style={[styles.acceptanceContainer, { backgroundColor: Colors.backgroundWhite, paddingVertical: 0 }]}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.7 }}
              locations={[0.1, 0.7]}
              colors={[Colors.opacitiveBlue, 'transparent']}
              style={styles.acceptanceContainer}>
              <TextRowWise style={styles.acceptanceText}>
                {languageJson.buyerPickup}
                </TextRowWise>
            </LinearGradient>
          </View>
          :
          item.providerDelivery ?
            <TouchableOpacity onPress={() => setSettingDriver(true)}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.7 }}
                locations={[0.1, 0.7]}
                colors={[Colors.greyishPurple, 'rgba(255,255,255,0)']}
                style={styles.acceptanceContainer}>
                <TextRowWise style={styles.acceptanceText}>
                  {languageJson.AssignDriver}
                </TextRowWise>
              </LinearGradient>
            </TouchableOpacity> :
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.7 }}
              locations={[0.1, 0.7]}
              colors={[Colors.greyishPurple, Colors.greyishPurple]}
              style={styles.acceptanceContainer}>
              <TextRowWise style={styles.acceptanceText}>
              {languageJson.DeliveryRequest}
                </TextRowWise>
            </LinearGradient>
        }
        {/* )} */}
      </View>
    );
  };
  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.darkBackground}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.darkBackground })}
      />
      {/* <SafeAreaView style={styles.container}> */}
      <View style={styles.HeaderContainer}>
        <View style={styles.headerIconContainer}>
          <Image
            source={require('../../assets/HomeAssets/Layer701.png')}
            style={styles.avatar}
          />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.dashboardText}>
            {languageJson.Dashboard_Title}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0.1, 0.8]}
              colors={['transparent', 'rgba(255,255,255,0.3)']}
              style={[styles.LinearGradient]}
            />
            <Text style={styles.providerText}>
              {languageJson.Provider_Label}
            </Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0.1, 0.7]}
              colors={['rgba(255,255,255,0.3)', 'transparent']}
              style={[styles.LinearGradient]}
            />
          </View>
        </View>
        <View style={styles.headerIconContainer}>
          {/* <Image
              source={require('../../assets/buyerHome/home-active.png')}
              style={styles.homeIcon}
            /> */}
          <View style={styles.homeIcon} />
          <TouchableOpacity style={styles.bellcontainer}
            onPress={() => navigation.navigate('ProviderNotifications')}
          >
            <Image
              source={require('../../assets/HomeAssets/Ellipse.png')}
              style={styles.dotIcon}
            />
            <Image
              source={require('../../assets/buyerHome/bell.png')}
              style={styles.bellIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bellcontainer,{marginLeft:-10}]}
            onPress={() => {}}
          >
            <Image
              source={require('../../assets/BuyerOrderDetails/calender.png')}
              style={styles.bellIcon}
            />
          </TouchableOpacity>          
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.graphBackground}>
          <ViewRowWise style={styles.card}>
            <Image
              source={require('../../assets/HomeAssets/wallet.png')}
              style={styles.walletIcon}
            />
            <View>
              <Text style={styles.price}>{currencyLabel}{isDollar ? (Number("1260") * sarToDollar).toFixed(toFixed) : Number("1260")}</Text>
              <Text style={styles.balance}>
                {languageJson.AvailableBalance_Label}
              </Text>
            </View>
          </ViewRowWise>
          <ViewRowWise
            style={{
              paddingVertical: height(4),
              width: width(90),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {/* <Text
                style={{ color: Colors.backgroundWhite, fontSize: width(4.5) }}>
                {languageJson.SalesViews_Label}
              </Text> */}
            <ModalDropdown
              options={[languageJson.SalesViews_Label]}
              dropdownStyle={styles.salesDropDown}
              renderRow={(option, index, isSelected) => (
                <View style={styles.privateDropDownItemContainer}>
                  <Text style={styles.privateDropDownItemText}>
                    {option}
                  </Text>
                </View>
              )}
              onSelect={(index, option) => {
              }}>
              <View style={styles.salesAndViews}>
                <Text style={styles.monthText}>
                  {languageJson.SalesViews_Label}
                </Text>
                <Image
                  source={require('../../assets/buyerHome/angle-down.png')}
                  style={styles.arrowDownImg}
                />
              </View>
            </ModalDropdown>
            <ModalDropdown
              options={graphDropdownOptions}
              dropdownStyle={styles.privateDropDown}
              renderRow={(option, index, isSelected) => (
                <View style={styles.privateDropDownItemContainer}>
                  <Text style={styles.privateDropDownItemText}>
                    {option.label}
                  </Text>
                </View>
              )}
              onSelect={(index, option) => {
                setSelectedGraphDropdownOption(option);
              }}>
              <View style={styles.monthContainer}>
                <Text style={styles.monthText}>
                  {selectedGraphDropdownOption.label}
                </Text>
                <Image
                  source={require('../../assets/buyerHome/angle-down.png')}
                  style={styles.arrowDownImg}
                />
              </View>
            </ModalDropdown>
          </ViewRowWise>
          <Component data={selectedGraphDropdownOption.data} />
          <ModalDropdown
            options={[languageJson.ByStore, "Honey Pencake", "Black Coffee", "Burger"]}
            dropdownStyle={styles.byStoreDropDown}
            renderRow={(option, index, isSelected) => (
              <View style={styles.privateDropDownItemContainer}>
                <Text style={styles.privateDropDownItemText}>
                  {option}
                </Text>
              </View>
            )}
            onSelect={(index, option) => {
              setStatsType(option)
            }}>
            <View style={styles.byStoreContainer}>
              <Text style={styles.monthText}>
                {statsType}
              </Text>
              <Image
                source={require('../../assets/buyerHome/angle-down.png')}
                style={styles.arrowDownImg}
              />
            </View>
          </ModalDropdown>
          <View style={styles.graphLabelContainer}>
            <View style={styles.graphLabelView}>
              <View style={[styles.graphDot, { backgroundColor: '#a17efd' }]} />
              <Text style={styles.graphLabel}>{languageJson.Sales_Label}</Text>
            </View>
            <View style={styles.graphLabelView}>
              <View style={styles.graphDot} />
              <Text style={styles.graphLabel}>{languageJson.Views_Label}</Text>
            </View>
          </View>
        </View>

        <View style={styles.status}>
          <View style={styles.graphCardContainer}>
            <View style={styles.graphCard}>
              <TextRowWise style={styles.numberText}>120</TextRowWise>
              <TextRowWise style={styles.orderText}>{languageJson.TodayOrder_Label}</TextRowWise>
            </View>
            <View style={styles.graphCard}>
              <TextRowWise style={styles.numberText}>300</TextRowWise>
              <TextRowWise style={styles.orderText}>{languageJson.AllOrder_Label}</TextRowWise>
            </View>
          </View>
          <ViewRowWise style={styles.statusContainer}>
            <Text style={styles.online}>{languageJson.OnlineStatus_Label}</Text>
            <View
              style={[
                styles.hideLocationContainer,
                {
                  backgroundColor: isHideLocation
                    ? Colors.buttonTextGreen
                    : Colors.placeHolderTextColor,
                },
              ]}>
              <Switch
                trackColor={{
                  false: 'transparent',
                  true: Colors.buttonTextGreen,
                }}
                thumbColor={Colors.backgroundWhite}
                onValueChange={() => toggleHideLocation(!isHideLocation)}
                ios_backgroundColor={
                  isHideLocation
                    ? Colors.buttonTextGreen
                    : Colors.placeHolderTextColor
                }
                value={isHideLocation}
              />
            </View>
          </ViewRowWise>
        </View>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
          style={{ flex: 1 }}>
          <ViewRowWise style={styles.pendingOrder}>
            <Text style={styles.pendingText}>{languageJson.PendingOrders_Heading}</Text>
            <Text
              onPress={() => navigation.navigate('CurrentOrders')}
              style={styles.viewAll}>
              {languageJson.ViewAll_Button}
            </Text>
          </ViewRowWise>
          <FlatList
            ItemSeparatorComponent={() => (
              <View style={styles.itemSeparator} />
            )}
            // style={styles.itemFlatlistContainer}
            data={orderData}
            showsVerticalScrollIndicator={false}
            renderItem={_showOrders}
            keyExtractor={item => item.key}
            contentContainerStyle={{ paddingBottom: height(15) }}
          />
        </LinearGradient>
      </ScrollView>
      <DeliveryModal isVisible={isDeliveryVisible} onPressNo={() => {
        setIsDeliveryVisible(false)
        unCheckItem(itemDelete)
        // navigation.goBack()
      }}
        onPressYes={() => {
          setIsDeliveryVisible(false)
          unCheckItem(itemDelete)
          // navigation.goBack()
        }}
        onPressAssign={() => {
          setIsDeliveryVisible(false)
          // unCheckItem(itemDelete)
          setTimeout(() => {
            setSettingDriver(true)
          }, 1000);
          
          // navigation.goBack()
        }}
      />
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
      {/* {setSettingDriver?(false)} */}
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
          keyExtractor={item => item.key}
        />
      </Modal>
      {/* </SafeAreaView> */}
    </Fragment>
  );
}
