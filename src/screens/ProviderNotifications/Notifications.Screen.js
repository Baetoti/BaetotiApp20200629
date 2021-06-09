import React, { Fragment, useState, useEffect } from 'react';
import {
    SafeAreaView, View, StatusBar, FlatList,
    Image, Text
} from 'react-native';
import styles from './Notifications.Style';
import Colors from '../../utills/Colors';
import Header from '../../components/NotificationHeader/NotificationHeader.Component';
import LinearGradient from 'react-native-linear-gradient';
import Notifications from '../../DummyData/Notifications';
import Button from '../../components/Button/Button.component';
import { useSelector } from 'react-redux';
export default function CurrentOrders({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.Driver_Notification_Screen)
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    /**
     * State for notifications
     */
    const [notifications, setNotifications] = useState(Notifications);
    /**
     * Component for individual notification component
     */
    const renderNotification = ({ item, index }) => (
        <View style={styles.notificationContainer}>
            <Image
                source={{ uri: item.image }}
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
                    colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
                    style={{ flex: 1 }}
                >
                    <Header onPressBack={() => navigation.goBack()} onPressClear={() => setNotifications([])} />
                    <FlatList
                        data={notifications}
                        renderItem={renderNotification}
                        showsVerticalScrollIndicator={false}
                    />
                    {/* <Button onPress={() => navigation.popToTop()} title={languageJson.Home_Title} containerStyle={styles.button}
                        textStyle={styles.buttonText} /> */}
                </LinearGradient>
            </SafeAreaView>
        </Fragment>
    );
}

