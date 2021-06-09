import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  StatusBar,
  FlatList, TouchableOpacity
} from 'react-native';
import Colors from '../../utills/Colors';
import styles from './CalculatorWithdraw.styles';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';

export default function BuyerHome({ route, navigation }) {
  /**
   * State used for amount
   */
  const [ammount, setAmmount] = useState('');
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Withdraw_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  return (
    <React.Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.calculator}
      />
      <SafeAreaView
        style={styles.container}
        backgroundColor={Colors.calculator}
      />
      <SafeAreaView style={styles.mainContainer}>
        <LinearGradient
          colors={['#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}
        >
          <View style={styles.topContainer}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.back}
                onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../assets/HomeAssets/arrow-left.png')}
                  style={styles.backImg}
                />
              </TouchableOpacity>
              <Text style={styles.heading}>
                {languageJson.Withdraw_Title}
              </Text>
              <View style={[styles.back, { backgroundColor: 'transparent' }]} />
            </View>
            <TextRowVise style={styles.addBal}>{languageJson.Withdraw_Title}</TextRowVise>
            <View style={styles.amountCont}>
              <TextInput
                defaultValue={ammount}
                editable={false}
                style={styles.textInput}
                value={ammount}
              />
              <Text style={styles.dollar}>
                {currencyLabel}
              </Text>
              <Image
                source={require('../../assets/HomeAssets/bottomArrow.png')}
                style={styles.backImg}
              />
            </View>
            <View
              style={styles.line}
            />
            <View style={[selectdLanguage == 'ar' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
              <Text style={styles.balText}>{languageJson.Balance_Label} </Text>
              <Text style={styles.amountText}>{currencyLabel}3,900</Text>
            </View>
          </View>

          <View
            style={styles.cardCont}>
            <View
              style={styles.card}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('BuyerPaymentWithdraw')} style={styles.cardImg}>
                <Image source={require('../../assets/HomeAssets/chevron-right.png')} style={styles.rightImg} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.numberCont}>
            <FlatList
              data={['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '0', -1]}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item }) => {
                return (
                  <View>
                    {item != -1 ? <Text onPress={() => setAmmount(ammount + item)} style={styles.number}>{item}</Text> :
                      <TouchableOpacity activeOpacity={0.7} onPress={() => setAmmount(ammount.slice(0, ammount.length - 1))} >
                        <Image source={require('../../assets/HomeAssets/backspace.png')} style={styles.backspaceImg} />
                      </TouchableOpacity>
                    }
                  </View>
                )
              }}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#F6F6F6' />
    </React.Fragment>
  );
}
