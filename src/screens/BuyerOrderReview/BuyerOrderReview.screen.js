import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Colors from '../../utills/Colors';
import styles from './BuyerOrderReview.styles';
import { width, height } from 'react-native-dimension';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import { AirbnbRating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Button from '../../components/Button/Button.component'
export default function BuyerHome({ route, navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.OrderReview_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * State used for data required for the screen
   */
  const [data, setData] = useState(
    [
      {
        key: 0,
        itemname: 'Honey PenCake',
        itemId: 5623146,
        itemPrice: 140,
        rating: 4,
        comment: 'Pencake',
        shortDescription: 'Extra chess and Extra with honey',
        quantity: 1,
        itemimage: [
          require('../../assets/HomeAssets/Layer888copy2.png'),
          require('../../assets/HomeAssets/Layer928.png'),
          require('../../assets/HomeAssets/Layer935.png'),
        ],
        tags: ['Thaifood', 'Spicy'],
        description:
          'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        key: 1,
        itemname: 'Honey PenCake',
        itemPrice: 140,
        itemId: 5623120,
        quantity: 2,
        rating: 4,
        comment: 'Pencake',
        shortDescription: 'Extra chess and Extra...',
        itemimage: [
          require('../../assets/HomeAssets/Layer889copy2.png'),
          require('../../assets/HomeAssets/Layer889copy2.png'),
          require('../../assets/HomeAssets/Layer889copy2.png'),
        ],
        tags: ['Thaifood', 'Spicy'],
        description:
          'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ]
  );
  /**
   * Component for Individual Component
   */
  const renderItem = ({ item }) => {
    return (
      <View style={styles.flatlist}>
        <View style={styles.flatlistCont}>
          <Image source={item.itemimage[0]} style={styles.img} />
          <Text style={styles.heading}>{item.itemname}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
          <ViewRowVise style={styles.ratingCont}>
            <Text style={styles.rating}>{languageJson.Rating_Label}</Text>
            <AirbnbRating
              count={5}
              defaultRating={item.rating}
              onFinishRating={(val) => setData(data.map(items => items == item ? ({ ...items, rating: val }) : items))}
              showRating={false}
              isDisabled={false}
              selectedColor={Colors.starColors}
              starContainerStyle={{ padding: 0, margin: 0 }}
              size={width(4.5)}
            />
          </ViewRowVise>

          <Text style={styles.good}>{item.rating == 1 ? 'Worst' : item.rating == 2 ? 'Bad' : item.rating == 3 ? 'satisfactory' : item.rating == 4 ? 'Good' : 'Excellent'}</Text>
          <TextInput
            placeholder={languageJson.Writeyourcomment_Label + "..."}
            placeholderTextColor={Colors.grayDarker}
            autoCapitalize="none"
            style={selectdLanguage == 'ar' ? [styles.textInput, { textAlign: 'right' }] : styles.textInput}
            multiline={true}
            textAlignVertical={'top'}
          />
        </View>
      </View>
    );
  };
  return (
    <React.Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundWhite}
      />
      <SafeAreaView
        style={styles.container}
        backgroundColor={Colors.backgroundWhite}
      />

      <SafeAreaView style={styles.mainContainer}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}
        >
          <View style={styles.header}>
            <Header
              title={languageJson.Review_Heading}
              hideRightIcon
              onPressBack={() => navigation.goBack()}
              containerStyle={styles.headerContainer}
              titleStyle={styles.headerTitle}
              backIconContainerStyle={styles.backIconContainerStyle}
            />
            <Text style={styles.subHeading}>Give your Review to Provider</Text>
            <ViewRowVise
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: height(2),
              }}>
              <Text style={styles.id}>{languageJson.OrderID_Label + ':'}</Text>
              <Text style={styles.idNumber}>OR5630PO7890</Text>
            </ViewRowVise>
          </View>

          <KeyboardAvoidingView behavior='padding' >
            <ScrollView
              contentContainerStyle={{ paddingBottom: height(20) }} >
              <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={renderItem}
              />
              <Button title={languageJson.Submit_Button} containerStyle={{ backgroundColor: Colors.buttonBlue }} />
            </ScrollView>
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  );
}
