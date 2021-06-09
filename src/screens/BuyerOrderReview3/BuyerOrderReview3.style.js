import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroundWhite,
  },
  mainContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: color.ofwhite,
  },
  header: {
    width: width(100),
    paddingHorizontal: width(5),
    backgroundColor: color.backgroundWhite,
    borderBottomLeftRadius: width(8),
    borderBottomRightRadius: width(8),
    paddingBottom: height(2),
  },
  headerContainer: {
    width: width(100),
    paddingHorizontal: width(5),
    alignSelf: 'center',
    backgroundColor: color.backgroundWhite,
  },
  headerTitle: {
    color: color.textBlack,
  },
  backIconContainerStyle: {
    backgroundColor: color.opacitiveLightGray,
  },
  subHeading: {
    color: color.lightGray,
    textAlign: 'center',
    marginTop: -height(1.7),
    fontSize: width(3.6),
  },
  id: {
    color: color.placeHolderTextColor,
    fontSize: width(3.25),
  },
  idNumber: {
    fontSize: width(3.35),
    color: color.textBlack,
    fontWeight: 'bold',
  },
  flatlist: { marginTop: height(2), width: width(90), alignSelf: 'center' },
  flatlistCont: {
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: width(3),
    paddingVertical: height(2),
    borderRadius: width(4),
    backgroundColor: color.backgroundWhite,
  },
  img: {
    width: width(17),
    height: width(17),
    borderRadius: width(2),
  },
  imgCircle: {
    width: width(18),
    height: width(18),
    borderRadius: width(18),
  },
  heading: {
    marginTop: height(2),
    marginHorizontal: '13%',
    fontWeight: 'bold',
    fontSize: width(5),
    letterSpacing: 0,
    textAlign: 'left',
  },
  headingTop: {
    marginTop: height(1),
    fontWeight: 'bold',
    fontSize: width(4.5),
  },
  comment: {
    color: color.buttonBlue,
    marginHorizontal: '13%',
    fontSize: width(3),
    textAlign: 'left',
  },
  ratingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    marginTop: height(4),
    height: height(8),
    paddingHorizontal: '4%',
    backgroundColor: color.backgroundWhite,
    alignItems: 'center',
    borderRadius: width(2),
    borderColor: color.placeHolderTextColor,
    elevation: 0.8,
  },
  rating: {
    fontSize: width(3.75),
    color: color.gray,
  },
  good: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width(4),
    marginTop: height(2),
  },
  textInputContainer: {
    width: '95%',
    marginBottom: height(2),
    marginTop: height(3),
    paddingVertical: height(1),
    paddingHorizontal: width(2),
    fontSize: totalSize(1.5),
    borderRadius: width(3),
    height: height(20),
    borderColor: color.placeHolderTextColor,
    borderWidth: 0.5,
    elevation: 0.8,
    alignSelf: 'center',
    color: color.textBlack,
  },
  textInput: {
    width: '95%',
    fontSize: totalSize(1.5),
    height: height(12),
    alignSelf: 'center',
    color: color.textBlack,
    paddingTop: height(2),
    backgroundColor: '#ffffff',
  },
  textInputTop: {
    width: '95%',
    marginBottom: height(2),
    marginTop: height(3),
    paddingHorizontal: width(4),
    fontSize: totalSize(1.5),
    borderRadius: width(3),
    height: height(20),
    borderColor: color.placeHolderTextColor,
    borderWidth: 0.4,
    elevation: 0.8,
    alignSelf: 'center',
    color: color.textBlack,
    paddingTop: height(2.5)
  },
  skuRowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: width(65)
  },
  reviewImage:{
    width: height(5),
    height: height(5),
    borderRadius: width(3),
    marginRight: width(1.5)
  },
  reviewImagesContainer:{
    alignItems:'center',
  }
});
export default styles;
