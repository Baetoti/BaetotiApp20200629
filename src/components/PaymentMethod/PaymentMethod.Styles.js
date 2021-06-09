import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(95),
    alignSelf: 'center',
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingBottom: height(2)
  },
  methodContainer: {
    width: width(43),
    height: height(8),
    backgroundColor: Colors.backgroundWhite,
    marginTop: height(1.5),
    marginHorizontal: width(1.7),
    borderRadius: width(3),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(4)
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
  methodImage: {
    height: height(3),
    width: height(3),
    resizeMode: 'contain',
    marginLeft: width(2)
  },
  methodName: {
    fontSize: width(3.25),
    marginLeft: width(2),
  },
});
export default styles;
