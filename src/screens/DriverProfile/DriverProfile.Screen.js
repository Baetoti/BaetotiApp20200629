import React, { useState, Fragment } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from './DriverProfile.Style';
import Colors from '../../utills/Colors';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.Component';
import providerProfileUri from '../../assets/OverViewDetailAssets/Layer777.png';
import Tab from '../../components/Tab/Tab.component';
import Button from '../../components/Button/Button.component';
import editImage from '../../assets/OverViewDetailAssets/edit2.png';
import { width, height } from 'react-native-dimension';
import RatingsData from '../../DummyData/BuyerRating';
import starImage from '../../assets/MoreAssets/star.png';
import { AirbnbRating } from 'react-native-ratings';
import ModalDropdown from 'react-native-modal-dropdown';
import arrowdownImage from '../../assets/Login/arrow-down.png';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ImageExpandModal from '../../components/ImageExpandModal/ImageExpandModal.Component';

export default function BuyerMyProfile({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.MyProfiles_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)

    /**
     * States to manage Tab and Ratings interval Selection
     */
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedRatingInterval, setSelectedRatingInterval] = useState(
        languageJson.Positive_Label
    );
    const [ratingsData, setRatingsData] = useState(RatingsData);

    const [isExpandedImageVisible, setIsExpandedImageVisible] = useState(false)
    const [expandedImage, setExpandedImage] = useState(null)

    /**
     * Individual Rating reply
     */
    const _ratingReplies = ({ item }) => {
        return (
            <ViewRowVise style={styles.productflatListContainer}>
                <TouchableOpacity
                    onPress={() => {
                        setExpandedImage(item.productImage)
                        setIsExpandedImageVisible(true)
                    }}
                >
                    <Image
                        source={item.productImage}
                        resizeMode="cover"
                        style={styles.productImage}
                    />
                </TouchableOpacity>

                <View style={styles.commentContainer}>
                    <ViewRowVise style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.productname}>{item.productname}</Text>
                        <ViewRowVise style={styles.productRatingView}>
                            <Image
                                source={starImage}
                                resizeMode="contain"
                                style={styles.starImage}
                            />
                            <TextRowVise style={styles.productRatingText}>
                                {item.productRating}.0
              </TextRowVise>
                        </ViewRowVise>
                    </ViewRowVise>
                    <TextRowVise numberOfLines={2} style={styles.commmentText}>{item.comment}</TextRowVise>
                </View>
            </ViewRowVise>
        );
    };
    /**
     * Component for individual product item
     */
    const _productDetail = ({ item }) => {
        return (
            <ViewRowVise style={styles.productflatListContainer}>
                <Image source={item.productImage} resizeMode='cover' style={styles.productImage} />
                <View style={styles.commentContainer}>
                    <Text numberOfLines={2} style={styles.commmentText}>{item.comment}</Text>
                </View>
            </ViewRowVise>
        )
    }
    /**
     * Component for individual Rating Item
     */
    const _showRatingDetail = ({ item }) => {
        return (
            <TouchableOpacity style={styles.ratingViewContainer}
                activeOpacity={selectedTab == 1 ? 0 : 1}
                onPress={selectedTab == 1 ? () => { navigation.navigate('BuyerOrderReview2', { itemRating: item.product[0].comment, providerRating: item.providerRating }) } : null}>
                <ViewRowVise style={styles.ratingInfoView}>
                    <Image
                        source={item.providerImage}
                        style={styles.personImage}
                        resizeMode="cover"
                    />
                    <View style={styles.personNameContainer}>
                        <Text style={styles.personNameText}>{item.personName}</Text>
                        <ViewRowVise style={styles.starsContainer}>
                            <AirbnbRating
                                count={5}
                                defaultRating={item.rating}
                                showRating={false}
                                selectedColor={Colors.purplePrimary}
                                isDisabled={true}
                                starContainerStyle={{ padding: 0, margin: 0 }}
                                size={width(2.5)}
                            />
                            <Text style={styles.ratingText}>{item.rating}.0</Text>
                        </ViewRowVise>
                        {selectedTab == 1 ?
                            <Text numberOfLines={2} style={styles.commmentText}>{item.providerRating}</Text>
                            : null
                        }
                    </View>
                    <Text style={styles.dateText}>{item.date}</Text>
                </ViewRowVise>
                <View style={[styles.productContainer, { alignSelf: selectdLanguage == "ar" ? 'flex-start' : 'flex-end' }]}>
                    {selectedTab == 1 ? <FlatList
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                        // style={styles.itemFlatlistContainer}
                        data={item.product}
                        // contentContainerStyle={{ paddingBottom: height(7) }}
                        showsVerticalScrollIndicator={false}
                        renderItem={_ratingReplies}
                        keyExtractor={item => item.key}
                    />
                        :
                        <View>
                            <TextRowVise style={styles.commmentText}>
                                {item.coment}
                            </TextRowVise>
                        </View>}
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#ffffff'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#ffffff' })}
            />
            <SafeAreaView style={styles.container}>



                <ScrollView>
                    <View style={styles.profileContainer}>
                        <ProfileHeader title={languageJson.MyProfile_Heading}
                            image={editImage}
                            onImagePress={() => { console.log("hit"); navigation.navigate('DriverEditProfile') }}
                            onPress={() => navigation.goBack()}
                            hideEdit
                            containerStyle={{ marginTop: 0, backgroundColor: Colors.backgroundWhite, width: width(100), paddingHorizontal: width(5), }} />
                        <Image source={providerProfileUri} style={styles.providerProfileUri} resizeMode='cover' />
                        <Text style={styles.providerText}>Sofia Devidson</Text>
                        <Text style={styles.mailAddressText}>@Sofiaretailerstore</Text>
                        <View style={styles.bookMarkContainer}>
                            <View style={styles.totalVisitorContainer}>
                                <Text style={styles.bookMarkText}>60</Text>
                                <Text style={styles.totalVisitorText}>{languageJson.Bookmarked_Label}</Text>
                            </View>
                            <View style={styles.verticalLine} />
                            <View style={styles.totalVisitorContainer}>
                                <Text style={styles.bookMarkText}>120</Text>
                                <Text style={styles.totalVisitorText}>{languageJson.Visitsforaccount_Label}</Text>
                            </View>
                        </View>
                        <View style={styles.tabContainer}>
                            <Tab
                                selectedTextColor={Colors.textBlack}
                                textColor={Colors.placeHolderTextColor}
                                textStyle={styles.tabTextStyle}
                                selectedIndex={selectedTab}
                                tabContainerStyle={{ width: width(25), alignItems: 'center' }}
                                renderSelectedTabFooter={() => (
                                    <View style={styles.renderTabFooter}></View>
                                )}
                                onChangeTab={(item, index) => setSelectedTab(index)}
                                options={[languageJson.Client_tab, languageJson.Provider_tab, languageJson.Driver_tab]} />
                        </View>
                    </View>
                    <LinearGradient
                        colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                        style={styles.container}>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.ratingHeader}>{languageJson.Ratings_Label}</Text>
                            <View style={styles.dropDownContainer}>
                                <ModalDropdown
                                    options={[
                                        languageJson.Positive_Label,
                                        languageJson.Negative_Label,
                                        languageJson.Recents,
                                    ]}
                                    dropdownStyle={styles.dropDown}
                                    showsVerticalScrollIndicator={false}
                                    onSelect={(index, value) => setSelectedRatingInterval(value)}
                                    renderRow={(option, index, isSelected) => (
                                        <View style={styles.dropDownItemContainer}>
                                            <Text style={styles.dropDownItemText}>{option}</Text>
                                        </View>
                                    )}>
                                    <View style={styles.dropDownInnerConainer}>
                                        <Text style={styles.selectedValueText}>
                                            {selectedRatingInterval}
                                        </Text>
                                        <Image
                                            source={arrowdownImage}
                                            resizeMode="contain"
                                            style={styles.arrowdownImage}
                                        />
                                    </View>
                                </ModalDropdown>
                            </View>
                        </View>
                        <View style={styles.flatListContainer}>
                            <FlatList
                                ItemSeparatorComponent={() => (
                                    <View style={styles.itemSeparator} />
                                )}
                                // style={styles.itemFlatlistContainer}
                                data={ratingsData[selectedTab]}
                                contentContainerStyle={{ paddingBottom: height(2) }}
                                showsVerticalScrollIndicator={false}
                                renderItem={_showRatingDetail}
                                keyExtractor={item => item.key}
                            />
                        </View>
                    </LinearGradient>
                </ScrollView>
                <ImageExpandModal isVisible={isExpandedImageVisible} onClose={() => setIsExpandedImageVisible(false)}
                    image={expandedImage} />
            </SafeAreaView>
        </Fragment>
    );
}