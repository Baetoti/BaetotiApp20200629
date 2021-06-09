import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, totalSize, height} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroundColor,
  },
  mainContainer: {
    height: height(22),
    width: width(100),
    position:'absolute',
    zIndex:1,
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
    width: width(12),
    height: width(12),
    borderRadius: width(5),
    backgroundColor: color.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderColor: color.backgroundWhite,
    borderWidth: 2.25,
    width:width(12.5),
    height:width(12.5),
    borderRadius:width(5.5)
  },
  image: {width: width(6), height: width(6), resizeMode: 'contain'},
  backImage: {width: width(4), height: width(4), resizeMode: 'contain'},
  dotImage: {
    width: width(1),
    height: width(1),
    position: 'absolute',
    right: width(2.5),
    top: width(2),
  },
  reset: {
    color: color.buttonBlue,
  },
  orderId:{
    alignSelf:'center',
    paddingVertical:height(0.5),
    backgroundColor:color.backgroundWhite,
    borderRadius:width(3),
    paddingHorizontal:width(5),
    overflow:'hidden',
    fontSize:width(3.2),
    color:color.buttonSecondaryBlue,
    marginTop:height(1)
  }
});
export default styles;
