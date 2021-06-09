import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: height(8),
    alignItems: 'center',
    marginTop: height(2),
  },
  headerLeft: {
    width: width(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    width: width(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowLeft: {
    width: totalSize(1.8),
    height: totalSize(1.8),
  },
  titleText: {
    color: Colors.textBlack,
    fontSize: totalSize(2),
    fontWeight: 'bold',
  },
  clearText: {
    color: Colors.textBlack,
    fontSize: width(4),
  },
});
export default styles;
