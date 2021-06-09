import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroundColor,
  },
  mainContainer: {
    height: height(100),
    width: width(100),
    backgroundColor: color.backgroundColor,
  },
  header: {
    width: width(100),
    paddingHorizontal: width(5),
    backgroundColor: color.backgroundWhite,
    borderBottomLeftRadius: width(8),
    borderBottomRightRadius: width(8),
    paddingBottom: height(2),
  },
  headerContainer: {
    width: width(100),
    paddingHorizontal: width(5),
    alignSelf: 'center',
    backgroundColor: color.backgroundWhite,
  },
  headerTitle: {
    color: color.textBlack,
  },
  backIconContainerStyle: {
    backgroundColor: color.opacitiveLightGray,
  },
  subHeading: {
    color: color.lightGray,
    textAlign: 'center',
    marginTop: -height(1.7),
    fontSize: width(3.6),
  },
  id: {
    color: color.lightGray,
    fontSize: width(3.6),
  },
  idNumber: {
    fontSize: width(3.7),
    color: color.textBlack,
    fontWeight:'bold'
  },
  flatlist: {marginTop: height(2), width: width(90), alignSelf: 'center'},
  flatlistCont: {
    alignSelf: 'flex-end',
    width: '90%',
    paddingHorizontal: width(3),
    paddingVertical: height(2),
    borderRadius: width(4),
    backgroundColor: color.backgroundWhite,
  },
  img: {
    position: 'absolute',
    left: -width(8),
    top: height(3),
    width: width(19),
    height: width(19),
    borderRadius: width(9.5),
    borderWidth: width(1),
    borderColor: color.backgroundWhite,
  },
  heading: {
    marginTop: height(2),
    marginLeft: '13%',
    fontWeight: 'bold',
    fontSize: width(5),
    letterSpacing:0
  },
  comment: {
    marginTop: height(0.5),
    color: color.lightGray,
    marginLeft: '13%',
    fontSize: width(3),
  },
  ratingCont:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:'3%',
      marginTop:height(4),
      height:height(8),
      paddingHorizontal:'4%',
      backgroundColor:color.lightGrayPrimary,
      alignItems:'center',
      borderRadius:width(2)
  },
  rating:{
    fontSize: width(4.3),
    color:color.gray
  },
  good:{
      textAlign:'center',
    fontWeight: 'bold',
    fontSize: width(4),
    marginTop:height(2)
  },
  textInput: {
    width: '95%',
    marginBottom:height(2),
    marginTop: height(3),
    paddingTop: height(2),
    paddingHorizontal: width(4),
    fontSize: totalSize(1.5),
    borderRadius: width(3),
    height: height(25),
    borderColor: color.placeHolderTextColor,
    elevation: 0.8,
    alignSelf:'center',
    color:color.textBlack,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: {height:1,width: 1}
  },
});
export default styles;
