import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    height: height(13),
    borderRadius: width(3),
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewStyle: {
    height: height(50),
  },
  approvedOrdersContainer: {
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(3),
    marginTop: height(2),
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
    width: width(62),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  approverName: {
    fontWeight: 'bold',
    fontSize: width(3.6),
    color: Colors.lightTextBlack
  },
  orderIdTextName: {
    fontSize: width(3),
    color: Colors.lightTextBlack
  },
  oridText: {
    color: Colors.gray,
    fontSize: width(3),
    marginTop: height(1),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: width(3)
  },
  phoneButtonContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveLightPurple,
    marginHorizontal: width(2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatButtonContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveLightPurple,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatImage: {
    height: totalSize(1.75),
    width: totalSize(1.75)
  },
  priceContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(2)
  },
  priceText: {
    color: Colors.gray,
    fontSize: width(3.5),
  },
  totalPriceText: {
    color: Colors.lightTextBlack,
    fontSize: width(3.5),
  },
  line: {
    width: width(90),
    borderWidth: 0.5,
    marginTop: height(1.8),
    borderColor: Colors.placeHolderTextColor,
    borderStyle: 'dashed',
    borderRadius: 1
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
  dateDeliveryContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2)
  },
  dateDeliveryhoursContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(0.5)
  },
  dateDeliveryText: {
    color: Colors.gray,
    fontSize: width(3),
  },
  dateDeliveryTimeText: {
    fontSize: width(3.25),
    color: Colors.lightTextBlack
  },
  timeLeftText: {
    color: Colors.purplePrimary,
    fontSize: width(3.25),
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
    fontSize: width(3.05),
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
    fontSize: width(3)
  },
  address: {
    color: 'rgba(0, 23, 56, 0.8)',
    marginTop: height(1),
    fontSize: width(2.7),
  },
  approvedOrdersItemsContainer: {
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
    flexDirection: 'row'
  },
  itemListText: {
    fontWeight: 'bold',
    color: Colors.lightTextBlack,
    fontSize: width(3.6),
  },
  itemSeparator: {
    margin: totalSize(0.8)
  },
  itemFlatlistContainer: {
    marginTop: height(2)
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
  itemContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemImage: {
    height: totalSize(8.5),
    width: totalSize(8.5),
    borderRadius: width(4)
  },
  itemNameContainer: {
    width: width(35),
    marginLeft: width(1),
    marginRight: width(2),
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: width(3.3),
    color: Colors.lightTextBlack,
  },
  itemIdText: {
    color: Colors.gray,
    fontWeight: 'bold',
    fontSize: width(3),
    marginTop: height(0.5)
  },
  shortDescriptionText: {
    color: Colors.gray,
    fontSize: width(3),
    marginTop: height(0.5),

  },
  quantityText: {
    color: Colors.gray,
    fontSize: width(3.05),
    width: width(8),
    paddingHorizontal: width(2),
  },
  itemPriceText: {
    color: Colors.textBlack,
    fontSize: width(3)
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
    fontSize: width(3.6),
    color: Colors.lightTextBlack
  },
  acceptedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(0.5)
  },
  acceptedText: {
    color: Colors.purplePrimary,
    fontSize: width(2.35),
    fontWeight: 'bold'
  },
  ellipseImage: {
    height: totalSize(0.5),
    width: totalSize(0.5),
    marginHorizontal: width(0.5)
  },
  deliverByText: {
    color: Colors.gray,
    fontSize: width(2.35),
    maxWidth: width(25)
  },
  providerButtonContainer: {
    flexDirection: 'row',
  },
  providerPhoneButtonContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2),
    backgroundColor: Colors.opacitiveLightPurple,
    justifyContent: 'center',
    alignItems: 'center'
  },
  providerChatImage: {
    height: totalSize(1.75),
    width: totalSize(1.75)
  },
  providerChatButtonContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(2),
    backgroundColor: Colors.opacitiveLightPurple,
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
    borderRadius: width(3),
    marginBottom: height(2),
  },
  orderDetailTextContainer: {
    width: width(80),
    alignSelf: 'center',
  },
  orderDetailText: {
    fontWeight: 'bold',
    color: Colors.lightTextBlack,
    fontSize: width(3.6),
  },
  clientImageContainer: {
    marginTop: height(2),
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: height(2),
    backgroundColor: 'rgba(9, 2, 29, 0.05)',
    borderRadius: width(3),
    // shadowColor: Colors.black,
    // shadowOffset: {width: 0.5, height: 0.5},
    // shadowOpacity: 0.2,
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
    color: Colors.gray,
    fontSize: width(2.7)
  },
  angleRightImage: {
    height: totalSize(1.5),
    width: totalSize(1.5),
    marginHorizontal: width(5),
  },
  barCodeImage: {
    marginTop: height(2),
    alignSelf: 'center',
    width: width(30),
    height: height(12),
    alignItems: 'center',
    justifyContent: 'center'
  },
  barCodeContainer: {
    alignSelf: 'center',
    width: width(32),
    height: height(7),
    borderRadius: width(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightPurple,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.2,
  },
  barCodeWhiteImage: {
    width: totalSize(3),
    height: totalSize(3),
    tintColor: Colors.backgroundWhite
  },
  showQrText: {
    color: Colors.backgroundWhite,
    fontSize: totalSize(1.8),
    paddingLeft: width(2)
  },
  inVoiceButton: {
    marginTop: height(2),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadImage: {
    height: totalSize(2),
    width: totalSize(2)
  },
  inVoiceText: {
    color: Colors.purplePrimary,
    fontWeight: 'bold',
    fontSize: width(3.25),
    paddingHorizontal: width(2)
  },
  printContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.7),
    elevation: 1,
    borderColor: Colors.backgroundWhite,
    marginVertical: height(1.5),
    shadowOffset: { width: width(2), height: height(0.7) },
    shadowColor: Colors.backgroundWhite,
    shadowOpacity: 0.25,
    shadowRadius: width(2)
  },
  printImage: {
    width: totalSize(3),
    height: totalSize(3)
  },
  printText: {
    color: Colors.textBlack,
    fontWeight: 'bold',
    fontSize: totalSize(2.1),
    paddingLeft: width(2)
  }
});
export default styles