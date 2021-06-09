import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
import { color } from 'react-native-reanimated';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    accountContainer: {
        width: width(90),
        height: height(8),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        borderRadius: width(3.5),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:height(2)
    },
    accountInnerContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    providerProfileUri: {
        width: totalSize(5.5),
        height: totalSize(5.5),
        borderRadius: totalSize(2),
        borderColor: Colors.backgroundWhite,
        borderWidth: width(1),
        elevation: 7,
        shadowColor: Colors.black,
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
    },
    accountInfoContainer: {
        width: width(65),
        marginLeft: Platform.OS == 'ios'?width(2):0
    },
    providerText: {
        color: Colors.textBlack,
        fontSize: width(4),
        fontWeight: 'bold'
    },
    switchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    onlineText:{
        fontSize:totalSize(1.75),
        marginHorizontal:width(2),
        color: Colors.buttonSecondaryBlue,
        textTransform:'capitalize'
    },
    myAccountText: {
        color: Colors.buttonSecondaryBlue,
        fontSize: width(3),
        marginTop: height(0.5),
        textAlign:'left'
    },
    walletContainer: {
        width: width(90),
        alignSelf: 'center',
        height: height(7),
        backgroundColor: Colors.textBlack,
        marginTop: height(1),
        borderRadius: width(3.5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    walletInnerContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    walletImageContainer: {
        width: width(15),
        justifyContent: "center",
        alignItems: 'center'
    },
    walletImage: {
        width: totalSize(2),
        height: totalSize(2)
    },
    walletAmoutContainer: {
        paddingLeft:width(2),
        width: width(42),
    },
    walletText: {
        color: Colors.lightGray,
        fontWeight: 'bold',
        fontSize:totalSize(1.15)
    },
    amountText: {
        color: Colors.backgroundWhite,
        fontWeight:'bold',
        fontSize:totalSize(1.35)
    },
    addContainer: {
        width: width(25),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addTextContainer: {
        height: height(4),
        width: width(17),
        backgroundColor: Colors.opacitiveLightGray,
        borderRadius: width(4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        color: Colors.backgroundWhite,
        fontSize: totalSize(1.6),
        fontWeight: 'bold'
    },
    angleRightImage: {
        width: totalSize(1.5),
        height: totalSize(1.5)
    },
    imageContainerStyle:{
        backgroundColor:Colors.OpacitiveButtonSecondaryBlue
    },
    iconImage:{
        tintColor:Colors.buttonSecondaryBlue
    },
    appVersionText:{
        marginTop:height(3),
        textAlign:'center',
        fontSize:totalSize(1.35),
        color:Colors.buttonSecondaryBlue
    }
});
export default styles