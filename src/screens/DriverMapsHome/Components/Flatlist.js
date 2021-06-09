import * as React from 'react';
import {
    FlatList,
    StyleSheet,
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { width, height } from 'react-native-dimension';
import boxImage from '../../../assets/DriverHome/box.png'
import mapMarkerImage from '../../../assets/DriverHome/map-marker.png';
import { useSelector } from 'react-redux';
import styles from './styles';
import TouchableOpacityRowVise from '../../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextRowVise from '../../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../../components/ViewRowVise/ViewRowVise.Component'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../utills/Colors';
import { useNavigation } from '@react-navigation/native';


/* =============================================================================
<List />
============================================================================= */
const List = ({ data, onLoaction, onPressTitle }) => {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const navigation = useNavigation()
    const languageJson = useSelector(state => state.Language.languageJson.DriverHome_screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const selectedDistanceUnit = useSelector(state => state.Configuration.selectedDistanceUnit)
    /**
     * Component for Indidual item
     */
    const _showOrdersRequest = ({ item }) => {
        return (
            <View style={styles.orderContainer}>
                <TouchableOpacityRowVise activeOpacity={0.7} onPress={() => onPressTitle(item)} style={styles.orderIdContainer}
                >
                    <View style={styles.boxContainer}>
                        <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                    </View>
                    <View style={styles.orderIdTextContainer}>
                        <TextRowVise style={styles.orderIdLabelText}> {languageJson.OrderID_Label}</TextRowVise>
                        <TextRowVise numberOfLines={1} style={styles.orderIdText}>{item.OrderId}</TextRowVise>
                        <TextRowVise style={styles.orderDate}>{item.orderDate}</TextRowVise>
                    </View>
                    <View>
                        <View style={styles.timeLeftContainer}>
                            <Text style={styles.timeLeftText}>1h 26m {languageJson.left}</Text>
                        </View>
                        <MaterialIcons solid name='directions' onPress={() => navigation.navigate('DriverMapTraking')} color={Colors.buttonSecondaryBlue} style={{ alignSelf: 'flex-end', marginTop: height(0.5) }} size={width(7)} />
                    </View>
                </TouchableOpacityRowVise>
                <View style={styles.distanceDeliverDateContainer}>
                    <View style={styles.deliveryTimeContainer}>
                        <Text style={styles.deliveryTimeTextLabel}>{languageJson.DeliveryTime_Label}</Text>
                        <Text style={styles.deliveryTimeText}>{item.DeliveryTime}</Text>
                    </View>
                    <View style={styles.distanceContainer}>
                        <Text style={styles.distanceTimeTextLabel}>{languageJson.Distance_Label}</Text>
                        <Text style={styles.distanceTimeText}>{item.distance} {selectedDistanceUnit}</Text>
                    </View>
                </View>
                <View style={styles.lineSeparator} />
                <ViewRowVise style={styles.addressContainer}>
                    <View style={styles.providerAddressContainer}>
                        <View style={styles.mapImageContainer}>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                            <Text style={styles.toFormText}>{languageJson.From_Label}</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.addressText}>{item.ProviderAddress}</Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View style={styles.BuyerAddressContainer}>
                        <View style={styles.mapImageContainer}>
                            <Image source={mapMarkerImage} resizeMode='contain' style={styles.mapMarkerAddressImage} />
                            <Text style={styles.toFormText}>{languageJson.To_Label}</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.addressText}>{item.BuyerAddress}</Text>
                    </View>
                </ViewRowVise>

            </View>
        )
    }
    return (
        <FlatList
            ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
            style={styles.itemFlatlistContainer}
            data={data}
            inverted={selectdLanguage == "ar"}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={_showOrdersRequest}
            keyExtractor={item => item.key}
            contentContainerStyle={{ paddingBottom: height(13.5), marginVertical: height(2), paddingHorizontal: width(5) }}
        />
    );
};
export default List;
