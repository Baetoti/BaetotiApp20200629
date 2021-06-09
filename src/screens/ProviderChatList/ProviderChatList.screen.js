import React, { useState, createRef } from 'react';
import Container from '../../components/ChatListContainer/ChatListContainer.component';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import styles from './ProviderChatList.styles';
import color from '../../utills/Colors';
import { width, height } from 'react-native-dimension';
import { createFilter } from 'react-native-search-filter';
import { useSelector } from 'react-redux';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import dataDummy from '../../DummyData/ProviderChatListData';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const KEYS_TO_FILTERS = ['name'];
export default function ProviderChatList({ route, navigation }) {
  /**
   * Search input reference
   */
  const searchInput = createRef(null);
  /**
   * States used for search
   */
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(false);
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.NewMessage_Screen)
  const languageJson1 = useSelector(state => state.Language.languageJson.Messages_Screen)
  const languageJson2 = useSelector(state => state.Language.languageJson.Chat_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * Component for Individual Item
   */
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacityRowVise activeOpacity={0.7}
        onPress={() => navigation.navigate('BuyerChat', { name: item.name, online: item.online, userType: 'provider' })}
        style={[styles.flatListContainer, search && { width: width(90) }]}>
        <View style={styles.imgContainer}>
          <ImageBackground
            imageStyle={{ borderRadius: width(8.5) }}
            style={styles.imgBack}
            source={{
              uri: item.userImg
            }}
          />
        </View>
        <View style={styles.messageContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <TextRowVise numberOfLines={1} style={styles.message}>
            {item.online ? languageJson2.Online_Label : languageJson2.Offline_Label}
          </TextRowVise>
        </View>
      </TouchableOpacityRowVise>
    );
  };
  /**
   * New Filtered Data
   */
  const data1 = dataDummy;
  const data = dataDummy.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  return (
    <Container
      onBackPress={() => navigation.goBack()}
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
        <Text style={styles.heading}>{search ? languageJson1.Search : languageJson1.Messages_Title}</Text>
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
      {search && <TextRowVise style={styles.search}>{languageJson1.Search}</TextRowVise>}
      {search && (
        <View style={{ width: width(90), alignSelf: 'center' }}>
          <TextInputRowVise
            onChangeText={setSearchTerm}
            placeholder={searchTerm ? data[0] && searchTerm.charAt(0).toLowerCase() == data[0].name.charAt(0).toLowerCase() ? searchTerm + data[0].name.slice(searchTerm.length, data[0].name.length) : '' : languageJson1.Search}
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
          <Text
            style={{
              fontSize: width(4.5),
              color: color.black,
              fontWeight: 'bold',
              paddingTop: height(3),
              paddingBottom: height(2)
            }}>
            {languageJson1.Results_Label}
          </Text>
        </View>
      )}
      <View style={{ height: search ? height(56) : height(74), paddingRight: width(2), }}>
        <AlphaScrollFlatList
          data={search ? data.sort((prev, next) => prev.name.localeCompare(next.name)) : data1.sort((prev, next) => prev.name.localeCompare(next.name))}
          renderItem={renderItem.bind(this)}
          scrollKey={'name'}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          reverse={false}
          hideSideBar={search}
          scrollBarColor={color.placeHolderTextColor}
          activeColor={color.black}
          itemHeight={height(20)}
          contentContainerStyle={{ paddingBottom: height(4) }}

        />
      </View>
    </Container>
  );
}
