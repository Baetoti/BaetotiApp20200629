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
import styles from './Calculator.styles';
import { width, height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
export default function Calculator({ route, navigation }) {
  /**
   * State used for amount 
   */
  const screen = route?.params?.screen
  const [ammount, setAmmount] = useState('');
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.AddBalance_Screen)
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
                {languageJson.AddBalance_Title}
              </Text>
              <View style={[styles.back, { backgroundColor: 'transparent' }]} />
            </View>
            <TextRowVise style={styles.addBal}> {languageJson.AddBalance_Title}</TextRowVise>
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
            <View >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ height: height(5) }}
                style={{ width: width(100), paddingRight: width(5) }}
                data={[100, 200, 500, 1000, 5000]}
                ItemSeparatorComponent={() => <View style={{ width: width(3) }} />}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    if (ammount != '') {
                      setAmmount((`${parseInt(ammount) + parseInt(item)}`))
                    }
                    else
                      setAmmount((`${parseInt(item)}`))
                  }}
                    style={styles.addAmountCont}>
                    <Text
                      style={styles.addAmount}>
                      + {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>

          <View
            style={styles.cardCont}>
            <View
              style={styles.card}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('BuyerPaymentMethod',{screen:screen})} style={styles.cardImg}>
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
