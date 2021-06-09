import React, { useState, Fragment } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './ImageExpandModal.Style';
import Modal from 'react-native-modal';
import Colors from '../../utills/Colors'
export default function CurrentOrders({ isVisible, image, onClose ,uriImage }) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            backdropOpacity={0.8}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}
            isVisible={isVisible}>
            <View style={styles.modalContainer}>
                <ImageBackground
                    source = {uriImage?{uri:image} :image}
                    // source = {{uri: "https://images.unsplash.com/photo-1464347744102-11db6282f854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"}}
                    // source={{ uri: "https://images.unsplash.com/photo-1514056052883-d017fddd0426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" }}
                    style={styles.imageBackground}
                    imageStyle = {styles.image}
                >
                </ImageBackground>
                    <TouchableOpacity style={styles.closeContainer} onPress = {onClose}>
                        <AntDesign name={"closecircle"} size={height(4)} color={Colors.backgroundWhite} />
                    </TouchableOpacity>
            </View>
        </Modal>
    );
}

