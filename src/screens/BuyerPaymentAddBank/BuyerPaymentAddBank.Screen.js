import React, { Fragment, useState, createRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import styles from './BuyerPaymentAddBank.Style';
import Options from './DummyData';
import Style from './Components/styles'
import { height, width, totalSize } from 'react-native-dimension';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import ModalDropdown from 'react-native-modal-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import Colors from '../../utills/Colors';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
export default function BuyerPaymentAddBank({ navigation }) {
  /**
   * States used for bank selection and screen data
   */
  const [selectedBank, setSelectedBank] = useState(null); const [data, setData] = useState({
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
   * Refs of inpust to auto focus next on submit editing
   */
  const accountNo = createRef(null)
  const ifscCode = createRef(null)
  const accountName = createRef(null)
  const branchName = createRef(null)
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.AddBank_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#253951'}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: '#253951' })}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          locations={[0.1, 0.7]}
          colors={['#1C2D41', '#253951']}
          style={styles.container}
        >
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            extraScrollHeight={height(8)}>
            <View>
              <Header
                title={languageJson.AddBank_Title}
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
                  style={{ height: height(80) }}
                >
                  <TextRowVise style={selectdLanguage == 'ar' ? [styles.heading, { paddingRight: width(5) }] : styles.heading}>{languageJson.BankDetails_Label}</TextRowVise>
                  <View style={styles.textInputContainer}>
                    <TextInput placeholder={languageJson.AccountNumber_PlaceHolder}
                      style={selectdLanguage == 'ar' ? styles.textInputStyles : {}}
                      placeholderTextColor='#1C2D41' returnKeyType='next' blurOnSubmit={false} onSubmitEditing={() => { accountNo.current.focus() }} />
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput placeholder={languageJson.ConfirmAccountNumber_PlaceHolder}
                      style={selectdLanguage == 'ar' ? styles.textInputStyles : {}}
                      placeholderTextColor='#1C2D41' returnKeyType='next' ref={accountNo} blurOnSubmit={false} onSubmitEditing={() => { accountName.current.focus() }} />
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput placeholder={languageJson.AccountName_PlaceHolder} returnKeyType='next' placeholderTextColor='#1C2D41'
                      style={selectdLanguage == 'ar' ? styles.textInputStyles : {}}
                      ref={accountName} blurOnSubmit={false} onSubmitEditing={() => { this.ifscCode.focus() }} />
                  </View>



                  <ModalDropdown
                    options={Options}
                    dropdownStyle={Style.dropDown}
                    showsVerticalScrollIndicator={false}
                    onSelect={(index, value) => setSelectedBank(value)}
                    renderRow={(option, index, isSelected) => (
                      <View style={Style.dropDownItemContainer}>
                        <View style={{ padding: width(2), borderRadius: 5, backgroundColor: option.backgroundColor }}>
                          <Image source={option.image} style={{ width: width(12), height: height(3), resizeMode: 'contain' }} />
                        </View>
                        <Text style={Style.dropDownItemText}>{option.title}</Text>
                      </View>
                    )}
                  >
                    <View activeOpacity={0.5}
                      style={Style.textFieldContainer}>
                      <View style={Style.textFieldInnerContainer}>
                        {
                          selectedBank != null && (
                            <ViewRowVise style={Style.rowBank}>
                              <ViewRowVise style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={selectedBank.image} style={{ width: width(12), height: height(3), resizeMode: 'contain' }} />
                                <Text style={[Style.textInput, { marginHorizontal: width(5) }]}>{selectedBank.title}</Text>
                              </ViewRowVise>
                              <AntDesign name={"down"} color={Colors.gray} size={height(2.5)} />
                            </ViewRowVise>
                          )
                        }
                        {
                          selectedBank == null && (
                            <ViewRowVise style={Style.rowBank}>
                              <TextRowVise style={Style.textInput}>{languageJson.SelectBank_Placeholder}</TextRowVise>
                              <AntDesign name={"down"} color={Colors.gray} size={height(2.5)} />
                            </ViewRowVise>
                          )
                        }
                      </View>
                    </View>
                  </ModalDropdown>



                  <View style={styles.textInputContainer}>
                    <TextInputRowVise placeholder={languageJson.IFSCCode_PlaceHolder} placeholderTextColor='#1C2D41' returnKeyType='next' ref={ifscCode} blurOnSubmit={false} onSubmitEditing={() => { branchName.current.focus() }} />
                  </View>
                  <Text style={styles.orText}>{languageJson.OR_Text}</Text>
                  <View style={styles.textInputContainer}>
                    <TextInputRowVise placeholder={languageJson.BranchName_PlaceHolder} placeholderTextColor='#1C2D41' returnKeyType='done' ref={branchName} blurOnSubmit={true} />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      title={languageJson.AddBank_Button}
                      containerStyle={styles.button}
                      textStyle={styles.buttonText}
                    />
                  </View>
                </LinearGradient>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </LinearGradient>
      </SafeAreaView>
    </Fragment>
  );
}
