import React from 'react';
import { View, Text } from 'react-native';
import styles from './VerificationStepIndicator.Style';
import StepIndicator from 'react-native-step-indicator';
import Colors from '../../utills/Colors'
import { totalSize, width } from 'react-native-dimension';
const VerificationStepIndicator = ({
  containerStyle,
  currentPosition,
  indexcolor
}) => {

  const customStyles = {
    stepIndicatorSize: totalSize(2.25),
    currentStepIndicatorSize: totalSize(3.25),
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor:indexcolor?indexcolor: Colors.buttonSecondaryBlue,
    stepStrokeWidth: 0,
    stepStrokeFinishedColor:indexcolor?indexcolor: Colors.buttonSecondaryBlue,
    stepStrokeUnFinishedColor: Colors.black,
    separatorFinishedColor:indexcolor?indexcolor: Colors.buttonSecondaryBlue,
    separatorUnFinishedColor: Colors.stepIndicatorLineColor,
    stepIndicatorFinishedColor: indexcolor?indexcolor:Colors.buttonSecondaryBlue,
    stepIndicatorUnFinishedColor: Colors.stepIndicatorLineColor,
    stepIndicatorCurrentColor:indexcolor?indexcolor: Colors.buttonSecondaryBlue,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor:indexcolor?indexcolor: Colors.buttonSecondaryBlue,
    stepIndicatorLabelUnFinishedColor: 'transparent',

    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 15,
    currentStepLabelColor: '#fe7013',
  };
  function renderStepIndicator(stepStatus) {
    return (
      <Text style={
        stepStatus.stepStatus==='current'?
        styles.currentPositionText:styles.notCurrentPositionText}>{currentPosition+1}</Text>
    )
  };
  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      <StepIndicator
        stepCount={3}
        customStyles={customStyles}
        currentPosition={currentPosition}
        renderStepIndicator={renderStepIndicator}
      />
    </View>
  )
};

export default VerificationStepIndicator;
