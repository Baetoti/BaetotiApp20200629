import { StyleSheet, Platform } from 'react-native';
import color from '../../utills/Colors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    width: width(100),
    height: height(11) ,
    backgroundColor: color.backgroundWhite,
    alignItems: 'flex-start'
  },
  singleItemContainer: {
    marginTop: Platform.OS == 'ios' ? height(3) : height(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: Platform.OS == 'ios' ? width(20) : width(16),
    height: Platform.OS == 'ios' ? width(20) : width(16),
    borderRadius: width(10),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,
    borderColor: color.purple,
    borderWidth: 1,
    backgroundColor: color.purple,
    marginTop: -width(2.5),
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
    width: 27,
    height: 27,
  },
  activeLogoImg: {
    width: 30,
    height: 30,
  }
});
export default styles;