import React, { Fragment, createRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import styles from './VerificationStep2.Style';
import Button from '../../components/Button/Button.component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Colors from '../../utills/Colors';
import arrowdownImage from '../../assets/Login/arrow-down.png';
import DatePicker from 'react-native-datepicker';
import VerificationStepIndicator from '../../components/VerificationStepIndicator/VerificationStepIndicator.Component';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { height } from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
import ChooseFile from '../../components/ChooseFile/ChooseFile.Component';
import { useSelector } from 'react-redux';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component';
import ImagePicker from 'react-native-image-crop-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"

export default function VerificationStep2({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.Verification_Step2_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * States used
   */
  const [selectedValue, setSelectedValue] = useState(
    languageJson.Dob_PlaceHolder,
  );
  const countries = ['Pakistan', 'India', 'Uk', 'Brazil'];
  const [DateOfBirth, setDateOfBirth] = useState('DD/MM/YY');
  const [ExpiryDate, setExpiryDate] = useState('DD/MM/YY');
  const [licenseExpiry, setLicenseExpiry] = useState('DD/MM/YY');
  const [vehicleRegistrationExpiry, setVehicleRegistrationExpiry] = useState(
    'DD/MM/YY',
  );
  const [vehicleAuthorizationExpiry, setVehicleAuthorizationExpiry] = useState(
    'DD/MM/YY',
  );
  const [medicalCheckUpExpiry, setMedicalCheckUpExpiry] = useState('DD/MM/YY');
  const [vehicleInsuranceExpiry, setVehicleInsuranceExpiry] = useState(
    'DD/MM/YY',
  );
  const [dateFlag, setDateFlag] = useState('');
  const [gender, setGender] = useState('Male');
  const [mobileOs, setMobileOs] = useState('iOS');
  const [image, setImage] = useState('')
  /**
   * date ref to open programmatically
   */
  const dateRef = createRef(null);
  const [isVisible, setIsVisible] = useState(false)
  const imageFromGallery = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        setImage(image.path)
        setIsVisible(false)
    });
}
const imageFromCamera = () => {
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        setImage(image.path)
        setIsVisible(false)
    });
}

const user = useSelector(
  state => state.Auth.user,
);

const [spinner, setspinner] = useState(false)

const [marrofID, setmarrofID] = useState("")
const [governmentID, setgovernmentID] = useState("")
const [emailmn, setemail] = useState("")

const UserRegister = async () => {
  try {     
      setspinner(true)
      var formData = new FormData(); 
      formData.append('marrofID', marrofID);
      formData.append('governmentID', governmentID);
      formData.append('expiryDate', '1994-02-17');
      formData.append('userID', user.userID);
      const {data} = await Services.Uploadproviderdoc(formData)      
      console.log(data);          
      navigation.navigate('VerificationStep3')
      setspinner(false)

  }catch(error){
    alert("Something went wrong")
    setspinner(false)
    console.log(error);              
  }
}  


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
            title={languageJson.Verification_Title}
            onPress={() => navigation.goBack()}
          />
          <VerificationStepIndicator currentPosition={1}
            indexcolor={Colors.purplePrimary}
          />
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              extraScrollHeight={height(8)}
              style={{ marginTop: height(2) }}>

              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.maroof_Id}
                </Text>
                <View style={styles.mainViewContainer}>
                  <TextInput
                    placeholder={languageJson.EnterNumber_PlaceHolder}
                    autoCapitalize="none"
                    onChangeText={val => console.log(val)}
                    style={styles.textInput}
                    returnKeyType="done"
                  />
                </View>
              </View>
              <View style={styles.orContainer}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  locations={[0.1, 0.7]}
                  colors={['#3C485800', '#3C4858']}
                  style={[styles.LinearGradient]}
                />
                <Text style={styles.orText}>{languageJson.OR_Text}</Text>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  locations={[0.1, 0.7]}
                  colors={['#3C4858', '#3C485800']}
                  style={[styles.LinearGradient]}
                />
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.goverment_Id}
                </Text>
                <View style={styles.mainViewContainer}>
                  <TextInput
                    placeholder={languageJson.EnterNumber_PlaceHolder}
                    autoCapitalize="none"
                    onChangeText={val => console.log(val)}
                    style={styles.textInput}
                    returnKeyType="done"
                  />
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.gov_Id_Pic}
                </Text>
                <ChooseFile
                  onPress={()=>setIsVisible(true)}
                  selectdLanguage={selectdLanguage}
                  image={image}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.ExpiryLicenceDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {licenseExpiry}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setDateFlag('licenseExpiry');
                        dateRef.current.onPressDate();
                      }}>
                      <Image
                        source={arrowdownImage}
                        resizeMode="contain"
                        style={styles.arrowdownImage}
                      />
                    </TouchableOpacity>
                  </ViewRowVise>
                </View>
              </View>

            </KeyboardAwareScrollView>
            <Button
              title={languageJson.Submit_Button}
              onPress={() =>UserRegister()}
              containerStyle={styles.containerStyle}
            />
            <DatePicker
              style={styles.DatePicker}
              showIcon={false}
              ref={dateRef}
              is24Hour={false}
              mode="date"
              format={'DD/MM/YYYY'}
              confirmBtnText="Confirm"
              androidMode={'spinner'}
              cancelBtnText="Cancel"
              onDateChange={date => {
                if (dateFlag === 'Expiry') {
                  setExpiryDate(date);
                } else if (dateFlag == 'licenseExpiry') {
                  setLicenseExpiry(date);
                } else if (dateFlag == 'vehicleRegistrationExpiry') {
                  setVehicleRegistrationExpiry(date);
                } else if (dateFlag == 'vehicleAuthorizationExpiry') {
                  setVehicleAuthorizationExpiry(date);
                } else if (dateFlag == 'medicalCheckUpExpiry') {
                  setMedicalCheckUpExpiry(date);
                } else if (dateFlag == 'vehicleInsuranceExpiry') {
                  setVehicleInsuranceExpiry(date);
                } else {
                  setDateOfBirth(date);
                }
              }}
            />
          </View>
        </LinearGradient>
        <ImagePickerModal
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                imageFromGallery={imageFromGallery}
                imageFromCamera={imageFromCamera}
            />
      </SafeAreaView>
    </Fragment>
  );
}
