import * as React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './ChatListContainer.styles';
import color from '../../utills/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import {SocialIcon, Avatar} from 'react-native-elements';
import {width, totalSize, height} from 'react-native-dimension';
import Colors from '../../utills/Colors';
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
  avatar = '',
  onBackPress,
  onFilterPress,
  reset = false,
  onResetPress,
  onBellPress,
}) {
  return (
    <React.Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      <SafeAreaView
        style={styles.container}
        backgroundColor={Colors.backgroundColor}
      />
      {/* <SafeAreaView style={{flex: 1}}> */}
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={styles.mainContainer}>
          {children}
        </LinearGradient>
      {/* </SafeAreaView> */}
    </React.Fragment>
  ); // <View style={[_style, style]}>{children}</View>;
}
