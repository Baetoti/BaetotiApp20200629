import React, { useState, Fragment } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styles from './MyOrders.Style';
import Colors from '../../utills/Colors';
import searchImage from '../../assets/HomeAssets/search.png';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import undrawemptyImage from '../../assets/HomeAssets/undrawempty.png';
import Tab from '../../components/Tab/Tab.component';
import InProcessOrders from '../../DummyData/InProcessOrders';
import CompletedOrders from '../../DummyData/CompletedOrders';
import { height, width, } from 'react-native-dimension'
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import arrowdownImage from '../../assets/buyerHome/angle-down.png';
import search from '../../assets/buyerHome/search.png';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';


export default function MyOrders({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language 
   */
  const languageJson = useSelector(state => state.Language.languageJson.YourOrder_Inprocess_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const [cancelOrder, setCancelOrder] = useState([]);

  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";


  /**
   * States Used
   */
  const [selectedTab, setSelectedTab] = useState(0);
  /**
   * Component for Individual in Process order item
   */
  const renderInProcessOrder = ({ item, index }) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.topContainer}>
          <ViewRowVise style={styles.row}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.nameContainer}>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.orderId}>{item.id}</Text>
                <Text style={styles.dateTimeText}>{item.dateTime}</Text>
              </ViewRowVise>
              <TextRowVise style={styles.storeName}>{item.storeName}</TextRowVise>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.priceHeading}>{languageJson.Price_Label}</Text>
                <Text style={styles.priceText}>
                  {currencyLabel}{isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
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
            <Text style={styles.itemsText}>{item.items}</Text>
          </View>
          <TouchableOpacityRowVise
            activeOpacity={0.7}
            onPress={() => navigation.navigate('BuyerPendingOrders',{item:item})}
            style={styles.row}>
            <Text style={styles.detailsText}>{languageJson.ViewDetails_Button}</Text>
            <Image
              source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
              style={selectdLanguage == 'ar' ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }] : styles.arrowRight}
            />
          </TouchableOpacityRowVise>
        </ViewRowVise>
      </View>
    );
  };
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const renderCompleteOrders = ({ item, index }) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.topContainer}>
          <ViewRowVise style={styles.row}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.nameContainer}>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.orderId}>{item.id}</Text>
                <Text style={styles.dateTimeText}>{item.dateTime}</Text>
              </ViewRowVise>
              <Text style={styles.storeName}>{item.storeName}</Text>
              <ViewRowVise style={styles.idDateContainer}>
                <Text style={styles.priceHeading}>{languageJson.Price_Label}</Text>
                <Text style={styles.priceText}>
                  {currencyLabel}{isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
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
            <Text style={styles.itemsText}>{item.items}</Text>
          </View>
          <TouchableOpacityRowVise
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CompleteOrder', { item: item })}
            style={styles.row}>
            <Text style={styles.detailsText}>{languageJson.ViewDetails_Button}</Text>
            <Image
              source={require('../../assets/BuyerOrderDetails/angle-right-blue.png')}
              style={selectdLanguage == 'ar' ? [styles.arrowRight, { transform: [{ rotate: '180 deg' }] }] : styles.arrowRight}
            />
          </TouchableOpacityRowVise>
        </ViewRowVise>
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
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={{ flex: 1 }}>
          <View style={styles.HeaderContainer}>
            <HomeHeader
              onPress={() => navigation.popToTop()}
              title={languageJson.YourOrder_Heading}
              image={searchImage}
              containerStyle={styles.containerStyle}
            />
            <View style={styles.tabContainer}>
              <Tab
                selectedTextColor={Colors.textBlack}
                textColor={Colors.gray}
                selectedIndex={selectedTab}
                textStyle={styles.tabtextStyle}
                selectedTabText={{ fontWeight: 'bold' }}
                contentContainerStyle={{ paddingHorizontal:width(5),  justifyContent: 'space-between', alignSelf: 'center', }}
                renderSelectedTabFooter={() => (
                  <View style={styles.renderTabFooter} />
                )}
                onChangeTab={(item, index) => setSelectedTab(index)}
                options={[
                  languageJson.PendingOrders_tab,
                  languageJson.ApprovedOrders_tab,
                  languageJson.preparing_Order,
                  languageJson.orderIsReady_Heading,
                  languageJson.Delivered_Heading,]}
              />
            </View>
          </View>
          {
            selectedTab == 2 && cancelOrder.length < 1 ? null :
              <View style={styles.searchContainer}>
                <ViewRowVise style={styles.searchInnerContainer}>
                  <Image style={styles.searchImage}
                    source={search} />
                  <TextInputRowVise style={styles.searchText}
                    placeholderTextColor={Colors.lightGray}
                    placeholder={languageJson.Search_Label} />
                </ViewRowVise>
              </View>
          }

          {selectedTab == 1 ?
            <FlatList
              data={InProcessOrders}
              renderItem={renderInProcessOrder}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: height(2) }}
              keyExtractor={(item) => item.id}
            />
            : selectedTab == 0 ?
              <FlatList
                data={CompletedOrders}
                renderItem={renderCompleteOrders}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: height(2) }}
                keyExtractor={(item) => item.id}
              />
              :
              <View style={styles.cancelOrderContainer}>
                <Image
                  source={undrawemptyImage}
                  resizeMode="contain"
                  style={styles.undrawemptyImage}
                />
                <Text style={styles.noDataText}>{languageJson.NoData_Label}</Text>
              </View>
          }

          {/* CurrentOrders */}
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />

    </Fragment>
  );
}
