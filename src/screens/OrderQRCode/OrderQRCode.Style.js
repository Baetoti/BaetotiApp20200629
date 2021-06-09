import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    height: height(14),
    width: width(100),
    alignItems: 'center',
    borderBottomLeftRadius: width(4),
    borderBottomRightRadius: width(4)
  },
  containerStyle: {
    marginTop: Platform.OS == 'ios' ? 0 : height(3)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineSeparator: {
    height: 0.25,
    backgroundColor: Colors.placeHolderTextColor,
    width: width(90),
    marginTop: height(1.5)
  },
  orderDetailsContainer: {
    width: width(90),
    borderRadius: width(4),
    paddingVertical: height(1),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(2),
  },
  orderTopContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: width(4)
  },
  boxImageContainer: {
    width: height(6),
    height: height(6),
    borderRadius: width(3),
    backgroundColor: Colors.opacitiveBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxImage: {
    width: height(3),
    height: height(3),
  },
  rowBetween: {
    width: width(65),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: width(4),
    paddingTop: width(1)
  },
  orderIdHeading: {
    fontSize: width(2.7),
    color: Colors.gray
  },
  dateText: {
    fontSize: width(3),
    color: Colors.grayDarker
  },
  orderIdText: {
    fontSize: width(3.3),
    color: Colors.textBlack,
    fontWeight: 'bold',
    marginLeft: width(4),
    width:width(65)
  },
  OrderDetailsBottomContainer: {
    height: height(10),
    paddingVertical: height(1),
    marginTop: height(1.5),
    flexDirection: 'row',
    paddingHorizontal: width(4),
    justifyContent: "space-between"
  },
  bottomDataContainer: {
    // width: width(38),
  },
  fromImage: {
    width: height(2),
    height: height(2),
  },
  toFromText: {
    fontWeight: 'bold',
    fontSize: width(3),
    marginLeft: width(1)
  },
  verticleLine: {
    height: '100%',
    width: 0.37,
    backgroundColor: Colors.placeHolderTextColor,
  },
  addressText: {
    fontSize: width(3),
    color: Colors.gray,
    marginTop: height(1.5),
    maxWidth: width(37)
  },
  qrMainContainer: {
    width: width(90),
    borderRadius: width(4),
    paddingVertical: height(1),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(2),
  },
  qrIconContainer: {
    marginTop: height(5),
    alignSelf: 'center',
    alignItems: 'center',
  },
  qrOrderID: {
    width: width(50),
    marginTop: -height(1),
    color: Colors.grayDarker,
    letterSpacing: width(1.75),
    textAlign: 'center',
    marginBottom: height(3),
    fontSize: width(3.7)
  },
  scanQrText: {
    fontSize: width(3.9),
    color: Colors.placeHolderTextColor,
    textAlign: 'center',
    marginVertical: height(3)
  },
});
;
export default styles