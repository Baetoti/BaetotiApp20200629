import React from 'react';
import {
  FlatList, View, TouchableOpacity, Image,
  Text
} from 'react-native';
import styles from './PaymentMethod.Styles';
const paymentOptions = [
  {
    name: "Paypal",
    image: require('../../assets/BuyerOrderDetails/payPal.png')
  },
  {
    name: "Google Pay",
    image: require('../../assets/BuyerOrderDetails/googlePay.png')
  },
  {
    name: "Apple Pay",
    image: require('../../assets/BuyerOrderDetails/applePay.png')
  },
  {
    name: "PayTabs",
    image: require('../../assets/BuyerOrderDetails/payTabs.png')
  },
];

const Component = ({
  selectedIndex,
  containerStyle,
  onChange,
}) => {

  const renderMethod = ({ item, index }) => {
    return (
      <View style={styles.methodContainer}>
        <TouchableOpacity style={styles.checkBoxContainer}
          onPress={() => onChange(index)}>
          {index == selectedIndex ? <View style={styles.checkBoxInnerContainer}></View> : null}
        </TouchableOpacity>
        <Image
          source={item.image}
          style={styles.methodImage} />
        <Text style={styles.methodName}>{item.name}</Text>
      </View>
    )
  }

  return (
    <View
      style={[styles.container, containerStyle ? containerStyle : {}]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={paymentOptions}
        renderItem={renderMethod}
      />
    </View>
  );
};

export default Component;
