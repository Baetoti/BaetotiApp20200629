import React, { useState, Fragment } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './Modal.Style';
import { AirbnbRating } from 'react-native-ratings';
import multiplyImage from '../../assets/HomeAssets/multiply.png';
import angleLeft from '../../assets/HomeAssets/angle-left.png';
import angleRight from '../../assets/HomeAssets/angle-right.png'
import ellipseImage from '../../assets/HomeAssets/Ellipse.png'
import Modal from 'react-native-modal';
import { SliderBox } from "react-native-image-slider-box"
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import { useNavigation } from '@react-navigation/native'
export default function CurrentOrders({ isVisible, selectedItem, onPress }) {
    const navigation = useNavigation()
    const languageJson = useSelector(state => state.Language.languageJson.HoneyPancake_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";

    const _showTags = ({ item }) => {
        return (
            <View style={styles.tagsViewContainer}>
                <Text style={styles.tagsText}>{item}</Text>
            </View>
        )
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            backdropOpacity={0.8}
            // backdropColor='#495767'
            isVisible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.sliderBoxContainer}>
                    <SliderBox
                        images={selectedItem?.itemimage}
                        parentWidth={width(90)}
                        sliderBoxHeight={height(35)}
                        dotColor='transparent'
                        dotStyle={styles.dotStyle}
                        ImageComponentStyle={styles.sliderImage}
                        paginationBoxStyle={{ alignSelf: 'flex-start' }}
                        paginationBoxVerticalPadding={height(3)}
                    // currentImageEmitter={index => console.log(index)}
                    />
                    <View style={styles.crossButtonContainer}>
                        <TouchableOpacity style={styles.crossButton}
                            onPress={onPress}>
                            <Image source={multiplyImage}
                                resizeMode='contain'
                                style={styles.multiplyImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.priceContainer}>
                        <View style={styles.priceView}>
                            <Text style={styles.price}> {selectedItem.price ? selectedItem.price : selectedItem.itemPrice}
                                <Text style={styles.currency}>{selectedCurrency == "USD" ? "$" : "SAR"}</Text>
                            </Text>
                            <View style={styles.perUnitContainer}>
                                <Text style={styles.perUnit}>{selectedItem.perUnit}</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <Image source={angleLeft}
                                style={styles.angleLeft} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={angleRight}
                                style={styles.angleRight} />
                        </TouchableOpacity>
                    </View> */}
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ height: height(60), marginBottom: height(2) }}>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.itemNameText}>{selectedItem?.itemname}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                            onPress()
                            navigation.navigate('Rating')
                        }} style={styles.ratingStarsContainer}>
                     
                            <AirbnbRating
                                count={5}
                                defaultRating={selectedItem?.ratings}
                                showRating={false}
                                isDisabled={true}
                                selectedColor='#FFBD2F'
                                starContainerStyle={{ padding: 0, margin: 0 }}
                                size={totalSize(1.8)}
                            />
                        
                        <Text style={styles.ratingText}>4.0</Text>
                        <Text style={styles.ratingText}>(224)</Text>
                        </TouchableOpacity>
                    <View style={styles.itemNamePicContainer}>
                        <Text style={styles.panCakeText}>{selectedItem?.cat}</Text>
                        <Image source={ellipseImage}
                            style={styles.ellipseImage}
                            resizeMode='contain' />
                        <Text style={styles.HoneyText}>{selectedItem?.subCat}</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        <TextRowVise style={styles.tagText}>{languageJson.Tags_Heading}</TextRowVise>
                        <FlatList
                            ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                            style={styles.itemFlatlistContainer}
                            data={selectedItem?.tags}
                            showsHorizontalScrollIndicator={false}
                            renderItem={_showTags}
                            horizontal={true}
                            keyExtractor={item => item.key}
                        />
                    </View>
                    {/* <View style={styles.descriptionTextContainer}>
                        <TextRowVise style={styles.descriptionText}>{languageJson.Comment}</TextRowVise>
                        <TextRowVise style={styles.allDescriptionText}>{selectedItem?.comment}</TextRowVise>
                    </View> */}
                    <View style={styles.descriptionTextContainer}>
                        <TextRowVise style={styles.descriptionText}>{languageJson.Description_Heading}</TextRowVise>
                        <Text style={styles.allDescriptionText}>{selectedItem?.description}</Text>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}

