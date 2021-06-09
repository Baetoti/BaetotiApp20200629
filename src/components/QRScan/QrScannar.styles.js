import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    height: height(100),
    width: width(100),
    alignSelf: 'center',
    overflow: 'hidden',
    paddingTop: height(5)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(100),
    alignSelf: 'center',
    height: height(20),
    paddingTop: height(3),
    paddingHorizontal: width(5),
  },
  icon: {
    width: width(15),
    height: width(15),
    borderRadius: width(8),
    backgroundColor: color.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width(5),
    marginBottom: height(7)
  },
  backImage: { width: width(4), height: width(4), resizeMode: 'contain' },
  headerHeading: {
    color: color.backgroundWhite,
    fontSize: totalSize(2),
    fontWeight: 'bold'
  },
  orderContainer: {
    backgroundColor: color.backgroundWhite,
    borderRadius: width(4),
    paddingVertical: height(2),
    width: width(90),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height(5),
    justifyContent: 'space-evenly'
  },
  orderIdContainer: {
    width: width(90),
    // alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxContainer: {
    width: totalSize(8),
    alignSelf: 'center',
    height: totalSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.OpacitiveButtonSecondaryBlue,
    borderRadius: width(2),
    marginHorizontal: width(2)
  },
  boxImage: {
    width: totalSize(3),
    height: totalSize(3),
  },
  orderIdTextContainer: {
  },
  orderIdLabelText: {
    color: color.halfBlackOpacitive,
    fontSize: width(2.8)
  },
  orderIdText: {
    fontSize: width(3.3),
    fontWeight: 'bold',
    marginTop: height(0.5)
  },
  orderDate: {
    fontSize: width(3.3),
    color: color.blackColorOpacitive,
    marginTop: height(0.5)
  },
  timeLeftContainer: {
    borderRadius: width(4),
  },
  timeLeftText: {
    fontSize: width(3),
    color: color.halfBlackOpacitive,
  },
  distanceDeliverDateContainer: {
    width: width(73),
    // alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height(2)
  },
  deliveryTimeContainer: {
    width: width(39),
  },
  deliveryTimeTextLabel: {
    color: color.buttonSecondaryBlue,
    fontSize: width(3.5)
  },
  deliveryTimeText: {
    fontSize: width(3.3),
    fontWeight: 'bold',
    marginTop: height(0.5)
  },
  distanceContainer: {
    width: width(39),
  },
  distanceTimeTextLabel: {
    color: color.buttonSecondaryBlue,
    fontSize: width(3.5)
  },
  distanceTimeText: {
    fontSize: width(3.3),
    fontWeight: 'bold',
    marginTop: height(0.5)
  },
  mapMarkerImage: {
    width: totalSize(3),
    height: totalSize(3),
  },
  lineSeparator: {
    borderWidth: 0.17,
    backgroundColor: '#1C2D41',
    width: '100%',
    marginTop: height(2),
    opacity: 0.2
  },
  addressContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height(0.5)
  },
  providerAddressContainer: {
    width: '45%',
  },
  mapImageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mapMarkerAddressImage: {
    width: totalSize(2),
    height: totalSize(2),
  },
  toFormText: {
    fontSize: totalSize(1.75),
    marginLeft: width(2)
  },
  addressText: {
    color: color.halfBlackOpacitive,
    fontSize: width(2.7),
    marginTop: height(1),
    width: '100%',
  },
  verticalLine: {
    height: height(8),
    backgroundColor: color.opacitiveBackGroundGray,
    width: 0.5,
    marginVertical: height(1.5)
  },
  BuyerAddressContainer: {
    width: '50%',
  },
  orderId: {
    alignSelf: 'center',
    paddingVertical: height(0.8),
    backgroundColor: color.buttonSecondaryBlue,
    borderRadius: width(14),
    paddingHorizontal: width(5),
    overflow: 'hidden',
    fontSize: width(3.2),
    color: color.backgroundWhite,
    marginBottom: height(2),
  },
  mainContainer: {
    height: height(100),
    width: width(100),
  },
});
export default styles;
