import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: height(5),
    paddingVertical: height(2),
    backgroundColor: color.buttonBlue,
    borderColor: color.buttonBlue,
    shadowColor: color.buttonBlue,
    elevation: 15,
  },
  map: {
    height: height(100),
    width: width(100),
  },
  flatlistContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: height(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(250,250,250,0.75)',
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1),
    borderRadius: width(3)
  },
  trackingHeadContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOnMapText: {
    color: color.buttonBlue,
    fontSize: width(3),
  },
  mapImageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mapMarkerAddressImage: {
    width: totalSize(2),
    height: totalSize(2),
  },
  trackingContainer: {
    backgroundColor: color.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1),
    marginTop: height(2),
    borderRadius: width(3)
  },
  trackingHeadContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOnMapText: {
    color: color.buttonBlue,
    fontSize: width(3),
  },
});
export default styles;
