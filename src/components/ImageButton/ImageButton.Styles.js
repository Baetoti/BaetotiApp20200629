import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.purplePrimary,
    width: width(90),
    alignSelf: 'center',
    paddingVertical: height(1.7),
    elevation: 7,
    borderColor: Colors.purplePrimary,
    marginVertical: height(1.5),
    shadowOffset: { width: width(2), height: height(0.7) },
    shadowColor: Colors.purplePrimary,
    shadowOpacity: 0.25,
    shadowRadius: width(2),
    flexDirection: 'row'
  },
  text: {
    color: "white",
    fontSize: width(4),
  }
});
export default styles;
