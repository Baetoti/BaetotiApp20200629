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
import styles from './CreateNewGallery.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import StepIndicator from '../../components/StepIndicatorCreateNew/StepIndicatorCreateNew.component';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import { width, height } from 'react-native-dimension';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
export default function CreateNewGallery({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.CreateNew_Gallery_Screen);
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * States used for images and insta connection
   */
  const [coverImages, setCoverImages] = useState([]);
  const [BusinessLogo, setBusinessLogo] = useState(null);
  const [isInstaConnected, setInstaConnected] = useState(false);
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
   * Method used to upload image from camera or gallery
   */
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
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
   * Method used to upload Business Logo from gallery
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
        <View style={styles.container}>
          <LinearGradient
            colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']} style={styles.container}>
            <View>
              <HeaderAddNew
                backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
                title={languageJson.CreateNew_Heading}
                hideRightIcon
                onPressBack={() => navigation.goBack()}
                containerStyle={{ marginTop: height(2) }}
              />
              <StepIndicator currentPosition={2} />
              <ScrollView showsVerticalScrollIndicator={false}>
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
                  <ViewRowVise style={styles.tagsUpperContainer}>
                    <Text style={styles.inputTitle}>{languageJson.BusinessLogo_Label}</Text>
                  </ViewRowVise>
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
                  {isInstaConnected == true ? (
                    <ViewRowVise style={styles.instaContentContainer}>
                      <Image
                        source={{
                          uri:
                            'https://images.unsplash.com/photo-1546574722-8267e1c67c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                        }}
                        style={styles.instaConnectedImage}
                      />
                      <View style={styles.instaConnectedContainer}>
                        <View style={styles.instaTextContainer}>
                          <Text style={styles.connectWithText}>{languageJson.ConnectwithInstagram_Label}</Text>
                          <Text style={styles.instaText}>{languageJson.Instagram_Label}</Text>
                        </View>
                        <View style={styles.connectedContainer}>
                          <Text style={styles.connectedText}>{languageJson.Connect_Label}</Text>
                        </View>
                      </View>
                    </ViewRowVise>
                  ) : (
                      <ViewRowVise style={styles.instaContentContainer}>
                        <View style={styles.instaIconContainer}>
                          <Image
                            source={require('../../assets/AddNewAssets/instagram.png')}
                            style={styles.locationIcon}
                            resizeMode={'contain'}
                          />
                        </View>
                        <View style={selectdLanguage == 'ar' ? [styles.instaTextContainer, { alignItems: 'flex-end' }] : styles.instaTextContainer}>
                          <Text style={styles.connectWithText}>{languageJson.ConnectwithInstagram_Label}</Text>
                          <Text style={styles.instaText}>{languageJson.Instagram_Label}</Text>
                        </View>
                        <TouchableOpacity style={styles.connectContainer}>
                          <Text style={styles.connectText}>{languageJson.Connect_Label}</Text>
                        </TouchableOpacity>
                      </ViewRowVise>
                    )}
                </View>
              </ScrollView>
              <Button
                title={languageJson.Next_Button}
                onPress={() => navigation.navigate('CreateNewItem')}
              />
            </View></LinearGradient></View>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />
    </React.Fragment>
  );
}
