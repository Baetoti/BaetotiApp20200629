import React, { useState, } from 'react';
import { View, Image, Text } from 'react-native';
import arrowdownImage from '../../assets/Login/arrow-down.png'
import styles from './AuthHeader.Style';
import baetotiBlackLogo from '../../assets/Login/baetoti-black-logo.png';
import ModalDropdown from 'react-native-modal-dropdown';
const options = [
    { label: 'En', value: 'en' },
    { label: 'Ar', value: 'ar' },
];
const Component = ({ dropDownVisibel, selectdLanguage ,isImage,onChangeLanguage}) => {
    const [selectedValue, setSelectedValue] = useState((options.filter(item => item.value == selectdLanguage)[0]));
    return (
        <View style={[styles.headerContainer,isImage?{justifyContent:'flex-end'}:{}]}>
           {!isImage&&
            <Image source={baetotiBlackLogo}
                style={styles.logoImage} />}
            {dropDownVisibel ?
                <View style={styles.dropDownContainer}>
                    <ModalDropdown
                        options={options}
                        dropdownStyle={styles.dropDown}
                        showsVerticalScrollIndicator={false}
                        onSelect={(index, value) => {
                            setSelectedValue(value) 
                            onChangeLanguage(value.value)
                        }}
                        renderRow={(option, index, isSelected) => {
                            return (
                                <View style={styles.dropDownItemContainer}>
                                    <Text style={styles.dropDownItemText}>{option.label}</Text>
                                </View>)
                        }}
                    >
                        <View style={styles.container}>
                            <Text>{selectedValue&&selectedValue.label}</Text>
                            <Image source={arrowdownImage}
                                resizeMode='contain'
                                style={styles.arrowdownImage} />
                        </View>
                    </ModalDropdown>
                </View>
                :
                null
            }


        </View>
    );
};
export default Component;
