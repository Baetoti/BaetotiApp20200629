import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2D41',
        justifyContent: 'space-between'
    },
    headerContainer: {
        width: width(90),
        alignSelf: 'center'
    },
    backIconContainerStyle: {
        backgroundColor: Colors.darkOverview
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    yourCardsHeading: {
        color: Colors.backgroundWhite,
        fontWeight: "bold",
        fontSize: width(4.4),
        paddingLeft: width(5),
        marginBottom: height(2),
        marginTop: height(1)
    },
    addCardText: {
        color: '#7551E9',
        fontSize: width(3)
    },
    balanceContainer: {
        alignSelf:'center',
        width: width(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(0.75),
        alignItems: 'center',
    },
    balanceText: {
        color: Colors.backgroundWhite,
        fontWeight: "bold",
        fontSize: width(7.8),
        paddingLeft: width(5),
    },
    addButtonContainer: {
        width: height(6),
        height: height(6),
        backgroundColor: Colors.darkOverview,
        borderRadius: height(2.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusImage: {
        width: width(4),
        height: width(4),
    },
    withdrawContainer: {
        width: width(27),
        paddingVertical: height(1),
        backgroundColor: 'rgba(60,72,88,0.30)',
        alignItems: 'center',
        borderRadius: width(5),
        marginLeft: width(4),
        marginTop: height(1.75)
    },
    withdrawText: {
        fontSize: width(2.5),
        color: Colors.backgroundWhite
    },
    cardImage: {
        width: width(60),
        height: height(18),
        marginRight: width(4),
        borderRadius: width(3)
    },
    flatList: {
        height: height(18),
        width: width(100),
    },
    flatListContainer: {
        paddingLeft: width(5)
    },
    lineSeparator: {
        height: 0.5,
        backgroundColor: Colors.placeHolderTextColor,
        width: '100%',
        marginVertical: height(1)
    },
    totalBalanceContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(3),
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    totalBalanceText: {
        fontSize: width(3.5),
        color: Colors.buttonBlue,
    },
    smallBalanceText: {
        fontSize: width(3.5),
        color: Colors.backgroundWhite,
    },
    scrollMainContainer: {
        backgroundColor: '#E5E9F2',
        paddingTop: height(5),
        borderTopLeftRadius: width(8),
        borderTopRightRadius: width(8),
        width: width(100),
        marginTop: height(3)
    },
    rowTransactionsHead: {
        width: width(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    yourTransactionsHeadText: {
        fontWeight: 'bold',
        fontSize: width(4),
    },
    privateDropDown: {
        height: height(12.5),
        width: width(20)
    },
    privateDropDownItemContainer: {
        paddingVertical: height(1),
        paddingHorizontal: width(2)
    },
    privateDropDownItemText: {
        fontSize: totalSize(1.2),
        color: Colors.textBlack
    },
    privateConainer: {
        width: width(22),
        justifyContent: "space-between",
        backgroundColor: Colors.inputBackgroundColor,
        borderRadius: width(4),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(2),
        paddingVertical: height(0.8)
    },
    privateInnerContainer: {
        alignItems: 'center',
        paddingHorizontal: width(2),
        paddingVertical: height(0.5),
        borderRadius: width(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.backgroundWhite
    },
    privateText: {
        fontSize: width(3.2),
        color: Colors.grayDarker,
        fontWeight: 'bold',
        marginRight: width(5)
    },
    arrowDown: {
        height: height(1.5),
        width: height(1.5),
    },
    fixContainer: {
        position: 'absolute',
        top: height(6),
    },
    scrollContainer: {
        height: height(83),
    },
    scroll: {
        paddingTop: height(38),
        paddingBottom: height(0),
    },
    transactionFlatList: {
        marginTop: height(2),
        paddingBottom: height(4)
    },
    flatListTransaction: {
        // maxHeight: height(21),
        maxHeight: height(63),
    },
    transactionsInnerContainer: {
        backgroundColor: Colors.backgroundColor,
        paddingTop: height(5),
        borderTopLeftRadius: width(8),
        borderTopRightRadius: width(8),
        width: width(100),
        marginTop: height(3)
    },
    downloadDropdownRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectedDownloadTransactionsInterval: {
        fontWeight: 'bold',
        fontSize: width(4),
        marginRight: width(4),
        color: Colors.textBlack
    },
    downloadDropDownContainer: {
        width: width(30),
        height: height(14)
    },
    downloadImage: {
        width: height(2),
        height: height(2),
        marginRight: width(3)
    },
    downloadText: {
        fontSize: width(3.4),
        color: Colors.purplePrimary
    },
    downloadTransactionsIntervalText: {
        fontSize: width(3.5),
        color: Colors.textBlack
    },
    transactionCOntainer: {
        width: width(90),
        paddingVertical: height(1.5),
        paddingHorizontal: width(4),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(4),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(1.5)
    },
    receiveImageContainer: {
        height: height(7),
        width: height(7),
        borderRadius: height(2),
        backgroundColor: Colors.opacitiveGreen,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sendImageContainer: {
        height: height(7),
        width: height(7),
        borderRadius: height(2),
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addImageContainer: {
        height: height(7),
        width: height(7),
        borderRadius: height(2),
        backgroundColor: Colors.buttonBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inoutImage: {
        height: height(2),
        width: height(2),
        resizeMode: 'contain'
    },
    transactionDate: {
        fontSize: width(2.6),
        color: Colors.gray
    },
    transactionTitle: {
        fontSize: width(3.3),
        color: Colors.textBlack
    },
    transactionDataContainer: {
        marginHorizontal: width(3),
    },
    transactionAmoutText: {
        fontSize: width(3),
        color: Colors.textBlack
    }
});
export default styles