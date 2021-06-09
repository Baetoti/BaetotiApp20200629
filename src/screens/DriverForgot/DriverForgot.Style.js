import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9'
  },
  forgotPasswordTextContainer: {
    marginTop: height(6),
    width: width(90),
    alignSelf: 'center'
  },
  forgotText: {
    color:Colors.textBlack,
    fontSize: totalSize(3.5),
    fontWeight: 'bold'
  },
  passwordText: {
    color: Colors.textBlack,
    fontSize: totalSize(3.5),
    fontWeight: 'bold',
    marginTop: height(1)
  },
  textInputContainer: {
    marginTop: height(8),
    marginBottom: height(5)
  },
  backToLoginButton: {
    marginTop: height(22),
    alignSelf: 'center'
  },
  backToLoginText: {
    color: Colors.textBlack,
    fontSize: totalSize(1.7),
    fontWeight: 'bold'
  }
});
export default styles;
