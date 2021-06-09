import React, { useState, createRef } from 'react';
import Container from '../../components/BuyerHomeContainer/BuyerHomeContainer.component';
import {
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Text,
    Image,
} from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import styles from './Search.Style';
import dummyData from './DummyData';
import arrowdownImage from '../../assets/MyPostAssets/close-circle.png';
import back from '../../assets/buyerHome/arrow-left.png';
import avatar from '../../assets/buyerHome/Layer777.png'
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import OverViewModal from '../../components/OverViewModal/OverViewModal.Container';
import ItemLeft from '../../DummyData/SearchData';
import starImage from '../../assets/OverViewDetailAssets/stars.png';
import ellipseImage from '../../assets/HomeAssets/Ellipse.png';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import Colors from '../../utills/Colors';
import { Modal } from 'react-native';

import Temp_file from './temporary_file';

export default function BuyerHome({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";

    const languageJson = useSelector(state => state.Language.languageJson.BuyerHome_screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const [selectedItem, setSelectedItem] = useState({})
    const [searchValue, setSearchValue] = useState(route?.params?.searchValue)
    /*
   *    Modal reference to open search modal
   */
    const modalDropdown = createRef(null);
    /*
   *    States used 
   */
    const [inputDropDown, setInputDropDown] = useState(languageJson.WhatYouLike_PlaceHolder)
    const [isVisible, setIsVisible] = useState(false)

    const [visible, setvisible] = useState(false);

    const _renderProvider = ({ item }) => (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ServiceDetailOverView')} style={styles.providerContainer}>
            <Image source={{ uri: item.image }} style={styles.providerLogo} />
            <Text style={styles.providerRestaurant}>{item.restaurant}</Text>
            <Text style={styles.providerCategory}>{item.title}</Text>
        </TouchableOpacity>
    );
    const _showItemLeft = ({ item, index }) => {
        return (
            <>
                {index == 5 &&
                    <FlatList
                        data={dummyData.provider}
                        renderItem={_renderProvider}
                        inverted={selectdLanguage == 'ar'}
                        keyExtractor={item => item.code}
                        contentContainerStyle={styles.container}
                        horizontal={true}
                        style={{ width: width(100), paddingBottom: 20, paddingLeft: width(5), marginTop: totalSize(0.8) }}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => (
                            <View style={{ marginLeft: width(2.5) }} />
                        )}
                    />}
                <ViewRowVise style={styles.flatListMainContainer}>
                    <TouchableOpacityRowVise
                        // style={{ flexDirection: 'row' }}
                        onPress={() => { setSelectedItem(item); setIsVisible(true) }}>
                        <ImageBackground
                            source={item.image}
                            style={styles.itemImageBackground}
                            imageStyle={{ borderRadius: 10 }}>
                            <View style={styles.itemLeftContainer}>
                                <Text style={styles.itemLeftText}>{item.itemLeft} {languageJson.left}</Text>
                            </View>
                            <ViewRowVise style={styles.starImageContainer}>
                                <Image
                                    source={starImage}
                                    resizeMode="contain"
                                    style={styles.starImage}
                                />
                                <Text style={styles.personRatingText}>{item.rating}.0</Text>
                            </ViewRowVise>
                        </ImageBackground>
                        <View style={styles.itemNameContainer}>
                            <Text numberOfLines={1} style={styles.itemNameText}>{item.title}</Text>
                            <ViewRowVise style={styles.itemNamePicContainer}>
                                <Text style={styles.panCakeText}>Pancake</Text>
                                <Image
                                    source={ellipseImage}
                                    style={styles.ellipseImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.HoneyText}>{item.itemType}</Text>
                            </ViewRowVise>
                            <TextRowVise style={styles.descriptionText} numberOfLines={2}>{item.description}</TextRowVise>
                            <ViewRowVise style={styles.priceDollarContainer}>
                                <Text style={styles.price}> {isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
                                    <Text style={styles.currency}>{selectedCurrency == "USD" ? "$" : "SAR"}</Text>
                                </Text>
                                <View style={styles.perUnitContainer}>
                                    <Text style={styles.perUnit}>{item.perUnit}</Text>
                                </View>
                            </ViewRowVise>
                        </View>
                    </TouchableOpacityRowVise>
                </ViewRowVise>
            </>
        );
    };
    // {console.log(route)}
    return (
        <Container
            noSearch
        // title={languageJson.Home_Title}
        // bell
        // back
        // onBellPress={() => navigation.navigate('Notifications')}
        // onBackPress = {()=>{
        //     navigation.goBack()
        // }}
        >
                <ViewRowVise style={styles.searchFilterContainer}>
                    <View style={styles.searchContainer}>
                        <ViewRowVise style={styles.searchInnerContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image style={styles.searchImage}
                                    source={back} />
                            </TouchableOpacity>
                            <Temp_file/>

                                {/*                             
                                <TextInputRowVise
                                    returnKeyType='search'
                                    style={styles.searchText}
                                    placeholderTextColor={Colors.lightGray}
                                    placeholder={languageJson.WhatYouLike_PlaceHolder}
                                    value={searchValue}
                                    onChangeText={setSearchValue}
                                />
                             */}
                            
                                
                            {searchValue.length > 0 ? <TouchableOpacity activeOpacity={0.5} onPress={() => setSearchValue('')}>
                                <Image style={styles.arrowDown}
                                    source={arrowdownImage} />
                            </TouchableOpacity> : <View style={styles.arrowDown} />}
                        </ViewRowVise>
                    </View>
                    <TouchableOpacity style={styles.avatarImageContainer}
                    onPress={()=>navigation.navigate('BuyerFilters')}
                    >
                        <Image
                            source={require('../../assets/buyerHome/filter.png')}
                            style={styles.backImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </ViewRowVise>
            <ScrollView
                style={{ width: width(100) }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: height(3) }}>
      
                <View style={styles.flatListContainer}>
                    <FlatList
                        ItemSeparatorComponent={() => (
                            <View style={styles.itemSeparator} />
                        )}
                        data={ItemLeft}
                        showsVerticalScrollIndicator={false}
                        renderItem={_showItemLeft}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{ paddingBottom: height(23) }}
                    />
                </View>
            </ScrollView>
            <OverViewModal
                isVisible={isVisible}
                onChange={() => { }}
                onStorePress={() => {
                    setIsVisible(!isVisible)
                    navigation.navigate('ServiceDetailOverView')
                }}
                selectedItem={selectedItem}
                onPress={() => {
                    setIsVisible(!isVisible);
                }}
            />
        </Container>
    );
}
