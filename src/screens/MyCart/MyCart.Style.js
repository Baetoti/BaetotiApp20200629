import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height,totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.backgroundColor,
        justifyContent: 'space-between'
    },
    headerContainer: {
        height: height(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.backgroundWhite,
    },
    headerText: {
        color: Colors.textBlack,
        fontSize: width(4.7),
        fontWeight: 'bold'
    },
    flatList: {
        marginTop: height(2)
    },
    cartItemContainer: {
        width: width(90),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginTop: height(1),
        marginBottom: height(0.5),
        borderRadius: width(3),
        paddingLeft: width(5),
        paddingRight: width(4),
        paddingTop: height(1),
        paddingBottom: height(1),
    },
    topConainer: {
        width: '100%',
        paddingVertical: height(0.5),
        alignSelf: 'center',
        marginVertical: height(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row'
    },
    itemImage: {
        width: width(19),
        height: height(10),
        borderRadius: height(1.5)
    },
    itemDetailContainer: {
        paddingLeft: width(3.8),
        paddingVertical: height(0.3),
    },
    itemName: {
        fontWeight: "bold",
        fontSize: width(4.3),
        color: Colors.textBlack
    },
    shopName: {
        marginTop: height(0.3),
        marginBottom: height(0.5),
        fontSize: width(2.8),
        color: Colors.gray,
    },
    price: {
        fontSize: width(3.5),
        color: Colors.buttonBlue,
    },
    orderDataContainer: {
        paddingVertical: height(0.6),
        alignItems: 'flex-end'
    },
    orderId: {
        color: Colors.gray,
        fontSize: width(2.8),
        textAlign: 'center',
        paddingRight: width(1.5),
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height(2)
    },
    quantityText: {
        paddingHorizontal: width(2),
        color: Colors.textBlack,
        fontWeight: 'bold',
        fontSize: width(5),
        textAlign: 'center'
    }, removeItem: {
        fontSize: width(3),
        color: Colors.textRedColor,
        marginTop: height(1.2)
    },
    lineSeparator: {
        height: 0.5,
        backgroundColor: Colors.placeHolderTextColor,
        width: '100%',
    },
    inputComments: {
        color: Colors.textBlack,
        fontSize: width(4.1),
        marginTop: height(1)
    },
    deliveryDetail: {
        width: width(90),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(6),
        paddingVertical: height(2.5),
        paddingHorizontal: width(5.5),
    },
    deliveryText: {
        fontWeight: 'bold',
        color: Colors.textBlack,
        fontSize: width(3.6),
    },
    addressContainer: {
        backgroundColor: 'rgba(28,45,65,0.05)',
        borderRadius: width(4),
        marginTop: height(2),
        paddingVertical: height(2),
        paddingHorizontal: width(2),
    },
    addressTopContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mapImage: {
        width: width(4.5),
        height: width(4.5),
        resizeMode: 'contain'
    },
    currentLocationImage: {
        width: width(4),
        height: width(4),
        resizeMode: 'contain'
    },
    addressText: {
        fontSize: width(3),
        color: Colors.textBlack,
        marginHorizontal: width(2.2),
        textAlign: 'center'
    },
    currentLocationText: {
        fontSize: width(3.5),
        color: Colors.buttonBlue,
        marginHorizontal: width(2)
    },
    address: {
        fontWeight: 'bold',
        fontSize: width(3.5),
        color: Colors.textBlack,
        paddingHorizontal: width(2),
        paddingTop: height(1)
    },
    setUpPinButton:{
        alignSelf:'center',
        marginTop:height(1),
        borderBottomWidth:1
    },
    dateTimeContainer: {
        marginTop: height(2.5)
    },
    dateTimeText: {
        fontSize: width(3.4)
    },
    notForDriverContainer:{
        width:width(90),
        alignSelf:'center',
        paddingVertical:height(2),
        marginBottom: height(3),
        marginTop:height(1),
        backgroundColor:Colors.backgroundWhite,
        borderRadius: width(6),
        paddingHorizontal:width(5)
    },
    notForDriverText:{
        fontSize:width(4),
        fontWeight:'bold',
        color:Colors.textBlack
    },
    inputNotComments:{
        color: Colors.textBlack,
        fontSize: width(4.1),
        marginTop: height(1),
        width:width(80),
        height:height(6),
    },
    button: {
        backgroundColor: Colors.buttonBlue,
        marginTop: 0,
        height: height(7),
        borderColor: Colors.buttonBlue,
        shadowColor: Colors.buttonBlue
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: width(4.5)
    },
    DatePicker: {
        marginLeft: width(100),
        width: 0,
        height: 0
    },
    totalPriceContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height(1)
    },
    selfDelivery: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    wantToDeliveryText: {
        color: Colors.textBlack,
        fontSize: width(3.2)
    },
    hideLocationContainer: {
        width: width(13),
        backgroundColor: Colors.purplePrimary,
        borderRadius: width(5),
        marginTop: height(1),
        marginLeft: width(1),
        marginRight: width(3),
        justifyContent: 'center',
    },
    listEmptyContainer:{
        height: height(50),
        alignItems:'center',
        justifyContent:'flex-end',
    },
    undrawemptyImage: {
        height: totalSize(25),
        width: totalSize(25),
        alignSelf: 'center'
      },
    emptyText:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:width(3.8)
    },
    mapContainer:{
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    backButtonContainer:{
        position:'absolute',
        top:height(2),
        height:totalSize(5),
        width:totalSize(5),
        borderRadius:totalSize(2.5),
        backgroundColor:Colors.backgroundWhite,
        left:width(5),
        alignItems:'center',
        justifyContent:'center'
    },
    pickUpAddress:{
        position:'absolute',
        bottom:height(5),
        backgroundColor:Colors.buttonBlue,
        shadowColor:Colors.buttonBlue,
        width:width(60)
    }
});
export default styles