import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './HomeHeader.Style';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png'


const Component = ({title,containerStyle,image , onPress,backButtonContainerStyle ,onRightPress}) => {
    return (
        <View style={[styles.container, containerStyle ? containerStyle : {}]}>
            <TouchableOpacity style={[styles.backButtonContainer, backButtonContainerStyle ? backButtonContainerStyle : {}]}
            onPress={onPress}
            >
                <Image style={styles.arrowLeft}
                    resizeMode='contain'
                    source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            {image ?
                <TouchableOpacity
                onPress={onRightPress}
                >
                    <Image style={styles.image}
                        resizeMode='contain'
                        source={image} />
                </TouchableOpacity> :
                <View style ={styles.emptyView}/>}

        </View>
    )
};

export default Component;
