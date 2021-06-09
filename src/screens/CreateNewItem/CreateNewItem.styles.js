import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'space-between',
    width: width(100)
  },
  itemsContainer: {
    width: width(90),
    borderRadius: width(5),
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: height(10),
    marginTop: height(3),
  },
  emptyImage: {
    height: height(20),
    alignSelf: 'center'
  },
  emptyTextContainer: {
    alignItems: 'center',
    marginVertical: height(1.5)
  },
  noItemText: {
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  addItemButtonContainer: {
    backgroundColor: '#F1EDFC',
    paddingHorizontal: width(3),
    paddingVertical: height(2),
    borderRadius: width(15),
    marginTop: height(2),
    width: width(40),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addItemText: {
    fontWeight: 'bold',
    color: Colors.purplePrimary
  },
  termPolicyContainer: {
    width: width(90),
    alignSelf: 'center',
    marginTop: height(2)
  },
  descriptionText: {
    fontSize: totalSize(1.25),
    color: Colors.textBlack,
  },
  termPolicyText: {
    fontSize: totalSize(1.20),
    color: Colors.purplePrimary
  },
});
export default styles;
