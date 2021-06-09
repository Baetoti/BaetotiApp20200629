import React, { Fragment, useState, createRef, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './SignUp.Style';
import AuthHeader from '../../components/AuthHeader/AuthHeader.Component';
import RippleButton from '../../components/RippleButton/RippleButton.component';
import { height, width } from 'react-native-dimension';
import arrowdownImage from '../../assets/Login/arrow-down.png';
import emailImage from '../..//assets/Login/email.png';
import Colors from '../../utills/Colors';
import DatePicker from 'react-native-datepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import kidImage from '../../assets/Login/kid.png';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Actions/Language';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import Octicons from 'react-native-vector-icons/Octicons'
import ImagePicker from 'react-native-image-crop-picker';
import { setProvider, login } from '../../Redux/Actions/Auth';
import { setProfileComplete } from '../../Redux/Actions/Configuration';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component'
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"


export default function SignUp({ navigation, route }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.CreateAccount_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * Redux dispatch used to change language
   */
  const dispatch = useDispatch();
  /**
   * create states and refs to mannage the text inputs like userName,Email etc
   */
  const userName = createRef(null);
  const email = createRef(null);
  const password = createRef(null);
  const confirmPassword = createRef(null);
  const [selectedCountry, setSelectedCountry] = useState([]);
  /**
   * Date States and refernces used here to manage date Picker
   */
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showPickerModal, setShowPickerModal] = useState(false);
  const [isdate, setIsDate] = useState(false);
  const [profileImage, setProfileImage] = useState("https://icons-for-free.com/iconfiles/png/512/neutral+user-131964784832104677.png");
  const calendar = createRef(null);
  const nextScreen = route.params.nextScreen;
  const userID =  route.params.userID;

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [emailmn, setemail] = useState("")
  const [dateOfBirth, setdateOfBirth] = useState("")
  const [gender, setgender] = useState("")


  const [spinner, setspinner] = useState(false)
  const UserRegister = async () => {
    try {     
        setspinner(true)
        var formData = new FormData(); 
        formData.append('firstName', firstname);
        formData.append('lastName', lastname);
        formData.append('email', emailmn);
        formData.append('gender',selectedValue);
        formData.append('dateOfBirth', '1994-02-17');
        formData.append('userID', userID);

        const {data} = await Services.UpdateProfile(formData)
        dispatch(login(
          {
                'firstName': firstname,
                'lastName': lastname,
                'email': emailmn,
                'gender': selectedValue,
                'dateOfBirth': dateOfBirth,
                'userID': userID,        
          }
      ))       
        console.log(data);          
        // navigation.navigate('LoginSoc', { userID: data.userID })
        setspinner(false)

    }catch(error){
      alert("Something went wrong")
      setspinner(false)
      console.log(error);              
    }
}  

  /**
   *  create state to manage the gender drop down
   */
  const [selectedValue, setSelectedValue] = useState(
    languageJson.Gender_PlaceHolder,
  );
  /**
   * Method used to upload image from camera or gallery
   */
  const imageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setProfileImage(image.path)
      setShowPickerModal(false)
    });
  }
  const imageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setProfileImage(image.path)
      setShowPickerModal(false)
    });
  }
  /**
   * Function to handle date changes
   */
  const onChange = (event, selectedDate) => {
    setShow(!show);
    setDate(selectedDate.toDateString());
    setIsDate(!isdate);
  };
  return (
    <Fragment>
      {console.log(profileImage)}

      <SafeAreaView style={(styles.container, { backgroundColor: '#FCEAE6' })} />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={height(8)}>
          <DatePicker
            style={{ width: 0, height: 0 }}
            showIcon={false}
            ref={calendar}
            // onCloseModal={() => numberRef.current.focus()}
            mode="date"
            format="DD/MM/YYYY"
            minDate="01/01/1900"
            maxDate="01/01/2030"
            confirmBtnText="Confirm"
            androidMode={'spinner'}
            cancelBtnText="Cancel"
            onDateChange={date => {
              setDate(date);
              setIsDate(true);
            }}
          />
          <LinearGradient
            colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
            style={{ flex: 1 }}>
            <AuthHeader
              dropDownVisibel={true}
              selectdLanguage={selectdLanguage}
              onChangeLanguage={val => dispatch(setLanguage({ language: val }))}
            />
            <View style={styles.createAccountTextContainer}>
              <TextRowVise style={styles.createAccountText}>
                {languageJson.CompleteProfile}
              </TextRowVise>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage} />
              <TouchableOpacity style={styles.editContainer} onPress={()=> setShowPickerModal(true)}>
                <Octicons name="pencil" color={Colors.textBlack} size={height(2.3)} />
              </TouchableOpacity>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                      styles.textFieldInnerContainer,
                      { flexDirection: 'row-reverse' },
                    ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={profileImage} />
                <TextInput
                  placeholder={languageJson.FirstName}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, { textAlign: 'right' }]
                      : styles.textInput
                  }
                  onChangeText={(text)=>{
                    setfirstname(text)
                  }}
                  ref={userName}
                  onSubmitEditing={() => {
                    email.current.focus();
                  }}
                  returnKeyType="next"
                />
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                      styles.textFieldInnerContainer,
                      { flexDirection: 'row-reverse' },
                    ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={profileImage} />
                <TextInput
                  placeholder={languageJson.LastName}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  onChangeText={(text)=>{
                    setlastname(text)
                  }}
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, { textAlign: 'right' }]
                      : styles.textInput
                  }
                  ref={userName}
                  onSubmitEditing={() => {
                    email.current.focus();
                  }}
                  returnKeyType="next"
                />
              </View>
            </View>
            <View style={styles.textFieldContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                      styles.textFieldInnerContainer,
                      { flexDirection: 'row-reverse' },
                    ]
                    : styles.textFieldInnerContainer
                }>
                <Image style={styles.textFieldImage} source={emailImage} />
                <TextInput
                  placeholder={languageJson.Email_PlaceHolder}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.placeHolderTextColor}
                  onChangeText={(text)=>{
                    setemail(text)
                  }}
                  style={
                    selectdLanguage == 'ar'
                      ? [styles.textInput, { textAlign: 'right' }]
                      : styles.textInput
                  }
                  ref={email}
                  returnKeyType="done"
                />
              </View>
            </View>
            <View style={styles.dateTimePickerContainer}>
              <View style={styles.dateTextFieldContainer}>
                <View
                  style={
                    selectdLanguage == 'ar'
                      ? [
                        styles.dateTextInnerFieldContainer,
                        { flexDirection: 'row-reverse' },
                      ]
                      : styles.dateTextInnerFieldContainer
                  }>
                  <Image style={styles.textFieldImage} source={kidImage} />
                  {!isdate ? (
                    <TouchableOpacityRowVise
                      style={{ width: width(26) }}
                      onPress={() => calendar.current.onPressDate()}>
                      <Text style={styles.datePlaceholder}>
                        {languageJson.Dob_PlaceHolder}
                      </Text>
                    </TouchableOpacityRowVise>
                  ) : (
                      <TouchableOpacityRowVise
                        style={{ width: width(26) }}
                        onPress={() => calendar.current.onPressDate()}>
                        <Text style={styles.selectedDateText}>{date}</Text>
                      </TouchableOpacityRowVise>
                    )}
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={'date'}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </View>
              </View>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? [
                      styles.picekrTextFieldContainer,
                      { flexDirection: 'row-reverse' },
                    ]
                    : styles.picekrTextFieldContainer
                }>
                <ModalDropdown
                  options={['Male', 'Female']}
                  dropdownStyle={styles.genderDropDown}
                  showsVerticalScrollIndicator={false}
                  onSelect={(index, value) => setSelectedValue(value)}
                  renderRow={(option, index, isSelected) => (
                    <View style={styles.genderDropDownItemContainer}>
                      <Text style={styles.genderDropDownItemText}>
                        {option}
                      </Text>
                    </View>
                  )}>
                  <ViewRowVise style={styles.genderConainer}>
                    <Text style={styles.genderText}>{selectedValue}</Text>
                    <Image
                      source={arrowdownImage}
                      resizeMode="contain"
                      style={styles.arrowdownImage}
                    />
                  </ViewRowVise>
                </ModalDropdown>
              </View>
            </View>
           
            {/* <View style={styles.termPolicyContainer}>
              <View
                style={
                  selectdLanguage == 'ar'
                    ? { flexDirection: 'row-reverse' }
                    : { flexDirection: 'row' }
                }>
                <Text style={styles.descriptionText}>
                  {languageJson.ByclickingSignup_Text}{' '}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.termPolicyText}>
                    {languageJson.Termsofuse_Text}{' '}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>
                  {languageJson.comma}{' '}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.termPolicyText}>
                    {languageJson.PrivacyPolicy_Text}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>.</Text>
              </View>
              <Text style={styles.descriptionText}>
                {languageJson.youMayReceive_Text}
              </Text>
            </View> */}
            <RippleButton
              title={languageJson.CompleteProfile}
              onPress={() => {
                dispatch(setProfileComplete())
                if (nextScreen == 'provider')
                  dispatch(setProvider())
                else if (nextScreen == 'chat')
                  navigation.goBack()
                else if (nextScreen == 'login')
                  UserRegister()
                  // dispatch(login({ user: 'John Doe' }))
                else
                  navigation.replace(nextScreen)
              }}
              containerStyle={{
                marginTop: height(4),
                backgroundColor: Colors.buttonBlue,
                borderColor: Colors.buttonBlue,
                shadowColor: Colors.buttonBlue,
              }}
            />
           {nextScreen == 'login' &&
              <TouchableOpacity onPress={() => {
                dispatch(login({ user: ' ' }))                
              }}>
                <Text style={styles.skipText}>{languageJson.Skip}</Text>
              </TouchableOpacity>
            }
          </LinearGradient>
        </KeyboardAwareScrollView>
        <ImagePickerModal
        isVisible = {showPickerModal}
        onClose = {()=> setShowPickerModal(false)}
        imageFromGallery = {imageFromGallery}
        imageFromCamera = {imageFromCamera}
        />
      </SafeAreaView>
      <SafeAreaView style={(styles.container, { backgroundColor: '#F6F6F6' })} />
    </Fragment>
  );
}
