import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer:{
        flex:1,
    },
    answerContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
        paddingHorizontal:width(5),
        paddingVertical:height(2),
        borderRadius:width(1),
        backgroundColor:Colors.backgroundWhite
    },
    answerText:{
        fontSize:width(3.8),
        color:Colors.textBlack,
        lineHeight:height(2.75)
    },
    stepsContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
        justifyContent:'space-between'
    },
    indexText:{
        fontSize:width(5),
        fontWeight:'bold',
        color:Colors.textBlack
    },
    stepsText:{
        width:width(80),
        fontSize:width(3.5),
        color:Colors.textBlack,
        lineHeight:height(2.5)
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