import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import styles from './ImagePickerModal.Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { height } from 'react-native-dimension';
export default Component = ({isVisible, onClose, imageFromCamera, imageFromGallery}) => {
        return (<Modal isVisible={isVisible} >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
                    <AntDesign name="closecircle" size={height(3.5)} color="#000000" />
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.picOption} onPress={imageFromCamera}>
                        <MaterialIcons name="photo-camera" size={height(3.7)} color="black" />
                        <Text style={styles.picOptionText}>Take Photo</Text>
                    </TouchableOpacity>
                    <View style={styles.line} />
                    <TouchableOpacity style={styles.picOption} onPress={imageFromGallery}>
                        <MaterialIcons name="insert-photo" size={height(3.7)} color="black" />
                        <Text style={styles.picOptionText}>Choose from Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>)
    }