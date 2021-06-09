import React, { forwardRef, createRef, useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import styles from './styles';
import color from '../../../utills/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import data from '../DummyData'
import { width, height ,totalSize} from 'react-native-dimension';
import TextRowVise from '../../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../../components/ViewRowVise/ViewRowVise.Component';
import { useDispatch, useSelector } from 'react-redux';

const Component = ({ heading, placeHolder, value, onChange, onChangeText, location, onPress, disable }, ref) => {
  /**
   * create here password refs to for password input  
   */
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Ref for DropDown to open/close programatically
   */
  const modalDropdown = createRef(null);
  return (
    <>
      <TextRowVise style={styles.heading}>{heading}</TextRowVise>
      <TouchableOpacity disabled={disable} activeOpacity={0.5} onPress={() => {
        !location && modalDropdown.current.show();
        location && onPress()
      }} style={styles.textFieldContainer}>
        <ViewRowVise style={styles.textFieldInnerContainer}>
          {location && <TextInput value={value} placeholder={placeHolder} placeholderTextColor={color.black} onChangeText={onChangeText}
            style={selectdLanguage == 'ar' ? [styles.textInput, { textAlign: 'right' }] : styles.textInput} />}
          {!location && <TextRowVise style={styles.textInput}>{value ? value : placeHolder}</TextRowVise>}
          {!location && <Image style={styles.textFieldImage}
            source={require('../../../assets/buyerHome/angle-down.png')} />}
          {location && <Image style={styles.locationImage}
            source={require('../../../assets/buyerHome/navigation.png')} />}
        </ViewRowVise>
      </TouchableOpacity>
      <ModalDropdown
        options={data}
        dropdownStyle={[styles.dropDown]}
        renderSeparator={() => <View></View>}
        ref={modalDropdown}
        onSelect={(i, option) => {
          onChange(option.title)
        }}
        showsVerticalScrollIndicator={false}
        renderRow={(option, index, isSelected) => (
          <View style={styles.dropDownItemContainer}>
            <View style={{ padding: width(2), borderRadius: 5, backgroundColor: option.backgroundColor }}>
              <Image source={option.image} style={{ width: totalSize(1.75), height: totalSize(1.75), resizeMode: 'contain' }} />
            </View>
            <Text style={styles.dropDownItemText}>{option.title}</Text>
          </View>
        )}>
        <View />
      </ModalDropdown>
    </>
  );
};
export default forwardRef(Component);
