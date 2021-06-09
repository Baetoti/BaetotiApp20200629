import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView
} from 'react-native';
import styles from './EditPostGallery.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import StepIndicator from '../../components/StepIndicatorCreateNew/StepIndicatorCreateNew.component';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import PostData from '../../DummyData/ProviderPost';
import { width, height } from 'react-native-dimension';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import { useSelector } from 'react-redux';

export default function EditPostGallery({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.EditPost_Gallery_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  /**
   * States used for cover and business logo images
   */
  const [coverImages, setCoverImages] = useState(PostData.coverImages);
  const [BusinessLogo, setBusinessLogo] = useState({
    key: 1,
    imageUri: 'data:image/png;base64,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'
  });
  /**
   * Cover Image Indidual View
   */
  const renderCoverImages = ({ item, index }) => (
    <Image
      source={{ uri: item.imageUri }}
      style={[styles.coverImage, { marginLeft: index == 0 ? 0 : width(3) }]}
    />
  );

  /**
   * Navigation Function
   */
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  }
  /**
   * Function to select Image from gallery
   */
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      cropping: true
    }).then(image => {
      var newCoverImages = coverImages;
      newCoverImages.push({
        key: coverImages.length,
        imageUri:
          image.path,
      });
      setCoverImages(coverImages => (coverImages = [...newCoverImages]));
    });
  }
  /**
   * Function to select Business Logo
   */
  const uploadBusinessLogo = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setBusinessLogo({
        key: coverImages.length,
        imageUri:
          image.path,
      })
    });
  }
  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
      <SafeAreaView backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={styles.container}>
          <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <HeaderAddNew
                backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
                title={languageJson.EditPost_Heading}
                hideRightIcon
                onPressBack={() => navigation.goBack()}
                containerStyle={{ marginTop: height(2) }}
              />
              <StepIndicator currentPosition={2} />
              <View style={styles.tagsContainer}>
                <ViewRowVise style={styles.tagsUpperContainer}>
                  <Text style={styles.inputTitle}>{languageJson.CoverImage_Heading}</Text>
                  <Text style={styles.optionalText}>
                    {coverImages.length}/3 {languageJson.Images_Label}
                  </Text>
                </ViewRowVise>

                <View style={styles.lineSeparator} />
                <TouchableOpacityRowVise style={styles.inputLocationContainer}
                  onPress={uploadImage}
                  disabled={coverImages.length == 3}
                >
                  <View style={styles.locationIconContainer}>
                    <Image
                      source={require('../../assets/AddNewAssets/cloud-upload.png')}
                      style={styles.locationIcon}
                      resizeMode={'contain'}
                    />
                  </View>
                  <Text style={styles.uploadVideoText}>{languageJson.UploadPhotos_Label}</Text>
                </TouchableOpacityRowVise>
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={coverImages}
                    renderItem={renderCoverImages}
                  />
                </View>

              </View>

              <View style={styles.tagsContainer}>
                <View style={styles.tagsUpperContainer}>
                  <Text style={styles.inputTitle}>Business Logo</Text>
                </View>
                <View style={styles.lineSeparator} />
                <TouchableOpacityRowVise style={styles.inputLocationContainer}
                  onPress={uploadBusinessLogo}
                  disabled={coverImages.length == 3}
                >
                  <View style={styles.locationIconContainer}>
                    <Image
                      source={require('../../assets/AddNewAssets/cloud-upload.png')}
                      style={styles.locationIcon}
                      resizeMode={'contain'}
                    />
                  </View>
                  <Text style={styles.uploadVideoText}>{languageJson.UploadPhoto_Label}</Text>
                </TouchableOpacityRowVise>
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={BusinessLogo ? [BusinessLogo] : []}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
              <View style={styles.tagsContainer}>
                <ViewRowVise style={styles.tagsUpperContainer}>
                  <Text style={styles.inputTitle}>{languageJson.InstagramGallery_Heading}</Text>
                </ViewRowVise>
                <View style={styles.lineSeparator} />
                {PostData.isInstaConnected == true ? (
                  <ViewRowVise style={styles.instaContentContainer}>
                    <Image
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1546574722-8267e1c67c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      }}
                      style={styles.instaConnectedImage}
                    />
                    <ViewRowVise style={styles.instaConnectedContainer}>
                      <View style={styles.instaTextContainer}>
                        <Text style={styles.connectWithText}>{languageJson.ConnectwithInstagram_Label}</Text>
                        <Text style={styles.instaText}>{languageJson.Instagram_label}</Text>
                      </View>
                      <View style={styles.connectedContainer}>
                        <Text style={styles.connectedText}>{languageJson.Connect_Label}</Text>
                      </View>
                    </ViewRowVise>
                  </ViewRowVise>
                ) : (
                    <View style={styles.instaContentContainer}>
                      <View style={styles.instaIconContainer}>
                        <Image
                          source={require('../../assets/AddNewAssets/instagram.png')}
                          style={styles.locationIcon}
                          resizeMode={'contain'}
                        />
                      </View>
                      <View style={styles.instaTextContainer}>
                        <Text style={styles.connectWithText}>{languageJson.ConnectwithInstagram_Label}</Text>
                        <Text style={styles.instaText}>{languageJson.Instagram_label}</Text>
                      </View>
                      <TouchableOpacity style={styles.connectContainer}>
                        <Text style={styles.connectText}>{languageJson.Connect_Label}</Text>
                      </TouchableOpacity>
                    </View>
                  )}
              </View>
            </ScrollView>
            <Button
              title={languageJson.Next_Button}
              onPress={() => navigation.navigate('EditPostItems')}
            />
          </View>
        </ LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  );
}
