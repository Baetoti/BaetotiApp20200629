import { StyleSheet,Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
  },
  modalViewContainer: {
    width: width(95),
    alignSelf: 'center',
    flex: 1,
  },
  crossButtonContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.backGroundGray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop:Platform.OS === 'ios' ? height(3.2) : height(1.2),
    marginRight:width((2))
  },
  closeWhiteImage: {
    height: totalSize(1.5),
    width: totalSize(1.5),
  },
  popUpMenuContainer: {
    marginRight:width((2)),
    marginTop: height(2),
    paddingVertical: height(1.5),
    width: width(37),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'flex-end',
    borderRadius: width(2),
  },
  popUpMenuItemsContainer: {
    width: width(31),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  itemSeparator: {
    margin: totalSize(0.6)
  },
  itemImage: {
    height: totalSize(2),
    width: totalSize(2)
  },
  itemText: {
    fontSize: width(3),
    width:width(25),
    color: Colors.textBlack,
    marginLeft: width(2.5)
  }
});

export default styles;
