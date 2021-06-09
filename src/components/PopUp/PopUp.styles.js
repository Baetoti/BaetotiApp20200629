import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: {
    width: width(100),
    height: height(100),
    justifyContent: 'center',
    position: 'absolute',
    zIndex: -1,
    alignItems: 'center',
  },
  swcondaryContainer: {
    width: width(80),
    paddingVertical: height(3),
    maxHeight: height(50),
    borderRadius: 25,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  text: { maxWidth: '80%', alignSelf: 'center', fontSize: totalSize(1.7), paddingBottom: height(2) },
  button: { width: '60%', },
});
export default styles;
