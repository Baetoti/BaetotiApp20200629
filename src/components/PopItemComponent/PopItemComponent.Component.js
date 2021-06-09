import React, { useState, Fragment } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './PopItemComponent.Style';

import Modal from 'react-native-modal';
import closeWhiteImage from '../../assets/OverViewDetailAssets/closewhite.png';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { useSelector } from 'react-redux';
import { width } from 'react-native-dimension';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';

export default function CurrentOrders({
  isModalVisible,
  onPressClose,
  popItems,
  containerStyle,
  onChange,
  onSelect }) {
  const _popItemsDetail = ({ item, index }) => {
    return (
      <TouchableOpacityRowVise style={styles.popUpMenuItemsContainer} onPress={onPressClose}>
        <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
        <TextRowVise style={selectdLanguage == 'ar' ? [styles.itemText, { marginRight: width(2.5) }] : styles.itemText} numberOfLines={1} >{item.title}</TextRowVise>
      </TouchableOpacityRowVise>
    );
  };
  const languageJson = useSelector(state => state.Language.languageJson.MyWallet)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  return (
    <Fragment>
      <View style={(styles.container, { backgroundColor: '#FFFFFF' })} />
      <View style={styles.container}>
        <Modal
          animationType='fade'
          transparent={true}
          backdropOpacity={0.7}
          onBackButtonPress={onPressClose}
          onBackdropPress={onPressClose}
          isVisible={isModalVisible}>
          <TouchableOpacity activeOpacity={1} style={styles.modalViewContainer} onPress={onPressClose}>
            {/* <TouchableOpacity
              style={[styles.crossButtonContainer, containerStyle ? containerStyle : {}]}
              onPress={onPressClose}>
              <Image
                source={closeWhiteImage}
                resizeMode="contain"
                style={styles.closeWhiteImage}
              />
            </TouchableOpacity> */}
            <View style={styles.popUpMenuContainer}>
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
                data={popItems}
                showsVerticalScrollIndicator={false}
                renderItem={_popItemsDetail}
              //   keyExtractor={item => item.key}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </Fragment>
  );
}
