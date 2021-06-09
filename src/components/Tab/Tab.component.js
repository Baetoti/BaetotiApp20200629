import React from 'react';
import { Text, TouchableOpacity, FlatList, View } from 'react-native';
import styles from './Tab.Styles';
import { useSelector } from 'react-redux';

const Component = ({
  options,
  selectedIndex,
  containerStyle,
  textStyle,
  renderSelectedTabFooter,
  selectedTextColor,
  textColor,
  onChangeTab,
  tabContainerStyle,
  selectedTabText,
  contentContainerStyle,
  flatListStyle,
  inverted
}) => {
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const renderTab = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.tabContainerStyle, tabContainerStyle ? tabContainerStyle : {}]}
          onPress={() => onChangeTab(item, index)}>
          <Text numberOfLines={1} style={selectedTabText && selectedIndex == index ? selectedTabText : [styles.tabText, textStyle ? textStyle : {},
          { color: selectedIndex == index ? selectedTextColor : textColor }]}>{item}</Text>
          <View style={styles.selectedHightedComponentContainer}>
            {selectedIndex == index && renderSelectedTabFooter()}
          </View>
      </TouchableOpacity>
    )
  }
  return (
    <View
      style={[styles.container, containerStyle ? containerStyle : {}]}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        inverted={selectdLanguage=='ar'?true :inverted}
        data={options ? options : []}
        renderItem={renderTab}
        keyExtractor={item => item}
        style={[flatListStyle ? flatListStyle : {},]}
        contentContainerStyle={[contentContainerStyle ? contentContainerStyle : {}]}
      />
    </View>
  );
};

export default Component;
