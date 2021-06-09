import React, { Fragment } from 'react';
import {
    View, Text, SafeAreaView, Image, ScrollView,
    StatusBar
} from 'react-native';
import styles from './DriverOrderDetails.Style';
import Button from '../../components/Button/Button.component';
import Colors from '../../utills/Colors';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import boxImage from '../../assets/DriverHome/box.png';
export default function DriverOrderDetails({ navigation }) {
    return (
        <Fragment>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.backgroundColor} />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.backgroundColor })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#f8f0ed', '#f8f0ec', '#f7f1ec', '#FAF8F7']}
                    style={{ flex: 1 }}
                >
                    <View style={{ flex: 1, justifyContent: "space-between" }}>
                        <ScrollView>
                            <MoreHeader isImage={true} imageInView={false} title={'Order Details'}
                                onPress={() => navigation.navigate('Setting')} />
                            <View style={styles.orderIdDetailContainer}>
                                <View style={styles.orderIdInnerDetailContainer}>
                                    <View style={styles.boxContainer}>
                                        <Image source={boxImage} style={styles.boxImage} resizeMode='contain' />
                                    </View>
                                    <View>
                                        <Text></Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <View>
                            <Button title="Accept" containerStyle={styles.containerStyle} />
                            <Button title="Ignore" containerStyle={styles.editDocumentButton} textStyle={styles.textStyle} />
                        </View>
                    </View>

                </LinearGradient>
            </SafeAreaView>
        </Fragment >
    )
}

