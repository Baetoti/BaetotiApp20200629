import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, StatusBar,TouchableOpacity,Linking, ScrollView} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import styles from './VerificationStep1.Style';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import VerificationStepIndicator from '../../components/VerificationStepIndicator/VerificationStepIndicator.Component';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import {useSelector, useDispatch} from 'react-redux';
import {logout, setBuyer, setDriver} from '../../Redux/Actions/Auth';

export default function VerificationStep1({navigation}) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.UploadDocument_Step1_Screen,
  );
  const languageJson1 = useSelector(state => state.Language.languageJson.LoginPhone_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f8f0ed'} />
      <SafeAreaView style={(styles.container, {backgroundColor: '#f8f0ed'})} />
      <SafeAreaView style={styles.container}>
        <ScrollView>

       
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{flex: 1}}>
          <MoreHeader
            isImage={true}
            imageInView={false}
            onPress={() => dispatch(setBuyer())}
          />
          <VerificationStepIndicator currentPosition={0} />
          <View style={styles.uploadDocumentTextContainer}>
            <Text style={styles.uploadDocumentLabelText}>
              {languageJson.UploadYourDocuments_Heading}
            </Text>
            <Text style={styles.beforeDescriptionText}>
              {languageJson.Note}
            </Text>
          </View>
          <View style={styles.limitationsContainer}>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View style={styles.blueDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.FirstCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View style={styles.blueDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.SecondCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View style={styles.blueDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.ThirdCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View style={styles.blueDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.FourthCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View style={styles.blueDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.FifthCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View style={styles.blueDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.SixCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View
                style={[styles.blueDot, {backgroundColor: 'transparent'}]}
              />
              <View style={styles.grayDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.SeventCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View
                style={[styles.blueDot, {backgroundColor: 'transparent'}]}
              />
              <View style={styles.grayDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.EightCondition}
              </Text>
            </ViewRowVise>
            <ViewRowVise style={styles.limitationsDescriptionContainer}>
              <View
                style={[styles.blueDot, {backgroundColor: 'transparent'}]}
              />
              <View style={styles.grayDot} />
              <Text style={styles.limitationsDescriptionText}>
                {languageJson.NineCondtion}
              </Text>
            </ViewRowVise>
            <View style={styles.lineSeparator} />
            <Text style={styles.thankyouText}>{languageJson.Thanks_Label}</Text>
            <Text style={styles.hitText}>{languageJson.Thanks_Note}</Text>
          </View>


          <View style={styles.termPolicyContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? { flexDirection: 'row-reverse' }
                    : { flexDirection: 'row' }
                }>
                <Text style={styles.descriptionText}>
                  {languageJson1.ByclickingSignup_Text}{' '}
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/baetoti/")}>
                  <Text style={styles.termPolicyText}>
                    {languageJson1.Termsofuse_Text}{' '}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>
                  {languageJson1.comma}{' '}
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/baetoti/")}>
                  <Text style={styles.termPolicyText}>
                    {languageJson1.PrivacyPolicy_Text}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>.</Text>
              </View>
              <Text style={styles.descriptionText}>
                {languageJson1.youMayReceive_Text}
              </Text>
            </View>

          <Button
            title={'Continue'}
            onPress={() => navigation.navigate('VerificationStep2')}
            containerStyle={styles.containerStyle}
          />
        </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}

// languageJson.Continue
