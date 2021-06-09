import React, {Fragment, createRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  FlatList,
} from 'react-native';
import styles from './DriverEditProfile.Style';
import Button from '../../components/Button/Button.component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Colors from '../../utills/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import arrowdownImage from '../../assets/Login/arrow-down.png';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import editImage from '../../assets/OverViewDetailAssets/edit2.png';
import doneImage from '../../assets/OverViewDetailAssets/done2.png';
import PostData from '../../DummyData/ProviderPost';
import {height} from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
import ChooseFile from '../../components/ChooseFile/ChooseFile.Component';
import DummyData from '../../DummyData/DriverEditProfile';
import {useSelector} from 'react-redux';

export default function DriverEditProfile({navigation}) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(
    state => state.Language.languageJson.Driver_Edit_Profile,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * States used
   */
  const [selectedValue, setSelectedValue] = useState(DummyData.nationality);
  const countries = ['Pakistan', 'India', 'UK', 'Brazil'];
  const [DateOfBirth, setDateOfBirth] = useState(DummyData.dob);
  const [ExpiryDate, setExpiryDate] = useState(DummyData.expiryDateID);
  const [licenseExpiry, setLicenseExpiry] = useState(
    DummyData.expiryDateLicense,
  );
  const [vehicleRegistrationExpiry, setVehicleRegistrationExpiry] = useState(
    DummyData.expiryDateVehicleReg,
  );
  const [vehicleAuthorizationExpiry, setVehicleAuthorizationExpiry] = useState(
    DummyData.expiryDateVehicleAuth,
  );
  const [medicalCheckUpExpiry, setMedicalCheckUpExpiry] = useState(
    DummyData.expiryDateMedical,
  );
  const [vehicleInsuranceExpiry, setVehicleInsuranceExpiry] = useState(
    DummyData.expiryDateVehicleIns,
  );
  const [dateFlag, setDateFlag] = useState('');
  const [gender, setGender] = useState('Male');
  const [mobileOs, setMobileOs] = useState('iOS');
  const [editEnabled, setEditEnabled] = useState(false);
  const [ID, setId] = useState([DummyData.idImage]);
  const [personal, setPersonal] = useState([DummyData.personalImage]);
  const [license, setLicense] = useState([DummyData.licenseImage]);
  const [vehicleRegistration, setVehicleRegistration] = useState([
    DummyData.vehicleRegis,
  ]);
  const [vehicleAuth, setVehicleAuth] = useState([DummyData.vehicleAuth]);
  const [medical, setMedical] = useState([DummyData.medical]);
  const [insurrance, setInsurrance] = useState([DummyData.vehicleInsurance]);

  /**
   * date ref to open programmatically
   */
  const dateRef = createRef(null);
  const renderCoverImages = ({item, index}) => (
    <Image source={{uri: item}} style={styles.coverImage} />
  );
  const [coverImages, setCoverImages] = useState(PostData.coverImages);
  const uploadImage = type => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'photo',
      cropping: true
    }).then(image => {
      if (type == 'ID') {
        setId([image.path]);
      } else if (type == 'personal') {
        setPersonal([image.path]);
      } else if (type == 'license') {
        setLicense([image.path]);
      } else if (type == 'vehicleRegistration') {
        setVehicleRegistration([image.path]);
      } else if (type == 'vehicleAuth') {
        setVehicleAuth([image.path]);
      } else if (type == 'vehicleInsurance') {
        setInsurrance([image.path]);
      } else if (type == 'medical') {
        setMedical([image.path]);
      }
      console.log(image);
    });
  };
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f8f0ed'} />
      <SafeAreaView style={(styles.container, {backgroundColor: '#f8f0ed'})} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{flex: 1}}>
          <MoreHeader
            isImage={true}
            onPress={()=>navigation.goBack()}
            imageInView={false}
            title={languageJson.Verification_Title}
            image={editEnabled ? doneImage : editImage}
            onRightIconPress={() => setEditEnabled(!editEnabled)}
          />
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              extraScrollHeight={height(8)}
              style={{marginTop: height(2)}}>
              <View
                style={[styles.headingTextContainer, {marginTop: height(0)}]}>
                <Text style={styles.headingText}>
                  {languageJson.YourNationality_Heading}
                </Text>
                <View style={styles.dropDownContainer}>
                  <ModalDropdown
                    options={countries}
                    dropdownStyle={styles.dropDown}
                    showsVerticalScrollIndicator={false}
                    disabled={!editEnabled}
                    onSelect={(index, value) => setSelectedValue(value)}
                    renderRow={(option, index, isSelected) => (
                      <View style={styles.dropDownItemContainer}>
                        <Text style={styles.dropDownItemText}>{option}</Text>
                      </View>
                    )}>
                    <View style={styles.dropDownselectedValueContainer}>
                      <ViewRowVise style={styles.innerItemsContainer}>
                        <Text style={styles.dropDownselectedValueText}>
                          {selectedValue}
                        </Text>
                        <Image
                          source={arrowdownImage}
                          resizeMode="contain"
                          style={styles.arrowdownImage}
                        />
                      </ViewRowVise>
                    </View>
                  </ModalDropdown>
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.DateOfBirth_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {DateOfBirth}
                    </Text>
                    <TouchableOpacity
                      disabled={!editEnabled}
                      onPress={() => {
                        setDateFlag('DOB');
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.IDNumber_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <TextInput
                    editable={editEnabled}
                    placeholder={DummyData.idNumber}
                    autoCapitalize="none"
                    onChangeText={val => console.log(val)}
                    style={styles.textInput}
                    returnKeyType="done"
                  />
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.ExpiryIDDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {ExpiryDate}
                    </Text>
                    <TouchableOpacity
                      disabled={!editEnabled}
                      onPress={() => {
                        setDateFlag('Expiry');
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled
                    ? languageJson.ID_Heading
                    : languageJson.ID_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('ID')}
                    disabled={!editEnabled}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={ID}
                    keyExtractor={item => item}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.headingTextContainer,
                  selectdLanguage == 'ar' && {alignItems: 'flex-end'},
                ]}>
                <Text style={styles.headingText}>
                  {languageJson.Gender_Heading}
                </Text>
                <ViewRowVise style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    disabled={!editEnabled}
                    style={styles.radioButton}
                    onPress={() => setGender('Male')}>
                    {gender === 'Male' ? <View style={styles.blueDot} /> : null}
                  </TouchableOpacity>
                  <Text style={styles.radioButtonText}>
                    {languageJson.Male_Label}
                  </Text>
                </ViewRowVise>
                <ViewRowVise style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    disabled={!editEnabled}
                    style={styles.radioButton}
                    onPress={() => setGender('Female')}>
                    {gender === 'Female' ? (
                      <View style={styles.blueDot} />
                    ) : null}
                  </TouchableOpacity>
                  <Text style={styles.radioButtonText}>
                    {languageJson.Female_Label}
                  </Text>
                </ViewRowVise>
              </View>
              <View
                style={[
                  styles.headingTextContainer,
                  selectdLanguage == 'ar' && {alignItems: 'flex-end'},
                ]}>
                <Text style={styles.headingText}>
                  {languageJson.smartphones_Heading}
                </Text>
                <ViewRowVise style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    disabled={!editEnabled}
                    style={styles.radioButton}
                    onPress={() => setMobileOs('iOS')}>
                    {mobileOs === 'iOS' ? (
                      <View style={styles.blueDot} />
                    ) : null}
                  </TouchableOpacity>
                  <Text style={styles.radioButtonText}>
                    {languageJson.iOS_Label}
                  </Text>
                </ViewRowVise>
                <ViewRowVise style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    disabled={!editEnabled}
                    style={styles.radioButton}
                    onPress={() => setMobileOs('Android')}>
                    {mobileOs === 'Android' ? (
                      <View style={styles.blueDot} />
                    ) : null}
                  </TouchableOpacity>
                  <Text style={styles.radioButtonText}>
                    {languageJson.Android_Label}
                  </Text>
                </ViewRowVise>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled
                    ? languageJson.PersonalPhoto_Heading
                    : languageJson.PersonalPhoto_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('personal')}
                    disabled={!editEnabled}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item}
                    data={personal}
                    renderItem={renderCoverImages}
                  />
                </View>
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
                      disabled={!editEnabled}
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled
                    ? languageJson.DrivingLicense_Heading
                    : languageJson.DrivingLicense_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('license')}
                    disabled={!editEnabled}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item}
                    data={license}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.ExpiryVehicleRegistrationDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {vehicleRegistrationExpiry}
                    </Text>
                    <TouchableOpacity
                      disabled={!editEnabled}
                      onPress={() => {
                        setDateFlag('vehicleRegistrationExpiry');
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled
                    ? languageJson.VehicleRegistration_Heading
                    : languageJson.VehicleRegistration_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('vehicleRegistration')}
                    disabled={!editEnabled}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item}
                    data={vehicleRegistration}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.ExpiryVehicleAuthorizationDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {vehicleAuthorizationExpiry}
                    </Text>
                    <TouchableOpacity
                      disabled={!editEnabled}
                      onPress={() => {
                        setDateFlag('vehicleAuthorizationExpiry');
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled? languageJson.VehicleAuthorization_Heading: languageJson.VehicleAuthorization_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('vehicleAuth')}
                    disabled={!editEnabled}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={vehicleAuth}
                    keyExtractor={item => item}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.ExpiryMedicalCheckupDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {medicalCheckUpExpiry}
                    </Text>
                    <TouchableOpacity
                      disabled={!editEnabled}
                      onPress={() => {
                        setDateFlag('medicalCheckUpExpiry');
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled ? languageJson.MedicalCheckup_Heading: languageJson.MedicalCheckup_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('medical')}
                    disabled={!editEnabled}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={medical}
                    keyExtractor={item => item}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.ExpiryVehicleInsuranceDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {vehicleInsuranceExpiry}
                    </Text>
                    <TouchableOpacity
                      disabled={!editEnabled}
                      onPress={() => {
                        setDateFlag('vehicleInsuranceExpiry');
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {editEnabled?languageJson.VehicleInsurance_Heading: languageJson.VehicleInsurance_HeadingEdit}
                </Text>
                {editEnabled && (
                  <ChooseFile
                    onPress={() => uploadImage('vehicleInsurance')}
                    selectdLanguage={selectdLanguage}
                    label={languageJson.ChooseFile_Label}
                    instruction={'pdf,png or jpg. max 10mb'}
                  />
                )}
                <View style={styles.coverImagesContainer}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={item => item}
                    data={insurrance}
                    renderItem={renderCoverImages}
                  />
                </View>
              </View>
            </KeyboardAwareScrollView>
            <Button
              title={languageJson.Submit_Button}
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
      </SafeAreaView>
    </Fragment>
  );
}
