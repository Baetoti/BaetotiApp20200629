import React, { Fragment } from 'react';
import {
    View, Text, SafeAreaView,
    TouchableOpacity, StatusBar
} from 'react-native';
import { height } from 'react-native-dimension';
import styles from './DriverForgot.Style';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import AuthTextField from '../../components/AuthTextField/AuthTextField.Component';
import Button from '../../components/Button/Button.component';
import emailImage from '../../assets/Login/email.png';
import Colors from '../../utills/Colors';
import { setLanguage } from '../../Redux/Actions/Language';
import { useDispatch, useSelector } from 'react-redux';
export default function ForgotPassword({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.DriverForgot_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Dispatch Redux function to change language
     */
    const dispatch = useDispatch()
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F6F6F9'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#F6F6F9' })}
            />
            <SafeAreaView style={styles.container}>
                <View
                    style={{ flex: 1, backgroundColor: '#F6F6F9' }}
                >
                    <AuthHeader selectdLanguage={selectdLanguage}
                        onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))}
                        dropDownVisibel={true} />
                    <View style={styles.forgotPasswordTextContainer}>
                        <Text style={styles.forgotText}>{languageJson.ForgotPassword_Heading1}</Text>
                        <Text style={styles.passwordText}>{languageJson.ForgotPassword_Heading2}</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <AuthTextField selectdLanguage={selectdLanguage} image={emailImage} placeHolder={languageJson.Email_PlaceHolder} keytype='done' />
                    </View>
                    <Button title={languageJson.Send_Button} onPress={() => navigation.navigate('Login')}
                        containerStyle={{ marginTop: height(5), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }} />
                    <TouchableOpacity style={styles.backToLoginButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.backToLoginText}>{languageJson.BackLogin_Button}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Fragment>
    )
}
