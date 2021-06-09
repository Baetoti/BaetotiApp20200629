import React, { Fragment, useRef, useState, } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { totalSize, height } from 'react-native-dimension';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import Button from '../../components/Button/Button.component';
import { captureScreen } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
export default function Cart({ navigation }) {
    const viewShot = useRef(null)
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const isDollar = selectedCurrency == "USD";
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const [data, setData] = useState({
        key: 1,
        name: 'Sofia Retailer Store',
        orderId: 'OR4569EB320',
        price: 210.00,
        timeLeft: '1 day,18 hours',
        deliveryDateTime: '09:30 PM, 18 Apr,2020',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        isHidden: 'true',
        Address: 'C-404, Golden Street, East 25th Street, New york City, US',
        providerBy: {
            deliverBy: 'Driver',
            providerName: 'julia Doe',
            providerImage: require('../../assets/HomeAssets/Layer861copy.png'),
            providerPrice: 15,
            userType: 'provider'
        },
        client: {
            clientName: 'Martin Goe',
            clientImage: require('../../assets/HomeAssets/Layer755.png'),
            clientPrice: 45,
            userType: 'client'
        },
        itemList: [
            {
                key: 0,
                itemname: 'Honey Pancake',
                itemId: 5623146,
                itemPrice: 45,
                comment: 'Delivery with carefully',
                shortDescription: 'Extra chess and Extra with honey',
                quantity: 1,
                itemimage: [
                    require('../../assets/HomeAssets/Layer888copy2.png'),
                    require('../../assets/HomeAssets/Layer928.png'),
                    require('../../assets/HomeAssets/Layer935.png')
                ],
                tags: [
                    'Thaifood',
                    'Spicy'
                ],
                description: 'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                key: 1,
                itemname: 'Fruit Pancake',
                itemPrice: 120,
                itemId: 5623120,
                quantity: 2,
                comment: 'Delivery with carefully',
                shortDescription: 'Extra chess and Extra...',
                itemimage: [
                    require('../../assets/HomeAssets/Layer889copy2.png'),
                    require('../../assets/HomeAssets/Layer889copy2.png'),
                    require('../../assets/HomeAssets/Layer889copy2.png'),
                ],
                tags: [
                    'Thaifood',
                    'Spicy'
                ],
                description: 'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

            },
            {
                key: 2,
                itemname: 'Butter Pancake',
                itemPrice: 15,
                comment: 'Delivery with carefully',
                itemId: 5623135,
                quantity: 1,
                shortDescription: 'Extra chess and Extra with honey',
                itemimage: [
                    require('../../assets/HomeAssets/Layer935.png'),
                    require('../../assets/HomeAssets/Layer935.png'),
                    require('../../assets/HomeAssets/Layer935.png')
                ],
                tags: [
                    'Thaifood',
                    'Spicy'
                ],
                description: 'Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

            },
        ]
    });
    async function hasAndroidPermission(uri) {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
       
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return CameraRoll.save(uri);
        }
       
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
      }
       
    const captureViewShot = () => {
        captureScreen({
            format: "jpg",
            quality: 0.8
        }).then(
            uri =>{ console.log("Image saved to", uri),
            // CameraRoll.save(uri),
            hasAndroidPermission(uri)
            error => console.error("Oops, snapshot failed", error)}
        )
    }

    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#f8f0ed'}
            />
            <SafeAreaView style={(styles.container, { backgroundColor: '#f8f0ed' })} />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}>
                    {/* <MoreHeader
            isImage={true}
            imageInView={false}
            title={languageJson.Rating_Heading}
            onPress={() => navigation.goBack()}
          /> */}
                    <Header
                        title={'Recepit'}
                        hideRightIcon
                        onPressBack={() => navigation.goBack()}
                        containerStyle={styles.headerContainer}
                        backIconContainerStyle={styles.backIconContainerStyle}
                    />
                    <View style={styles.mainViewContainer}>

                        <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: height(2) }}
                        >
                            <ViewRowVise style={styles.dateContainer}>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>{moment().format('LTS')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.buttonText}>{data.name}</Text>
                                </TouchableOpacity>
                            </ViewRowVise>

                            <Text style={styles.headingText}>Payment Method</Text>
                            <View style={styles.itemsDetailContainer}>
                                {data.itemList.map((item) => (
                                    <ViewRowVise style={styles.itemContainer}>
                                        <Text style={styles.shopName}>{item.itemname}</Text>
                                        <Text style={styles.shopName}>{selectedCurrency == 'USD' ? "$" : "SAR"}{isDollar ? (Number(item.itemPrice) * sarToDollar).toFixed(toFixed) : Number(item.itemPrice)}</Text>
                                    </ViewRowVise>
                                ))}
                            </View>
                            <View style={styles.deliveryButton}>
                                <MaterialCommunityIcons name='truck-delivery' size={totalSize(4.5)} />
                                <Text style={styles.driverDetailText}>Jhon</Text>
                                <Text style={styles.driverDetailText}>123asd</Text>
                            </View>
                            <ViewRowVise style={styles.priceContainer}>
                                {/* {languageJson.ServiceCharges_Label} */}
                                <TextRowVise style={styles.priceText}>Service Charges</TextRowVise>
                                <TextRowVise style={styles.priceText}><TextRowVise style={styles.priceText}>{selectedCurrency == 'USD' ? "$" : "SAR"} 10</TextRowVise></TextRowVise>
                            </ViewRowVise>
                            <ViewRowVise style={styles.priceContainer}>
                                {/* {languageJson.ServiceCharges_Label} */}
                                <TextRowVise style={styles.priceText}>DeliveryCharges</TextRowVise>
                                <TextRowVise style={styles.priceText}><TextRowVise style={styles.priceText}>{selectedCurrency == 'USD' ? "$" : "SAR"} 15</TextRowVise></TextRowVise>
                            </ViewRowVise>
                            <ViewRowVise style={styles.priceContainer}>
                                {/* {languageJson.ServiceCharges_Label} */}
                                <TextRowVise style={styles.priceText}>Total Charges</TextRowVise>
                                <TextRowVise style={styles.priceText}>{selectedCurrency == 'USD' ? "$" : "SAR"} 25</TextRowVise>
                            </ViewRowVise>
                            <ViewRowVise style={styles.deliveryTimeContainer}>
                                <TextRowVise style={styles.priceText}>Delivery Time</TextRowVise>
                                <TextRowVise style={styles.priceText}>{moment().format('llll')}</TextRowVise>
                            </ViewRowVise>
                            <ViewRowVise style={styles.deliveryTimeContainer}>
                                <TextRowVise style={styles.priceText}>OrderId:</TextRowVise>
                                <TextRowVise style={styles.priceText}>{data.orderId}</TextRowVise>
                            </ViewRowVise>
                        </ScrollView>

                    </View>
                    <Button
                        title={'Save to Gallery'}
                        containerStyle={styles.containerStyle}
                        onPress={captureViewShot}
                    />
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    );
}
