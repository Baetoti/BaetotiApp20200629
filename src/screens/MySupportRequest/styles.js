import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        borderTopWidth:0.5,
        borderTopColor:Colors.placeHolderTextColor,
        marginHorizontal:width(2.5),
    },
    itemSeparator: {
        marginVertical:height(0.8)
    },
    flatList:{
        paddingVertical:height(2),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
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
        marginTop: height(2)
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
        paddingTop:height(3),
        paddingBottom:height(2),
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,

    },
    topicText:{
        fontSize:width(5),
        fontWeight:'bold',
        color:Colors.textBlack,
        width:width(80),
        alignSelf:'center'
    },
    issueContainer:{
        width:width(80),
        alignSelf:'center',
        marginTop:height(2),
        alignItems:'center',
        justifyContent:'space-between',
    },
    issueText:{
        fontSize:width(4),
        color:Colors.textBlack,
    },
    dateTimeText:{
        fontSize:width(4),
        color:Colors.textOpacitiveBlack,
        width:width(80),
        alignSelf:'center'
    }
});
export default styles