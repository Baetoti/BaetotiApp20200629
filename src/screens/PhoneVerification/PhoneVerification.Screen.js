import React, { Fragment, useState, createRef } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, StatusBar
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './PhoneVerification.Style';
import CountDown from 'react-native-countdown-component';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import Button from '../../components/Button/Button.component'
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { login } from '../../Redux/Actions/Auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Actions/Language';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
export default function PhoneVerification({ navigation }) {
    /**
     * States and functions managed the phone number
     */
    const [phoneNumber, setphoneNumber] = useState('+77 987654');
    /**
     * Create refernce to  managed the otp code inputs 
     */
    const [code, setCode] = useState(null);
    const code2 = createRef(null)
    const code3 = createRef(null)
    const code4 = createRef(null)
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.PhoneVerification_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const isProfileCompleted = useSelector(state => state.Configuration.isProfileCompleted)
    /**
     * Redux Dispatch for language change
     */
    const dispatch = useDispatch()

    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundColor })}
            />
            <SafeAreaView style={styles.container}>

                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
                    style={{ flex: 1 }}
                >
                    <AuthHeader selectdLanguage={selectdLanguage}
                        onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))} />
                    <View style={styles.phoneTextContainer}>
                        <TextRowVise style={styles.phoneText}>{languageJson.Phone_Heading}</TextRowVise>
                        <TextRowVise style={styles.verificationText}>{languageJson.Verification_Heading}</TextRowVise>
                        <TextRowVise style={styles.otpRecivedText}>{languageJson.EnterOtp_Label}</TextRowVise>
                        <Text style={selectdLanguage == 'ar' ? [styles.phoneNumberText, { textAlign: 'right' }] : styles.phoneNumberText}>{phoneNumber} XXXXX</Text>
                    </View>
                    <ViewRowVise style={styles.otpContainer}>
                        <OTPInputView
                            style={styles.otpViewContainer}
                            pinCount={4}
                            onCodeChanged={code => {
                                setCode(code);
                            }}
                            placeholderCharacter='*'
                            placeholderTextColor={Colors.placeHolderTextColor}
                            autoFocusOnLoad={false}
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={
                                styles.underlineStyleHighLighted
                            }
                        />
                    </ViewRowVise>
                    <View style={selectdLanguage == 'ar' ? [styles.timeExpireContainer, { flexDirection: 'row-reverse' }] : styles.timeExpireContainer}>
                        <Text style={styles.expireText}>{languageJson.OtpExpire_Label}</Text>
                        <CountDown
                            until={60 * 1 + 60}
                            size={totalSize(1.6)}
                            // onFinish={() => alert('Finished')}
                            digitStyle={{ height: height(2), width: width(5) }}
                            digitTxtStyle={{ color: '#000000' }}
                            timeToShow={['M', 'S']}
                            showSeparator={true}
                            timeLabels={{ m: null, s: null }}
                        />
                    </View>
                    <View style={styles.resendContainer}>
                        <TouchableOpacity>
                            <Text style={[styles.resendText]}>{languageJson.Resend_Button}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title={languageJson.VerifyNumber_Button}
                        onPress={() => {
                            if (isProfileCompleted == false) {
                                // navigation.navigate('SignUp', { nextScreen: "login" })
                                navigation.navigate("LoginPhoneSoc")
                            }
                            else
                                dispatch(login({ user: 'John Doe' }))
                        }
                        }
                        containerStyle={{ marginTop: height(5), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }} />
                    {/* <View style={styles.alredyButtonContainer}>
                        <Text style={styles.alreadyAccountText}>{languageJson.AlreadyAccountLabel}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>{languageJson.Login_Button}</Text>
                        </TouchableOpacity>
                    </View> */}
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    )
}
