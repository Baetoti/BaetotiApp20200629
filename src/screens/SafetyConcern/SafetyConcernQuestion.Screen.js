import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './SafetyConcernQuestion.Styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import { safetyConcern } from '../../DummyData/helpCenter';
import Colors from '../../utills/Colors';
import { width, height } from 'react-native-dimension';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button/Button.component';
export default function BuyerSetting({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.SafetyConcern_Screen,
    );
    const [selectedIndex, setselectedIndex] = useState(-1)
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
    const _showVouchers = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacityRowVise style={styles.textButtonContainer} activeOpacity={1}
                    onPress={() => setselectedIndex(index)}
                >
                    <Ionicons name={index == selectedIndex ? 'md-radio-button-on' : 'md-radio-button-off-sharp'} size={width(8)} color={Colors.buttonBlue} />
                    <Text style={styles.titleText}>{item}</Text>
                </TouchableOpacityRowVise>
                <View style={styles.line} />
            </View>
        )
    }
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.white}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.white})}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white,Colors.white,]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.safetyConcern_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            extraScrollHeight={height(8)}>
                            <TextRowVise style={styles.infoText}>{languageJson.safetyInfo_Text}</TextRowVise>
                            {/* <FlatList
                                data={safetyConcern}
                                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                                renderItem={_showVouchers}
                                contentContainerStyle={styles.flatList}
                                showsVerticalScrollIndicator={false}
                            /> */}
                            <TouchableOpacityRowVise style={styles.uploadContainer}
                                onPress={() => setShowPickerModal(!showPickerModal)}
                            >
                                {image == '' ?
                                    <View style={styles.imageContainer}>
                                        <EvilIcons name='image' size={width(10)} color={Colors.black} />
                                    </View> :
                                    <Image source={{ uri: image }} resizeMode='cover' style={styles.image} />
                                }
                                <View style={{ alignItems: 'center' }}>
                                    {image == '' ?
                                        <Feather name='upload-cloud' size={width(8)} color={Colors.buttonBlue} /> :
                                        <AntDesign name='checkcircle' size={width(8)} color={Colors.buttonBlue} />
                                    }
                                    <Text style={styles.uploadText}>{languageJson.uploadImage_Text}</Text>
                                </View>
                            </TouchableOpacityRowVise>
                            <View style={styles.furtherContainer}>
                                <TextRowVise>{languageJson.Furtherdetail_Text}</TextRowVise>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder={languageJson.writeSomeThing_Text}
                                textAlignVertical={"top"}
                                multiline
                            />
                            <Button title={languageJson.send_Button} containerStyle={styles.sendButton}
                                onPress={() => navigation.navigate('Thankyou')}
                            />
                        </KeyboardAwareScrollView>

                    </View>
                </LinearGradient>
            </SafeAreaView>
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
