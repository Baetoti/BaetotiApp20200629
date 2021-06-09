import React, { forwardRef, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import color from '../../../utills/Colors';
import RangeSlider from 'rn-range-slider';
import { width, height } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import TextRowVise from '../../../components/TextRowVise/TextRowVise.Component';
const Component = ({ heading, min, setMinimum, setMaximun, max, start, end, single, onValueChanged, radius }, ref) => {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Filter_Screen)
  const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
  /**
   * States used for Range Slider
   */
  const [Min, setMin] = useState(0)
  const [Max, setMax] = useState(0)
  /**
   * Method that call at the time of launch
   */
  useEffect(() => {
    setMin(min);
    setMax(max)
  }, [])
  /**
   * Updateing Min Max value accordingly with range slider
   */
  useEffect(() => {
    setMin(min);
    setMax(max)
    // sliderRef.current.setHighValue(max)
  }, [min, max])
  return (
    <View>
      <TextRowVise style={[styles.heading, { paddingTop: height(2.8) }]}>{heading}</TextRowVise>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <RangeSlider
          ref={ref}
          rangeEnabled={single ? false : true}
          style={{ width: width(90), height: height(10) }}
          gravity={'center'}
          min={start}
          max={end}
          initialHighValue={end}
          initialLowValue={start}
          step={2}
          thumbBorderColor={color.backgroundWhite}
          thumbBorderWidth={width(0.5)}
          thumbRadius={width(2)}
          thumbColor={color.black}
          //   labelBorderWidth={10}
          //   labelBorderRadius={width(20)}
          //   labelTailHeight={0}
          //   labelGapHeight={height(1.5)}
          //   labelFontSize={0}
          //   labelPadding={10}
          //   labelBackgroundColor={color.black}
          labelStyle='none'
          selectionColor={color.black}
          blankColor={color.placeHolderTextColor}
          onTouchEnd={(low, high) => {
            setMinimum(Min)
            setMaximun(Max)
          }}
          onValueChanged={(low, high) => {
            setMin(low)
            setMax(high)
            onValueChanged(low, high)
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width(90),
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.rangeComponent}>
          <Text style={styles.range}>{single ? radius : min}</Text>
          <Text style={{ color: color.gray }}>{single ? selectedDistanceUnit : languageJson.min}</Text>
        </View>
        {!single &&
          <View style={styles.rangeComponent}>
            <Text style={styles.range}>{max}</Text>
            <Text style={{ color: color.gray }}>{languageJson.max}</Text>
          </View>
        }
      </View>
    </View>
  );
};
export default forwardRef(Component);
