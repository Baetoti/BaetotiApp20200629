import React, { Fragment, useState } from 'react';
import {
    View, Text, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity
} from 'react-native';
import styles from './OrderRequest.Style';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import DriverImage from '../../assets/DriverHome/Layer777.png';
import Tab from '../../components/Tab/Tab.component';
import OrderRequestData from '../../DummyData/OrderRequest';
import { width, height, } from 'react-native-dimension';
import boxImage from '../../assets/DriverHome/box.png'
import mapMarkerImage from '../../assets/DriverHome/map-marker.png';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import arrowdownImage from '../../assets/buyerHome/angle-down.png';
import search from '../../assets/buyerHome/search.png';
import TextInputRowVise from '../../components/TextInputRowVise/TextInputRowVise.Component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function OrderRequest({ navigation }) {
    /**
     * state used for tab selection and data
     */
    const [selectedTab, setSelectedTab] = useState(0);
    const [OrdersData, setOrdersData] = useState(OrderRequestData);
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.OrderRequest_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * Reading Screen Data from redux 
     */
    const selectedCurrency = useSelector(state => state.Configuration.selectedCurrency)
    const currencyLabel = selectedCurrency == "USD" ? "$" : "SAR";
    const sarToDollar = useSelector(state => state.Configuration.sartoDollar)
    const toFixed = useSelector(state => state.Configuration.toFixed)
    const isDollar = selectedCurrency == "USD";
    /**
     * Method to remove item fro array
     */
    const removefromList = (index) => {
        const newORderData = OrdersData.filter((item, i) => i != index)
        setOrdersData(newORderData)
    }
    /**
     * Component for individual item
     */
    const _showOrdersRequest = ({ item, index }) => {
        return (
            <>
                <View style={styles.orderPendingRequestContainer}
                >
                    <ViewRowVise style={styles.orderIdContainer}
                    >
                        <View style={styles.boxContainer}>
                            <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                        </View>
                        <View style={styles.orderIdTextContainer}>
                            <TextRowVise style={styles.orderIdLabelText}>{languageJson.OrderID_Label}</TextRowVise>
                            <Text style={selectdLanguage == 'ar' ? [styles.orderIdText, { textAlign: 'right' }] : styles.orderIdText}>{item.OrderId}</Text>
                            <Text style={selectdLanguage == 'ar' ? [styles.deliveryTimeTextLabel, { textAlign: 'right' }] : styles.deliveryTimeTextLabel}>{languageJson.Deliverytime_Label} <Text style={styles.deliveryTimeText}>{item.DeliveryTime}</Text></Text>
                        </View>
                        <View>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerImage} />
                            <MaterialIcons solid name='directions' onPress={() => navigation.navigate('DriverOrderAccept')} color={Colors.buttonSecondaryBlue} style={{ marginTop: height(0.5) }} size={width(7)} />
                        </View>
                    </ViewRowVise>
                    <View style={styles.lineSeparator} />
                    <ViewRowVise style={styles.addressContainer}>
                        <View style={styles.providerAddressContainer}>
                            <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                                <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                                <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.From_Label}</Text>
                            </View>
                            <Text style={styles.addressText}>{item.ProviderAddress}</Text>
                        </View>
                        <View style={styles.verticalLine} />
                        <View style={styles.BuyerAddressContainer}>
                            <View style={selectdLanguage == 'ar' ? [styles.mapImageContainer, { flexDirection: 'row-reverse' }] : styles.mapImageContainer}>
                                <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                                <Text style={selectdLanguage == 'ar' ? [styles.toFormText, { marginRight: width(2) }] : styles.toFormText}>{languageJson.To_Label}</Text>
                            </View>
                            <Text style={styles.addressText}>{item.BuyerAddress}</Text>
                        </View>
                    </ViewRowVise>
                    <View style={styles.lineSeparator} />
                    <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                        <Text style={styles.deliveryChargesLabelText}>{languageJson.DeliveryCharges_Label}</Text>
                        <Text style={styles.deliveryChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges)}</Text>
                    </View>
                    <View style={selectdLanguage == 'ar' ? [styles.deliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.deliveryChargesContainer}>
                        <Text style={styles.deliveryChargesLabelText}>{languageJson.ServiceFees_Label}</Text>
                        <Text style={styles.deliveryChargesText}>-{currencyLabel}{isDollar ? (Number(item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.ServiceFees)}</Text>
                    </View>
                    <View style={styles.halfLineSeparator} />
                    <View style={selectdLanguage == 'ar' ? [styles.totalChargesContainer, { flexDirection: 'row-reverse' }] : styles.totalChargesContainer}>
                        <Text style={styles.totalChargesLabelText}>{languageJson.TotalCharges_Label}</Text>
                        <Text style={styles.totalChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges - item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges - item.ServiceFees)}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button title={languageJson.Accept_Button} containerStyle={styles.containerStyle} onPress={() => removefromList(index)} />
                        <Button title={languageJson.Ignore_Button} containerStyle={styles.editDocumentButton} textStyle={styles.textStyle} onPress={() => removefromList(index)} />
                    </View>
                </View>
                <TouchableOpacity style={styles.orderStatusContainer}
                    activeOpacity={1}  onPress={() => navigation.navigate('PendingOrderDetails', { item })}
                >
                    <Text style={styles.orderStatusText}>View Detail</Text>
                </TouchableOpacity>
            </>

        )
    }
    /**
     * Component for individual item
     */
    const _showCurrentDeliveris = ({ item }) => {
        return (
            <>
            <View style={styles.currentOrderRequestContainer}>
                <View style={selectdLanguage == 'ar' ? [styles.currentOrderIdContainer, { flexDirection: 'row-reverse' }] : styles.currentOrderIdContainer}>
                    <View style={styles.currentBoxContainer}>
                        <Image source={boxImage} style={styles.currentBoxImage} resizeMode='contain' />
                    </View>
                    <View style={styles.currentOrderIdTextContainer}>
                        <TextRowVise style={styles.currentOrderIdLabelText}>{languageJson.OrderID_Label}</TextRowVise>
                        <Text style={selectdLanguage == 'ar' ? [styles.currentOrderIdText, { textAlign: 'right' }] : styles.currentOrderIdText}>{item.OrderId}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.cancelButtonContainer}>
                            <Text style={styles.cancelText}>{languageJson.Cancel_Button}</Text>
                        </TouchableOpacity>
                        <MaterialIcons solid name='directions' onPress={() => navigation.navigate('DriverMapTraking')} color={Colors.buttonSecondaryBlue} style={{ alignSelf: 'flex-end', marginTop: height(0.5) }} size={width(7)} />
                    </View>
                </View>
                <View style={selectdLanguage == 'ar' ? [styles.currentOrderDateContainer, { flexDirection: 'row-reverse' }] : styles.currentOrderDateContainer}>
                    <Text style={styles.dateTextLabel}>{languageJson.Date_label}</Text>
                    <Text style={styles.dateText}>{item.DeliveryTime}</Text>
                </View>
                <View style={styles.lineSeparator} />
                <ViewRowVise style={styles.currentOrderAddressContainer}>
                    <View style={styles.currentOrderProviderAddressContainer}>
                        <View style={selectdLanguage == 'ar' ? [styles.currentOrderMapImageContainer, { flexDirection: 'row-reverse' }] : styles.currentOrderMapImageContainer}>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.currentOrderMapMarkerAddressImage} />
                            <Text style={selectdLanguage == 'ar' ? [styles.currentOrderToFormText, { marginRight: width(2) }] : styles.currentOrderToFormText}>{languageJson.From_Label}</Text>
                        </View>
                        <Text style={styles.currentOrderAddressText}>{item.ProviderAddress}</Text>
                    </View>
                    <View style={styles.currentOrderVerticalLine} />
                    <View style={styles.currentOrderBuyerAddressContainer}>
                        <View style={selectdLanguage == 'ar' ? [styles.currentOrderMapImageContainer, { flexDirection: 'row-reverse' }] : styles.currentOrderMapImageContainer}>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.currentOrderMapMarkerAddressImage} />
                            <Text style={selectdLanguage == 'ar' ? [styles.currentOrderToFormText, { marginRight: width(2) }] : styles.currentOrderToFormText}>{languageJson.To_Label}</Text>
                        </View>
                        <Text style={styles.currentOrderAddressText}>{item.BuyerAddress}</Text>
                    </View>
                </ViewRowVise>
                <View style={selectdLanguage == 'ar' ? [styles.currentOrderstatusContainer, { flexDirection: 'row-reverse' }] : styles.currentOrderstatusContainer}>
                    <Text style={styles.statusTextLabel}>{languageJson.Status_Label}</Text>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
                <View style={styles.lineSeparator} />
                <View style={selectdLanguage == 'ar' ? [styles.currentDeliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.currentDeliveryChargesContainer}>
                    <Text style={styles.currentDeliveryChargesLabelText}>{languageJson.DeliveryCharges_Label}</Text>
                    <Text style={styles.currentDeliveryChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges)}</Text>
                </View>
                <View style={selectdLanguage == 'ar' ? [styles.currentDeliveryChargesContainer, { flexDirection: 'row-reverse' }] : styles.currentDeliveryChargesContainer}>
                    <Text style={styles.currentDeliveryChargesLabelText}>{languageJson.ServiceFees_Label}</Text>
                    <Text style={styles.currentDeliveryChargesText}>-{currencyLabel}{isDollar ? (Number(item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.ServiceFees)}</Text>
                </View>
                <View style={styles.halfLineSeparator} />
                <View style={selectdLanguage == 'ar' ? [styles.currentTotalChargesContainer, { flexDirection: 'row-reverse' }] : styles.currentTotalChargesContainer}>
                    <Text style={styles.currentTotalChargesLabelText}>{languageJson.TotalCharges_Label}</Text>
                    <Text style={styles.currentTotalChargesText}>{currencyLabel}{isDollar ? (Number(item.DeliveryCharges - item.ServiceFees) * sarToDollar).toFixed(toFixed) : Number(item.DeliveryCharges - item.ServiceFees)}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.orderStatusContainer}
                    activeOpacity={1} onPress={() => navigation.navigate('CurrentDeliveriesOrderDetails', { item })}
                >
                    <Text style={styles.orderStatusText}>View Detail</Text>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundWhite} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundWhite })}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerItemContainer}>
                        <View style={styles.imageView}>
                            <Image source={DriverImage} style={styles.driverImage} resizeMode='cover' />
                        </View>
                        <Text style={styles.titleText}>{languageJson.OrderRequest_Title}</Text>
                        <View style={styles.headerEnd} />
                    </View>
                    <View style={styles.tabContainer}>
                        <Tab
                            selectedTextColor={Colors.textBlack}
                            textColor={Colors.gray}
                            selectedIndex={selectedTab}
                            selectedTabText={styles.selectedTabText}
                            textStyle={styles.tabtextStyle}
                            flatListStyle={{ alignSelf: 'center', }}
                            contentContainerStyle={{ justifyContent: 'space-between', width: width(80) }}
                            renderSelectedTabFooter={() => (
                                <View style={styles.renderTabFooter}></View>
                            )}
                            containerStyle={{ width: width(100), justifyContent: 'center' }}
                            onChangeTab={(item, index) => setSelectedTab(index)}
                            options={[languageJson.Pending_Tab, languageJson.CurrentDeliveries_Tab,languageJson.completed_deliveries]} />
                    </View>
                </View>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    <View style={styles.searchContainer}>
                        <ViewRowVise style={styles.searchInnerContainer}>
                            <Image style={styles.searchImage}
                                source={search} />
                            <TextInputRowVise style={styles.searchText}
                                placeholderTextColor={Colors.lightGray}
                                placeholder={languageJson.Search_Label} />
                        </ViewRowVise>
                    </View>
                    {selectedTab == 0 ?

                        <FlatList
                            ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                            style={styles.itemFlatlistContainer}
                            data={OrdersData.filter(item => item.status == 'pending')}
                            showsVerticalScrollIndicator={false}
                            renderItem={_showOrdersRequest}
                            keyExtractor={item => item.key}
                            contentContainerStyle={{ paddingVertical: height(4) }}
                        />
                        :
                        <View>                    
                            {
                               selectedTab == 1 ? 
                               <FlatList
                                    ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                                    style={styles.itemFlatlistContainer}
                                    data={OrdersData.filter(item => item.status == 'Accepted')}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={_showCurrentDeliveris}
                                    keyExtractor={item => item.key}
                                    contentContainerStyle={{ paddingVertical: height(4) }}
                                />                               
                               :
                               <FlatList
                                    ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
                                    style={styles.itemFlatlistContainer}
                                    data={OrdersData.filter(item => item.status == 'Accepted')}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={_showCurrentDeliveris}
                                    keyExtractor={item => item.key}
                                    contentContainerStyle={{ paddingVertical: height(4) }}
                                />
                            }
                        </View> 
                    }
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    )
}

