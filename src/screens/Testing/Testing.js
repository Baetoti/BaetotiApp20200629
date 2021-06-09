import React, { useState } from 'react'
import { Text, View, TouchableHighlight ,Button} from 'react-native'

import { RTLView, RTLText } from 'react-native-rtl-layout'
const elements ={
    en:{
        text:'John doe',
        buttonText:'Button'
    },
    ar:{
        text:'فلان الفلاني',
        buttonText:'زر'
    },
}

 function Sample(){
     const [ locale,setLocale]=useState('en')
 const toggleLocale = () => {
    setLocale(locale == 'ar' ? 'en' : 'ar')
  }
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <RTLView locale={locale}>
          <Text> {elements[locale].text} </Text>
        </RTLView>
        <RTLView locale={locale}>
          <RTLText locale={locale} fontSize={20}>This is RTL text component</RTLText>
        </RTLView>
          <Button style={{ margin: 20}} onPress={toggleLocale} title={elements[locale].buttonText} />
      </View>
    )
  }
export default Sample