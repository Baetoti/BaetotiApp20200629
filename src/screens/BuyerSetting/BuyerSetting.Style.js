import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    settingComponentContainer: {
        marginTop: height(4)
    },
    dropDown: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginLeft: width(75),
        height: height(12),
        width: width(15)
    },
    dropDownItemText: {
        height: height(6),
        borderWidth: 0
    }

});
export default styles