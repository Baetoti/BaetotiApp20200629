import React, {useCallback, useState} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './SelectDaysModal.Styles';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {totalSize, width} from 'react-native-dimension';
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import {useDispatch, useSelector} from 'react-redux';
import ViewRowVise from '../ViewRowVise/ViewRowVise.Component';

const Component = ({onClose, isVisible, onSubmit}) => {
  const languageJson = useSelector(
    state => state.Language.languageJson.AvailablePopup_Screen,
  );
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage);
  const [data, setData] = useState([
    {day: languageJson.Sunday_Label, key: 0, isChecked: false},
    {day: languageJson.Monday_Label, key: 1, isChecked: false},
    {day: languageJson.Tuesday_Label, key: 2, isChecked: false},
    {day: languageJson.Wednesday_Label, key: 3, isChecked: false},
    {day: languageJson.Thursday_Label, key: 4, isChecked: false},
    {day: languageJson.Friday_Label, key: 5, isChecked: false},
    {day: languageJson.Saturday_Label, key: 6, isChecked: false},
  ]);
  const toggleCheckBox = useCallback(
    (item, index) => {
      let newData = data;
      newData[index].isChecked = !data[index].isChecked;
      setData(data => (data = [...newData]));
    },
    [data],
  );
  const renderDay = ({item, index}) => {
    return (
      <ViewRowVise style={styles.dayContainer}>
        <TouchableOpacity onPress={() => toggleCheckBox(item, index)}>
          <MaterialCommunityIcons
            size={totalSize(3)}
            color={item.isChecked ? Colors.purplePrimary : Colors.gray}
            name={
              item.isChecked ? 'check-box-outline' : 'checkbox-blank-outline'
            }
          />
        </TouchableOpacity>
        <Text style={selectdLanguage=='ar'?[styles.dayText,{marginRight: width(2)}]: styles.dayText}>{item.day}</Text>
      </ViewRowVise>
    );
  };
  const onPressOkay = () => {
    var newData = data.filter(item => item.isChecked);
    onSubmit(newData);
    setData([
      {day: languageJson.Sunday_Label, key: 0, isChecked: false},
      {day: languageJson.Monday_Label, key: 1, isChecked: false},
      {day: languageJson.Tuesday_Label, key: 2, isChecked: false},
      {day: languageJson.Wednesday_Label, key: 3, isChecked: false},
      {day: languageJson.Thursday_Label, key: 4, isChecked: false},
      {day: languageJson.Friday_Label, key: 5, isChecked: false},
      {day: languageJson.Saturday_Label, key: 6, isChecked: false},
    ]);
  };
  return (
    <View>
      <Modal isVisible={isVisible} backdropOpacity={0.7}>
        <View style={styles.container}>
          <ViewRowVise style={styles.headContainer}>
            <Text style={styles.headText}>{languageJson.SelectDays_Label}</Text>
            <TouchableOpacity
              onPress={() => {
                onClose();
                setData([
                  {day: languageJson.Sunday_Label, key: 0, isChecked: false},
                  {day: languageJson.Monday_Label, key: 1, isChecked: false},
                  {day: languageJson.Tuesday_Label, key: 2, isChecked: false},
                  {day: languageJson.Wednesday_Label, key: 3, isChecked: false},
                  {day: languageJson.Thursday_Label, key: 4, isChecked: false},
                  {day: languageJson.Friday_Label, key: 5, isChecked: false},
                  {day: languageJson.Saturday_Label, key: 6, isChecked: false},
                ]);
              }}>
              <Image
                style={styles.closeIcon}
                source={require('../../assets/AddNewAssets/close-circle.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </ViewRowVise>
          <View style={styles.lineSeparator} />
          <View style={styles.flatListContainer}>
            <FlatList renderItem={renderDay} data={data} />
          </View>
          <Button
            title={languageJson.Okay_Button}
            containerStyle={{width: width(74)}}
            onPress={onPressOkay}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Component;
