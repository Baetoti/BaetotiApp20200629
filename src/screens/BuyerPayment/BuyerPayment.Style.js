import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#253851',
        //justifyContent: 'space-between'
    },
    headerContainer: {
        width: width(90),
        alignSelf: 'center',
    },
    headerTitle: {
        color: Colors.backgroundWhite
    },
    scroll: {
        // height: height(30),
        flex:1
    },
    backIcon: {
        tintColor: Colors.backgroundWhite
    },
    backIconContainerStyle: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        elevation: 7
    },
    innerContainer: {
        backgroundColor: Colors.backgroundColor,
        width: width(100),
        marginTop: height(12),
        borderTopLeftRadius: width(9),
        borderTopRightRadius: width(9),
        flex:1,
        paddingBottom: height(1),
        overflow: 'visible'
    },
    lineSeparator: {
        height: 0.5,
        backgroundColor: Colors.placeHolderTextColor,
        width: '100%',
        marginVertical: height(1)
    },
    lineDoted: {
        width: width(90),
        borderWidth: 0.5,
        marginTop: height(1.8),
        borderColor: Colors.placeHolderTextColor,
        borderStyle: 'dashed',
        borderRadius: 1
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
    approvedOrdersContainer: {
        backgroundColor: Colors.backgroundWhite,
        width: width(90),
        alignSelf: 'center',
        paddingVertical: height(1.5),
        borderRadius: width(4),
        position: 'absolute',
        top: height(11)
    },
    approverImageContainer: {
        width: width(85),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height(1.5)
    },
    approverImage: {
        height: height(8),
        width: height(8),
        borderRadius: width(4)
    },
    approverNameContainer: {
        width: width(66),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    approverName: {
        fontWeight: 'bold',
        fontSize: width(4),
        color: Colors.textBlack
    },
    orderIdTextName: {
        fontSize: width(3),
        color: Colors.textBlack
    },
    oridText: {
        color: Colors.gray,
        fontSize: width(3),
        marginTop: height(1),
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    phoneButtonContainer: {
        height: totalSize(4.5),
        width: totalSize(4.5),
        borderRadius: totalSize(2.5),
        backgroundColor: Colors.opacitiveBlue,
        marginLeft: width(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    chatButtonContainer: {
        height: totalSize(4.5),
        width: totalSize(4.5),
        borderRadius: totalSize(2.5),
        backgroundColor: Colors.opacitiveBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chatImage: {
        height: height(2.25),
        width: height(2.25)
    },
    dateDeliveryContainer: {
        width: width(80),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(2)
    },
    dateDeliveryhoursContainer: {
        width: width(80),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(0.5)
    },
    dateDeliveryText: {
        color: Colors.gray,
        fontSize: width(3),
    },
    dateDeliveryTimeText: {
        fontSize: width(3.25),
        color: Colors.textBlack
    },
    timeLeftText: {
        color: Colors.buttonBlue,
        fontSize: width(3.25),
    },
    itemsDetailContainer: {
        width: width(90),
        borderRadius: width(4),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginTop: height(13.5),
        paddingBottom: height(2)
    },
    itemContainer: {
        width: width(83),
        alignSelf: 'center',
        flexDirection: "row",
        marginTop: height(2)
    },
    itemImage: {
        height: height(8),
        width: height(7.5),
        borderRadius: width(2)
    },
    imageMainContainer: {
        width: width(65),
        marginLeft: width(3),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shopName: {
        color: Colors.textBlack,
        fontSize: width(3.7)
    },
    row: {
        alignItems: 'center',
    },
    categoriesHeadingText: {
        color: Colors.gray,
        fontSize: width(2.7)
    },
    balHeadingText: {
        color: Colors.gray,
        fontSize: width(3.8)
    },
    categoriesText: {
        color: Colors.textBlack,
        fontSize: width(3)
    },
    pricesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: height(1)
    },
    priceText: {
        color: Colors.textBlack,
        fontSize: width(4)
    },
    clientDetailsContainer: {
        width: width(90),
        borderRadius: width(4),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginTop: height(1),
        paddingBottom: height(2),
        paddingTop: height(1.5),
    },
    heading: {
        paddingLeft: width(5),
        color: Colors.textBlack,
        fontSize: width(3.6),
    },
    clientDataContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    clientImage: {
        height: height(8),
        width: height(8),
        borderRadius: height(4)
    },
    nameContainer: {
        marginLeft: width(7),
        paddingTop: height(1),
        marginBottom: height(2)
    },
    clientName: {
        fontWeight: 'bold',
        fontSize: width(4.3),
        marginBottom: height(0.5)
    },
    clientText: {
        color: Colors.buttonBlue,
        fontSize: width(3.4)
    },
    notForDriverText:{
        fontSize:width(4),
        fontWeight:'bold',
        color:Colors.textBlack
    },
    paymentMethodsHeadingText: {
        color: Colors.textBlack,
        fontWeight: "bold",
        fontSize: width(5),
        paddingLeft: width(5),
        paddingVertical: height(3)
    },
    walletContainer: {
        width: width(90),
        borderRadius: width(4),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginTop: height(1),
        paddingBottom: height(1.25),
        paddingTop: height(1.25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height(2),
        paddingHorizontal: width(1.5)
    },
    walletButtonContainer: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(1),
        backgroundColor: Colors.opacitiveBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width(2),
    },
    addMethodButton: {
        paddingHorizontal: width(5),
        paddingVertical: height(0.5),
        borderRadius: width(5),
        backgroundColor: Colors.buttonBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: width(2)
    },
    addMethodButtonText: {
        color: Colors.backgroundWhite,
        fontSize: width(3.5)
    }
});
export default styles;