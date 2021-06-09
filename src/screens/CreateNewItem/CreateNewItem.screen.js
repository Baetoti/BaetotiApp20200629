import React, { } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar ,Linking } from 'react-native';
import styles from './CreateNewItem.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import StepIndicator from '../../components/StepIndicatorCreateNew/StepIndicatorCreateNew.component';
import Button from '../../components/Button/Button.component'
import Colors from '../../utills/Colors'
import { height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { setStoreCreated } from '../../Redux/Actions/Configuration';
export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.CreateNew_Items_Screen);
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={styles.container}>
          <View>
            <HeaderAddNew title={languageJson.CreateNew_Heading} backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
              hideRightIcon containerStyle={{ marginTop: height(2) }} />
            <StepIndicator currentPosition={3} />
            <View style={styles.itemsContainer}>
              <Image
                source={require('../../assets/AddNewAssets/undraw_collecting.png')}
                style={styles.emptyImage}
                resizeMode='contain' />
              <View style={styles.emptyTextContainer}>
                <Text style={styles.noItemText}>No Item Added yet</Text>
              </View>
              <TouchableOpacity style={styles.addItemButtonContainer}
                onPress={() => navigation.navigate('CreateNewAddItem')}>
                <Text style={styles.addItemText}>+{languageJson.AddItem_Button}</Text>
              </TouchableOpacity>
            </View>
          </View>
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
          <Button title={languageJson.Submit_Button} onPress={() => {
            dispatch(setStoreCreated())
            navigation.navigate('OnBoardingScreen')
          }} />
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />
    </React.Fragment>
  )
}