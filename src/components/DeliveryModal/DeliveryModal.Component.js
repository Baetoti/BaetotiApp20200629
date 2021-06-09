import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import styles from './DeliveryModal.Style';
export default function CustomModal({ isVisible, selectedItem, onPressNo, onPressYes,onPressAssign }) {
    const languageJson = useSelector(state => state.Language.languageJson.Login_Screen);
    return (
        <Modal isVisible={isVisible} >
            <View style={styles.mainContainer}>
                <Text style={styles.detailText}>{"Want to Deliver by yourself?"}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={onPressNo}>
                        <Text style={styles.cancelText}>{languageJson.No}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.proceedButton} onPress={onPressYes}>
                        <Text style={styles.proceedText}>{languageJson.Yes}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.orText}>{languageJson.OR_Text}</Text>
                <TouchableOpacity style={styles.assignDriver} onPress={onPressAssign}>
                    <Text style={styles.proceedText}>{languageJson.AssignDriver}</Text>
                </TouchableOpacity>
            </View>
        </Modal>)
}
