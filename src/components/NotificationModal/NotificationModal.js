import React, { useState, Fragment } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './NotificationModal.styles';
import Modal from 'react-native-modal';
import { SliderBox } from "react-native-image-slider-box"
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import Button from '../Button/Button.component';
export default function CurrentOrders({ isVisible,message,buttonText,  onPress }) {
 
    return (
        <Modal
            animationType="slide"
            transparent={true}
            backdropOpacity={0.8}
            style={{ margin: 0, padding: 0, justifyContent: 'center' }}
            isVisible={isVisible}>
            <View style={styles.modalContainer}>
                <TextRowVise style={styles.text}>{message}</TextRowVise>
                <Button title={buttonText} containerStyle={styles.containerStyle}
                onPress={onPress}
                />
            </View>
        </Modal>
    );
}

