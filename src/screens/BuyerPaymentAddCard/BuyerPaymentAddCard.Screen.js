import React, { Fragment, useState, createRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './BuyerPaymentAddCard.Style';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import { height, width } from 'react-native-dimension';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker';
import Colors from '../../utills/Colors';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
export default function BuyerPaymentAddCard({ navigation }) {

  const languageJson = useSelector(state => state.Language.languageJson.AddCard_Screen)
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Refs used to auto focus next on submit editing
   */
  const dateRef = createRef(null);
  const cvvRef = createRef(null);
  const nameRef = createRef(null);
  /**
   * States used for screen data and date
   */
  const [date, setDate] = useState(null);
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
        itemimage: [require('../../assets/BuyerMore/payment-1.png')],
      },
      {
        key: 1,
        itemimage: [require('../../assets/BuyerMore/mastercard.png')],
      },
      {
        key: 2,
        itemimage: [require('../../assets/BuyerMore/american-express.png')],
      },
      {
        key: 3,
        itemimage: [require('../../assets/BuyerMore/visa.png')],
      },
    ],
  });
  /**
   * Component for individual Item
   */
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.itemimage[0]}
          style={styles.itemImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} backgroundColor={'#253951'} />
      <SafeAreaView style={(styles.container, { backgroundColor: '#253951' })} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            locations={[0.1, 0.7]}
            colors={['#1C2D41', '#253951']}
            style={styles.container}>
              <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={height(8)}>
            <View>
              <Header
                title={languageJson.AddCard_Heading}
                hideRightIcon
                onPressBack={() => navigation.goBack()}
                containerStyle={styles.headerContainer}
                titleStyle={styles.headerTitle}
                backIconContainerStyle={styles.backIconContainerStyle}
                backIconStyle={styles.backIcon}
              />
              <View style={styles.innerContainer}>
                <LinearGradient
                  colors={['#FDF4F2', '#FCF5ED', '#FCF5ED', '#FAFAFA']}
                  style={{ height: height(80) }}>
                  <TextRowVise style={selectdLanguage == 'ar' ? [styles.heading, { paddingRight: width(5) }] : styles.heading}>{languageJson.CardsDetails_Title}</TextRowVise>
                  <View style={selectdLanguage == 'ar' ? [styles.customTextInputContainer, { flexDirection: 'row-reverse' }] : styles.customTextInputContainer}>
                    <View style={styles.cardNumberContainer}>
                      <TextInput
                        placeholder={languageJson.CardNumber_PlaceHolder}
                        placeholderTextColor={Colors.gray}
                        returnKeyType="next"
                        blurOnSubmit={false}
                        style={[selectdLanguage == 'ar' ? styles.textInputStyles : {}]}
                        onSubmitEditing={() => {
                          nameRef.current.focus();
                        }}
                      />
                    </View>
                    <FlatList
                      data={data.itemList}
                      showsVerticalScrollIndicator={false}
                      renderItem={renderItem}
                      horizontal={true}
                      ItemSeparatorComponent={() => (
                        <View style={styles.ItemSeparatorComponent} />
                      )}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      placeholder={languageJson.CardHolderName_PlaceHolder}
                      placeholderTextColor={Colors.gray}
                      returnKeyType="done"
                      ref={nameRef}
                      style={[selectdLanguage == 'ar' ? styles.textInputStyles : {}]}
                      blurOnSubmit={false}
                    />
                  </View>
                  <View style={styles.textFieldsContainer}>
                    <TouchableOpacity
                      style={selectdLanguage == 'ar' ? [styles.halfTextInputContainer, { flexDirection: 'row-reverse' }] : styles.halfTextInputContainer}
                      onPress={() => dateRef.current.onPressDate()}
                    >
                      {date == null ? <Text style={{ color: Colors.gray, paddingVertical: height(2.4), marginLeft: width(0.75) }}>{languageJson.ExpireDate_PlaceHolder}</Text> :
                        <Text>{date}</Text>}
                      <Image
                        source={require('../../assets/BuyerMore/calender-purple.png')}
                        style={styles.placeholderImage}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                    <View style={selectdLanguage == 'ar' ? [styles.halfTextInputContainer, { flexDirection: 'row-reverse' }] : styles.halfTextInputContainer}>
                      <TextInput
                        placeholder={languageJson.CVV_PlaceHolder}
                        placeholderTextColor={Colors.gray}
                        returnKeyType="done"
                        style={[selectdLanguage == 'ar' ? styles.textInputStyles : {}]}
                        style={{ width: width(30) }}
                        ref={cvvRef
                        }
                        blurOnSubmit={true}
                      />
                      <Image
                        source={require('../../assets/BuyerMore/question.png')}
                        style={styles.placeholderImage}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
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
              </KeyboardAwareScrollView>
          </LinearGradient>
          <DatePicker
            style={styles.DatePicker}
            showIcon={false}
            ref={dateRef}
            is24Hour={false}
            mode='date'
            confirmBtnText="Confirm"
            androidMode={'spinner'}
            cancelBtnText="Cancel"
            onDateChange={time => {
              setDate((time));
            }}
          />
      
      </SafeAreaView>
      
    </Fragment>
  );
}
