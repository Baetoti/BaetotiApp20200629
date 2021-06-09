import React, { Fragment, createRef, useState, useRef } from 'react';
import {
  View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, TextInput, Linking ,Dimensions
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
const widthm = Dimensions.get("window").width;


export default function Login({ navigation , route}) { 
  /**
   * create here password refs to for password input  
   * 
   */
  const languageJson = useSelector(state => state.Language.languageJson.LoginPhone_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const phoneRef = useRef(null)
  const userID = route.params.userID;
  /**
   * Redux Dispatch to change language
   */
  const dispatch = useDispatch()
  /**
   * Password input to ref to focus auto
   */
  const [phoneCode, setPhoneCode] = useState('+966 ')
  return (
    <Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={height(8)}>
          <LinearGradient
            colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
            style={{ flex: 1 }}
          >            
            <View style={styles.loginTextContainer}>        
              <TextRowVise style={styles.loginText}>{"Wellcome to Baetoti"}</TextRowVise>
              <Text style={styles.heading}>{"whether you're creating an account or signing back in, let's start."}</Text>
            </View>
            {/* <AuthTextField  keyboardType = "number-pad"
                        keytype='done'
                        image={phoneImage} key placeHolder={languageJson.Phone}  selectdLanguage={selectdLanguage} /> */}

            <TouchableOpacity style={{marginTop:15,width:widthm-40,height:46,borderWidth:0.5,borderColor:"gray",borderRadius:10,alignSelf:"center",flexDirection:"row",alignItems:"center"}}
                onPress={()=> navigation.navigate('SignUp', { nextScreen: "login" ,userID : userID})}

            >
              <Image source={require("../../assets/extra/gmail.png")}
                  style={{height:25,width:25,marginLeft:15}} />
              <Text style={{fontSize:16,marginLeft:15}}>Continue with Google</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={{marginTop:15,width:widthm-40,height:46,borderWidth:0.5,borderColor:"gray",borderRadius:10,alignSelf:"center",flexDirection:"row",alignItems:"center"}}
              onPress={()=> navigation.navigate('SignUp', { nextScreen: "login" ,userID : userID})}
            >
              <Image source={require("../../assets/extra/facebook.png")}
                  style={{height:25,width:25,marginLeft:15}} />
              <Text style={{fontSize:16,marginLeft:15}}>Continue with FaceBook</Text>
            </TouchableOpacity>             

            <TouchableOpacity style={{marginTop:15,width:widthm-40,height:46,borderWidth:0.5,borderColor:"gray",borderRadius:10,alignSelf:"center",flexDirection:"row",alignItems:"center"}}
             onPress={()=> navigation.navigate('SignUp', { nextScreen: "login" ,userID : userID})}
            >
              <Image source={require("../../assets/extra/apple.png")}
                  style={{height:25,width:25,marginLeft:15}} />
              <Text style={{fontSize:16,marginLeft:15}}>Continue with Apple</Text>
            </TouchableOpacity>              


            <TouchableOpacity style={{marginTop:15,width:widthm-40,height:46,borderWidth:0.5,borderColor:"gray",borderRadius:10,alignSelf:"center",flexDirection:"row",alignItems:"center"}}
              onPress={()=> navigation.navigate('SignUp', { nextScreen: "login" ,userID : userID})}
            >
              <Image source={require("../../assets/extra/twitter.png")}
                  style={{height:25,width:25,marginLeft:15}} />
              <Text style={{fontSize:16,marginLeft:15}}>Continue with Twitter</Text>
            </TouchableOpacity> 

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
                    </View> */}
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
                    </View> */}
            {/* <Text style={styles.donotAccountText}>{languageJson.DoNotAcouuntLabel}</Text>
                    <TouchableOpacity style={styles.createAccountButton}
                        onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.createAccountText}>{languageJson.CreateAccountButton}</Text>
                    </TouchableOpacity> */}

          </LinearGradient>
        </KeyboardAwareScrollView>
        <TouchableOpacity activeOpacity={1} style={{justifyContent:"center",backgroundColor:"lightgray",marginTop:15,width:widthm,height:56,borderRadius:0,alignSelf:"center",flexDirection:"row",alignItems:"center"}}
          onPress={()=>
            navigation.navigate('SignUp', { nextScreen: "login" ,userID : userID})
          }

        >
          <Text style={[styles.descriptionText,{fontSize:16}]}><Text style={[styles.termPolicyText,{fontSize:18,fontWeight:"bold",color:"#000"}]}>Add Manual</Text> </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  )
}

