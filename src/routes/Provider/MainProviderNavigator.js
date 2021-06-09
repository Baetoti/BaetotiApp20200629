import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProviderTab from './ProviderTab';
import OrderDetails from '../../screens/OrderDetails/OrderDetails.Screen';
import Review from '../../screens/Review/Review.Screen';
import CurrentOrders from '../../screens/CurrentOrders/CurrentOrders.Screen';
import CreateNewOverView from '../../screens/CreateNewOverView/CreateNewOverView.screen';
import CreateNewAbout from '../../screens/CreateNewAbout/CreateNewAbout.screen';
import CreateNewGallery from '../../screens/CreateNewGallery/CreateNewGallery.screen';
import CreateNewItem from '../../screens/CreateNewItem/CreateNewItem.screen';
import CreateNewAddItem from '../../screens/CreateNewAddItem/CreateNewAddItem.screen';
import EditPostOverview from '../../screens/EditPostOverview/EditPostOverview.screen';
import EditPostAbout from '../../screens/EditPostAbout/EditPostAbout.screen';
import EditPostEditItem from '../../screens/EditPostEditItem/EditPostEditItem.screen';
import EditPostItems from '../../screens/EditPostItems/EditPostItems.screen';
import EditPostGallery from '../../screens/EditPostGallery/EditPostGallery.screen';
import SocialMedia from '../../screens/SocialMedia/SocialMedia.Screen';
import Setting from '../../screens/Setting/Setting.Screen';
import MyEarning from '../../screens/MyEarning/MyEarning.Screen';
import MyProfile from '../../screens/MyProfile/MyProfile.Screen';
import Security from '../../screens/Security/Security.Screen';
import EditProfile from '../../screens/EditProfile/EditProfile.Screen';
import EditDataProfile from '../../screens/EditDataProfile/EditDataProfile';
import ContactUs from '../../screens/ContactUs/Contactus.Screen';
import BuyerOrderReview2 from '../../screens/BuyerOrderReview2/BuyerOrderReview2.screen';
import ProviderOrderTracker from '../../screens/ProviderOrderTracker/ProviderOrderTracker';
import ProviderNotifications from '../../screens/ProviderNotifications/Notifications.Screen';
import FavouriteDriver from '../../screens/FavouriteDriver/index';
//----------------------------------------Buyer----------------------------------
import BuyerChat from '../../screens/BuyerChat/BuyerChat.screen';
import BuyerFeature from '../../screens/BuyerFeature/BuyerFeature.screen';
import BuyerCategories from '../../screens/BuyerCategories/BuyerCategories.screen';
import BuyerOnlineProvider from '../../screens/BuyerOnlineProvider/BuyerOnlineProvider.screen';
import BuyerFilters from '../../screens/BuyerFilters/BuyerFilters.screen';
import ServiceDetailOverView from '../../screens/ServiceDetailOverView/ServiceDetailOverView.Screen';
import ChangePassword from '../../screens/ChangePassword/ChangePassword.Screen';
import BuyerPendingOrders from '../../screens/BuyerPendingOreders/BuyerPendingOrders.Screen';
import BuyerProfile from '../../screens/BuyerProfile/BuyerProfile.Screen';
import PendingOrdersDetail from '../../screens/PendingOrdersDetail/PendingOrdersDetail.Screen';
import ProviderPastOrders from '../../screens/ProviderPastOrders/ProviderPastOrders.Screen'
import BuyerChatList from '../../screens/BuyerChatList/BuyerChatList.screen';
import { useSelector } from 'react-redux';
import MyWallet from '../../screens/MyWallet/MyWallet.Screen';
import About from '../../screens/About/About.Screen';
import BuyerPaymentAddBank from '../../screens/BuyerPaymentAddBank/BuyerPaymentAddBank.Screen';
import BuyerPaymentAddCard from '../../screens/BuyerPaymentAddCard/BuyerPaymentAddCard.Screen';
import BuyerPaymentWithdraw from '../../screens/BuyerPaymentWithdraw/BuyerPaymentWithdraw.Screen';
import BuyerPaymentMethod from '../../screens/BuyerPaymentMethod/BuyerPaymentMethod.Screen';
import CalculatorWithdraw from '../../screens/CalculatorWithdraw/CalculatorWithdraw.screen';
import Calculator from '../../screens/Calculator/Calculator.screen';
import Rating from '../../screens/Rating/Rating.Screen';
import OnBoardingScreen from '../../screens/OnBoardingScreen/VerificationStep3.Screen';


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

  const isStoreCreated = useSelector(state => state.Configuration.isStoreCreated)
  return (
    <Stack.Navigator initialRouteName={isStoreCreated == true ? "ProviderHome" : "CreateNewOverView"} headerMode="none">
      <Stack.Screen name="ProviderHome" component={ProviderTab} />
      <Stack.Screen name="ProviderMyPosts" component={ProviderTab} />
      <Stack.Screen name="BuyerChatList" component={ProviderTab} />
      <Stack.Screen name="CurrentOrders1" component={ProviderTab} />
      <Stack.Screen name="More" component={ProviderTab} />
      <Stack.Screen name="CurrentOrders" component={CurrentOrders} />
      <Stack.Screen name="BuyerPendingOrders" component={BuyerPendingOrders} />
      <Stack.Screen name="BuyerProfile" component={BuyerProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="EditProfile" component={EditDataProfile} />
      <Stack.Screen name="BuyerOrderReview2" component={BuyerOrderReview2} />
      <Stack.Screen name="ProviderOrderTracker" component={ProviderOrderTracker} />
      <Stack.Screen name="PendingOrdersDetail" component={PendingOrdersDetail} />
      <Stack.Screen name="ProviderPastOrders" component={ProviderPastOrders} />
      <Stack.Screen name="Rating" component={Rating} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="ProviderNotifications" component={ProviderNotifications} />
      <Stack.Screen name="ServiceDetailOverView" component={ServiceDetailOverView} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="MyEarning" component={MyEarning} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="SocialMedia" component={SocialMedia} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="FavouriteDriver" component={FavouriteDriver} />
      <Stack.Screen name="CreateNewOverView" component={CreateNewOverView} />
      <Stack.Screen name="CreateNewAbout" component={CreateNewAbout} />
      <Stack.Screen name="CreateNewGallery" component={CreateNewGallery} />
      <Stack.Screen name="CreateNewItem" component={CreateNewItem} />
      <Stack.Screen name="CreateNewAddItem" component={CreateNewAddItem} />
      <Stack.Screen name="EditPostOverview" component={EditPostOverview} />
      <Stack.Screen name="EditPostAbout" component={EditPostAbout} />
      <Stack.Screen name="EditPostEditItem" component={EditPostEditItem} />
      <Stack.Screen name="EditPostItems" component={EditPostItems} />
      <Stack.Screen name="EditPostGallery" component={EditPostGallery} />
      <Stack.Screen name="BuyerChat" component={BuyerChat} />
      <Stack.Screen name="ContactUs" component={ContactUs} />


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

      <Stack.Screen name="About" component={About} />
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
