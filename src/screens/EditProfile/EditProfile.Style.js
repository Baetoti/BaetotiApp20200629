import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7',
    },
    createAccountTextContainer: {
        marginTop: height(6),
        width: width(90),
        alignSelf: 'center'
    },
    createAccountText: {
        color: Colors.textBlack,
        fontSize: totalSize(3.5),
        fontWeight: 'bold'
    },
    coutryTextFieldContainer: {
        width:width(90),
        alignSelf:'center',
        backgroundColor: '#ffffff',
        height: height(9),
        marginTop: height(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width(2.98),
    },
    textFieldInnerContainer:{
        width:width(80),
        alignSelf:'center',
        backgroundColor: '#ffffff',
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    providerProfileUri: {
        width: totalSize(11),
        height: totalSize(11),
        borderRadius: totalSize(4.5),
        borderColor: Colors.backgroundWhite,
        borderWidth: width(1),
        elevation: 7,
        shadowColor: Colors.black,
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        alignSelf: 'center',
        marginTop: height(2)
    },
    flagImage: {
        height: totalSize(4),
        width: totalSize(4),
    },
    arrowdownImage: {
        height: totalSize(1.5),
        width: totalSize(1.5),
        resizeMode: 'contain'
    },
    countrytextInput: {
        width: width(50),
        height: height(5),
        paddingVertical: 0,
        borderLeftColor: Colors.placeHolderTextColor,
        borderLeftWidth: 1,
        paddingLeft: width(4.5),
        fontSize:totalSize(2)
    },
    countryArabictextInput:{
        width: width(50),
        height: height(5),
        paddingVertical: 0,
        borderRightColor: Colors.placeHolderTextColor,
        borderRightWidth: 1,
        paddingHorizontal: width(2.5),
        fontSize:totalSize(2),
        textAlign:'right'
    },
    textFieldContainer: {
        width:width(90),
        alignSelf:'center',
        backgroundColor: '#ffffff',
        height: height(9),
        marginTop: height(1.5),
        borderRadius: width(2.98),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFieldImage: {
        height: totalSize(2.25),
        width: totalSize(2.25),
        resizeMode: 'contain'
    },
    textInput: {
        width: width(72),
        height: height(7),
        paddingVertical: 0,
        fontSize:totalSize(2)
    },
    dateTimePickerContainer: {
        width: width(90),
        marginTop: height(2),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    picekrTextFieldContainer: {
        width: width(43.5),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundWhite,
        height: height(8),
        borderRadius: width(2.25),
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row'
    },
    genderDropDown:{
        height: height(12.5),
        width:width(33)
      },
      genderDropDownItemContainer:{
        paddingVertical: height(1),
        paddingHorizontal: width(2)
      },
      genderDropDownItemText:{
        fontSize: totalSize(1.6),
        color: Colors.textBlack
      },
      genderConainer: {
        width: width(33),
        justifyContent: "space-between",
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(2),
        paddingVertical: height(0.8)
      },
    genderText:{
        color:Colors.placeHolderTextColor,
        fontSize:totalSize(2)
    },
    dateTextFieldContainer: {
        width: width(43.5),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundWhite,
        height: height(8),
        borderRadius: width(2.25),
        alignItems: 'center',
        justifyContent: 'center',

    },
    dateTextInnerFieldContainer:{
        flexDirection:'row',
        width: width(32),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundWhite,
        height: height(8),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateTextFielView: {
        width: width(33),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundWhite,
        height: height(8),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    datePlaceholder: {
        color: Colors.placeHolderTextColor,
        fontSize:totalSize(1.8),
    },
    selectedDateText: {
        color: Colors.textBlack,
        fontSize:totalSize(1.8),
    },
    termPolicyContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop: height(2),
    },
    descriptionText: {
        fontSize: totalSize(1.25),
        color: Colors.textBlack,
    },
    termPolicyText: {
        fontSize: totalSize(1.20),
        color: Colors.buttonBlue
    },
    alreadyAccountText: {
        alignSelf: 'center',
        marginTop: height(1.5),
        color: Colors.grayDarker
    },
    createAccountButton: {
        alignSelf: 'center',
        marginTop: height(1)
    },
    loginText: {
        color: Colors.buttonBlue,
        marginBottom: height(3),
        fontWeight: 'bold'
    }
});
export default styles;
