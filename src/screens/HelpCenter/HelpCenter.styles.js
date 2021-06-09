import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    liveOrderContainer:{
        width:width(90),
        alignSelf:'center',
        height:height(7),
        paddingHorizontal:width(5),
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(1),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
        marginTop:height(2),
        
    },
    liveOrderContainers:{
        width:width(90),
        alignSelf:'center',
        height:height(6),
        paddingHorizontal:width(5),
        backgroundColor:Colors.white,
      justifyContent:"center",
        borderRadius:width(1),
        borderWidth:0.2,
        borderColor:Colors.placeHolderTextColor,
        shadowOpacity:0.3,
        shadowRadius:height(3),
        shadowColor:Colors.grayDarker,
        elevation:4,
        marginTop:height(4),
    },
    liveOrderText:{
        fontSize:width(4),
        color:Colors.textBlack,
        marginTop:height(0.8),
       
    },
    currentOrderText:{
        fontSize:width(3.6),
        color:Colors.textBlack,
        marginTop:height(0.5),
        textAlign:'center' 
    },
    noLiveOrderText:{
        fontSize:width(3),
        color:Colors.grayDarker,
        alignSelf:'center',
        marginLeft:width(2),
        fontWeight:'bold',
    },
    helpContainer:{
        width:width(90),
        alignSelf:'center',
        borderRadius:width(1),
    },
    headingText:{
        alignSelf:'center',
        fontSize:width(6),
        fontWeight:'bold',
        fontStyle:'normal',
       
    },
    headingText_2:{
        alignSelf:'flex-start',
        marginTop:height(5),
        marginLeft:width(10),
        color:Colors.black,
        fontSize:width(6),
        fontWeight:'bold',
        
    },
    chat_icon:{
        position:"absolute",
        height:width(15), 
        width:width(15),
        borderRadius:width(15)/2,
        backgroundColor:Colors.themeColor,
        justifyContent:"center",
        alignSelf:"flex-end",
        marginTop:height(80),
        right:width(5),
    },

    liveChat_icon:{alignSelf:"center",},

    view_1:{
        marginVertical:height(10),
        backgroundColor:'#FCFCF8',
        justifyContent:"center",
        alignItems:"center",
        
        borderRadius:6,
        paddingVertical:height(4),
        
    },
    text_1:{
        alignSelf:"center",
        fontWeight:'bold',
        fontSize:totalSize(2),
        // marginTop:height(3),
    },
    text_2:{
        marginTop:height(1),
        textAlign:"center",
        alignSelf:"center",
        fontSize:10,
    },
    touchBtn_1:{
        marginTop:height(4),
        borderRadius:100,
        backgroundColor:Colors.white,
        shadowOpacity:1,
        shadowColor:Colors.lightGray,
        shadowRadius:2,
        flexDirection:"row",
        paddingHorizontal:width(3),
        paddingVertical:height(0.7),
        elevation:4,

    },
    text_3:{
        fontWeight:'bold',
        fontSize:12,
        fontStyle:"normal",
        alignSelf:"center",
    },
    touchBtn_2:{
        marginTop:height(1.5),
        borderRadius:100,
        backgroundColor:Colors.white,
        shadowOpacity:0.5,
        shadowColor:Colors.lightGray,
        shadowRadius:2,
        flexDirection:"row",
        paddingHorizontal:width(2),
        paddingVertical:height(0.7),
        elevation:3
    },
    text_4:{
        fontWeight:'bold',
        fontSize:12,
        alignSelf:"center",
        
    },
    view_2:{
        alignSelf:'center',
        marginTop:-height(2),
        borderRadius:7,
        borderBottomColor:Colors.gray,
        justifyContent:'center',
        borderRightColor:'transparent',
        borderLeftColor: 'transparent',
        borderLeftWidth:20,
        borderRightWidth:20,
        borderBottomWidth:55,
        width: width(17),
        height:height(0),
        transform: [{rotate: '270deg'}], 
    },
    view_3:{
        marginTop:height(2.5),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    text_5:{
        fontWeight:"bold",
        fontSize:10.5,
        color:Colors.lightTextBlack,
    },
    view_4:{
        marginTop:height(2),
        marginBottom:height(8),
        flexDirection:"row",
        justifyContent:"center",
    },
    touchBtn_3:{
        alignSelf:"center",
        marginHorizontal:width(1.5),
        borderBottomWidth:1,
        borderBottomColor:Colors.grayDarker,
    },

    text_6:{
        alignSelf:"center",
        fontSize:11,
        color:Colors.grayTextColor,
    },

});
export default styles