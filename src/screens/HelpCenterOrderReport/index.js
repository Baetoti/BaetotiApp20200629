import React, { Fragment, useState, createRef } from 'react';
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component'
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import { width, height } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component';
import ImagePicker from 'react-native-image-crop-picker';

export default function HelpCenterReport({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.helpCenterReportOrder,
    );
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const item = route?.params?.item
    const [image, setImage] = useState('')
    const [showPickerModal, setShowPickerModal] = useState(false);
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
                    colors={[Colors.white,Colors.white]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.AnotherOrder_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            extraScrollHeight={height(8)}>
                            <View style={styles.flatListContainer}>
                                <ViewRowVise style={styles.namePriceContainer}>
                                    <Text style={styles.nameText}>{item.resturantName}</Text>
                                    <Text style={styles.priceText}>{`${currencyLabel} ${item.price}`}</Text>
                                </ViewRowVise>
                                <ViewRowVise style={styles.itemNameContainer}>
                                    <Text style={styles.foodText}>{item.food}</Text>
                                    <Text style={styles.timeDateText}>{`${item.date} ${item.time}`}</Text>
                                </ViewRowVise>
                            </View>
                            <View style={styles.furtherContainer}>
                                <TextRowVise style={styles.furtherDetailText}>{languageJson.Furtherdetail_Text}</TextRowVise>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder={languageJson.writeSomeThing_Text}
                                textAlignVertical={"top"}
                                multiline
                            />
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
