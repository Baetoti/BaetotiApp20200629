import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import styles from './CreateNewAddItem.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import Colors from '../../utills/Colors'
import Button from '../../components/Button/Button.component';
import caretDownImage from '../../assets/AddNewAssets/caret-down.png'
import { FlatList } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { height, width } from 'react-native-dimension';
import Popup from '../../components/PopUp/PopUp.Component';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
export default function CreateNewAddItem({ navigation }) {

    /**
     * Different states used to manage the selection of categories,
     * subcategories, quantity unit etc.
     */
    const categories = ['Food', 'Electronics', 'Grocery', 'Sports', 'Furniture', 'Fashion', 'Crockery', 'Home Appliances']
    const subCategories = ['Food', 'Electronics', 'Grocery', 'Sports', 'Furniture', 'Fashion', 'Crockery', 'Home Appliances']
    const quantityUnits = ['Kg', 'Lb']
    const [selectedCategory, setSelectedCategory] = useState('Choose Category')
    const [selectedSubCategory, setSelectedSubCategory] = useState('Choose Subcategory')
    const [selectedQuantityUnit, setSelectedQuantityUnit] = useState('Kg')
    const [tags, setTags] = useState([{ text: 'Thaifood', key: 0 }, { text: 'Spicy', key: 1 }, { text: '+Add Tag', key: 2 }])
    const [isAvailbeNow, setAvailableNow] = useState(true)
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupText, setPopupText] = useState("Please Wait");
    const [coverImages, setCoverImages] = useState([]);

    /**
     * Function used to remove any Tag from the list
     */
    const removeTag = (index) => {
        let newTags = tags;
        newTags = tags.filter((item, i) => i != index);
        setTags(newTags)
    }

    /**
     * Navigation Function
     */
    const navigate = (screenName) => {
        navigation.navigate(screenName)
    }

    /**
     * Individual Tag View
     */
    const renderTag = ({ item, index }) => {
        if (index + 1 == tags.length) {
            return (<TouchableOpacity style={styles.addItemButtonContainer}>
                <Text style={styles.addItemText}>{tags.length > 0 ? "+Add More" : "+Add Tag"}</Text>
            </TouchableOpacity>)
        }
        else {
            return (<View style={[styles.addItemButtonContainer, { flexDirection: 'row' }]}>
                <Text style={styles.addItemText}>{item.text}</Text>
                <TouchableOpacity
                    onPress={() => removeTag(index)}>
                    <Image
                        source={require('../../assets/AddNewAssets/multiply.png')}
                        style={styles.closeTag}
                        resizeMode={"contain"} />
                </TouchableOpacity>
            </View>)
        }
    };

    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            var newCoverImages = coverImages;
            newCoverImages.push({
                key: coverImages.length,
                imageUri:
                    image.path,
            });
            setCoverImages(coverImages => (coverImages = [...newCoverImages]));
        });
    }


    const renderDetailsImage = ({ item, index }) => (
        <Image
            source={{ uri: item.imageUri }}
            style={[styles.detailImage, { marginLeft: index == 0 ? 0 : width(3) }]}
        />
    );

    return (
        <React.Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView backgroundColor={Colors.backgroundColor} />
            <SafeAreaView style={styles.container}>
                <LinearGradient 
                 colors={[Colors.backgroundColor, '#F9ECDC','#F9ECDC','#FAF8F7']} style={styles.container}>
                    <HeaderAddNew
                        backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
                        title={"Add Item"} onPressBack={() => navigation.goBack()} containerStyle={{ marginTop: height(2) }}
                        onPressRight={() => navigation.goBack()} />
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        extraScrollHeight={height(8)}>
                        <View style={styles.descriptionContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.itemNameText}>Item Name</Text>
                                <TextInput
                                    style={styles.titleInputContainer}
                                    placeholder="Enter Name"
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    returnKeyType='done'
                                />
                            </View>
                            <Text style={styles.inputTitle}>Categories</Text>
                            <ModalDropdown
                                options={categories}
                                dropdownStyle={styles.categoriesDropDown}
                                renderRow={(option, index, isSelected) => (
                                    <View style={styles.categoriesDropDownItemContainer}>
                                        <Text style={styles.categoriesDropDownItemText}>{option}</Text>
                                    </View>
                                )}
                                onSelect={(index, value) => setSelectedCategory(value)}
                            >
                                <View style={styles.CategoriesContainer}>
                                    <Text style={styles.CategoriesText}>{selectedCategory}</Text>
                                    <Image source={caretDownImage}
                                        resizeMode='contain'
                                        style={styles.caretDownImage} />
                                </View>
                            </ModalDropdown>
                            <Text style={styles.inputTitle}>Subcategories</Text>
                            <ModalDropdown
                                disabled={selectedCategory == 'Choose Category'}
                                options={subCategories}
                                dropdownStyle={styles.categoriesDropDown}
                                renderRow={(option, index, isSelected) => (
                                    <View style={styles.categoriesDropDownItemContainer}>
                                        <Text style={styles.categoriesDropDownItemText}>{option}</Text>
                                    </View>
                                )}
                                onSelect={(index, value) => setSelectedSubCategory(value)}
                            >
                                <View style={styles.CategoriesContainer}>
                                    <Text style={[styles.CategoriesText], { color: selectedCategory == 'Choose Category' ? Colors.grayDarker : Colors.textBlack }}>{selectedSubCategory}</Text>
                                    <Image source={caretDownImage}
                                        resizeMode='contain'
                                        style={styles.caretDownImage} />
                                </View>
                            </ModalDropdown>
                            <Text style={styles.inputTitle}>Item Details</Text>
                            <View style={styles.descriptionInputContainer}>
                                <TextInput
                                    textAlignVertical='top'
                                    placeholder={"Enter Description"}
                                    style={styles.descriptionInput}
                                    multiline={true}
                                    placeholderTextColor={Colors.placeHolderTextColor}

                                />
                            </View>
                            <Text style={styles.inputTitle}>Tags</Text>
                            <View style={styles.flatListContainer}>
                                <FlatList
                                    renderItem={renderTag}
                                    data={tags}
                                    horizontal={true} />
                            </View>
                            <View style={styles.tagsUpperContainer}>
                                <Text style={styles.inputTitle}>Photos</Text>
                                <Text style={styles.optionalText}>0/3 Images</Text>
                            </View>
                            <TouchableOpacity
                                disabled={coverImages.length == 3}
                                onPress={uploadImage}
                                style={styles.inputLocationContainer}>
                                <View style={styles.locationIconContainer}>
                                    <Image
                                        source={require('../../assets/AddNewAssets/cloud-upload.png')}
                                        style={styles.locationIcon}
                                        resizeMode={'contain'} />
                                </View>
                                <Text style={styles.uploadVideoText}>Upload Photos</Text>
                            </TouchableOpacity>
                            <View style={styles.detailsImagesContainer}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    data={coverImages}
                                    renderItem={renderDetailsImage}
                                />
                            </View>
                            <View style={styles.availableByOrderContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setPopupVisible(true)
                                        setPopupText("Items should be available.")
                                        setAvailableNow(true)
                                    }}
                                    style={[
                                        styles.availableByOrderButtonContainer,
                                        { elevation: isAvailbeNow ? 2 : 0 },
                                        isAvailbeNow && { shadowOpacity: 0.15, shadowOffset: { width: 0.5, height: 0.5 }, shadowColor: Colors.black }]}>
                                    <Text style={[styles.availableByOrderButtonText, { color: isAvailbeNow ? Colors.textBlack : Colors.gray }]}>Available Now</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setPopupVisible(true)
                                        setPopupText("Items should be availble by order.")
                                        setAvailableNow(false)
                                    }}
                                    style={[
                                        styles.availableByOrderButtonContainer,
                                        { elevation: !isAvailbeNow ? 2 : 0 },
                                        !isAvailbeNow && { shadowOpacity: 0.15, shadowOffset: { width: 0.5, height: 0.5 }, shadowColor: Colors.black }]}>
                                    <Text style={[styles.availableByOrderButtonText, { color: !isAvailbeNow ? Colors.textBlack : Colors.gray }]}>By Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.availableByOrderContainer}>
                                <View style={styles.qtyContainer}>
                                    <Text style={styles.qtyPriceTitle}>Qty</Text>
                                    <View style={styles.qtyRowContainer}>
                                        <TextInput
                                            style={styles.qtyPriceText}
                                            placeholder="0"
                                            returnKeyType="done"
                                            keyboardType="number-pad"
                                            placeholderTextColor={Colors.textBlack}
                                        ></TextInput>
                                        <ModalDropdown
                                            options={quantityUnits}
                                            dropdownStyle={styles.quantityUnitDropDown}
                                            renderRow={(option, index, isSelected) => (
                                                <View style={styles.quantityUnitDropDownItemContainer}>
                                                    <Text style={styles.quantityUnitDropDownItemText}>{option}</Text>
                                                </View>
                                            )}
                                            onSelect={(index, value) => setSelectedQuantityUnit(value)}>
                                            <View style={styles.kgContainer}>
                                                <Text style={styles.kgText}>{selectedQuantityUnit}</Text>
                                                <Image source={caretDownImage}
                                                    resizeMode='contain'
                                                    style={styles.caretDownImageKg} />
                                            </View>
                                        </ModalDropdown>
                                    </View>
                                </View>
                                <View style={styles.qtyContainer}>
                                    <Text style={styles.qtyPriceTitle}>Price</Text>
                                    <View style={styles.qtyRowContainer}>
                                        <Text
                                            style={styles.qtyPriceText}
                                        >0.00</Text>
                                        <Text style={styles.currencyText}>SAR</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Button title="Add Item" onPress={() => navigate('CreateNewItem')} />
                    </KeyboardAwareScrollView>
                </LinearGradient>
                <Popup isVisible={popupVisible} text={popupText} onRequsetClose={() => setPopupVisible(false)} />
            </SafeAreaView>
       
        </React.Fragment>
    )
}