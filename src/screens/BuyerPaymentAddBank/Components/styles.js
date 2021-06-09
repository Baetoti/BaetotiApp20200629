import {StyleSheet} from 'react-native';
import color from '../../../utills/Colors';
import {height, width, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  textFieldContainer: {
    width: width(90),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginTop: height(2),
    borderRadius: width(2.98),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldInnerContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(5.75),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textFieldImage: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
  rowBank:{
    width: width(80),
    justifyContent: 'space-between',
    alignItems:'center'
  },
  textInput: {
    paddingVertical: 0,
    //fontSize: totalSize(2.1),
    color: '#1C2D41',
  },
  locationImage: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  dropDown:{
    height: height(20),
    width:width(90),
    alignSelf:'center',
    marginLeft:width(5)
  },
  dropDownItemContainer: {
    width:width(90),
    alignSelf:'center',
    paddingVertical: height(1.8),
    paddingHorizontal: width(3),
    flexDirection:'row',
    alignItems:'center',
  },
  dropDownItemText: {
    fontSize: totalSize(1.9),
    color: '#1C2D41',
    paddingLeft:width(3)
  },
  rangeComponent: {
    flexDirection: 'row',
    borderRadius: width(1.5),
    paddingVertical: height(2.3),
    width: width(43),
    backgroundColor: color.backgroundWhite,
    paddingHorizontal: '7%',
    justifyContent: 'space-between',
  },
  range:{
      fontSize:width(4.5)
  }
});
export default styles;
