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
    flatListContainer: {
        width: width(90),
        alignSelf: 'center',
        borderRadius: width(1),
        backgroundColor: Colors.backgroundWhite,
        paddingVertical: height(2),
        marginTop:height(3),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    namePriceContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameText: {
        fontSize: width(4),
        color: Colors.textBlack
    },
    priceText: {
        fontSize: width(4),
        color: Colors.textBlack
    },
    itemNameContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height(2)
    },
    foodText: {
        fontSize: width(3.6),
        color: Colors.textBlack
    },
    timeDateText: {
        fontSize: width(3.6),
        color: Colors.textOpacitiveBlack,
        marginTop: height(0.5)
    },
    furtherContainer:{
        width:width(90),
        alignSelf:'center',
        marginTop:height(2),
    },
    furtherDetailText:{
        fontSize:width(5),
        color:Colors.textBlack,
        fontWeight:'bold'
    },
    input: {
        height: height(15),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(5),
        width: width(90),
        alignSelf: 'center',
        marginTop: height(2),
        paddingLeft: width(4),
        paddingTop: height(2),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
    },
    uploadContainer: {
        width: width(90),
        alignSelf: 'center',
        height: height(15),
        borderWidth: 1,
        borderColor: Colors.buttonBlue,
        marginTop: height(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width(5)
    },
    imageContainer: {
        width: width(30),
        height: height(12),
        borderWidth: 1,
        borderColor: Colors.buttonBlue,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width(30),
        height: height(8)
    },
    uploadText: {
        fontSize: width(4),
        color: Colors.textBlack
    },
    sendButton: {
        marginTop: height(5),
        backgroundColor: Colors.buttonBlue,
        shadowColor: Colors.buttonBlue
    }
});
export default styles