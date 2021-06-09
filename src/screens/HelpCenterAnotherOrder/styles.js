import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
    },
    specifyTextContainer:{
        width:width(90),
        alignSelf:'center',
        height:height(8),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(3),
        marginTop:height(1),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    specifyText:{
        width:width(80),
        fontSize:width(4.5),
        color:Colors.textBlack
    },
    dateContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
        
    },
    dateLabelText:{
        fontSize:width(5),
        fontWeight:'bold',
        color:Colors.black,
    },
    datePickerContainer:{
        flexDirection:'row',
        width:width(90),
        alignSelf:'center',
        height:height(8),
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(3),
        marginTop:height(1),
        paddingHorizontal:width(5),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    dateText:{
        fontSize:width(4.5),
        color:Colors.textBlack
    },
    ordersDetailContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
       
    },
    DatePicker: {
        marginLeft: width(100),
        width: 0,
        height: 0
      },
      orderDetailText:{
        fontSize:width(5),
        fontWeight:'bold',
        color:Colors.black,
      },
      uploadContainer:{
        width: width(90),
        alignSelf: 'center',
        height: height(15),
        borderWidth: 1,
        borderColor: Colors.buttonBlue,
        marginTop: height(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width(5)
    },
    imageContainer:{
        width:width(30),
        height:height(12),
        borderWidth:1,
        borderColor:Colors.buttonBlue,
        borderStyle:'dashed',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:width(30),
        height:height(8)
    },
    uploadText:{
        fontSize:width(4),
        color:Colors.textBlack
    },
    sendButton:{
        marginTop:height(8),
        backgroundColor:Colors.buttonBlue,
        shadowColor:Colors.buttonBlue
    }
});
export default styles