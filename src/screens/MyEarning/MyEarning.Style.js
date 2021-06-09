import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
    },
    headerViewContainer: {
        height: Platform.OS == 'ios' ? height(22) : height(25),
        overflow: 'visible'
    },
    balanceContainer: {
        width: width(80),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundWhite,
        paddingBottom: height(3),
        borderRadius: width(3),
        alignItems: 'center',
        elevation: 1,
        position: 'absolute',
        top: Platform.OS == 'ios' ? height(11) : height(13),
        zIndex: 1,
        shadowColor: Colors.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.2,
    },
    amountText: {
        marginTop: height(2),
        fontSize: totalSize(3),
        fontWeight: 'bold',
        color: Colors.textBlack
    },
    balanceText: {
        marginTop: height(0.5),
        fontSize: totalSize(1.5),
        color: Colors.placeHolderTextColor
    },
    bankContainer: {
        marginTop: height(2.5),
        width: width(70),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bankName: {
        fontSize: totalSize(1.4),
        color: Colors.placeHolderTextColor
    },
    bankNumber: {
        fontSize: totalSize(1.6),
        color: Colors.textBlack
    },
    withdrawContainer: {
        paddingVertical: height(0.8),
        paddingHorizontal: width(4),
        borderRadius: width(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    withdrawText: {
        fontSize: totalSize(1.5),
    },
    OverViewContainer: {
        paddingTop: height(13),
        width: width(100),
        paddingHorizontal: width(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flexDirection: 'row',
    },
    overViewText: {
        fontSize: totalSize(1.8),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    dropDownContainer: {
        flexDirection: 'row',
        width: width(32),
        height: height(5),
        backgroundColor: '#ffffff',
        borderRadius: width(1),
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: width(5)
    },
    dropDown: {
        height: height(12),
        width: width(32)
    },
    dropDownItemContainer: {
        paddingVertical: height(1),
        paddingHorizontal: width(3),
    },
    dropDownItemText: {
        fontSize: totalSize(1.5),
        color: Colors.textBlack
    },
    dropDownInnerConainer: {
        width: width(32),
        borderRadius: width(5),
        justifyContent: "space-between",
        backgroundColor: Colors.backgroundWhite,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(3),
        paddingVertical: height(0.8),
    },
    selectedValueText: {
        color: Colors.textBlack,
        fontSize: width(3)
    },
    arrowdownImage: {
        width: totalSize(1.3),
        width: totalSize(1.3)
    },
    transactionsContainer: {
        backgroundColor: Colors.backgroundWhite,
        marginTop: height(3),
        alignItems: 'center',
    },
    transactionsTextContainer: {
        width: width(90),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(2),
        flexDirection: 'row'
    },
    transactionsText: {
        fontSize: totalSize(1.8),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    downloadImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    downloadImage: {
        width: totalSize(1.75),
        height: totalSize(1.75),
        marginRight: width(2)
    },
    downloadText: {
        fontSize: totalSize(1.4),
    },
    flatListContainer: {
        marginTop: height(2),
        paddingBottom: height(5)
    },
    itemSeparator: {
        margin: totalSize(0.8)
    },
    transactionsDetailContainer: {
        width: width(90),
        alignSelf: 'center',
        height: height(10),
        backgroundColor: Colors.graybackGround,
        borderRadius: width(3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    transactionsInnerDetailContainer: {
        width: width(80),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    arrowImageContainer: {
        height: totalSize(6),
        width: totalSize(6),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowImage: {
        width: totalSize(2),
        height: totalSize(2)
    },
    bankDetailContainer: {
        width: width(40)
    },
    bankNameText: {
        color: Colors.textBlack,
        fontSize: totalSize(1.8),
        //fontWeight: 'bold'
    },
    bankIdText: {
        color: Colors.textBlack,
        fontSize: totalSize(1.6),
    },
    dateText: {
        color: Colors.placeHolderTextColor,
        fontSize: totalSize(1.5),
        //fontWeight: 'bold'
    },
    line: {
        backgroundColor: Colors.placeHolderTextColor,
        height: 0.5,
        width: '100%',
        marginTop: height(2.5)
    },
    flexRow: {
        flexDirection: 'row',
        width: width(100),
        paddingHorizontal: width(5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

});
export default styles