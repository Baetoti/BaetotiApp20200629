import React, {Fragment, createRef, useState} from 'react';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {height} from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
import ChooseFile from '../../components/ChooseFile/ChooseFile.Component';
import {useSelector} from 'react-redux';
export default function VerificationStep2({navigation}) {
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
  /**
   * date ref to open programmatically
   */
  const dateRef = createRef(null);
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#f8f0ed'}
      />
      <SafeAreaView style={(styles.container, {backgroundColor: '#f8f0ed'})} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
          style={{flex: 1}}>
          <MoreHeader
            isImage={true}
            imageInView={false}
            title={languageJson.Verification_Title}
            onPress={() => navigation.goBack()}
          />
          <VerificationStepIndicator currentPosition={1} />
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
                  {languageJson.ExpiryIDDate_Heading}
                </Text>
                <View style={styles.mainViewContainer}>
                  <ViewRowVise style={styles.innerItemsContainer}>
                    <Text style={styles.dropDownselectedValueText}>
                      {ExpiryDate}
                    </Text>
                    <TouchableOpacity
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
                  {languageJson.ID_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
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
                  {languageJson.PersonalPhoto_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
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
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>
                  {languageJson.DrivingLicense_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
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
                  {languageJson.VehicleRegistration_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
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
                  {languageJson.VehicleAuthorization_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
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
                  {languageJson.MedicalCheckup_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
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
                  {languageJson.VehicleInsurance_Heading}
                </Text>
                <ChooseFile
                  selectdLanguage={selectdLanguage}
                  label={languageJson.ChooseFile_Label}
                  instruction={'pdf,png or jpg. max 10mb'}
                />
              </View>
            </KeyboardAwareScrollView>
            <Button
              title={languageJson.Submit_Button}
              onPress={() => navigation.navigate('VerificationStep3')}
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
