import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ProfileHeader.Style';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png';
import shareImage from '../../assets/MoreAssets//share.png';


const Component = ({ title, containerStyle, image,onPress,onImagePress,notShare, hideEdit }) => {
    return (
        <View style={[styles.container, containerStyle ? containerStyle : {}]}>
            <TouchableOpacity style={styles.backButtonContainer} 
            onPress={onPress}
            >
                <Image style={styles.arrowLeft}
                    resizeMode='contain'
                    source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.ImagesContainer}>
                {!notShare&&<TouchableOpacity style={styles.shareImageContainer}>
                    <Image 
                    resizeMode='contain'
                    style={styles.shareImage}
                    source={shareImage}/>
                </TouchableOpacity>}
                {!hideEdit && 
                <TouchableOpacity onPress={onImagePress}>
                    <Image  source={image}
                    style={styles.image}
                    resizeMode='contain'
                    />
                </TouchableOpacity>
}
            </View>
        </View>
    )
};

export default Component;
