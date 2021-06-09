import React, { Fragment } from 'react';
import { SafeAreaView, View, StatusBar, TouchableOpacity, Image, Text, Linking, TextInput } from 'react-native';
import styles from './Contactus.Style';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import Button from '../../components/Button/Button.component'
import { useSelector } from 'react-redux';
import Colors from '../../utills/Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { totalSize, height } from 'react-native-dimension';
export default function BuyerSetting({ navigation}) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const appMode = useSelector(state => state.Auth.appMode)
  const languageJson = useSelector(
    state => state.Language.languageJson.ContactUs_Screen,
  );
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#FCEAE6'}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: '#FCEAE6' })}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6',]}
          style={{ flex: 1 }}>
          <View style={styles.container}>
            <View>
              <MoreHeader
                title={languageJson.Contactus_Heading}
                isImage={true}
                onPress={() => navigation.goBack()}
              />
              <TextInput
                style={styles.input}
                placeholder={languageJson.Write_Your_Review}
                textAlignVertical={"top"}
                multiline
              />
              <Button title={languageJson.Submit_Button} containerStyle={[styles.submitButton,
              {
                backgroundColor: appMode == 'buyer' ? Colors.buttonBlue : appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary
              }]} />
            </View>
            <TouchableOpacity style={styles.chatConainer}
              onPress={() =>
                navigation.navigate('BuyerChat', { name: "Customer Care", online: true, img: 'https://firebasestorage.googleapis.com/v0/b/rentdigi-207220.appspot.com/o/c851828c-84ed-4420-9497-ac351bc9bd70.jpg?alt=media&token=a770e787-0d76-4d79-b72f-5b6cd9330aef', userType: 'Buyer' })}>
              <Ionicons name={"md-chatbubble-ellipses-outline"} size={height(4)} color={appMode == 'buyer' ? Colors.buttonBlue : appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.purplePrimary} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView
      backgroundColor = {"#F6F6F6"}
      />
    </Fragment>
  );
}
