import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor
  },
  scrollContainer: {
    justifyContent: 'space-between'
  },
  aboutContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: height(2.5),
    marginTop: height(3)
  },
  inputTitle: {
    fontWeight: 'bold',
    marginHorizontal: width(4),
    marginBottom: height(1),
    color: Colors.textBlack
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: Colors.gray,
    width: width(90),
    marginVertical: height(1.5)
  },
  profileDetailContainer: {
    paddingHorizontal: width(4),
    flexDirection: 'row',
    marginTop: height(2)
  },
  profilePic: {
    height: totalSize(8),
    width: totalSize(8),
    borderRadius: totalSize(1)
  },
  profileNameContainer: {
    marginLeft: width(4),
    justifyContent: 'space-evenly'
  },
  nameText: {
    fontSize: totalSize(2.25),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  privateDropDown: {
    height: height(7.5),
    width: width(14)
  },
  privateDropDownItemContainer: {
    paddingVertical: height(1),
    paddingHorizontal: width(2)
  },
  privateDropDownItemText: {
    fontSize: totalSize(1.2),
    color: Colors.textBlack
  },
  privateConainer: {
    width: width(22),
    justifyContent: "space-between",
    backgroundColor: Colors.inputBackgroundColor,
    borderRadius: width(4),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(2),
    paddingVertical: height(0.8)
  },
  privateInnerContainer: {
    width: width(14),
    alignItems: 'center',
    paddingLeft: width(1),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  privateText: {
    fontSize: totalSize(1.2),
    color: Colors.purplePrimary,
    fontWeight: 'bold',
  },
  arrowDown: {
    height: totalSize(1),
    width: totalSize(1),
  },
  inputContainer: {
    backgroundColor: Colors.inputBackgroundColor,
    marginTop: height(2),
    borderRadius: width(3),
    paddingHorizontal: width(2),
    paddingVertical: height(2),
    width: width(82),
    alignSelf: 'center'
  },
  coutryTextFieldContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: Colors.inputBackgroundColor,
    height: height(7),
    marginTop: height(2),
    borderRadius: width(3),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  flagImage: {
    marginLeft: width(1),
    height: totalSize(3),
    width: totalSize(3),
  },
  arrowdownImage: {
    height: totalSize(1.2),
    width: totalSize(1.2),
    resizeMode: 'contain'
  },
  countrytextInput: {
    width: width(50),
    height: height(5),
    paddingVertical: 0,
    borderLeftColor: Colors.gray,
    borderLeftWidth: 1,
    paddingLeft: width(2)
  },
  generalInput: {
    fontSize: totalSize(1.8),
    paddingLeft: width(2),
    color: Colors.textBlack,
    paddingVertical: 0
  },
  availableTopContainer: {
    paddingRight: width(3),
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'center'
  },
  plusIcon: {
    width: totalSize(1.85),
    height: totalSize(1.85)
  },
  closeIcon: {
    width: totalSize(2.5),
    height: totalSize(2.5)
  },
  dayContainer: {
    marginVertical: height(1)
  },
  dayTitle: {
    fontSize: totalSize(2),
    color: Colors.textBlack
  },
  dayHeadContainer: {
    width: width(90),
    paddingHorizontal: width(4),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  daysContentContainer: {
    width: width(90),
    marginTop: height(1),
    paddingHorizontal: width(3),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeContainer: {
    width: width(40),
  },
  selectContainer: {
    marginTop: height(1),
    width: width(40),
    height: height(5),
    borderRadius: width(2),
    backgroundColor: Colors.inputBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(2),
    justifyContent: 'space-between'
  },
  amArrowDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width(12),
    justifyContent: 'space-between'
  },
  amText: {
    fontSize: totalSize(1.5),
    color: Colors.gray
  },
  timeText: {
    fontWeight: "bold",
    color: Colors.textBlack
  },
  startTimeText: {
    fontSize: totalSize(1.5),
    color: Colors.gray
  },
  DatePicker: {
    marginLeft: width(100),
    width: 0,
    height: 0
  }
});
export default styles;
