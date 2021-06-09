import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'space-between',
  },
  scrollViewStyle:{
  
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: height(2),
    width: width(100),
    alignItems: 'center',
    borderBottomLeftRadius: width(5),
    borderBottomRightRadius: width(5),
  },
  backButtonContainerStyle: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderIdContainer: {
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    width: width(90),
    justifyContent: 'space-between',
  },
  orderIdLabelText: {
    fontSize: width(3),
    color: Colors.gray,
  },
  orderIdText: {
    fontSize: width(3.5),
    color: Colors.textBlack,
  },
  restaurantContainer: {
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    width: width(90),
    justifyContent: 'space-between',
  },
  restaurantNameContainer: {
    width: width(50),
  },
  restaurantNameText: {
    fontSize: width(5),
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  restaurantAddressContainer: {
    flexDirection: 'row',
    marginTop: height(1),
  },
  locationPointImage: {
    height: totalSize(2),
    width: totalSize(2),
  },
  restaurantAddressText: {
    fontSize: width(3.3),
    color: Colors.textBlack,
    paddingLeft: width(2),
  },

  buttonContainer: {
    flexDirection: 'row',
  },
  phoneButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveBlue,
    marginLeft: width(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.opacitiveBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatImage: {
    height: totalSize(1.25),
    width: totalSize(1.25),
  },
  restaurantImageContainer: {
    width: width(90),
    marginTop: height(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantImage: {
    height: totalSize(17),
    width: width(90),
    borderRadius: width(5),
  },
  orderInprogressView: {
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderInprogressContainer:{
      height:height(6),
      width:width(40),
      backgroundColor:Colors.buttonBlue,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:width(6)
  },
  orderInProgressText:{
    color: Colors.backgroundWhite,
    fontSize: width(3.3),
  },
  blueLineSeparator: {
    height: 1,
    backgroundColor: Colors.buttonBlue,
    width: width(10),
  },
  deliveryDateTimeContainer:{
      marginTop:height(2)
  },
  deliveryDateTimeText:{
      color:Colors.gray,
      fontSize:width(3.3),
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
    marginTop:height(0.5)
  },
  itemListText: {
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(3.5),
  },
  line: {
    width: '100%',
    borderWidth: 0.3,
    marginTop: height(1.8),
    borderColor: Colors.placeHolderTextColor,
    borderRadius: 1
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
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: width(3.3),
    color: Colors.textBlack,
    marginTop: height(0.5),
  },
  itemIdText: {
    color: Colors.gray,
    fontWeight: 'bold',
    fontSize: width(3),
    marginTop: height(0.5),
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
  shortDescriptionContainer:{
    width: width(80),
    alignSelf: 'center',
    marginTop:height(1)
  },
  shortDescriptionText:{
    color: Colors.textBlack,
    fontSize: width(3.5),
  },
  servicesChargesContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: 'rgba(9, 2, 29, 0.03)',
    paddingVertical: height(2),
    marginTop: height(2),
    borderTopLeftRadius: width(2),
    borderTopRightRadius: width(2),
    borderBottomLeftRadius:width(4),
    borderBottomRightRadius:width(4)
  },
  pricesContainer: {
    flexDirection: 'row',
    width:width(70),
    alignSelf:'center',
    alignItems:'center',
     justifyContent: 'space-between',
  },
  servicesPriceContainer: {
  },
  lineSeparator: {
    height: height(6),
    backgroundColor: Colors.placeHolderTextColor,
    width: 0.5,
},
servicesPriceText: {
    color: Colors.textBlack,
    fontSize: width(4),
  },
  categoriesHeadingText: {
    color: Colors.gray,
    fontSize: width(2.7),
  },
  providerContainer: {
    backgroundColor: Colors.backgroundWhite,
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
    borderRadius: totalSize(4)
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
    tintColor:Colors.buttonBlue
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
    marginLeft: width(2),
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
    marginBottom:height(2)
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
    fontSize: width(2.7)
  },
  clientAddressContainer:{
    marginTop: height(2),
    width: width(80),
    alignSelf: 'center',
    backgroundColor:Colors.opacitiveBackGroundGray,
    paddingVertical:height(1.5),
    borderRadius:width(3)
    //  alignItems: 'center',
    // justifyContent: 'space-around',
  },
  clientAddressLabelsContainer:{
    marginTop: height(1),
    width: width(70),
    flexDirection:'row',
    alignSelf:'center'
  },
  locationPointBlueImage:{
    height:totalSize(2),
    width:totalSize(2),
  },
  addressLabelText:{
    color: Colors.textBlack,
    fontSize: width(3),
    marginLeft:width(1),
  },
  clientHomeLabelsContainer:{
    marginTop: height(1),
    width: width(70),
    alignSelf:'center'
  },
  homeTextLabel:{
    color: Colors.textBlack,
    fontSize: width(3),
    fontWeight:'bold'
  },
  downloadButtonContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:height(2)
  },
  clientAddressText:{
    fontSize: width(2.8),
    color:Colors.textOpacitiveBlack
  },
  downloadLabelText:{
    color: Colors.buttonBlue,
    fontSize: width(3),
    fontWeight:'bold',
    paddingHorizontal:width(2)
  },
  downloadImage: {
    height: totalSize(2),
    width: totalSize(2),
  },


  receiveOrderButton: {
    justifyContent: 'center',
    marginBottom:height(2),
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.buttonBlue,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2),
    elevation: 7,
    borderColor: Colors.buttonBlue,
    shadowOffset: {width: width(2), height: height(0.7)},
    shadowColor: Colors.buttonBlue,
    shadowOpacity: 0.25,
    shadowRadius: width(2),
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
  qrImageImageContainer:{
      flexDirection:'row',
      alignItems:'center'
  },
  showCodeText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: 'bold',
    fontSize: width(3),
    paddingHorizontal: width(2),
  },
  qrImage: {
    height: totalSize(2),
    width: totalSize(2),
  },
});
export default styles;
