import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: width(4),
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1),
    paddingBottom: height(2.5),
    backgroundColor: color.backgroundWhite,
    marginVertical: height(1),
    borderRadius: width(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  greendot: {
    width: width(3.5),
    height: width(3.5),
    borderRadius: width(3.5),
    backgroundColor: color.textGreen,
    borderWidth: 3,
    borderColor: color.backgroundWhite,
  },
  userImg: {
    width: width(10),
    height: width(10),
    borderRadius: width(4.5),
    right: -0,
    bottom: -height(1.7),
    borderWidth: width(1),
    borderColor: 'white',
    position: 'absolute',
  },
  imgBack: { width: width(18), height: width(18) },
  imgContainer: { width: '28%', justifyContent: 'center', alignItems: 'center' },
  blueDot: {
    width: width(2),
    height: width(2),
    borderRadius: width(2),
    backgroundColor: color.buttonBlue,
    marginTop: '25%'
  },
  date: {
    fontSize: width(3.7),
    color: color.gray
  },
  name: {
    fontWeight: 'bold',
    fontSize: width(3.8),
    color: color.textBlack
  },
  message: {

  },
  messageContainer: {
    width: '50%',
  },
  search: { paddingHorizontal: width(5), paddingBottom: height(0.5), color: color.lightGray },
  heading: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: color.black,
  },
  icon: {
    width: width(10),
    height: width(10),
    borderRadius: width(4),
    backgroundColor: color.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
