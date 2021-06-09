import * as React from 'react';
import { View, SafeAreaView, Image, Text, StatusBar } from 'react-native';
import Button from '../../components/Button/Button.component'
import Colors from '../../utills/Colors';
import styles from './VerificationDriver.styles';
import { width, height } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
export default function Seccess({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.ThankYou_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container} backgroundColor={'#f8f0ed'} />
      <SafeAreaView style={styles.mainContainer}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{ flex: 1 }}
        >
          <MoreHeader isImage={true} imageInView={false} title={languageJson.Verification_Heading}
          />
          <View style={styles.large}>
            <View style={styles.medium}>
              <View style={styles.small}>
                <Image source={require('../../assets/DriverHome/check-mark.png')} style={styles.tick} />
              </View>
            </View>
          </View>
          <Text style={styles.congrats}>{languageJson.ThankYou_Label}</Text>
          <Text style={styles.success}>{languageJson.Thanks_Note}</Text>
          <View style={{ position: 'absolute', alignSelf: 'center', bottom: -height(2) }}>
            <Button onPress={() => navigation.popToTop()} containerStyle={styles.containerStyle} textStyle={{ fontSize: width(4) }} title={languageJson.Home_Title} />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  );
}
