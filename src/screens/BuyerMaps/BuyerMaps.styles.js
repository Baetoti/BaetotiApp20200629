import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: height(5),
    paddingVertical: height(2),
    backgroundColor: color.buttonBlue,
    borderColor: color.buttonBlue,
    shadowColor: color.buttonBlue,
    elevation: 15,
  },
  map: {
    height: "100%",
    width: "100%"
  },
});
export default styles;
