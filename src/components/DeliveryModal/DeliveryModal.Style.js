
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Colors from '../../utills/Colors';
const styles = StyleSheet.create({
    mainContainer: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        width: width(70),
        borderRadius:20,
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical: height(3)
    },
    areyousureText: {
        fontSize: totalSize(2.5),
        marginVertical: height(3)
    },
    detailText: {
        fontSize: totalSize(1.75),
    },
    buttonContainer: {
        flexDirection: 'row',
        width: width(60),
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    cancelButton: {
        width: width(20),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: height(1.5),
        paddingHorizontal: width(4.5),
        marginVertical: height(2),
        backgroundColor: 'black'
    },
    cancelText: {
        color: 'white',
        fontSize:totalSize(1.75)
    },
    proceedButton: {
        width: width(20),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: height(1.5),
        paddingHorizontal: width(4.5),
        marginVertical: height(1),
        backgroundColor: Colors.purplePrimary
    },
    proceedText: {
        color: Colors.backgroundWhite
    },
    orText:{
        color:Colors.black,
        fontSize:width(4),
    },
    assignDriver:{
        width: width(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: height(0.95),
        // paddingHorizontal: width(4.5),
        marginVertical: height(1),
        backgroundColor: "green"
    }
});
export default styles;