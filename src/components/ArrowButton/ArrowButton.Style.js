import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height: height(8),
        alignItems: 'center',
        marginTop: height(1.2),
        backgroundColor: Colors.buttonBlue,
        borderRadius: width(2)
    },
    innerContainer: {
        flexDirection: 'row',
        width: width(82),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        color: Colors.backgroundWhite,
        fontSize: width(3.6),
        fontWeight: 'bold',
    },
    angleRightImageButton: {
        paddingRight: width(2)
    },
});
export default styles;
