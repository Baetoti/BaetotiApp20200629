import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';
import {color} from 'react-native-reanimated';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    height: height(13),
    borderBottomLeftRadius: width(3),
    borderBottomRightRadius: width(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    marginTop: height(2),
    width: width(82),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: height(2),
    paddingHorizontal: width(1),
    backgroundColor: Colors.lightWhite,
    borderRadius: width(3),
    elevation: 1,
  },
  imageStyle: {
    height: totalSize(8.5),
    width: totalSize(8.5),
    borderRadius: width(3),
  },
  nameContainer: {
    width: width(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NameText: {
    color: Colors.lightTextBlack,
    fontWeight: 'bold',
    fontSize: width(3.6),
  },
  statusText: {
    color: Colors.gray,
  },
  priceContainer: {
    marginTop: height(0.75),
    flexDirection: 'row',
    width: width(50),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    color: Colors.purplePrimary,
    fontSize: totalSize(1.50)
  },
  totalPriceText: {
    color: Colors.textBlack,
    fontSize: totalSize(1.8),
  },
  RatingContainer: {
    marginTop: height(2),
    width: width(82),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height(2.5),
    backgroundColor: Colors.lightWhite,
    borderRadius: width(3),
    elevation: 1,
  },
  rateUsText: {
    color: Colors.textBlack,
    fontWeight: 'bold',
    fontSize: width(3.6),
  },
  ratingStarsContainer: {
    alignItems: 'center',
    marginTop: height(4),
  },
  veryGoodText: {
    color: Colors.textBlack,
    fontSize: totalSize(1.8),
    marginTop: height(2),
  },
  textInput: {
    width: width(70),
    marginTop: height(2),
    paddingVertical: height(2),
    paddingHorizontal: width(4),
    fontSize: totalSize(1.5),
    borderRadius: width(3),
    height: height(10),
    marginBottom:height(1),
    borderColor: Colors.placeHolderTextColor,
    elevation: 0.8,
    shadowOpacity:0.25,
    shadowColor:Colors.placeHolderTextColor,
    borderWidth: 0.4,
    shadowOffset:{
      height:0,
      width:1
    }
  },
});
export default styles;
