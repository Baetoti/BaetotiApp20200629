import React from 'react';
import { View, Text } from 'react-native';
import styles from './StepIndicatorCreateNew.Styles';
import StepIndicator from 'react-native-step-indicator';
import Colors from '../../utills/Colors'
import { useSelector } from 'react-redux';
import { totalSize, width } from 'react-native-dimension';
const Component = ({
  containerStyle,
  currentPosition
}) => {

  const languageJson = useSelector(state => state.Language.languageJson.CreateNew_Overview_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const isArabic = selectdLanguage == 'ar';
  const labels = [languageJson.Overview_Label, languageJson.About_Label, languageJson.Gallery_Label, languageJson.Items_Label];
  const customStyles = {
    stepIndicatorSize: totalSize(1.5),
    currentStepIndicatorSize: totalSize(2),
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: Colors.purplePrimary,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: Colors.purplePrimary,
    stepStrokeUnFinishedColor: Colors.black,
    separatorFinishedColor: Colors.purplePrimary,
    separatorUnFinishedColor: Colors.black,
    stepIndicatorFinishedColor: Colors.purplePrimary,
    stepIndicatorUnFinishedColor: Colors.black,
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: Colors.purplePrimary,
    stepIndicatorLabelUnFinishedColor: 'transparent',
    // labelColor: Colors.purplePrimary,
    labelSize: totalSize(1.25),
    currentStepLabelColor: Colors.purplePrimary,
    finishedStepLabelColor: Colors.purplePrimary

  };
  return (
    <View style={[styles.container, { transform: [{ rotateY: isArabic ? '180deg' : '0deg' }] }, containerStyle ? containerStyle : {}]}>
      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        renderLabel={({ label }) => {
          return (
            <Text style={{ transform: [{ rotateY: isArabic ? '180deg' : '0deg' }] }}>{label}</Text>
          )
        }}
      />
    </View>
  )
};

export default Component;
