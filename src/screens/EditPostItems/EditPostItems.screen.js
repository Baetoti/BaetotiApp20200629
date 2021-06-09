import React, { useState, Fragment } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView
} from 'react-native';
import styles from './EditPostItems.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import StepIndicator from '../../components/StepIndicatorCreateNew/StepIndicatorCreateNew.component';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import PostData from '../../DummyData/ProviderPost';
import { AirbnbRating } from 'react-native-ratings';
import Tab from '../../components/Tab/Tab.component';
import { width, height, totalSize } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import AreYouSureModal from '../../components/AreYouSureModal/AreYouSureModal.Component'
export default function EditPostItems({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Edit_Items_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";
  const [isVisible, setIsVisible] = useState(false)
  const [index, setIndex] = useState(null)
  /**
   * Reading Screen Data from redux
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
  const Posts = useSelector(state => state.Store.items)
  /**
   * States used for tab 
   */
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubCat, setSelectedSubCat] = useState(0);
  /**
   * Function for navigating to other screen
   */
  const navigate = screenName => {
    navigation.navigate(screenName);
  };
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
   * Method to remove item from  array
   */
  const removeItem = () => {
    // let newItems = items.filter((item, i) => i != index);
    // console.log(newItems)
    // setItems(items => (items = [...newItems]));
    setIsVisible(false)
  }
  /**
   * Component for Individual Item
   */
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.post}>
        <ViewRowVise style={styles.topWhiteContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditPostEditItem', {
              data: item,
              index, selectedTab, selectedSubCat
            })}>
            <Image
              source={{ uri: item.imageUri }}
              style={styles.itemImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={styles.itemDetailContainer}>
            <ViewRowVise style={styles.itemInfoContainer}>
              <Text style={styles.itemIdHeading}>{languageJson.ItemID_Label}</Text>
              <Text style={styles.itemIdNumber}>{item.itemId}</Text>
            </ViewRowVise>
            <ViewRowVise style={styles.topRowContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditPostEditItem', {
                  data: item,
                  index, selectedTab, selectedSubCat
                })}>
                <Text style={styles.itemNameText}>{item.itemName}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { 
                  setIndex(index)
                  setIsVisible(true) 
                }
                  //
                }>
                <Image
                  source={require('../../assets/MyPostAssets/close-circle.png')}
                  style={styles.editIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </ViewRowVise>
            <ViewRowVise style={styles.ratingContainer}>
              <AirbnbRating
                count={1}
                defaultRating={4}
                showRating={false}
                isDisabled={true}
                selectedColor={Colors.purplePrimary}
                starContainerStyle={{ padding: 0, margin: 0 }}
                size={totalSize(1.25)}
              />
              <Text style={styles.ratingText}>{item.ratings}</Text>
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
            </ViewRowVise>
            <View style={{ width: width(60), paddingHorizontal: width(2) }}>
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
    <Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']} style={styles.container}>
          <View style={styles.container}>
            <View>
              <HeaderAddNew
                backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
                title={languageJson.EditPost_Heading}
                hideRightIcon
                onPressBack={() => navigation.goBack()}
                containerStyle={{ alignSelf: 'center' }}
              />
              <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}
                contentContainerStyle={styles.scrollContainer}>
                <StepIndicator currentPosition={3} />
                <View style={styles.tagsContainer}>
                  <View style={styles.tagsUpperContainer}>
                    <Tab
                      selectedTextColor={Colors.textBlack}
                      textColor={Colors.gray}
                      flatListStyle={{ marginHorizontal: width(4) }}
                      selectedIndex={selectedTab}
                      renderSelectedTabFooter={() => (
                        <View style={styles.renderTabFooter} />
                      )}
                      onChangeTab={(item, index) => setSelectedTab(index)}
                      options={Posts.map(item => item.title)}
                    />
                  </View>
                  <View style={styles.lineSeparator} />
                  <View
                    style={styles.subCategoriesContainer}>
                    <FlatList
                      data={Posts[selectedTab].subCats.map(item => item.title)}
                      renderItem={_subCategories}
                      horizontal={true}
                      inverted={selectdLanguage == 'ar' ? true : false}
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
                      data={Posts[selectedTab].subCats[selectedSubCat].items}
                      renderItem={renderItem}
                      contentContainerStyle={styles.postsContentContainer}
                    />
                  </View>
                  <View style={styles.line} />
                  <TouchableOpacity
                    onPress={() => navigate("CreateNewAddItem")}>
                    <Text style={styles.addItemText}>+ {languageJson.AddItem_Button}</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <Button
              title={languageJson.Submit_Button}
              onPress={() => navigation.navigate('ProviderHome')}
            />
            <AreYouSureModal isVisible={isVisible}
              onPressNo={() => setIsVisible(false)}
              onPressYes={()=> removeItem(index)}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </Fragment >
  );
}
