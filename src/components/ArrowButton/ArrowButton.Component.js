import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ArrowButton.Style';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { totalSize, height } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component'
import { useSelector } from 'react-redux';
const Component = ({ title, containerStyle, image, onPress, isIcon }) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.container, containerStyle ? containerStyle : {}]}
            onPress={onPress}
        >
            <ViewRowVise style={styles.innerContainer}>

                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.angleRightImageButton}>
                    {selectdLanguage=='ar'?
                    <AntDesign name="left" size={height(2)} color={Colors.backgroundWhite} />:
                    <AntDesign name="right" size={height(2)} color={Colors.backgroundWhite} />}
                </View>
            </ViewRowVise>

        </TouchableOpacity>
    )
};

export default Component;
