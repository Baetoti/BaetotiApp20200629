import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
const Component = (props) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <Text
            {...props}
            style={[props.style ? props.style : {}, selectdLanguage == 'ar' ?
                { textAlign: 'right' } : { textAlign: 'left' }]}>
            {props.children}
        </Text>
    )
};

export default Component;
