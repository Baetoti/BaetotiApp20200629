import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'space-between'
    },
    headerContainer: {
        width: width(90),
        alignSelf: 'center',
        marginBottom: height(2)
    },
    scroll: {
        height: height(100),
    },
    backIconContainerStyle: {
        backgroundColor: Colors.backgroundWhite
    },
    aboutHeading: {
        color: Colors.textBlack,
        fontWeight: 'bold',
        fontSize: width(5),
        marginLeft: width(5)
    },
    aboutText: {
        width: width(90),
        alignSelf: 'center',
        fontSize: width(3.5),
        color: Colors.textBlack,
        marginTop: height(2),
        lineHeight: height(2.3),
    }
});
export default styles