import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentOrders from '../../screens/CurrentOrders/CurrentOrders.Screen';
import ProviderChatList from '../../screens/ProviderChatList/ProviderChatList.screen';
import ProviderMyPosts from '../../screens/ProviderMyPosts/ProviderMyPosts.screen';
import devel from '../../screens/ProviderChatlist.js/ProviderChalist.screen';
import ProviderHome from '../../screens/ProviderHome/ProviderHome.Screen';
import { width, height, totalSize } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import More from '../../screens/More/More.Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../utills/Colors';
import styles from './ProviderTab.styles';
import ProviderStore from '../../screens/ProviderStore/ProviderStore.Screen';
import BuyerChatList from '../../screens/BuyerChatList/BuyerChatList.screen';
import Svg,{Path,G} from 'react-native-svg';
const Tab = createBottomTabNavigator();
import { View, Text, TouchableOpacity, Image } from 'react-native';

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
// console.log(height(100))
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const originalWidth = 1092;
  const originalHeight = 260;
  return (
    <>
    <View style={styles.tabBarSvg}/>
    <Svg
    version="1.1" id="bottom-bar" height={(height(15)*width(100))/width(100)}  width="100%"  viewBox={`0 0 ${originalWidth} ${originalHeight}`} space="preserve"
    // fill='white'
    style={styles.tabBarSvg}
    // viewBox="0, 0, 1092, 260"
     > 
        <Path
        d={ `M30,60h${357}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${675}.7,74.5,${689}.5,60,${706}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
        fill="white"
        // stroke="white"
        
    />
    {/* <Circle cx='546' cy='100' r='100' fill='#f6f6f6' /> */}
        
    </Svg>
    {/* </View> */}
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.singleItemContainer, { width: index == 2 ? width(28) : width(18) }]}>

            <>
              {index == 0 && (
                <AntDesign
                  name="appstore-o"
                  size={isFocused ? 32 : 28}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {index == 1 && (
                isFocused ? (<Image
                  source={require('../../assets/buyerHome/chat-active.png')}
                  style={styles.activeLogoImg}
                  resizeMode={"contain"}
                />) : (<Image
                  source={require('../../assets/buyerHome/chat.png')}
                  style={styles.logoImgInactive}
                  resizeMode={"contain"}
                />)
              )}
              {index == 2 && (
                // <View style={styles.curveContainer}>
                //   <View style={styles.curveBorder}>
                    <View
                      style={[styles.logoContainer,]}>
                      <Image
                        source={require('../../assets/Login/baetoti-black-logo.png')}
                        style={styles.logoImg}
                        resizeMode={"contain"}
                      />
                    </View>
                //   </View>
                // </View>

              )}
              {index == 3 && (
                <Ionicons
                  name="document-text-outline"
                  size={isFocused ? 32 : 28}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {index == 4 && (
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={isFocused ? 32 : 28}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {(isFocused && index != 2 && index != 4) && <View
                style={styles.smallDot}
              />}
            </>
          </TouchableOpacity>
        );
      })}
      </View>
    </>
  );
}

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = () => (
  <Tab.Navigator
    initialRouteName="ProfileStack"
    tabBar={props => <MyTabBar {...props} />}>
    <Tab.Screen name="ProviderHome" component={ProviderHome} />
    <Tab.Screen name="BuyerChatList" component={BuyerChatList} />
    <Tab.Screen name="ProfileStack" component={ProviderStore} />
    <Tab.Screen name="CurrentOrders1" component={CurrentOrders} />
    <Tab.Screen name="More" component={More} />
  </Tab.Navigator>
);

export default HomeTab;
