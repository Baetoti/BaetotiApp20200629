import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './TagsSelectionModal.Style';
import Modal from 'react-native-modal';
import Colors from '../../utills/Colors'
import { useSelector } from 'react-redux'
import tagsIcon from '../../assets/OverViewDetailAssets/tagsIcon.png';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component';
import TextInputRowVise from '../TextInputRowVise/TextInputRowVise.Component';
import searchImage from '../../assets/buyerHome/search.png';
export default function Components({ isVisible, tags, onSelect, onClose }) {
  /**
     * Reading Screen Data from redux depending on selected language
     */
  const languageJson = useSelector(
    state => state.Language.languageJson.EditPost_Overview_Screen,
  );
  const [tagsData,setTagsData]=useState(tags)
  window.tagSearch = [...tags];
  useEffect(()=>{
    setTagsData([...tags])
    window.tagSearch = [...tags];
  },[isVisible])
  /**
   * Render Individual Tag
   */
  const renderTag = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.tagButtonContainer,
          {
            backgroundColor: Colors.purplePrimary
          },
        ]}
        onPress={() => {
          onClose()
          onSelect(item)
        }}>
        <Image
          source={tagsIcon}
          style={styles.tagButtonImage}
          resizeMode={'contain'}
        />
        <Text
          style={[
            styles.tagButtonText,
            {
              color:
                true
                  ? Colors.backgroundWhite
                  : Colors.purplePrimary,
            },
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };
  const search = (val) => {
    const newData =  window.tagSearch.filter((item) => {
      const itemData = `${item.label.toUpperCase()} ${item.label.toUpperCase()} ${item.label.toUpperCase()} `;
      const textData = val.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setTagsData(newData);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      backdropOpacity={0.8}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical:height(2)}}
        >
          <View style={styles.row}>
            <Text style={styles.headingText}>{languageJson.Tags_Heading}</Text>
            <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
              <AntDesign name={"closecircle"} size={height(3)} color={Colors.grayDarker} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <ViewRowVise style={styles.searchInnerContainer}>
              <Image style={styles.searchImage}
                source={searchImage} />
              <TextInputRowVise style={styles.searchText}
                placeholderTextColor={Colors.lightGray}
                placeholder={languageJson.Search_Label}
                onChangeText={(val)=>search(val)} />
            </ViewRowVise>
          </View>
          <View style={styles.tagFlatlistContainer}>
            {tagsData.map(renderTag)}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

