import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        maxHeight: height(70),
        maxWidth: width(90),
    },
    imageBackground:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        alignSelf:'center',
    },
    image:{
        width: '100%',
        height: '80%',
        resizeMode: "contain",
    },
    closeContainer:{
        alignSelf: 'center',
        marginRight: width(3),
        marginBottom: height(3),
    }

});

export default styles