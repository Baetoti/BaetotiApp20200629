import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroundColor,
  },
  mainContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: color.backgroundColor,
  },
  large: {
    width: width(70),
    height: width(70),
    borderRadius: width(35),
    backgroundColor: 'rgba(45,202,115,0.1)',
    alignSelf: 'center',
    marginTop: height(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  medium: {
    width: width(50),
    height: width(50),
    borderRadius: width(25),
    backgroundColor: 'rgba(45,202,115,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    width: width(30),
    height: width(30),
    borderRadius: width(15),
    backgroundColor: 'rgba(45,202,115,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {width: width(14), height: width(14), resizeMode: 'contain'},
  congrats: {
    fontSize: width(6),
    fontWeight:'bold',
    textAlign:'center',
    marginTop:height(8),
    color:color.textBlack,
  },
  success: {
    fontSize: width(3.4),
    textAlign:'center',
    marginTop:height(3),
    width:width(90),
    alignSelf:'center',
    color:color.gray,
    lineHeight:24,
  },
  id: {
    fontSize: width(3.4),
    textAlign:'center',
    marginTop:height(6),
    width:width(90),
    alignSelf:'center',
    color:color.gray
  },
  code: {
    fontSize: width(3.75),
    textAlign:'center',
    marginTop:height(0.5),
    color:color.textBlack
  },
});
export default styles;
