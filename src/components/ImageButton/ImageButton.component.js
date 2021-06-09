import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './ImageButton.Styles';

const Component = ({ title, onPress, containerStyle, textStyle, renderImage }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.container, containerStyle ? containerStyle : {}]}
    >{renderImage}
      <Text style={[styles.text, textStyle ? textStyle : {}]}>{title}</Text>
    </TouchableOpacity>)
};
export default Component;
