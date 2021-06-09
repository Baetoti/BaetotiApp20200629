import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        borderTopColor:Colors.placeHolderTextColor,
        borderTopWidth:0.5,
        marginHorizontal:width(2.5)
    },
    textInputTitle:{
        marginHorizontal:width(5),
        marginTop:height(2),
        fontSize:totalSize(1.75),
        fontWeight:'bold',
        color:Colors.textBlack,
        textTransform:'capitalize'
    },
    textInputContainer:{
        height: height(6),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(2),
        width: width(90),
        alignSelf: 'center',
        marginTop: height(2),
        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: 1 },
        alignItems:'center',
        justifyContent:'center'
    },
    input: {
        width: width(80),
        height: height(5),
        paddingVertical: 0,
        fontSize:totalSize(2),
    },
    uploadContainer:{
        width:width(90),
        alignSelf:'center',
        height:height(15),
        borderWidth:1,
        borderColor:Colors.buttonBlue,
        marginTop:height(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:width(5)
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
    submitButton:{
        marginTop:height(6),
        backgroundColor:Colors.buttonBlue
    },
    modalContainer: {
        paddingVertical:height(2),
        width: width(80),
        borderRadius: width(3),
        backgroundColor:Colors.backgroundWhite,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    submitSucessFully:{
        marginTop:height(1),
        color:Colors.textBlack,
        fontSize:width(5)
    },
    okButton:{
        marginTop:height(2),
        width:width(60),
        backgroundColor:Colors.buttonBlue,
    }
});
export default styles