import React, { useState ,useRef, useEffect} from "react";
import { StyleSheet, View ,Dimensions,Image, requireNativeComponent} from "react-native";
import Style from './styles'
const { width, height } = Dimensions.get("window");


const Spalsh = (props) => {    
    useEffect(()=>{
        setTimeout(()=>{    
            props.navigation.replace("LoginPhone")
        },3000)
    })


  return (
    <View style={Style.container}>
        <Image source={require("../../assets/splash/splash.jpg")} style={{width:(width),height:height}} resizeMode="stretch"  />
    </View>
  );

};

export default Spalsh;