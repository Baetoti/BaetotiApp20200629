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
        backgroundColor: Colors.backgroundWhite,
        marginTop: height(2),
        borderRadius: width(2)
    },
    innerContainer: {
        flexDirection: 'row',
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: totalSize(1.7),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.placeHolderTextColor,
        paddingHorizontal: width(3),
        fontSize: totalSize(1.5),
        // fontWeight:'bold'
    },
    image: {
        width: totalSize(1.2),
        height: totalSize(1.2),
        tintColor: Colors.placeHolderTextColor
    },

    hideLocationContainer: {
        width: width(13),
        backgroundColor: Colors.purplePrimary,
        borderRadius: width(5),
        marginTop: height(1),
        marginLeft: width(1),
        marginRight: width(3),
        justifyContent: 'center',
    },
});
export default styles;
