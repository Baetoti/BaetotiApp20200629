import { StyleSheet, ToastAndroid } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width(100)
  },
  descriptionContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingHorizontal: width(4),
    paddingVertical: height(2.5),
    marginTop: height(2),
  },
  titleContainer: {
    width: width(90),
    marginTop: height(0.5),
  },
  itemNameContainer: {
    flexDirection: 'row',
    width: width(82.75),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemNameText: {
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  requestToChangeContainer: {
    backgroundColor: Colors.purplePrimary,
    paddingHorizontal: width(4),
    paddingVertical: height(0.75),
    borderRadius: 30,
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetailsBackground: {
    backgroundColor: Colors.opacitiveGreen,
    paddingHorizontal: width(4),
    paddingVertical: height(0.5),
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestToChangeText: {
    fontSize: totalSize(1.4),
    color: Colors.backgroundWhite,
  },
  titleInputContainer: {
    width: width(82.75),
    fontWeight: 'bold',
    fontSize: totalSize(3),
    paddingVertical: height(1.75),
    color: Colors.black,
  },
  checkIcon: {
    height: height(3),
    width: width(3),
    marginHorizontal: width(2),
  },
  itemDetailsText: {
    fontSize: totalSize(1.5),
    color: Colors.buttonTextGreen,
  },
  categoriesDropDownItemContainer: {
    paddingHorizontal: width(3),
    paddingVertical: height(1.5),
    flexDirection:'row',
    alignItems:'center'
  },
  categoriesDropDownItemText:{
    marginHorizontal:width(3),
    fontSize:totalSize(1.65)
  },
  categoriesDropDown: {
    width: width(82),
    height: height(40),
  },
  CategoriesContainer: {
    marginVertical: height(2),
    borderRadius: width(3),
    paddingHorizontal: width(3),
    height: height(8),
    width: width(82),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.backgroundWhite,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: { height: 0.5, width: 0.5 },
    shadowOpacity: 0.1,
  },
  CategoriesText: {
    color: Colors.textBlack,
  },
  subCategoriesText: {
    color: Colors.gray,
  },
  caretDownImage: {
    width: totalSize(1.5),
    height: totalSize(1.5),
  },
  inputTitle: {
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  descriptionInputContainer: {
    backgroundColor: Colors.inputBackgroundColor,
    height: height(20),
    marginVertical: height(2),
    borderRadius: width(3),
    paddingHorizontal: width(3),
  },
  descriptionInput: {
    maxWidth: width(70),
    color: Colors.textBlack,
    padding: 0,
    marginLeft: width(2.5),
    marginTop: height(2.5),
    height: height(13),
    lineHeight: height(3),
  },
  flatListContainer: {
    height: height(8),
  },
  lineSeparator: {
    borderWidth:0.2,
    backgroundColor: Colors.gray,
    width: width(90),
    marginVertical: height(1),
    marginLeft: -width(4),
    opacity:0.5
  },
  toggleButtonContainer:{
    width: width(82.75),
    marginVertical:height(1),
    alignItems:'center',
    justifyContent:'space-between'
  },
  activateText:{
    fontSize:width(4)
  },
  tagsUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(82),
    marginTop: height(2),
  },
  optionalText: {
    color: Colors.grayDarker,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
  },
  inputLocationContainer: {
    height: height(8),
    width: width(82),
    backgroundColor: Colors.inputBackgroundColor,
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(2),
    alignItems: 'center',
    marginTop: height(1),
  },
  locationIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(1.5),
    backgroundColor: Colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    height: totalSize(3),
  },
  uploadVideoText: {
    marginHorizontal: width(2),
    fontSize: totalSize(1.8),
    color: Colors.gray,
  },
  detailsImagesContainer: {
    paddingHorizontal: width(4),
    marginTop: height(2.5),
  },
  detailImage: {
    height: totalSize(8.75),
    width: totalSize(8),
    borderRadius: 9,
  },
  availableByOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(82),
    marginTop: height(2.5),
  },
  availableByOrderButtonContainer: {
    width: width(40),
    paddingVertical: height(2),
    borderRadius: width(4),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  availableByOrderButtonText: {
    fontSize: totalSize(1.6),
  },
  qtyContainer: {
    width: width(39),
    paddingVertical: height(2),
    borderRadius: width(4),
    backgroundColor: Colors.inputBackgroundColor,
    paddingHorizontal: width(4),
    justifyContent: 'center',
  },
  qtyRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width(31),
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  qtyPriceTitle: {
    fontSize: totalSize(1.7),
    color: Colors.grayDarker,
  },
  qtyPriceText: {
    fontSize: totalSize(2.2),
    color: Colors.textBlack,
    width: width(12),
  },
  quantityUnitDropDown: {
    width: width(70),
    height: height(10),
    borderColor: Colors.placeHolderTextColor,
    borderWidth: 1
  },
  quantityUnitDropDownItemContainer: {
    paddingVertical: height(1.5),
    paddingHorizontal: width(2),
  },
  quantityUnitDropDownItemText: {
    fontSize: totalSize(1.6),
    color: Colors.textBlack,
  },
  kgContainer: {
    paddingVertical: height(1),
    paddingHorizontal: width(2.5),
    width: width(14),
    flexDirection: 'row',
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(2),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kgText: {
    fontSize: totalSize(1.4),
    color: Colors.grayDarker,
  },
  caretDownImageKg: {
    width: totalSize(1),
    height: totalSize(1),
  },
  currencyText: {
    fontSize: totalSize(2),
    color: Colors.gray,
  },
  addItemButtonContainer: {
    backgroundColor: Colors.inputBackgroundColor,
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    borderRadius: width(15),
    marginTop: height(2),
    marginRight: width(1),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItemText: {
    color: Colors.purplePrimary,
    fontSize: totalSize(1.5),
  },
  closeTag: {
    width: totalSize(1.2),
    height: totalSize(1.2),
    marginLeft: width(2),
  },
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  swcondaryContainer: {
    width: width(80),
    paddingVertical: height(3),
    paddingHorizontal: width(5),
    maxHeight: height(50),
    borderRadius: 25,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  text: {
    maxWidth: '80%',
    alignSelf: 'center',
    fontSize: totalSize(1.7),
    paddingBottom: height(2),
  },
  button: { width: '60%' },
  modalHeading: {
    fontSize: width(3.6),
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  textInputModal: {
    width: '25%',
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    borderRadius: width(2),
    marginVertical: height(2),
    fontSize: width(3.6),
    borderColor: Colors.gray,
    borderWidth: 0.3,
    height: height(5),
    color: Colors.black
  },
  textInputModalQuantity: {
    width: '100%',
    paddingHorizontal: width(3),
    paddingVertical: height(1),
    borderRadius: width(2),
    marginVertical: height(2),
    fontSize: width(3.6),
    borderColor: Colors.gray,
    borderWidth: 0.3,
    alignSelf: 'center',
    height: height(5),
    color: Colors.black
  },
  textModalDropDown: {
    fontSize: width(3.6),
  },
  modalDropDownContainer: {
    width: width(30),
    paddingHorizontal: width(3),
    height: height(5),
    borderRadius: width(2),
    marginVertical: height(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 0.3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  priceDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  errorText: {
    color: Colors.textRedColor,
    marginBottom: height(1.5)
  },
  errorTextModal: {
    color: Colors.textRedColor,
    marginBottom: height(1),
    fontSize: width(2.8)
  }
});
export default styles;
