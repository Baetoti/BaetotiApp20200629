import React, { Fragment, useState } from 'react';
import {
    SafeAreaView, View, StatusBar, FlatList,
    Image, Text
} from 'react-native';
import styles from './DriverMyBalance.Style';
import Header from '../../components/NotificationHeader/NotificationHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import Notifications from '../../DummyData/DriverMyBalance';
import { height } from 'react-native-dimension';
import { useSelector } from 'react-redux';
export default function CurrentOrders({ navigation }) {
    /**
     * state used for notifications
     */
    const [notifications, setNotifications] = useState(Notifications);
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.DriverNotification_Screen)
    /**
     * Component for Individual Item
     */
    const renderNotification = ({ item, index }) => (
        <View style={styles.notificationContainer}>
            <Image
                source={item.image}
                style={styles.profileImage} />
            <View style={styles.textDateContainer}>
                <Text style={styles.nameText}>
                    {item.userName}
                    <Text style={styles.notificationText}> {item.notification}</Text>
                </Text>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
        </View>
    )
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={'#FCEAE6'} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FCEAE6' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#F6F6F6']}
                    style={{ flex: 1 }}
                >
                    <Header onPressBack={() => navigation.goBack()} onPressClear={() => setNotifications([])} />
                    <FlatList
                        data={notifications}
                        renderItem={renderNotification}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: height(2) }}
                    />
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    );
}

