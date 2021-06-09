import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'space-between',
    width: width(100)
  },
  scroll: {
    width: width(100),
    // maxHeight: Platform.OS == 'ios' ? height(70) : height(80)
  },
  scrollContainer: {
    alignItems: 'center'
  },
  tagsContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: height(2.5),
    marginTop: height(3),
  },
  tagsUpperContainer: {
    width: width(90),
    marginBottom: height(1.25),
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
  coverImagesContainer: {
    paddingHorizontal: width(4),
    marginTop: height(1.5),
  },
  coverImage: {
    height: totalSize(8.75),
    width: totalSize(8),
    borderRadius: 9,
  },
  inputTitle: {
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  optionalText: {
    color: Colors.grayDarker,
    fontSize: totalSize(1.5),
  },
  inputLocationContainer: {
    height: height(8),
    width: width(82),
    backgroundColor: Colors.inputBackgroundColor,
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(2),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height(1.6),
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
  lineSeparator: {
    height: 0.5,
    backgroundColor: Colors.lightGray,
    width: width(90),
    marginTop: height(7.08),
    position: 'absolute',
    zIndex: -1,
  },
  line: {
    height: 0.5,
    backgroundColor: Colors.placeHolderTextColor,
    width: width(90),
    marginVertical: height(1)
  },
  addItemText: {
    color: Colors.purplePrimary,
    fontSize: width(4),
    alignSelf: 'center',
    marginTop: height(1)
  },
  renderTabFooter: {
    width: width(6),
    height: height(0.5),
    borderRadius: totalSize(10),
    backgroundColor: Colors.purplePrimary,
    marginTop: height(1.75),
  },
  post: {
    width: width(90),
  },
  topWhiteContainer: {
    width: width(90),
    flexDirection: 'row',
    paddingHorizontal: width(4),
    paddingVertical: height(1),
    justifyContent: 'space-between',
  },
  itemImage: {
    height: height(12.5),
    width: width(22),
    borderRadius: totalSize(1.5),
  },
  itemDetailContainer: {
    width: width(57),
  },
  topRowContainer: {
    flexDirection: 'row',
    width: width(60),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width(2),
  },
  editIcon: {
    width: width(5),
    height: width(5),
    marginTop: -height(2.5)
  },
  itemNameText: {
    fontWeight: 'bold',
    fontSize: totalSize(2),
  },
  ratingContainer: {
    width: width(21),
    flexDirection: 'row',
  },
  ratingContainer1: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderBottomRightRadius: width(2),
  
  },
  ratingText: {
    fontSize: totalSize(1.5),
    fontWeight: 'bold',
  },
  postsContentContainer: {
    paddingVertical: height(2.5),
    paddingHorizontal: width(0.5),
  },
  itemInfoContainer: {
    flexDirection: 'row',
  },
  itemIdHeading: { fontSize: totalSize(1.3), color: Colors.gray },
  itemIdNumber: {
    fontSize: totalSize(1.3),
    color: Colors.purplePrimary,
    marginLeft: width(1)
  },
  flatList: {
    //flex:1
  },
  itemPriceContainer: {
    flexDirection: 'row',
    width:width(60),
    paddingHorizontal: width(2),
  },
  itemPriceHeading: {
    fontSize: totalSize(1.5),
    color: Colors.textBlack,
    fontWeight: 'bold',
  },
  itemPriceValue: {
    fontSize: totalSize(1.5),
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  currency:{
    fontSize: width(2.5)
},
perUnitContainer:{
    backgroundColor:Colors.opacitivePurple,
    borderRadius: width(10),
    paddingHorizontal: width(3),
    paddingVertical: height(0.3),
    marginLeft: width(1)
},
perUnit:{
    fontSize: width(3.2),
    color:Colors.purplePrimary
}
});
export default styles;
