import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        justifyContent: 'space-between'
    },
    notificationContainer: {
        width: width(90),
        backgroundColor: Colors.backgroundWhite,
        alignSelf: 'center',
        marginVertical: height(1),
        borderRadius: width(3),
        flexDirection: 'row',
        paddingHorizontal: width(5),
        paddingTop: height(2.25),
        paddingBottom: height(1.75)
    },
    profileImage: {
        width: height(8),
        height: height(8),
        borderRadius: height(3.5)
    },
    textDateContainer: {
        width: width(65),
        paddingLeft: width(3.8),
        paddingVertical: height(1),
        justifyContent: 'space-between'
    },
    nameText: {
        fontWeight: "bold",
        fontSize: width(3.7)
    },
    notificationText: {
        fontWeight: 'normal',
        fontSize: width(4)
    },
    dateText: {
        color: Colors.placeHolderTextColor,
        fontSize: width(3.25)
    },
    button: {
        backgroundColor: Colors.buttonBlue,
        marginTop: 0,
        height: height(7),
        shadowColor:Colors.buttonBlue
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: width(4.5)
    }

});
export default styles