import { StyleSheet } from 'react-native';
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
        alignItems:'center'
    },
    orderIdDetailContainer:{
        width:width(90),
        alignSelf:'center',
        height:height(11),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.buttonSecondaryBlue,
        borderRadius:width(3)
    },
    orderIdInnerDetailContainer:{
        width:width(80),
        flexDirection:'row',
        justifyContent:"space-between",
    },
    boxContainer:{
        width:totalSize(7),
        alignSelf:'center',
        height:totalSize(7),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(3)
    },
    boxImage:{
        width:totalSize(3),
        height:totalSize(3),
    },
    orderIdTextContainer: {
        width: width(60),
        marginLeft: width(2),
        marginTop:height(1)
    },
    orderIdLabelText: {
        color: Colors.backgroundWhite,
        fontSize: width(2.8)
    },
    orderIdText: {
        fontSize: width(3.3),
        color: Colors.backgroundWhite,
        fontWeight:'bold',
        marginTop:height(0.5)
    },
    deliveryDateText:{
        fontSize: width(3.3),
        color:Colors.opacitiveWhite,
        marginTop:height(0.5)
    },
    orderDetailContainer:{
        width:width(90),
        alignSelf:'center',
        paddingVertical:height(2),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(3),
        marginTop:height(2)
    },
    headingTextContainer:{
        width:width(80),
        marginTop:height(1)
    },
    headingText:{
        fontSize:width(3.8),
        fontWeight:'bold'
    },
    lineSeparator: {
        height:0.4,
        backgroundColor: '#1C2D41',
        width: '100%',
        opacity:0.2,
        width: width(90),
        marginTop: height(2)
    },
    providerNameContainer:{
        width:width(80),
        marginTop:height(2),
        backgroundColor:Colors.opacitiveBackGroundLightGray,
        height:height(10),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:width(3)
    },
    providerInnerNameContainer:{
        width:width(75),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    providerImage:{
        height:totalSize(6),
        width:totalSize(6),
        borderRadius:width(3)
    },
    providerNameTextContainer:{
        width:width(30),
        marginLeft:width(2),
    },
    providerNameText:{
        fontSize:width(3.8),
        fontWeight:'bold'
    },
    providerNameTextLabel:{
        fontSize:width(3.5),
        color:Colors.buttonSecondaryBlue
    },
    contactContainer:{
        width:width(23),
        flexDirection:'row',
    },
    messageButton:{
        height:totalSize(4.5),
        width:totalSize(4.5),
        borderRadius:totalSize(2.25),
        backgroundColor:Colors.buttonSecondaryBlue,
        alignItems:'center',
        justifyContent:'center',
    },
    commentImage:{
        height:totalSize(1.5),
        width:totalSize(1.5),
    },
    phoneButton:{
        height:totalSize(4.5),
        width:totalSize(4.5),
        borderRadius:totalSize(2.25),
        backgroundColor:Colors.buttonSecondaryBlue,
        marginLeft:width(2),
        alignItems:'center',
        justifyContent:'center',
    },
    phoneImage:{
        height:totalSize(1.5),
        width:totalSize(1.5),
    },
    providerAddressContainer: {
        width: width(80),
        marginTop:height(2)
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
        marginLeft: width(2),
        fontWeight:'bold'
    },
    addressText: {
        color:Colors.halfBlackOpacitive,
        fontSize: width(2.7),
        marginTop:height(1)
    },
    clientNameContainer:{
        width:width(80),
        marginTop:height(2),
        backgroundColor:Colors.opacitiveBackGroundLightGray,
        height:height(10),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:width(3)
    },
    clientInnerNameContainer:{
        width:width(75),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    clientImage:{
        height:totalSize(6),
        width:totalSize(6),
        borderRadius:width(3)
    },
    clientNameTextContainer:{
        width:width(30),
        marginLeft:width(2),
    },
    clientNameText:{
        fontSize:width(3.8),
        fontWeight:'bold'
    },
    clientNameTextLabel:{
        fontSize:width(3.5),
        color:Colors.buttonSecondaryBlue
    },
    packageDetailContainer:{
        width:width(90),
        alignSelf:'center',
        paddingVertical:height(2),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(3),
        marginTop:height(2),
        marginBottom:height(2)
    },
    orderIdTextLabelContainer:{
        height:height(8),
        width:width(80),
        marginTop:height(2),
        backgroundColor:Colors.opacitiveBlack,
        borderRadius:width(3),
        justifyContent:'center',
        alignItems:'center'
    },
    orderIdTextLabelInnerContainer:{
        flexDirection:'row',
        width:width(70),
        alignItems:'center',
        justifyContent:'space-between'
    },
    orderIdTextLabel:{
        alignSelf:'center',
        color:Colors.halfBlackOpacitive,
        fontSize:width(3.5)
    },
    orderTextId:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:width(3.5)
    },
    totalPackageContainer:{
        width:width(80),
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:height(2)
    },
    totalPackageTextLabel:{
        fontSize:width(3.8),
        color:Colors.textBlack,
    },
    totalPackageText:{
        fontSize:width(3.8),
        color:Colors.textBlack
    },
    amountStatusContainer:{
        width:width(80),
        marginTop:height(2),
        backgroundColor:Colors.OpacitiveButtonSecondaryBlue,
        height:height(9),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:width(3)
    },
    amountStatusInnerContainer:{
        width:width(70),
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    amountStatusTextLabel:{
        color:Colors.halfBlackOpacitive,
        fontSize:width(3.8),
        fontWeight:'bold'
    },
    amountStatusText:{
        color:Colors.buttonSecondaryBlue,
        fontSize:width(3.8),
        fontWeight:'bold'
    },
    deliveryChargesContainer:{
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    deliveryChargesLabelText:{
        color:Colors.opacitiveLightGrayText,
        fontSize:width(3.6)
    },
    deliveryChargesText:{
        color:'rgba(9, 2, 29, 0.8)',
        fontSize:width(3.6),
    },
    halfLineSeparator:{
        height:0.4,
        backgroundColor: '#1C2D41',
        width: '100%',
        marginTop:height(1.5),
        opacity:0.2,
        width: width(82),
        alignSelf:'center'
    },
    totalChargesContainer:{
        width: width(82),
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(2)
    },
    totalChargesLabelText:{
        color:Colors.grayTextColor,
        fontSize:width(3.7),
    },
    totalChargesText:{
        color:Colors.grayTextColor,
        fontSize:width(3.6),
        fontWeight:'bold'
    },
    containerStyle: {
        paddingVertical: height(0),
        paddingVertical: height(2.3),
        marginVertical: height(0),
        elevation:0,
        backgroundColor: Colors.buttonSecondaryBlue,
        shadowColor: Colors.buttonSecondaryBlue,
        height:height(7),
    },
    editDocumentButton: {
        marginVertical: height(0),
        paddingVertical: height(0),
        height:height(7),
        backgroundColor: Colors.backgroundWhite,
        shadowColor: Colors.backgroundWhite,
        marginTop: height(2),
        marginBottom:height(2),
        elevation:0
    },
    textStyle: {
        color: Colors.gray,
        fontWeight:'bold'
    },
    mapContainer: {
        height: height(22),
        width: width(82),
        overflow: 'hidden',
        borderRadius: width(5),
        marginTop: height(1)
      },
      map: {
        height: '100%',
        width: '100%'
      },
    
});
export default styles;
