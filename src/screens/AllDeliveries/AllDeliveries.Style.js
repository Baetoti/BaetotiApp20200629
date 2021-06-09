import { StyleSheet ,Platform} from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7'
    },
    headerContainer: {
        height: height(12),
        justifyContent: 'center',
        alignItems: 'center'
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
        width: width(72)
    },
    arrowDown: {
        height: 10,
        width: 10,
        resizeMode: 'contain'
    },
    itemSeparator: {
        margin: totalSize(0.5)
    },
    orderContainer: {
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
        backgroundColor: Colors.OpacitiveButtonSecondaryBlue,
        borderRadius: width(2)
    },
    boxImage: {
        width: totalSize(3),
        height: totalSize(3),
    },
    orderIdTextContainer: {
        width: width(38),
        marginHorizontal: width(2)
    },
    orderIdLabelText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(2.8),
        textAlign:'left'
    },
    orderIdText: {
        fontSize: width(3.3),
        fontWeight: 'bold',
        marginTop: height(0.25),
    },
    orderDate: {
        fontSize: width(3.3),
        color: Colors.blackColorOpacitive,
        marginTop: height(0.35)
    },
    timeLeftContainer: {
        width: width(22),
        height: height(4),
        backgroundColor: Colors.OpacitiveButtonSecondaryBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width(4)
    },
    timeLeftText: {
        fontSize: width(3),
        color: Colors.buttonSecondaryBlue
    },
    distanceDeliverDateContainer: {
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    deliveryTimeContainer: {
        width: width(39),
    },
    deliveryTimeTextLabel: {
        color: Colors.buttonSecondaryBlue,
        fontSize: width(3.3)
    },
    deliveryTimeText: {
        fontSize: width(3),
        marginTop: height(0.5)
    },
    distanceContainer: {
        width: width(39),
    },
    distanceTimeTextLabel: {
        color: Colors.buttonSecondaryBlue,
        fontSize: width(3.3)
    },
    distanceTimeText: {
        fontSize: width(3),
        marginTop: height(0.5)
    },
    mapMarkerImage: {
        width: totalSize(3),
        height: totalSize(3),
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
        fontSize: totalSize(1.6),
        marginLeft: width(2)
    },
    addressText: {
        color: Colors.halfBlackOpacitive,
        fontSize: width(2.5),
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
        width: width(36),
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
    textStyle: {
        color: Colors.gray,
        fontWeight: 'bold'
    },

});
export default styles;
