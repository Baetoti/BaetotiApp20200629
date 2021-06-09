import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        width: width(90),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        height: height(5),
        alignItems: 'center',
        marginTop:height(1),
        backgroundColor:Colors.backgroundWhite,
        borderRadius:width(2)
    },
    innerContainer: {
        flexDirection: 'row',
        width: width(82),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer:{
        height:totalSize(2.5),
        width:totalSize(2.5),
        backgroundColor:Colors.opacitiveLightPurple,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:width(1)
    },
    image:{
        width: totalSize(1.25),
        height: totalSize(1.25),
    },
    titleText:{
        width:width(60),
        color:Colors.textBlack,
        fontSize:totalSize(1.5),
        fontWeight:'bold',
    },
    angleRightImageButton:{
        paddingRight:width(2)
    },
    angleRightImage: {
        width: totalSize(1.25),
        height: totalSize(1.25),
        tintColor:Colors.placeHolderTextColor
    },
    dot:{
        position:'absolute',
        height:width(1.5),
        width:width(1.5),
        borderRadius:width(0.75),
        backgroundColor:Colors.textGreen,
        right:width(15)
    }
});
export default styles;
