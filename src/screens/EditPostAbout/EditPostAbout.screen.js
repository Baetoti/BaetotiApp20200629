import React, { useState, createRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './EditPostAbout.styles';
import HeaderAddNew from '../../components/HeaderAddNew/HeaderAddNew.component';
import SelectDaysModal from '../../components/SelectDaysModal/SelectDaysModal.component';
import StepIndicator from '../../components/StepIndicatorCreateNew/StepIndicatorCreateNew.component';
import { FlatList } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../components/Button/Button.component';
import ModalDropdown from 'react-native-modal-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import { height } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import Popup from '../../components/PopUp/PopUp.Component';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
export default function EditPostAbout({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.EditPost_About);
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  /**
   * Reference of inputs to autofocus the next input
   */
  const calendar = createRef(null);
  const phoneRef = createRef(null);
  const emailAddressRef = createRef(null);
  const linksRef = createRef(null);
  /**
   * Different States used to manage the dynamic days
   * along with start and end time
   */
  const [isSelectDaysModalVisible, setSelectDaysModalVisibility] = useState(false);
  const [selectedIndex, setSelectedInex] = useState(0);
  const [selectedPrivacy, setSelectedPrivacy] = useState(languageJson.Private_Label);
  const [timeType, setTimeType] = useState('startTime');
  const [selectedDays, setSelectedDays] = useState([
    {
      startTime: { time: null, amPm: 'AM' },
      endTime: { time: null, amPm: 'AM' },
      day: 'Sunday',
      key: 0,
    },
  ]);
  const [show, setShow] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState('Please Wait');

  /**
   * Function used to change the state of Location hide Switch
   */
  const toggleSelectDaysModal = () => {
    setSelectDaysModalVisibility(!isSelectDaysModalVisible);
  };

  /**
   * Function used to show the selected days in the list
   */
  const onSubmitSelectDays = async data => {
    setSelectDaysModalVisibility(false);
    var newSelectedDays = [];
    const array = await data.map(item => {
      newSelectedDays.push({
        ...item,
        startTime: { time: null, amPm: 'AM' },
        endTime: { time: null, amPm: 'AM' },
      });
    });
    setSelectedDays(newSelectedDays);
  };

  /**
   * Function used to remove any day from the list
   */

  const removeDay = key => {
    var newSelectedDays = selectedDays.filter(item => item.key != key);
    setSelectedDays(newSelectedDays);
  };

  /**
   * Convert 24 hours time format to 12 hours fomate
   */

  const tConvert = time => {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? ' AM' : ' PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  };

  /**
   * Function used to update start and end time of any day
   */

  const setTimeArray = time => {
    let daysData = selectedDays;
    if (timeType == 'startTime') {
      daysData[selectedIndex].startTime.time = tConvert(time);
    } else {
      daysData[selectedIndex].endTime.time = tConvert(time);
    }
    setSelectedDays(selectedDays => (selectedDays = [...daysData]));
  };

  /**
   * Each Day Component
   */

  const renderDay = ({ item, index }) => {
    return (
      <View style={styles.dayContainer}>
        <View style={styles.lineSeparator} />
        <ViewRowVise style={styles.dayHeadContainer}>
          <Text style={styles.dayTitle}>{item.day}</Text>
          <TouchableOpacity onPress={() => removeDay(item.key)}>
            <Image
              source={require('../../assets/AddNewAssets/close-circle.png')}
              style={styles.closeIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </ViewRowVise>
        <ViewRowVise style={styles.daysContentContainer}>
          <View style={styles.timeContainer}>
            <TextRowVise style={styles.startTimeText}>
              {languageJson.startTime_Label}
            </TextRowVise>
            <TouchableOpacityRowVise
              onPress={() => {
                setSelectedInex(index);
                setTimeType('startTime');
                Platform.OS == 'ios'
                  ? calendar.current.onPressDate()
                  : setShow(true);
              }}
              style={styles.selectContainer}>
              <Text style={styles.timeText}>
                {item.startTime.time == null
                  ? languageJson.select_Label
                  : item.startTime.time}
              </Text>
            </TouchableOpacityRowVise>
          </View>
          <View style={styles.timeContainer}>
            <TextRowVise style={styles.startTimeText}>
              {languageJson.endTime_Label}
            </TextRowVise>
            <ViewRowVise style={styles.selectContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedInex(index);
                  setTimeType('endTime');
                  Platform.OS == 'ios'
                    ? calendar.current.onPressDate()
                    : setShow(true);
                }}>
                <Text style={styles.timeText}>
                  {item.endTime.time == null
                    ? languageJson.select_Label
                    : item.endTime.time}
                </Text>
              </TouchableOpacity>
            </ViewRowVise>
          </View>
        </ViewRowVise>
      </View>
    );
  };
  return (
    <React.Fragment>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      <SafeAreaView backgroundColor={Colors.backgroundColor} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
          style={styles.container}>
          <DatePicker
            style={styles.DatePicker}
            showIcon={false}
            ref={calendar}
            is24Hour={false}
            mode="time"
            confirmBtnText="Confirm"
            androidMode={'spinner'}
            cancelBtnText="Cancel"
            onDateChange={time => {
              setTimeArray(time);
            }}
          />
          <HeaderAddNew
            backIconContainerStyle={{ backgroundColor: Colors.backgroundWhite }}
            title={languageJson.EditPost_Heading}
            hideRightIcon
            onPressBack={() => navigation.goBack()}
            containerStyle={{ marginTop: height(2) }}
          />
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            extraScrollHeight={height(8)}
            contentContainerStyle={styles.scrollContainer}>
            <View>
              <StepIndicator currentPosition={1} />
              <View style={styles.aboutContainer}>
                <TextRowVise style={styles.inputTitle}>
                  {languageJson.AboutAuthor_Heading}
                </TextRowVise>

                <View style={styles.profileDetailContainer}>
                  <Image
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=772&q=80',
                    }}
                    style={styles.profilePic}
                    resizeMode="cover"
                  />
                  <View style={styles.profileNameContainer}>
                    <Text numberOfLines={1} style={styles.nameText}>
                      Fatma Mohamed
                    </Text>

                    <View style={styles.privateConainer}>
                      <Image
                        source={require('../../assets/AddNewAssets/user.png')}
                        style={styles.arrowDown}
                        resizeMode={'contain'}
                      />
                      <ModalDropdown
                        options={['Private', 'Public']}
                        dropdownStyle={styles.privateDropDown}
                        renderRow={(option, index, isSelected) => (
                          <View style={styles.privateDropDownItemContainer}>
                            <Text style={styles.privateDropDownItemText}>
                              {option}
                            </Text>
                          </View>
                        )}
                        onSelect={(index, option) => {
                          setPopupVisible(true);
                          setPopupText(
                            option == 'Private'
                              ? 'Your profile image will be private'
                              : 'Your profile image will be public`',
                          );
                          setSelectedPrivacy(option);
                        }}>
                        <View style={styles.privateInnerContainer}>
                          <Text style={styles.privateText}>
                            {selectedPrivacy}
                          </Text>
                          <Image
                            source={require('../../assets/AddNewAssets/angle-down.png')}
                            style={styles.arrowDown}
                            resizeMode={'contain'}
                          />
                        </View>
                      </ModalDropdown>
                    </View>
                  </View>
                </View>
                <View style={styles.inputContainer}>
                  <TextInputRowVise
                    placeholder={languageJson.Address_Label}
                    style={styles.generalInput}
                    returnKeyType="done"
                    placeholderTextColor={Colors.placeHolderTextColor}
                  />
                </View>
                {/* <View style={styles.coutryTextFieldContainer}>
                                <Image source={require('../../assets/AddNewAssets/rus.png')}
                                    resizeMode='contain'
                                    style={styles.flagImage} />
                                <Text>RUS</Text>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/AddNewAssets/caret-down-black.png')}
                                        style={styles.arrowdownImage}
                                    />
                                </TouchableOpacity>
                                <TextInput
                                    placeholder='Phone Number'
                                    autoCapitalize='none'
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    style={styles.countrytextInput}
                                    onSubmitEditing={() => { userName.current.focus(); }}
                                    returnKeyType='next'
                                    keyboardType='numeric'
                                    ref={phoneRef}
                                    onSubmitEditing={() => emailAddressRef.current.focus()}
                                />
                            </View> */}
                {/* <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder={"Email Address"}
                                    style={styles.generalInput}
                                    ref={emailAddressRef}
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    returnKeyType='next'
                                    onSubmitEditing={() => linksRef.current.focus()}
                                />
                            </View> */}
                <View style={styles.inputContainer}>
                  <TextInputRowVise
                    placeholder={languageJson.Link_Label}
                    style={styles.generalInput}
                    returnKeyType="done"
                    ref={linksRef}
                    placeholderTextColor={Colors.placeHolderTextColor}
                  />
                </View>
              </View>
              <View style={styles.aboutContainer}>
                <ViewRowVise style={styles.availableTopContainer}>
                  <TextRowVise style={styles.inputTitle}>
                    {languageJson.Available_Label}
                  </TextRowVise>
                  <TouchableOpacity onPress={toggleSelectDaysModal}>
                    <Image
                      source={require('../../assets/AddNewAssets/plus.png')}
                      style={styles.plusIcon}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </ViewRowVise>
                <View style={styles.flatListContainer}>
                  <FlatList data={selectedDays} renderItem={renderDay} />
                </View>
              </View>
            </View>
            <Button
              title={languageJson.Next_Button}
              onPress={() => navigation.navigate('EditPostGallery')}
            />
          </KeyboardAwareScrollView>
          <SelectDaysModal
            onSubmit={onSubmitSelectDays}
            isVisible={isSelectDaysModalVisible}
            onClose={toggleSelectDaysModal}
          />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              mode={'time'}
              is24Hour={false}
              display="default"
              value={new Date()}
              onChange={(event, time) => {
                try {
                  var timeString = time.toLocaleTimeString();
                  setShow(!show);
                  setTimeArray(timeString);
                } catch { }
              }}
            />
          )}
        </LinearGradient>
        <Popup
          isVisible={popupVisible}
          text={popupText}
          onRequsetClose={() => setPopupVisible(false)}
        />
      </SafeAreaView>
      <SafeAreaView backgroundColor={Colors.ofwhite} />
    </React.Fragment>
  );
}
