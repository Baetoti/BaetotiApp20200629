import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './BuyerHomeContainer.styles';

import LinearGradient from 'react-native-linear-gradient';
import {  useSelector } from 'react-redux';
/* =============================================================================
<Container />
============================================================================= */
export default function BuyerHomeContainer({
  noSearch,
  children,
  backgroundColor,
  title,
  back = false,
  filter = false,
  bell = false,
  avatar = '',
  onBackPress,
  onFilterPress,
  reset = false,
  onResetPress,
  onBellPress,
  nearme
}) 
{
  const languageJson = useSelector(state => state.Language.languageJson.Filter_Screen)
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={'#FCEAE6'} />
      <SafeAreaView style={styles.container} backgroundColor={'#FCEAE6'} />
      <SafeAreaView>
        <LinearGradient
          colors={[ '#FCEAE6', '#F9ECDC', '#F9ECDC','#F6F6F6']}
          style={styles.mainContainer}>
          {noSearch?null:<View style={[styles.header]}>
            {!back && !avatar && (
              <View style={[styles.icon, { backgroundColor: 'transparent' }]} />
            )}
            {back && (
              <TouchableOpacity onPress={onBackPress} style={styles.icon}>
                <Image
                  source={require('../../assets/buyerHome/arrow-left.png')}
                  style={styles.backImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            <View style={{flexDirection:"row",alignItems:"center"}}>

            {
              nearme?nearme:null
            }

            {avatar !== '' && (
              <TouchableOpacity onPress={onBackPress} style={styles.avatarImageContainer}>
                {/* <Avatar
                  size={totalSize(4.5)}
                  rounded
                  source={{ uri: avatar }}
                  activeOpacity={0.7}
                  containerStyle={styles.avatar}
                /> */}
                 <Image
                  source={avatar}
                  resizeMode='cover'
                  style={styles.avatarImage}
                />
              </TouchableOpacity>
            )}

            </View>
            {/* heading */}
            <Text style={styles.headerHeading}>{title}</Text>

            {bell && (
              <TouchableOpacity onPress={onBellPress} style={styles.icon}>
                <Image
                  source={require('../../assets/buyerHome/blue.png')}
                  style={styles.dotImage}
                />
                <Image
                  source={require('../../assets/buyerHome/bell.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            )}
            {filter && (
              <TouchableOpacity onPress={onFilterPress} style={styles.icon}>
                <Image
                  source={require('../../assets/buyerHome/filter.png')}
                  style={styles.backImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {reset && (
              <TouchableOpacity onPress={onResetPress} style={styles.icon, { backgroundColor: 'transparent' }}>
                <Text style={styles.reset}>{languageJson.Reset_Button}</Text>
              </TouchableOpacity>
            )}
            {!filter && !bell && !reset && (
              <View style={[styles.icon, { backgroundColor: 'transparent' }]} />
            )}
          </View>}
          <View>{children}</View>
        </LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  ); // <View style={[_style, style]}>{children}</View>;
}
