import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2),
  },
  headerTitle: {
    color: Colors.backgroundWhite,
  },
  scroll: {
    // height: height(80),
  },
  backIcon: {
    tintColor: Colors.backgroundWhite,
  },
  backIconContainerStyle: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    elevation: 7,
  },
  innerContainer: {
    width: width(100),
    marginTop: height(4),
    borderTopLeftRadius: width(9),
    borderTopRightRadius: width(9),
    paddingBottom: height(1),
    overflow: 'hidden',
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: Colors.placeHolderTextColor,
    width: '100%',
    marginVertical: height(1),
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    marginTop: 0,
    height: height(7),
    borderColor: Colors.buttonBlue,
    shadowColor: Colors.buttonBlue,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: width(4.5),
  },
  approvedOrdersContainer: {
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.5),
    borderRadius: width(4),
    position: 'absolute',
    top: height(11),
  },
  amountDetails: {
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2.5),
  },
  totalAmount: {color: Colors.backgroundWhite, fontSize: totalSize(2.35)},
  withdrawButtonText: {color: Colors.grayDarker, fontSize: totalSize(1.3)},
  withdrawButton: {marginTop: height(0.5)},
  approverImageContainer: {
    width: width(85),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height(1.5),
  },
  approverImage: {
    height: height(8),
    width: height(8),
    borderRadius: width(4),
  },
  approverNameContainer: {
    width: width(66),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  approverName: {
    fontWeight: 'bold',
    fontSize: width(4),
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
    height: height(2.25),
    width: height(2.25),
  },
  dateDeliveryContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(1),
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
    fontWeight: 'bold',
    fontSize: width(3.25),
    color: Colors.textBlack,
  },
  timeLeftText: {
    color: Colors.purplePrimary,
    fontSize: width(3.25),
  },
  itemsDetailContainer: {
    width: width(90),
    borderRadius: width(3),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(1.75),
    paddingVertical: height(1.35),
  },
  itemContainer: {
    width: width(85),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  cardImageContainer: {
    height: height(4.75),
    width: height(7),
    borderWidth: 0.5,
    borderRadius: width(2),
    borderColor: 'rgba(0,0,0,0.16)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    height: height(4.5),
    maxWidth: height(5),
    //borderRadius: width(2),
  },
  imageMainContainer: {
    width: width(65),
    marginLeft: width(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shopName: {
    color: Colors.textBlack,
    fontSize: width(3.25),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriesHeadingText: {
    color: Colors.gray,
    fontSize: width(2.7),
  },
  balHeadingText: {
    color: Colors.gray,
    fontSize: width(3.8),
  },
  categoriesText: {
    color: Colors.textBlack,
    fontWeight: 'bold',
    fontSize: width(3),
  },
  pricesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: height(1),
  },
  priceText: {
    color: Colors.textBlack,
    fontWeight: 'bold',
    fontSize: width(4),
  },
  clientDetailsContainer: {
    width: width(90),
    borderRadius: width(4),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(1),
    paddingBottom: height(2),
    paddingTop: height(1.5),
  },
  heading: {
    paddingHorizontal: width(5),
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(4.75),
    marginTop: height(4)
  },
  orText: {
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(5),
    textAlign: 'center',
    marginTop: height(1.5)
  },
  checkBoxContainer: {
    height: height(2.5),
    width: height(2.5),
    borderColor: Colors.placeHolderTextColor,
    borderWidth: width(0.45),
    borderRadius: height(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkBoxInnerContainer: {
    height: height(1),
    width: height(1),
    borderRadius: height(0.9),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.buttonBlue
  },
  checkImage: {
    height: height(2.5),
    width: height(2.5),
  },
  addCardButton: {
    backgroundColor: Colors.buttonSecondaryBlue,
    width: width(38),
    paddingVertical: height(1.7),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(9),
    marginTop: height(3),
  },
  addCardButtonText: {
    color: Colors.backgroundWhite,
    fontSize: width(3.25),
  },
  cardsFlatlist: {
    marginTop: height(2.5),
  },
  clientDataContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  clientImage: {
    height: height(8),
    width: height(8),
    borderRadius: height(4),
  },
  nameContainer: {
    marginLeft: width(7),
    paddingTop: height(1),
  },
  clientName: {
    fontWeight: 'bold',
    fontSize: width(4.3),
  },
  clientText: {
    color: Colors.buttonBlue,
    fontSize: width(3.4),
  },
  paymentMethodsHeadingText: {
    color: Colors.textBlack,
    fontWeight: 'bold',
    fontSize: width(5),
    paddingLeft: width(5),
    paddingVertical: height(3),
  },
  walletContainer: {
    width: width(90),
    borderRadius: width(4),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(1),
    paddingBottom: height(1.25),
    paddingTop: height(1.25),
    paddingHorizontal: width(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height(2),
  },
  walletButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(1),
    backgroundColor: Colors.opacitiveBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width(4),
  },
  addMethodButton: {
    paddingHorizontal: width(5),
    paddingVertical: height(0.5),
    borderRadius: width(5),
    backgroundColor: Colors.buttonBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width(2),
  },
  addMethodButtonText: {
    color: Colors.backgroundWhite,
    fontSize: width(3.5),
  },
});
export default styles;
