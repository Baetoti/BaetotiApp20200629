import * as React from 'react';
import {FlatList, StyleSheet, ImageBackground,View,TouchableOpacity} from 'react-native';
import { width, height,totalSize } from 'react-native-dimension';
import color from '../../../utills/Colors';


export default  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      paddingRight: width(10)
    },
    treatmentText:{
      padding:30,
      color:color.backgroundWhite
    },
    imageBackground:{
        width:'100%',
        height:'100%',
        justifyContent:'space-between'
    },
    FlatListContainer:{
        width:width(47),
        height:height(22),
       borderRadius:15,
       backgroundColor:'#ffffff',

    },
    imageStyles:{
        borderRadius:15,
        width:'100%',
        height:'100%',
    },
    centerContainer:{
        width:'85%',
        // height:'20%',
        alignSelf:'center',
        justifyContent:'center',
        marginLeft:'5%'
    },
    flexRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
 
   
    logoImage:{
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:'black'
    },
    bottomContainerImageBackground:{
        // marginTop:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:'5%',
        width:'100%',
        paddingLeft:'7%',
        paddingVertical:30,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
    },
    restaurantName:{
        color:'#FFFFFF',
        fontSize:totalSize(1.3),
        marginLeft:5,
        fontWeight:'bold',
        letterSpacing:0.5
    },
    startImage:{
        width:13,
        height:13
    },
    startText:{
        fontSize:totalSize(1.2),
        marginLeft:'3%',
        color:color.backgroundWhite
    },
    dotImage:{
        width:3.5,
        height:3.5,
        marginLeft:'3%'
    },
    categoryText:{
        fontSize:totalSize(1.1),
        marginLeft:'3%',
        color:color.gray,
        color:color.backgroundWhite
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
        fontSize:totalSize(2)
    },
    arrowDown:{
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },
    flexRowContainer:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.6)',
        borderRadius:9,
        paddingVertical:3,
        minHeight:0,
        marginLeft:'7%',
        marginTop:'5%',
        width:'29%',
    },
    itemSeparator: {
        margin: totalSize(0.8)
    },
    orderIdContainer: {
        width: width(73),
        // alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    boxContainer: {
        width: totalSize(8),
        alignSelf: 'center',
        height: totalSize(7),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.OpacitiveButtonSecondaryBlue,
        borderRadius: width(2)
    },
    boxImage: {
        width: totalSize(3),
        height: totalSize(3),
    },
    orderIdTextContainer: {
        width: width(28),
        marginLeft: width(2)
    },
    orderIdLabelText: {
        color: color.halfBlackOpacitive,
        fontSize: width(2.8)
    },
    orderIdText: {
        fontSize: width(3.3),
        fontWeight:'bold',
        marginTop:height(0.5)
    },
    orderDate:{
        fontSize: width(3.3),
        color:color.blackColorOpacitive,
        marginTop:height(0.5)
    },
    timeLeftContainer:{
        width:width(22),
        height:height(4),
        backgroundColor:color.OpacitiveButtonSecondaryBlue,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width(4)
    },
    timeLeftText:{
        fontSize:width(3),
        color:color.buttonSecondaryBlue
    },
    distanceDeliverDateContainer:{
        width: width(73),
        // alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:height(1.5)
    },
    deliveryTimeContainer:{
        width:'57%',
    },
    deliveryTimeTextLabel:{
        color:color.buttonSecondaryBlue,
        fontSize:width(3.3),
        textAlign:'left'
    },
    deliveryTimeText:{
        fontSize: width(3.25),
        marginTop:height(0.5)
    },
    distanceContainer:{
        width:width(39),
    },
    distanceTimeTextLabel:{
        color:color.buttonSecondaryBlue,
        fontSize:width(3.3),
        textAlign:'left'
    },
    distanceTimeText:{
        fontSize: width(3.25),
        marginTop:height(0.5)
    },
    mapMarkerImage: {
        width: totalSize(3),
        height: totalSize(3),
    },
    lineSeparator: {
        height:0.4,
        backgroundColor: '#1C2D41',
        width: '100%',
        marginTop:height(1.5),
        opacity:0.2
    },
    addressContainer: {
        width: width(73),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -height(0.5)
    },
    providerAddressContainer: {
        width: '43.5%',
    },
    mapImageContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mapMarkerAddressImage: {
        width: totalSize(2),
        height: totalSize(2),
    },
    toFormText: {
        fontSize: width(3.5),
        marginLeft: width(2),
    },
    addressText: {
        color:color.halfBlackOpacitive,
        fontSize: width(2.5),
        marginTop:height(1)
    },
    verticalLine: {
        height: height(8),
        backgroundColor: color.opacitiveBackGroundGray,
        width: 0.5,
        marginVertical: height(1.5)
    },
    BuyerAddressContainer: {
        width: '43%',
    },
    deliveryChargesContainer:{
        width: width(73),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    deliveryChargesLabelText:{
        color:color.opacitiveLightGrayText,
        fontSize:width(3.6)
    },
    deliveryChargesText:{
        color:color.grayTextColor,
        fontSize:width(3.6),
        fontWeight:'bold'
    },
    halfLineSeparator:{
        borderWidth:0.2,
        backgroundColor: color.opacitiveBackGroundGray,
        width: width(73),
        marginTop:height(2),
        alignSelf:'center'
    },
    totalChargesContainer:{
        width: width(73),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    totalChargesLabelText:{
        color:color.grayTextColor,
        fontSize:width(3.7),
    },
    totalChargesText:{
        color:color.grayTextColor,
        fontSize:width(3.6),
        fontWeight:'bold'
    },
        orderContainer:{
        backgroundColor:color.backgroundWhite,
        borderRadius:width(4),
        paddingTop:height(2),
        width:width(80),
        alignItems:'center'
    }
  });