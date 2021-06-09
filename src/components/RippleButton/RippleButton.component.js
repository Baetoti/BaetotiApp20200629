import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './RippleButton.Styles';
import Ripple from 'react-native-material-ripple';
const Component = ({ title, onPress, containerStyle, textStyle }) => {
  return (
    <Ripple
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, containerStyle ? containerStyle : {}]}
    >
      <Text style={[styles.text, textStyle ? textStyle : {}]}>{title}</Text>
    </Ripple>)
};

export default Component;
