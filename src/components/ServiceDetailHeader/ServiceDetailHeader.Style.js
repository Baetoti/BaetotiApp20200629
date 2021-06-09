import {StyleSheet} from 'react-native';
import Colors from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: height(6),
    alignItems: 'center',
    marginTop: height(2),
  },
  leftImageContainer:{
    width:width(20),
  },
  rightViewContainer:{
      width:width(20)
  },
  backButtonContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(1.7),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowLeft: {
    width: totalSize(1.6),
    height: totalSize(1.6),
  },
  titleText: {
    color: Colors.textBlack,
    fontSize: width(3.8),
    fontWeight: 'bold',
  },
  ImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:width(20),
    justifyContent:'flex-end',
  },
  shareImageContainer: {
    paddingRight: width(4),
  },
  shareImage: {
    width: totalSize(2),
    height: totalSize(2),
    tintColor: Colors.textBlack,
  },
  threeDotsImageContainer: {
    height: totalSize(4.5),
    width: totalSize(4.5),
    borderRadius: totalSize(2.25),
    backgroundColor: Colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: totalSize(2),
    height: totalSize(2),
  },
  emptyView:{
    height: totalSize(4.5),
    width: totalSize(4.5),
  }
});
export default styles;
