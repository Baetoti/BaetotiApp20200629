import * as React from 'react';
import {
  FlatList,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { width } from 'react-native-dimension';
import styles from './styles';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../../components/ViewRowVise/ViewRowVise.Component'
import TextRowVise from '../../../components/TextRowVise/TextRowVise.Component'
import TouchableOpacityRowVise from '../../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'


/* =============================================================================
<List />
============================================================================= */
const List = ({ data }) => {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.availableNow_screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
  const isArabic = selectdLanguage == 'ar';
  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";

  const renderItem = ({ item }) => (
    <TouchableOpacityRowVise activeOpacity={1} style={styles.FlatListContainer}>
      {item.leftQuantity ?
        <ViewRowVise style={isArabic ? styles.leftItemArabic : styles.leftItem}>
          <Text style={styles.leftText}>
           remaining {item.leftQuantity} <Text style={styles.left}>{languageJson.left}</Text>
          </Text>
        </ViewRowVise>
        : null}
      <ImageBackground
        imageStyle={isArabic ? styles.imageStylesArabic : styles.imageStyles}
        style={styles.imageBackground}
        source={{ uri: item.image?item.image:"https://platerate.com/images/tempfoodnotext.png" }}>
        {item.distance ? <View style={[styles.flexRowContainer, { alignSelf: isArabic ? "flex-end" : 'flex-start' }]}>
          <Text style={styles.distane}>{item.distance} {selectedDistanceUnit}</Text>
        </View> : null}
      </ImageBackground>
      <View style={[styles.centerContainer]}>
        {item.itemName ? <TextRowVise numberOfLines={2} style={[styles.title, { alignSelf: isArabic ? "flex-end" : 'flex-start' }]}>
          {item.itemName}</TextRowVise> : null}
        <ViewRowVise style={styles.flexRow}>
          <Image source={require('../../../assets/buyerHome/star.png')} style={styles.startImage} />
          {item.stars ? <Text style={styles.startText}>{item.stars}</Text> : null}
          <Image source={require('../../../assets/buyerHome/blue.png')} style={styles.dotImage} />
          {item.restaurantIcon ? <Image source={item.restaurantIcon} style={styles.logoImage} /> : null}
          {true ? <Text style={styles.restaurantName}>{item.storeName}</Text> : null}
        </ViewRowVise>
        <ViewRowVise style={styles.priceContainer}>
          <View style={styles.priceContainer}>
            <Image source={item.subTitleImg} style={styles.catLogoImg} />
            <Text style={styles.categoryText}>{item.subCategoryName}</Text>
          </View>
          {item.itemPrice ?
            <ViewRowVise style={{ flexDirection: 'row' }}>
              <Text style={styles.price}>{isDollar ? (Number(item.itemPrice) * sarToDollar).toFixed(toFixed) : Number(item.itemPrice)}
                <Text style={styles.currency}>{selectedCurrency == "USD" ? "$" : "SAR"}</Text>
              </Text>
              <View style={styles.perUnitContainer}>
                <Text style={styles.perUnit}>{item.perUnit}</Text>
              </View>
            </ViewRowVise> : null}
        </ViewRowVise>
      </View>
    </TouchableOpacityRowVise>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.code}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginTop: width(4) }}></View>}
    />
  );
};

export default List;
