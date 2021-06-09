import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  modalContainer: {
    flex: 1,
    marginTop: height(5),
    marginBottom: height(5),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: width(90),
    borderRadius: width(7),
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  scroll: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: width(90),
    borderRadius: width(7),
    justifyContent: 'space-between',
  },
  sliderBoxContainer: {
    height: height(35),
  },
  dotStyle: {
    borderWidth: 1,
    borderColor: Colors.backgroundWhite,
    height: totalSize(1),
    width: totalSize(1),
    borderRadius: totalSize(1),
  },
  sliderImage: {
    borderTopLeftRadius: width(7),
    borderTopRightRadius: width(7),
    borderBottomLeftRadius: width(7),
  },
  crossButtonContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2),
    position: 'absolute',
    zIndex: 1,
  },
  crossButton: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: totalSize(2.25),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  multiplyImage: {
    width: totalSize(1.25),
    height: totalSize(1.25),
  },
  priceContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(29),
    position: 'absolute',
    zIndex: 1,
  },
  priceView: {
    height: height(3.5),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'flex-end',
    borderRadius: width(7),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: width(2),
    overflow: 'hidden',
    flexDirection: 'row'
  },
  pricetext: {
    color: Colors.textBlack,
    fontSize: width(3)
  },
  currency: {
    fontSize: width(2)
  },
  perUnitContainer: {
    height: '100%',
    borderRadius: width(7),
    backgroundColor: Colors.opacitiveBlueDark,
    paddingHorizontal: width(4),
    marginLeft: width(3),
    justifyContent: 'center'
  },
  perUnit: {
    color: Colors.buttonBlue,
  },
  buttonContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(13),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  angleLeft: {
    width: totalSize(1.5),
    height: totalSize(1.5),
    tintColor: Colors.backgroundWhite,
  },
  angleRight: {
    width: totalSize(1.5),
    height: totalSize(1.5),
    tintColor: Colors.backgroundWhite,
  },
  itemNameContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemNameText: {
    fontWeight: 'bold',
    fontSize: totalSize(2.3),
    color: Colors.textBlack,
  },
  reportText: {
    fontSize: totalSize(1.75),
    color: Colors.textRedColor,
    textDecorationLine: 'underline'
  },
  ratingStarsContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height(1),
  },
  ratingText: {
    paddingLeft: width(2),
    color: Colors.textBlack,
    fontSize: totalSize(1.8),
    fontWeight: 'bold',
  },
  itemNamePicContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height(0.5),
  },
  panCakeText: {
    fontSize: totalSize(1.6),
    color: Colors.textBlack,
  },
  ellipseImage: {
    height: totalSize(0.5),
    width: totalSize(0.5),
    tintColor: Colors.blue,
    marginLeft: width(2),
    tintColor: Colors.buttonBlue,
  },
  HoneyText: {
    fontSize: totalSize(1.6),
    marginLeft: width(2),
    color: Colors.textBlack,
  },
  storeContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1.5),
    flexDirection: 'row',
  },
  storeName: {
    fontSize: totalSize(1.6),
    color: Colors.buttonBlue,
    marginHorizontal: width(2)
  },
  tagsContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1.5),
  },
  tagText: {
    fontSize: totalSize(1.6),
    color: Colors.textBlack,
  },
  itemSeparator: {
    margin: width(1),
  },
  itemFlatlistContainer: {
    width: width(70),
    alignSelf: 'center',
    marginTop: height(1),
  },
  tagsViewContainer: {
    paddingHorizontal: width(6),
    paddingVertical: height(0.8),
    backgroundColor: Colors.opacitiveBlue,
    borderRadius: width(5),
  },
  tagsText: {
    color: Colors.buttonBlue,
  },
  descriptionTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(3),
  },
  descriptionText: {
    fontSize: totalSize(1.6),
    color: Colors.textBlack,
  },
  allDescriptionText: {
    color: Colors.gray,
    fontSize: totalSize(1.5),
    lineHeight: 20,
    marginTop: height(1)
  },
  swipeContentContainerStyle: {
    height: height(7),
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#0084C4',
    marginBottom: height(2),
    borderRadius: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkImage: {
    height: totalSize(2),
    width: totalSize(2),
  },
  addedToCartText: {
    marginHorizontal: width(1),
    color: Colors.backgroundWhite,
  },
  addToCartText: {
    marginLeft: width(1),
    color: Colors.backgroundWhite,
  },
  trashImage: {
    height: totalSize(2),
    width: totalSize(2),
    marginRight: width(4),
  },
  button: {
    height: height(7),
    width: width(80),
    alignSelf: 'center',
    backgroundColor: Colors.buttonBlue,
    marginBottom: height(2),
    borderRadius: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },


  addtocartedButton: {
    height: height(7),
    width: width(80),
    alignSelf: 'center',
    backgroundColor: Colors.buttonBlue,
    marginBottom: height(2),
    borderRadius: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  issueModalContainer: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: width(90),
    paddingVertical: height(2),
    borderRadius: width(2),
    paddingHorizontal: width(5)
  },
  headingText: {
    fontSize: totalSize(1.85),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  textFieldCotainer: {
    height: height(12),
    borderRadius: width(2),
    width: width(80),
    marginTop: height(2),
    borderWidth: 1,
    borderColor: '#E4E9F2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: width(75),
    height: height(10),
    paddingVertical: 0,
    fontSize: totalSize(1.75),
    color: Colors.textBlack
  },
  submitButton: {
    width: width(50),
    marginTop: height(3),
    backgroundColor: '#0084C4',
    shadowColor: '#0084C4'
  },
  crossButtonContainer1: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.backGroundGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: Platform.OS === 'ios' ? height(3.2) : height(1.2),
    marginRight: width((2))
  },
  closeWhiteImage: {
    height: totalSize(1.5),
    width: totalSize(1.5),
  },
  popUpMenuContainer: {
    // paddingVertical: height(1.5),
    width: width(37),
    backgroundColor: Colors.backgroundColor,
    borderRadius: width(2),
    position: 'absolute',
    zIndex: 1000,
    right: width(5),
    top: height(45),
    elevation: 7,
    borderColor: Colors.backgroundColor,
    shadowOffset: { width: width(2), height: height(0.7) },
    shadowColor: Colors.purplePrimary,
    shadowOpacity: 0.25,
    shadowRadius: width(2),

  },
  popUpMenuItemsContainer: {
    width: width(31),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:height(1)
  },
  itemSeparator1: {
    margin: totalSize(0.6)
  },
  itemImage: {
    height: totalSize(2),
    width: totalSize(2)
  },
  itemText: {
    fontSize: width(3),
    width: width(25),
    color: Colors.textBlack,
    marginLeft: width(2.5)
  }, modalViewContainer: {
    width: width(95),
    alignSelf: 'center',
    flex: 1,
  },
});

export default styles;
