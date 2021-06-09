import React ,{ useState, Children,}from 'react';
import styles from './LinearGradient.Style';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
const Component = (props) => {
    return (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.1, 0.7]}
        colors={['#FEF4F3','#fcf4ef', '#fcf5ed','#faf6ed']}
        style={[styles.LinearGradient]}
        >
            {props.children}
        </LinearGradient>
    );
};
export default Component;
