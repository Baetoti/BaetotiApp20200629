import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.backgroundColor,
    },
    profileContainer: {
        paddingVertical: height(2),
        backgroundColor: Colors.backgroundWhite,
        paddingBottom: 0,
        borderBottomLeftRadius: width(5),
        borderBottomRightRadius: width(5)
    },
    providerProfileUri: {
        width: totalSize(8),
        height: totalSize(8),
        borderRadius: totalSize(3.25),
        borderColor: Colors.backgroundWhite,
        borderWidth: width(1),
        elevation: 7,
        alignSelf: 'center'
    },
    providerText: {
        alignSelf: 'center',
        marginTop: height(1.5),
        fontSize: width(3.6),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    mailAddressText: {
        alignSelf: 'center',
        marginTop: height(0.5),
        fontSize: width(2.5),
        color: Colors.gray,
    },

    bookMarkContainer: {
        width: width(70),
        alignSelf: 'center',
        marginTop: height(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalVisitorContainer: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    bookMarkText: {
        color: Colors.textBlack,
        fontSize: width(4.5),
        fontWeight: 'bold'
    },
    verticalLine: {
        height: height(8),
        width: width(0.2),
        backgroundColor: Colors.placeHolderTextColor,
    },
    totalVisitorText: {
        marginTop: height(1),
        color: Colors.gray,
        fontSize: width(3),
    },
    tabContainer: {
        marginTop: height(2)
    },
    tabTextStyle: {
        fontSize: width(3.3),
        fontWeight: 'bold'
    },
    renderTabFooter: {
        width: totalSize(3.5),
        height: totalSize(0.3),
        borderRadius: totalSize(0.5),
        backgroundColor: Colors.buttonBlue,
        marginTop: height(2)
    },
    ratingContainer: {
        marginTop: height(2),
        width: width(90),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    ratingLabelText: {
        fontSize: width(4),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    ratingText: {
        fontSize: width(3),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    dropDownContainer: {
        flexDirection: 'row',
        width: width(32),
        height: height(6),
        backgroundColor: '#ffffff',
        borderRadius: width(3),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dropDown: {
        height: height(12),
        width: width(32),
        justifyContent: 'center'
    },
    dropDownItemContainer: {
        height: height(4),
        paddingHorizontal: width(3)
    },
    dropDownItemText: {
        fontSize: width(3),
        color: Colors.textBlack,
    },
    dropDownInnerConainer: {
        width: width(32),
        borderRadius: width(3),
        justifyContent: "space-between",
        backgroundColor: Colors.backgroundWhite,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(3),
        paddingVertical: height(0.8)
    },
    selectedValueText: {
        color: Colors.textBlack,
        fontSize: width(3),
    },
    arrowdownImage: {
        width: width(2.7),
        width: width(2.7)
    },
    flatListContainer: {
        marginTop: height(2),
        // height: height(28),
        // backgroundColor:Colors.backgroundWhite
    },
    itemSeparator: {
        margin: totalSize(0.8)
    },
    ratingViewContainer: {
        paddingVertical: height(1.5),
        width: width(90),
        alignSelf: 'center',
        borderRadius: width(2),
        backgroundColor: Colors.backgroundWhite
    },
    ratingInfoView: {
        width: width(80),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    personImage: {
        height: totalSize(5.5),
        width: totalSize(5.5),
        borderRadius: totalSize(2)
    },
    personNameContainer: {
        maxWidth: width(42),
    },
    personNameText: {
        fontWeight: 'bold',
        color: Colors.textBlack,
        fontSize: width(3)
    },
    starsContainer: {
        width: width(18),
        overflow: 'visible',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateText: {
        fontSize: width(3),
        color: Colors.blackColorOpacitive
    },
    productContainer: {
        width: width(69),
        marginTop: height(0.65),
        paddingRight: width(2),
    },
    productflatListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productImage: {
        height: totalSize(4.5),
        width: totalSize(4.5),
        borderRadius: width(0.5)
    },
    commentContainer: {
        width: width(50),
        marginHorizontal: width(1.5)
    },

    commmentText: {
        color: Colors.gray,
        fontSize: width(2.5),
        marginHorizontal: width(3)
    },
    linearGradient: {
        height: height(54),
        paddingBottom: height(5)
    }

});
export default styles