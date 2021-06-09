import React, { createRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity, StatusBar
} from 'react-native';
import styles from './QrScannar.styles';

import color from '../../utills/Colors';
import Modal from 'react-native-modal';
import { width, height, totalSize } from 'react-native-dimension';
import { RNCamera } from 'react-native-camera';
import boxImage from '../../assets/DriverHome/box.png';
import LinearGradient from 'react-native-linear-gradient';
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../TextRowVise/TextRowVise.Component'
import { useSelector } from 'react-redux';
const Component = ({
  isVisible,
  onRequsetClose,
  onPress
}) => {
  const camera = createRef(null);
  const languageJson = useSelector(state => state.Language.languageJson.Scanner_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const card = (
    <View style={styles.orderContainer}>
      <TouchableOpacity
        style={selectdLanguage == 'ar' ? [styles.orderIdContainer, { flexDirection: 'row-reverse' }] : styles.orderIdContainer}
      >
        <View style={styles.boxContainer}>
          <Image
            source={boxImage}
            style={styles.boxImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.orderIdTextContainer}>
          <Text style={styles.orderIdLabelText}>{languageJson.OrderID_Label}</Text>
          <TextRowVise numberOfLines={1} style={styles.orderIdText}>
            ORD260RT5640
          </TextRowVise>
          <TextRowVise style={styles.timeLeftText}>23 Mar, 2020</TextRowVise>
          {/* <Text style={styles.orderDate}>{item.orderDate}</Text> */}
        </View>
        <View style={styles.timeLeftContainer}>
          <TextRowVise numberOfLines={1} style={styles.orderIdText}>{languageJson.DriverDetail}</TextRowVise>
          <TextRowVise style={styles.timeLeftText}>{languageJson.Name}: John Doe</TextRowVise>
          <TextRowVise numberOfLines={1} style={styles.timeLeftText}>
            {languageJson.Contact}:
          </TextRowVise>
          <Text numberOfLines={1} style={styles.timeLeftText}>+1-113-444-333</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.lineSeparator} />
      <ViewRowVise style={styles.addressContainer}>
        <View style={styles.providerAddressContainer}>
          <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
            <Image
              source={mapMarkerImage}
              resizeMode="contain"
              style={styles.mapMarkerAddressImage}
            />
            <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.From_Label}</Text>
          </View>
          <Text numberOfLines={2} style={styles.addressText}>
            C-40, Golden Street, East 6th Street, New York,USA
          </Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.BuyerAddressContainer}>
          <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
            <Image
              source={mapMarkerImage}
              resizeMode="contain"
              style={styles.mapMarkerAddressImage}
            />
            <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.To_Label}</Text>
          </View>
          <Text numberOfLines={2} style={styles.addressText}>
            C-40, Golden Street, East 6th Street, New York,USA
          </Text>
        </View>
      </ViewRowVise>
    </View>
  );

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onRequsetClose}
      backdropOpacity={0}
      onBackButtonPress={onRequsetClose}>
      <StatusBar hidden={true} />
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        playSoundOnCapture={true}
      //   onBarCodeRead={checkCustomer}
      // onGoogleVisionBarcodesDetected={({ barcodes }) => {
      //   console.log(barcodes)
      // }}
      >
        <LinearGradient
          //   locations={[0.05,0.8]}
          colors={[
            'rgba(0,0,0,0.9)',
            'rgba(0,0,0,0.8)',
          ]}
          style={[styles.header]}>
          <TouchableOpacity onPress={onRequsetClose} style={styles.icon}>
            <Image
              source={require('../../assets/DriverHome/arrow-left-grey.png')}
              style={styles.backImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerHeading}>{languageJson.PickPackage_Title}</Text>
          <View style={[styles.icon, { backgroundColor: 'transparent' }]} />
        </LinearGradient>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: width(20), backgroundColor: 'rgba(0,0,0,0.8)' }} />
          <View
            style={{
              height: height(28),
              width: width(60),
              alignSelf: 'center',
              justifyContent: 'space-between',
              opacity: 1,
              zIndex: 1
              //   backgroundColor:'#00000070'
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
          <View style={{ width: width(20), backgroundColor: 'rgba(0,0,0,0.8)' }} />

        </View>
        <LinearGradient
          //   locations={[0.05,0.4,0.5,0.6,0.95]}
          colors={[
            'rgba(0,0,0,0.8)',
            'rgba(0,0,0,0.9)',
          ]}
          style={{ height: height(52) }}>
          {card}
          <TouchableOpacity activeOpacity={0.7} onPress={onPress}
            style={{
              width: width(21),
              height: width(21),
              borderRadius: width(11),
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: height(4),
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}>
            <View
              style={{
                width: width(15),
                height: width(15),
                borderRadius: width(8),
                backgroundColor: color.backgroundWhite,
              }}
            />
          </TouchableOpacity>
        </LinearGradient>
      </RNCamera>
    </Modal>
  );
};

export default Component;
