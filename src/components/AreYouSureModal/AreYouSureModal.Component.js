import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './AreYouSureModal.Styles';
export default function CustomModal ({ isVisible, selectedItem, onPressNo ,onPressYes}){
    
        return (
        <Modal isVisible={isVisible} >
            <View style={styles.mainContainer}>
                <Text style={styles.detailText}>{ "Are you sure?"}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onPressNo}>
                        <Text style={styles.cancelText}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.proceedButton} onPress={onPressYes}>
                        <Text style={styles.proceedText}>Yes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>)
    }
