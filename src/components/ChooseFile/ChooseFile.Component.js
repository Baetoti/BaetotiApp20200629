import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ChooseFile.Style';
import imagePlus from '../../assets/Verification/image-plus.png';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../TextRowVise/TextRowVise.Component'

const Component = ({ label, instruction, onPress, disabled, image }) => {
    return (
        <View style={styles.container}>
            <ViewRowVise style={styles.innerItemsContainer}>
                {image != '' ?
                    <Image source={{uri:image}} style={styles.imagePlus} /> :
                    <Image source={imagePlus} style={styles.imagePlus} />
                }

                <View style={styles.verticalLine} />
                <View style={styles.chooseTextContainer}>
                    <TouchableOpacity onPress={onPress} disabled={disabled}>
                        <TextRowVise style={styles.chooseFileText}>{label}</TextRowVise>
                    </TouchableOpacity>
                    <TextRowVise style={styles.pdfOrPngText}>{instruction}</TextRowVise>
                </View>

            </ViewRowVise>
        </View>
    )
};

export default Component;
