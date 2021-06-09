import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.Styles';

const Component = ({ title, onPress, containerStyle, textStyle, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, containerStyle ? containerStyle : {}, { opacity: disabled ? 0.65 : 1 }]}
    >
      <Text style={[styles.text, textStyle ? textStyle : {}]}>{title}</Text>
    </TouchableOpacity>)
};
export default Component;
