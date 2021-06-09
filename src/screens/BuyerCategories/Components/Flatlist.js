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
import styles from './styles';


const List = ({ data, onPress }) => {

  const renderItem = ({ item ,index }) => (
    <TouchableOpacity activeOpacity={0.8} style={[styles.FlatListContainer,{width:((index+1)%3==0)?"100%":'47.7%',marginTop:((index+1)%3==0)?10:0}]}
      onPress={() => onPress(item)}>
      <ImageBackground
        imageStyle={styles.imageStyles}
        style={[styles.imageBackground]}
        source={{ uri: item.categoryImage }}>
        {item.categoryName ? <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={[0.1, 0.9]}
          colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0)',]}
          style={styles.bottomContainerImageBackground}>
          <Text style={styles.titleText}>{item.categoryName}</Text>
        </LinearGradient> : null}
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      numColumns={3}
      style={{ width: width(90) }}
      renderItem={renderItem}
      columnWrapperStyle={{ justifyContent: 'space-between',flexWrap: 'wrap',  }}
      keyExtractor={item => item.code}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ marginTop: width(4) }}></View>}
    />
  );
};

export default List;
