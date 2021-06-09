import React, { useState, useEffect, Fragment } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch
} from 'react-native';
import styles from './EditPostEditItem.styles';

import Picker from '@gregfrench/react-native-wheel-picker'
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import caretDownImage from '../../assets/AddNewAssets/caret-down.png';
import { FlatList } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { height, totalSize, width } from 'react-native-dimension';
import Popup from '../../components/PopUp/PopUp.Component';
import ImagePicker from 'react-native-image-crop-picker';
import PostData from '../../DummyData/ProviderPost';
import Modal from 'react-native-modal';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../Redux/Actions/Store';
import postDataDummy from '../../DummyData/ProviderPost';
import TagsSelectionModal from '../../components/TagsSelectionModal/TagsSelectionModal.Component';
var PickerItem = Picker.Item;
export default function EditPostEditItem({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const dispatch = useDispatch();
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.Edit_ItemsDetails_V2_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * Reading Screen Data from redux
   */
  const selectedCurrency = useSelector(
    state => state.Configuration.selectedCurrency,
  );
  const currencyLabel = selectedCurrency == 'USD' ? '$' : 'SAR';

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  /**
   * Different states used to manage the selection of categories,
   * subcategories, quantity unit etc.
   */
  const categories = [
    {
      image: require('../../assets/buyerHome/camera.png'),
      title: 'Photography',
      backgroundColor: '#e6f7ff',
    },
    {
      image: require('../../assets/buyerHome/food.png'),
      title: 'Food & Drinks',
      backgroundColor: '#f1edfd',
    },
    {
      image: require('../../assets/buyerHome/graduation-hat.png'),
      title: 'Academic Services',
      backgroundColor: '#fff2ed',
    },
    {
      image: require('../../assets/buyerHome/brush-alt.png'),
      title: 'Designs and Printing',
      backgroundColor: '#fdeffa',
    },
    {
      image: require('../../assets/buyerHome/nature.png'),
      title: 'Beauty and Spa',
      backgroundColor: '#eafaf1',
    },
    {
      image: require('../../assets/buyerHome/constructor.png'),
      title: 'Electronics',
      backgroundColor: '#fff9e7',
    },
    {
      image: require('../../assets/buyerHome/coins.png'),
      title: 'Accessories',
      backgroundColor: '#e6f7ff',
    },
    {
      image: require('../../assets/buyerHome/car-sideview.png'),
      title: 'Cars',
      backgroundColor: '#f1edfd',
    },
    {
      image: require('../../assets/buyerHome/people.png'),
      title: 'Personal Trainers',
      backgroundColor: '#fff2ed',
    },
    {
      image: require('../../assets/buyerHome/ticket.png'),
      title: 'Entertainment',
      backgroundColor: '#fdf2fb',
    },
    {
      image: require('../../assets/buyerHome/screw.png'),
      title: 'Handicraft',
      backgroundColor: '#eafaf1',
    },
    {
      image: require('../../assets/buyerHome/maintenance.png'),
      title: 'Maintenance',
      backgroundColor: '#fff9e7',
    },
    {
      image: require('../../assets/buyerHome/more-blue.png'),
      title: 'Others',
      backgroundColor: '#e6f7ff',
    },
  ];
  const subCategories = [
    'Food',
    'Electronics',
    'Grocery',
    'Sports',
    'Furniture',
    'Fashion',
    'Crockery',
    'Home Appliances',
  ];
  const [selectedCategory, setSelectedCategory] = useState(
    PostData.selectedCategory,
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    PostData.selectedSubcategory,
  );
  const [tags, setTags] = useState([
    { label: 'Thaifood', key: 14 },
    { label: 'Spicy', key: 15 },
  ]);
  const [isAvailbeNow, setAvailableNow] = useState(false);
  const [quantityModal, setQuantityModal] = useState(false);
  const [quantity, setQuantity] = useState('1');
  const [tempQuantity, setTempQuantity] = useState('1');
  const [price, setPrice] = useState('20');
  const [tempPrice, setTempPrice] = useState('20');
  const [unit, setUnit] = useState('Kg');
  const [tempUnit, setTempUnit] = useState('Kg');
  const [unitOptions, setUnitOptions] = useState(['Kg', 'Lb']);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('Please Wait');
  const [detailsImages, setdetailsImages] = useState(PostData.detailsImages);
  const [itemName, setItemName] = useState('');
  const [itemDetails, setItemDetails] = useState('');
  const [itemIndex, setItemIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubCat1, setSelectedSubCategory1] = useState(0);
  const [itemDetailsError, setItemDetailsError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [unSelectedTags, setUnSelectedTags] = useState(postDataDummy.tags);
  const itemList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
  const [selectedItem ,setSelectedItem] = useState(2)
  /**
   * Function to set item name and other details on start of screen
   */
  useEffect(() => {
    setItemName(route.params.data.itemName);
    setItemDetails(route.params.data.description);
    setSelectedTab(route.params.selectedTab);
    setItemIndex(route.params.index);
    setSelectedSubCategory1(route.params.selectedSubCat);
    setPrice(
      Posts[route.params.selectedTab].subCats[
        route.params.selectedSubCat
      ].items[route.params.index].price.toString(),
    );
  }, [navigation]);
  /**
   * Reading Screen Data from redux
   */
  const Posts = useSelector(state => state.Store.items);
  /**
   * Function used to remove any Tag from the list
   */
  const removeTag = index => {
    let newTags = tags;
    newTags = tags.filter((item, i) => i != index);
    setTags(newTags);
  };
  const updateUnSelectedTags = () => {
    var newUnselectedTags = [];
    postDataDummy.tags.map(item => {
      let found = false;
      tags.map(datum => {
        if (datum.key == item.key) found = true;
      });
      if (!found) newUnselectedTags.push(item);
    });
    setUnSelectedTags(newUnselectedTags);
  };
  /**
   * Function to add a tag from tags array
   */
  const addTag = tag => {
    var newTags = [...tags];
    newTags.push(tag);
    // console.log(newTags)
    setTags(tags => (tags = [...newTags]));
  };
  /**
   * Function to update Item Data
   */
  const updateItem = price => {
    let data = [...Posts];
    data[selectedTab].subCats[selectedSubCat1].items[itemIndex].price = Number(
      price,
    );
    dispatch(setItems(data));
  };
  /**
   * Function to select image from gallery
   */
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      var newImages = detailsImages;
      newImages.push({
        key: detailsImages.length,
        imageUri: image.path,
      });
      setdetailsImages(detailsImages => (detailsImages = [...newImages]));
    });
  };
  /**
   * Update description text and also check for special characters
   */
  const updateItemDetail = val => {
    setItemDetails(val);
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
    if (format.test(val)) {
      setItemDetailsError(true);
    } else {
      setItemDetailsError(false);
    }
  };
  /**
   * Function used to remove any Tag from the list
   */
  const renderTag = ({ item, index }) => {
    return (
      <>
        <View style={[styles.addItemButtonContainer, { flexDirection: 'row' }]}>
          <Text style={styles.addItemText}>{item.label}</Text>
          <TouchableOpacity onPress={() => removeTag(index)}>
            <Image
              source={require('../../assets/AddNewAssets/multiply.png')}
              style={styles.closeTag}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        {index + 1 == tags.length && (
          <TouchableOpacity
            onPress={() => {
              updateUnSelectedTags();
              setShowTagsModal(true);
            }}
            style={styles.addItemButtonContainer}>
            <Text style={styles.addItemText}>
              {tags.length > 0 ? '+Add More' : '+Add Tag'}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };
  /**
   * Component for indivdual item
   */
  const renderDetailsImage = ({ item, index }) => (
    <Image
      source={{ uri: item.imageUri }}
      style={[styles.detailImage, { marginLeft: index == 0 ? 0 : width(3) }]}
    />
  );
  /**
   * deleting Item 
   */
  const deleteItem = () => {
    setValidateModal(false)
    setTimeout(() => {
      navigation.goBack()
    }, 600);
  }
  const onPickerSelect= (index)=> {
    setSelectedItem(index)
    setTempPrice(itemList[index])
	}
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      <SafeAreaView
        style={(styles.container, { backgroundColor: Colors.backgroundColor })}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
          style={{ flex: 1 }}>
          <View style={styles.container}>
            <HeaderAddNew
              backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
              title={languageJson.ItemsDetails_Heading}
              onPressBack={() => navigation.goBack()}
              containerStyle={{ marginTop: height(2) }}
              // onPressRight={() => navigation.goBack()}
              hideRightIcon
            />
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              extraScrollHeight={height(8)}>
              <View style={styles.descriptionContainer}>
                <View style={styles.titleContainer}>
                  <ViewRowVise style={styles.itemNameContainer}>
                    <Text style={styles.itemNameText}>
                      {languageJson.ItemName_Heading}
                    </Text>
                    {!requestStatus ? (
                      <TouchableOpacity
                        style={styles.requestToChangeContainer}
                        onPress={() => setRequestStatus(!requestStatus)}>
                        <Text style={styles.requestToChangeText}>
                          {languageJson.RequesttoChange_Label}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                        <ViewRowVise style={styles.itemDetailsBackground}>
                          <Image
                            source={require('../../assets/MyPostAssets/check.png')}
                            style={styles.checkIcon}
                            resizeMode={'contain'}
                          />
                          <Text style={styles.itemDetailsText}>
                            {languageJson.RequestSent_Label}
                          </Text>
                        </ViewRowVise>
                      )}
                  </ViewRowVise>
                  <TextInput
                    style={styles.titleInputContainer}
                    placeholder="Enter Name"
                    placeholderTextColor={Colors.placeHolderTextColor}
                    value={itemName}
                    onChangeText={val => setItemName(val)}
                  />
                </View>
                <View style={styles.lineSeparator} />
                <ViewRowVise style={styles.toggleButtonContainer}>
                  <Text style={styles.activateText}>{isEnabled ? languageJson.Activate : languageJson.Deactivate}</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: Colors.purplePrimary }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </ViewRowVise>
                <TextRowVise style={styles.inputTitle}>
                  {languageJson.Categories_Heading}
                </TextRowVise>
                <ModalDropdown
                  options={categories}
                  dropdownStyle={styles.categoriesDropDown}
                  renderRow={(option, index, isSelected) => (
                    <View style={styles.categoriesDropDownItemContainer}>
                      <View
                        style={{
                          padding: width(1.75),
                          borderRadius: 5,
                          backgroundColor: option.backgroundColor,
                        }}>
                        <Image
                          source={option.image}
                          style={{
                            width: totalSize(2),
                            height: totalSize(2),
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                      <Text style={styles.categoriesDropDownItemText}>
                        {option.title}
                      </Text>
                    </View>
                  )}
                  onSelect={(index, value) => setSelectedCategory(value)}>
                  <View style={styles.CategoriesContainer}>
                    <Text style={styles.CategoriesText}>
                      {selectedCategory}
                    </Text>
                    <Image
                      source={caretDownImage}
                      resizeMode="contain"
                      style={styles.caretDownImage}
                    />
                  </View>
                </ModalDropdown>
                <TextRowVise style={styles.inputTitle}>
                  {languageJson.Subcategory_Heading}
                </TextRowVise>
                <ModalDropdown
                  disabled={selectedCategory == 'Choose Category'}
                  options={subCategories}
                  dropdownStyle={styles.categoriesDropDown}
                  renderRow={(option, index, isSelected) => (
                    <View style={styles.categoriesDropDownItemContainer}>
                      <Text style={styles.categoriesDropDownItemText}>
                        {option}
                      </Text>
                    </View>
                  )}
                  onSelect={(index, value) => setSelectedSubCategory(value)}>
                  <View style={styles.CategoriesContainer}>
                    <Text
                      style={
                        ([styles.CategoriesText],
                        {
                          color:
                            selectedCategory == 'Choose Category'
                              ? Colors.grayDarker
                              : Colors.textBlack,
                        })
                      }>
                      {selectedSubCategory}
                    </Text>
                    <Image
                      source={caretDownImage}
                      resizeMode="contain"
                      style={styles.caretDownImage}
                    />
                  </View>
                </ModalDropdown>
                <View style={styles.itemDetailsContainer}>
                  <Text style={styles.inputTitle}>
                    {languageJson.ItemDetails_Heading}
                  </Text>
                </View>
                <View style={styles.descriptionInputContainer}>
                  <TextInput
                    textAlignVertical="top"
                    placeholder={'Enter Description'}
                    value={itemDetails}
                    style={styles.descriptionInput}
                    multiline={true}
                    onChangeText={updateItemDetail}
                    placeholderTextColor={Colors.placeHolderTextColor}
                  />
                  <Text
                    style={{
                      color: Colors.grayDarker,
                      textAlign: 'right',
                      fontSize: totalSize(1.5),
                    }}>
                    {PostData.itemDetails.length}/1500
                  </Text>
                </View>
                {itemDetailsError && (
                  <Text style={styles.errorText}>
                    {languageJson.SpecialCharacterError}
                  </Text>
                )}
                <TextRowVise style={styles.inputTitle}>
                  {languageJson.Tags_Heading}
                </TextRowVise>
                <View style={styles.flatListContainer}>
                  <FlatList
                    renderItem={renderTag}
                    data={tags}
                    horizontal={true}
                    ListEmptyComponent={() => (
                      <TouchableOpacity
                        onPress={() => {
                          updateUnSelectedTags();
                          setShowTagsModal(true);
                        }}
                        style={styles.addItemButtonContainer}>
                        <Text style={styles.addItemText}>{'+Add Tag'}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
                <ViewRowVise style={styles.tagsUpperContainer}>
                  <Text style={styles.inputTitle}>
                    {languageJson.Photos_Heading}
                  </Text>
                  <Text style={styles.optionalText}>
                    {PostData.detailsImages.length}/3{' '}
                    {languageJson.Images_Label}
                  </Text>
                </ViewRowVise>
                <TouchableOpacityRowVise
                  disabled={detailsImages.length == 3}
                  onPress={uploadImage}
                  style={styles.inputLocationContainer}>
                  <View style={styles.locationIconContainer}>
                    <Image
                      source={require('../../assets/AddNewAssets/cloud-upload.png')}
                      style={styles.locationIcon}
                      resizeMode={'contain'}
                    />
                  </View>
                  <Text style={styles.uploadVideoText}>
                    {languageJson.UploadPhotos_Label}
                  </Text>
                </TouchableOpacityRowVise>
                <View style={styles.detailsImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={detailsImages}
                    renderItem={renderDetailsImage}
                  />
                </View>
                <View style={styles.availableByOrderContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setPopupText('Items should be availble by order.');
                      setAvailableNow(false);
                      setQuantityModal(true);
                      setTempQuantity(quantity);
                      setTempUnit(unit);
                      setTempPrice(price);
                    }}
                    style={[
                      styles.availableByOrderButtonContainer,
                      !isAvailbeNow && {
                        elevation: 2,
                        shadowOpacity: 0.15,
                        shadowOffset: { width: 0.5, height: 0.5 },
                        shadowColor: Colors.black,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.availableByOrderButtonText,
                        { color: !isAvailbeNow ? Colors.textBlack : Colors.gray },
                      ]}>
                      {languageJson.ByOrder_Label}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setPopupText('Items should be availble by order.');
                      setAvailableNow(true);
                      setQuantityModal(true);
                      setTempQuantity(quantity);
                      setTempUnit(unit);
                      setTempPrice(price);
                    }}
                    style={[
                      styles.availableByOrderButtonContainer,
                      isAvailbeNow && {
                        elevation: 2,
                        shadowOpacity: 0.15,
                        shadowOffset: { width: 0.5, height: 0.5 },
                        shadowColor: Colors.black,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.availableByOrderButtonText,
                        { color: isAvailbeNow ? Colors.textBlack : Colors.gray },
                      ]}>
                      {languageJson.Availablenow_Label}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    styles.availableByOrderContainer,
                    { justifyContent: isAvailbeNow ? 'flex-end' : 'flex-start' },
                  ]}>
                  {isAvailbeNow ? (
                    <View style={styles.qtyContainer}>
                      <ViewRowVise style={styles.row}>
                        <Text style={styles.qtyPriceTitle}>
                          {languageJson.Qty_Label}
                        </Text>
                        <Text style={styles.qtyPriceText}>{quantity}</Text>
                      </ViewRowVise>
                      <View style={styles.qtyRowContainer}>
                        <Text style={styles.qtyPriceText}>
                          {Number(price).toFixed(1)}
                        </Text>
                        <Text style={styles.currencyText}>
                          {' '}
                          {currencyLabel} /{' '}
                        </Text>
                        <Text style={styles.currencyText}>{unit}</Text>
                      </View>
                    </View>
                  ) : (
                      <View style={styles.qtyContainer}>
                        <TextRowVise style={styles.qtyPriceTitle}>
                          {languageJson.Price_Label}
                        </TextRowVise>
                        <View style={styles.qtyRowContainer}>
                          <Text numberOfLines={1} style={styles.qtyPriceText}>
                            {Number(price).toFixed(1)}
                          </Text>
                          <Text style={styles.currencyText}>
                            {' '}
                            {currencyLabel} /{' '}
                          </Text>
                          <Text style={styles.currencyText}>{unit}</Text>
                        </View>
                      </View>
                    )}
                </View>
              </View>
              <Button
                title={languageJson.Save_Button}
                onPress={() => {
                  updateItem(tempPrice);
                  navigation.goBack();
                }}
              />
            </KeyboardAwareScrollView>
          </View>
          <Modal
            style={styles.modal}
            isVisible={quantityModal}
            backdropTransitionInTiming={0}
            backdropTransitionOutTiming={0}
            onBackdropPress={() => {
              setQuantityModal(false);
            }}
            onBackButtonPress={() => {
              setQuantityModal(false);
            }}>
            <View style={styles.modalContainer}>
              <View style={styles.swcondaryContainer}>
                {isAvailbeNow ? (
                  <>
                    <TextRowVise style={styles.modalHeading}>
                      {languageJson.EnterQuantity}
                    </TextRowVise>
                    <TextInput
                      style={styles.textInputModalQuantity}
                      placeholder="0"
                      placeholderTextColor={Colors.textBlack}
                      keyboardType="number-pad"
                      onChangeText={val => {
                        if (!Number.isInteger(Number(val))) {
                          setQuantityError(true);
                          setTempQuantity(val);
                        } else {
                          setQuantityError(false);
                          setTempQuantity(val);
                        }
                      }}
                      value={tempQuantity}
                    />
                    {quantityError && (
                      <Text style={styles.errorTextModal}>
                        Quantity should be an integer.
                      </Text>
                    )}
                    {/* <View style={styles.priceDetailContainer}>
                      <TextInput
                        style={styles.textInputModal}
                        placeholder="0"
                        placeholderTextColor={Colors.textBlack}
                        keyboardType="number-pad"
                        onChangeText={val => {
                          if (isNaN(Number(val))) {
                            setPriceError(true);
                            setTempPrice(val);
                          } else {
                            setPriceError(false);
                            setTempPrice(val);
                          }
                        }}
                        value={tempPrice}
                      />
                      <Text>{currencyLabel} / </Text>
                      <ModalDropdown
                        options={unitOptions}
                        dropdownStyle={styles.quantityUnitDropDown}
                        renderRow={(option, index, isSelected) => (
                          <View
                            style={styles.quantityUnitDropDownItemContainer}>
                            <Text style={styles.quantityUnitDropDownItemText}>
                              {option}
                            </Text>
                          </View>
                        )}
                        onSelect={(index, value) => setTempUnit(value)}>
                        <View style={styles.modalDropDownContainer}>
                          <Text style={styles.textModalDropDown}>
                            {tempUnit}
                          </Text>
                          <Image
                            source={caretDownImage}
                            resizeMode="contain"
                            style={styles.caretDownImage}
                          />
                        </View>
                      </ModalDropdown>
                    </View> */}
                    {priceError && (
                      <Text style={styles.errorTextModal}>
                        Price should be a number.
                      </Text>
                    )}
                    <Button
                      onPress={() => {
                        setQuantity(tempQuantity);
                        setUnit(tempUnit);
                        setPrice(tempPrice);
                        setQuantityModal(false);
                      }}
                      disabled={priceError || quantityError}
                      title={languageJson.Submit_Button}
                      textStyle={{ fontSize: width(4) }}
                      containerStyle={styles.button}
                    />
                  </>
                ) : (
                    <>
                      <TextRowVise style={styles.modalHeading}>
                        {languageJson.EnterPrice}
                      </TextRowVise>
                      <Picker style={{ width: width(60), height: height(30) }}
                        selectedValue={selectedItem}
                        itemStyle={{ color: "black", fontSize: 26 }}
                        onValueChange={(index) => onPickerSelect(index)}>
                        {itemList.map((value, i) => (
                          <PickerItem label={value.toString()} value={i} key={ value.toString()+currencyLabel} />
                        ))}
                      </Picker>
                      <View style={styles.priceDetailContainer}>
                      
                        <ModalDropdown
                          options={unitOptions}
                          dropdownStyle={styles.quantityUnitDropDown}
                          renderRow={(option, index, isSelected) => (
                            <View
                              style={styles.quantityUnitDropDownItemContainer}>
                              <Text style={styles.quantityUnitDropDownItemText}>
                                {option}
                              </Text>
                            </View>
                          )}
                          onSelect={(index, value) => setTempUnit(value)}>
                          <View style={styles.modalDropDownContainer}>
                            <Text style={styles.textModalDropDown}>
                              {tempUnit}
                            </Text>
                            <Image
                              source={caretDownImage}
                              resizeMode="contain"
                              style={styles.caretDownImage}
                            />
                          </View>
                        </ModalDropdown>
                      </View>
                      {priceError && (
                        <Text style={styles.errorTextModal}>
                          Price should be a number.
                        </Text>
                      )}
                      {/* <Text style={styles.modalHeading}>Enter Currency</Text>
                                    <ModalDropdown
                                        options={currencyOptions}
                                        dropdownStyle={styles.quantityUnitDropDown}
                                        renderRow={(option, index, isSelected) => (
                                            <View style={styles.quantityUnitDropDownItemContainer}>
                                                <Text style={styles.quantityUnitDropDownItemText}>
                                                    {option}
                                                </Text>
                                            </View>
                                        )}
                                        onSelect={(index, value) => setTempCurrency(value)}>
                                        <View style={styles.modalDropDownContainer}>
                                            <Text style={styles.textModalDropDown}>{tempCurrency}</Text>
                                            <Image source={caretDownImage}
                                                resizeMode='contain'
                                                style={styles.caretDownImage} />
                                        </View>
                                    </ModalDropdown> */}
                      <Button
                        onPress={() => {
                          setPrice(tempPrice);
                          setUnit(tempUnit);
                          setQuantity(tempQuantity);
                          setQuantityModal(false);
                        }}
                        disabled={priceError}
                        title={languageJson.Submit_Button}
                        textStyle={{ fontSize: width(4) }}
                        containerStyle={styles.button}
                      />
                    </>
                  )}
              </View>
            </View>
          </Modal>
          <Popup
            isVisible={popupVisible}
            text={popupText}
            onRequsetClose={() => setPopupVisible(false)}
          />
        </LinearGradient>
        <TagsSelectionModal
          isVisible={showTagsModal}
          tags={unSelectedTags}
          onSelect={addTag}
          onClose={() => {
            setShowTagsModal(false);
          }}
        />
      </SafeAreaView>
    </Fragment>
  );
}
