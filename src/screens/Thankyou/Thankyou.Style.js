import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    thankYouText:{
        fontSize:width(6),
        color:Colors.textBlack
    },
    keepButton:{
        marginTop:height(2),
        backgroundColor:Colors.buttonBlue
    }
});
export default styles