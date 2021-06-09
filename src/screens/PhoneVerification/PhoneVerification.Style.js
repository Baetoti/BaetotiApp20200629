import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7'
    },
    phoneTextContainer: {
        marginTop: height(6),
        width: width(90),
        alignSelf: 'center'
    },
    phoneText: {
        color: Colors.textBlack,
        fontSize: totalSize(3.5),
        fontWeight: 'bold'
    },
    verificationText: {
        color: Colors.textBlack,
        fontSize: totalSize(3.5),
        fontWeight: 'bold',
        marginTop: height(1)
    },
    otpRecivedText: {
        marginTop: height(3),
        color: Colors.gray
    },
    phoneNumberText: {
        marginTop: height(2),
        fontSize:width(3.8)
    },
    otpContainer: {
        width: width(90),
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: height(5),
    },
    otpViewContainer: {
        width: width(75),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    otpView: {
        width: totalSize(7),
        height: totalSize(8),
        backgroundColor: Colors.backgroundWhite,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width(3)
    },
    otpTextInput: {
        width: width(6),
        height: height(5),
        paddingVertical: 0,
        fontSize: totalSize(2),
        textAlign: 'center'
    },
    starticText: {
        color: Colors.placeHolderTextColor,
        fontSize: totalSize(2)
    },
    underlineStyleHighLighted: {
        borderColor: Colors.white,
        borderRadius: 5,
        fontSize: totalSize(2.50),
    },
    timeExpireContainer: {
        marginTop: height(6),
        width: width(90),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    expireText: {
        color: Colors.gray,
        fontSize: totalSize(1.8),
        paddingRight: width(2)
    },
    resendContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    resendText: {
        color: Colors.textBlack,
        fontWeight: 'bold',
        fontSize: totalSize(2)
    },
    alredyButtonContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    alreadyAccountText: {
        color: Colors.grayDarker
    },
    loginText: {
        color: Colors.buttonBlue,
        fontWeight: 'bold',
        marginTop: height(1)
    },
    otpView: {
        width: width(80),
        height: height(10),
      },
      underlineStyleBase: {
        borderColor: Colors.backgroundWhite,
        padding: 2,
        borderRadius: 5,
        width: width(15),
        height: height(7.5),
        fontSize: totalSize(2.25),
        fontWeight: 'bold',
        color: Colors.gray,
        backgroundColor:Colors.backgroundWhite
      },
      underlineStyleHighLighted: {
        borderColor: 'transparent',
        color: 'transparent',
        fontSize: totalSize(2.5),
      },
    
    
});
export default styles;
