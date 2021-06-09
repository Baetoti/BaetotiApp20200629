import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7'
    },
    headingTextContainer: {
        width: width(85),
        alignSelf: 'center',
        marginTop: height(1),
    },
    orContainer: {
        marginTop: height(1),
        width: width(90),
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        width: width(10),
        borderBottomWidth: 1
    },
    orText: {
        paddingHorizontal: width(1),
        color: Colors.textBlack,
        fontSize: width(3.5)
    },
    LinearGradient: {
        height: 1,
        alignSelf: 'center',
        borderRadius: 17,
        width: width(10),
        justifyContent: 'center',
    },
    headingText: {
        fontSize: width(3.6),
        fontWeight: 'bold'
    },
    dropDownContainer: {
        flexDirection: 'row',
        width: width(85),
        height: height(8),
        backgroundColor: '#ffffff',
        borderRadius: width(2),
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: height(2)
    },
    dropDown: {
        height: height(14),
        width: width(85),
    },
    dropDownItemContainer: {
        paddingVertical: height(1),
        paddingHorizontal: width(3)
    },
    dropDownItemText: {
        fontSize: totalSize(1.6),
        color: Colors.textBlack
    },
    dropDownselectedValueContainer: {
        width: width(85),
        justifyContent: 'space-around',
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(3),
        paddingVertical: height(0.8)
    },
    dropDownselectedValueText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(3.5),
    },
    arrowdownImage: {
        width: totalSize(1.5),
        width: totalSize(1.5),
    },
    mainViewContainer: {
        flexDirection: 'row',
        width: width(85),
        height: height(8),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(2),
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: height(2)
    },
    textInput: {
        width: width(70),
        height: height(7),
        paddingVertical: 0,
        fontSize: totalSize(2)
    },
    innerItemsContainer: {
        width: width(70),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioButtonContainer: {
        marginTop: height(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioButton: {
        height: totalSize(2.5),
        width: totalSize(2.5),
        borderRadius: totalSize(1.5),
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blueDot: {
        height: totalSize(1.25),
        width: totalSize(1.25),
        backgroundColor: Colors.buttonSecondaryBlue,
        borderRadius: totalSize(0.75)
    },
    radioButtonText: {
        fontSize: width(3.8),
        marginHorizontal: width(3)
    },
    containerStyle: {
        paddingVertical: height(2.3),
        marginVertical: height(3),
        marginBottom: height(3),
    },
    DatePicker: {
        marginLeft: width(100),
        width: 0,
        height: 0
    }
});
export default styles;
