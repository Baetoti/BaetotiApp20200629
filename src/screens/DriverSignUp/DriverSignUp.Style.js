import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F9',
    },
    createAccountTextContainer: {
        marginTop: height(4),
        width: width(90),
        alignSelf: 'center'
    },
    createAccountText: {
        color: Colors.textBlack,
        fontSize: totalSize(3.5),
        fontWeight: 'bold'
    },
    withDriverText: {
        color: Colors.gray,
        fontSize: totalSize(2),
        marginTop:height(1)
      },
    textFieldInnerContainer:{
        width:width(80),
        alignSelf:'center',
        backgroundColor: '#ffffff',
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textFieldContainer: {
        width:width(90),
        alignSelf:'center',
        backgroundColor: '#ffffff',
        height: height(9),
        marginTop: height(1.5),
        borderRadius: width(2.98),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFieldImage: {
        height: totalSize(2.25),
        width: totalSize(2.25),
        resizeMode: 'contain'
    },
    textInput: {
        width: width(72),
        height: height(7),
        paddingVertical: 0,
        fontSize:totalSize(2)
    },
    editDocumentButton: {
        paddingVertical: height(1.5),
        backgroundColor: Colors.backgroundWhite,
        shadowColor: Colors.backgroundWhite,
        width:width(90),
        elevation:0
    },
    textStyle: {
        color: Colors.textBlack,
        fontWeight:'bold'
    },
    alreadyAccountText: {
        alignSelf: 'center',
        marginTop: height(1),
        color: Colors.grayDarker,
       
    },
    createAccountButton: {
        alignSelf: 'center',
        marginTop: height(0.2),
    },
    loginText: {
        color: Colors.buttonBlue,
        fontWeight: 'bold'
    }
});
export default styles;
