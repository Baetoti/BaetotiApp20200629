import * as React from 'react';
import {Text} from 'react-native';
import { totalSize } from 'react-native-dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';
import color from '../../../utills/Colors';

/* =============================================================================
<CustomText />
============================================================================= */
const CustomText = ({
    onPress,
  flex,
  style,
  align,
  color,
  italic,
  children,
  fontSize,
  fontWeight,
  numberOfLines,
  marginVertical,
  marginHorizontal,
  ...props
}) => {
  const _style = {
    flex,
    color,
    fontSize,
    marginVertical,
    marginHorizontal,
    textAlign: align,
    // fontWeight,
  };

  return (
      <TouchableOpacity onPress={onPress}>
    <Text numberOfLines={numberOfLines} style={[_style, style]} {...props}>
      {children}
    </Text>
    </TouchableOpacity>
  );
};

/* Default Props
============================================================================= */
CustomText.defaultProps = {
  fontSize: totalSize(1.40),
  italic: false,
  align: 'left',
  color: color.buttonBlue,
  marginVertical: 0,
  marginHorizontal: 0,
  numberOfLines: null,
//   fontWeight: 'bold',
};

/* Export
============================================================================= */
export default CustomText;
