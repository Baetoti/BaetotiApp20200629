import {StyleSheet,Platform} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:width(100)
  },
  titleContainer: {
    width: width(90),
    marginTop: height(4),
  },
  titleHead: {
    fontSize: totalSize(2),
    color: Colors.gray,
    padding: 0,
  },
  titleInputContainer: {
    width: width(90),
    fontWeight: 'bold',
    fontSize: totalSize(3),
    marginLeft: width(0.5),
    paddingTop: height(1.8),
    paddingBottom: height(2.5),
    color: Colors.black
  },
  titlePlaceHolder: {
    fontWeight: 'bold',
    fontSize: totalSize(3),
    marginLeft: width(0.5),
    paddingTop: height(1.8),
    paddingBottom: height(2.5),
    position: 'absolute',
    color: Colors.placeHolderTextColor
  },
  inputTitle: {
    fontWeight: 'bold',
    color: Colors.textBlack,
  },
  descriptionContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingHorizontal: width(4),
    paddingVertical: height(2.5),
  },
  descriptionInputContainer: {
    backgroundColor: Colors.inputBackgroundColor,
    minHeight: height(20),
    marginTop: height(2),
    borderRadius: width(3),
    paddingHorizontal: width(2),
  },
  descriptionInput: {
    maxWidth: width(78),
    minHeight: height(15),
    fontSize: totalSize(1.50),
    color: Colors.textBlack,
    padding: 0,
    marginVertical: height(2),
    marginLeft: width(3),
    lineHeight: height(3.25),
    color: Colors.gray,
  },
  locationContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingHorizontal: width(4),
    paddingVertical: height(2.5),
    marginTop: height(2),
  },
  inputLocationContainer: {
    height: height(8),
    width: width(82),
    backgroundColor: Colors.inputBackgroundColor,
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(2),
    alignItems: 'center',
  },
  locationInput: {
    width:Platform.OS=='ios'? width(27):width(40),
    paddingVertical: 0,
    marginLeft: width(2),
  },
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2.5),
    backgroundColor: Colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadIconContainer: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(1.3),
    backgroundColor: Colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    height: totalSize(2.3),
  },
  currentLocationText: {
    color: Colors.purplePrimary,
    fontWeight: 'bold',
    fontSize: totalSize(1.4),
  },
  hideLocationMainConainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:height(1.5)
  },
  hideLocationContainer: {
    width: width(13),
    backgroundColor: Colors.purplePrimary,
    borderRadius: width(5),
    marginTop: height(1),
    marginLeft: width(1),
    marginRight: width(3),
    justifyContent: 'center',
  },
  hideLocationText: {
    color: Colors.grayDarker,
    fontSize: totalSize(1.4),
    padding: 0,
    marginTop: height(1),
  },
  mapContainer: {
    height: height(22),
    width: width(82),
    overflow: 'hidden',
    borderRadius: width(5),
    marginTop: height(1.5),
  },
  map: {
    height: '100%',
    width: '100%',
  },
  searchIconStyle: {
    marginTop: height(0.4),
  },
  tagsContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingHorizontal: width(4),
    paddingVertical: height(2.5),
    marginTop: height(2),
  },
  tagsUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(82),
  },
  tagButtonContainer: {
    paddingHorizontal: width(2.5),
    marginRight: width(3),
    paddingVertical: height(1.5),
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: width(2),
    marginVertical:10
  },
  tagButtonImage: {
    height: totalSize(1.55),
    width: totalSize(1.55),
    tintColor: Colors.purplePrimary,
  },
  tagButtonText: {
    fontSize: totalSize(1.25),
    marginLeft: width(1.5),
  },
  tagFlatlistContainer: {
    flexWrap: 'wrap',
    flexDirection:'row',
    // width:width(80),
    justifyContent:'flex-start',
  },
  tagFlatlistContentContainer: {
    paddingTop: height(2),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tagFlatlistItemSeparator: {
    margin: totalSize(0.65),
  },
  closeIcon: {
    marginLeft: width(1.5),
  },
  optionalText: {
    color: Colors.grayDarker,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
  },
  searchTagInput: {
    marginHorizontal: width(1.5),
    fontSize: totalSize(1.6),
    color: Colors.textBlack,
    paddingVertical: 0,
  },
  uploadVideoText: {
    marginHorizontal: width(2),
    fontSize: totalSize(1.8),
    color: Colors.gray,
    color: Colors.grayDarker,
  },
  orContainer: {
    alignSelf: 'center',
    marginVertical: height(1.5),
  },
  or: {
    fontWeight: 'bold',
    fontSize: totalSize(2),
    color: Colors.textBlack,
  },
  youtubeIcon: {
    height: totalSize(5),
    width: totalSize(5),
  },
  selectedLocationMainContainer: {
    height: height(8),
    width: width(82),
    backgroundColor: Colors.inputBackgroundColor,
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(2),
    marginTop: height(2),
    alignItems: 'center',
  },
  selectedLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width(50),
    justifyContent: 'space-between',
  },
  pinIconContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(4.5/2),
    backgroundColor: Colors.textBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinIcon: {
    height: totalSize(2.25),
  },
  selectedLocationText: {
    color: Colors.textBlack,
    fontSize: totalSize(1.7),
    marginLeft: width(3),
  },
  errorText:{
    color:Colors.textRedColor,
    marginVertical:height(1.5),
    paddingLeft: width(3)
  }
});
export default styles;
