import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        // height: Platform.OS = 'ios' ? height(75) : height(80),
    },
    line:{
        width:width(90),
        borderBottomColor:Colors.black,
        borderBottomWidth:1,
        // marginHorizontal:width(5)
    },
    // scrollViewContainer: {
    //     // ...StyleSheet.absoluteFillObject,
    //     // backgroundColor:'pink'
    // },
    // itemSeparator: {
    //     margin: totalSize(0.8)
    // },
    // flatList: {
    //     paddingTop: height(2),
    //     paddingBottom:height(35)
    // },
    // textInputContainer: {
    //     width: width(100),
    //     alignSelf: 'center',
    //     height: height(9),
    //     flexDirection: 'row',
    //     alignSelf: 'center',
    //     paddingHorizontal: width(5),
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     position:'absolute',
    //     bottom:height(14.5),
    //     backgroundColor:Colors.backgroundWhite
    // },
    // textInputInnerContainer: {
    //     width: width(73),
    //     height: height(8),
    //     backgroundColor: Colors.backgroundWhite,
    //     borderRadius: width(2),
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // textInput: {
    //     width: width(68),
    //     height: height(7),
    //     paddingVertical: 0,
    //     fontSize: totalSize(2),
    //     color: Colors.textBlack,
    // },
    // sendButtonContainer: {
    //     width: width(14),
    //     height: width(14),
    //     backgroundColor: Colors.backgroundWhite,
    //     borderRadius: width(7),
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // }
});
export default styles