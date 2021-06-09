import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './HeaderAddNew.Styles';
const Component = ({
  title,
  containerStyle,
  titleStyle,
  backIconContainerStyle,
  backIconStyle,
  hideRightIcon,
  optionsIcon,
  onPressBack,
  onPressRight,
  whiteBackIcon
}) => {

  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
     
     <TouchableOpacity onPress={onPressBack}
        style={[styles.backIconContainer, backIconContainerStyle ? backIconContainerStyle : {}]}>
        <Image style={[styles.backIcon, backIconStyle ? backIconStyle : {}]}
          source={!whiteBackIcon ?
            require('../../assets/AddNewAssets/arrow-left.png') :
            require('../../assets/BuyerOrderDetails/arrow-left-white.png')} />
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle ? titleStyle : {}]}>{title}</Text>
      <TouchableOpacity style={styles.trashIconContainer} onPress={onPressRight}>
        {hideRightIcon ? null :
          optionsIcon ?
            <Image style={styles.optionsIcon} source={require('../../assets/BuyerMore/more-white.png')} />
            :
            <Image style={styles.trashIcon} source={require('../../assets/AddNewAssets/trash.png')} />
        }
      </TouchableOpacity>
    </View>
  )
};

export default Component;
