import React, { Fragment, createRef, useState, } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList
} from 'react-native';
import styles from './Rating.Style';
import { AirbnbRating } from 'react-native-ratings';
import Button from '../../components/Button/Button.component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { height, width, totalSize } from 'react-native-dimension';
import ProgressBar from '../../components/ProgressBar/ProgressBar.Component';
import { useSelector } from 'react-redux';
import ImageExpandModal from '../../components/ImageExpandModal/ImageExpandModal.Component'
export default function Rating({ navigation }) {

  const languageJson = useSelector(
    state => state.Language.languageJson.Rating_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * States used
   */

  const [boardslist, setBoardlist] = useState([
    {
      key: '1',
      name: 'Carly West',
      image: 'https://images.unsplash.com/photo-1549966264-8bb54240f1b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      status: 'I am very happy to refer to anyone who enjoys online shopping.',
      rating: 4,
      orderImage: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80'
      ]

    },
    {
      key: '2',
      name: 'Kate Carter',
      image: 'https://images.unsplash.com/photo-1547404415-5eb20ddab016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      status: 'I am very happy with order, It was delivered on and very good quality',
      rating: 5,
      orderImage: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80'
      ]
    },
    {
      key: '3',
      name: 'Kelly Jones',
      image: 'https://images.unsplash.com/photo-1544098347-ba4cb1cbdd9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      status: 'Lace panel tops and nice pants followed. Excellent. Fun as well.',
      rating: 4,
      orderImage: [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80'
      ]
    },
  ])
  const [isExpandedImageVisible, setIsExpandedImageVisible] = useState(false)
  const [expandedImage, setExpandedImage] = useState(null)
  const _boardslist = ({ item }) => {
    return (
      <>
        <ViewRowVise
          style={styles.reviewflatListContainer}>
          <Image style={styles.imageAvatar} source={{ uri: item.image }} />
          <View style={styles.reviewRatingContainer}>
            <ViewRowVise style={styles.nameContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
            </ViewRowVise>
            <ViewRowVise style={styles.ratingStarContainer}>
              <AirbnbRating
                selectedColor={Colors.primaryBlue}
                count={5}
                showRating={false}
                isDisabled={true}
                defaultRating={item.rating}
                starContainerStyle={{ padding: 0, margin: 0 }}
                size={15}
              />
              <Text style={styles.dateText}>{item.rating} OUT OF 5, Oct 20, 2020</Text>
            </ViewRowVise>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </ViewRowVise>
        <ViewRowVise style={styles.imagesContainer}>
          {item.orderImage.map(item => {
            return (
              <TouchableOpacity onPress={()=>{
                setExpandedImage(item)
                setIsExpandedImageVisible(true)
              }}>
                <Image source={{ uri: item }} resizeMode='cover' style={styles.orderImage} />
              </TouchableOpacity>
              )
          })}
        </ViewRowVise>
      </>
    );
  };

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#f8f0ed'}
      />
      <SafeAreaView style={(styles.container, { backgroundColor: '#f8f0ed' })} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{ flex: 1 }}>
          <MoreHeader
            isImage={true}
            imageInView={false}
            title={languageJson.Rating_Heading}
            onPress={() => navigation.goBack()}
          />
          <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: height(2) }}
            >
              <ViewRowVise style={styles.ratingContainer}>
                <ViewRowVise
                  style={styles.ratingTextContainer}>
                  <Text style={styles.ratingText}>4.9</Text>
                  <Text style={styles.outoFText}>OUT OF 5</Text>
                </ViewRowVise>
                <View style={styles.startImageContainer}>
                  <ViewRowVise style={styles.startImageInnerContainer}>
                    <AirbnbRating
                      count={5}
                      defaultRating={4}
                      showRating={false}
                      selectedColor={Colors.buttonBlue}
                      isDisabled={true}
                      starContainerStyle={{ padding: 0, margin: 0 }}
                      size={width(2.5)}
                    />
                  </ViewRowVise>
                  <Text style={styles.totalRatingText}>224 rating</Text>
                </View>
              </ViewRowVise>
              <ProgressBar number={5} progressPercentage={67} />
              <ProgressBar number={4} progressPercentage={14} />
              <ProgressBar number={3} progressPercentage={5} />
              <ProgressBar number={2} progressPercentage={3} />
              <ProgressBar number={1} progressPercentage={1} />
              <View
                style={styles.reviewsContainer}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={boardslist}
                  renderItem={_boardslist}
                  contentContainerStyle={{ paddingBottom: height(2) }}
                />
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
        <ImageExpandModal isVisible={isExpandedImageVisible} onClose={() => setIsExpandedImageVisible(false)}
          image={expandedImage} uriImage />
      </SafeAreaView>
    </Fragment>
  );
}
