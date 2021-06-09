import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width:width(100)
  },
  tagsContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: height(2.5),
    marginTop: height(3),
  },
  tagsUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(90),
    paddingHorizontal: width(4),
    marginBottom: height(1.25),
  },
  coverImagesContainer: {
    paddingHorizontal: width(4),
    marginTop: height(1.5)
  },
  coverImage: {
    height: totalSize(8.75),
    width: totalSize(8),
    borderRadius: 9,
  },
  inputTitle: {
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  optionalText: {
    color: Colors.grayDarker,
    fontSize: totalSize(1.5),
  },
  inputLocationContainer: {
    height: height(8),
    width: width(82),
    backgroundColor: Colors.inputBackgroundColor,
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(2),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: height(1.6),
  },
  locationIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(1.5),
    backgroundColor: Colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    height: totalSize(3),
  },
  instaConnectedImage: {
    height: totalSize(8),
    width: totalSize(7.85),
    borderRadius: 9,
  },
  uploadVideoText: {
    marginHorizontal: width(2),
    fontSize: totalSize(1.8),
    color: Colors.grayDarker,
  },
  lineSeparator: {
    height: (0.3),
    backgroundColor: Colors.placeHolderTextColor,
    width: width(90),
    marginVertical: height(1.3),
  },
  instaIconContainer: {
    height: totalSize(6),
    width: totalSize(6),
    borderRadius: totalSize(1.6),
    backgroundColor: '#1C2D4112',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instaContentContainer: {
    width: width(82),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(2.5),
  },
  connectWithText: {
    fontSize: totalSize(1.7),
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  instaText: {
    color: Colors.grayDarker,
    fontSize: totalSize(1.4),
  },
  instaConnectedContainer: {
    width: width(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  connectContainer: {
    backgroundColor: Colors.purplePrimary,
    borderRadius: totalSize(2),
    paddingHorizontal: width(3),
    paddingVertical: height(0.7),
  },
  connectText: {
    color: Colors.backgroundWhite,
    fontWeight: 'bold',
  },
  connectedContainer: {
    backgroundColor: Colors.greyishPurple,
    borderRadius: totalSize(2),
    paddingHorizontal: width(3.25),
    paddingVertical: height(0.7),
  },
  connectedText: {
    color: Colors.purplePrimary,
    fontSize: totalSize(1.65),
  },
});
export default styles;
