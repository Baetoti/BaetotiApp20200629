import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F7'
  },
  loginTextContainer: {
    marginTop: height(6),
    width: width(90),
    alignSelf: 'center'
  },
  loginText: {
    color: Colors.textBlack,
    fontSize: totalSize(3.5),
    fontWeight: 'bold'
  },
  withDriverText: {
    color: Colors.gray,
    fontSize: totalSize(2),
    marginTop:height(1)
  },
  textInputContainer: {
    marginTop: height(3)
  },
  forgotButton: {
    marginTop: height(4),
    alignSelf: 'center'
  },
  forgotText: {
    color: Colors.textBlack,
    fontSize: width(3.5)
  },
  orContainer: {
    marginTop: height(4),
    width: width(90),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    width: width(10),
    borderBottomWidth: 1
  },
  editDocumentButton: {
    paddingVertical: height(2),
    backgroundColor: Colors.backgroundWhite,
    shadowColor: Colors.backgroundWhite,
    width: width(90),
    elevation: 0
  },
  textStyle: {
    color: Colors.textBlack,
    fontWeight: 'bold'
  },
  donotAccountText: {
    alignSelf: 'center',
    marginTop: height(3),
    color: Colors.grayDarker
  },
  createAccountButton: {
    alignSelf: 'center',
    marginTop: height(1)
  },
  createAccountText: {
    color: Colors.buttonBlue
  }
});
export default styles;
