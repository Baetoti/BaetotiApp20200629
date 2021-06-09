import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7'
    },
    orderIdDetailContainer:{
        width:width(90),
        alignSelf:'center',
        height:height(12),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.buttonSecondaryBlue,
        borderRadius:width(2)
    },
    orderIdInnerDetailContainer:{
        width:width(80),
        flexDirection:'row',
        justifyContent:"space-between"
    },
    boxContainer:{
        width:totalSize(6),
        alignSelf:'center',
        height:totalSize(6),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(2)
    },
    boxImage:{
        width:totalSize(3),
        height:totalSize(3),
    },
    editDocumentButton: {
        paddingVertical: height(2.3),
        backgroundColor: Colors.backgroundWhite,
        shadowColor: Colors.backgroundWhite,
        marginTop: height(2),
        elevation:0
    },
    textStyle: {
        color: 'black',
        fontWeight:'bold'
    },
    containerStyle: {
        paddingVertical: height(2.3),
        marginVertical: height(1),
        backgroundColor: Colors.buttonSecondaryBlue,
        shadowColor: Colors.buttonSecondaryBlue,
    },
    DatePicker: {
        marginLeft: width(100),
        width: 0,
        height: 0
    }
});
export default styles;
