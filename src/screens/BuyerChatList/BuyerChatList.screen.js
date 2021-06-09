import React, { useState, useEffect, createRef } from 'react';
import Container from '../../components/ChatListContainer/ChatListContainer.component';
import {
  View,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import styles from './BuyerChatList.styles';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import { createFilter } from 'react-native-search-filter';
import dataDummy from '../../DummyData/Chatlist';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import Feather from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';
import PopItemComponent from '../../components/PopItemComponent/PopItemComponent.Component';
const KEYS_TO_FILTERS = ['name'];




export default function BuyerHome({ route, navigation }) {

  /**
   * States for search and suggestion feature
   */
  const searchInput = createRef(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(false);

  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Messages_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)

  /**
   * Component for Individual Chat Item
   */
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('BuyerChat', { name: item.name, online: item.online, img: item.userImg, userType: 'Buyer' })} style={styles.flatListContainer}>
        <View style={styles.imgContainer}>
          <ImageBackground
            imageStyle={{ borderRadius: width(8.5) }}
            style={styles.imgBack}
            source={{
              uri: item.img,
            }}>
            {item.online && <View style={styles.greendot} />}
          </ImageBackground>
          <Image
            style={styles.userImg}
            source={{
              uri: item.userImg,
            }}
          />
        </View>
        <View style={styles.messageContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: height(1), alignItems: 'center' }}>
            {item.userMessage && <Feather name='arrow-down-right' size={17} color={color.gray} />}
            <Text numberOfLines={1} style={[styles.message, item.userMessage && { marginLeft: width(1.5), color: color.gray }]}>
              {item.message}
            </Text>
          </View>

        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.date}>10 Mar</Text>
          {item.incommingMessage && <View style={styles.blueDot} />}
        </View>
      </TouchableOpacity>
    );
  };
  const data = dataDummy.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  const data1 = dataDummy;
  return (
    <Container
      onBackPress={() => navigation.goBack()}
      title="Feature"
      back
      filter>
      <View
        style={{
          width: width(100),
          paddingHorizontal: width(5),
          paddingVertical: height(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <TouchableOpacity
          disabled={!search}
          activeOpacity={0.7}
          onPress={() => {
            Keyboard.dismiss()
            setSearch(false)
          }}
          style={[styles.icon, !search && { backgroundColor: 'transparent' }]}>
          {search && (
            <Image
              source={require('../../assets/buyerHome/arrow-left.png')}
              style={{
                width: width(4),
                height: height(1.5),
                tintColor: color.gray,
              }}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
        <TextRowVise style={styles.heading}>{search ? languageJson.Search : languageJson.Messages_Title}</TextRowVise>
        <TouchableOpacity
          onPress={() => {
            setSearch(true)
          }}
          disabled={search}
          activeOpacity={0.7}
          style={styles.search}>
          {!search && (
            <Image
              source={require('../../assets/buyerHome/search.png')}
              style={{ width: width(7), height: height(3), resizeMode: 'contain' }}
            />
          )}
        </TouchableOpacity>
      </View>
      {search && <TextRowVise style={styles.search}>{languageJson.Search}</TextRowVise>}
      {search && (
        <View style={{ width: width(90), alignSelf: 'center' }}>
          <TextInputRowVise
            onChangeText={setSearchTerm}
            placeholder={searchTerm ? data[0] && searchTerm.charAt(0).toLowerCase() == data[0].name.charAt(0).toLowerCase() ? searchTerm + data[0].name.slice(searchTerm.length, data[0].name.length) : '' : languageJson.Search}
            placeholderTextColor={color.opacitiveLightGray}
            style={{ fontSize: width(10), width: width(90), position: 'absolute' }}
          />

          <TextInput
            ref={searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder={''}
            placeholderTextColor={color.placeHolderTextColor}
            style={{ fontSize: width(10), width: width(90) }}
          />
          <TextRowVise
            style={{
              fontSize: width(4.5),
              color: color.black,
              fontWeight: 'bold',
              paddingTop: height(3),
              paddingBottom: height(2)
            }}>
            {languageJson.Results_Label}
          </TextRowVise>
        </View>
      )}
      <FlatList
        contentContainerStyle={{ paddingBottom: height(2) }}
        data={search ? data : data1}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

    </Container>
  );
}
