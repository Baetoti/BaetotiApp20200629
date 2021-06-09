import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        width: width(90),
        borderRadius: width(2),
        paddingVertical:height(2),
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:width(5)
    },
    text:{
        color:Colors.textBlack,
        fontSize:width(4.5),
        marginTop:height(2)
    },
    containerStyle:{
        width:width(50),
        marginTop:height(4)
    }
});

export default styles