import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'space-between',
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    height: Platform.OS == 'ios' ? height(16) : height(16),
    width: width(100),
    alignItems: 'center',
    borderBottomLeftRadius: width(5),
    borderBottomRightRadius: width(5),
  },
  containerStyle: {
    marginTop: Platform.OS == 'ios' ? 0 : height(3),
  },
  backButtonContainerStyle: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orContainer: {
    width: width(90),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pendingText: {
    paddingHorizontal: width(1),
    color: Colors.buttonBlue,
    fontWeight: 'bold',
  },
  LinearGradient: {
    height: 1,
    alignSelf: 'center',
    borderRadius: 17,
    width: width(10),
    justifyContent: 'center',
  },
  scrollViewStyle: {
    paddingTop: height(2)
  },
  approvedOrdersContainer: {
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(3),
    marginTop: height(2),
    borderRadius: width(3),
  },
  approverImageContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  approverImage: {
    height: totalSize(8),
    width: totalSize(8),
    borderRadius: width(4),
  },
  approverNameContainer: {
    width: width(65),
    alignItems: 'center',
    paddingLeft: width(1.5),
    justifyContent: 'space-between',
  },
  approverName: {
    fontWeight: 'bold',
    fontSize: width(3.5),
    color: Colors.textBlack,
  },
  orderIdTextName: {
    fontSize: width(3),
    color: Colors.textBlack,
  },
  oridText: {
    color: Colors.gray,
    fontSize: width(3),
    marginTop: height(1),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: width(1)
  },
  phoneButtonContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveBlue,
    marginHorizontal: width(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatImage: {
    height: totalSize(1.25),
    width: totalSize(1.25),
  },
  priceContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(2),
  },
  priceText: {
    color: Colors.gray,
    fontSize: width(3.5),
  },
  totalPriceText: {
    color: Colors.textBlack,
    fontSize: width(3.5),
  },
  line: {
    width: width(90),
    borderBottomWidth: 0.30,
    marginTop: height(1.8),
    borderColor: Colors.placeHolderTextColor,
    borderStyle: 'dashed',
    borderRadius: 1
  },
  dateDeliveryContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  dateDeliveryhoursContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(0.5),
  },
  dateDeliveryText: {
    color: Colors.gray,
    fontSize: width(3),
  },
  dateDeliveryTimeText: {
    fontSize: width(3.25),
    color: Colors.textBlack,
  },
  timeLeftText: {
    color: Colors.buttonBlue,
    fontSize: width(3.25),
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
    fontSize: width(3.05),
  },
  hiddenContainer: {
    paddingVertical: 2.3,
    backgroundColor: Colors.opacitiveBlue,
    marginLeft: width(3),
    paddingHorizontal: width(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(2),
  },
  hiddenText: {
    color: Colors.buttonBlue,
    fontSize: width(3),
  },
  address: {
    color: 'rgba(0, 23, 56, 0.8)',
    marginTop: height(1),
    fontSize: width(2.7),
  },
  approvedOrdersItemsContainer: {
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    marginTop: height(2),
    borderRadius: width(3),
  },
  itemListContainer: {
    width: width(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemListText: {
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(3.5),
  },
  itemSeparator: {
    margin: totalSize(0.8),
  },
  itemFlatlistContainer: {
    marginTop: height(2),
  },
  itemSeparator: {
    margin: totalSize(0.8),
  },
  itemFlatlistContainer: {
    marginTop: height(2),
  },
  itemContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    height: totalSize(7),
    width: totalSize(7),
    borderRadius: width(3.5),
  },
  itemNameContainer: {
    width: width(35),
    // backgroundColor: Colors.textBlack
  },
  itemName: {
    // fontWeight: 'bold',
    fontSize: width(3.3),
    color: Colors.textBlack,
    marginTop: height(0.5),
  },
  itemIdText: {
    color: Colors.gray,
    fontSize: width(3),
    marginTop: height(0.5),
  },
  itemExtraText: {
    color: Colors.black,
    fontSize: width(3),
    marginTop: height(0.5),
    marginLeft: width(5)
  },
  quantityText: {
    color: Colors.gray,
    fontSize: width(3.05),
    width: width(8),
    paddingRight: width(2),
  },
  itemPriceText: {
    color: Colors.textBlack,
    fontSize: width(3),
  },
  servicesChargesContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#f7f7f8',
    paddingVertical: height(2),
    marginTop: height(2),
    borderRadius: width(2),
  },
  pricesContainer: {
    flexDirection: 'row',
    width: width(70),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  servicesPriceContainer: {
  },
  lineSeparator: {
    height: height(6),
    backgroundColor: Colors.placeHolderTextColor,
    width: 0.37,
  },
  servicesPriceText: {
    color: Colors.textBlack,
    fontSize: width(4),
    marginTop: height(0.5)
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
  categoriesHeadingText: {
    color: Colors.gray,
    fontSize: width(2.7),
  },
  trackingContainer: {
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1),
    marginTop: height(2),
    borderRadius: width(3)
  },
  trackingHeadContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOnMapText: {
    color: Colors.buttonBlue,
    fontSize: width(3),
  },
  providerContainer: {
    backgroundColor: '#F9F9F9',
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1),
    marginTop: height(2),
    borderRadius: width(3)
  },
  providerImageContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  providerImage: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(3.5)
  },
  providerNameContainer: {
    width: width(65),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  providerName: {
    fontWeight: 'bold',
    fontSize: width(3),
    color: Colors.textBlack
  },
  acceptedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(0.5)
  },
  acceptedText: {
    color: Colors.buttonBlue,
    fontSize: width(2.35),
    fontWeight: 'bold'
  },
  ellipseImage: {
    height: totalSize(0.5),
    width: totalSize(0.5),
    tintColor: Colors.buttonBlue,
    marginHorizontal: width(0.5)
  },
  deliverByText: {
    color: Colors.gray,
    fontSize: width(2.35),
  },
  providerButtonContainer: {
    flexDirection: 'row',
  },
  providerPhoneButtonContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2),
    backgroundColor: Colors.opacitiveBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  providerChatImage: {
    height: totalSize(1.25),
    width: totalSize(1.25)
  },
  providerChatButtonContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2),
    backgroundColor: Colors.opacitiveBlue,
    marginHorizontal: width(2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  clientContainer: {
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(3),
    marginTop: height(2),
    marginBottom: height(2),
    borderRadius: width(3),
  },
  orderDetailTextContainer: {
    width: width(80),
    alignSelf: 'center',
  },
  orderDetailText: {
    color: Colors.textBlack,
    fontSize: width(3.25),
  },
  clientImageContainer: {
    marginTop: height(2),
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  clientImage: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    marginLeft: width(2)
  },
  nameContainer: {
    width: width(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  clientNameText: {
    color: Colors.textBlack,
    fontWeight: 'bold',
    fontSize: width(3.25)
  },
  clientText: {
    color: Colors.buttonBlue,
    fontSize: width(2.7),
  },
  inVoiceButton: {
    marginTop: height(2),
    width: width(70),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height(2),
    backgroundColor: Colors.textBlack,
    borderRadius: width(2)
  },
  inVoiceButtonInnerView: {
    width: width(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inVoiceText: {
    color: Colors.backgroundWhite,
    fontSize: width(3.25),
  },
  downloadImageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  downloadImage: {
    height: totalSize(2),
    width: totalSize(2)
  },
  downloadText: {
    color: Colors.backgroundWhite,
    fontWeight: 'bold',
    fontSize: width(3.25),
    paddingHorizontal: width(2)
  },
  receiveOrderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.buttonBlue,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    elevation: 7,
    borderColor: Colors.buttonBlue,
    marginBottom: height(2),
    shadowOffset: { width: width(2), height: height(0.7) },
    shadowColor: Colors.buttonBlue,
    shadowOpacity: 0.25,
    shadowRadius: width(2)
  },
  receiveOrderInnerView: {
    width: width(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiveOrderText: {
    color: Colors.backgroundWhite,
    fontWeight: 'bold',
    fontSize: width(3.6),
  },
  showCodeText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 'bold',
    fontSize: width(3),
    paddingHorizontal: width(2)
  },
  downloadImage: {
    height: totalSize(2),
    width: totalSize(2),
  },

  topContainer: {
    width: width(100),
    paddingBottom: height(4),
    borderRadius: width(7),
    backgroundColor: Colors.backgroundWhite,
  },
  idCont: {
    paddingHorizontal: width(5),
    width: width(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  id: { color: Colors.lightGray, fontSize: width(4) },
  idText: { color: Colors.textBlack, fontSize: width(3.5) },
  labelCont: {
    paddingHorizontal: width(5),
    width: width(100),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  label: { color: Colors.textBlack, fontSize: width(6), fontWeight: 'bold' },
  dispCont: { flexDirection: 'row', marginTop: height(2) },
  locationImg: {
    width: width(4),
    height: width(5),
    marginTop: height(0.5),
    resizeMode: 'contain',
  },
  adress: {
    color: Colors.textBlack,
    marginHorizontal: width(1.5),
    fontSize: width(3.5),
    width: width(45),
  },
  adress1: {
    color: Colors.textBlack,
    marginLeft: width(3),
    fontSize: width(4),
    width: width(45),
  },
  home: {
    color: Colors.textBlack,
    fontSize: width(4),
    marginTop: height(1),
  },
  adress2: {
    color: Colors.textBlack,
    fontSize: width(2.8),
    width: '100%',
    marginTop: height(0.8),
    opacity: 0.7,
  },
  backImg: { width: '100%', height: '100%', borderRadius: width(5) },
  backgroundImg: {
    width: width(90),
    height: height(25),
    marginVertical: height(4),
    alignSelf: 'center',
    elevation: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: width(5),
  },
  imgCont: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center' },
  line1: { width: width(10), height: 1.8, backgroundColor: Colors.black },
  orderCont: {
    paddingVertical: height(1),
    paddingHorizontal: width(5),
    borderRadius: width(7),
    backgroundColor: Colors.black,
  },
  completed: { color: Colors.backgroundWhite, fontSize: width(4.5) },
  time: {
    color: '#1C2D41',
    fontSize: width(4),
    textAlign: 'center',
    marginTop: height(3),
    opacity: 0.5,
  },
  priceContaierNew: {
    width: width(85),
    flexDirection: "row",
    justifyContent: 'space-between',
    alignSelf: "center",
    marginTop: height(1.5)
  },
  priceNew: {
    color: Colors.black,
    fontSize: width(4),
  }
});
export default styles;
