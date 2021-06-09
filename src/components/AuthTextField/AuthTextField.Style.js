import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { height, width, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    textFieldContainer: {
        width: width(90),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(9),
        marginTop: height(1.5),
        borderRadius: width(2.98),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFieldInnerContainer: {
        width: width(80),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
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
        fontSize:totalSize(2),
    },
});
export default styles;
