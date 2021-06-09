import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors'
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBackground,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  back: { padding: width(3.5), borderRadius: width(4.5), backgroundColor: Colors.darkOverview },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginTop: height(1), alignItems: 'center' },
  backImg: { resizeMode: 'contain', width: width(4.5), height: width(4.5) },
  topContainer: { height: height(55), width: width(100), paddingHorizontal: width(5), backgroundColor: Colors.calculator },
  addBal: { color: Colors.buttonBlue, marginTop: height(4), fontSize: width(4.2) },
  amountCont: {
    paddingVertical: height(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numberCont: { width: width(60), alignSelf: 'center' },
  number: {
    fontSize: width(7),
    paddingVertical: height(2),
    width: width(8),
    fontWeight: 'bold',
    color: Colors.textBlack
  },
  backspaceImg: { width: width(8), height: height(8), resizeMode: 'contain' },
  card: {
    alignSelf: 'flex-end',
    height: width(22),
    marginTop: -height(6.5),
    width: width(35),
    borderTopLeftRadius: width(20),
    borderBottomLeftRadius: width(20),
    backgroundColor: Colors.backgroundWhite,
    justifyContent: 'center',
  },
  cardCont: {
    height: height(8),
    width: width(100),
    backgroundColor: '#F9ECDC',
    borderTopLeftRadius: width(8),
    borderTopRightRadius: width(8),
    marginTop: -height(5),
  },
  addAmount: { color: Colors.backgroundWhite, fontSize: width(5) },
  addAmountCont: {
    // paddingVertical: height(1),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width(5),
    borderRadius: width(7),
    backgroundColor: Colors.darkOverview,
  },
  line: {
    width: width(90),
    height: 1,
    backgroundColor: Colors.darkOverview,
    marginBottom: height(4),
  },
  dollar: { color: '#8392A5', fontSize: width(10), opacity: 0.3 },
  textInput: {
    width: width(65),
    color: Colors.backgroundWhite,
    height: height(8),
    fontSize: width(8),
  },
  heading: { fontSize: width(5), color: Colors.backgroundWhite },
  cardImg: {
    width: width(18),
    height: width(18),
    marginLeft: width(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purplePrimary,
    borderRadius: height(5.5)
  },
  rightImg: {
    width: width(6),
    height: height(4),
    resizeMode: 'contain',
    tintColor: Colors.backgroundWhite
  },
  balText: {
    color: '#8392A5', fontSize: width(5), opacity: 0.3
  },
  amountText: {
    color: Colors.backgroundWhite, fontSize: width(5)
  }
});
export default styles;
