import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal,
    FlatList,
} from 'react-native';
import { text } from 'react-native-communications';

import { height, totalSize, width } from 'react-native-dimension';
import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Temp_file = () => {
    const [visible, setvisible] = useState(false);
    const [checked, setchecked] = useState(false);

    const [data, setData] = useState("")
    const items = [
        {
            name: 'honey Pancake',
        },
        {
            name: 'Black Carry Pancake',
        },
        {
            name: 'Green Honey Pancake',
        },
        {
            name: 'Some Oatmeal',
        },{
            name: 'Black Carry Pancake',
        },
        {
            name: 'Green Honey Pancake',
        },
        {
            name: 'Some Oatmeal',
        },
        
    ]

    const renderList = ({ item, index }) => {
        const selected_item = ()=>{
            setData(item.name);
            setchecked(!checked);
            setvisible(!visible);
        }
        return (
            <View style={{
                flexDirection: 'row', marginLeft:width(1), marginRight: width(4), marginVertical: height(1),
            }}>
                <TouchableOpacity onPress={selected_item}
                    style={{flexDirection:'row',flex:1,justifyContent:'space-between',}}>
                        <View style={{flexDirection:'row',}}>
                            <Icon_1
                                name="magnify"
                                size={20}
                                color={Colors.black}
                                style={[{ alignSelf: 'center', marginHorizontal: width(4),}]} />
                            <Text style={{ color: Colors.black, marginTop: width(0.5),alignSelf:'center'}}>
                                {item.name}
                            </Text>
                        </View>
                        <View style={{alignSelf:'flex-end'}}>
                        <Icon_1
                            name="arrow-top-left"
                            size={20}
                            color={Colors.black}
                            style={[{ alignSelf: 'center',}]} />
                        </View>
                </TouchableOpacity>
           
            </View>
        );
    }
const show_modal=()=>{
    true ? setvisible(!visible):setvisible(visible)
};
    return (
        <SafeAreaView>
            <View
                style={{
                    width:width(65),
                    borderRadius: 7,
                    marginHorizontal: width(1),
                    alignSelf:'flex-start',
                }}>
                {/* <TouchableOpacity onPress={() => setvisible(!visible)}
                style={{ marginHorizontal: width(1), borderRadius:width(2),}}> */}

                    <View style={{alignSelf:'flex-start' }}>
                        <TextInput
                            style={{ marginHorizontal: width(3), marginVertical: width(2)}}
                            placeholderTextColor={Colors.lightGray}
                            placeholder={"What would you like?"}
                            value={data}
                            onTextInput={()=>setvisible(!visible)}
                            onChangeText={(text)=>setData(text)}
                           
                            onFocus={show_modal}
                        />

                        {/* <Text style={{ marginHorizontal: width(3), marginVertical: width(2) }}>{data}</Text>  */}
                    </View>
                {/* </TouchableOpacity> */}
            </View>

            <Modal
                animationType={'fade'}
                transparent={true}
                visible={visible}>

                <View
                    style={[{
                        backgroundColor: Colors.white,paddingBottom:height(4),
                        borderRadius: 5, marginLeft: width(5), marginRight:width(20), marginTop: height(12.5),
                     }]}>
                    
                    <FlatList
                        style={[{ marginTop: height(0.5),}]}
                        data={items}
                        renderItem={renderList}
                        keyExtractor={(item, index) => index.toString()}>
                    </FlatList>

                </View>
            </Modal>
        </SafeAreaView >
    )
}

export default Temp_file;