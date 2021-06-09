import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ratingContainer: {
        width: width(90),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingTextContainer: {
        flexDirection: 'row',
        width: width(32),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingText: {
        fontWeight: 'bold',
        fontSize: totalSize(5)
    },
    outoFText: {
        fontSize: totalSize(1.4),
        marginTop: height(2),
        marginLeft: width(1),
        color: Colors.darkOpactiveGrays,
    },
    startImageContainer: {
        width: width(45),
        alignItems: 'flex-end'
    },
    startImageInnerContainer: {
        flexDirection: 'row'
    },
    reviewsContainer: {
        marginTop: height(2),
        width: width(90),
        alignSelf: 'center',
    },
    reviewflatListContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:height(2)
    },
    imageContainer: {
    },
    imageAvatar: {
        width: totalSize(7),
        height: totalSize(7),
        borderRadius:totalSize(3.5)
    },
    reviewRatingContainer: {
        width: width(70)
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameText: {
        color: Colors.textBlack,
        fontSize: totalSize(2),
    },
    ratingStarContainer: {
        flexDirection: 'row',
        marginTop: height(0.5),
        alignItems: 'center'
    },
    dateText: {
        color: Colors.textBlack,
        fontSize: totalSize(1.35),
        marginLeft: width(2),
    },
    status:{
        color: Colors.textBlack,
        fontSize: totalSize(1.35),
    },
    imagesContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:height(1)
    },
    orderImage:{
        width: totalSize(6),
        height: totalSize(6),
        borderRadius:totalSize(2),
        marginHorizontal:width(1)
    }
});
export default styles;
