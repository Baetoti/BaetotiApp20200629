import React, { Fragment, createRef } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity,
    Image, TextInput, Keyboard, StatusBar
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './DriverSignUp.Style';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import RippleButton from '../../components/RippleButton/RippleButton.component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import profileImage from '../../assets/Login/profile.png';
import { height } from 'react-native-dimension';
import lockImage from '../..//assets/Login/lock.png';
import emailImage from '../..//assets/Login/email.png';
import Colors from '../../utills/Colors';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button.component';
import { setLanguage } from '../../Redux/Actions/Language';
export default function SignUp({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.DriverCreateAccount)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Redux Dispatch to change language
     */
    const dispatch = useDispatch()
    /**
     * create states and refs to mannage the text inputs like userName,Email etc
     */
    const userName = createRef(null)
    const email = createRef(null)
    const password = createRef(null)
    const confirmPassword = createRef(null)
    return (
        <Fragment>
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#f6f6f6' })}
            />
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#F6F6F9' barStyle={'dark-content'} />
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    extraScrollHeight={height(8)}
                >
                    <View
                        style={{ flex: 1, backgroundColor: '#F6F6F9' }}
                    >
                        <AuthHeader dropDownVisibel={true} selectdLanguage={selectdLanguage}
                            onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))} />
                        <View style={styles.createAccountTextContainer}>
                            <Text style={styles.createAccountText}>{languageJson.CreateAccount_Heading}</Text>
                            <Text style={styles.withDriverText}>{languageJson.WithDriverside_Text}</Text>
                        </View>

                        <View style={styles.textFieldContainer}>
                            <ViewRowVise style={styles.textFieldInnerContainer}>
                                <Image style={styles.textFieldImage}
                                    source={profileImage} />
                                <TextInput
                                    placeholder={languageJson.Username_PlaceHolder}
                                    autoCapitalize='none'
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    style={styles.textInput}
                                    ref={userName}
                                    onSubmitEditing={() => { email.current.focus(); }}
                                    returnKeyType='next'
                                />
                            </ViewRowVise>
                        </View>
                        <View style={styles.textFieldContainer}>
                            <ViewRowVise style={styles.textFieldInnerContainer}>
                                <Image style={styles.textFieldImage}
                                    source={emailImage} />
                                <TextInput
                                    placeholder={languageJson.Email_PlaceHolder}
                                    autoCapitalize='none'
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    style={styles.textInput}
                                    ref={email}
                                    returnKeyType='done'
                                />
                            </ViewRowVise>
                        </View>

                        <View style={styles.textFieldContainer}>
                            <ViewRowVise style={styles.textFieldInnerContainer}>
                                <Image style={styles.textFieldImage}
                                    source={lockImage} />
                                <TextInput
                                    placeholder={languageJson.CreatePassword_PlaceHolder}
                                    autoCapitalize='none'
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    style={[styles.textInput, selectdLanguage == 'ar' ? { textAlign: 'right' } : {}]}
                                    ref={password}
                                    onSubmitEditing={() => { confirmPassword.current.focus(); }}
                                    returnKeyType='next'
                                    secureTextEntry={true}
                                    blurOnSubmit={false}
                                />
                            </ViewRowVise>
                        </View>
                        <View style={styles.textFieldContainer}>
                            <ViewRowVise style={styles.textFieldInnerContainer}>
                                <Image style={styles.textFieldImage}
                                    source={lockImage} />
                                <TextInput
                                    placeholder={languageJson.ConfirmPassword_PlaceHolder}
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    autoCapitalize='none'
                                    style={[styles.textInput, selectdLanguage == 'ar' ? { textAlign: 'right' } : {}]}
                                    ref={confirmPassword}
                                    returnKeyType='done'
                                    secureTextEntry={true}
                                    blurOnSubmit={false}
                                    onSubmitEditing={() => Keyboard.dismiss()}
                                />
                            </ViewRowVise>
                        </View>
                        <RippleButton title={languageJson.CreateAccountButton} onPress={() => navigation.navigate('PhoneVerification')}
                            containerStyle={{ marginTop: height(3), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }} />
                        <Button title={languageJson.Loginwithuserside_Button} containerStyle={styles.editDocumentButton} textStyle={styles.textStyle} />
                        <Text style={styles.alreadyAccountText}>{languageJson.AlreadyAccountLabel}</Text>
                        <TouchableOpacity style={styles.createAccountButton}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>{languageJson.Login_Button}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>

            </SafeAreaView>
        </Fragment>
    )
}

