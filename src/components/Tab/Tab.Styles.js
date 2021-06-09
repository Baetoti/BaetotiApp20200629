import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(100),
    alignSelf: 'center',
  },
  tabContainerStyle: {
    marginHorizontal: width(4),
  },
  selectedHightedComponentContainer: {
    justifyContent: 'center',
    flexDirection: "row",
  }
});
export default styles;
