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
import { width, height, totalSize } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../utills/Colors';
import styles from './styles';
import { useSelector } from 'react-redux';



/* =============================================================================
<List />
============================================================================= */
const List = ({ data, onLoaction, onChatPress, onPress }) => {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Map_screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const providersFilter = useSelector(state => state.Configuration.showProviders)

  const renderItem = ({ item }) => (
    
    <TouchableOpacity activeOpacity={0.8} style={styles.FlatListContainer}
      onPress={onPress}>
      <ImageBackground
        imageStyle={styles.imageStyles}
        style={[styles.imageBackground]}
        source={{ uri: item.image }}>
        <View style={styles.onlineContainer}>
          <Text style={styles.onlineText}>{item.isOnline ? languageJson.Online_Label : languageJson.Offline_Label}</Text>
        </View>
        <View style={{ alignSelf: 'flex-end', marginRight: '10%' }}>
          <TouchableOpacity onPress={() => onLoaction(item.location.cordinate)} activeOpacity={0.8} >
            <Image source={item.logo} style={{ width: totalSize(3), height: totalSize(3), borderRadius: totalSize(1.75), resizeMode: 'cover'}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChatPress(item)} activeOpacity={0.8} style={{ justifyContent: 'center', marginTop: height(0.8),padding:5, alignItems: 'center', borderRadius: width(5), backgroundColor: color.black }} >
            <Image source={require('../../../assets/buyerHome/comment.png')} style={{ width: totalSize(1), height: width(3), resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
        {<LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={[0.1, 0.9]}
          colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)',]}
          style={styles.bottomContainerImageBackground}>
          {item.restaurantIcon ? <Image source={{ uri: item.restaurantIcon }} style={styles.logoImage} /> : null}
          <View style={[styles.centerContainer]}>
            {item.restaurantName ? <Text numberOfLines={1} ellipsizeMode='tail' style={styles.restaurantName}>{item.restaurantName}</Text> : null}
            <View style={[styles.flexRow, { marginTop: '1%', justifyContent: 'flex-start', alignItems: 'center' }]}>
              <Image source={require('../../../assets/buyerHome/star.png')} style={styles.startImage} />
              {item.stars ? <Text style={styles.startText}>{item.stars}</Text> : null}
              <Image source={require('../../../assets/buyerHome/blue.png')} style={styles.dotImage} />
              {item.category ? <Text style={styles.categoryText}>{item.category}</Text> : null}
            </View>
          </View>

        </LinearGradient>}
      </ImageBackground>

    </TouchableOpacity>
  );
  return (
    <FlatList
      data={providersFilter == "online" ? data.filter(item => item.isOnline) :
        providersFilter == 'offline' ? data.filter(item => !item.isOnline) :
          data}
      inverted={selectdLanguage == 'ar'}
      // style={{ width:width(100) }}
      renderItem={renderItem}
      keyExtractor={item => item.code}
      contentContainerStyle={[styles.container,selectdLanguage == 'ar'&&{paddingLeft:0,paddingRight:width(5)}]}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: width(3.5) }}></View>}
    />
  );
};

export default List;
