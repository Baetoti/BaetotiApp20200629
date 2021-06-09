import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F7'
  },
  loginTextContainer: {
    // marginTop: height(20),
    width: width(90),
    alignSelf: 'center'
  },
  logoImage: {
    marginTop: height(10),
    height: totalSize(15),
    width: totalSize(15),
    resizeMode: 'contain',
    alignSelf:'center'
},
  loginText: {
    marginTop: height(8),
    color: Colors.textBlack,
    fontSize: width(5.3),
    fontWeight: 'bold',
    textAlign:'center',
    alignSelf:'center'
  },
  heading: {
    marginTop: height(1.5),
    color: Colors.grayDarker,
    fontSize: width(4.1),
    fontWeight: 'bold',
    textAlign:'center',
    alignSelf:'center'
  },
  textInputContainer: {
    marginTop: height(2)
  },
  forgotButton: {
    marginTop: height(4),
    alignSelf: 'center'
  },
  forgotText: {
    color: Colors.textBlack,
    fontSize:width(3.5)
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
  orText: {
    paddingHorizontal: width(1),
    color: Colors.textBlack,
    fontSize:width(3.5)
  },
  LinearGradient: {
    height: 1,
    alignSelf: 'center',
    borderRadius: 17,
    width: width(10),
    justifyContent: 'center',
  },
  socialIconButtonContainer: {
    width: width(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: height(3)
  },
  socialIconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    width: width(43),
    alignSelf: 'center',
    height: height(6),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 2,
  },
  facebookImage: {
    width: totalSize(10),
    height: totalSize(10)
  },
  googleImage: {
    width: totalSize(8),
    height: totalSize(8)
  },
  donotAccountText:{
    alignSelf:'center',
    marginTop:height(3),
    color:Colors.grayDarker
  },
  createAccountButton: {
    alignSelf: 'center',
    marginTop: height(1)
  },
  createAccountText: {
    color: Colors.buttonBlue
  },
  termPolicyContainer: {
    width: width(90),
    alignSelf: 'center',
    marginTop:height(7)
},
descriptionText: {
    fontSize: totalSize(1.25),
    color: Colors.textBlack,
},
termPolicyText: {
    fontSize: totalSize(1.20),
    color: Colors.buttonBlue
},
textFieldContainer: {
  width: width(90),
  alignSelf: 'center',
  backgroundColor: '#ffffff',
  height: height(9),
  marginTop: height(3.5),
  borderRadius: width(2.98),
  alignItems: 'center',
  justifyContent: 'center',
},
textFieldInnerContainer: {
  width: width(80),
  alignSelf: 'center',
  backgroundColor: '#ffffff',
  height: height(8),
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
},
textFieldImage: {
  height: totalSize(2.25),
  width: totalSize(2.25),
  resizeMode: 'contain'
},
textInput: {
  width: width(72),
  height: height(7),
  paddingVertical: 0,
  fontSize:totalSize(2),
},
});
export default styles;
