import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F7',
  },
  mainContainer: {
    flex: 1
  },
  addButtonContainer:{
    position:'absolute',
    top:height(70),
    right:width(5),
    height:totalSize(6),
    width:totalSize(6),
    backgroundColor:Colors.purplePrimary,
    zIndex:1,
    borderRadius:totalSize(3),
    alignItems:'center',
    justifyContent:'center'
  },
  sliderContainer: {
    paddingVertical: height(1.5),
    backgroundColor: Colors.backgroundWhite,
    paddingTop: 0,
    paddingBottom: 0
  },
  sliderBoxContainer: {
    height: height(40)
  },
  dotStyle: {
    borderWidth: 1,
    borderColor: Colors.backgroundWhite,
    height: totalSize(1),
    width: totalSize(1),
    borderRadius: totalSize(1)
  },
  sliderImage: {
    borderTopLeftRadius: width(7),
    borderTopRightRadius: width(7),
    borderBottomLeftRadius: width(7)
  },
  ratingContainer: {
    // height:height(10),
    height: height(15),
    width: width(90),
    backgroundColor: Colors.backgroundColor,
    alignSelf: 'center',
    borderRadius: width(2),
    marginTop: -height(6)
  },
  imageContainer: {
    marginTop: height(2),
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageViewContainer: {
    height: totalSize(6),
    width: totalSize(6),
    backgroundColor: Colors.backgroundWhite,
    borderRadius: width(1.5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoImage: {
    height: totalSize(5.5),
    width: totalSize(5.5),
    borderRadius: width(1.5),
  },
  infoRating: {
    width: width(63),
    marginLeft: width(2),
  },
  infoText: {
    color: Colors.textBlack,
    fontSize: width(3.5),
    fontWeight: 'bold'
  },
  ratingView: {
    flexDirection: 'row',
    marginTop: height(0.5)
  },
  ratingText: {
    color: Colors.textBlack,
    fontSize: width(2.75),
    fontWeight: 'bold',
    paddingLeft: width(1)
  },
  providerCommmentText: {
    color: Colors.lightGray,
    fontSize: width(2.7),
    marginTop: height(0.5)
  },
  chatShareButtonContainer: {
    flexDirection: 'row',
    width: width(25),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatButton: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageImage: {
    height: totalSize(2.5),
    width: totalSize(2.5)
  },
  likeImage: {
    height: totalSize(2.5),
    width: totalSize(2.5)
  },
  locationContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1),
    flexDirection: 'row',
    alignItems: 'center'
  },
  mapImage: {
    height: totalSize(2.25),
    width: totalSize(2.25)
  },
  addressText: {
    color: Colors.gray,
    fontSize: width(2.75),
    fontWeight: 'bold',
    paddingLeft: width(2)
  },
  tabContainer: {
    marginTop: height(2),
    width: width(90),
    alignSelf: 'center',
    // marginLeft: width(8),
  },
  tabtextStyle: {
    // fontWeight: 'bold',
    fontSize: width(3.3)
  },
  renderTabFooter: {
    width: totalSize(3),
    height: totalSize(0.4),
    borderRadius: totalSize(0.25),
    backgroundColor: Colors.purplePrimary,
    marginTop: height(1.5)
  },
  tabInnerContainer: {
    alignItems: 'center'
  },
  selectedTab: {
    color: Colors.textBlack,
    fontSize: totalSize(1.8),
  },
  unSelectedTab: {
    color: Colors.gray,
    fontSize: totalSize(1.8),
  },
  descriptionContainer: {
    marginTop: height(2),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    paddingBottom: height(2)
  },
  descriptionTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2)
  },
  descriptionHeadingText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  textInput: {
    width: width(80),
    paddingHorizontal: width(1),
    fontSize: width(3),
    borderRadius: width(3),
    color: Colors.gray,
    alignSelf: 'center',
  },
  overViewMapContainer: {
    marginTop: height(2),
    height: height(30),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapContainer: {
    height: height(28),
    width: width(85),
    overflow: 'hidden',
    borderRadius: width(5),
    marginTop: height(1),
    marginBottom: height(1)
  },
  map: {
    height: '100%',
    width: '100%'
  },
  pinblueImage: {
    height: totalSize(4),
    width: totalSize(4),
    tintColor: Colors.purplePrimary
  },
  plainView: {
    width: width(50),
    height: height(5),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundWhite,
    marginBottom: height(2)
  },
  plainViewText: {
    color: Colors.gray,
    fontSize: width(3)
  },
  overViewTagsContainer: {
    marginTop: height(2),
    height: height(72),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  overViewTagsTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(5)
  },
  overViewTagsHeadingText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  overViewTagsFlatListContainer: {
    marginTop: height(2),
  },
  tagsViewContainer: {
    marginLeft: width(2),
    width: width(40),
    paddingVertical: height(1),
    backgroundColor: Colors.opacitiveLightWhite,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: width(2),
    elevation: 0.5
  },
  tagImagesView: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: width(2),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagImage: {
    height: totalSize(2.5),
    width: totalSize(2.5),
    tintColor: Colors.purplePrimary
  },
  tagTitleText: {
    width: width(22),
    fontSize: width(2.8),
    color: Colors.textBlack,
  },
  videoContainer: {
    marginTop: height(2),
    height: height(30),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    marginBottom: height(6)
  },
  videoTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2)
  },
  videoText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  videoPlayerContainer: {
    marginTop: height(2),
    width: width(80),
    alignSelf: 'center'
  },
  videoPlayer: {
    borderRadius: width(3),
    padding: 10
  },
  aboutAuthorContainer: {
    marginTop: height(2),
    paddingVertical: height(1.5),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2)
  },
  aboutAuthorTextContainer: {
    width: width(80),
    alignSelf: 'center'
  },
  aboutAuthorText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack,
    marginTop: height(1)
  },
  authorImageContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  authorImage: {
    height: totalSize(7),
    width: totalSize(7),
    borderRadius: totalSize(3.5)
  },
  authornameContainer: {
    width: width(35),
    marginLeft: width(1)
  },
  authorname: {
    fontSize: width(3.8),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  sinceText: {
    fontSize: width(3),
    color: Colors.gray
  },
  joiningText: {
    fontSize: width(3),
    color: Colors.purplePrimary
  },
  privateContainer: {
    height: height(4),
    width: width(25),
    backgroundColor: Colors.opacitiveBackGroundPurple,
    borderRadius: width(4),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  privateText: {
    width: width(15),
    fontSize: width(3),
    color: Colors.purplePrimary,
    paddingLeft: width(2)
  },
  userImage: {
    height: totalSize(1.5),
    width: totalSize(1.5),
    tintColor: Colors.purplePrimary
  },
  authorInfoContainer: {
    width: width(80),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2),
    flexDirection: 'row'
  },
  infoLabelText: {
    fontSize: width(3),
    color: Colors.gray,
  },
  authorInfoText: {
    textAlign: 'right',
    fontSize: width(3),
    color: Colors.textBlack,
    width: width(45),
  },
  socailMedaiTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2)
  },
  socailMedaiText: {
    fontSize: width(3.3),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  socailMedaiIconContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: height(1.5)
  },
  faceBookIconImage: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5)
  },
  socailMediaIconImage: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    marginLeft: width(2)
  },
  openHourContainer: {
    marginTop: height(2),
    paddingVertical: height(1.5),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2)
  },
  openHourTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1)
  },
  openHourText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  daysContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2)
  },
  daysDataContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  dayText: {
    fontSize: width(3),
    color: Colors.gray,
  },
  activeHoursText: {
    textAlign: 'right',
    fontSize: width(3),
    color: Colors.textBlack,
  },
  closedText: {
    textAlign: 'right',
    fontSize: width(3),
    color: '#CD201F',
  },
  priceRangeContainer: {
    marginTop: height(2),
    paddingVertical: height(1.5),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2)
  },
  priceRangeTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1)
  },
  priceRangeText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  actualPriceRangeContainer: {
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    width: width(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: height(1)
  },
  dollarText: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: '#000000'
  },
  grayDollarText: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: Colors.grayDarker
  },
  moderateText: {
    fontSize: width(3),
    fontWeight: 'bold',
    color: Colors.gray,
    marginTop: height(1)
  },
  line: {
    width: width(90),
    borderBottomWidth: 0.30,
    marginTop: height(1.8),
    borderColor: Colors.placeHolderTextColor,
    borderStyle: 'dashed',
    borderRadius: 1
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: Colors.lightGray,
    width: width(90),
    marginTop: height(10.57),
    position: 'absolute',
    zIndex: -2,
  },
  verticalLine: {
    height: height(10),
    width: width(0.2),
    backgroundColor: Colors.placeHolderTextColor,
  },
  actualPriceRangetext: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  rateText: {
    fontSize: width(3),
    fontWeight: 'bold',
    color: Colors.gray,
    marginTop: height(1),
    textAlign: 'right'
  },
  instagramGalleryContainer: {
    marginTop: height(2),
    paddingVertical: height(1.5),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    marginBottom: height(2)
  },
  instagramGalleryTextContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(1)
  },
  instagramGalleryText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  itemsContainer: {
    paddingVertical: height(1.5),
    width: width(90),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginVertical: height(2),
    borderRadius: width(2)
  },
  instagramGalleryImageContainer: {
    width: width(80),
    alignSelf: 'center',
    marginTop: height(2)
  },
  instagramImage: {
    height: totalSize(8),
    width: totalSize(8),
    borderRadius: width(3)
  },
  itemTextContainer: {
    width: width(80),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(1)
  },
  itemText: {
    fontSize: width(3.6),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  seeAllText: {
    fontSize: width(3.6),
    color: Colors.purplePrimary
  },
  flatListContainer: {
    marginTop: height(1),
  },
  itemSeparator: {
    margin: totalSize(0.8)
  },
  flatListMainContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImageBackground: {
    height: totalSize(9),
    width: totalSize(9),
    justifyContent: 'space-between'
  },
  itemLeftContainer: {
    height: height(2),
    width: width(9),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(0.7),
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: width(3),
    marginRight: width(1)
  },
  itemLeftText: {
    color: Colors.backgroundWhite,
    fontSize: width(2)
  },
  starImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width(1),
    marginBottom: height(0.5)
  },
  starImage: {
    height: totalSize(1),
    width: totalSize(1),
  },
  itemNameContainer: {
    width: width(45),
    marginHorizontal: width(2)
  },
  itemNameText: {
    fontWeight: 'bold',
    fontSize: width(3.3),
    color: Colors.textBlack
  },
  personRatingText: {
    color: Colors.backgroundWhite,
    fontSize: width(3.3),
    marginHorizontal: width(1),
  },
  itemNamePicContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  panCakeText: {
    fontSize: width(3),
    color: Colors.textBlack,
  },
  ellipseImage: {
    height: totalSize(0.5),
    width: totalSize(0.5),
    tintColor: Colors.blue,
    marginHorizontal: width(1),
    tintColor: Colors.purplePrimary
  },
  HoneyText: {
    fontSize: width(3),
    marginHorizontal: width(1),
    color: Colors.textBlack
  },
  descriptionText: {
    fontSize: width(2.2),
    color: Colors.gray
  },
  priceText: {
    fontSize: width(3),
    color: Colors.textBlack
  },
  doneImageContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.purplePrimary,
    borderRadius: totalSize(2.25)
  },
  doneImage: {
    height: totalSize(1.75),
    width: totalSize(1.75)
  },
  cartImageContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.opacitiveBackGroundPurple,
    borderRadius: totalSize(2.25)
  },
  cartImage: {
    height: totalSize(1.75),
    width: totalSize(1.75),
  },
  orderButton: {
    height: height(7),
    width: width(90),
    backgroundColor: Colors.purplePrimary,
    marginBottom: height(2),
    marginTop: height(1),
    alignSelf: 'center',
    borderRadius: width(2),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
  orderButtonTextContainer: {
    width: width(75),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: width(2), height: height(0.7) },
    shadowColor: Colors.purplePrimary,
    shadowOpacity: 0.25,
    shadowRadius: width(2)
  },
  orderText: {
    color: Colors.backgroundWhite,
    fontSize: width(3.5),
    fontWeight: 'bold'
  },
  ratingsContainer: {
    marginTop: height(2)
  },
  ratingsTextContainer: {
    width: width(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  averageRating: {
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(8)
  },
  totalRatingContainer: {
    width: width(40),
  },
  ratingsText: {
    color: Colors.opacitiveTextBlack,
    fontSize: width(2.7),
  },
  totalNumberRatingsText: {
    color: Colors.textBlack,
    fontSize: width(3),
  },
  dropDownContainer: {
    flexDirection: 'row',
    width: width(30),
    height: height(6),
    backgroundColor: '#ffffff',
    borderRadius: width(3),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dropDown: {
    height: height(12),
    width: width(30)
  },
  dropDownItemContainer: {
    height: height(4),
    paddingHorizontal: width(3),
    justifyContent: 'center'
  },
  dropDownItemText: {
    fontSize: width(3),
    color: Colors.textBlack,
  },
  dropDownInnerConainer: {
    width: width(30),
    borderRadius: width(3),
    justifyContent: "space-between",
    backgroundColor: Colors.backgroundWhite,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(3),
    paddingVertical: height(0.8)
  },
  selectedValueText: {
    color: Colors.textBlack,
    fontSize: width(3),
  },
  arrowdownImage: {
    width: width(2.7),
    width: width(2.7)
  },
  ratingsFlatListContainer: {
    marginTop: height(2)
  },
  ratingViewContainer: {
    paddingVertical: height(1.5),
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    backgroundColor: Colors.backgroundWhite
  },
  ratingInfoView: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  personImage: {
    height: totalSize(5.5),
    width: totalSize(5.5),
    borderRadius: totalSize(2)
  },
  personNameContainer: {
    width: width(42),
  },
  personNameText: {
    fontWeight: 'bold',
    color: Colors.textBlack,
    fontSize: width(3)
  },
  starsContainer: {
    width: width(19),
    overflow: 'visible',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  dateText: {
    fontSize: width(3),
    color: Colors.blackColorOpacitive
  },
  productContainer: {
    width: width(70),
    marginTop: height(0.6),
    paddingHorizontal: width(2),
  },
  productflatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productImage: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: width(2)
  },
  commentContainer: {
    width: width(57),
    marginHorizontal: width(1.5)
  },
  productname: {
    color: Colors.textBlack,
    fontSize: width(2.7),
    fontWeight: 'bold'
  },
  productRatingView: {
    width: width(11),
    paddingVertical: height(0.3),
    backgroundColor: Colors.purplePrimary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(3),
    marginLeft: width(2),
    flexDirection: 'row'
  },
  commmentText: {
    color: Colors.lightGray,
    fontSize: width(2.8)
  },
  button: {
    height: height(7),
    width: width(80),
    alignSelf: 'center',
    backgroundColor: Colors.backgroundWhite,
    marginBottom: height(2),
    borderRadius: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  tagsUpperContainer: {
    width: width(90),
    // paddingHorizontal: width(4),
    marginVertical: height(1.25),
    // backgroundColor:'blue'
  },
  subCategoriesButton: {
    height: height(3.3),
    paddingHorizontal: totalSize(1.9),
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subCategoriesContainer: {
    width: width(90),
    marginTop: height(0.75),
    alignSelf: 'flex-end',
    paddingHorizontal: width(4),
  },
  currency:{
    fontSize: width(2.5)
},
perUnitContainer:{
    backgroundColor:Colors.opacitivePurple,
    borderRadius: width(10),
    paddingHorizontal: width(3),
    paddingVertical: height(0.3),
    marginHorizontal: width(1)
},
perUnit:{
    fontSize: width(3.2),
    color:Colors.purplePrimary
}
});
export default styles