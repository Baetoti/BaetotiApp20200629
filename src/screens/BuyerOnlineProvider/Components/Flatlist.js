import * as React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {width, height} from 'react-native-dimension';
import {Avatar} from 'react-native-elements'
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

/* =============================================================================
<List />
============================================================================= */
const List = ({data,onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.FlatListContainer}>
      {
        item.fev?
        <TouchableOpacity style={{position:"absolute",top:10,right:10}}>
            <Icon name={"heart"} style={{color:"red",fontSize:16,marginLeft:10}} />
        </TouchableOpacity>   
        :
        null
      }
   
      <Avatar rounded source={{uri:item.image}} size={width(18)} />
     <Text style={styles.restaurant}>{item.restaurant}</Text>
     <View style={[styles.flexRow,{marginTop:'1%' ,justifyContent:'flex-start',alignItems:'center'}]}>
              <Image source={require('../../../assets/buyerHome/star.png')} style={styles.startImage} />
        { item.star? <Text style={styles.startText}>{item.star}</Text>:null}
          <Image source={require('../../../assets/buyerHome/blue.png')} style={styles.dotImage} />
        {item.title?  <Text style={styles.categoryText}>{item.title}</Text>:null}
          </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      numColumns={2}
      style={{width:width(90)}}
      renderItem={renderItem}
      columnWrapperStyle={{justifyContent:'space-between'}}
      keyExtractor={item => item.code}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={()=><View style={{marginTop:width(4)}}></View>}
    />
  );
};

export default List;
