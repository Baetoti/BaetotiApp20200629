import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        
        width: width(80),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical:height(1),
        paddingLeft:width(4),
        marginTop:height(2),
        borderRadius:5,
        backgroundColor:Colors.backgroundWhite,
        borderWidth:0.5,
        borderColor:Colors.placeHolderTextColor,
        shadowOpacity:0.01,
        
    },
    image:{
        width: width(6),
        height: width(6),
        alignSelf:"center"
    },
    textContainer_1:{
        flex:1,
    },
    textContainer_2:{
        flexDirection:'row',
        marginTop:height(1),
    },
    iconStyle_1:{
        transform: [{rotate: '152deg'}], 
        alignSelf:'flex-start', 
        marginLeft:width(5),
        marginRight:-width(16),
    },

    iconViewStyle_1:{ alignSelf:'center',
        marginTop:-height(2),
        // padding:5,
        borderRadius:7,
        backgroundColor:Colors.black,
        justifyContent:'center',

        borderRightColor:'transparent',
        borderLeftColor: 'transparent',
        borderLeftWidth:2,
        borderRightWidth:7,
        borderBottomWidth:30,
        
        width: width(10),
        height:height(0),
        
    },
    
    iconStyle_2:{
        alignSelf:'center',
        marginLeft:-width(8.5),
        marginTop:-height(2),
        borderWidth:1,
    },
    
    titleText:{
        // width:width(60),
        color:Colors.textBlack,
        fontSize:totalSize(1.75),
        marginTop:height(0.2),
        fontWeight:'700',
        
    },
    detailText:{
        // width:width(60),
        color:Colors.textBlack,
        fontSize:totalSize(1.75),
        marginTop:height(2),
        
    },
    line: {
        width: width(90),
        borderBottomWidth: 0.5,
        marginTop: height(1.5),
        borderColor: Colors.placeHolderTextColor,
        borderRadius: 1
      },
});
export default styles;
