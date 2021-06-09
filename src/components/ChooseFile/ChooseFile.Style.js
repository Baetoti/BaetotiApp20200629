import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        width: width(85),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height:height(11),
        alignItems: 'center',
        marginTop:height(2),
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(2)
    },
    innerItemsContainer:{
        width:width(70),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    imagePlus:{
        height:totalSize(3),
        width:totalSize(3),
    },
    verticalLine: {
        height: height(8),
        width: width(0.2),
        marginLeft:width(2),
        backgroundColor: Colors.placeHolderTextColor,
    },
    chooseTextContainer:{
        width:width(50),
    },
    chooseFileText:{
        fontWeight:'bold',
        fontSize:width(4)
    },
    pdfOrPngText:{
        color:Colors.halfBlackOpacitive,
        fontSize:width(2.75),
        marginTop:height(0.5)
    }
});
export default styles;
