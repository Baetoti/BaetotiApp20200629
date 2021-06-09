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
        margin:totalSize(0.8)
    },
    flatList:{
        paddingVertical:height(2),
        marginTop:height(2),
        backgroundColor:Colors.backgroundWhite,
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
        color:Colors.textBlack
    },
    line:{
        width: width(90),
        borderBottomWidth: 0.5,
        marginTop: height(2),
        borderColor: Colors.placeHolderTextColor,
        borderRadius: 1,
        alignSelf:'center'
    },
    text:{
        alignSelf:'center',
        fontSize:height(3),
        color:Colors.gray
    }
});
export default styles