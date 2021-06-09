import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './SocailMedia.Style';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
const Component = ({ link, containerStyle, image, isConnected }) => {
    return (
        <ViewRowVise style={[styles.container, containerStyle ? containerStyle : {}]}>
            <TouchableOpacity style={styles.socialMediaIconButton}>
                <Image style={styles.socialMediaIcon}
                    resizeMode='contain'
                    source={image} />
            </TouchableOpacity>
            <View style={styles.socailLinkContainere}>
                <TextRowVise numberOfLines={1} style={styles.socailLink}>{link}</TextRowVise>
            </View>
            <View style={styles.isConnectedContainer}>
                <Text style={styles.isConnected}>{isConnected}</Text>
            </View>

        </ViewRowVise>
    )
};

export default Component;
