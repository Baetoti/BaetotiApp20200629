import React, {Fragment , useEffect} from 'react';
import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import styles from './VerificationStep3.Style';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import VerificationStepIndicator from '../../components/VerificationStepIndicator/VerificationStepIndicator.Component';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import group13 from '../../assets/Verification/Group13.png';
import {useDispatch, useSelector} from 'react-redux';
import {providerLogin} from '../../Redux/Actions/Auth';
export default function VerificationStep2({navigation}) {
  const dispatch = useDispatch();
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.Verification_Step3_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);

  const LogninAsProiver = () => {
    dispatch(providerLogin({userName: 'ds'}));
  };
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('ProviderMyPosts')
    // }, 4000);
  }, )
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#f8f0ed'}
      />
      <SafeAreaView style={(styles.container, {backgroundColor: '#f8f0ed'})} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View>
              <MoreHeader
                isImage={true}
                imageInView={false}
                title={languageJson.Verification_Heading}
                onPress={() => navigation.goBack()}
              />
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
            </View>
            <View>
              <Button
                title={languageJson.EditDocument_Button}
                containerStyle={styles.editDocumentButton}
                textStyle={styles.textStyle}
                onPress={()=>console.log(navigation)}
              />
              <Button
                title={languageJson.Done_Button}
                onPress={()=>navigation.navigate('ProviderMyPosts')}
                containerStyle={styles.containerStyle}
              />
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: '#FAF8F7'}} />
    </Fragment>
  );
}
