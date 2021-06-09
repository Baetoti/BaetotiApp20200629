import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './More.Style';
import angleRightImage from '../../assets/MoreAssets/angle-right.png';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { totalSize ,width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../TextRowVise/TextRowVise.Component';

import { useSelector} from 'react-redux';
const Component = ({ title, containerStyle, imageContainerStyle, image, onPress, isIcon,
     iconColor, iconImage , isDot ,dotColor,isBox,}) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.container, containerStyle ? containerStyle : {}]}
            onPress={onPress}
        >
            <ViewRowVise style={styles.innerContainer}>
                <TouchableOpacity style={[styles.imageContainer,
                imageContainerStyle ? imageContainerStyle : {}]}>
                    {
                    isBox?
                    <Feather name='box' size={totalSize(1.5)} color={ Colors.buttonSecondaryBlue} />
                    :isIcon ?
                        <Icon name='logout' size={totalSize(1.65)} color={iconColor ? iconColor : Colors.purplePrimary} /> :
                        <Image source={image} style={[styles.image,iconImage?iconImage:{}]} resizeMode='contain' />
                    }
                </TouchableOpacity>
                <TextRowVise style={styles.titleText}>{title}</TextRowVise>
                <View style={styles.angleRightImageButton}>
                    <Image resizeMode='contain' source={angleRightImage} 
                    style={selectdLanguage=='ar'? [styles.angleRightImage,{transform:[{rotate:'180deg'}]}]:styles.angleRightImage} />
                </View>
            </ViewRowVise>
            {isDot&&(
 <View style={[styles.dot,selectdLanguage=='ar'?{left:width(15),backgroundColor:dotColor}:{backgroundColor:dotColor}]} />
            )}
        </TouchableOpacity>
    )
};

export default Component;
