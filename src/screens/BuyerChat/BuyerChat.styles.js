import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: width(4),
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(2.5),
    backgroundColor: color.backgroundWhite,
    marginVertical: height(1),
    borderRadius: width(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greendot: {
    width: width(3.5),
    height: width(3.5),
    borderRadius: width(3.5),
    backgroundColor: color.textGreen,
    borderWidth: 3,
    borderColor: color.backgroundWhite,
  },
  backIcon: {
    height: totalSize(1.8),
    width: totalSize(1.8),
    backgroundColor: 'transparent',
  },
  userImg: {
    width: '47%',
    height: height(7),
    borderRadius: height(2.8),
    right: -0,
    bottom: -height(2),
    borderWidth: width(1),
    borderColor: 'white',
    position: 'absolute',
  },
  imgBack: {width: '90%', height: height(11)},
  imgContainer: {width: '28%', justifyContent: 'center', alignItems: 'center'},
  blueDot: {
    width: width(2),
    height: width(2),
    borderRadius: width(2),
    backgroundColor: color.buttonBlue,
    marginTop: '25%',
  },
  date: {
    fontSize: width(3.7),
    color: color.gray,
  },
  name: {
    fontWeight: 'bold',
    fontSize: width(3.8),
    color: color.textBlack,
  },
  message: {},
  messageContainer: {
    width: '50%',
  },
  search: {width: width(10), alignItems: 'flex-end'},
  heading: {
    fontSize: width(4.5),
    fontWeight: 'bold',
    color: color.textBlack,
  },
  icon: {
    width: width(10),
    height: width(10),
    borderRadius: width(5),
    backgroundColor: color.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: width(100),
    paddingHorizontal: width(5),
    backgroundColor: color.backgroundWhite,
    borderBottomLeftRadius: width(4),
    borderBottomRightRadius: width(4),
    height: height(12),
    justifyContent:'center',
    alignItems:'center'
  },
  headerContainer: {
    width: width(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height(8),
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: totalSize(2),
    fontWeight: 'bold',
    color: color.textBlack,
  },
  backIconContainerStyle: {
    height: totalSize(5),
    width: totalSize(5),
    borderRadius: totalSize(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.opacitiveLightGray,
  },
  subHeading: {
    color: color.buttonTextGreen,
    textAlign: 'center',
    marginTop: -height(1.7),
    fontSize: width(3.6),
  },
  trashIcon: {
    height: width(5.7),
    width: width(5.7),
    resizeMode: 'contain',
  },
  messagesContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2),
  },
  avatar: {
    width: width(13),
    height: width(13),
    borderRadius: width(7),
    backgroundColor: 'white',
  },
  currentMessage1: {
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
    backgroundColor: color.backgroundWhite,
    borderRadius: width(3),
    marginTop: height(1.3),
    fontSize:width(4.5),
    overflow:'hidden',
  },
  currentMessage: {
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
    backgroundColor: color.backgroundWhite,
    borderRadius: width(3),
    marginTop: height(1.5),
    fontSize:width(3.8),
    overflow:'hidden',
   
  },
  dateTime:{
    fontSize:width(2.5),
    color:color.gray,
    
  }
});
export default styles;
