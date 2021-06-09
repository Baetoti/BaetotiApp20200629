import * as React from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './MapsContainer.styles';
import LinearGradient from 'react-native-linear-gradient';
import { width, height } from 'react-native-dimension';
import Colors from '../../utills/Colors'
import Search from '../../screens/BuyerMaps/Components/TextInput';
import { useSelector } from 'react-redux';
/* =============================================================================
<Container />
============================================================================= */
export default function BuyerHomeContainer({
  children,
  backgroundColor,
  title,
  back = false,
  filter = false,
  bell = false,
  avatar,
  onBackPress,
  onFilterPress,
  reset = false,
  orderId,
  onResetPress,
  onBellPress,
  search,
  searchPlaceHolder
}) 
{
  const languageJson = useSelector(state => state.Language.languageJson.MapTracking)
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={{height:height(100),width:width(100)}}>
        <LinearGradient
        // locations={[0.2,0.4,0.9]}
          colors={["#FCEAE6", '#FCEAE6',"rgba(252,245,237,0.5)",'rgba(252,245,237,0.5)','rgba(255,255,255,0.0)']}
          style={styles.mainContainer}>
          <View style={[styles.header]}>
            {!back && !avatar && (
              <View style={[styles.icon, { backgroundColor: 'transparent' }]} />
            )}
            {back && (
              <TouchableOpacity onPress={onBackPress} style={styles.icon}>
                <Image
                  source={require('../../assets/DriverHome/arrow-left-grey.png')}
                  style={styles.backImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {avatar && (
              <TouchableOpacity onPress={onBackPress}>
                   <Image
                  source={avatar}
                  style={styles.avatar}
                  // resizeMode="contain"
                />
                {/* <Avatar
                  size={totalSize(4.5)}
                  rounded
                  source={avatar}
                  activeOpacity={0.7}
                  containerStyle={styles.avatar}
                /> */}
              </TouchableOpacity>
            )}
            {/* heading */}
            <View>
            <Text style={styles.headerHeading}>{title}</Text>
           {orderId&&<Text style={styles.orderId}>{languageJson.OrderID_Label}</Text>}
            </View>
            {bell && (
              <TouchableOpacity onPress={onBellPress} style={styles.icon}>
                {/* <Image
                  source={require('../../assets/buyerHome/blue.png')}
                  style={styles.dotImage}
                /> */}
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
                <Text style={styles.reset}>Reset</Text>
              </TouchableOpacity>
            )}
            {!filter && !bell && !reset && (
              <View style={[styles.icon, { backgroundColor: 'transparent' }]} />
            )}
          </View>
       {search&&   <Search placeHolder={searchPlaceHolder} search={search} />}
        </LinearGradient>
        <View style={{flex:1}}>{children}</View>
      </SafeAreaView>
      
    </React.Fragment>
  ); // <View style={[_style, style]}>{children}</View>;
}
