import React, { } from 'react';
import { createStackNavigator ,CardStyleInterpolators } from '@react-navigation/stack';
import BuyerTab from './BuyerTab'
import OrderDetails from '../../screens/OrderDetails/OrderDetails.Screen';
import Review from '../../screens/Review/Review.Screen';
import PaymentPayNow from '../../screens/Payment-PayNow/Payment-PayNow.Screen';
import CreateNewAbout from '../../screens/CreateNewAbout/CreateNewAbout.screen';
import BuyerCurrentOrders from '../../screens/BuyerCurrentOrders/BuyerCurrentOrders.Screen';
import CompleteOrder from '../../screens/CompleteOrder/CompleteOrder.Screen';
import BuyerOrderReview from '../../screens/BuyerOrderReview/BuyerOrderReview.screen';
import OrderQRCode from '../../screens/OrderQRCode/OrderQRCode.Screen';
import Success from '../../screens/Success/Success.screen';
import Notifications from '../../screens/Notifications/Notifications.Screen';
import MyOrders from '../../screens/MyOrders/MyOrders.Screen';
import BuyerPayment from '../../screens/BuyerPayment/BuyerPayment.Screen';
import Faliure from '../../screens/Faliure/Faliure.screen';
import SocialMedia from '../../screens/SocialMedia/SocialMedia.Screen';
import Setting from '../../screens/BuyerSetting/BuyerSetting.Screen';
import MyEarning from '../../screens/MyEarning/MyEarning.Screen';
import MyProfile from '../../screens/MyProfile/MyProfile.Screen';
import SignUp from '../../screens/SignUp/SignUp.Screen'

import NearMe_Screen from '../../screens/BuyerHome/NearMe_Screen';

import EditProfile from '../../screens/EditProfile/EditProfile.Screen';
import Security from '../../screens/Security/Security.Screen'
//----------------------------------------Buyer----------------------------------
import About from '../../screens/About/About.Screen';
import BuyerPaymentAddBank from '../../screens/BuyerPaymentAddBank/BuyerPaymentAddBank.Screen';
import BuyerPaymentAddCard from '../../screens/BuyerPaymentAddCard/BuyerPaymentAddCard.Screen';
import BuyerPaymentWithdraw from '../../screens/BuyerPaymentWithdraw/BuyerPaymentWithdraw.Screen';
import BuyerPaymentMethod from '../../screens/BuyerPaymentMethod/BuyerPaymentMethod.Screen';
import CalculatorWithdraw from '../../screens/CalculatorWithdraw/CalculatorWithdraw.screen';
import Calculator from '../../screens/Calculator/Calculator.screen';
import MyWallet from '../../screens/MyWallet/MyWallet.Screen';
import BuyerChat from '../../screens/BuyerChat/BuyerChat.screen';
import BuyerFeature from '../../screens/BuyerFeature/BuyerFeature.screen';
import BuyerOrderReview2 from '../../screens/BuyerOrderReview2/BuyerOrderReview2.screen';
import BuyerCategories from '../../screens/BuyerCategories/BuyerCategories.screen';
import BuyerOnlineProvider from '../../screens/BuyerOnlineProvider/BuyerOnlineProvider.screen';
import BuyerFilters from '../../screens/BuyerFilters/BuyerFilters.screen';
import ServiceDetailOverView from '../../screens/ServiceDetailOverView/ServiceDetailOverView.Screen';
import ChangePassword from '../../screens/ChangePassword/ChangePassword.Screen';
import BuyerPendingOrders from '../../screens/BuyerPendingOreders/BuyerPendingOrders.Screen';
import BuyerOrderTracking from '../../screens/BuyerOrderTracking/BuyerOrderTracking.screen';
import BuyerProfile from '../../screens/BuyerProfile/BuyerProfile.Screen';
import EditDataProfile from '../../screens/EditDataProfile/EditDataProfile';
import ContactUs from '../../screens/ContactUs/Contactus.Screen';
import BuyerOrderReview3 from '../../screens/BuyerOrderReview3/BuyerOrderReview3';
import BuyerTrackOrder from '../../screens/BuyerTrackOrder/BuyerTrackOrder.Screen';
import BuyerFavourites from '../../screens/BuyerFavourites/BuyerFavourite';
import Search from '../../screens/Search/Search.Screen';
import Rating from '../../screens/Rating/Rating.Screen';
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
import Cart from '../../screens/Cart/index';
import { useSelector } from 'react-redux';
import { ImageComponent } from 'react-native';


const Stack = createStackNavigator();
export default function Routes({ }) {
    const user = useSelector(state => state.Auth.user)
    return (
        <Stack.Navigator initialRouteName="BuyerHome" headerMode="none">
            <Stack.Screen name="BuyerHome" component={BuyerTab} />
            <Stack.Screen name="BuyerMaps" component={BuyerTab} />
            <Stack.Screen name="BuyerChatList" component={BuyerTab} />
            <Stack.Screen name="MyCart" component={BuyerTab} />
            <Stack.Screen name="More" component={BuyerTab} />
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
            <Stack.Screen name="BuyerOrderReview" component={BuyerOrderReview} />
            <Stack.Screen name="BuyerProfile" component={BuyerProfile} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Security" component={Security} />
            <Stack.Screen name="ServiceDetailOverView" component={ServiceDetailOverView} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="MyEarning" component={MyEarning} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="SocialMedia" component={SocialMedia} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="BuyerCurrentOrders" component={BuyerCurrentOrders} />
            <Stack.Screen name="CreateNewAbout" component={CreateNewAbout} />
            <Stack.Screen name="BuyerPendingOrders" component={BuyerPendingOrders} />
            <Stack.Screen name="OrderQRCode" component={OrderQRCode} />
            <Stack.Screen name="Success" component={Success} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
            <Stack.Screen name="BuyerPayment" component={BuyerPayment} />
            <Stack.Screen name="Failure" component={Faliure} />
            <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
            <Stack.Screen name="BuyerOrderReview2" component={BuyerOrderReview2} />
            <Stack.Screen name="BuyerPaymentAddCard" component={BuyerPaymentAddCard} />
            <Stack.Screen name="BuyerOrderTracking" component={BuyerOrderTracking} />
            <Stack.Screen name="EditProfile" component={EditDataProfile} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="BuyerFavourites" component={BuyerFavourites} />
            <Stack.Screen name="BuyerOrderReview3" component={BuyerOrderReview3} />
            <Stack.Screen name="BuyerTrackOrder" component={BuyerTrackOrder} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Rating" component={Rating} />
            <Stack.Screen name="Cart" component={Cart} />

            <Stack.Screen name="NearMe_Screen" component={NearMe_Screen} />
            {/* 
                * Buyer Home Screens
                 */ }
            <Stack.Screen name="BuyerFeature" component={BuyerFeature} />
            <Stack.Screen name="PaymentPayNow" component={PaymentPayNow} />
            <Stack.Screen name="BuyerCategories" component={BuyerCategories} />
            <Stack.Screen name="BuyerOnlineProvider" component={BuyerOnlineProvider} />
            <Stack.Screen name="BuyerFilters" component={BuyerFilters}  options={{ gestureEnabled: false }}  />
            <Stack.Screen name="BuyerChat" component={BuyerChat} />

            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="BuyerPaymentAddBank" component={BuyerPaymentAddBank} />
            <Stack.Screen name="BuyerPaymentWithdraw" component={BuyerPaymentWithdraw} />
            <Stack.Screen name="CalculatorWithdraw" component={CalculatorWithdraw} />
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="MyWallet" component={MyWallet} />
            <Stack.Screen name="BuyerPaymentMethod" component={BuyerPaymentMethod} />

            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
