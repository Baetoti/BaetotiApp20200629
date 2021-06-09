import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F7'
  },
  uploadDocumentTextContainer: {
    width: width(90),
    alignSelf: 'center',
    marginTop: height(3)
  },
  uploadDocumentLabelText: {
    fontSize: totalSize(2.25),
    fontWeight: 'bold'
  },
  beforeDescriptionText: {
    color: Colors.halfBlackOpacitive,
    marginTop: height(1),
    lineHeight: 20,
    fontSize: width(3)
  },
  limitationsContainer: {
    marginTop: height(2),
    backgroundColor: Colors.backgroundWhite,
    width: width(90),
    alignSelf: 'center',
    borderRadius: width(2),
    paddingVertical: height(1.5)
  },
  limitationsDescriptionContainer: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height(1)
  },
  blueDot: {
    height: totalSize(1),
    marginTop: height(0.5),
    width: totalSize(1),
    backgroundColor: Colors.purplePrimary,
    borderRadius: totalSize(0.7)
  },
  limitationsDescriptionText: {
    fontSize: width(2.8),
    marginHorizontal: width(3),
    lineHeight: 20
  },
  grayDot: {
    height: totalSize(0.95),
    width: totalSize(0.95),
    backgroundColor: Colors.halfBlackOpacitive,
    borderRadius: totalSize(0.5),
    marginTop: height(0.7),
    marginLeft: width(4),
  },
  lineSeparator: {
    borderBottomWidth: 0.325,
    borderColor: Colors.lightGray,
    width: width(90),
    marginVertical: height(1.5)
  },
  thankyouText: {
    fontSize: totalSize(2.25),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height(1)
  },
  hitText: {
    color: Colors.blackColorOpacitive,
    marginTop: height(1),
    fontSize: width(3.3),
    alignSelf: 'center'
  },
  containerStyle: {
    paddingVertical: height(2.3),
    marginVertical: height(3),
    marginBottom: height(3),
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
});
export default styles;
