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
        borderTopWidth:1,
        borderTopColor:Colors.placeHolderTextColor,
    },
    itemSeparator:{
        margin:totalSize(0.5)
    },
    flatList:{
        paddingVertical:height(2),
        // marginTop:height(2),
        // backgroundColor:Colors.backgroundWhite,
    },
    textButtonContainer:{
        width:width(90),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:height(2),
        borderRadius:width(2),
    },
    titleText:{
        fontSize:width(4),
        color:Colors.textBlack,
        width:width(75)
    },
    line:{
        width: width(90),
        borderBottomWidth: 1,
        // marginTop: height(1),
        borderColor:'#000000',
        borderRadius: 1,
        alignSelf:'center'
    },
    infoText:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
        fontSize:width(3.75),
        lineHeight:height(2.75)
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
    sendButton:{
        marginTop:height(2),
        backgroundColor:Colors.buttonBlue
    }
});
export default styles