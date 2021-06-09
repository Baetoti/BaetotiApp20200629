import React, { forwardRef,createRef,useState } from 'react';
import { View, Image,Text } from 'react-native';
import styles from './styles';
import color from '../../../utills/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import data from '../DummyData'
import { width,height } from 'react-native-dimension';
const Component = ({ heading, placeHolder, location,onPress }, ref) => {
  // var [hei,setHei] = useState(0)
    const modalDropdown = createRef(null);
    return (
        <>
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
           !location&& modalDropdown.current.show();
           location&&onPress()
          }} style={styles.textFieldContainer}>
            <View style={styles.textFieldInnerContainer}>
                <Text style={styles.textInput}>{placeHolder}</Text>
              {!location && <Image style={styles.textFieldImage}
                    source={require('../../../assets/buyerHome/angle-down.png')} />}
                    {location&& <Image style={styles.locationImage}
                    source={require('../../../assets/buyerHome/navigation.png')} />}
            </View>
        </TouchableOpacity>
        <ModalDropdown
          options={data}
          dropdownStyle={[styles.dropDown,heading=='Subcategories'&&{height:height(45)}]}
          renderSeparator={()=><View></View>}
          ref={modalDropdown}
          showsVerticalScrollIndicator={false}
          renderRow={(option, index, isSelected) => (
            <View style={styles.dropDownItemContainer}>
              <View style={{padding:width(2),borderRadius:5,backgroundColor:option.backgroundColor}}>
              <Image source={option.image} style={{width:width(12),height:height(3),resizeMode:'contain'}} />
              </View>
              <Text style={styles.dropDownItemText}>{option.title}</Text>
            </View>
          )}>
          <View />
        </ModalDropdown>
        </>
    );
};
export default forwardRef(Component);
