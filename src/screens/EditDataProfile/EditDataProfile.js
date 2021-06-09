import React, { Fragment, createRef, useState ,useEffect } from 'react';
import {
    View, Text, SafeAreaView, TouchableOpacity, Image, StatusBar, TextInput
} from 'react-native';
import styles from './EditProfile.Style';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { width, height, totalSize } from 'react-native-dimension';
import Button from '../../components/Button/Button.component';
import profileImageLogo from '../../assets/Login/profile.png';
import emailImage from '../..//assets/Login/email.png';
import lockImage from '../..//assets/Login/lock.png';
import global from '../..//assets/Login/global.png';
import { useDispatch , useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import ImagePickerModal from '../../components/ImagePickerModal/ImagePickerModal.Component'
import Spinner from 'react-native-loading-spinner-overlay';
import Services from "../../API/services"
import RadioButtonRN from 'radio-buttons-react-native';
import { login } from '../../Redux/Actions/Auth';
const data = [
    {
      id: 'Male',
      label: 'Male'
     },
     {
      id: 'Female',
      label: 'Female'
     }
    ];

    

export default function Login({ navigation }) {
    const languageJson = useSelector(
        state => state.Language.languageJson.EditProfile_Screen,
    );
    const dispatch = useDispatch()
    const email = createRef(null)
    const password = createRef(null)
    const [showPickerModal, setShowPickerModal] = useState(false);
    const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')
    const uploadImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setProfileImage(image.path)
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

      const [firstname, setfirstname] = useState("")
      const [lastname, setlastname] = useState("")
      const [emailmn, setemail] = useState("")
      const [gender, setgender] = useState("")


      const user = useSelector(
        state => state.Auth.user,
      ); 
    
      useEffect(() => {
        console.log(JSON.stringify(user))
        setfirstname(user.firstName)
        setlastname(user.lastName)
        setemail(user.email)
        setgender(user.gender)
      }, [])


  const [spinner, setspinner] = useState(false)
  const UserRegister = async () => {
    try {     
        setspinner(true)
        var formData = new FormData(); 
        formData.append('firstName', firstname);
        formData.append('lastName', lastname);
        formData.append('email', emailmn);
        formData.append('gender',gender);
        formData.append('dateOfBirth', '1994-02-17');
        formData.append('userID', user.userID);

        const {data} = await Services.UpdateProfile(formData)
        
        var temp = user
        temp["firstName"] = firstname
        temp["lastName"] = lastname
        temp["email"] = emailmn

        dispatch(login(temp))       
        console.log(temp);          
        // navigation.navigate('LoginSoc', { userID: data.userID })
        setspinner(false)
        navigation.goBack()

    }catch(error){
      alert("Something went wrong")
      setspinner(false)
      console.log(error);              
    }
}  


    return (
        <Fragment>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={{color:"blue",}}
            />
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundColor })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#FAF8F7']}
                    style={{ flex: 1 }}
                >
                    <MoreHeader
                        onPress={() => navigation.goBack()}
                        title={languageJson.EditProfile_Heading} isImage={true} imageInView={false} />
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        extraScrollHeight={height(8)}>
                        <View style={styles.profileImageButton}>
                            <Image source={{ uri: profileImage }} resizeMode='cover' style={styles.profileImage} />
                        </View>
                        <TouchableOpacity
                            onPress={()=>setShowPickerModal(!showPickerModal)}>
                            <Text style={styles.changeProfileText}>{languageJson.changeProfilePhoto_Label}</Text>
                        </TouchableOpacity>
                        {/* <ViewRowVise style={styles.textFieldContainer}>
                            <Image style={styles.textFieldImage} resizeMode='contain' source={profileImageLogo} />
                            <TextInputRowVise
                                placeholder={languageJson.Username_PlaceHolder}
                                autoCapitalize="none"
                                placeholderTextColor={Colors.textBlack}
                                style={styles.textInput}
                                // ref={userName}
                                onSubmitEditing={() => {
                                    email.current.focus();
                                }}
                                returnKeyType="next"
                            />
                        </ViewRowVise> */}
                        <ViewRowVise style={styles.textFieldContainer}>
                            {/* <Image style={styles.textFieldImage} resizeMode='contain' source={emailImage} /> */}
                            <TextInputRowVise
                                placeholder={languageJson.Email_PlaceHolder}
                                autoCapitalize="none"
                                value={emailmn}
                                placeholderTextColor={Colors.textBlack}
                                style={styles.textInput}
                                ref={email}
                                onSubmitEditing={() => {
                                    password.current.focus();
                                }}    
                                onChangeText={(text)=>{
                                    setemail(text)
                                }}                             
                                returnKeyType="next"
                            />
                        </ViewRowVise>
                        <ViewRowVise style={styles.textFieldContainer}>
                            {/* <Image style={styles.textFieldImage} resizeMode='contain' source={lockImage} /> */}
                            <TextInputRowVise
                                placeholder={"First Name"}
                                autoCapitalize="none"
                                value={firstname}
                                placeholderTextColor={Colors.textBlack}
                                style={styles.textInput}
                                ref={password}                                
                                returnKeyType="done"
                                onChangeText={(text)=>{
                                    setfirstname(text)
                                }}                             
                            />
                        </ViewRowVise>
                        <ViewRowVise style={styles.textFieldContainer}>
                            {/* <Image style={styles.textFieldImage} resizeMode='contain' source={lockImage} /> */}
                            <TextInputRowVise
                                placeholder={"Last Name"}
                                autoCapitalize="none"
                                value={lastname}
                                placeholderTextColor={Colors.textBlack}
                                style={styles.textInput}
                                ref={password}                                
                                returnKeyType="done"
                                onChangeText={(text)=>{
                                    setlastname(text)
                                }}                             
                            />
                        </ViewRowVise>                        
                        {/* <ViewRowVise style={styles.textFieldContainer}> */}
                            {/* <Image style={styles.textFieldImage} resizeMode='contain' source={global} /> */}
                            {/* <TextInputRowVise
                                placeholder={languageJson.Adress_PlaceHolder}
                                autoCapitalize="none"
                                placeholderTextColor={Colors.textBlack}
                                style={styles.textInput}
                                ref={password}
                                secureTextEntry={true}
                                returnKeyType="done"
                            />
                        </ViewRowVise>         */}

                        <View style={{marginLeft:30}}>
                             <Text style={[styles.changeProfileText,{color:"#000",textAlign:"left"}]}>{"Gender"}</Text>
                            <RadioButtonRN                            
                                    data={data}
                                    box={false}
                                    circleSize={10}
                                    animationTypes={['zoomIn']}
                                    value={gender}
                                    onPress={(e) => console.log(e)}
                            />
                        </View>        
                                
                        <Button title={languageJson.updateButtonText} containerStyle={styles.containerStyle} onPress={()=>UserRegister()} />
                    </KeyboardAwareScrollView>
                </LinearGradient>
            </SafeAreaView>
            <ImagePickerModal
                isVisible={showPickerModal}
                onClose={() => setShowPickerModal(false)}
                imageFromGallery={uploadImage}
                imageFromCamera={imageFromCamera}
            />
            <SafeAreaView
                style={{ backgroundColor: '#FAF8F7' }}
            />
        </Fragment>
    )
}

