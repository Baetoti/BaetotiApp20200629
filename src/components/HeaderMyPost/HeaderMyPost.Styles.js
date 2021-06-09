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
  leftImageContainer: {
    width: totalSize(7),
    height: totalSize(7),
    borderRadius: totalSize(3),
    borderColor: Colors.backgroundWhite,
    borderWidth: totalSize(0.5),
    overflow: 'hidden',
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.2,
  },
  emptyView:{
    width: totalSize(7),
    height: totalSize(7),
  },
  profileImage: {
    width: totalSize(7),
    height: totalSize(7),
  },
  title: {
    fontSize: totalSize(2),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  rightIconsContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  trashIconContainer: {
    height: totalSize(4),
    width: totalSize(4),
    borderRadius: totalSize(1.8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashIcon: {
    height: totalSize(1.65),
    width: totalSize(1.65)
  },
  searchIcon: {
    height: totalSize(2.25),
    width: totalSize(2.25)
  },
  plusIconContainer: {
    marginLeft: width(2),
    height: totalSize(4.5),
    width: totalSize(4.65),
    backgroundColor: Colors.backgroundWhite,
    borderRadius: totalSize(1.6),
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default styles;
