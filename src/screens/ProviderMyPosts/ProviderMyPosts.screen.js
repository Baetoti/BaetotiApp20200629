import React, { useState, useEffect } from 'react';
import {
  View, Image, Text, TouchableOpacity, FlatList, SafeAreaView, StatusBar,
  ScrollView, ImageBackground
} from 'react-native';
import styles from './ProviderMyPosts.styles';
import Header from '../../components/HeaderMyPost/HeaderMyPost.component';
// import Posts from '../../DummyData/Provider.MyPost';
import { AirbnbRating } from 'react-native-ratings';
import { totalSize, height, width } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Tab from '../../components/Tab/Tab.component';
import { useSelector } from 'react-redux';
import OverViewModal from '../../components/ModalComponent/Modal.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
export default function ProviderMyPosts({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.MyPosts_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR"; const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";

  useEffect(() => {
    console.log('abc')
    setSelectedTab(0)
  }, [navigation])

  /**
   * Reading Screen Data from redux
   */
  const Posts = useSelector(state => state.Store.items)
  /**
   * States used for tab 
   */
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubCat, setSelectedSubCat] = useState(0);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(Posts[0].subCats[0].items[0]);
  /**
   * Navigation Function
   */
  const navigate = (screenName) => {
    navigation.navigate(screenName)
  }
  /**
   * Component for individual sub category item
   */
  const _subCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[styles.subCategoriesButton, {
          backgroundColor:
            index == selectedSubCat
              ? Colors.purplePrimary
              : Colors.inputBackgroundColor,
        }]}
        onPress={() => setSelectedSubCat(index)}>
        <Text
          style={{
            color:
              index == selectedSubCat ? Colors.backgroundWhite : Colors.gray,
            fontSize: totalSize(1.35),
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  /**
   * Component for Individual Item
   */
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.post}>
        <ViewRowVise style={styles.topWhiteContainer}>
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item)
              setIsDetailModalVisible(true)
            }}>
            <ImageBackground
              source={{ uri: item.imageUri }}
              style={styles.itemImage}
              imageStyle={styles.itemImage}
              resizeMode="cover"
            >
              <ViewRowVise style={[styles.ratingContainer1,selectdLanguage=='ar'?{  alignSelf:'flex-end'}:{}]}>
                <AirbnbRating
                  count={1}
                  defaultRating={4}
                  showRating={false}
                  isDisabled={true}
                  selectedColor={Colors.starColors}
                  starContainerStyle={{ padding: 0, margin: 0 }}
                  size={totalSize(1.25)}
                />
                <Text style={styles.ratingText}>{item.ratings}</Text>
              </ViewRowVise>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.itemDetailContainer}>
            <ViewRowVise style={styles.itemInfoContainer}>
              <Text style={styles.itemIdHeading}>{languageJson.ItemID_Label}</Text>
              <Text style={styles.itemIdNumber}>{item.itemId}</Text>
            </ViewRowVise>
            <ViewRowVise style={styles.topRowContainer}>
              <View>
                <Text style={styles.itemNameText}>{item.itemName}</Text>
              </View>
              <TouchableOpacity
                style={{ padding: 5 }}
                onPress={() => navigation.navigate('EditPostEditItem', {
                  data: item,
                  index, selectedTab, selectedSubCat
                })}>
                <Image
                  source={require('../../assets/MyPostAssets/edit.png')}
                  style={styles.editIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </ViewRowVise>
            <View style={styles.ratingContainer}>
              <ViewRowVise style={styles.itemPriceContainer}>
                <ViewRowVise style={{ flexDirection: 'row' }}>
                  <Text style={styles.price}> {isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
                    <Text style={styles.currency}>{selectedCurrency == "USD" ? "$" : "SAR"}</Text>
                  </Text>
                  <View style={styles.perUnitContainer}>
                    <Text style={styles.perUnit}>{item.perUnit}</Text>
                  </View>
                </ViewRowVise>
              </ViewRowVise>
            </View>
            <View style={{ width: width(60) ,  paddingHorizontal: width(2),}}>
              <TextRowVise style={{ fontSize: totalSize(1.35), color: Colors.lightGray }}>
                {item.description}
              </TextRowVise>
            </View>
          </View>
        </ViewRowVise>
      </View>
    );
  };
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.safeAreaView} backgroundColor={Colors.backgroundColor} />
      {/* <SafeAreaView style={styles.container}> */}
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']} style={styles.container} >
          <Header
            // containerStyle={{ marginTop: height(3) }}
            title={languageJson.Listings_Heading}
            // profileImage="https://images.pexels.com/photos/2100035/pexels-photo-2100035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            onPressMostRightIcon={() => navigate('CreateNewAddItem')}
          />
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}
            contentContainerStyle={styles.scrollContainer}
          >
            <View style={styles.tagsContainer}>
              <View style={styles.tagsUpperContainer}>
                <Tab
                  selectedTextColor={Colors.textBlack}
                  textColor={Colors.gray}
                  selectedIndex={selectedTab}
                  flatListStyle={{marginHorizontal:width(4)}}
                  renderSelectedTabFooter={() => (
                    <View style={styles.renderTabFooter} />
                  )}
                  onChangeTab={(item, index) => setSelectedTab(index)}
                  options={useSelector(state => state.Store.items).map(item => item.title)}
                />
              </View>
              <View style={styles.lineSeparator} />
              <View
                style={styles.subCategoriesContainer}>
                <FlatList
                  data={useSelector(state => state.Store.items)[selectedTab].subCats.map(item => item.title)}
                  renderItem={_subCategories}
                  horizontal={true}
                  inverted={selectdLanguage=='ar'?true:false}
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => (
                    <View style={{ margin: totalSize(0.65) }} />
                  )}
                  contentContainerStyle={{
                    paddingTop: height(1.5),
                  }}
                />
              </View>
              <View style={styles.flatList}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={useSelector(state => state.Store.items)[selectedTab].subCats[selectedSubCat].items}
                  renderItem={renderItem}
                  contentContainerStyle={styles.postsContentContainer}
                />
              </View>
            </View>
          </ScrollView>
          <OverViewModal
            isVisible={isDetailModalVisible}
            selectedItem={selectedItem}
            onPress={() => {
              setIsDetailModalVisible(!isDetailModalVisible);
            }}
          />
        </LinearGradient>
      {/* </SafeAreaView> */}
    </React.Fragment>
  );
}
