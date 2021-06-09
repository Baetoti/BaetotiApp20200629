import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './NotificationHeader.Style';
import arrowLeft from '../../assets/HomeAssets/arrow-leftcopy.png';
import { useSelector } from 'react-redux';
const Component = ({
  containerStyle,
  onPressBack,
  onPressClear,
  titlecontainerStyle,
  hideClearButton,
}) => {
  const languageJson = useSelector(state => state.Language.languageJson.Driver_Notification_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)

  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={onPressBack}>
          <Image
            style={styles.arrowLeft}
            resizeMode="contain"
            source={arrowLeft}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={[
            styles.titleText,
            titlecontainerStyle ? titlecontainerStyle : {},
          ]}>
          {languageJson.Notifications_Title}
        </Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={hideClearButton ? () => { } : onPressClear}>
          <Text style={styles.clearText}>{hideClearButton ? '' :
            languageJson.Clear_Button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component;
