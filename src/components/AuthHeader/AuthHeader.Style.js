import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { height, width, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: height(4),
        width: width(90),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    logoImage: {
        height: totalSize(7),
        width: totalSize(7),
        resizeMode: 'contain'
    },
    dropDownContainer: {
        flexDirection:'row',
        width: width(18),
        height: height(5),
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(1),
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dropDown:{
        height: height(8.5),
        width:width(18)
      },
      dropDownItemContainer:{
        paddingVertical: height(1),
        paddingHorizontal: width(3)
      },
      dropDownItemText:{
        fontSize: totalSize(1.6),
        color: Colors.textBlack
      },
      container: {
        width: width(18),
        justifyContent: "space-between",
        backgroundColor: Colors.backgroundWhite,
        borderRadius: width(1),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width(3),
        paddingVertical: height(0.8)
      },
    arrowdownImage:{
        width:totalSize(1.5),
        width:totalSize(1.5)
    }
});
export default styles;
