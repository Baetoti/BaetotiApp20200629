import React, { forwardRef, createRef, useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import color from '../../../utills/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import RangeSlider from 'rn-range-slider';
import { width, height } from 'react-native-dimension';
const Component = ({ heading, min, max, start, end }, ref) => {
  /**
   * States used for Range Slider min and max
   */
  const [Min, setMin] = useState(0)
  const [Max, setMax] = useState(0)
  /**
   * Method that calls at the start of the screen
   * Setting initial min and max from props
   */
  useEffect(() => {
    setMin(min);
    setMax(max)
  }, [])
  /**
   * Ref of dropdown to open/close programmatically
   */
  const modalDropdown = createRef(null);
  return (
    <View>
      <Text style={[styles.heading, { paddingTop: height(2.8) }]}>{heading}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <RangeSlider
          style={{ width: width(90), height: height(10) }}
          gravity={'center'}
          min={start}
          max={end}
          step={2}
          thumbBorderColor={color.backgroundWhite}
          thumbBorderWidth={width(0.5)}
          thumbRadius={width(1.5)}
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
          onValueChanged={(low, high) => {
            setMin(low)
            setMax(high)
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
          <Text style={styles.range}>{Min}</Text>
          <Text style={{ color: color.gray }}>Min</Text>
        </View>
        <View style={styles.rangeComponent}>
          <Text style={styles.range}>{Max}</Text>
          <Text style={{ color: color.gray }}>Max</Text>
        </View>
      </View>
    </View>
  );
};
export default forwardRef(Component);
