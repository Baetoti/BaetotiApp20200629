import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8F7'
    },
    verificationDoneImage: {
        height:totalSize(25),
        width:totalSize(25),
        alignSelf:'center',
    },
    uploadSucessText:{
        fontSize:totalSize(3),
        fontWeight:'bold',
        alignSelf:'center'
    },
    thanksText:{
        color:'rgba(0, 0, 0, 0.4)',
        fontSize:totalSize(1.75),
        marginTop:height(1.25),
        alignSelf:'center'
    },
    currentDescriptionTextContainer:{
        width:width(80),
        alignSelf:'center',
        marginTop:height(4)
    },
    currentDescriptionText:{
        fontSize:totalSize(1.45),
        lineHeight:30,
        textAlign:'center'
    },
    editDocumentButton: {
        paddingVertical: height(2.3),
        backgroundColor: Colors.backgroundWhite,
        shadowColor: Colors.backgroundWhite,
        marginTop: height(1.5),
        elevation:0
    },
    textStyle: {
        color: 'black',
        fontWeight:'bold'
    },
    containerStyle: {
        paddingVertical: height(2.3),
        marginVertical: height(1),
        marginBottom: height(3),
        backgroundColor: Colors.buttonSecondaryBlue,
        shadowColor: Colors.buttonSecondaryBlue,
    },
    DatePicker: {
        marginLeft: width(100),
        width: 0,
        height: 0
    },
    termPolicyContainer: {
        width: width(90),
        alignSelf: 'center',
        marginTop:height(1.5)
    },
    descriptionText: {
        fontSize: totalSize(1.25),
        color: Colors.textBlack,
    },
    termPolicyText: {
        fontSize: totalSize(1.20),
        color: Colors.buttonSecondaryBlue
    },
});
export default styles;
