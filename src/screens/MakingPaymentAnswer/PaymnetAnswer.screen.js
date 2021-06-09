import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, Text,ScrollView,TextInput} from 'react-native';
import styles from './PaymnetAnswer.styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Button from '../../components/Button/Button.component'
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component';
import ImagePicker from 'react-native-image-crop-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../utills/Colors';
import { width, height } from 'react-native-dimension';
export default function BuyerSetting({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.FaqAnswer_Screen,
    );
    const item = route?.params.item
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
                style={(styles.container, { backgroundColor:Colors.white })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white,Colors.white]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.Answer_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        <ScrollView contentContainerStyle={{paddingBottom:height(2)}}
                        showsVerticalScrollIndicator={false}
                        >
                            
                        <View style={[styles.answerContainer,
                            item.steps 
                            ? null
                            :{borderBottomWidth:0.5,borderBottomColor:Colors.placeHolderTextColor,marginHorizontal:width(5)} ]}>
                            <Text style={{
                                    fontSize:20,
                                    fontStyle:'normal',
                                    fontWeight:'bold',
                                    marginVertical:height(2),
                                    marginHorizontal:width(0),
                                
                            }}>{item.question}</Text>
                            <TextRowVise style={styles.answerText}>{item.answer}</TextRowVise>
                        </View>
                        {item.steps&&(
                            <View style={{paddingBottom:height(2),marginHorizontal:width(5),
                                borderBottomColor:Colors.placeHolderTextColor,borderBottomWidth:0.5}}> 
                                {item.steps.map((steps,index) =>(
                                   <ViewRowVise style={styles.stepsContainer}>
                                    <Text style={styles.indexText}>{index+1}</Text>
                                    <Text style={styles.stepsText}>{steps}</Text>
                                   </ViewRowVise>
                                ))}
                            </View>
                        )}
                        {item.isShow&&(
                            <>
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
                          <View style={styles.furtherContainer}>
                              <TextRowVise>{languageJson.Furtherdetail_Text}</TextRowVise>
                          </View>
                          <TextInput
                                style={styles.input}
                                placeholder={languageJson.writeSomeThing_Text}
                                textAlignVertical={"top"}
                                multiline
                            />
                          </>
                        )}
                        <Text style={styles.helpFulText}>{languageJson.helpFul_Text}</Text>
                        <Button title={languageJson.yes_Button} containerStyle={styles.yesButton}
                        onPress={()=>navigation.navigate('Thankyou')}
                        />
                        <Button title={languageJson.No_Button} containerStyle={styles.noButton}
                        onPress={()=>navigation.navigate('Thankyou')}
                        />
                        </ScrollView>
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
