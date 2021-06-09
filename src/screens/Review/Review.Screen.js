import React, { Fragment, useState } from 'react';
import {
    View, Text, SafeAreaView, Image, StatusBar
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import { height, totalSize } from 'react-native-dimension';
import styles from './Review.Style';
import Colors from '../../utills/Colors';
import HomeHeader from '../../components/HomeHeader/HomeHeader.Component';
import { AirbnbRating } from 'react-native-ratings';
import Button from '../../components/Button/Button.component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';

export default function CurrentOrders({ route, navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.reviewNow_Client)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading data from previous screen
     */
    const [rating, setRating] = useState(4)
    /**
     * Reading data from navigation params
     */
    const { data } = route.params;

    const clientimage = "https://z9v7g9z9.stackpathcdn.com/demo-2/wp-content/uploads/sites/5/avatars/6/5c6b72cccba9e-bpfull.jpg"

    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundWhite} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={{ flex: 1 }}
                >
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        extraScrollHeight={height(8)}
                    >
                        <View style={styles.HeaderContainer}>
                            <HomeHeader title={languageJson.Review_Title} onPress={() => navigation.goBack()} />
                        </View>
                        {data.userType == 'client' ?
                            <ViewRowVise style={styles.ImageContainer}>
                                <Image
                                    resizeMode='cover'
                                    source={data.clientImage}
                                    style={styles.imageStyle} />
                                <View style={styles.nameContainer}>
                                    <View>
                                        <TextRowVise numberOfLines={1} style={styles.NameText}>{data.clientName}</TextRowVise>
                                        <TextRowVise style={styles.statusText}>{languageJson.Client_Label}</TextRowVise>
                                        <ViewRowVise style={styles.priceContainer}>
                                            <TextRowVise style={styles.priceText}>{languageJson.Price_Label}</TextRowVise>
                                            <TextRowVise style={styles.totalPriceText}>${data.clientPrice}.00</TextRowVise>
                                        </ViewRowVise>
                                    </View>
                                </View>
                            </ViewRowVise>                                     
                            :
                            <ViewRowVise style={styles.ImageContainer}>
                                <Image
                                    source={{uri:data.providerImage}}
                                    style={styles.imageStyle} />
                                <View style={styles.nameContainer}>
                                    <View>
                                        <TextRowVise style={styles.NameText}>{data.providerName}</TextRowVise>
                                        <TextRowVise style={styles.statusText}>{languageJson.Driver_Label}</TextRowVise>
                                        <ViewRowVise style={styles.priceContainer}>
                                            <TextRowVise style={styles.priceText}>{languageJson.Price_Label}</TextRowVise>
                                            <TextRowVise style={styles.totalPriceText}>${data.providerPrice}.00</TextRowVise>
                                        </ViewRowVise>
                                    </View>
                                </View>
                            </ViewRowVise>}
                            
                        <View style={styles.RatingContainer}>
                            <Text style={styles.rateUsText}>{languageJson.RateUs_Label}</Text>
                            <View style={styles.ratingStarsContainer}>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={rating}
                                    showRating={false}
                                    isDisabled={false}
                                    onFinishRating={val => setRating(val)}
                                    selectedColor={Colors.starColors}
                                    starContainerStyle={{ padding: 0, margin: 0 }}
                                    size={totalSize(3.75)}
                                />
                            </View>
                            <Text style={styles.veryGoodText}>{rating == 1 ? 'Worst' : rating == 2 ? 'Bad' : rating == 3 ? 'satisfactory' : rating == 4 ? languageJson.VeryGood_Label : 'Excellent'}</Text>
                            <TextInputRowVise
                                placeholder={languageJson.WriteComment_PlaceHolder}
                                placeholderTextColor={Colors.placeHolderTextColor}
                                autoCapitalize='none'
                                style={styles.textInput}
                                multiline={true}
                                textAlignVertical={'top'}
                            />
                        </View>

                        {
                        
                            data.userType != 'client' ?
                                        <View>
                                            <ViewRowVise style={styles.ImageContainer}>
                                            <Image
                                                resizeMode='cover'
                                                source={{uri:clientimage}}
                                                style={styles.imageStyle} />
                                            <View style={styles.nameContainer}>
                                                <View>
                                                    <TextRowVise numberOfLines={1} style={styles.NameText}>David </TextRowVise>
                                                    <TextRowVise style={styles.statusText}>{languageJson.Client_Label}</TextRowVise>                                                    
                                                </View>
                                            </View>
                                        </ViewRowVise>    

                                          <View style={styles.RatingContainer}>
                                                <Text style={styles.rateUsText}>{languageJson.RateUs_Label}</Text>
                                                <View style={styles.ratingStarsContainer}>
                                                    <AirbnbRating
                                                        count={5}
                                                        defaultRating={rating}
                                                        showRating={false}
                                                        isDisabled={false}
                                                        onFinishRating={val => setRating(val)}
                                                        selectedColor={Colors.starColors}
                                                        starContainerStyle={{ padding: 0, margin: 0 }}
                                                        size={totalSize(3.75)}
                                                    />
                                                </View>
                                                <Text style={styles.veryGoodText}>{rating == 1 ? 'Worst' : rating == 2 ? 'Bad' : rating == 3 ? 'satisfactory' : rating == 4 ? languageJson.VeryGood_Label : 'Excellent'}</Text>
                                                <TextInputRowVise
                                                    placeholder={languageJson.WriteComment_PlaceHolder}
                                                    placeholderTextColor={Colors.placeHolderTextColor}
                                                    autoCapitalize='none'
                                                    style={styles.textInput}
                                                    multiline={true}
                                                    textAlignVertical={'top'}
                                                />
                                            </View>

                                          </View>
                                          :
                             null             
                        }

                        <Button title={languageJson.RateNow_Button} containerStyle={{ backgroundColor: Colors.lightPurple, paddingVertical: height(1.8), marginTop: height(4) }} />
                    </KeyboardAwareScrollView>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView backgroundColor={Colors.ofwhite} />
        </Fragment>
    );
}

