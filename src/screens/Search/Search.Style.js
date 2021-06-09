import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: width(10)
    },
    elevationConainer: {
        borderRadius: 10,
        backgroundColor: color.white,
        marginTop: height(4),
        height: height(27),
        width: width(85),
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 7,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        marginTop: height(5),
        width: width(100),
    },
    text: {
        textAlign: 'center',
        color: color.lightBrown,
        fontSize: totalSize(2),
        paddingLeft: 10,
    },
    flexRow: {
        flexDirection: 'row',
    },
    textContainer: {
        marginVertical: height(2.2),
        marginHorizontal: width(5),
        flexDirection: 'row',
        width: width(90),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headingText: {
        fontWeight: 'bold',
        color: Colors.textBlack
    },
    categoryContainer: {
        width: width(35),
        height: height(8),
        borderRadius: 10
    },
    blurBackground: {
        width: width(35),
        height: height(8),
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryText: {
        fontSize: totalSize(1.5),
        color: '#ffffff',
        fontWeight: 'bold'
    },
    dropDownContainer: {
        flexDirection: 'row',
        width: width(18),
        height: height(5),
        backgroundColor: '#ffffff',
        borderRadius: width(1),
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dropDown: {
        height: height(8.5),
        width: width(90),
        alignSelf: 'center',
        marginLeft: width(5)
    },
    dropDownItemContainer: {
        width: width(90),
        alignSelf: 'center',
        paddingVertical: height(1),
        paddingHorizontal: width(3),
    },
    dropDownItemText: {
        fontSize: totalSize(1.6),
        color: color.textBlack
    },
    providerContainer: {
        width: width(35),
        paddingVertical: height(4),
        borderRadius: 10,
        backgroundColor: color.backgroundWhite,
        justifyContent: 'center',
        alignItems: 'center'
    },
    providerLogo: {
        width: 60,
        height: 60,
        borderRadius: 60
    },
    providerRestaurant: {
        marginTop: '6%',
        color: color.black
    },
    providerCategory: {
        marginTop: '2%',
        fontSize: totalSize(1.3),
        color: color.gray
    },
    searchFilterContainer: {
        flexDirection: 'row',
        width: width(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: height(1.5),
        alignItems: 'center',
    },
    searchContainer: {
        width: width(75),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        borderRadius: width(2.98),
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInnerContainer: {
        width: width(65),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    searchImage: {
        height: totalSize(2.0),
        width: totalSize(2.0),
        resizeMode: 'contain'
    },
    searchText: {
        width: width(53),
        //borderWidth:1,
    },
    arrowDown: {
        height: 18,
        width: 18,
        resizeMode: 'contain'
    },
    avatarImageContainer: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(2),
        backgroundColor: color.backgroundWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backImage: {
        width: width(3.25),
        height: width(3.25),
        resizeMode: 'contain'
    },
    flatListContainer: {
        marginTop: height(2),
        // width: width(90),
        alignSelf: 'center',
    },
    itemSeparator: {
        margin: totalSize(0.8)
    },
    flatListMainContainer: {
        width: width(90),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: color.backgroundWhite,
        paddingVertical: height(2),
        paddingHorizontal: width(5),
        borderRadius: width(2)
    },
    itemImageBackground: {
        height: totalSize(9),
        width: totalSize(9),
        justifyContent: 'space-between'
    },
    itemLeftContainer: {
        height: height(2),
        width: width(9),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height(0.7),
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        borderRadius: width(3),
        marginRight: width(1)
    },
    itemLeftText: {
        color: color.backgroundWhite,
        fontSize: width(2)
    },
    starImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: width(1),
        marginBottom: height(0.5)
    },
    starImage: {
        height: totalSize(1),
        width: totalSize(1),
    },
    itemNameContainer: {
        width: width(55),
        marginHorizontal: width(2)
    },
    itemNameText: {
        fontWeight: 'bold',
        fontSize: width(3.3),
        color: color.textBlack
    },
    personRatingText: {
        color: color.backgroundWhite,
        fontSize: width(3.3),
        paddingHorizontal: width(1),
    },
    itemNamePicContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    panCakeText: {
        fontSize: width(3),
        color: color.textBlack,
    },
    ellipseImage: {
        height: totalSize(0.5),
        width: totalSize(0.5),
        tintColor: color.blue,
        marginHorizontal: width(1),
    },
    HoneyText: {
        fontSize: width(3),
        marginHorizontal: width(1),
        color: color.textBlack
    },
    descriptionText: {
        fontSize: width(2.2),
        color: color.gray
    },
    priceDollarContainer: {
        marginTop: height(0.5)
    },
    priceText: {
        fontSize: width(3),
        color: color.textBlack
    },
    orderButton: {
        height: height(7),
        width: width(90),
        backgroundColor: color.buttonBlue,
        marginBottom: height(2),
        marginTop: height(1),
        alignSelf: 'center',
        borderRadius: width(2),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },

    currency: {
        fontSize: width(2.5),
        marginHorizontal: width(1)
    },
    perUnitContainer: {
        backgroundColor: color.opacitiveBlue,
        borderRadius: width(10),
        paddingHorizontal: width(3),
        // paddingVertical: height(0.3),
        marginHorizontal: width(1)
    },
    perUnit: {
        fontSize: width(3.2),
        color: color.buttonBlue
    }
});
export default styles;
