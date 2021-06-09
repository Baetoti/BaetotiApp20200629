import * as React from 'react';
import { FlatList, StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../../../utills/Colors';


export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingRight: width(10)
    },
    treatmentText: {
        padding: 30
    },
    imageBackground: {
        width: width(47),
        height: height(21.5),
    },
    FlatListContainer: {
        width: width(47),
        height: height(28.5),
        borderRadius: 15,
        backgroundColor: '#ffffff',

    },
    imageStyles: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: width(47),
        height: height(21),
    },
    centerContainer: {
        width: width(43),
        height: '23%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    bottomContainerImage: {
        width: '100%',
        alignSelf: 'center',
        height: '100%',
        justifyContent: 'space-between'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width(43),
    },
    flexStar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'flex-end',
        width: '100%',
        paddingBottom: height(1),
    },
    distane: {
        color: '#ffffff',
        fontSize: 10,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    leftItem: {
        backgroundColor: color.buttonBlue,
        paddingVertical: 8,
        borderTopRightRadius: 15,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        fontSize: totalSize(3),
        right: 0,
        top: 0
    },
    leftText: {
        color: '#ffffff',
        fontSize: totalSize(1.7)
    },
    left: {
        fontSize: totalSize(1.2)
    },
    logoImage: {
        width: 20,
        height: 20,
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
        paddingVertical: 30
    },
    restaurantName: {
        color: '#FFFFFF',
        fontSize: totalSize(1.3),
        marginLeft: 5,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    price: {
        fontSize: totalSize(1.4),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleText: {
        fontSize: totalSize(1.4),
        width: '70%'
    },
    startImage: {
        width: 13,
        height: 13,
        marginLeft:width(2.5)
    },
    startText: {
        fontSize: totalSize(1.2),
        marginLeft: '3%'
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
        maxWidth: '70%',

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
        width:width(64),
    color : color.black
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
    currency:{
        fontSize: width(2.5)
    },
    perUnitContainer:{
        backgroundColor:color.opacitiveBlue,
        borderRadius: width(10),
        paddingHorizontal: width(3),
        paddingVertical: height(0.3),
        marginLeft: width(1)
    },
    perUnit:{
        fontSize: width(3.2),
        color:color.buttonBlue
    }
});