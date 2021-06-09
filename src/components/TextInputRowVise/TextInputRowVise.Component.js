import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { useSelector } from 'react-redux';
const Component = (props, ref) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <TextInput
            ref={ref}
            {...props}
            style={[props.style ? props.style : {}, selectdLanguage == 'ar' ?
                { textAlign: 'right' } : { textAlign: 'left' }]}>
            {props.children}
        </TextInput>
    )
};

export default forwardRef(Component);
