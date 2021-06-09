import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, StatusBar,FlatList } from 'react-native';
import styles from './BuyerFavourite.Styles';
import { useSelector } from 'react-redux';
import dummyData from '../BuyerHome/DummyData';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import {width,totalSize, height} from 'react-native-dimension';
import {Avatar} from 'react-native-elements'
export default function BuyerHome({ route, navigation, label }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.BuyerHome_screen)
    const title= useState(route.params?.title)
    /*
     * provider data
     */
    var [data, setData] = useState(null);
    /*
     * when Screen loads fetch data from prev screen
     */
    useEffect(() => {
        setData(dummyData.provider);
    }, []);
    const renderItem = ({item}) => (
        <TouchableOpacity activeOpacity={1} onPress={()=>{}} style={styles.FlatListContainer}>
          <Avatar rounded source={{uri:item.image}} size={width(18)} />
         <Text style={styles.restaurant}>{item.restaurant}</Text>
         <View style={[styles.flexRow,{marginTop:'1%' ,justifyContent:'flex-start',alignItems:'center'}]}>
                  <Image source={require('../../assets/buyerHome/star.png')} style={styles.startImage} />
            { item.star? <Text style={styles.startText}>{item.star}</Text>:null}
              <Image source={require('../../assets/buyerHome/blue.png')} style={styles.dotImage} />
            {item.title?  <Text style={styles.categoryText}>{item.title}</Text>:null}
              </View>
        </TouchableOpacity>
      );
    return (

        <React.Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#FCEAE6'} />
            <SafeAreaView style={{ backgroundColor: '#FCEAE6' }} />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={styles.mainContainer}>
                    <MoreHeader
                        title={title}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.flatListContainer}>
                        <FlatList 
                         data={data}
                         numColumns={2}
                         renderItem={renderItem}
                         columnWrapperStyle={{justifyContent:'space-between'}}
                         keyExtractor={item => item.code}
                         contentContainerStyle={{paddingVertical:height(2)}}
                         showsVerticalScrollIndicator={false}
                         ItemSeparatorComponent={()=><View style={{margin:totalSize(1)}} />}
                        />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: '#F6F6F6' }} />
        </React.Fragment>
    );
}
