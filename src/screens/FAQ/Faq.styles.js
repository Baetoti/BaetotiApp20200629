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
    itemSeparator:{
        margin:totalSize(0.8),
        
    },
    flatList:{
        paddingVertical:height(2),
        marginTop:height(2),
        marginHorizontal:width(3),
        paddingLeft:width(0.3),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
        borderRightWidth:0.5,
        borderRadius:width(0.5),
    },
    view_style:{
        // borderBottomWidth:1,
        // borderBottomColor:Colors.grayDarker,
       
    },

    textButtonContainer:{
        marginTop:height(2),
        backgroundColor:Colors.backgroundWhite,
        marginTop:height(1),
        paddingVertical:height(1.5),
        marginLeft:width(5),
        marginRight:width(0.2),
        borderRadius:width(1),
        borderBottomWidth:0.5,
        borderBottomColor:Colors.placeHolderTextColor,
        
    },
    titleText:{
        fontSize:width(4),
        fontWeight:'bold',
        color:Colors.textBlack,
        alignSelf:'center',
    },
});
export default styles