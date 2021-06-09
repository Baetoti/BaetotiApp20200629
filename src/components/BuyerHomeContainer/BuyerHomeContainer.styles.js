import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, totalSize, height} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroundColor,
  },
  mainContainer: {
    height: height(100),
    width: width(100),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(90),
    alignSelf: 'center',
    height: height(8),
    marginTop: height(2)
  },
  headerHeading: {
    color: color.textBlack,
    fontSize: totalSize(2),
    fontWeight: 'bold'
  },
  icon: {
    width: width(10),
    height: width(10),
    borderRadius: width(4),
    backgroundColor: color.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImageContainer:{
    height:totalSize(5),
    width:totalSize(5),
    borderRadius:totalSize(2),
    backgroundColor:color.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage:{
    height:totalSize(4.5),
    width:totalSize(4.5),
    borderRadius:totalSize(2),
  },
  avatar: {
    borderColor: color.blue,
    borderWidth: 0.1,
    elevation: 7,
  },
  image: {width: width(5), height: width(5), resizeMode: 'contain'},
  backImage: {width: width(3.25), height: width(3.25), resizeMode: 'contain'},
  dotImage: {
    width: width(1),
    height: width(1),
    position: 'absolute',
    right: width(2.5),
    top: width(2),
  },
  reset: {
    fontSize:width(4.2),
    color: color.buttonBlue,
  },
});
export default styles;
