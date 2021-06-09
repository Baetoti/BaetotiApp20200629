import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import styles from './BuyerPaymentWithdraw.Style';
import Colors from '../../utills/Colors';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import LinearGradient from 'react-native-linear-gradient';
import check from '../../assets/PaymentMethod/check.png';
import { height, width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
export default function BuyerPaymentWithdraw({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.WithdroawselectBank_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  /**
   * States used screen data and selected Index
   */
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState({
    key: 1,
    name: 'Jeson Wolf',
    orderId: 'OR4569EB320',
    price: 210.0,
    timeLeft: '1 day,18 hours',
    deliveryDateTime: '09:30 PM 18 Apr,2020',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    isHidden: 'true',
    Address: 'C-404, Golden Street, East 25th Street, New york City, US',
    providerBy: {
      deliverBy: 'Driver',
      providerName: 'julia Doe',
      providerImage: require('../../assets/HomeAssets/Layer861copy.png'),
      providerPrice: 15,
      userType: 'provider',
    },
    client: {
      clientName: 'Martin Goe',
      clientImage: require('../../assets/HomeAssets/Layer755.png'),
      clientPrice: 45,
      userType: 'client',
    },
    itemList: [
      {
        key: 0,
        itemname: 'US Bank',
        account: 'XXXXX653',
        itemimage: [require('../../assets/BuyerMore/usBank.png')],
        isDefault: true,
      },
      {
        key: 1,
        itemname: 'Axos Bank',
        account: 'XXXXX653',
        itemimage: [require('../../assets/BuyerMore/axos.png')],
      },
    ],
  });
  /**
   * Component for individual Item
   */
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemsDetailContainer}>
        <ViewRowVise style={styles.itemContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              source={item.itemimage[0]}
              style={styles.itemImage}
              resizeMode="contain"
            />
          </View>
          <ViewRowVise style={styles.imageMainContainer}>
            <View>
              <View style={styles.titleContainer}>
                <Text style={styles.shopName}>{item.itemname}</Text>
                {item.isDefault && (
                  <TouchableOpacity style={styles.defaultButton}>
                    <Text style={styles.defaultButtonText}>{languageJson.Default_Label}</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={styles.accountNumberContainer}>
                <Text style={styles.accountPlaceholder}>Account:</Text>
                <Text style={styles.accountName}>{item.account}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.checkBoxContainer}
              onPress={() => setSelectedIndex(index)}>
              {index == selectedIndex ? (
                <Image source={check} style={styles.checkImage} />
              ) : null}
            </TouchableOpacity>
          </ViewRowVise>
        </ViewRowVise>
      </View>
    );
  };
  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#253951'}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: '#253951' })}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          locations={[0.1, 0.7]}
          colors={['#1C2D41', '#253951']}
          style={styles.container}
        >
          <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:height(2)}}
          >
          <View>
            <Header
              title={languageJson.Withdraw_Title}
              hideRightIcon
              onPressBack={() => navigation.goBack()}
              containerStyle={styles.headerContainer}
              titleStyle={styles.headerTitle}
              backIconContainerStyle={styles.backIconContainerStyle}
              backIconStyle={styles.backIcon}
            />
            <View style={styles.amountDetails}>
              <TextRowVise style={selectdLanguage == 'ar' ? [styles.totalAmount, { textAlign: 'right' }] : styles.totalAmount}>{currencyLabel}1000</TextRowVise>
              <TouchableOpacity style={styles.withdrawButton}>
                <TextRowVise style={styles.withdrawButtonText}>{languageJson.WithdrowAmount_Label}</TextRowVise>
              </TouchableOpacity>
            </View>

            <View style={styles.innerContainer}>
              <LinearGradient
                colors={['#FDF4F2', '#FCF5ED', '#FCF5ED', '#FAFAFA']}
                style={{ height: height(75) }}
              >
                <TextRowVise style={selectdLanguage == 'ar' ? [styles.heading, { paddingRight: width(5) }] : styles.heading}>{languageJson.SelectBank_Label}</TextRowVise>
                <View style={styles.cardsFlatlist}>
                  <FlatList
                    data={data.itemList}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                  />
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('BuyerPaymentAddBank')} style={styles.addCardButton}>
                  <Text style={styles.addCardButtonText}>+{languageJson.AddBank_Button}</Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                  <Button
                    title={languageJson.Next_Button}
                    containerStyle={styles.button}
                    textStyle={styles.buttonText}
                  />
                </View>
              </LinearGradient>
            </View>
          </View>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </Fragment>
  );
}
