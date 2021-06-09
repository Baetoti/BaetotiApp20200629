import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './MoreHeader.Style';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png'
const Component = ({ title, containerStyle, image, isImage, onPress,backButtonContainerStyle,
     imageInView, titlecontainerStyle,onRightIconPress, transfer}) => {
    return (
        <>
            <View style={[styles.container, containerStyle ? containerStyle : {}]}>
                {isImage ?
                    <TouchableOpacity style={styles.backButtonContainer}
                        onPress={onPress}
                    >
                        <Image style={styles.arrowLeft}
                            resizeMode='contain'
                            source={arrowLeft} />
                    </TouchableOpacity> :
                    <View style={styles.rightEmptyView} />
                }
                <Text style={[styles.titleText, titlecontainerStyle ? titlecontainerStyle : {}]}>{title}</Text>
                {
                    imageInView ?
                        <TouchableOpacity style={styles.endButtonContainer}
                            onPress={onPress}
                        >
                            <Image style={styles.settingsIcon}
                                resizeMode='contain'
                                source={image} />
                        </TouchableOpacity> :
                        image ?
                            <TouchableOpacity onPress={onRightIconPress}>
                                <Image style={styles.image}
                                    resizeMode='contain'
                                    source={image} />
                            </TouchableOpacity> :
                            <View style={styles.lefttEmptyView} />}

            </View>
            
            {transfer ?
             <Text style={[styles.transferText, titlecontainerStyle ? titlecontainerStyle : {}]}>{transfer}</Text>
            : null}
        </>    
    )
};

export default Component;
