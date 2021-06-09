import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: height(2),
        alignItems: 'center',
        backgroundColor: Colors.backgroundWhite,
        marginTop: height(1.5),
        borderRadius: width(2),
        justifyContent: 'space-between',
        paddingHorizontal: width(3)
    },
    socialMediaIconButton: {
        width: width(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialMediaIcon: {
        width: totalSize(4),
        height: totalSize(4)
    },
    socailLinkContainere: {
        width: width(56),
        paddingLeft: width(1),
        // backgroundColor:'black'
    },
    socailLink: {
        color: Colors.gray,
        fontSize: totalSize(1.5),
        fontWeight: 'bold'
    },
    isConnectedContainer: {
        paddingLeft: width(1),
        paddingRight: width(1)
    },
    isConnected: {
        color: Colors.textGreen,
        fontSize: totalSize(1.75),
        fontWeight: 'bold',

    }
});
export default styles;
