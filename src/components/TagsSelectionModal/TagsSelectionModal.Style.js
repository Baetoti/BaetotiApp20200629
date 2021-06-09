import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        width: width(90),
        backgroundColor:Colors.backgroundWhite,
        borderRadius: width(3),
        height: height(55),
        paddingHorizontal: width(3),
        alignSelf:'center'
    },
    closeContainer:{
        alignSelf: 'flex-end',
    },
    searchContainer: {
      width: width(80),
      alignSelf: 'center',
      // backgroundColor: '#ffffff',
      height: height(7),
      marginVertical: height(1.5),
      borderRadius: width(2.98),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderColor:Colors.inputBackgroundColor
  },
  searchInnerContainer: {
      width: width(70),
      alignSelf: 'center',
      // height: height(7),
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
  },
  searchImage: {
      height: totalSize(2.0),
      width: totalSize(2.0),
      resizeMode: 'contain'
  },
  searchText: {
      width: width(62)
  },
    headingText:{
        fontSize: width(4),
        fontWeight: 'bold'
    },
    row:{
        marginTop: height(1),
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-between',
        alignItems:'center',
    },

  tagFlatlistContainer: {
    flexWrap: 'wrap',
    flexDirection:'row',
    // width:width(80),
    justifyContent:'flex-start',
  },
  tagButtonContainer: {
    paddingHorizontal: width(2.5),
    marginRight: width(3),
    paddingVertical: height(1.5),
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: width(2),
    marginVertical:10
  },
  tagButtonImage: {
    height: totalSize(1.55),
    width: totalSize(1.55),
  },
  tagButtonText: {
    fontSize: totalSize(1.25),
    marginLeft: width(1.5),
  },

});

export default styles