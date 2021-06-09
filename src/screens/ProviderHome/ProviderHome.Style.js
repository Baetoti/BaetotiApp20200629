import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  HeaderContainer: {
    paddingVertical: height(2),
    flexDirection: 'row',
    width: width(100),
    paddingHorizontal: width(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.darkBackground,
  },
  headerIconContainer: {
    flexDirection: 'row',
    width: width(22),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeIcon: {
    width: width(6),
    height: width(6),
    resizeMode: 'contain',
    tintColor: Colors.backgroundWhite,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  phoneButtonContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2.25),
    backgroundColor: Colors.purplePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width(1),
  },
  chatButtonContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2.25),
    backgroundColor: Colors.opacitiveLightGray,
    justifyContent: 'center',
    marginRight: width(1),
    alignItems: 'center',
  },
  chatImage: {
    height: height(2),
    width: height(2),
    resizeMode: 'contain'
  },
  dotIcon: {
    width: width(1.4),
    position: 'absolute',
    height: width(1.4),
    resizeMode: 'contain',
    top: width(2),
    right: width(3.5),
  },
  bellIcon: {
    width: width(6),
    height: width(6),
    resizeMode: 'contain',
    tintColor: Colors.backgroundWhite,
  },
  avatar: {
    width: width(12),
    height: width(12),
    borderRadius: width(5),
    borderWidth: width(1),
    borderColor: Colors.backgroundWhite,
  },
  bellcontainer: {
    padding: width(2.75),
    borderRadius: width(5),
    backgroundColor: Colors.opacitiveBlue,
  },
  providerText: {
    color: Colors.purplePrimary,
    fontSize: width(3),
    textAlign: 'center',
    paddingTop: height(0.7),
    paddingHorizontal: width(2)
  },
  card: {
    paddingTop: height(2),
    paddingRight: width(7),
    width: width(90),
    alignSelf: 'center',
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(4),
    marginTop: height(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: width(7),
    color: Colors.textBlack,
  },
  balance: {
    fontSize: width(3),
    textAlign: 'right',
    color: Colors.grayDarker,
  },
  walletIcon: {
    width: width(40),
    height:  width(20),
  },
  dashboardText: {
    color: Colors.backgroundWhite,
    fontSize: width(5),
    textAlign: 'center',
  },
  renderTabFooter: {
    width: totalSize(0.5),
    height: totalSize(0.5),
    borderRadius: totalSize(0.25),
    backgroundColor: Colors.purplePrimary,
    marginTop: height(1.5),
  },
  graphLabel: {
    color: Colors.backgroundWhite,
    paddingLeft: width(2.5),
    fontSize: width(4),
  },
  graphDot: {
    width: width(2.5),
    height: width(2.5),
    borderRadius: width(2),
    backgroundColor: '#dc44a8',
  },
  graphLabelContainer: {
    width: width(45),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height(2),
  },
  graphLabelView: { flexDirection: 'row', alignItems: 'center' },
  containerStyle: {
    marginTop: Platform.OS == 'ios' ? 0 : height(3),
  },
  tabContainer: {
    marginTop: height(2),
    marginLeft: width(8),
  },
  tabtextStyle: {
    fontWeight: 'bold',
    fontSize: width(4),
  },
  tabInnerContainer: {
    alignItems: 'center',
  },
  selectedTab: {
    color: Colors.textBlack,
  },
  unSelectedTab: {
    color: Colors.gray,
  },
  graphCardContainer: {
    width: width(90),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -height(8),

  },
  graphCard: {
    width: width(43),
    paddingVertical: height(3.25),
    borderRadius: width(4),
    backgroundColor: Colors.backgroundWhite,
    elevation: 7,
    // marginTop: -height(12),
    paddingHorizontal: '7%',
    justifyContent: 'center',
    shadowOffset: { width: width(2), height: height(0.7) },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: width(2)
  },
  numberText: {
    fontSize: width(8),
    fontWeight: 'bold'
  },
  orderText: {
    color: Colors.purple,
    fontSize: width(4)
  },
  selectedEllipseImage: {
    width: totalSize(1),
    height: totalSize(1),
    marginTop: height(1),
  },
  unselectedEllipseImage: {
    width: totalSize(1),
    height: totalSize(1),
    marginTop: height(1),
    tintColor: 'transparent',
  },
  flatListContainer: {
    marginTop: height(1.5),
  },
  itemSeparator: {
    margin: totalSize(0.8),
  },
  approvedOrdersContainer: {
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    borderRadius: width(3),
  },
  approverImageContainer: {
    width: width(64),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  approverImage: {
    height: totalSize(8),
    width: totalSize(7),
    borderRadius: width(4),
  },
  approverNameContainer: {
    width: width(45),
    marginHorizontal: width(3)
  },
  approverName: {
    fontWeight: 'bold',
    fontSize: width(4),
    color: Colors.textBlack,
  },
  orderIdTextName: {
    fontSize: width(3.5),
    color: Colors.textBlack,
  },
  oridText: {
    color: Colors.gray,
    fontSize: width(3.4),
    marginTop: height(1),
  },
  priceContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(1.5),
  },
  priceText: {
    color: Colors.gray,
    fontSize: width(3.6),
  },
  totalPriceText: {
    color: Colors.textBlack,
    fontSize: width(3.7),
  },
  line: {
    width: width(90),
    borderWidth: 0.5,
    marginTop: height(1.8),
    borderColor: Colors.placeHolderTextColor,
    borderStyle: 'dashed',
    borderRadius: 1
  },
  itemListContainer: {
    marginTop: height(2),
    width: width(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemListText: {
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(3.7),
  },
  itemListLength: {
    color: Colors.gray,
    fontSize: width(3.5),
  },
  itemFlatlistContainer: {
    height: Platform.OS == 'ios' ? height(65) : height(60),
  },
  itemListSeparator: {
    margin: totalSize(0.6),
  },
  monthContainer: {
    padding: width(2.5),
    paddingHorizontal: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.opacitiveBlue,
    borderRadius: width(7),
    alignItems: 'center',
  },
  salesAndViews: {
    padding: width(2.5),
    paddingHorizontal: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.opacitiveBlue,
    borderRadius: width(1),
    alignItems: 'center',
  },
  byStoreContainer: {
    padding: width(2.5),
    paddingHorizontal: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.opacitiveBlue,
    borderRadius: width(1),
    alignItems: 'center',
    alignSelf:'center',
    width: width(80)
  },
  arrowDownImg: {
    width: width(4),
    height: height(4),
    resizeMode: 'contain',
    marginLeft: width(3),
    tintColor: Colors.grayDarker,
  },
  monthText: {
    color: Colors.ofwhite,
    fontSize: width(3.5),
  },
  itemContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    height: totalSize(8),
    width: totalSize(8),
    borderRadius: width(3.8),
  },
  itemNameContainer: {
    width: width(60),
    marginHorizontal: width(2)
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: width(3.3),
    color: Colors.textBlack,
    marginTop: height(0.5),
  },
  commentText: {
    color: Colors.gray,
    fontSize: width(3.1),
    marginTop: height(0.7),
  },
  deliveryWithCarefully: {
    color: Colors.textBlack,
    fontSize: width(3.2),
    // marginTop: height(0.5)
  },
  dateDeliveryContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  dateDeliveryleftContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(0.7),
  },
  dateDeliveryText: {
    color: Colors.gray,
    fontSize: width(3),
  },
  dateDeliveryTimeText: {
    fontSize: width(3.2),
    color: Colors.textBlack,
  },
  timeLeftText: {
    color: Colors.purplePrimary,
    fontSize: width(3.2),
  },
  addressContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1.75),
  },
  addressHiddenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: Colors.textBlack,
    fontSize: width(3.1),
  },
  hiddenContainer: {
    paddingVertical: 2.3,
    backgroundColor: Colors.opacitiveLightPurple,
    marginHorizontal: width(3),
    paddingHorizontal: width(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(2),
  },
  selfDelivery:{
    width: '90%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop: height(3)
  },
  wantToDeliveryText:{
    color: Colors.textBlack,
    fontSize: width(3.2)
  },
  hideLocationContainer: {
    width: width(13),
    backgroundColor: Colors.purplePrimary,
    borderRadius: width(5),
    marginTop: height(1),
    marginLeft: width(1),
    marginRight: width(3),
    justifyContent: 'center',
  },
  hiddenText: {
    color: Colors.purplePrimary,
    fontSize: width(2.9),
  },
  address: {
    color: 'rgba(0, 23, 56, 0.8)',
    marginTop: height(1),
    fontSize: width(2.75),
  },
  providerContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: height(2),
    backgroundColor: 'rgba(255,255,255,0.75)',
    borderBottomRightRadius: width(7),
    borderBottomLeftRadius: width(7),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  providerImageContainer: {
    width: width(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  providerimage: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2),
  },
  providerNameText: {
    color: Colors.textBlack,
    fontSize: width(3.25),
    fontWeight: 'bold',
    marginHorizontal: width(2)
  },
  DeliverByTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DeliverByText: {
    color: Colors.gray,
    fontSize: width(3.2),
  },
  DeliverBy: {
    color: Colors.purplePrimary,
    fontSize: width(3.2),
  },
  acceptanceContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems:'center',
    paddingVertical: height(2),
    borderBottomRightRadius: width(7),
    borderBottomLeftRadius: width(7),
  },
  acceptanceText: {
    color: Colors.purplePrimary,
    fontSize: width(3),
    fontWeight: 'bold',
    paddingHorizontal: width(2),
    textAlign:'center'
  },
  pastFlatListContainer: {
    marginBottom: height(3),
    marginTop: height(2),
  },
  pastItemSeparator: {
    margin: totalSize(0.6),
  },
  pastOrderContainer: {
    backgroundColor: Colors.lightWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.7),
    borderRadius: width(3),
  },
  pastOrderInnerContainer: {
    width: width(84),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personImage: {
    height: totalSize(9.5),
    width: totalSize(9.5),
    borderRadius: width(3),
    marginRight: Platform.OS == 'ios' ? width(3) : 0,
  },
  nameDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(56),
    height: height(2),
    marginTop: height(1.5),
  },
  personNameText: {
    fontSize: width(3.8),
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  dateText: {
    color: Colors.gray,
    fontSize: width(2.95),
  },
  orerIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(57),
    height: height(2),
    marginTop: height(2),
  },
  pastOrderPriceText: {
    color: Colors.purplePrimary,
    fontSize: width(2.95),
  },
  orderIdText: {
    color: Colors.purplePrimary,
    fontSize: width(2.95),
  },
  pastOrderpriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(57),
    height: height(2),
    marginTop: height(0.4),
  },
  pastorderIdText: {
    color: Colors.textBlack,
    fontSize: width(2.95),
    fontWeight: '600',
  },
  pastOrderTotalPriceText: {
    color: Colors.textBlack,
    fontSize: width(2.95),
    fontWeight: '600',
  },
  cancelOrderContainer: {
    marginTop: height(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  undrawemptyImage: {
    height: totalSize(25),
    width: totalSize(25),
  },
  noDataText: {
    color: Colors.textBlack,
    fontSize: totalSize(2),
    fontWeight: 'bold',
  },
  statusContainer: {
    marginTop: height(3),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(5),
    backgroundColor: Colors.backgroundWhite,
    borderBottomLeftRadius: width(6),
    justifyContent: 'space-between',
    borderBottomRightRadius: width(6),
    width: width(90)
  },
  status: {
    width: width(100),
    alignItems: 'center',
    paddingHorizontal: width(5),
    backgroundColor: Colors.backgroundWhite,
    borderBottomLeftRadius: width(8),
    borderBottomRightRadius: width(8),
    paddingBottom: height(2)
  },
  pendingOrder: {
    width: width(90),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height(3),
  },
  pendingText: {
    fontSize: width(4),
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  viewAll: { color: Colors.purple },
  graphBackground: {
    height: height(78),
    backgroundColor: Colors.darkBackground,
  },
  hideLocationContainer: {
    width: width(13),
    backgroundColor: Colors.purplePrimary,
    borderRadius: width(5),
    justifyContent: 'center',
  },
  online: { color: Colors.gray, fontSize: width(4) },
  LinearGradient: {
    height: 2,
    alignSelf: 'center',
    marginTop: 6,
    borderRadius: 17,
    width: width(10),
  },
  privateDropDownItemContainer: {
    height: height(5),
    justifyContent: 'center',
    paddingHorizontal: width(2),
  },
  privateDropDown: {
    height: height(15),
    width: width(25),
    backgroundColor: Colors.darkBackground
  },
  salesDropDown: {
    height: height(5),
    width: width(45),
    backgroundColor: Colors.darkBackground
  },
  byStoreDropDown: {
    height: height(20),
    width: width(80),
    backgroundColor: Colors.darkBackground,
    marginLeft: width(10)
  },
  privateDropDownItemText: {
    fontSize: width(3.7),
    color: Colors.backgroundWhite
  },
  deliveriesContainer:{
    width:width(90),
    alignSelf:'center',
    paddingVertical:height(2),
    backgroundColor:Colors.backgroundWhite,
    borderRadius:width(3) 
  },
  driverNameContainer:{
    width:width(80),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between'
  },
  locationBasket:{
    height:totalSize(2.5),
    width:totalSize(2.5)
  },
  deliveriesPriceContainer:{
    width:width(70),
    alignItems:'center',
    justifyContent:'space-between'
  },
  driverNameText:{
    fontSize: width(4.3),
    color: Colors.textBlack,
    fontWeight: 'bold'
  },
  deliveriesPriceText:{
    fontSize: width(3.5),
    color: Colors.gray,
    width:width(10)
  },
  deliveriesOrderContainer:{
    width:width(65),
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:height(1)
  },
  deliveriesNumberText:{
    fontSize: width(3.5),
    color: Colors.textBlack,
    width:width(60),
  },
  noteDollar:{
    height:totalSize(1.75),
    width:totalSize(1.75)
  },
  delivriesAddressContainer:{
    width:width(80),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:height(2)
  },
  delivriesAddressText:{
    fontSize: width(3),
    color: Colors.lightGray,
    width:width(65),
    lineHeight:height(2.5)
  },
  deliveriesMessageContainer:{
    width:width(80),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop:height(2)
  },
  delivriesMessageText:{
    fontSize: width(3),
    color: Colors.purplePrimary,
    width:width(50),
  },
  reassignButton:{
    height:height(6),
    width:width(50),
    backgroundColor:Colors.purplePrimary,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    borderRadius:width(3)
  },
  reassignText:{
    fontSize: width(3),
    color: Colors.backgroundWhite,
    marginHorizontal:width(0.5)
  },
  backIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:height(2)
  },backIcon: {
    height: totalSize(1.8),
    width: totalSize(1.8),
    backgroundColor: 'transparent',
  }
});
export default styles;
