import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'space-between'
    },
    headerContainer: {
        height: height(12),
        justifyContent: 'center',
        alignItems:'center'
    },
    notificationContainer: {
        width: width(90),
        paddingVertical: height(2),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginVertical: height(1),
        borderRadius: width(3),
        //flexDirection: 'row',
        paddingHorizontal: width(5),
        paddingTop: height(2.25),
        paddingBottom: height(1.75)
    },
    boxContainer:{
        width:totalSize(7),
        alignSelf:'center',
        height:totalSize(7),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.OpacitiveButtonSecondaryBlue,
        borderRadius:width(3)
    },
    boxImage:{
        width:totalSize(3),
        height:totalSize(3),
    },
    textDateContainer: {
        width: width(65),
        paddingLeft: width(3.8),
        paddingVertical: height(1),
        justifyContent: 'space-between'
    },
    nameText: {
        fontWeight: "bold",
        fontSize: width(3.7)
    },
    notificationText: {
        fontWeight: 'normal',
        fontSize: width(4)
    },
    dateText: {
        color: Colors.placeHolderTextColor,
        fontSize: width(3.25)
    },
    ViewIgnoreContainer:{
        width:width(60),
        alignSelf:'flex-end',
        marginTop:height(0.5),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    editDocumentButton: {
        backgroundColor: Colors.opacitiveBlack,
        shadowColor: Colors.opacitiveBlack,
        width:width(29),
        elevation:0,
        marginVertical: height(1),
    },
    textStyle: {
        color: Colors.gray,
        fontWeight:'bold'
    },
    containerStyle: {
        width:width(29),
        backgroundColor: Colors.buttonSecondaryBlue,
        shadowColor: Colors.buttonSecondaryBlue,
        marginVertical: height(1),
    },
});
export default styles