import React, { Fragment } from 'react';
import { View, Text, SafeAreaView, Image, StatusBar,TouchableOpacity,Linking } from 'react-native';
import styles from './VerificationStep3.Style';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import VerificationStepIndicator from '../../components/VerificationStepIndicator/VerificationStepIndicator.Component';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import group13 from '../../assets/Verification/Group13.png';
import { useDispatch, useSelector } from 'react-redux';
import { driverLogin,providerLogin } from '../../Redux/Actions/Auth';
export default function VerificationStep2({ navigation }) {
  const dispatch = useDispatch();
  /**
   * Reading Screen Data from redux depending on selected language
   *  
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.Verification_Step3_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);

  const LoninAsDrive = () => {
    dispatch(driverLogin({ userName: 'ds' }));
  };
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#f8f0ed'}
      />
      <SafeAreaView style={(styles.container, { backgroundColor: '#f8f0ed' })} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <MoreHeader
                isImage={true}
                imageInView={false}
                title={languageJson.Verification_Heading}
                onPress={() => navigation.goBack()}
              />
              <VerificationStepIndicator currentPosition={2} />
              <Image
                source={group13}
                resizeMode="contain"
                style={styles.verificationDoneImage}
              />
              <Text style={styles.uploadSucessText}>
                {languageJson.UploadSuccesHeading}
              </Text>
              <Text style={styles.thanksText}>{languageJson.Thanks_Note}</Text>
              <View style={styles.currentDescriptionTextContainer}>
                <Text style={styles.currentDescriptionText}>
                  {languageJson.Note}
                </Text>
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
            </View>
            <View>
              <Button
                title={languageJson.EditDocument_Button}
                containerStyle={styles.editDocumentButton}
                textStyle={styles.textStyle}
                onPress={()=>navigation.goBack()}
              />
              <Button
                title={languageJson.Done_Button}
                onPress={LoninAsDrive}
                containerStyle={styles.containerStyle}
              />
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: '#FAF8F7' }} />
    </Fragment>
  );
}
