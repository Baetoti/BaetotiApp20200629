import React, { forwardRef } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './styles';
import Colors from '../../../utills/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { height,width } from 'react-native-dimension';
const Component = ({ search, placeHolder, hidden,onChangeText, keytype,onSearch,down,onDropdownPress , selectdLanguage}, ref) => {
    return (
        <View style={styles.textFieldContainer}>
            <View style={ selectdLanguage=='ar'?[styles.textFieldInnerContainer,{flexDirection:'row-reverse'}] :styles.textFieldInnerContainer}>
                <TouchableOpacity activeOpacity={0.7} onPress={onSearch}>
                <Image style={styles.textFieldImage}
                    source={search} />
                    </TouchableOpacity>
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.gray}
                    autoCapitalize='none'
                    ref={ref}
                    onChangeText={onChangeText}
                    onSubmitEditing={ onSearch}
                    style={selectdLanguage=='ar'? [styles.textInput,{textAlign: 'right'}] :styles.textInput}
                    secureTextEntry={hidden ? true : false}
                    returnKeyType={'search'}
                />
                <TouchableOpacity style={{width:width(4),height:height(7),justifyContent:'center',alignItems:'center'}} onPress={onSearch}>
                 <Image style={styles.arrowDown}
                    source={down} />
                    </TouchableOpacity>
            </View>
        </View>
    );
};
export default forwardRef(Component);
