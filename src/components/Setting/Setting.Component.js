import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import styles from './Setting.Style';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component'
import { useSelector } from 'react-redux';
const Component = ({ title, containerStyle, image, switchColor, text, onPress }) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const [isHideLocation, toggleHideLocation] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <TouchableOpacity style={[styles.container, containerStyle ? containerStyle : {}]}
        activeOpacity={0.7} onPress={onPress}
        >
            <ViewRowVise style={styles.innerContainer}>
                <Text style={styles.titleText}>{title}</Text>
                {text ?
                    <ViewRowVise style={styles.textContainer}>
                        <Text style={selectdLanguage == 'ar' ? [styles.text, { paddingLeft: width(3) }] : styles.text}>{text}</Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                            <Image source={image} resizeMode='contain' style={selectdLanguage == 'ar' ? [styles.image, { transform: [{ rotate: '180deg' }] }] : styles.image} />
                        </TouchableOpacity>
                    </ViewRowVise>
                    :
                    image ?
                        <View >
                            <Image source={image} resizeMode='contain' style={selectdLanguage == 'ar' ? [styles.image, { transform: [{ rotate: '180deg' }] }] : styles.image} />
                        </View>
                        :
                        <Switch
                            trackColor={{
                                false: 'rgba(28, 45, 65, 0.2)',
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
                    // </View>
                }
            </ViewRowVise>
        </TouchableOpacity>
    )
};

export default Component;
