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
    itemSeparator:{
        
    },
    flatList:{
        paddingLeft:height(2),
        marginTop:height(2),
        backgroundColor:Colors.backgroundWhite,
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    textButtonContainer:{
        width:width(90),
        alignSelf:'center',
        marginVertical:height(0.5),
        justifyContent:'space-between',
        paddingVertical:height(2),
        borderRadius:width(2),
       
    },
    titleText:{
        fontSize:width(4),
        color:Colors.textBlack,
        alignSelf:"center"
    },
    line:{
        width: width(90),
        borderBottomWidth: 0.5,
        
        borderColor: Colors.placeHolderTextColor,
        borderRadius: 1,
        alignSelf:'center',
    }
});
export default styles