import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './HeaderMyPost.Styles';

const Component = ({
  title,
  profileImage,
  containerStyle,
  titleStyle,
  onPressLeftIcon,
  onPressMostRightIcon,
  onPressRightIcon,
}) => {
  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      {profileImage?<TouchableOpacity onPress={onPressLeftIcon} style={styles.leftImageContainer}>
        <ImageBackground
          style={styles.profileImage}
          source={{ uri: profileImage }}
          resizeMode={"cover"} /></TouchableOpacity>:<View  style={styles.emptyView} />}
      <Text style={[styles.title, titleStyle ? titleStyle : {}]}>{title}</Text>
      <View style={styles.rightIconsContainer}>
        {/* <TouchableOpacity style={styles.trashIconContainer} onPress={onPressRightIcon}>
          <Image style={styles.searchIcon} source={require('../../assets/MyPostAssets/search.png')} />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.plusIconContainer} onPress={onPressMostRightIcon}>
          <Image style={styles.trashIcon} source={require('../../assets/MyPostAssets/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default Component;
