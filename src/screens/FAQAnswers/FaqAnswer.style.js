import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav_from:{
        alignSelf:'flex-start',
        paddingVertical:height(1),
        paddingHorizontal:width(1),
        marginHorizontal:width(5),
        fontWeight:'500',
        color:Colors.gray,
        fontSize:totalSize(1.5)
    },
    text_1:{
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
        width:width(90),
        alignSelf:"center",
        paddingVertical:height(1),
        paddingHorizontal:width(2),
        fontWeight:'bold',
        fontSize:totalSize(1.9)
    },
    mainContainer:{
        flex:1,
    },
    text_que:{
            fontSize:totalSize(2.5),
            fontStyle:'normal',
            fontWeight:'bold',
            marginVertical:height(1.5),
        
    },
    answerContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(0),
        paddingHorizontal:width(2),
        paddingTop:height(0),
        paddingBottom:height(2),
        borderRadius:width(1),
        backgroundColor:Colors.backgroundWhite,
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    answerText:{
        fontSize:width(3.8),
        color:Colors.textBlack,
        lineHeight:height(2.75)
    },
    helpFulText:{
        textAlign:'center',
        fontSize:width(5),
        marginTop:height(3)
    },
    yesButton:{
        marginTop:height(5),
        backgroundColor:Colors.buttonBlue,
    },
    noButton:{
        marginTop:height(2),
        backgroundColor:Colors.buttonBlue
    }   
});
export default styles