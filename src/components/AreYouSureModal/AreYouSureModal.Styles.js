
import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Colors from '../../utills/Colors';
const styles = StyleSheet.create({
    mainContainer: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ffffff',
        width: "70%",
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
        width: '100%',
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
        color: 'white'
    },
    proceedButton: {
        width: width(20),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: height(1.5),
        paddingHorizontal: width(4.5),
        marginVertical: height(2),
        backgroundColor: Colors.purplePrimary
    },
    proceedText: {
        color: Colors.backgroundWhite
    },
});
export default styles;