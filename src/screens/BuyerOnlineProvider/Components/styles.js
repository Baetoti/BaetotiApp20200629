import * as React from 'react';
import { FlatList, StyleSheet, ImageBackground, View, TouchableOpacity } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import color from '../../../utills/Colors';


export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingBottom: height(5)
  },
  treatmentText: {
    padding: 30
  },
  FlatListContainer: {
    width: '47.7%',
    paddingTop: height(4),
    paddingBottom: height(2),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundWhite

  },
  logoImg: {
    width: '50%',
    height: '20%',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  startImage: {
    width: 13,
    height: 13
  },
  startText: {
    fontSize: width(2.8),
    marginLeft: '3%',
  },
  dotImage: {
    width: 3.5,
    height: 3.5,
    marginLeft: '3%'
  },
  restaurant: {
    marginTop: '5%',
    color: color.black,
    marginTop: height(1.5),
  },
  categoryText: {
    color: color.black,
    fontSize: width(2.5),
    marginLeft: 5
  }
});