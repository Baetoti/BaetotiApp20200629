import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        // paddingBottom:height(2)
    },
    headerContainer: {
        width: width(90),
        alignSelf: 'center'
    },
    scroll: {
        height: height(78),
    },
    backIconContainerStyle: {
        backgroundColor: Colors.backgroundWhite
    },
    coverImageContainer: {
        marginTop: height(1),
        width: width(90),
        height: height(12),
        borderRadius: width(4),
        alignSelf: 'center',
    },
    coverImage: {
        width: width(90),
        height: height(12),
        borderRadius: width(4),
        alignSelf: 'center',
    },
    imageMainContainer: {
        width: width(90),
        height: height(12),
        borderRadius: width(4),
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: width(8),
        justifyContent: 'space-between'
    },
    shopName: {
        color: Colors.backgroundWhite,
        fontWeight: 'bold',
        fontSize: width(5)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoriesHeadingText: {
        color: Colors.placeHolderTextColor,
        fontSize: width(3)
    },
    categoriesText: {
        color: Colors.backgroundWhite,
        fontWeight: 'bold',
        fontSize: width(3)
    },
    priceContainer: {
        width: width(80),
        borderBottomLeftRadius: width(3),
        borderBottomRightRadius: width(3),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        paddingTop: height(1.75),
        paddingBottom: height(0.5),
    },
    priceRowContainer: {
        flexDirection: "row",
        paddingHorizontal: width(5),
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: height(1)
    },
    priceText: {
        color: 'rgba(28,45,65,0.5)',
        fontSize: width(3.6),
    },
    totalPriceText: {
        marginTop: height(1),
        color: Colors.textBlack,
        fontSize: width(4),
        fontWeight: 'bold'
    },
    paymentMethodsHeadingText: {
        color: Colors.textBlack,
        fontWeight: "bold",
        fontSize: width(5),
        paddingHorizontal: width(5),
        paddingVertical: height(3)
    },
    cardImage: {
        width: width(60),
        height: height(18),
        marginRight: width(4),
        borderRadius: width(3)
    },
    flatList: {
        // height: height(18),
        width: width(100),
    },
    flatListContainer: {
        paddingHorizontal: width(5),
    },
    qrButtonContainer: {
        backgroundColor: Colors.darkBackground,
        width: width(63),
        marginVertical: height(2),
        marginBottom: height(4)
    },
    qrButtonText: {
        fontSize: width(2.5),
        fontWeight: 'bold',
    },
    qrIcon: {
        marginRight: width(3)
    },
    lineSeparator: {
        borderBottomWidth:0.4,
        borderBottomColor: Colors.placeHolderTextColor,
        width: '100%',
        marginVertical: height(1)
    },
    button: {
        backgroundColor: Colors.buttonBlue,
        marginTop: height(0),
        marginBottom:height(3),
        height: height(7),
        borderColor: Colors.buttonBlue,
        shadowColor: Colors.buttonBlue,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: width(4.5),  
    }, walletContainer: {
        width: width(90),
        borderRadius: width(4),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginTop: height(1),
        paddingBottom: height(1.25),
        paddingTop: height(1.25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height(2),
        paddingHorizontal: width(1.5)
    },
    walletButtonContainer: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(1),
        backgroundColor: Colors.opacitiveBlue,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width(2),
    },
    addMethodButton: {
        paddingHorizontal: width(5),
        paddingVertical: height(0.5),
        borderRadius: width(5),
        backgroundColor: Colors.buttonBlue,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: width(2)
    },
    addMethodButtonText: {
        color: Colors.backgroundWhite,
        fontSize: width(3.5)
    },row: {
        alignItems: 'center',
    },
    chatImage: {
        height: height(2.25),
        width: height(2.25)
    },   clientName: {
        fontWeight: 'bold',
        fontSize: width(4.3),
        marginBottom: height(0.5)
    },
    clientText: {
        color: Colors.buttonBlue,
        fontSize: width(3.4)
    }, shopName: {
        color: Colors.textBlack,
        fontSize: width(3.7)
    }, balHeadingText: {
        color: Colors.gray,
        fontSize: width(3.8)
    },checkBoxContainer: {
        height: height(2.5),
        width: height(2.5),
        borderColor: Colors.placeHolderTextColor,
        borderWidth: width(0.45),
        borderRadius: height(2),
        alignItems: 'center',
        justifyContent: 'center'
      },
      checkBoxInnerContainer: {
        height: height(1),
        width: height(1),
        borderRadius: height(0.9),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonBlue
      },
      itemsDetailContainer: {
        width: width(90),
        borderRadius: width(3),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        paddingVertical: height(1.35),
        marginRight:width(3)
      },
      itemContainer: {
        width: width(85),
        alignSelf: 'center',
        flexDirection: 'row',
      },
      cardImageContainer: {
        height: height(4.75),
        width: height(7),
        borderWidth: 0.5,
        borderRadius: width(2),
        borderColor: 'rgba(0,0,0,0.16)',
        alignItems: 'center',
        justifyContent: 'center'
      },
      itemImage: {
        height: height(4.5),
        maxWidth: height(5),
        //borderRadius: width(2),
      },
      imagesMainContainer: {
        width: width(65),
        marginLeft: width(3),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      shopsName:{
        color: Colors.textBlack,
        fontSize: width(3.25),
      },
      checksBoxContainer: {
        height: height(2.5),
        width: height(2.5),
        borderColor: Colors.placeHolderTextColor,
        borderWidth: width(0.45),
        borderRadius: height(2),
        alignItems: 'center',
        justifyContent: 'center'
      },
      checkBoxInnerContainer: {
        height: height(1),
        width: height(1),
        borderRadius: height(0.9),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonBlue
      },
      checkImage: {
        height: height(2.5),
        width: height(2.5),
      },
});
export default styles