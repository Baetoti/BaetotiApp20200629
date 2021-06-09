import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        height: height(8),
        alignItems: 'center'
    },
    backButtonContainer: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(2),
        backgroundColor: Colors.opacitiveBlack,
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowLeft: {
        width: totalSize(1.8),
        height: totalSize(1.8),
    },
    titleText: {
        color: Colors.textBlack,
        fontSize: totalSize(2),
        fontWeight: 'bold'
    },
    image: {
        width: totalSize(2.5),
        height: totalSize(2.5),
    },
    emptyView: {
        height: totalSize(6),
        width: totalSize(6),
    }
});
export default styles;
