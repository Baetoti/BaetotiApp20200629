import React, { Fragment, useState, createRef } from 'react';
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button/Button.component';
import { width, height, totalSize } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Modal from 'react-native-modal';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component';
import ImagePicker from 'react-native-image-crop-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../../utills/Colors';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';

export default function HelpCenterReport({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.suggestion_Screen,
    );
    const [isVisible, setIsVisible] = useState(false)
    const [showPickerModal, setShowPickerModal] = useState(false);
    const [image, setImage] = useState('')
    const imageFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            setShowPickerModal(false)
        });
    }
    const imageFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            setShowPickerModal(false)
        });
    }
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.white}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.white })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white,Colors.white,]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.Suggestion_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            extraScrollHeight={height(8)}>
                            <TextRowVise style={styles.textInputTitle}>title</TextRowVise>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={languageJson.enter_Title}
                                    textAlignVertical={"top"}
                                />
                            </View>
                            <TouchableOpacityRowVise style={styles.uploadContainer}
                              onPress={() => setShowPickerModal(!showPickerModal)}
                          >
                              {image == '' ?
                                  <View style={styles.imageContainer}>
                                      <EvilIcons name='image' size={width(10)} color={Colors.black} />
                                  </View> :
                                  <Image source={{ uri: image }} resizeMode='cover' style={styles.image} />
                              }
                              <View style={{ alignItems: 'center',alignSelf:'center' }}>
                                  {image == '' ?
                                      <Feather name='upload-cloud' size={width(8)} color={Colors.buttonBlue} /> :
                                      <AntDesign name='checkcircle' size={width(8)} color={Colors.buttonBlue} />
                                  }
                                  <Text style={styles.uploadText}>{languageJson.UploadanImage}</Text>
                              </View>
                          </TouchableOpacityRowVise>
                            <TextRowVise style={styles.textInputTitle}>{languageJson.Suggestion_Heading}</TextRowVise>
                            <View style={[styles.textInputContainer, { height: height(13) }]}>
                                <TextInput
                                    style={[styles.input, { height: height(11) }]}
                                    placeholder={languageJson.enter_Sugesstion}
                                    textAlignVertical={"top"}
                                    multiline={true}
                                />
                            </View>
                            <Button title={languageJson.Submit_Button} containerStyle={styles.submitButton}
                                onPress={() => setIsVisible(true)}
                            />
                        </KeyboardAwareScrollView>
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                backdropOpacity={0.8}
                containerStyle={{ padding: 0, margin: 0, justifyContent: 'center' }}
                isVisible={isVisible}>
                <View style={styles.modalContainer}>
                    <AntDesign name='checkcircle' size={totalSize(5)} color={Colors.buttonBlue} />
                    <Text style={styles.submitSucessFully}>{languageJson.submit_SucessFully}</Text>
                    <Button title={languageJson.ok_Button} containerStyle={styles.okButton}
                        onPress={() => { 
                            setIsVisible(false) 
                            navigation.goBack()
                        }}
                    />
                </View>

            </Modal>
            <ImagePickerModal
                isVisible={showPickerModal}
                onClose={() => setShowPickerModal(false)}
                imageFromGallery={imageFromGallery}
                imageFromCamera={imageFromCamera}
            />
            <SafeAreaView
                backgroundColor={'#F6F6F6'}
            />
        </Fragment>
    );
}
