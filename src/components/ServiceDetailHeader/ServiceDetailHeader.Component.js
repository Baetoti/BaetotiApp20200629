import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ServiceDetailHeader.Style';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png';
import shareImage from '../../assets/MoreAssets//share.png';
import moreBlackImage from '../../assets/OverViewDetailAssets/moreblack.png';
import EditImage from '../../assets/MoreAssets/edit.png';

const Component = ({ title, hideBack, containerStyle, onPress, onPressShowModal, isModalButton, onPressEdit ,onShare}) => {
  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      <View style={styles.leftImageContainer}>
        {!hideBack &&
          <TouchableOpacity style={styles.backButtonContainer} onPress={onPress}>
            <Image
              style={styles.arrowLeft}
              resizeMode="contain"
              source={arrowLeft}
            />
          </TouchableOpacity>}
      </View>

      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {!isModalButton ?
        <View style={styles.ImagesContainer}>
          <TouchableOpacity style={styles.shareImageContainer}
          onPress={onShare}
          >
            <Image
              resizeMode="contain"
              style={styles.shareImage}
              source={shareImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.threeDotsImageContainer}
            onPress={onPressShowModal}>
            <Image
              source={moreBlackImage}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>

        </View> :
        <View style={styles.ImagesContainer}>
          <TouchableOpacity style={styles.shareImageContainer}
          onPress={onShare}
          >
            <Image
              resizeMode="contain"
              style={styles.shareImage}
              source={shareImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareImageContainer}
            onPress={onPressEdit}>
            <Image
              resizeMode="contain"
              style={styles.shareImage}
              source={EditImage}
            />
          </TouchableOpacity>
        </View>
      }


    </View>
  );
};

export default Component;
