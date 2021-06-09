import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        width: width(90),
        alignSelf: 'center',
        marginVertical: height(2),
    },
    backIconContainerStyle: {
        backgroundColor: Colors.backgroundWhite
    },
    mainViewContainer:{
        flex:1
    },
    dateContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttonText:{
        fontSize:totalSize(1.85),
        fontWeight:'bold'
    },
    headingText:{
        fontSize:totalSize(1.85),
        fontWeight:'bold',
        marginTop:height(4),
        textAlign:'center'
    },
    itemsDetailContainer: {
        width: width(90),
        borderRadius: width(4),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginTop: height(2),
        paddingBottom: height(2)
    },
    itemContainer: {
        width: width(80),
        alignSelf: 'center',
        flexDirection: "row",
        marginTop: height(2),
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemDescriptionContainer:{
        width:width(80),
        alignSelf:'center',
        marginTop:height(2),
        borderWidth:0.6,
    },
    deliveryButton:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(3),
        // alignItems:'flex-end',
        flexDirection:'row',
        alignItems:'center' ,
        justifyContent:'flex-end'
    },
    driverDetailText:{
        fontSize:totalSize(1.75),
        fontWeight:'bold',
        textAlign:'center',
        marginHorizontal:width(2)
    },
    priceContainer: {
        width:width(90),
        alignSelf:'center',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:height(2)
    },
    priceText:{
        fontWeight: 'bold',
        color: Colors.textBlack,
        fontSize: width(3.6),
    },
    containerStyle: {
        paddingVertical: height(2.3),
        marginVertical: height(3),
        marginBottom: height(3),
        backgroundColor: Colors.buttonBlue,
        shadowColor: Colors.buttonBlue,
    },
    deliveryTimeContainer:{
        width:width(90),
        alignSelf:'center',
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:height(2) 
    }
});
export default styles;
