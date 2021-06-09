import React, { forwardRef,useState } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './AuthTextField.Style';
import Colors from '../../utills/Colors';
import { RTLView, RTLText } from 'react-native-rtl-layout';
const Component = ({ image, placeHolder, hidden, keytype,onSubmit, selectdLanguage,
keyboardType}, ref) => {
    return (
        <View style={styles.textFieldContainer}>
            <View locale={'ar'}
            style={
                  selectdLanguage=='ar'?[styles.textFieldInnerContainer,{flexDirection:'row-reverse'}]:
             styles.textFieldInnerContainer}
            >
                <Image style={styles.textFieldImage}
                    source={image} />
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.placeHolderTextColor}
                    autoCapitalize='none'
                    ref={ref}
                    keyboardType = {keyboardType ? keyboardType: "default"}
                    onSubmitEditing={ onSubmit}
                    style={selectdLanguage=='ar'?[styles.textInput,{textAlign:'right'}] :styles.textInput}
                    secureTextEntry={hidden ? true : false}
                    returnKeyType={keytype}
                />
            </View>
        </View>
    );
};
export default forwardRef(Component);
