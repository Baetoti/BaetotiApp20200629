import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { width, height } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../utills/Colors';
import styles from './styles';
import { useSelector } from 'react-redux';




/* =============================================================================
<List />
============================================================================= */
const List = ({ data, onPress }) => {
  const languageJson = useSelector(state => state.Language.languageJson.BuyerHome_screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)

  /**
   * Reading Screen Data from redux 
   */
  const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
  const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
  const toFixed = useSelector(state => state.Configuration.toFixed)
  const isDollar = selectedCurrency == "USD";
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.FlatListContainer} activeOpacity={0.8}
      onPress={() => onPress(item)}>
      <ImageBackground
        imageStyle={styles.imageStyles}
        style={[styles.imageBackground]}
        source={{ uri: item.image }}>
        {item.leftQuantity ? <View style={styles.leftItem}>
          <Text style={styles.leftText}>
            {item.leftQuantity} <Text style={styles.left}>{languageJson.left}</Text>
          </Text>
        </View> : null}
        <View style={styles.bottomContainerImage}>
          {item.distance ? <View style={styles.flexRowContainer}>
            <Text numberOfLines={1} style={styles.distane}>{item.distance} {selectedDistanceUnit}</Text>
          </View> : null}
          {<LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[0.1, 0.9]}
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)',]}
            style={styles.bottomContainerImageBackground}>
            {item.restaurantIcon ? <Image source={item.restaurantIcon} style={styles.logoImage} /> : null}
            {item.restaurantName ? <Text style={styles.restaurantName}>{item.restaurantName}</Text> : null}
          </LinearGradient>}
        </View>
      </ImageBackground>
      <View style={[styles.centerContainer]}>
        <View style={[styles.flexStar, { justifyContent: 'flex-start' }]}>
          {item.title ? <Text style={styles.titleText} numberOfLines={1}>{item.title}</Text> : null}
          <Image source={require('../../../assets/buyerHome/star.png')} style={styles.startImage} />
          {item.stars ? <Text style={styles.startText}>{item.stars.toString().replace("(10)","")}</Text> : null}
        </View>
        <View style={[styles.flexRow, { marginTop: '1%', alignItems: 'center' }]}>
          {item.price ?
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.price}>{isDollar ? (Number(item.price) * sarToDollar).toFixed(toFixed) : Number(item.price)}
                <Text style={styles.currency}>{selectedCurrency == "USD" ? "$" : "SAR"}</Text>
              </Text>
              <View style={styles.perUnitContainer}>
                <Text style={styles.perUnit}>{item.perUnit}</Text>
              </View>
            </View> : null}
          <View style={{ flexDirection: "row", alignItems: 'center', width: '40%' }}>
            <Image source={require('../../../assets/buyerHome/blue.png')} style={styles.dotImage} />
            {item.category ? <Text numberOfLines={1} style={styles.categoryText}>{item.category}</Text> : null}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      inverted={selectdLanguage == 'ar'}
      style={{ paddingLeft: width(5) }}
      renderItem={renderItem}
      keyExtractor={item => item.code}
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginLeft: width(3.5) }}></View>}
    />
  );
};

export default List;
