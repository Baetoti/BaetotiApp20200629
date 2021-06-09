import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    height: Platform.OS == 'ios' ? height(16) : height(20),
    width: width(100),
    alignItems: 'center',
    borderBottomLeftRadius: width(5),
    borderBottomRightRadius: width(5)
  },
  renderTabFooter: {
    width: totalSize(0.5),
    height: totalSize(0.5),
    borderRadius: totalSize(0.25),
    backgroundColor: Colors.purplePrimary,
    marginTop: height(1.5)
  },
  containerStyle: {
    marginTop: Platform.OS == 'ios' ? 0 : height(3)
  },
  tabContainer: {
    marginTop: height(2),
    marginLeft: width(8)
  },
  selectedTabText: {
    fontWeight: 'bold'
  },
  tabtextStyle: {
    fontSize: width(4)
  },
  tabInnerContainer: {
    alignItems: 'center'
  },
  selectedTab: {
    color: Colors.textBlack,
  },
  unSelectedTab: {
    color: Colors.gray,
  },
  selectedEllipseImage: {
    width: totalSize(1),
    height: totalSize(1),
    marginTop: height(1)
  },
  unselectedEllipseImage: {
    width: totalSize(1),
    height: totalSize(1),
    marginTop: height(1),
    tintColor: 'transparent'
  },
  backContainer: {
    width: width(90),
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  backButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2),
    backgroundColor: Colors.opacitiveBlack,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(1.5),
  },
  searchContainer: {
    width: width(75),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(7),
    marginTop: height(1.5),
    borderRadius: width(2.98),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E4E9F2',
    paddingHorizontal: width(3)
  },
  searchImage: {
    height: totalSize(2.0),
    width: totalSize(2.0),
    resizeMode: 'contain'
  },
  searchText: {
    width: width(50)
  },
  arrowDown: {
    height: 10,
    width: 10,
    resizeMode: 'contain'
  },
  flatListContainer: {
    marginTop: height(1.5),
    height: height(79)
  },
  itemSeparator: {
    margin: totalSize(0.8)
  },
  approvedOrdersContainer: {
    // backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    borderRadius: width(3)
  },
  approverImageContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  approverImage: {
    height: totalSize(8),
    width: totalSize(7),
    borderRadius: width(4)
  },
  approverNameContainer: {
    width: width(60),
  },
  approverName: {
    fontWeight: 'bold',
    fontSize: width(4),
    color: Colors.lightTextBlack
  },
  orderIdTextName: {
    fontSize: width(3.5),
    color: Colors.lightTextBlack,
  },
  oridText: {
    color: Colors.gray,
    fontSize: width(3.4),
    marginTop: height(1),
  },
  priceContainer: {
    width: width(78),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(1)
  },
  priceText: {
    color: Colors.gray,
    fontSize: width(3.6),
  },
  totalPriceText: {
    color: Colors.lightTextBlack,
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
    flexDirection: 'row'
  },
  itemListText: {
    fontWeight: 'bold',
    color: Colors.lightTextBlack,
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
    margin: totalSize(0.6)
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
    borderRadius: width(4)
  },
  itemNameContainer: {
    width: width(60),
    marginHorizontal: width(4)
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: width(3.3),
    color: Colors.lightTextBlack,
  },
  commentText: {
    color: Colors.gray,
    fontSize: width(3.1),
    marginTop: height(0.7)
  },
  deliveryWithCarefully: {
    color: Colors.lightTextBlack,
    fontSize: width(3.2),
    // marginTop: height(0.5)
  },
  dateDeliveryContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2)
  },
  dateDeliveryleftContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(0.7)
  },
  dateDeliveryText: {
    color: Colors.gray,
    fontSize: width(3),
  },
  dateDeliveryTimeText: {
    fontSize: width(3.2),
    color: Colors.lightTextBlack
  },
  timeLeftText: {
    color: Colors.purplePrimary,
    fontSize: width(3.2),
  },
  addressContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1.75)
  },
  addressHiddenContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addressText: {
    color: Colors.lightTextBlack,
    fontSize: width(3.1),
  },
  hiddenContainer: {
    paddingVertical: 2.3,
    backgroundColor: Colors.opacitiveLightPurple,
    marginHorizontal: width(3),
    paddingHorizontal: width(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(2)
  },
  hiddenText: {
    color: Colors.purplePrimary,
    fontSize: width(2.9)
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
    borderBottomRightRadius: width(5),
    borderBottomLeftRadius: width(5),
  },
  providerContainerInner: {
    width: width(80),
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  providerImageContainer: {
    width: width(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  providerimage: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2)
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
    justifyContent: 'space-between'
  },
  DeliverByText: {
    color: Colors.gray,
    fontSize: width(3.2)
  },
  DeliverBy: {
    color: Colors.purplePrimary,
    fontSize: width(3.2)
  },
  acceptanceContainer: {
    width: width(80),
    alignSelf: 'center',
    paddingHorizontal: width(5),
    paddingVertical: height(2),
    borderBottomRightRadius: width(5),
    borderBottomLeftRadius: width(5),
  },
  acceptanceText: {
    color: Colors.gray,
    fontSize: width(3),
    fontWeight: 'bold'
  },
  pastFlatListContainer: {
    marginBottom: height(3),
    marginTop: height(2),
  },
  pastItemSeparator: {
    margin: totalSize(0.6)
  },
  pastOrderContainer: {
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.7),
    borderRadius: width(3)
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
    marginRight: Platform.OS == 'ios' ? width(3) : 0
  },
  nameDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(56),
    height: height(2),
    marginTop: height(1.5)
  },
  personNameText: {
    fontSize: width(3.8),
    fontWeight: 'bold',
    color: Colors.textBlack
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
    marginTop: height(2)
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
    marginTop: height(0.4)
  },
  pastorderIdText: {
    color: Colors.textBlack,
    fontSize: width(2.95),
    fontWeight: '600'
  },
  pastOrderTotalPriceText: {
    color: Colors.textBlack,
    fontSize: width(2.95),
    fontWeight: '600'
  },
  cancelOrderContainer: {
    marginTop: height(15),
    height: '80%'
  },
  undrawemptyImage: {
    height: totalSize(25),
    width: totalSize(25),
    alignSelf: 'center'
  },
  noDataText: {
    color: Colors.textBlack,
    fontSize: totalSize(2),
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  orderContainer: {
    width: width(90),
    borderRadius: width(4),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(1.75),
    paddingVertical: height(1.75),
    paddingHorizontal: width(3)
  },
  topContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  itemImage: {
    height: height(9),
    width: width(17),
    borderRadius: width(3)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer: {
    marginHorizontal: width(3),
    height: height(9),
    justifyContent: 'space-between'
  },
  orderId: {
    fontSize: width(3.4),
    color: Colors.purplePrimary
  },
  dateTimeText: {
    fontSize: width(3.4),
    color: Colors.textBlack
  },
  storeName: {
    fontSize: width(4.3),
    // width: width(40),
    color: Colors.textBlack,
    fontWeight: 'bold'
  },
  priceHeading: {
    fontSize: width(3.25),
    color: Colors.grayDarker
  },
  priceText: {
    fontSize: width(4.5),
    color: Colors.textBlack,
  },
  idDateContainer: {
    flexDirection: 'row',
    width: width(61),
    justifyContent: 'space-between'
  },
  lineSeparator: {
    height: 0.37,
    backgroundColor: Colors.placeHolderTextColor,
    width: '100%',
    marginTop: height(2)
  },
  bottomRowContainer: {
    width: width(84),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  packageImage: {
    height: height(3),
    width: width(4),
    resizeMode: 'contain',
    marginTop: height(1.25),
    alignSelf: 'center',
    tintColor: Colors.purplePrimary
  },
  arrowRight: {
    height: height(1.5),
    width: width(5),
    resizeMode: 'contain',
    marginTop: height(1.4),
    tintColor: Colors.purplePrimary
  },
  itemsText: {
    fontSize: width(3.4),
    textAlign: 'center',
    marginTop: height(1.25),
    paddingLeft: width(2),
    //fontWeight: 'bold',
    color: Colors.textBlack
  },
  detailsText: {
    fontSize: width(3.4),
    textAlign: 'center',
    marginTop: height(1.25),
    paddingLeft: width(2),
    color: Colors.purplePrimary
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
  deliveriesContainer: {
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(3)
  },
  driverNameContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  locationBasket: {
    height: width(12),
    width: width(12),
    borderRadius: width(6)
  },
  deliveriesPriceContainer: {
    width: width(65),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  driverNameText: {
    fontSize: width(4.3),
    color: Colors.textBlack,
    fontWeight: 'bold'
  },
  deliveriesPriceText: {
    fontSize: width(3.5),
    color: Colors.gray,
    width: width(10)
  },
  deliveriesOrderContainer: {
    width: width(65),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(1)
  },
  deliveriesNumberText: {
    fontSize: width(3.5),
    color: Colors.textBlack,
    width: width(60),
  },
  noteDollar: {
    height: totalSize(1.75),
    width: totalSize(1.75)
  },
  delivriesAddressContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2)
  },
  delivriesAddressText: {
    fontSize: width(3),
    color: Colors.lightGray,
    width: width(65),
    lineHeight: height(2.5)
  },
  deliveriesMessageContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(2)
  },
  delivriesMessageText: {
    fontSize: width(3),
    color: Colors.purplePrimary,
    width: width(50),
  },
  reassignButton: {
    height: height(5),
    width: width(25),
    backgroundColor: Colors.purplePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: width(3)
  },
  reassignText: {
    fontSize: width(3),
    color: Colors.backgroundWhite,
    marginHorizontal: width(0.5)
  },
  arrowLeft: {
    width: totalSize(1.8),
    height: totalSize(1.8),
  },
  backIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(2)
  }, backIcon: {
    height: totalSize(1.8),
    width: totalSize(1.8),
    backgroundColor: 'transparent',
  }
});
;
export default styles