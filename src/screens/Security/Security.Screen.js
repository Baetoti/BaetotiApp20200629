import React, { Fragment } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from './Security.Style';
import SettingComponent from '../../components/Setting/Setting.Component';
import LinearGradient from 'react-native-linear-gradient';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
import { useSelector } from 'react-redux';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
export default function Security({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Security_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FCEAE6'} />
      <SafeAreaView style={(styles.container, { backgroundColor: '#FCEAE6' })} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}>
          <MoreHeader
            title={languageJson.Security_Title}
            isImage={true}
            onPress={() => navigation.goBack()}
            backButtonContainerStyle={styles.backButtonContainerStyle}
          />
          <View style={styles.settingComponentContainer}>
            <SettingComponent
              title={languageJson.ChangeEmail_PlaceHolder}
              image={angleRightImage}
            />
            <SettingComponent
              title={languageJson.ChangePhoneNumber_PlaceHolder}
              image={angleRightImage}
            />
            <SettingComponent title={languageJson.ChangePassword_PlaceHolder} image={angleRightImage}
              onPress={() => navigation.navigate('ChangePassword')} s
            />
            <SettingComponent
              title={languageJson.TwoFactorAuthentication_PlaceHolder}
              image={angleRightImage}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />
    </Fragment>
  );
}
