import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        
    },
    itemSeparator: {
        margin: totalSize(0.8),
        
    },
    flatList:{
        paddingBottom:height(2)
    },
    anotherOrderCOntainer: {
        width: width(90),
        alignSelf: 'center',
        height: height(7),
        borderRadius: width(1),
        backgroundColor: Colors.backgroundWhite,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width(5),
        marginTop: height(2),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    anOtherText: {
        fontSize: width(4),
        color: Colors.textBlack
    },
    pastOrderText:{
        width:width(90),
        alignSelf:'center',
        fontSize: width(5),
        color: Colors.textBlack,
        fontWeight:'bold',
        marginVertical:height(2)
    },
    flatListContainer:{
        width:width(90),
        alignSelf:'center',
        borderRadius: width(1),
        backgroundColor: Colors.backgroundWhite,
        paddingVertical:height(2),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,

    },
    namePriceContainer:{
        width:width(80),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    nameText:{
        fontSize:width(4),
        color:Colors.textBlack
    },
    priceText:{
        fontSize:width(4),
        color:Colors.textBlack
    },
    itemNameContainer:{
        width:width(80),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    foodText:{
        fontSize:width(3.6),
        color:Colors.textBlack
    },
    timeDateText:{
        fontSize:width(3.6),
        color:Colors.textOpacitiveBlack,
        marginTop:height(0.5)
    },
    reportButton:{
        width:width(25),
        backgroundColor:Colors.buttonBlue,
        shadowColor:Colors.buttonBlue,
        paddingVertical:height(1)
    }
});
export default styles