import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
const Component = (props) => {
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    return (
        <View
            {...props}
            style={[props.style ? props.style : {}, selectdLanguage == 'ar' ?
                { flexDirection: 'row-reverse' } : { flexDirection: 'row' }]}>
            {props.children}
        </View>
    )
};

export default Component;
