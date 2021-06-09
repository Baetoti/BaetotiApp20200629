import React, { Fragment, createRef } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image,
    StatusBar
} from 'react-native';
import styles from './DriverLogin.Style';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import AuthTextField from '../../components/AuthTextField/AuthTextField.Component';
import RippleButton from '../../components/RippleButton/RippleButton.component';
import profileImage from '../../assets/Login/profile.png';
import lockImage from '../../assets/Login/lock.png'
import { height } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import { login, setBuyer } from '../../Redux/Actions/Auth';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button/Button.component';
import { useDispatch, useSelector } from 'react-redux';

export default function Login({ navigation }) {
    /**
     * create here password refs to for password input  
     */
    const password = createRef(null)
    const dispatch = useDispatch()
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Login_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)

    const changeLoginState=()=>{
        dispatch(setBuyer())
    }
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#F6F6F9' })}
            />
            <SafeAreaView style={styles.container}>
                <View
                    style={{ flex: 1, backgroundColor: '#F6F6F9' }}
                >
                    <AuthHeader dropDownVisibel={true}
                        selectdLanguage={selectdLanguage}
                        onChangeLanguage={(val) => dispatch(setLanguage({ language: val }))} />
                    <View style={styles.loginTextContainer}>
                        <Text style={styles.loginText}>Login</Text>
                        <Text style={styles.withDriverText}>With Driver side</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <AuthTextField image={profileImage} placeHolder='Username' onSubmit={() => password.current.focus()} keytype='next' />
                        <AuthTextField image={lockImage} placeHolder='Password' hidden={true} keytype='done' ref={password} />
                    </View>
                    <TouchableOpacity style={styles.forgotButton}
                        onPress={() => navigation.navigate('DriverForgot')}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <RippleButton title="Login"
                        containerStyle={{ marginTop: height(5), backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }}
                        onPress={() => dispatch(login({ user: 'John Doe' }))} />
                    <Button title="Login with user side" containerStyle={styles.editDocumentButton} onPress={changeLoginState} textStyle={styles.textStyle} />
                    <Text style={styles.donotAccountText}>Don't have an account?</Text>
                    <TouchableOpacity style={styles.createAccountButton}
                        onPress={() => navigation.navigate('DriverSignUp')}>
                        <Text style={styles.createAccountText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Fragment>
    )
}

