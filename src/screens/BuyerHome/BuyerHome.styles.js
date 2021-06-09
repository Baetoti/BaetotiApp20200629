import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import Colors from '../../utills/Colors'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: width(10)
  },
  elevationConainer: {
    borderRadius: 10,
    backgroundColor: color.white,
    marginTop: height(4),
    height: height(27),
    width: width(85),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    marginTop: height(5),
    width: width(100),
  },
  text: {
    textAlign: 'center',
    color: color.lightBrown,
    fontSize: totalSize(2),
    paddingLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  textContainer: {
    marginVertical: height(2.2),
    marginHorizontal: width(5),
    flexDirection: 'row',
    width: width(90),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  categoryContainer: {
    width: width(35),
    height: height(8),
    borderRadius: 10
  },
  blurBackground: {
    width: width(35),
    height: height(8),
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryText: {
    fontSize: totalSize(1.5),
    color: '#ffffff',
    fontWeight: 'bold'
  },
  dropDownContainer: {
    flexDirection: 'row',
    width: width(18),
    height: height(5),
    backgroundColor: '#ffffff',
    borderRadius: width(1),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dropDown: {
    height: height(8.5),
    width: width(90),
    alignSelf: 'center',
    marginLeft: width(5)
  },
  dropDownItemContainer: {
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1),
    paddingHorizontal: width(3),
  },
  dropDownItemText: {
    fontSize: totalSize(1.6),
    color: color.textBlack
  },
  providerContainer: {
    width: width(35),
    paddingVertical: height(4),
    borderRadius: 10,
    backgroundColor: color.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center'
  },
  providerLogo: {
    width: 60,
    height: 60,
    borderRadius: 60
  },
  providerRestaurant: {
    marginTop: '6%',
    color: color.black
  },
  providerCategory: {
    marginTop: '2%',
    fontSize: totalSize(1.3),
    color: color.lightGray
  },
  searchContainer: {
    width: width(90),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(8),
    marginTop: height(1.5),
    borderRadius: width(2.98),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInnerContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchImage: {
    height: totalSize(2.0),
    width: totalSize(2.0),
    resizeMode: 'contain'
  },
  searchText:{
    width:width(64),
    color : Colors.gray
  },
  arrowDown: {
    height: 10,
    width: 10,
    resizeMode: 'contain'
  },
});
export default styles;
