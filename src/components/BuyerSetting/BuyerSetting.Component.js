import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import styles from './BuyerSetting.Style';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
const Component = ({ title, containerStyle, switchColor, image, text, onPress, nameTouchDisabled }) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const [isHideLocation, toggleHideLocation] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <TouchableOpacity 
        disabled= {nameTouchDisabled}
            onPress={onPress} style={[styles.container, containerStyle ? containerStyle : {}]}>
            <ViewRowVise style={styles.innerContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                {text ? <ViewRowVise style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                        <Image source={image} resizeMode='contain' style={selectdLanguage == 'ar' ? [styles.image, { transform: [{ rotate: '180deg' }] }] : styles.image} />
                    </TouchableOpacity>
                </ViewRowVise>
                    :
                    image ?
                        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                            <Image source={image} resizeMode='contain' style={selectdLanguage == 'ar' ? [styles.image, { transform: [{ rotate: '180deg' }] }] : styles.image} />
                        </TouchableOpacity>
                        :
                        <View
                            style={[
                                styles.hideLocationContainer,
                                {
                                    backgroundColor: isHideLocation
                                        ? switchColor
                                        : Colors.placeHolderTextColor,
                                },
                            ]}>
                            <Switch
                                trackColor={{
                                    false: 'transparent',
                                    true: switchColor,
                                }}
                                thumbColor={
                                    isHideLocation
                                        ? Colors.backgroundWhite
                                        : switchColor
                                }
                                onValueChange={() => toggleHideLocation(!isHideLocation)}
                                ios_backgroundColor={
                                    isHideLocation
                                        ? switchColor
                                        : Colors.placeHolderTextColor
                                }
                                value={isHideLocation}
                            />
                        </View>
                }
            </ViewRowVise>
        </TouchableOpacity>
    )
};

export default Component;
