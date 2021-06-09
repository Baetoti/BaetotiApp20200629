import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7'
    },
    headerContainer: {
        height: height(18),
        backgroundColor: Colors.backgroundWhite,
        justifyContent: 'space-between'
    },
    headerItemContainer: {
        width: width(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: height(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageView: {
        height: totalSize(6),
        width: totalSize(6),
        backgroundColor: Colors.backgroundWhite,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        borderRadius: totalSize(2.5),
        borderWidth: 1,
        borderColor: Colors.backgroundWhite,
        shadowOffset: {width: width(2),height: height(0.7)},
        shadowColor: Colors.textBlack,
        shadowOpacity: 0.25,
        shadowRadius: width(2)
    },
    driverImage: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(2)
    },
    titleText: {
        color: Colors.textBlack,
        fontSize: totalSize(2),
        fontWeight: 'bold'
    },
    headerEnd: {
        height: totalSize(5),
        width: totalSize(5),
    },
    tabContainer: {
        marginTop: height(2),
    },
    selectedTabText: {
        fontSize:width(4)
    },
    tabtextStyle: {
        fontSize: width(4)
    },
    renderTabFooter: {
        width: totalSize(5),
        height: totalSize(0.5),
        borderRadius: totalSize(0.25),
        backgroundColor: Colors.buttonSecondaryBlue,
        marginTop: height(2.5)
    },
    searchContainer: {
        width: width(90),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        marginTop: height(1.5),
        borderRadius: width(2.98),
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInnerContainer: {
        width: width(80),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    searchImage: {
        height: totalSize(2.0),
        width: totalSize(2.0),
        resizeMode: 'contain'
    },
    searchText: {
        width: width(72),
    },
    arrowDown: {
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },
    itemSeparator: {
        margin: totalSize(0.8)
    },
    orderPendingRequestContainer: {
        paddingVertical: height(2),
        backgroundColor: Colors.backgroundWhite,
        width: width(90),
        alignSelf: 'center',
        borderRadius: width(2),
    },
    orderIdContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    boxContainer: {
        width: totalSize(6.5),
        alignSelf: 'center',
        height: totalSize(6.5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonSecondaryBlue,
        borderRadius: width(2)
    },
    boxImage: {
        width: totalSize(3),
        height: totalSize(3),
        tintColor: Colors.backgroundWhite
    },
    orderIdTextContainer: {
        width: width(57),
        marginHorizontal: width(1.5)
    },
    orderIdLabelText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(2.8)
    },
    orderIdText: {
        fontSize: width(3.3),
        fontWeight: 'bold'
    },
    deliveryTimeTextLabel: {
        color: Colors.blackColorOpacitive,
        fontSize: width(2.8)
    },
    deliveryTimeText: {
        color: Colors.textBlack,
        fontSize: width(3)
    },
    mapMarkerImage: {
        width: totalSize(2.5),
        height: totalSize(2.5),
    },
    lineSeparator: {
        height:0.4,
        backgroundColor: '#1C2D41',
        width: '100%',
        opacity:0.2,
        width: width(90),
        marginTop: height(2)
    },
    addressContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    providerAddressContainer: {
        width: width(36),
    },
    mapImageContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mapMarkerAddressImage: {
        width: totalSize(2),
        height: totalSize(2),
    },
    toFormText: {
        fontSize: totalSize(1.75),
        marginLeft: width(2)
    },
    addressText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(2.7),
        marginTop: height(1)
    },
    verticalLine: {
        height: height(8),
        backgroundColor: Colors.textBlack,
        opacity:0.2,
        width: 0.5,
        marginVertical: height(1.5),
        marginRight:width(3)
    },
    BuyerAddressContainer: {
        width: width(37),
    },
    deliveryChargesContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    deliveryChargesLabelText: {
        color: Colors.opacitiveLightGrayText,
        fontSize: width(3.6)
    },
    deliveryChargesText: {
        color: Colors.grayTextColor,
        fontSize: width(3.6),
    },
    halfLineSeparator: {
        height:0.4,
        backgroundColor: '#1C2D41',
        width: '100%',
        marginTop:height(1.5),
        opacity:0.2,
        width: width(82),
        alignSelf:'center'
    },
    totalChargesContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    totalChargesLabelText: {
        color: Colors.grayTextColor,
        fontSize: width(3.7),
    },
    totalChargesText: {
        color: Colors.grayTextColor,
        fontSize: width(3.6),
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width(82),
        alignSelf: 'center'
    },
    editDocumentButton: {
        paddingVertical: height(2.3),
        backgroundColor: Colors.opacitiveBlack,
        shadowColor: Colors.opacitiveBlack,
        width: width(40),
        elevation: 0
    },
    orderStatusContainer: {
        width: width(80),
        height: height(5),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: width(7),
        borderBottomRightRadius: width(7)
    },
    orderStatusText: {
        fontSize: width(3.5),
        color: Colors.buttonSecondaryBlue,
        fontWeight: 'bold'
    },
    textStyle: {
        color: Colors.gray,
        fontWeight: 'bold'
    },
    containerStyle: {
        paddingVertical: height(2.3),
        width: width(40),
        backgroundColor: Colors.buttonSecondaryBlue,
        shadowColor: Colors.buttonSecondaryBlue,
    },
    currentOrderRequestContainer: {
        paddingVertical: height(2),
        backgroundColor: Colors.backgroundWhite,
        width: width(90),
        alignSelf: 'center',
        borderRadius: width(2),
    },
    currentOrderIdContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    currentBoxContainer: {
        width: totalSize(6.5),
        alignSelf: 'center',
        height: totalSize(6.5),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.OpacitiveButtonSecondaryBlue,
        borderRadius: width(2)
    },
    currentBoxImage: {
        width: totalSize(3),
        height: totalSize(3),
    },
    currentOrderIdTextContainer: {
        width: width(43),
        marginHorizontal: width(2),
    },
    currentOrderIdLabelText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(2.8)
    },
    currentOrderIdText: {
        fontSize: width(3.3),
        fontWeight: 'bold'
    },
    cancelButtonContainer: {
        height: height(5),
        width: width(20),
        backgroundColor: '#fdecec',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width(2),
        borderColor: Colors.textRedColor,
        borderWidth: 0.5
    },
    cancelText: {
        color: Colors.textRedColor,
        fontWeight: 'bold',
        fontSize: width(3.5)
    },
    currentOrderDateContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2),
    },
    dateTextLabel: {
        color: Colors.gray,
        fontSize: width(3.5),
        fontWeight: 'bold'
    },
    dateText: {
        color: Colors.textBlack,
        fontSize: width(3.5),
    },
    currentOrderAddressContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2),
        backgroundColor: Colors.opacitiveBackGroundGray,
        paddingVertical: height(1),
        borderRadius: width(3)
    },
    currentOrderProviderAddressContainer: {
        width: width(36),
        marginLeft: width(1)
    },
    currentOrderMapImageContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currentOrderMapMarkerAddressImage: {
        width: totalSize(2),
        height: totalSize(2),
    },
    currentOrderToFormText: {
        fontSize: totalSize(1.65),
        marginLeft: width(2)
    },
    currentOrderAddressText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(2.5),
        marginTop: height(1),
    },
    currentOrderVerticalLine: {
        height: height(8),
        backgroundColor: Colors.textBlack,
        opacity:0.2,
        width: 0.5,
        marginVertical: height(1.5),
        marginRight:width(3)
    },
    currentOrderBuyerAddressContainer: {
        width: width(36),
    },
    currentOrderstatusContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2),
    },
    statusTextLabel: {
        color: Colors.gray,
        fontSize: width(3.5),
        fontWeight: 'bold'
    },
    statusText: {
        color: Colors.buttonSecondaryBlue,
        fontSize: width(3.5),
        fontWeight: 'bold'
    },
    currentDeliveryChargesContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    currentDeliveryChargesLabelText: {
        color: Colors.opacitiveLightGrayText,
        fontSize: width(3.6)
    },
    currentDeliveryChargesText: {
        color: Colors.grayTextColor,
        fontSize: width(3.6),
    },
    currentTotalChargesContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    currentTotalChargesLabelText: {
        color: Colors.grayTextColor,
        fontSize: width(3.7),
    },
    currentTotalChargesText: {
        color: Colors.grayTextColor,
        fontSize: width(3.6),
        fontWeight: 'bold'
    },
});
export default styles;
