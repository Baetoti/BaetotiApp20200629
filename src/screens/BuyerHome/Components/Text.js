import * as React from 'react';
import {Text} from 'react-native';
import { totalSize } from 'react-native-dimension';

/* =============================================================================
<CustomText />
============================================================================= */
const CustomText = ({
  flex,
  style,
  align,
  color,
  italic,
  children,
  fontSize,
  // fontWeight,
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
    <Text numberOfLines={numberOfLines} style={[_style, style]} {...props}>
      {children}
    </Text>
  );
};

/* Default Props
============================================================================= */
CustomText.defaultProps = {
  fontSize: totalSize(2.2),
  italic: false,
  align: 'left',
  color: '#000000',
  marginVertical: 0,
  marginHorizontal: 0,
  numberOfLines: null,
  // fontWeight: 'bold',
};

/* Export
============================================================================= */
export default CustomText;
