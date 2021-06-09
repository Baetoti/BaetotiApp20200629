import * as React from 'react';
import { View, SafeAreaView, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/Button.component'
import Colors from '../../utills/Colors'
import styles from './Faliure.styles';
import { width, height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
export default function Failuer({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Opps_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.mainContainer}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}
        >
          <View style={styles.large}>
            <View style={styles.medium}>
              <View style={styles.small}>
                <Image source={require('../../assets/HomeAssets/close.png')} style={styles.tick} />
              </View>
            </View>
          </View>
          <Text style={styles.congrats}>{languageJson.opps_Heading}</Text>
          <Text style={styles.success}>Reference Number 1254755</Text>
          <Text style={styles.success}>{languageJson.Note}</Text>
          <View style={{ marginTop: height(5) }}>
            <Button onPress={() => navigation.navigate('Success')}
              containerStyle={{ backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }} textStyle={{ fontSize: width(4) }}
              title={languageJson.TryAgain_Button} />
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.id}>{languageJson.NotNow_Button}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  );
}
