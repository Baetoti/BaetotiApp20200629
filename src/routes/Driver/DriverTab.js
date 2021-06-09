import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DriverMapsHome from '../../screens/DriverMapsHome/DriverMapsHome.screen';
import BuyerChatList from '../../screens/BuyerChatList/BuyerChatList.screen';
import OrderRequest from '../../screens/OrderRequest/OrderRequest.Screen';
import { width } from 'react-native-dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DriverMore from '../../screens/DriverMore/DriverMore.Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../utills/Colors';
import styles from './DriverTab.styles'
const Tab = createBottomTabNavigator();
import { View, Text, TouchableOpacity, Image } from 'react-native';

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={styles.tabBar}>
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
            style={[styles.singleItemContainer]}>

            <>
              {index == 0 && (
                <Feather
                  name="home"
                  size={isFocused ? 32 : 28}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {index == 2 && (
                   isFocused?(<Image
                    source={require('../../assets/buyerHome/chat-active.png')}
                    style={styles.activeLogoImg}
                    resizeMode={"contain"}
                  />):(<Image
                    source={require('../../assets/buyerHome/chat.png')}
                    style={styles.logoImg}
                    resizeMode={"contain"}
                  />)
              )}
               {index == 1 && (
                <Ionicons
                  name="document-text-outline"
                  size={isFocused ? 31 : 27}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {index == 3 && (
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={isFocused ? 32 : 28}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {(isFocused) && <View
                style={styles.smallDot}
              />}
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = () => (
  <Tab.Navigator
    initialRouteName="BuyerHome"
    tabBar={props => <MyTabBar {...props} />}>
    <Tab.Screen name="DriverMapsHome" component={DriverMapsHome} />
    <Tab.Screen name="OrderRequest" component={OrderRequest} />
    <Tab.Screen name="BuyerChatList" component={BuyerChatList} />
    <Tab.Screen name="DriverMore" component={DriverMore} />
  </Tab.Navigator>
);

export default HomeTab;
