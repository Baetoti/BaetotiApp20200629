import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    modalContainer: {
        flex: 1,
        marginTop: height(5),
        marginBottom: height(3),
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        width: width(90),
        borderRadius: width(7),
    },
    sliderBoxContainer: {
        height: height(35)
    },
    dotStyle: {
        borderWidth: 1,
        borderColor: Colors.backgroundWhite,
        height: totalSize(1),
        width: totalSize(1),
        borderRadius: totalSize(1)
    },
    sliderImage: {
        borderTopLeftRadius: width(7),
        borderTopRightRadius: width(7),
        borderBottomLeftRadius: width(7)
    },
    crossButtonContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(2),
        position: 'absolute',
        zIndex: 1
    },
    crossButton: {
        height: totalSize(5),
        width: totalSize(5),
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: totalSize(5),
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',

    },
    multiplyImage: {
        width: totalSize(1.25),
        height: totalSize(1.25)
    },
    priceContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(29),
        position: 'absolute',
        zIndex: 1
    },
    priceView: {
        height: height(3.5),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'flex-end',
        borderRadius: width(7),
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: width(2),
        overflow: 'hidden',
        flexDirection: 'row'
      },
      pricetext: {
        color: Colors.textBlack,
        fontSize: width(3)
      },
      currency: {
        fontSize: width(2)
      },
      perUnitContainer: {
        height: '100%',
        borderRadius: width(7),
        backgroundColor: Colors.opacitiveBlueDark,
        paddingHorizontal: width(4),
        marginLeft: width(3),
        justifyContent:'center'
      },
    perUnit: {
        fontSize: width(3.2),
        color: Colors.buttonBlue
    },
    buttonContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(15),
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    angleLeft: {
        width: totalSize(1.5),
        height: totalSize(1.5),
        tintColor: Colors.backgroundWhite
    },
    angleRight: {
        width: totalSize(1.5),
        height: totalSize(1.5),
        tintColor: Colors.backgroundWhite
    },
    itemNameContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(1)
    },
    itemNameText: {
        fontWeight: 'bold',
        fontSize: totalSize(2.3),
        color: Colors.textBlack
    },
    ratingStarsContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(1)
    },
    ratingText: {
        paddingLeft: width(2),
        color: Colors.textBlack,
        fontSize: totalSize(1.8),
        fontWeight: 'bold'
    },
    itemNamePicContainer: {
        width: width(80),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: height(0.5)
    },
    panCakeText: {
        fontSize: totalSize(1.6),
        color: Colors.lightTextBlack,
    },
    ellipseImage: {
        height: totalSize(0.5),
        width: totalSize(0.5),
        tintColor: Colors.blue,
        marginLeft: width(2),
        tintColor: Colors.buttonBlue
    },
    HoneyText: {
        fontSize: totalSize(1.6),
        marginLeft: width(2),
        color: Colors.lightTextBlack
    },
    tagsContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(1.5),

    },
    tagText: {
        fontSize: totalSize(1.6),
        color: Colors.textBlack,
    },
    itemSeparator: {
        margin: width(1)
    },
    itemFlatlistContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(1)
    },
    tagsViewContainer: {
        paddingHorizontal: width(7),
        paddingVertical: height(1),
        backgroundColor: Colors.opacitiveBlue,
        borderRadius: width(5)
    },
    tagsText: {
        color: Colors.buttonBlue
    },
    descriptionTextContainer: {
        width: width(80),
        alignSelf: 'center',
        marginTop: height(3)
    },
    descriptionText: {
        fontSize: totalSize(1.6),
        color: Colors.textBlack,

    },
    allDescriptionText: {
        color: Colors.gray,
        fontSize: totalSize(1.5),
        lineHeight: 20,
        marginTop: height(0.5)

    }

});

export default styles