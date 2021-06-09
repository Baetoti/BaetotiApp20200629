import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    marginTop: height(2),
    transform: [{rotateY: '180deg'}],
    
  },
});
export default styles;
