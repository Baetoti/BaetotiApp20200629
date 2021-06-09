import React, { forwardRef } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './styles';
import Colors from '../../../utills/Colors'
const Component = ({ search, placeHolder, hidden, keytype, onSubmit, }, ref) => {
    return (
        <View style={styles.textFieldContainer}>
            <View style={styles.textFieldInnerContainer}>
                <Image style={styles.textFieldImage}
                    source={search} />
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.placeHolderTextColor}
                    autoCapitalize='none'
                    ref={ref}
                    onSubmitEditing={onSubmit}
                    style={styles.textInput}
                    secureTextEntry={hidden ? true : false}
                    returnKeyType={keytype}
                />
            </View>
        </View>
    );
};
export default forwardRef(Component);
