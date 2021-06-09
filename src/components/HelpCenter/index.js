import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { height, width } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component';
import TouchableOpacityRowVise from '../TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextRowVise from '../TextRowVise/TextRowVise.Component';

import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import { useSelector } from 'react-redux';
export const HelpCenter = ({ title, containerStyle, image, onPress, icon_1, icon }) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <>
            <TouchableOpacity activeOpacity={0.5}
             style={[styles.container, containerStyle ? containerStyle : {}]}
                onPress={onPress}
            >
                <View style={styles.textContainer_1}>
                    <View style={styles.textContainer_2}>
                        <Icon name="triangle" size={50} color={Colors.themeColor} style={styles.iconStyle_1} />
                        <View style={styles.iconViewStyle_1} /> 
                        <Icon_1 name={icon_1} size={22} color={Colors.white} style={styles.iconStyle_2} />
                        
                    </View>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.detailText}>Other Details......</Text>
                
                </View>
                {/* <Entypo name={selectdLanguage=='ar'?'chevron-small-left' :'chevron-small-right'} size={width(7)} color={Colors.placeHolderTextColor}
                    style={{alignSelf:'flex-start',}} /> */}
            </TouchableOpacity>
            {/* <View style={styles.line} /> */}
        </>
    )
};

