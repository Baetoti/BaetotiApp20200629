import React, { Fragment, createRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './ChangePassword.Style';
import Colors from '../../utills/Colors';
import ChangePassword from '../../components/ChnagePassword/ChnagePassword.Component';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button.component';

export default function CurrentOrders({ navigation }) {
  /**
   * Refs used to auto focus next input on sumbit editing
   */
  const password = createRef(null);
  const confirmPassword = createRef(null);
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.ChangePassword_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const appMode = useSelector(state => state.Auth.appMode)

  const themeColor = appMode == 'buyer'? Colors.buttonBlue : appMode  == 'driver'? Colors.buttonSecondaryBlue: Colors.purplePrimary;
  return (
    <Fragment>
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.backgroundColor })}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1, justifyContent: 'space-between' }}
        >
          <View>
            <MoreHeader
              title={languageJson.ChangePassword_Title}
              isImage={true}
              onPress={() => navigation.goBack()}
              backButtonContainerStyle={styles.backButtonContainerStyle}
            />
            <View style={styles.settingComponentContainer}>
              <ChangePassword
                hidden={true}
                placeHolder={languageJson.CurrentPassword_PlaceHolder + '*'}
                onSubmit={() => password.current.focus()}
                keytype="next"
              />
              <ChangePassword
                placeHolder={languageJson.NewPassword_PlaceHolder + "*"}
                hidden={true}
                keytype="next"
                onSubmit={() => confirmPassword.current.focus()}
                ref={password}
              />
              <ChangePassword
                placeHolder={languageJson.ConfirmPasswordPlaceHolder + "*"}
                hidden={true}
                keytype="done"
                ref={confirmPassword}
              />
            </View>
          </View>
          <Button title={languageJson.Save_Button} containerStyle={[styles.containerStyle,{backgroundColor:themeColor}]} />
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />
    </Fragment>
  );
}
