import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login.screen';
import LoginPhone from '../screens/LoginPhone/LoginPhone.screen';
import SignUp from '../screens/SignUp/SignUp.Screen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword.Screen';
import PhoneVerification from '../screens/PhoneVerification/PhoneVerification.Screen';
import VerificationStep1 from '../screens/VerificationStep1/VerificationStep1.Screen';
import VerificationStep2 from '../screens/VerificationStep2/VerificationStep2.Screen';
import VerificationStep3 from '../screens/VerificationStep3/VerificationStep3.Screen';
import DriverLogin from '../screens/DriverLogin/DriverLogin.Screen';
import DriverForgot from '../screens/DriverForgot/DriverForgot.Screen';
import DriverSignUp from '../screens/DriverSignUp/DriverSignUp.Screen';
import VerificationDriver from '../screens/VerificationDriver/VerificationDriver.screen';
import Testing from '../screens/Testing//Testing'
import { useSelector } from 'react-redux';
import EditProfile from '../screens/EditProfile/EditProfile.Screen';
import EditDataProfile from '../screens/EditDataProfile/EditDataProfile';
import ProviderVerification1 from '../screens/ProviderVerification1/VerificationStep1.Screen';
import ProviderVerification2 from '../screens/ProviderVerification2/VerificationStep2.Screen';
import ProviderVerification3 from '../screens/ProviderVerification3/VerificationStep3.Screen';

const Stack = createStackNavigator();
export default function Routes({ }) {
  const appMode = useSelector(state => state.Auth.appMode)
  return (
    <>
      {/* {appMode == 'buyer' ? */}
        <Stack.Navigator headerMode="none">
          {/* <Stack.Screen name="LoginPhone" component={LoginPhone} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
          <Stack.Screen name="VerificationStep1" component={VerificationStep1} />
          <Stack.Screen name="VerificationStep2" component={VerificationStep2} />
          <Stack.Screen name="VerificationStep3" component={VerificationStep3} />
        </Stack.Navigator> :
        <Stack.Navigator headerMode="none" initialRouteName='VerificationStep1'>
          <Stack.Screen name="DriverLogin" component={DriverLogin} />
          <Stack.Screen name="DriverForgot" component={DriverForgot} />
          <Stack.Screen name="DriverSignUp" component={DriverSignUp} />
          <Stack.Screen name="VerificationDriver" component={VerificationDriver} />
          <Stack.Screen name="EditDataProfile" component={EditDataProfile} />
          {
            appMode == 'provider' ? <>
              <Stack.Screen name="VerificationStep1" component={ProviderVerification1} />
              <Stack.Screen name="VerificationStep2" component={ProviderVerification2} />
              <Stack.Screen name="VerificationStep3" component={ProviderVerification3} />
            </> :
              <> */}
                <Stack.Screen name="VerificationStep1" component={VerificationStep1} />
                <Stack.Screen name="VerificationStep2" component={VerificationStep2} />
                <Stack.Screen name="VerificationStep3" component={VerificationStep3} />
              {/* </>

          } */}

        </Stack.Navigator>
    {/* //   } */}
      </>
  );
}
