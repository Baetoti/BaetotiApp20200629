import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImageButton:{
      marginTop:height(2),
      alignSelf:'center',
      height:totalSize(10),
      width:totalSize(10),
      borderRadius:totalSize(3.8),
      backgroundColor:Colors.backgroundWhite,
      alignItems:'center',
      justifyContent:'center'
  },
  profileImage:{
    height:totalSize(9),
    width:totalSize(9),
    borderRadius:totalSize(3.5)
  },
  changeProfileText:{
    textAlign:'center',
    marginTop:height(2),
    color:Colors.buttonBlue,
    fontSize:totalSize(1.8)
  },
  textFieldContainer: {
    width: width(85),
    flexDirection:'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderColor:Colors.textBlack,
    marginTop:height(2),
    paddingHorizontal:width(2)
},
  textFieldImage: {
    height: totalSize(2),
    width: totalSize(2),
},
  textInput:{
    width: width(78),
    height: height(7),
    paddingVertical: 0,
    fontSize: totalSize(2),
    alignSelf:'center',
    paddingHorizontal:width(2)
  },
  containerStyle:{
    backgroundColor:Colors.buttonBlue,
    width:width(80),
    marginTop:height(15),
    shadowOffset: {width: width(2),height: height(0.7)},
    shadowColor: Colors.buttonBlue,
    shadowOpacity: 0.25,
    shadowRadius: width(2)
  }
});
export default styles;
