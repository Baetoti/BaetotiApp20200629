import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, totalSize, height } from 'react-native-dimension';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1
    },
    flatListContainer:{
        flex:1,
        width:width(90),
        alignSelf:'center'
    },
    FlatListContainer: {
        width: '47.7%',
        paddingTop: height(4),
        paddingBottom: height(2),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backgroundWhite

    },
    logoImg: {
        width: '50%',
        height: '20%',
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    startImage: {
        width: 13,
        height: 13
    },
    startText: {
        fontSize: width(2.8),
        marginLeft: '3%',
    },
    dotImage: {
        width: 3.5,
        height: 3.5,
        marginLeft: '3%'
    },
    restaurant: {
        marginTop: '5%',
        color: color.black,
        marginTop: height(1.5),
    },
    categoryText: {
        color: color.black,
        fontSize: width(2.5),
        marginLeft: 5
    }
});
export default styles;
