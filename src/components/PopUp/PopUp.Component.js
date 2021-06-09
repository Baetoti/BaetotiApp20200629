import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import styles from './PopUp.styles';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png';
import color from '../../utills/Colors';
import Modal from 'react-native-modal';
import { width, height, totalSize } from 'react-native-dimension';
import Button from '../Button/Button.component';
const Component = ({ isVisible, onRequsetClose, onVisible, text }) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onRequsetClose}
      
      onBackButtonPress={onRequsetClose}>
      <TouchableHighlight
        onPress={onRequsetClose}
        style={styles.modalContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onVisible}
          style={styles.swcondaryContainer}>
          <Text style={styles.text}>{text}</Text>
          <Button
            onPress={onRequsetClose}
            title="Okay"
            textStyle={{ fontSize: width(4) }}
            containerStyle={styles.button}
          />
        </TouchableOpacity>
      </TouchableHighlight>
    </Modal>
  );
};

export default Component;
