import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import styles from './FaqAnswer.style';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import Button from '../../components/Button/Button.component'
import { width, height, totalSize } from 'react-native-dimension';
export default function BuyerSetting({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.FaqAnswer_Screen,
    );
    const item = route?.params.item
    
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#FFFFFF'}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: '#FFFFFF' })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.Answer_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.mainContainer}>
                        
                        <Text style={styles.nav_from}>{item.title}{" >  Related"}</Text>
                        <Text style={[styles.text_1,{}]}>Articles In this section</Text>
                        
                        <View style={styles.answerContainer}>
                            <Text style={styles.text_que}>{item.question}</Text>
                            <TextRowVise style={styles.answerText}>{item.answer}</TextRowVise>
                        </View>
                        <Text style={styles.helpFulText}>{languageJson.helpFul_Text}</Text>
                        <Button title={languageJson.yes_Button} containerStyle={styles.yesButton}
                            onPress={()=>navigation.navigate('Thankyou')}
                        />
                        <Button title={languageJson.No_Button} containerStyle={styles.noButton}
                            onPress={()=>navigation.navigate('Thankyou')}
                        />
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={'#F6F6F6'}
            />
        </Fragment>
    );
}
