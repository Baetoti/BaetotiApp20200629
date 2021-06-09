import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    settingComponentContainer:{
        marginTop:height(4)
    },
    backButtonContainerStyle:{
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(2.5),
        backgroundColor: Colors.backgroundWhite,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerStyle: {
        paddingVertical: height(2.3),
        marginVertical: height(3),
        marginBottom: height(3),
        backgroundColor: Colors.buttonBlue,
        shadowColor: Colors.buttonBlue,
    },

});
export default styles