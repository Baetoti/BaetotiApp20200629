import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height(8),
    alignItems: 'center'
  },
  backIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2),
    backgroundColor: Colors.backContainerColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIcon: {
    height: totalSize(1.8),
    width: totalSize(1.8),
    backgroundColor: 'transparent',
  },
  trashIconContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(1.8),
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  trashIcon: {
    height: totalSize(2.25),
    width: totalSize(2.25)
  },
  optionsIcon: {
    height: totalSize(2.25),
    resizeMode: 'contain'
  },
  title: {
    fontSize: totalSize(2),
    fontWeight: 'bold',
    color: Colors.textBlack
  }
});
export default styles;
