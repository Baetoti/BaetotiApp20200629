import * as React from 'react';
import { FlatList, StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../../../utills/Colors';


export default StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
    treatmentText: {
        padding: 30
    },
    imageBackground: {
        width: '35%',
        height: '100%',
    },
    FlatListContainer: {
        width: width(90),
        height: height(18),
        borderRadius: 15,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    imageStyles: {
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        width: '100%',
        height: '100%',
    },
    imageStylesArabic: {
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        height: '100%',
    },
    centerContainer: {
        width: '57%',
        marginHorizontal: 15,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '4%', justifyContent: 'flex-start', alignItems: 'center'
    },
    distane: {

        color: '#ffffff',
        fontSize: totalSize(1.2),
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    leftItem: {
        backgroundColor: color.buttonBlue,
        paddingVertical: 8,
        top: 0,
        right: 0,
        borderTopRightRadius: 15,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        fontSize: totalSize(3),
        zIndex: 1
    },
    leftItemArabic: {
        backgroundColor: color.buttonBlue,
        paddingVertical: 8,
        top: 0,
        right: 0,
        borderTopLeftRadius: 15,
        paddingHorizontal: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        fontSize: totalSize(3),
        zIndex: 1
    },
    leftText: {
        color: '#ffffff',
        fontSize: width(3.7)
    },
    left: {
        fontSize: width(2.2)
    },
    logoImage: {
        width: 25,
        height: 25,
        borderRadius: 25,
        marginLeft: 7
    },
    bottomContainerImageBackground: {
        marginTop: '53%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    restaurantName: {
        fontSize: width(2.5),
        marginLeft: 7,
        color: color.textBlack
    },
    price: {
        fontSize: width(4),
        fontWeight: '300'
    },
    startImage: {
        width: width(3.5),
        height: width(3.5),
        resizeMode: 'contain'
    },
    startText: {
        fontSize: width(3),
        marginLeft: '3%'
    },
    dotImage: {
        width: width(1),
        height: width(1),
        marginLeft: '3%'
    },
    catLogoImg: {
        width: width(2.5),
        height: width(2.5),
        resizeMode: 'contain',
        marginLeft: '3%',
        tintColor: color.gray
    },
    title: {
        fontSize: width(4.5),
        // fontWeight:'bold',
        width: '90%',
        marginTop:10,
        color: color.textBlack,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flexRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 9,
        paddingVertical: 3,
        minHeight: 0,
        marginHorizontal: '7%',
        marginTop: '5%',
        width: '35%',
    },
    categoryText: {
        color: color.gray,
        fontSize: width(2.6),
        marginLeft: '1.5%'
    },
    currency: {
        fontSize: width(2.5)
    },
    perUnitContainer: {
        backgroundColor: color.opacitiveBlue,
        borderRadius: width(10),
        paddingHorizontal: width(3),
        paddingVertical: height(0.3),
        marginLeft: width(1)
    },
    perUnit: {
        fontSize: width(3.2),
        color: color.buttonBlue
    }
});