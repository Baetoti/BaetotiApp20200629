import * as React from 'react';
import {FlatList, StyleSheet, ImageBackground,View,TouchableOpacity} from 'react-native';
import { width, height,totalSize } from 'react-native-dimension';
import color from '../../../utills/Colors';


export default  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      paddingBottom: height(5)
    },
    treatmentText:{
      padding:30
    },
    imageBackground:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    FlatListContainer:{
        width:'47.7%',
        height:height(25.5),
       borderRadius:15,
       justifyContent:'flex-end'

    },
    imageStyles:{
        borderRadius:15,
        width:'100%',
        height:'100%',
    },
    bottomContainerImageBackground:{
        height:'40%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    },
    titleText:{
        color:color.backgroundWhite
    }
  });