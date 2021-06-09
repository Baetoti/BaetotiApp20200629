import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(70),
    marginTop: height(1),
    alignSelf:"center"
  },
  currentPositionText:{
    fontSize:totalSize(1.5),
    color:Colors.backgroundWhite,
    fontWeight:'bold'
  },
  notCurrentPositionText:{
    color:'transparent'
  }
});
export default styles;
