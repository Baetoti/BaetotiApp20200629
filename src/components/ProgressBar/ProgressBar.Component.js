import React from 'react';
import { View, Text, } from 'react-native';
import styles from './ProgressBar.Style';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Colors from '../../utills/Colors';
import { width, height,} from 'react-native-dimension';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component';
const Component = ({ title, number, progressPercentage }) => {
    return (
        <ViewRowVise style={styles.container}>
            <Text style={styles.numberText}>{number}</Text>
            <View>
                <Text style={styles.titleText}>{title}</Text>
                <ProgressBarAnimated
                    width={width(55)}
                    height={height(1)}
                    value={progressPercentage}
                    backgroundColor={progressPercentage < 5 ? Colors.red:Colors.primaryBlue}
                />
            </View>
            <Text style={styles.progressPercentageText}>{progressPercentage}%</Text>
        </ViewRowVise>
    );
};

export default Component;
