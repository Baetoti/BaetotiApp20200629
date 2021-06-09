import React, { forwardRef } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './styles';
import Colors from '../../../utills/Colors'
import { useSelector } from 'react-redux';
const Component = ({ search, placeHolder, hidden, keytype, onSubmit, }, ref) => {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <View style={styles.textFieldContainer}>
            <View style={selectdLanguage == 'ar' ? [styles.textFieldInnerContainer, { flexDirection: 'row-reverse' }] : styles.textFieldInnerContainer}>
                
                <Image style={styles.textFieldImage}
                    source={search} />
                
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.placeHolderTextColor}
                    autoCapitalize='none'
                    ref={ref}
                    onSubmitEditing={onSubmit}
                    style={selectdLanguage == 'ar' ? [styles.textInput, { textAlign: 'right' }] : styles.textInput}
                    secureTextEntry={hidden ? true : false}
                    returnKeyType={keytype}
                />
            </View>
        </View>
    );
};
export default forwardRef(Component);
