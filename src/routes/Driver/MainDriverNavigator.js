import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriverTab from './DriverTab'
import Security from '../../screens/Security/Security.Screen'
import About from '../../screens/About/About.Screen';
import ChangePassword from '../../screens/ChangePassword/ChangePassword.Screen';
import BuyerChat from '../../screens/BuyerChat/BuyerChat.screen';
import AllDeliveries from '../../screens/AllDeliveries/AllDeliveries.Screen';
import OrderDetails from '../../screens/OrderDetails/OrderDetails.Screen';
import DriverMapTraking from '../../screens/DriverMapTraking/DriverMapTraking.screen';
import BuyerOrderReview2 from '../../screens/BuyerOrderReview2/BuyerOrderReview2.screen';
import OrderQRCode from '../../screens/OrderQRCode/OrderQRCode.Screen';
import AllDeliveriesOrderDetails from '../../screens/AllDeliveriesOrderDetails/AllDeliveriesOrderDetails.Screeen';
import PendingOrderDetails from '../../screens/PendingOrderDetails/PendingOrderDetails.Screen';
import DriverNotifications from '../../screens/DriverNotifications/DriverNotifications.Screen';
import CurrentDeliveriesOrderDetails from '../../screens/CurrentDeliveriesOrderDetails/CurrentDeliveriesOrderDetails.Screen';
import DriverMyBalance from '../../screens/DriverMyBalance/DriverMyBalance.Screen';
import DriverProfile from '../../screens/DriverProfile/DriverProfile.Screen';
import DriverEditProfile from '../../screens/DriverEditProfile/DriverEditProfile.Screen';
import ContactUs from '../../screens/ContactUs/Contactus.Screen';
import MyEarning from '../../screens/MyEarning/MyEarning.Screen';
import DriverSetting from '../../screens/DriverSetting/DriverSetting.Screen';
import { useSelector } from 'react-redux'
import MyWallet from '../../screens/MyWallet/MyWallet.Screen';
// import About from '../../screens/About/About.Screen';
import BuyerPaymentAddBank from '../../screens/BuyerPaymentAddBank/BuyerPaymentAddBank.Screen';
import BuyerPaymentAddCard from '../../screens/BuyerPaymentAddCard/BuyerPaymentAddCard.Screen';
import BuyerPaymentWithdraw from '../../screens/BuyerPaymentWithdraw/BuyerPaymentWithdraw.Screen';
import BuyerPaymentMethod from '../../screens/BuyerPaymentMethod/BuyerPaymentMethod.Screen';
import CalculatorWithdraw from '../../screens/CalculatorWithdraw/CalculatorWithdraw.screen';
import Calculator from '../../screens/Calculator/Calculator.screen';
import DriverOrderAccept from '../../screens/DriverOrderAccept/DriverOrderAccept';
import DriverTrackOrder from '../../screens/DriverTrackOrder';

import HelpCenter from '../../screens/HelpCenter/HelpCenter.screen';
import HelpCenterSuggestion from '../../screens/HelpCenterSuggestion';
import FAQ from '../../screens/FAQ/Faq.Screen';
import FaqQuestionDetails from '../../screens/FAQQuestionDetails/FaqQuestion.Screen';
import FAQAnswers from '../../screens/FAQAnswers/FaqAnswer.screen';
import Thankyou from '../../screens/Thankyou/Thankyou.Screen';
import Vouchers from '../../screens/Vouchers/Vouchers.screen';
import VouchersAnswer from '../../screens/VouchersAnswer/vouecherAnswer.screen';
import MakingPayment from '../../screens/MakingPayment/MakingPayment.Screen';
import MakingPaymentAnswer from '../../screens/MakingPaymentAnswer/PaymnetAnswer.screen';
import MyAccount from '../../screens/MyAccount/MyAccount.Screen';
import MyAccountAnswer from '../../screens/MyAccountAnswer/myAccountAnswer.Screen';
import SafetyConcern from '../../screens/SafetyConcern/SafetyConcernQuestion.Screen';
import HelpCenterMyOrders from '../../screens/HelpCenterMyOrders/index';
import HelpCenterAnotherOrder from '../../screens/HelpCenterAnotherOrder/index';
import HelpCenterOrderReport from '../../screens/HelpCenterOrderReport';
import MySupportRequest from '../../screens/MySupportRequest/index';
import MySupportRequestDetail from '../../screens/MySupportRequestDetail/index';

const Stack = createStackNavigator();
export default function Routes({ }) {
    const user = useSelector(state => state.Auth.user)
    return (
        <Stack.Navigator initialRouteName="BuyerHome" headerMode="none">
            <Stack.Screen name="DriverMapsHome" component={DriverTab} />
            <Stack.Screen name="OrderRequest" component={DriverTab} />
            <Stack.Screen name="BuyerChatList" component={DriverTab} />
            <Stack.Screen name="DriverMore" component={DriverTab} />
            <Stack.Screen name="BuyerChat" component={BuyerChat} />
            <Stack.Screen name="AllDeliveries" component={AllDeliveries} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="DriverMapTraking" component={DriverMapTraking} />
            <Stack.Screen name="BuyerOrderReview2" component={BuyerOrderReview2} />
            <Stack.Screen name="OrderQRCode" component={OrderQRCode} />
            <Stack.Screen name="AllDeliveriesOrderDetails" component={AllDeliveriesOrderDetails} />
            <Stack.Screen name="PendingOrderDetails" component={PendingOrderDetails} />
            <Stack.Screen name="DriverNotifications" component={DriverNotifications} />
            <Stack.Screen name="CurrentDeliveriesOrderDetails" component={CurrentDeliveriesOrderDetails} />
            <Stack.Screen name="DriverMyBalance" component={DriverMyBalance} />
            <Stack.Screen name="DriverProfile" component={DriverProfile} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="DriverEditProfile" component={DriverEditProfile} />
            <Stack.Screen name="DriverSetting" component={DriverSetting} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="DriverTrackOrder" component={DriverTrackOrder} />
            <Stack.Screen name="MyEarning" component={MyEarning} />
            <Stack.Screen name="DriverOrderAccept" component={DriverOrderAccept} />


            <Stack.Screen name="HelpCenter" component={HelpCenter} />
            <Stack.Screen name="FAQ" component={FAQ} />
            <Stack.Screen name="FaqQuestionDetails" component={FaqQuestionDetails} />
            <Stack.Screen name="FAQAnswers" component={FAQAnswers} />
            <Stack.Screen name="Thankyou" component={Thankyou} />
            <Stack.Screen name="Vouchers" component={Vouchers} />
            <Stack.Screen name="VouchersAnswer" component={VouchersAnswer} />
            <Stack.Screen name="MakingPayment" component={MakingPayment} />
            <Stack.Screen name="MakingPaymentAnswer" component={MakingPaymentAnswer} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="MyAccountAnswer" component={MyAccountAnswer} />
            <Stack.Screen name="SafetyConcern" component={SafetyConcern} />
            <Stack.Screen name="HelpCenterMyOrders" component={HelpCenterMyOrders} />
            <Stack.Screen name="HelpCenterAnotherOrder" component={HelpCenterAnotherOrder} />
            <Stack.Screen name="HelpCenterOrderReport" component={HelpCenterOrderReport} />
            <Stack.Screen name="HelpCenterSuggestion" component={HelpCenterSuggestion} />
            <Stack.Screen name="MySupportRequest" component={MySupportRequest} />
            <Stack.Screen name="MySupportRequestDetail" component={MySupportRequestDetail} />
            

      {/* <Stack.Screen name="About" component={About} /> */}
            <Stack.Screen name="BuyerPaymentAddBank" component={BuyerPaymentAddBank} />
            <Stack.Screen name="BuyerPaymentWithdraw" component={BuyerPaymentWithdraw} />
            <Stack.Screen name="CalculatorWithdraw" component={CalculatorWithdraw} />
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="MyWallet" component={MyWallet} />
            <Stack.Screen name="BuyerPaymentMethod" component={BuyerPaymentMethod} />
            <Stack.Screen name="BuyerPaymentAddCard" component={BuyerPaymentAddCard} />
        </Stack.Navigator>
    );
}
