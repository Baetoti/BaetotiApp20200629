import React, { Fragment } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from './DriverSetting.Style';
import Colors from '../../utills/Colors';
import SettingComponent from '../../components/BuyerSetting/BuyerSetting.Component';
import angleRightImage from '../../assets/MoreAssets/angle-right.png'
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrency, setDistance } from '../../Redux/Actions/Configuration'
import { setLanguage } from '../../Redux/Actions/Language'
import { width } from 'react-native-dimension';
export default function Setting({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Settings)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyOptions = useSelector(state => state.Configuration.currencyOptions)
    const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
    const distanceUnitOptions = useSelector(state => state.Configuration.distanceUnitOptions)
    /**
     * Dispatch for updating Currency throughout
     */
    const dispatch = useDispatch()
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView backgroundColor={Colors.backgroundColor} />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={styles.container}>
                    <MoreHeader title={languageJson.Settings_Title} isImage={true} onPress={() => navigation.goBack()} />
                    <View style={styles.settingComponentContainer}>
                        <SettingComponent title={languageJson.Notification_PlaceHolder} switchColor={Colors.buttonSecondaryBlue} />
                        <SettingComponent title={languageJson.OfflineMode_PlaceHolder} switchColor={Colors.buttonSecondaryBlue} />
                        <SettingComponent title={languageJson.SecuritySettings_PlaceHolder} image={angleRightImage} onPress={() => navigation.navigate('Security')} />
                        <ModalDropdown
                            options={currencyOptions}
                            dropdownStyle={selectdLanguage == 'ar' ? [styles.dropDown, { marginLeft: width(5) }] : styles.dropDown}
                            onSelect={(index, value) => dispatch(setCurrency(value))}
                        >
                            <SettingComponent
                            nameTouchDisabled
                                title={languageJson.Currency_PlaceHolder}
                                image={angleRightImage}
                                text={selectedCurrency}
                            />
                        </ModalDropdown>
                        <ModalDropdown
                            options={distanceUnitOptions}
                            dropdownStyle={selectdLanguage == 'ar' ? [styles.dropDown, { marginLeft: width(5) }] : styles.dropDown}
                            onSelect={(index, value) => dispatch(setDistance(value))}
                        >
                            <SettingComponent
                            nameTouchDisabled
                                title={languageJson.Distance_PlaceHolder}
                                image={angleRightImage}
                                text={selectedDistanceUnit}
                            />
                        </ModalDropdown>
                        <ModalDropdown
                            options={["En", "Ar"]}
                            dropdownStyle={selectdLanguage == 'ar' ? [styles.dropDown, { marginLeft: width(5) }] : styles.dropDown}
                            onSelect={(index, value) => dispatch(setLanguage({ language: value.toLowerCase() }))}
                        >
                            <SettingComponent
                            nameTouchDisabled title={languageJson.Language_PlaceHolder} image={angleRightImage}
                                text={selectdLanguage == 'ar' ? "Ar" : "En"} />
                        </ModalDropdown>
                        <SettingComponent title={languageJson.AboutApp_PlaceHolder} image={angleRightImage} onPress={() => navigation.navigate('About')} />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView backgroundColor={Colors.ofwhite} />
        </Fragment>
    );
}

