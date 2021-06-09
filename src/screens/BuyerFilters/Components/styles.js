import { StyleSheet } from 'react-native';
import color from '../../../utills/Colors';
import { height, width, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  textFieldContainer: {
    width: width(90),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(9),
    // marginVertical: height(1.5),
    borderRadius: width(2.98),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldInnerContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textFieldImage: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
  textInput: {
    width: '80%',
    paddingVertical: 0,
    fontSize: totalSize(2.1),
    color: color.black,
  },
  heading: {
    width: width(90),
    textAlign: 'left',
    alignSelf: 'center',
    fontSize: totalSize(2),
    paddingVertical: height(1.9),
    color: color.textBlack,
  },
  locationImage: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  dropDown: {
    marginTop: -height(1),
    height: height(52.5),
    width: width(90),
    marginLeft: width(5),
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    paddingBottom:height(2)
  },
  dropDownItemContainer: {
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.25),
    paddingHorizontal: width(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownItemText: {
    fontSize: totalSize(1.65),
    color: color.textBlack,
    paddingLeft: width(3)
  },
  rangeComponent: {
    flexDirection: 'row',
    borderRadius: width(1.5),
    paddingVertical: height(2.3),
    width: width(43),
    backgroundColor: color.backgroundWhite,
    paddingHorizontal: '7%',
    justifyContent: 'space-between',
  },
  range: {
    fontSize: width(4.5)
  }
});
export default styles;
