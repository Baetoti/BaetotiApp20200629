import React, { Fragment, createRef, useState, useRef } from 'react';
import {
  View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, TextInput, Linking
} from 'react-native';
import styles from './LoginPhone.styles';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import AuthTextField from '../../components/AuthTextField/AuthTextField.Component';
import RippleButton from '../../components/RippleButton/RippleButton.component';
import lockImage from '../../assets/Login/lock.png'
import phoneImage from '../../assets/Login/phone.png';
import googleImage from '../../assets/Login/google.png'
import facebookImage from '../../assets/Login/facebook.png'
import { height, width, totalSize } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { login } from '../../Redux/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Actions/Language';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import baetotiBlackLogo from '../../assets/Login/baetoti-black-logo.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import PhoneInput from 'react-native-phone-input';
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"

export default function Login({ navigation }) { 
  /**
   * create here password refs to for password input  
   * 
   */
  const languageJson = useSelector(state => state.Language.languageJson.LoginPhone_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const phoneRef = useRef(null)
  /**
   * Redux Dispatch to change language
   */
  const dispatch = useDispatch()
  /**
   * Password input to ref to focus autoh
   */

  const [phoneNumber, setphoneNumber] = useState("")
  const [phoneCode, setPhoneCode] = useState('+966 ')
  const [spinner, setspinner] = useState(false)
  
  const UserRegister = async () => {
    try {      
        setspinner(true)
        var formData = new FormData(); 
        formData.append('mobile', phoneNumber.replace("+91 ","").replace("+91",""));
        const {data} = await Services.UserLogin(formData)
        console.log(data);          
        navigation.navigate('LoginPhoneSoc', { userID: data.userID })
        setspinner(false)
        // props.navigation.replace("Sucess")    
        // props.navigation.goBack()                      
    }catch(error){
      alert("Something went wrong")
      console.log(error);              
    }
}  

  onPhoneInputChange = (value, iso2) => {
    // console.log(value, iso2);
    setphoneNumber(value)
  }

  return (
    <Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.backgroundColor })}
      />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={height(8)}>
          <LinearGradient
            colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
            style={{ flex: 1 }}
          >
            <AuthHeader dropDownVisibel={true} selectdLanguage={selectdLanguage} isImage
              onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))} />
            <View style={styles.loginTextContainer}>
              <Image source={baetotiBlackLogo}
                style={styles.logoImage} />
              <TextRowVise style={styles.loginText}>{languageJson.number_Question}</TextRowVise>
              <Text style={styles.heading}>{languageJson.number_Headingn}</Text>
            </View>
            <View style={styles.textFieldContainer}>
              <View locale={'ar'}
                style={
                  selectdLanguage == 'ar' ? [styles.textFieldInnerContainer, { flexDirection: 'row-reverse' }] :
                    styles.textFieldInnerContainer}
              >
                <PhoneInput
                  ref={phoneRef}
                  autoFormat={true}
                  style={
                    selectdLanguage == 'ar'
                      ? [{ flexDirection: 'row-reverse' }]
                      : { flexDirection: 'row' }
                  }
                  textProps={Platform.OS == 'ios' ? { placeholder: languageJson.Phone_PlaceHolder, placeholderTextColor: Colors.placeHolderTextColor, color: '#000000' } : { placeholder: languageJson.Phone_PlaceHolder, placeholderTextColor: Colors.placeHolderTextColor }}
                  value={phoneCode}
                  onSelectCountry={(country) => {
                    setPhoneCode(phoneRef.current.getValue())
                  }}     
                  onChangePhoneNumber={onPhoneInputChange}             
                  textStyle={
                    selectdLanguage == 'ar'
                      ? [{ textAlign: 'right', paddingHorizontal: width(3), fontSize: totalSize(2) }]
                      : { textAlign: 'left', paddingHorizontal: width(2), fontSize: totalSize(2) }
                  }
                />
              </View>
            </View>
            {/* <AuthTextField  keyboardType = "number-pad"
                        keytype='done'
                        image={phoneImage} key placeHolder={languageJson.Phone}  selectdLanguage={selectdLanguage} />
              */}
            <RippleButton title={languageJson.Next_Button}
              containerStyle={{ marginTop: height(5), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }}
              // onPress={() => dispatch(login({ user: 'John Doe' }))} />
              onPress={() => {
                UserRegister()
                // navigation.navigate("PhoneVerification")
              }}  />

            <View style={styles.termPolicyContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? { flexDirection: 'row-reverse' }
                    : { flexDirection: 'row' }
                }>
                <Text style={styles.descriptionText}>
                  {languageJson.ByclickingSignup_Text}{' '}
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/baetoti/")}>
                  <Text style={styles.termPolicyText}>
                    {languageJson.Termsofuse_Text}{' '}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>
                  {languageJson.comma}{' '}
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/baetoti/")}>
                  <Text style={styles.termPolicyText}>
                    {languageJson.PrivacyPolicy_Text}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>.</Text>
              </View>
              <Text style={styles.descriptionText}>
                {languageJson.youMayReceive_Text}
              </Text>
            </View>
            {/* <View style={styles.orContainer}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            locations={[0.1, 0.7]}
                            colors={['#3C485800', '#3C4858']}
                            style={[styles.LinearGradient]}
                        />
                        <Text style={styles.orText}>{languageJson.OR_Text}</Text>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            locations={[0.1, 0.7]}
                            colors={['#3C4858', '#3C485800']}
                            style={[styles.LinearGradient]}
                        />
                </View> 
              */}
            {/* <View style={styles.socialIconButtonContainer}>
                        <TouchableOpacity style={styles.socialIconButton}>
                            <Image source={facebookImage}
                                resizeMode='contain'
                                style={styles.facebookImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialIconButton}>
                            <Image source={googleImage}
                                resizeMode='contain'
                                style={styles.googleImage} />
                        </TouchableOpacity>
                </View> 
              */}
            {/* <Text style={styles.donotAccountText}>{languageJson.DoNotAcouuntLabel}</Text>
                <TouchableOpacity style={styles.createAccountButton}
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.createAccountText}>{languageJson.CreateAccountButton}</Text>
                </TouchableOpacity> 
              */}

          </LinearGradient>
        </KeyboardAwareScrollView>
      </SafeAreaView>
      <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{color:"blue",}}
      />
    </Fragment>
  )
}

