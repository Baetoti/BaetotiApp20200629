import React from 'react';
import { View, Text } from 'react-native';
import styles from './StepIndicatorBuyerTrackOrder.Styles';
import StepIndicator from 'react-native-step-indicator';
import Colors from '../../utills/Colors'
import { useSelector } from 'react-redux';
import { totalSize, width } from 'react-native-dimension';
const Component = ({
  containerStyle,
  currentPosition
}) => {
  const languageJson = useSelector(state => state.Language.languageJson.CurrentOrder_V1_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const isArabic = selectdLanguage == 'ar';
  const appMode = useSelector(state => state.Auth.appMode)

  const labels = [languageJson.Preparing, languageJson.ReadytoPickup,
  languageJson.OnYourWay, languageJson.Delivered];
  const customStyles = {
    stepIndicatorSize: totalSize(1.5),
    currentStepIndicatorSize: totalSize(2),
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: appMode == 'provider' ? Colors.purplePrimary : appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.buttonBlue,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: appMode == 'provider' ? Colors.purplePrimary : appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.buttonBlue,
    stepStrokeUnFinishedColor: Colors.black,
    separatorFinishedColor: appMode == 'provider' ? Colors.purplePrimary : appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.buttonBlue,
    separatorUnFinishedColor: Colors.black,
    stepIndicatorFinishedColor: appMode == 'provider' ? Colors.purplePrimary : appMode == 'driver' ? Colors.buttonSecondaryBlue : Colors.buttonBlue,
    stepIndicatorUnFinishedColor: Colors.black,
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: Colors.buttonBlue,
    stepIndicatorLabelUnFinishedColor: 'transparent',
    // labelColor: Colors.buttonBlue,
    labelSize: totalSize(1.25),
    currentStepLabelColor: Colors.buttonBlue,
    finishedStepLabelColor: Colors.buttonBlue

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
