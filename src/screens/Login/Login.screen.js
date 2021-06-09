import React, { Fragment, createRef } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar
} from 'react-native';
import styles from './Login.styles';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import AuthTextField from '../../components/AuthTextField/AuthTextField.Component';
import RippleButton from '../../components/RippleButton/RippleButton.component';
import profileImage from '../../assets/Login/profile.png';
import lockImage from '../../assets/Login/lock.png'
import googleImage from '../../assets/Login/google.png'
import facebookImage from '../../assets/Login/facebook.png'
import { height } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { login } from '../../Redux/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Actions/Language';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
export default function Login({ navigation }) {
    /**
     * create here password refs to for password input  
     */
    const languageJson = useSelector(state => state.Language.languageJson.Login_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Redux Dispatch to change language
     */
    const dispatch = useDispatch()
    /**
     * Password input to ref to focus auto
     */
    const password = createRef(null)
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
                    <AuthHeader dropDownVisibel={true} selectdLanguage={selectdLanguage}
                        onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))} />
                    <View style={styles.loginTextContainer}>
                        <TextRowVise style={styles.loginText}>{languageJson.Login_Heading}</TextRowVise>
                    </View>
                    <View style={styles.textInputContainer}>
                        <AuthTextField image={profileImage} placeHolder={languageJson.Username_PlaceHolder} onSubmit={() => password.current.focus()} keytype='next' selectdLanguage={selectdLanguage} />
                        <AuthTextField image={lockImage} placeHolder={languageJson.Password_PlaceHolder} hidden={true} keytype='done' ref={password} selectdLanguage={selectdLanguage} />
                    </View>
                    <TouchableOpacity style={styles.forgotButton}
                        onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotText}>{languageJson.ForgotPassword_Button}</Text>
                    </TouchableOpacity>
                    <RippleButton title={languageJson.Login_Button}
                        containerStyle={{ marginTop: height(5), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }}
                        onPress={() => dispatch(login({ user: 'John Doe' }))} />
                    <View style={styles.orContainer}>
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
                    <View style={styles.socialIconButtonContainer}>
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
                    <Text style={styles.donotAccountText}>{languageJson.DoNotAcouuntLabel}</Text>
                    <TouchableOpacity style={styles.createAccountButton}
                        onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.createAccountText}>{languageJson.CreateAccountButton}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    )
}

