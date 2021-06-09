import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, Text,ScrollView } from 'react-native';
import styles from './myAccountAnswer.Style';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component';
import Button from '../../components/Button/Button.component'
import { height, width } from 'react-native-dimension';
import Colors from '../../utills/Colors';

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
                backgroundColor={Colors.white}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor:Colors.white })}
            />
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    colors={[Colors.white,Colors.white,]}
                    style={{ flex: 1 }}>
                    <MoreHeader
                        title={languageJson.Answer_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    
                    <View style={styles.mainContainer}>
                        <ScrollView contentContainerStyle={{paddingBottom:height(2)}}
                        showsVerticalScrollIndicator={false}
                        >
                        <Text style={{
                                fontSize:20,
                                fontStyle:'normal',
                                fontWeight:'bold',
                                marginTop:height(2),
                                marginHorizontal:width(2.5),
                            
                        }}>{"  "}{item.question}</Text>
                        <View style={[styles.answerContainer,
                            item.steps
                            ?null
                            :{borderBottomColor:Colors.placeHolderTextColor,borderBottomWidth:0.5}]}>
                            <TextRowVise style={[styles.answerText]}>{item.answer}</TextRowVise>
                        </View>
                        {item.steps&&(
                            <View style={{paddingBottom:height(2),marginHorizontal:width(5),
                                borderBottomColor:Colors.placeHolderTextColor,borderBottomWidth:0.5}}>
                                {item.steps.map((steps,index) =>(
                                   <ViewRowVise style={styles.stepsContainer}>
                                    <Text style={styles.indexText}>{index+1}</Text>
                                    <Text style={styles.stepsText}>{steps}</Text>
                                   </ViewRowVise>
                                ))}
                            </View>
                        )}
                        <Text style={styles.helpFulText}>{languageJson.helpFul_Text}</Text>
                        <Button title={languageJson.yes_Button} containerStyle={styles.yesButton}
                        onPress={()=>navigation.navigate('Thankyou')}
                        />
                        <Button title={languageJson.No_Button} containerStyle={styles.noButton}
                        onPress={()=>navigation.navigate('Thankyou')}
                        />
                        </ScrollView>
                    </View>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={'#F6F6F6'}
            />
        </Fragment>
    );
}
