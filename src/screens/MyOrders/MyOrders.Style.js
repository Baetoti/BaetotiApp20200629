import { StyleSheet, Platform } from 'react-native';
import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  HeaderContainer: {
    backgroundColor: Colors.backgroundWhite,
    height: Platform.OS == 'ios' ? height(16) : height(20),
    width: width(100),
    alignItems: 'center',
    borderBottomLeftRadius: width(5),
    borderBottomRightRadius: width(5),
    borderWidth:1,
  },
  renderTabFooter: {
    width: totalSize(0.5),
    height: totalSize(0.5),
    borderRadius: totalSize(0.25),
    backgroundColor: Colors.buttonBlue,
    marginTop: height(1.5)
  },
  containerStyle: {
    marginTop: Platform.OS == 'ios' ? 0 : height(3),
    
  },
  tabContainer: {
    marginTop: height(2)
  },
  tabtextStyle: {
    fontSize: width(4),
    paddingHorizontal: width(2),
    
  },
  tabInnerContainer: {
    alignItems: 'center'
  },
  selectedTab: {
    color: Colors.textBlack,
  },
  unSelectedTab: {
    color: Colors.gray,
  },
  searchContainer: {
    width: width(90),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(8),
    marginTop: height(1.5),
    borderRadius: width(2.98),
    alignItems: 'center',
    justifyContent: 'center',
},
searchInnerContainer: {
    width: width(80),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: height(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
},
searchImage: {
    height: totalSize(2.0),
    width: totalSize(2.0),
    resizeMode: 'contain'
},
searchText: {
    width: width(72)
},
arrowDown: {
    height: 10,
    width: 10,
    resizeMode: 'contain'
},
  cancelOrderContainer: {
    marginTop: height(12),
    alignItems: 'center',
    justifyContent: 'center'
  },
  undrawemptyImage: {
    height: totalSize(25),
    width: totalSize(25)
  },
  noDataText: {
    color: Colors.textBlack,
    fontSize: totalSize(2),
    fontWeight: 'bold'
  },
  orderContainer: {
    width: width(90),
    borderRadius: width(4),
    backgroundColor: Colors.backgroundWhite,
    alignSelf: 'center',
    marginTop: height(1.75),
    paddingVertical: height(1.75),
    paddingHorizontal: width(3),
    
  },
  topContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemImage: {
    height: height(9),
    width: width(17),
    borderRadius: width(3)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  nameContainer: {
    marginHorizontal: width(3),
    height: height(9),
    justifyContent: 'space-between'
  },
  orderId: {
    fontSize: width(3.4),
    color: Colors.buttonBlue
  },
  dateTimeText: {
    fontSize: width(3.4),
    color: Colors.textBlack
  },
  storeName: {
    fontSize: width(4.3),
    // width: width(40),
    color: Colors.textBlack,
    fontWeight: 'bold'
  },
  priceHeading: {
    fontSize: width(3.25),
    color: Colors.grayDarker
  },
  priceText: {
    fontSize: width(4.5),
    color: Colors.textBlack,
  },
  idDateContainer: {
    flexDirection: 'row',
    width: width(61),
    justifyContent: 'space-between'
  },
  lineSeparator: {
    height: 0.37,
    backgroundColor: Colors.placeHolderTextColor,
    width: '100%',
    marginTop: height(2)
  },
  bottomRowContainer: {
    width: width(84),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  packageImage: {
    height: height(3),
    width: width(4),
    resizeMode: 'contain',
    marginTop: height(1.25)
  },
  arrowRight: {
    height: height(1.5),
    width: width(5),
    resizeMode: 'contain',
    marginTop: height(1.4)
  },
  itemsText: {
    fontSize: width(3.4),
    textAlign: 'center',
    marginTop: height(1.25),
    paddingLeft: width(2),
    //fontWeight: 'bold',
    color: Colors.textBlack
  },
  detailsText: {
    fontSize: width(3.4),
    textAlign: 'center',
    marginTop: height(1.25),
    paddingLeft: width(2),
    color: Colors.buttonBlue
  }
});
;
export default styles