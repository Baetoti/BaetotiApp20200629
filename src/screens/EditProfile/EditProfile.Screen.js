import React, {Fragment, useState, createRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Platform,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './EditProfile.Style';
import providerProfileUri from '../../assets/MoreAssets/Layer774.png';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.Component';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import RippleButton from '../../components/RippleButton/RippleButton.component';
import profileImage from '../../assets/Login/profile.png';
import {height, width,totalSize} from 'react-native-dimension';
import arrowdownImage from '../../assets/Login/arrow-down.png';
import lockImage from '../..//assets/Login/lock.png';
import emailImage from '../..//assets/Login/email.png';
import flagImage from '../../assets/Login/uk.png';
import Colors from '../../utills/Colors';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import kidImage from '../../assets/Login/kid.png';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../../Redux/Actions/Language';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import editImage from '../../assets/MoreAssets/edit.png';
import PhoneInput from 'react-native-phone-input';

import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
export default function EditProfile({navigation}) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.CreateAccount_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * Redux dispatch used to change language
   */
  const dispatch = useDispatch();
  /**
   * create states and refs to mannage the text inputs like userName,Email etc
   */
  const userName = createRef(null);
  const email = createRef(null);
  const password = createRef(null);
  const confirmPassword = createRef(null);
  const [selectedCountry, setSelectedCountry] = useState([]);
  /**
   * Date States and refernces used here to manage date Picker
   */
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [isdate, setIsDate] = useState(false);
  const calendar = createRef(null);

  /**
   *  create state to manage the gender drop down
   */
  const [selectedValue, setSelectedValue] = useState(
    languageJson.Gender_PlaceHolder,
  );

  /**
   * Fetch Coutries Data on screen load
   */
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => {
        setCountryData(
          res.map(item => ({
            code: item.callingCodes[0],
            name: item.altSpellings[0],
            flag: item.flag,
          })),
        );
        setSelectedCountry({
          code: res[0].callingCodes[0],
          name: res[0].altSpellings[0],
          flag: res[0].flag,
        });
      })
      .catch(e => console.log(e));
  }, []);

  /**
   * Function to handle date changes
   */
  const onChange = (event, selectedDate) => {
    setShow(!show);
    setDate(selectedDate.toDateString());
    setIsDate(!isdate);
  };
  return (
    <Fragment>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.backgroundWhite}
      />
      <SafeAreaView style={(styles.container, {backgroundColor: '#ffffff'})} />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={height(8)}>
          <DatePicker
            style={{width: 0, height: 0}}
            showIcon={false}
            ref={calendar}
            // onCloseModal={() => numberRef.current.focus()}
            mode="date"
            format="DD/MM/YYYY"
            minDate="01/01/1900"
            maxDate="01/01/2030"
            confirmBtnText="Confirm"
            androidMode={'spinner'}
            cancelBtnText="Cancel"
            onDateChange={date => {
              setDate(date);
              setIsDate(true);
            }}
          />
          <LinearGradient
            colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
            style={{flex: 1}}>
            <ProfileHeader
              title={'Edit Profile'}
              onPress={() => navigation.goBack()}
              containerStyle={{
                backgroundColor: Colors.backgroundWhite,
                width: width(100),
                paddingHorizontal: width(5),
                marginTop: height(0),
              }}
              notShare
            />
            <Image
              source={providerProfileUri}
              style={styles.providerProfileUri}
              resizeMode="cover"
            />
            {/* <View style={styles.createAccountTextContainer}>
              <TextRowVise style={styles.createAccountText}>
                {languageJson.CreateAccount_Heading}
              </TextRowVise>
            </View> */}
            <View style={styles.coutryTextFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                        styles.textFieldInnerContainer,
                        {flexDirection: 'row-reverse'},
                      ]
                    : styles.textFieldInnerContainer
                }>
                {/* <SvgCssUri
                            width={21}
                            height={21}
                            resizeMode='contain'
                            uri='https://restcountries.eu/data/afg.svg'
                        /> */}
                {/*        
                <Image
                  source={flagImage}
                  resizeMode="contain"
                  style={styles.flagImage}
                />
                <Text>+{selectedCountry.code}</Text>
                 <TouchableOpacity>
                  <Image
                    source={arrowdownImage}
                    style={styles.arrowdownImage}
                  />
                  
                </TouchableOpacity> */}
                  <PhoneInput
                  style={
                    selectdLanguage == 'ar'
                      ? [{flexDirection: 'row-reverse'}]
                      : {flexDirection: 'row'}
                  }
                  textProps={Platform.OS == 'ios' ? { placeholder: languageJson.Phone_PlaceHolder, placeholderTextColor: Colors.placeHolderTextColor, color: '#000000' } : { placeholder: languageJson.Phone_PlaceHolder, placeholderTextColor:Colors.placeHolderTextColor }}

                  textStyle={
                    selectdLanguage == 'ar'
                      ? [{textAlign: 'right', paddingHorizontal: width(3),fontSize:totalSize(2)}]
                      : {textAlign: 'left', paddingHorizontal: width(2),fontSize:totalSize(2)}
                  }
                />

                {/* <TextInput
                  placeholder={languageJson.Phone_PlaceHolder}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  style={
                    selectdLanguage == 'ar'
                      ? styles.countryArabictextInput
                      : styles.countrytextInput
                  }
                  onSubmitEditing={() => {
                    userName.current.focus();
                  }}
                  returnKeyType="next"
                  keyboardType="numeric"
                /> */}
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                        styles.textFieldInnerContainer,
                        {flexDirection: 'row-reverse'},
                      ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={profileImage} />
                <TextInput
                  placeholder={languageJson.Username_PlaceHolder}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, {textAlign: 'right'}]
                      : styles.textInput
                  }
                  ref={userName}
                  onSubmitEditing={() => {
                    email.current.focus();
                  }}
                  returnKeyType="next"
                />
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                        styles.textFieldInnerContainer,
                        {flexDirection: 'row-reverse'},
                      ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={emailImage} />
                <TextInput
                  placeholder={languageJson.Email_PlaceHolder}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, {textAlign: 'right'}]
                      : styles.textInput
                  }
                  ref={email}
                  returnKeyType="done"
                />
              </View>
            </View>
            <View style={styles.dateTimePickerContainer}>
              <View style={styles.dateTextFieldContainer}>
                <View
                  style={
                    selectdLanguage == 'ar'
                      ? [
                          styles.dateTextInnerFieldContainer,
                          {flexDirection: 'row-reverse'},
                        ]
                      : styles.dateTextInnerFieldContainer
                  }>
                  <Image style={styles.textFieldImage} source={kidImage} />
                  {!isdate ? (
                    <TouchableOpacityRowVise
                      style={{width: width(26)}}
                      onPress={() => calendar.current.onPressDate()}>
                      <Text style={styles.datePlaceholder}>
                        {languageJson.Dob_PlaceHolder}
                      </Text>
                    </TouchableOpacityRowVise>
                  ) : (
                    <TouchableOpacityRowVise
                      style={{width: width(26)}}
                      onPress={() => calendar.current.onPressDate()}>
                      <Text style={styles.selectedDateText}>{date}</Text>
                    </TouchableOpacityRowVise>
                  )}
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={'date'}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </View>
              </View>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                        styles.picekrTextFieldContainer,
                        {flexDirection: 'row-reverse'},
                      ]
                    : styles.picekrTextFieldContainer
                }>
                <ModalDropdown
                  options={['Male', 'Female', 'Others']}
                  dropdownStyle={styles.genderDropDown}
                  showsVerticalScrollIndicator={false}
                  onSelect={(index, value) => setSelectedValue(value)}
                  renderRow={(option, index, isSelected) => (
                    <View style={styles.genderDropDownItemContainer}>
                      <Text style={styles.genderDropDownItemText}>
                        {option}
                      </Text>
                    </View>
                  )}>
                  <ViewRowVise style={styles.genderConainer}>
                    <Text style={styles.genderText}>{selectedValue}</Text>
                    <Image
                      source={arrowdownImage}
                      resizeMode="contain"
                      style={styles.arrowdownImage}
                    />
                  </ViewRowVise>
                </ModalDropdown>
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                        styles.textFieldInnerContainer,
                        {flexDirection: 'row-reverse'},
                      ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={lockImage} />
                <TextInput
                  placeholder={languageJson.CreatePassword_PlaceHolder}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, {textAlign: 'right'}]
                      : styles.textInput
                  }
                  ref={password}
                  onSubmitEditing={() => {
                    confirmPassword.current.focus();
                  }}
                  returnKeyType="next"
                  secureTextEntry={true}
                  blurOnSubmit={false}
                />
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                        styles.textFieldInnerContainer,
                        {flexDirection: 'row-reverse'},
                      ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={lockImage} />
                <TextInput
                  placeholder={languageJson.ConfirmPassword_PlaceHolder}
                  placeholderTextColor={Colors.placeHolderTextColor}
                  autoCapitalize="none"
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, {textAlign: 'right'}]
                      : styles.textInput
                  }
                  ref={confirmPassword}
                  returnKeyType="done"
                  secureTextEntry={true}
                  blurOnSubmit={false}
                  onSubmitEditing={() => Keyboard.dismiss()}
                />
              </View>
            </View>
            {/* <View style={styles.termPolicyContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? {flexDirection: 'row-reverse'}
                    : {flexDirection: 'row'}
                }>
                <Text style={styles.descriptionText}>
                  {languageJson.ByclickingSignup_Text}{' '}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.termPolicyText}>
                    {languageJson.Termsofuse_Text}{' '}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>
                  {languageJson.comma}{' '}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.termPolicyText}>
                    {languageJson.PrivacyPolicy_Text}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>.</Text>
              </View>
              <Text style={styles.descriptionText}>
                {languageJson.youMayReceive_Text}
              </Text>
            </View> */}
            <RippleButton
              title={'Update'}
              onPress={() => navigation.popToTop()}
              containerStyle={{
                marginTop: height(5),
                backgroundColor: Colors.buttonBlue,
                borderColor: Colors.buttonBlue,
                shadowColor: Colors.buttonBlue,
              }}
            />
            {/* <Text style={styles.alreadyAccountText}>
              {languageJson.AlreadyAccountLabel}
            </Text>
            <TouchableOpacity
              style={styles.createAccountButton}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>{languageJson.Login_Button}</Text>
            </TouchableOpacity> */}
          </LinearGradient>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <SafeAreaView style={(styles.container, {backgroundColor: '#F6F6F6'})} />
    </Fragment>
  );
}
