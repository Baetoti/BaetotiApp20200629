import React, { Fragment } from 'react';
import {
    View, Text, SafeAreaView,
    TouchableOpacity, StatusBar
} from 'react-native';
import { height } from 'react-native-dimension';
import styles from './ForgotPassword.Style';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import AuthTextField from '../../components/AuthTextField/AuthTextField.Component';
import Button from '../../components/Button/Button.component';
import emailImage from '../../assets/Login/email.png';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Actions/Language';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';

export default function ForgotPassword({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.ForgotPassword_screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Redux Dispatch to change language
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
                    <AuthHeader dropDownVisibel={true} selectdLanguage={selectdLanguage}
                        onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))} />
                    <View style={styles.forgotPasswordTextContainer}>
                        <TextRowVise style={styles.forgotText}>{languageJson.Forgot_Heading}</TextRowVise>
                        <TextRowVise style={styles.passwordText}>{languageJson.Password_Heading}</TextRowVise>
                    </View>
                    <View style={styles.textInputContainer}>
                        <AuthTextField image={emailImage} placeHolder={languageJson.Email_PlaceHolder} keytype='done' selectdLanguage={selectdLanguage} />
                    </View>
                    <Button title={languageJson.Send_Button} onPress={() => navigation.navigate('Login')}
                        containerStyle={{ marginTop: height(5), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }} />
                    <TouchableOpacity style={styles.backToLoginButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.backToLoginText}>{languageJson.BackToLogin_Button}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    )
}
