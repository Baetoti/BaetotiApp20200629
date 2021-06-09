import React, {Fragment} from 'react';
import {View, Text, SafeAreaView, StatusBar,TouchableOpacity,Linking} from 'react-native';
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
  const languageJsonL = useSelector(state => state.Language.languageJson.LoginPhone_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f8f0ed'} />
      <SafeAreaView style={(styles.container, {backgroundColor: '#f8f0ed'})} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{flex: 1}}>
          <MoreHeader
            isImage={true}
            imageInView={false}
            onPress={() => dispatch(setBuyer())}
          />
          <VerificationStepIndicator currentPosition={0}
          indexcolor={Colors.purplePrimary}
          />
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
              maroof id or gov id, gov id pict and exp date
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
                  {languageJsonL.ByclickingSignup_Text}{' '}
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/baetoti/")}>
                  <Text style={styles.termPolicyText}>
                    {languageJsonL.Termsofuse_Text}{' '}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>
                  {languageJsonL.comma}{' '}
                </Text>
                <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/baetoti/")}>
                  <Text style={styles.termPolicyText}>
                    {languageJsonL.PrivacyPolicy_Text}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.descriptionText}>
                <Text style={styles.termPolicyText}>
                    and Guidelines.
                </Text>
                <Text style={styles.descriptionText}>.</Text>
                {languageJsonL.youMayReceive_Text}
              </Text>
            </View>

          <Button
            title={'Continue'}
            onPress={() => navigation.navigate('VerificationStep2')}
            containerStyle={styles.containerStyle}
          />
        </LinearGradient>
      </SafeAreaView>
    </Fragment>
  );
}

// languageJson.Continue
