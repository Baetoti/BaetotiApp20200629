import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: height(5),
        paddingVertical: height(2),
        backgroundColor: color.buttonBlue,
        borderColor: color.buttonBlue,
        shadowColor: color.buttonBlue,
        elevation: 15,
    },
    container: {
        flex: 1,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
    },

    map: {
        ...StyleSheet.absoluteFillObject
    },
    flatlistContainer: {
        position: 'absolute',
        // zIndex: 1,
        bottom: height(0),
        justifyContent: 'center',
        alignItems: 'center',
        width: width(100),
        backgroundColor: color.backgroundWhite,
           paddingBottom:height(3)
    },
    buttonsContainer:{
        width:width(100),
        height:height(7),
        backgroundColor:color.buttonSecondaryBlue,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:width(10)
    },
    buttonText:{
        fontSize:totalSize(1.75),
        color:color.backgroundWhite
    },
    timeContainer:{
        height:totalSize(7),
        width:totalSize(7),
        borderRadius:totalSize(3.5),
        borderWidth:width(2),
        borderColor:color.buttonSecondaryBlue,
        backgroundColor:color.backgroundWhite,
        position:'absolute',
        top:-height(3),
        alignItems:'center',
        justifyContent:'center'
    },
    timeSecText:{
        fontSize:totalSize(1.75)
    },
    orderContainer: {
        backgroundColor: color.backgroundWhite,
        width: width(90),
        alignItems: 'center',
        marginTop:height(2)
    },
    orderIdContainer: {
        width: width(90),
        // alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    boxContainer: {
        width: width(14),
        alignSelf: 'center',
        height: width(14),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.OpacitiveButtonSecondaryBlue,
        borderRadius: width(2)
    },
    boxImage: {
        width: totalSize(3),
        height: totalSize(3),
    },
    orderIdTextContainer: {
        width: width(42),
        marginLeft: width(2)
    },
    orderIdLabelText: {
        color: color.halfBlackOpacitive,
        fontSize: width(2.8)
    },
    orderIdText: {
        fontSize: width(3.3),
        fontWeight: 'bold',
        marginTop: height(0.5)
    },
    orderDate: {
        fontSize: width(3.3),
        color: color.blackColorOpacitive,
        marginTop: height(0.5)
    },
    timeLeftContainer: {
        width: width(22),
        height: height(4),
        alignItems: 'center',
        borderRadius: width(4)
    },
    timeLeftText: {
        fontSize: width(3),
        color: color.halfBlackOpacitive,
    },
    distanceDeliverDateContainer: {
        width: width(73),
        // alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    deliveryTimeContainer: {
        width: width(39),
    },
    deliveryTimeTextLabel: {
        color: color.buttonSecondaryBlue,
        fontSize: width(3.5)
    },
    deliveryTimeText: {
        fontSize: width(3.3),
        fontWeight: 'bold',
        marginTop: height(0.5)
    },
    distanceContainer: {
        width: width(39),
    },
    distanceTimeTextLabel: {
        color: color.buttonSecondaryBlue,
        fontSize: width(3.5)
    },
    distanceTimeText: {
        fontSize: width(3.3),
        fontWeight: 'bold',
        marginTop: height(0.5)
    },
    mapMarkerImage: {
        width: totalSize(3),
        height: totalSize(3),
    },
    lineSeparator: {
        borderBottomWidth: 0.4,
        borderColor: '#1C2D41',
        width: '100%',
        marginTop: height(2),
        opacity: 0.2
    },
    addressContainer: {
        width: width(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(0.5)
    },
    providerAddressContainer: {
        width: '45%',
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
        fontSize: width(3.25),
        marginLeft: width(2)
    },
    addressText: {
        color: color.halfBlackOpacitive,
        fontSize: width(2.6),
        marginTop: height(1),
        width: '100%',
    },
    verticalLine: {
        height: height(8),
        backgroundColor: color.opacitiveBackGroundGray,
        width: 0.5,
        marginVertical: height(0.5)
    },
    BuyerAddressContainer: {
        width: '50%',
    },
    orderId: {
        alignSelf: 'center',
        paddingVertical: height(0.8),
        backgroundColor: color.buttonSecondaryBlue,
        borderRadius: width(5),
        paddingHorizontal: width(5),
        overflow: 'hidden',
        fontSize: width(3.2),
        color: color.backgroundWhite,
        marginBottom: height(2),
    },
    bottomButton: {
        width: width(90),
        paddingTop: height(2),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pickButton: {
        width: width(43),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width(3.5),
        backgroundColor: color.buttonSecondaryBlue,
        paddingVertical: height(2.5)
    },
    pickText: {
        fontSize: width(4),
        color: color.backgroundWhite
    },
    cancilButton: {
        width: width(43),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width(3.5),
        backgroundColor: color.backgroundWhite,
        paddingVertical: height(2.5)
    },
    cancilText: {
        fontSize: width(4),
        color: color.halfBlackOpacitive
    }
});
export default styles;
