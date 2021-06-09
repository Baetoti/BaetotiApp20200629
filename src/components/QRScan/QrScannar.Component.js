import React, { createRef, useState, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styles from './QrScannar.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { width, height, totalSize } from 'react-native-dimension';
import { RNCamera } from 'react-native-camera';
import Colors from '../../utills/Colors';
const Component = ({
  isVisible,
  onRequsetClose,
  onScanningComplete,
}) => {
  const camera = createRef(null);
  const [loading, setLoading] = useState(false);
  const [flashLight, setFlashLight] = useState(false);
  useEffect(() => {
    setLoading(false);
    setFlashLight(false);
  }, [isVisible]);
  const toggleFlash = () => {
    setFlashLight(!flashLight)
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onRequsetClose}
      backdropOpacity={0}
      onBackButtonPress={onRequsetClose}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={
          flashLight
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        playSoundOnCapture={true}
        onBarCodeRead={(result) => {
          // onGoogleVisionBarcodesDetected={({ barcodes }) => {
          if (!loading) {
            if (typeof result.data == 'string') {
              setLoading(true);
              onScanningComplete(result.data);
            }
          }
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onRequsetClose} style={styles.icon}>
            <Ionicons
              name="close"
              size={width(7)}
              color={Colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFlash} style={styles.icon}>
            <Ionicons
              name={flashLight ? "flash" : "flash-off"}
              size={width(7)}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.icon, { backgroundColor: 'transparent' }]} />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: height(28),
              width: width(60),
              alignSelf: 'center',
              justifyContent: 'space-between',
              opacity: 1,
              zIndex: 1,
            }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: width(17),
                  height: height(7.5),
                  borderTopWidth: 5,
                  borderLeftWidth: 5,
                  borderTopColor: '#FFFFFF',
                  borderLeftColor: '#ffffff',
                }}
              />
              <View
                style={{
                  width: width(17),
                  height: height(7.5),
                  borderTopWidth: 5,
                  borderRightWidth: 5,
                  borderTopColor: '#FFFFFF',
                  borderRightColor: '#ffffff',
                }}
              />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View
                style={{
                  width: width(17),
                  height: height(7.5),
                  borderBottomWidth: 5,
                  borderLeftWidth: 5,
                  borderBottomColor: '#FFFFFF',
                  borderLeftColor: '#ffffff',
                }}
              />
              <View
                style={{
                  width: width(17),
                  height: height(7.5),
                  borderBottomWidth: 5,
                  borderRightWidth: 5,
                  borderBottomColor: '#FFFFFF',
                  borderRightColor: '#ffffff',
                }}
              />
            </View>
          </View>
          {loading && (
            <ActivityIndicator
              size="large"
              color={Colors.primaryBlue}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
              }}
            />
          )}
        </View>
      </RNCamera>
    </Modal>
  );
};

export default Component;
