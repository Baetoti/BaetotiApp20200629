import React, { forwardRef } from 'react';
import { View,  TextInput } from 'react-native';
import styles from './ChnagePassword.Component.Style';
import Colors from '../../utills/Colors';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
const Component = ({placeHolder, hidden, keytype,onSubmit }, ref) => {
    return (
        <View style={styles.textFieldContainer}>
            <View style={styles.textFieldInnerContainer}>
                <TextInputRowVise
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.placeHolderTextColor}
                    autoCapitalize='none'
                    ref={ref}
                    onSubmitEditing={ onSubmit}
                    style={styles.textInput}
                    secureTextEntry={hidden ? true : false}
                    returnKeyType={keytype}
                />
            </View>
        </View>
    );
};
export default forwardRef(Component);
