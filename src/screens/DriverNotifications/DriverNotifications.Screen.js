import React, { Fragment, useState, useEffect } from 'react';
import {
    SafeAreaView, View, StatusBar, FlatList, TouchableOpacity, UIManager,
    Image, Text, LayoutAnimation
} from 'react-native';
import styles from './DriverNotifications.Style';
import Button from '../../components/Button/Button.component';
import { height } from 'react-native-dimension'
import LinearGradient from 'react-native-linear-gradient';
import Notifications from '../../DummyData/DriverNotifications'
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import boxImage from '../../assets/DriverHome/box.png';
import { useSelector } from 'react-redux';
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
export default function DriverNotifications({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const languageJson = useSelector(state => state.Language.languageJson.DriverNotification_Screen)
    /**
     * states used for notifications
     */
    const [notifications, setNotifications] = useState(Notifications);
    const [selectednotification, setSelectednotification] = useState(-1);
    /**
     * Component used for Individual Item
     */
    const renderNotification = ({ item, index }) => (
        <TouchableOpacity style={styles.notificationContainer}
            activeOpacity={1}
            onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                setSelectednotification(index)
            }}
        >
            <View style={{ flexDirection: 'row' }} >

                <View style={styles.boxContainer}>
                    <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                </View>
                <View style={styles.textDateContainer}>
                    <Text style={styles.nameText}>
                        {item.userName}
                        <Text style={styles.notificationText}> {item.notification}</Text>
                    </Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </View>

            {selectednotification == index ?
                <View style={styles.ViewIgnoreContainer}>
                    <Button title={languageJson.View_Button} containerStyle={styles.containerStyle} />
                    <Button title={languageJson.Ignore_Button} containerStyle={styles.editDocumentButton} textStyle={styles.textStyle}
                        onPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                            setSelectednotification(-1)
                        }}
                    />
                </View>
                : null
            }
        </TouchableOpacity>
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
                    <View style={styles.headerContainer}>
                        <MoreHeader onPress={() => navigation.goBack()} isImage={true} imageInView={false} title={languageJson.Notifications_Title} />
                    </View>
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

