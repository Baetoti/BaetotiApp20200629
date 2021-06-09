import React, { useState ,useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import styles from './CreateNewAddItem.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import Colors from '../../utills/Colors'
import Button from '../../components/Button/Button.component';
import caretDownImage from '../../assets/AddNewAssets/caret-down.png'
import { FlatList } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { height, width } from 'react-native-dimension';
import Popup from '../../components/PopUp/PopUp.Component';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import TagsSelectionModal from '../../components/TagsSelectionModal/TagsSelectionModal.Component'
import AreYouSureModal from '../../components/AreYouSureModal/AreYouSureModal.Component'
import Modal from 'react-native-modal';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import { useSelector } from 'react-redux';
import postDataDummy from '../../DummyData/ProviderPost';
import Picker from '@gregfrench/react-native-wheel-picker';
var PickerItem = Picker.Item;
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"

export default function CreateNewAddItem({ navigation }) {


    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Create_AddItems_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    /**
     * Different states used to manage the selection of categories,
     * subcategories, quantity unit etc.
     */
    // const categories = ['Food', 'Electronics', 'Grocery', 'Sports', 'Furniture', 'Fashion', 'Crockery', 'Home Appliances']

    const [categories, setcategories] = useState([])
    const [subCategories, setsubCategories] = useState([])
    // const subCategories = ['Food', 'Electronics', 'Grocery', 'Sports', 'Furniture', 'Fashion', 'Crockery', 'Home Appliances']
    const [selectedCategory, setSelectedCategory] = useState('Choose Category')
    const [selectedSubCategory, setSelectedSubCategory] = useState('Choose Subcategory')
    const [tags, setTags] = useState([{ label: 'Thaifood', key: 14 }, { label: 'Spicy', key: 15 }])
    const [isAvailbeNow, setAvailableNow] = useState(false)
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupText, setPopupText] = useState("Please Wait");
    const [coverImages, setCoverImages] = useState([]);
    const [quantityModal, setQuantityModal] = useState(false);
    const [quantity, setQuantity] = useState("1");
    const [tempQuantity, setTempQuantity] = useState("1");
    const [price, setPrice] = useState("20");
    const [tempPrice, setTempPrice] = useState("20");
    const [unit, setUnit] = useState("Kg");
    const [tempUnit, setTempUnit] = useState("Kg");
    const [unitOptions, setUnitOptions] = useState(["Kg", "Lb"]);
    const [itemDetailsError, setItemDetailsError] = useState(false);
    const [itemDetail, setItemDetail] = useState('')
    const [quantityError, setQuantityError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [validateModal, setValidateModal] = useState(false);

    const [showTagsModal, setShowTagsModal] = useState(false);
    const [unSelectedTags, setUnSelectedTags] = useState(postDataDummy.tags);
    const [isSureVisible, setIsSureVisible] = useState(false)
    const itemList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
    const [selectedItem, setSelectedItem] = useState(2)

    const [spinner, setspinner] = useState(false)

    const updateUnSelectedTags = () => {
        var newUnselectedTags = [];
        postDataDummy.tags.map(item => {
            let found = false;
            tags.map(datum => {
                if (datum.key == item.key)
                    found = true;
            })
            if (!found)
                newUnselectedTags.push(item)
        })
        setUnSelectedTags(newUnselectedTags)
    }
    /**
     * Function to add a tag from tags array
     */
    const addTag = tag => {
        var newTags = [...tags];
        newTags.push(tag)
        // console.log(newTags)
        setTags(tags => tags = [...newTags]);
    };
    /**
     * Function used to remove any Tag from the list
     */
    const removeTag = (index) => {
        let newTags = tags;
        newTags = tags.filter((item, i) => i != index);
        setTags(newTags)
    }
    /**
     * Update description text and also check for special characters
     */
    const updateItemDetail = (val) => {
        setItemDetail(val)
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+/;
        if (format.test(val)) {
            setItemDetailsError(true)
        } else {
            setItemDetailsError(false)
        }
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
        return (<>
            <View style={[styles.addItemButtonContainer, { flexDirection: 'row' }]}>
                <Text style={styles.addItemText}>{item.label}</Text>
                <TouchableOpacity
                    onPress={() => removeTag(index)}>
                    <Image
                        source={require('../../assets/AddNewAssets/multiply.png')}
                        style={styles.closeTag}
                        resizeMode={"contain"} />
                </TouchableOpacity>
            </View>
            {
                index + 1 == tags.length && (
                    <TouchableOpacity onPress={() => { updateUnSelectedTags(); setShowTagsModal(true) }} style={styles.addItemButtonContainer}>
                        <Text style={styles.addItemText}>{tags.length > 0 ? "+Add More" : "+Add Tag"}</Text>
                    </TouchableOpacity>
                )
            }
        </>
        )
    };
    /**
   * Method used to upload image from  gallery
     */
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
    /**
     * Component for Individual DetailImage Item
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
    const onPickerSelect = (index) => {
        setSelectedItem(index)
        setTempPrice(itemList[index])
    }



    const user = useSelector(
        state => state.Auth.user,
    );

    const [itemName, setitemName] = useState("")      
    const [itemPrice, setitemPrice] = useState("")    
    const [priceUnit, setpriceUnit] = useState("kg")    
    const [quantitym, setquantity] = useState("")    

    const UserRegister = async () => {


        if(itemName==""){
            alert("First enter Item Name")
            return
        }


        if(subcateID==""){
            alert("First Select Item Categories")
            return
        }


        if(subcategoryID==""){
            alert("First Select Subcategory")
            return
        }
        
        try {     
            setspinner(true)
            var formData = new FormData(); 
            formData.append("storeID", "607c4fa19524d35c01035c0b");
            formData.append('userID', user.userID);
            formData.append("itemName", itemName);
            formData.append("itemDetail", itemDetail);
            formData.append("itemPrice", Number(price).toFixed(1));
            formData.append("priceUnit", priceUnit);
            formData.append("quantity", quantity);
            formData.append("categoryID", subcateID);
            formData.append("subCategoryID", subcategoryID);
            formData.append("tags", "qqw,rrt");
            // formData.append("itemImages", fileInput.files[0], "file");          
            const {data} = await Services.Addupdateitems(formData)      
            console.log(data);                      
            setspinner(false)
            navigation.goBack()
    
        }catch(error){
          alert("Something went wrong")
          setspinner(false)
          console.log(error);              
        }
    } 
    
    useEffect(() => {
        Getitemcategory()
    }, [])
    const [subcateID, setsubcateID] = useState("")
    const [subcategoryID, setsubcategoryID] = useState("")
    
    const Getitemcategory = async () => {
        try {     
            var formData = new FormData(); 
            const {data} = await Services.Getitemcategory(formData)      
            console.log(data);          
            setcategories(data)
        }catch(error){
          alert("Something went wrong")
          setspinner(false)
          console.log(error);              
        }
    } 

        
    const Getitemsubcategory = async (categoryID) => {
        try {     
            var formData = new FormData(); 
            formData.append("categoryID", categoryID);
            const {data} = await Services.Getitemsubcategory(formData)      
            console.log(data);          
            setsubCategories(data)
        }catch(error){
          alert("Something went wrong")
          setspinner(false)
          console.log(error);              
        }
    } 

        

    return (
        <React.Fragment>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={{fontSize:16}}
                color={"blue"}
            />
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView backgroundColor={Colors.backgroundColor} />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']} style={styles.container}>
                    <HeaderAddNew
                        backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
                        title={languageJson.AddItem_Heading} onPressBack={() => navigation.goBack()} containerStyle={{ marginTop: height(2) }}
                        onPressRight={() => setIsSureVisible(!isSureVisible)} />
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        extraScrollHeight={height(8)}>
                        <View style={styles.descriptionContainer}>
                            <View style={styles.titleContainer}>
                                <TextRowVise style={selectdLanguage == 'ar' ? [styles.itemNameText] : styles.itemNameText}>{languageJson.ItemName_Heading}</TextRowVise>
                                <TextInput
                                    style={selectdLanguage == 'ar' ? [styles.titleInputContainer, { textAlign: 'right' }] : styles.titleInputContainer}
                                    placeholder={languageJson.EnterName_Label}
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    returnKeyType='done'
                                    onChangeText={(text)=>setitemName(text)}
                                />
                            </View>
                            <TextRowVise style={styles.inputTitle}>{languageJson.Categories_Heading}</TextRowVise>
                            <ModalDropdown
                                options={categories}
                                dropdownStyle={styles.categoriesDropDown}
                                renderRow={(option, index, isSelected) => (
                                    <View style={styles.categoriesDropDownItemContainer}>
                                        <Text style={styles.categoriesDropDownItemText}>{option.categoryName}</Text>
                                    </View>
                                )}
                                onSelect={(index, value) => {setSelectedCategory(value.categoryName); setsubcateID(value.categoryID);Getitemsubcategory(value.categoryID)}}
                            >
                                <View style={styles.CategoriesContainer}>
                                    <Text style={styles.CategoriesText}>{selectedCategory}</Text>
                                    <Image source={caretDownImage}
                                        resizeMode='contain'
                                        style={styles.caretDownImage} />
                                </View>
                            </ModalDropdown>
                            <TextRowVise style={styles.inputTitle}>{languageJson.Subcategory_Heading}</TextRowVise>
                            <ModalDropdown
                                disabled={selectedCategory == 'Choose Category'}
                                options={subCategories}
                                dropdownStyle={styles.categoriesDropDown}
                                renderRow={(option, index, isSelected) => (
                                    <View style={styles.categoriesDropDownItemContainer}>
                        
                                        <Text style={styles.categoriesDropDownItemText}>{option.subCategoryName}</Text>
                                    </View>
                                )}
                                onSelect={(index, value) => {setSelectedSubCategory(value.subCategoryName); setsubcategoryID(value.subCategoryID)}}
                            >
                                <View style={styles.CategoriesContainer}>
                                    <Text style={[styles.CategoriesText], { color: selectedCategory == 'Choose Category' ? Colors.grayDarker : Colors.textBlack }}>{selectedSubCategory}</Text>
                                    <Image source={caretDownImage}
                                        resizeMode='contain'
                                        style={styles.caretDownImage} />
                                </View>
                            </ModalDropdown>
                            <TextRowVise style={styles.inputTitle}>{languageJson.ItemDetails_Heading}</TextRowVise>
                            <View style={styles.descriptionInputContainer}>
                                <TextInput
                                    textAlignVertical='top'
                                    placeholder={languageJson.EnterDescription_Label}
                                    style={selectdLanguage == 'ar' ? [styles.descriptionInput, { textAlign: 'right' }] : styles.descriptionInput}
                                    multiline={true}
                                    value={itemDetail}
                                    onChangeText={updateItemDetail}
                                    placeholderTextColor={Colors.placeHolderTextColor}

                                />
                            </View>
                            {itemDetailsError && <Text style={styles.errorText}>{languageJson.SpecialCharacterError}</Text>}
                            <TextRowVise style={styles.inputTitle}>{languageJson.Tags_Heading}</TextRowVise>
                            <View style={styles.flatListContainer}>
                                <FlatList
                                    renderItem={renderTag}
                                    showsHorizontalScrollIndicator={false}
                                    data={tags}
                                    keyExtractor={item => item}
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
                                <Text style={styles.inputTitle}>{languageJson.Photos_Heading}</Text>
                                <Text style={styles.optionalText}>0/3 {languageJson.Images_Label}</Text>
                            </ViewRowVise>
                            <TouchableOpacityRowVise
                                disabled={coverImages.length == 3}
                                onPress={uploadImage}
                                style={styles.inputLocationContainer}>
                                <View style={styles.locationIconContainer}>
                                    <Image
                                        source={require('../../assets/AddNewAssets/cloud-upload.png')}
                                        style={styles.locationIcon}
                                        resizeMode={'contain'} />
                                </View>
                                <Text style={styles.uploadVideoText}>{languageJson.UploadPhotos_Label}</Text>
                            </TouchableOpacityRowVise>
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
                                        setPopupText("Items should be availble by order.")
                                        setAvailableNow(false)
                                        setQuantityModal(true)
                                        setTempQuantity(quantity)
                                        setTempUnit(unit)
                                        setTempPrice(price)
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
                                        setPopupText("Items should be availble by order.")
                                        setAvailableNow(true)
                                        setQuantityModal(true)
                                        setTempQuantity(quantity)
                                        setTempUnit(unit)
                                        setTempPrice(price)
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
                            <View style={[styles.availableByOrderContainer, { justifyContent: isAvailbeNow ? 'flex-end' : 'flex-start' }]}>
                                {isAvailbeNow ?
                                    <View style={styles.qtyContainer}>
                                        <ViewRowVise style={styles.row}>
                                            <Text style={styles.qtyPriceTitle}>{languageJson.Qty_Label}</Text>
                                            <Text style={styles.qtyPriceText}>{quantity}</Text>
                                        </ViewRowVise>
                                        <View style={styles.qtyRowContainer}>
                                            <Text style={styles.qtyPriceText}>{Number(price).toFixed(1)}</Text>
                                            <Text style={styles.currencyText}> {currencyLabel} / </Text>
                                            <Text style={styles.currencyText}>{unit}</Text>
                                        </View>
                                    </View>
                                    :
                                    <View style={styles.qtyContainer}>
                                        <TextRowVise style={styles.qtyPriceTitle}>{languageJson.Price_Label}</TextRowVise>
                                        <View style={styles.qtyRowContainer}>
                                            <Text style={styles.qtyPriceText}>{Number(price).toFixed(1)}</Text>
                                            <Text style={styles.currencyText}> {currencyLabel} / </Text>
                                            <Text style={styles.currencyText}>{unit}</Text>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                        <Button title={languageJson.AddItem_Button} onPress={() => UserRegister()} />
                        {/* navigate('CreateNewItem')} /> */}
                    </KeyboardAwareScrollView>
                </LinearGradient>
                <Modal
                    style={styles.modal}
                    isVisible={quantityModal}
                    backdropTransitionInTiming={0}
                    backdropTransitionOutTiming={0}
                    onBackdropPress={() => {
                        setQuantityModal(false)
                    }}
                    onBackButtonPress={() => {
                        setQuantityModal(false)
                    }}
                >
                    <View
                        style={styles.modalContainer}>
                        <View
                            style={styles.swcondaryContainer}>
                            {isAvailbeNow ?
                                <>
                                    <TextRowVise style={styles.modalHeading}>{languageJson.EnterQuantity}</TextRowVise>
                                    <TextInput
                                        style={styles.textInputModalQuantity}
                                        placeholder="0"
                                        placeholderTextColor={Colors.textBlack}
                                        keyboardType="number-pad"
                                        onChangeText={val => {
                                            if (!Number.isInteger(Number(val))) {
                                                setQuantityError(true)
                                                setTempQuantity(val)
                                            }
                                            else {
                                                setQuantityError(false)
                                                setTempQuantity(val)
                                            }
                                        }}
                                        value={tempQuantity}
                                    />
                                    {quantityError && <Text style={styles.errorTextModal}>Quantity should be an integer.</Text>}
                                    {/* <View style={styles.priceDetailContainer}>
                                        <TextInput
                                            style={styles.textInputModal}
                                            placeholder="0"
                                            placeholderTextColor={Colors.textBlack}
                                            keyboardType="number-pad"
                                            onChangeText={val => {
                                                if (isNaN(Number(val))) {
                                                    setPriceError(true)
                                                    setTempPrice(val)
                                                }
                                                else {
                                                    setPriceError(false)
                                                    setTempPrice(val)
                                                }
                                            }}
                                            value={tempPrice}
                                            value={tempPrice}
                                        />
                                        <Text>{currencyLabel} / </Text>
                                        <ModalDropdown
                                            options={unitOptions}
                                            dropdownStyle={styles.quantityUnitDropDown}
                                            renderRow={(option, index, isSelected) => (
                                                <View style={styles.quantityUnitDropDownItemContainer}>
                                                    <Text style={styles.quantityUnitDropDownItemText}>
                                                        {option}
                                                    </Text>
                                                </View>
                                            )}
                                            onSelect={(index, value) => setTempUnit(value)}>
                                            <View style={styles.modalDropDownContainer}>
                                                <Text style={styles.textModalDropDown}>{tempUnit}</Text>
                                                <Image source={caretDownImage}
                                                    resizeMode='contain'
                                                    style={styles.caretDownImage} />
                                            </View>
                                        </ModalDropdown>
                                    </View> */}
                                    {priceError && <Text style={styles.errorTextModal}>Price should be a number.</Text>}
                                    <Button
                                        onPress={() => {
                                            setQuantity(tempQuantity)
                                            setUnit(tempUnit)
                                            setPrice(tempPrice)
                                            setQuantityModal(false)
                                        }}
                                        disabled={priceError || quantityError || (Number(tempQuantity) < 1) || (Number(tempPrice) < 1)}
                                        title={languageJson.Submit_Button}
                                        textStyle={{ fontSize: width(4) }}
                                        containerStyle={styles.button}
                                    />
                                </>
                                :
                                <>
                                    <TextRowVise style={styles.modalHeading}>{languageJson.EnterPrice}</TextRowVise>
                                    <Picker style={{ width: width(60), height: height(30) }}
                                        selectedValue={selectedItem}
                                        itemStyle={{ color: "black", fontSize: 26 }}
                                        onValueChange={(index) => onPickerSelect(index)}>
                                        {itemList.map((value, i) => (
                                            <PickerItem label={value.toString()} value={i} key={value.toString() + currencyLabel} />
                                        ))}
                                    </Picker>
                                    <View style={styles.priceDetailContainer}>
                                        {/* <TextInput
                                            style={styles.textInputModal}
                                            placeholder="0"
                                            placeholderTextColor={Colors.textBlack}
                                            keyboardType="number-pad"
                                            onChangeText={val => {
                                                if (isNaN(Number(val))) {
                                                    setPriceError(true)
                                                    setTempPrice(val)
                                                }
                                                else {
                                                    setPriceError(false)
                                                    setTempPrice(val)
                                                }
                                            }}
                                            value={tempPrice}
                                            value={tempPrice}
                                        />
                                        <Text>{currencyLabel} / </Text> */}
                                        <ModalDropdown
                                            options={unitOptions}
                                            dropdownStyle={styles.quantityUnitDropDown}
                                            renderRow={(option, index, isSelected) => (
                                                <View style={styles.quantityUnitDropDownItemContainer}>
                                                    <Text style={styles.quantityUnitDropDownItemText}>
                                                        {option}
                                                    </Text>
                                                </View>
                                            )}
                                            onSelect={(index, value) => setTempUnit(value)}>
                                            <View style={styles.modalDropDownContainer}>
                                                <Text style={styles.textModalDropDown}>{tempUnit}</Text>
                                                <Image source={caretDownImage}
                                                    resizeMode='contain'
                                                    style={styles.caretDownImage} />
                                            </View>
                                        </ModalDropdown>
                                    </View>
                                    {priceError && <Text style={styles.errorTextModal}>Price should be a number.</Text>}
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
                                            setPrice(tempPrice)
                                            setUnit(tempUnit)
                                            setQuantity(tempQuantity)
                                            setQuantityModal(false)
                                        }}
                                        disabled={priceError || (Number(tempPrice) < 1)}
                                        title={languageJson.Submit_Button}
                                        textStyle={{ fontSize: width(4) }}
                                        containerStyle={styles.button}
                                    />
                                </>
                            }
                        </View>
                    </View>
                </Modal>
                <Popup isVisible={popupVisible} text={popupText} onRequsetClose={() => setPopupVisible(false)} />
                <AreYouSureModal
                    isVisible={isSureVisible}
                    onPressNo={() => setIsSureVisible(false)}
                    onPressYes={() => {
                        navigation.goBack()
                        setIsSureVisible(false)
                    }}
                />
            </SafeAreaView>
            <TagsSelectionModal isVisible={showTagsModal} tags={unSelectedTags} onSelect={addTag} onClose={() => { setShowTagsModal(false) }} />
            <SafeAreaView backgroundColor='#f6f6f6' />
        </React.Fragment>
    )
}