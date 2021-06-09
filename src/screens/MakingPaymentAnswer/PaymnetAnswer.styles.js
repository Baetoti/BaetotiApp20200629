import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer:{
        flex:1,
        marginHorizontal:width(2.5),
        
    },
    answerContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(0),
        paddingHorizontal:width(5),
        paddingVertical:height(2),
        borderRadius:width(1),
        backgroundColor:Colors.backgroundWhite,
        borderTopWidth:0.5,
        borderTopColor:Colors.placeHolderTextColor,
        
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
    furtherContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2)
    },
    input: {
        height: height(15),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(5),
        width: width(90),
        alignSelf: 'center',
        marginTop: height(2),
        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: 1 },
        paddingLeft: width(4),
        paddingTop: height(2)
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