import React, { useState, Fragment } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    FlatList,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import { width, height, totalSize } from 'react-native-dimension';
import styles from './styles';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import dollarNote from '../../assets/HomeAssets/dollarNote.png';
import locationBasket from '../../assets/HomeAssets/locationBasket.png';
import Deliveries from '../../DummyData/Deliveries';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(
        state => state.Language.languageJson.CurrentOrders_Screen,
    );
    /**
     * Reading Screen Data from redux ,"orderIsReady_Heading":"Order is Ready","orderIsReady_Heading":"الطلب جاهز",
     */

    const dispatch = useDispatch();
    /**
     * States used for item and tab selections
     */

    const _renderDeliveries = ({ item }) => {
        return (
            <View style={styles.deliveriesContainer}>
                <ViewRowVise style={styles.driverNameContainer}>
                    <Image
                        source={{ uri: item.driverImage }}
                        resizeMode='cover'
                        style={styles.locationBasket}
                    />
                    <View>
                        <ViewRowVise style={styles.deliveriesPriceContainer}>
                            <Text style={styles.driverNameText}>{item.driverName}</Text>
                            <TouchableOpacity>
                                <Feather
                                    name="phone"
                                    size={totalSize(2.5)}
                                    color={Colors.lightGray}
                                />
                            </TouchableOpacity>

                            {/* <Text style={styles.deliveriesPriceText}>${item.price}</Text> */}
                        </ViewRowVise>
                        <ViewRowVise style={styles.deliveriesOrderContainer}>
                            <Text
                                numberOfLines={1}
                                style={styles.deliveriesNumberText}>{`ID ${item.driverId
                                    }`}</Text>
                            <TouchableOpacity>
                                <Ionicons
                                    name="chatbubble-sharp"
                                    size={totalSize(2.5)}
                                    color={Colors.lightGray}
                                />
                            </TouchableOpacity>
                        </ViewRowVise>
                    </View>
                </ViewRowVise>
                {/* <ViewRowVise style={styles.delivriesAddressContainer}>
                    <Text numberOfLines={2} style={styles.delivriesAddressText}>
                        {item.deliveryAddress}
                    </Text>
                    <Feather
                        name="phone"
                        size={totalSize(2)}
                        color={Colors.lightGray}
                        style={{ width: width(9) }}
                    />
                </ViewRowVise> */}
                <ViewRowVise style={styles.deliveriesMessageContainer}>
                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.delivriesMessageText}>{languageJson.DeleteDriver}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reassignButton}>
                        <Ionicons
                            name="return-up-back-outline"
                            size={totalSize(1.75)}
                            color={Colors.backgroundWhite}
                        />
                        <Text style={styles.reassignText}>
                            {languageJson.reAssignButton}
                        </Text>
                    </TouchableOpacity>
                </ViewRowVise>
            </View>
        );
    };
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.backgroundColor}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundColor })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.backgroundColor, '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.Favourite_Driver_Label}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <FlatList
                        ItemSeparatorComponent={() => (
                            <View style={styles.pastItemSeparator} />
                        )}
                        contentContainerStyle={{ paddingVertical: height(4) }}
                        data={Deliveries}
                        showsVerticalScrollIndicator={false}
                        renderItem={_renderDeliveries}
                        keyExtractor={item => item.key}
                    />
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.ofwhite })}
            />
        </Fragment>
    );
}
