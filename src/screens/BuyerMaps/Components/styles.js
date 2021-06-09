import * as React from 'react';
import { FlatList, StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../../../utills/Colors';


export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingLeft: width(5),
    },
    treatmentText: {
        padding: 20,
        color: color.backgroundWhite
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    FlatListContainer: {
        width: width(28),
        height: height(14),
        borderRadius: 15,        
        backgroundColor: '#ffffff',
        
    },
    imageStyles: {
        borderRadius: 15,
        width: '100%',
        height: '100%',
    },
    centerContainer: {
        width: '85%',
        // height:'20%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: '5%'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    logoImage: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: 'black'
    },
    bottomContainerImageBackground: {
        // marginTop:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '5%',
        width: '100%',
        paddingLeft: '7%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    restaurantName: {
        color: '#FFFFFF',
        fontSize: totalSize(1.3),
        marginLeft: 5,
        fontWeight: 'bold',
        
    },
    startImage: {
        width: 13,
        height: 13
    },
    startText: {
        fontSize: totalSize(1.2),
        marginLeft: '3%',
        color: color.backgroundWhite
    },
    dotImage: {
        width: 3.5,
        height: 3.5,
        marginLeft: '3%'
    },
    categoryText: {
        fontSize: totalSize(1.1),
        marginLeft: '3%',
        color: color.gray,
        color: color.backgroundWhite
    },
    textFieldContainer: {
        width: width(90),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        marginTop: height(1.5),
        borderRadius: width(2.98),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFieldInnerContainer: {
        width: width(80),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textFieldImage: {
        height: totalSize(2.0),
        width: totalSize(2.0),
        resizeMode: 'contain'
    },
    textInput: {
        width: width(64),
        height: height(7),
        paddingVertical: 0,
        fontSize: totalSize(2)
    },
    arrowDown: {
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },
    flexRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 9,
        paddingVertical: 3,
        minHeight: 0,
        marginLeft: '7%',
        marginTop: '5%',
        width: '29%',
    },
    onlineContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '12%',
        width: width(20),
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onlineText: {
        fontSize: width(3),
        color: color.backgroundWhite,
        textAlign: 'center'
    }
});