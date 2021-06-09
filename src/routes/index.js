import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import MainProviderNavigator from './Provider/MainProviderNavigator';
import MainBuyerNavigator from './Buyer/MainBuyerNavigator';
import MainDriverNavigator from './Driver/MainDriverNavigator';
import AuthStack from './AuthStack';
import DriverEditProfile from '../screens/DriverEditProfile/DriverEditProfile.Screen';

const Stack = createStackNavigator();
export default function Routes({}) {
  const user = useSelector(state => state.Auth.user);
  const driverDetail = useSelector(state => state.Auth.driverDetail);
  const providerDetail = useSelector(state => state.Auth.providerDetail);
  const appMode = useSelector(state => state.Auth.appMode);
  const linking = {
    prefixes: ['https://baetotiApp.com', 'baetoti://'],
  };
  return (
    <NavigationContainer linking={linking}>
      {user == null ? (
        <Stack.Navigator initialRouteName="AuthStack" headerMode={'none'}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      ) : appMode == 'buyer' ? (
        <Stack.Navigator
          initialRouteName="MainBuyerNavigator"
          headerMode="none">
          <Stack.Screen
            name="MainBuyerNavigator"
            component={MainBuyerNavigator}
          />
        </Stack.Navigator>
      ) : driverDetail == null&& appMode == 'driver' ? (
        <Stack.Navigator initialRouteName="AuthStack" headerMode={'none'}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      ) : appMode == 'provider' &&providerDetail!=null ? (
        <Stack.Navigator
          initialRouteName="MainProviderNavigator"
          headerMode="none">
          <Stack.Screen
            name="MainProviderNavigator"
            component={MainProviderNavigator}
          />
        </Stack.Navigator>
      ):
      appMode == 'provider' &&providerDetail==null ? (
              <Stack.Navigator initialRouteName="AuthStack" headerMode={'none'}>
              <Stack.Screen name="AuthStack" component={AuthStack} />
            </Stack.Navigator>
          )
       : appMode == 'driver' ? (
        <Stack.Navigator
          initialRouteName="MainDriverNavigator"
          headerMode="none">
          <Stack.Screen
            name="MainDriverNavigator"
            component={MainDriverNavigator}
          />
        </Stack.Navigator>
      ) : null}

      {/* <Stack.Navigator initialRouteName="DriverEditProfile" headerMode={"none"}>
                <Stack.Screen name="DriverEditProfile" component={DriverEditProfile} />
            </Stack.Navigator> */}
    </NavigationContainer>
  );
}
