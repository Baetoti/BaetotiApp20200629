import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
const Component = (props) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <TouchableOpacity
            {...props}
            style={[props.style ? props.style : {}, selectdLanguage == 'ar' ?
                { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
            {props.children}
        </TouchableOpacity>
    )
};

export default Component;
