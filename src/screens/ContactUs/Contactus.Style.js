import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    settingComponentContainer: {
        marginTop: height(4)
    },
    submitButton: {
        width: width(85),
        marginTop: height(4)
    },
    buttonContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.backgroundWhite,
        paddingVertical: height(1.7),
        borderRadius: width(3),
        paddingHorizontal: width(3)
    },
    Buttonimage: {
        height: totalSize(2.5),
        width: totalSize(2.5)
    },
    titleContainer: {
        width: width(65),
    },
    titleHeading: {
        color: Colors.textBlack,
        fontSize: totalSize(1.75),
        fontWeight: 'bold'
    },
    titleInfo: {
        color: Colors.textBlack,
        fontSize: totalSize(1.65)
    },

    input: {
        height: height(25),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(5),
        width: '90%',
        alignSelf: 'center',
        marginTop: height(5),
        elevation: 3,
        shadowColor: Colors.black,
        shadowOpacity: 0.6,
        shadowOffset: { width: 1, height: 1 },
        paddingLeft: width(4),
        paddingTop: height(2)
    },
    chatConainer: {
        backgroundColor: Colors.backgroundWhite,
        width: height(8),
        height: height(8),
        borderRadius: height(5),
        alignSelf: 'flex-end',
        marginRight: width(5),
        marginBottom: width(5),
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default styles