import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    width: width(85),
    backgroundColor: Colors.backgroundWhite,
    borderRadius: totalSize(1),
    alignSelf: 'center'
  },
  headContainer: {
    paddingHorizontal: width(3),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(2)
  },
  headText: {
    fontSize: totalSize(1.8)
  },
  closeIcon: {
    width: totalSize(2.5),
    height: totalSize(2.5)
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: Colors.gray,
    width: width(85),
    marginVertical: height(1.5)
  },
  flatListContainer: {
    paddingVertical: height(2),
    paddingHorizontal: width(5)
  },
  dayContainer: {
    flexDirection: 'row',
    marginBottom: height(1),
    alignItems: 'center'
  },
  dayText: {
    fontSize: totalSize(1.8),
    marginLeft: width(2)
  }
});
export default styles;
