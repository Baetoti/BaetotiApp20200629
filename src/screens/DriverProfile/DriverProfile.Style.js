import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
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
        backgroundColor: Colors.buttonSecondaryBlue,
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
    ratingText: {
        fontSize: totalSize(1.65),
        color: Colors.textBlack,
        fontWeight: 'bold'
    },
    ratingHeader: {
        fontSize: totalSize(2.20),
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
        height: height(15),
        width: width(32)
    },
    dropDownItemContainer: {
        paddingVertical: height(1),
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
        paddingHorizontal: width(2.75),
        paddingVertical: height(0.75)
    },
    selectedValueText: {
        color: Colors.textBlack,
        fontSize: totalSize(1.50),
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
        height: totalSize(4.25),
        width: totalSize(4.25),
        borderRadius: totalSize(1.85)
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
        maxWidth: width(21),
        overflow: 'visible',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateText: {
        fontSize: width(2.85),
        color: Colors.lightGray
    },
    productContainer: {
        width: width(70),
        marginTop: height(1),
        paddingRight: width(2)
    },
    productflatListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    productImage: {
        height: totalSize(4.10),
        width: totalSize(4),
        borderRadius: width(0.85)
    },
    commentContainer: {
        width: width(57),
        marginHorizontal: width(1.5)
    },
    productname: {
        color: Colors.textBlack,
        fontSize: width(2.7),
        fontWeight: 'bold'
    },
    productRatingView: {
        width: width(10),
        paddingVertical: height(0.20),
        backgroundColor: Colors.purplePrimary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width(3),
        marginLeft: width(2),
        flexDirection: 'row'
    },
    starImage: {
        height: totalSize(1),
        width: totalSize(1),
        tintColor: Colors.backgroundWhite
    },
    productRatingText: {
        color: Colors.backgroundWhite,
        fontWeight: 'bold',
        fontSize: width(2.25),
        marginLeft: width(1)
    },
    commmentText: {
        color: Colors.gray,
        fontSize: width(2.25),
        maxWidth: width(58),
        marginHorizontal: width(3)
    }
});
export default styles