import * as React from 'react';
import { View, SafeAreaView, Image, Text, StatusBar } from 'react-native';
import Button from '../../components/Button/Button.component'
import Colors from '../../utills/Colors';
import styles from './Success.styles';
import { width, height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
export default function Seccess({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Congratulations_Screen)
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
                <Image source={require('../../assets/HomeAssets/check.png')} style={styles.tick} />
              </View>
            </View>
          </View>
          <Text style={styles.congrats}>{languageJson.Congratulations_Heading}</Text>
          <Text style={styles.success}>{languageJson.Note}</Text>
          <Text style={styles.id}>{languageJson.OrderId_Label}</Text>
          <Text style={styles.code}>OR236GL45697P</Text>
          <View style={{ marginTop: height(5) }}>
            <Button onPress={() => navigation.navigate('MyOrders')} containerStyle={{ backgroundColor: Colors.buttonBlue, borderColor: Colors.buttonBlue, shadowColor: Colors.buttonBlue }} textStyle={{ fontSize: width(4) }}
              title={languageJson.Okay_Button} />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  );
}
