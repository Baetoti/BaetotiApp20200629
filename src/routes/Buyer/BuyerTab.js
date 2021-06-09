import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuyerHome from '../../screens/BuyerHome/BuyerHome.screen';
import BuyerMaps from '../../screens/BuyerMaps/BuyerMaps.screen';
import BuyerChatList from '../../screens/BuyerChatList/BuyerChatList.screen';
import MyCart from '../../screens/MyCart/MyCart.Screen';
import { width, height, totalSize } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BuyerMore from '../../screens/BuyerMore/BuyerMore.Screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../utills/Colors';
import styles from './BuyerTab.styles'
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
            style={[styles.singleItemContainer, { width: index == 2 ? width(28) : width(18) }]}>

            <>
              {index == 0 && (
                <Feather
                  name="home"
                  size={isFocused ? 32 : 28}
                  color={isFocused ? color.black : color.gray}
                />
              )}
              {index == 1 && (
                isFocused?(<Image
                source={require('../../assets/buyerHome/map-active.png')}
                style={styles.activeLogoImg}
                resizeMode={"contain"}
              />):(<Image
                source={require('../../assets/buyerHome/map.png')}
                style={styles.logoImg}
                resizeMode={"contain"}
              />)
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
              {index == 3 && (
                <AntDesign
                  name="shoppingcart"
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
              {(isFocused&& index != 4) && <View
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
    <Tab.Screen name="BuyerHome" component={BuyerHome} />
    <Tab.Screen name="BuyerMaps" component={BuyerMaps} />
    <Tab.Screen name="BuyerChatList" component={BuyerChatList} />
    <Tab.Screen name="MyCart" component={MyCart} />
    <Tab.Screen name="BuyerMore" component={BuyerMore} />
  </Tab.Navigator>
);

export default HomeTab;
