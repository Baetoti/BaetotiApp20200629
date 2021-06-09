import { StyleSheet, Platform } from 'react-native';
import color from '../../utills/Colors';
import { width, height } from 'react-native-dimension';
const styles = StyleSheet.create({
  tabBarSvg: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex:0,
    borderBottomWidth:height(2.5),
    borderColor:'white',

    // height:height(10),
    // alignSelf:'flex-end'
  },
  tabBar: {
    flexDirection: 'row',
    width: width(100),
    height: Platform.OS == 'ios' ? height(10) : height(9.5),
    // backgroundColor: color.backgroundWhite,
    alignItems: 'flex-start',
    // marginTop:5,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex:0,
  },
  singleItemContainer: {
    marginTop: height(100) >670 ? height(4) : height(2),
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection:'row',
    // position:'a',
    // zIndex:1
  },
  curveBorder:{
    width: Platform.OS == 'ios' ? width(22) : width(22),
    height: Platform.OS == 'ios' ? height(4) : height(4),
    // borderBottomLeftRadius:width(35),
    // borderBottomRightRadius:width(35),
    borderRadius:width(15),
    borderColor:color.borderColor,
    borderTopWidth:0,
    backgroundColor: color.backgroundWhite,
    borderWidth:5,
    // marginTop:-height(2),
    borderColor:color.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: Platform.OS == 'ios' ? width(16) : width(16),
    height: Platform.OS == 'ios' ? width(16) : width(16),
    borderRadius: width(10),
    // borderBottomLeftRadius:width(10),
    // borderBottomRightRadius:width(10),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,
    borderColor: color.purple,
    borderWidth: 1,
    backgroundColor: color.purple,
    marginTop: -height(6),
    shadowColor: color.purple,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 5,
      height: 5
    }
  },
  smallDot: {
    width: 5,
    marginTop: 7,
    alignSelf: 'center',
    height: 5,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  logoImg: {
    width: 32,
    height: 32,
    tintColor: '#FFFFFF',
    marginTop: -5
    // resizeMode: 'contain',
  }, logoImgInactive: {
    width: 27,
    height: 27,
  },
  activeLogoImg: {
    width: 30,
    height: 30,
  }
});
export default styles;





