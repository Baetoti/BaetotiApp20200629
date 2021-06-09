import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Slider from '@react-native-community/slider';
import Colors from '../../../utills/Colors'
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button/Button.component'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewRowVise from '../../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../../components/TextRowVise/TextRowVise.Component';
const categoriesList = [
    { key: 0, title: "Food & Drinks", isSelected: false },
    { key: 1, title: "Electronics", isSelected: false },
    { key: 2, title: "Grocery", isSelected: false },
    { key: 3, title: "Sports", isSelected: false },
    { key: 4, title: "Furniture", isSelected: false },
    { key: 5, title: "Fashion", isSelected: false },
]
export default function CurrentOrders({ isVisible, onPressConfirm, onPressClose }) {


    const languageJson = useSelector(state => state.Language.languageJson.Map_screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";

    const [selectedRadiusValue, setSelectedRadiusValue] = useState(3)
    const [categories, setCategories] = useState(categoriesList)

    const renderCategory = ({ item, index }) => {
        return (
            <View style={styles.categoryContainer}>
                <MaterialCommunityIcons name={item.isSelected ? "checkbox-marked" : "checkbox-blank-outline"} size={height(4)} color={item.isSelected ? Colors.buttonBlue : Colors.black}
                    onPress={() => {
                        let updatedCategories = [...categories];
                        updatedCategories[index].isSelected = !updatedCategories[index].isSelected;
                        setCategories(updatedCategories)
                    }} />
                <Text numberOfLines={1} style={styles.categoryTitle}>{item.title}</Text>
            </View>
        )
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            backdropOpacity={0.8}
            onBackButtonPress={onPressClose}
            onBackdropPress={onPressClose}
            isVisible={isVisible}>
            <View style={styles.container}>
                <ViewRowVise style={styles.row}>
                    <TextRowVise style={styles.selectRadiusHead}>Select Radius</TextRowVise>
                    <Text style={styles.selectRadiusHead}>{Number(selectedRadiusValue).toFixed(0)}</Text>
                </ViewRowVise>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Slider
                        style={{ width: width(70),transform : [{rotate:selectdLanguage == 'ar'? "180deg":"0deg"}] }}
                        minimumValue={1}
                        maximumValue={5}
                        value={(selectedRadiusValue)}
                        minimumTrackTintColor={Colors.buttonBlue}
                        maximumTrackTintColor={Colors.placeHolderTextColor}
                        onValueChange={(val) => setSelectedRadiusValue(val)}
                        step={1}
                    />
                    <ViewRowVise style={[styles.row, { marginTop: height(0.5) }]}>
                        <Text>1 {selectedDistanceUnit}</Text>
                        <Text>5 {selectedDistanceUnit}</Text>
                    </ViewRowVise>
                </View>
                <ViewRowVise style={styles.row}>
                    <Text style={styles.selectRadiusHead}>{languageJson.SelectCategories_Heading}</Text>
                </ViewRowVise>
                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    numColumns={2}
                    columnWrapperStyle={styles.columnStyle}
                />
                <Button title={languageJson.Confirm_Button} containerStyle={styles.button} onPress={() => onPressConfirm(selectedRadiusValue)} />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundWhite,
        paddingHorizontal: width(5),
        borderRadius: width(5),
        paddingBottom: height(2)
    },
    selectRadiusHead: {
        fontSize: width(3.5),
        color: Colors.black,
        fontWeight: 'bold',
    },
    row: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(3),
        alignSelf:'center'
    },
    button: {
        width: '70%',
        marginTop: height(3),
        backgroundColor: Colors.buttonBlue
    },
    categoryContainer: {
        marginTop: height(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%'
    },
    columnStyle: {
        justifyContent: "space-between"
    },
    categoryTitle: {
        color: Colors.black,
        fontSize: width(3.8)
    }
});


