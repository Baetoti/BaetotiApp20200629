import React, { Fragment, useState } from 'react';
import { SafeAreaView, View, StatusBar, TouchableOpacity, Image, Text, Linking, TextInput } from 'react-native';
import styles from './HelpCenter.styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import Button from '../../components/Button/Button.component'
import { useSelector } from 'react-redux';
import Colors from '../../utills/Colors';
import { totalSize, height, width } from 'react-native-dimension';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
import {HelpCenter} from '../../components/HelpCenter/index';
import userImage from '../../assets/HelpCenter/user.png';
import shoppingBagImage from '../../assets/HelpCenter/shopping-bag.png';
import sheildImage from '../../assets/HelpCenter/shield.png';
import suggestionImage from '../../assets/HelpCenter/suggestion.png';
import phoneImage from '../../assets/HelpCenter/suggestion.png';
import cardImage from '../../assets/HelpCenter/credit-card.png';
import voucherImage from '../../assets/HelpCenter/voucher.png';
import messageImage from '../../assets/HelpCenter/message.png';
import moreImage from '../../assets/HelpCenter/more.png';
import { ScrollView } from 'react-native-gesture-handler';

import Icon_1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function BuyerSetting({ navigation }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.HelpCenter_Screen,
    );

    const languageJson_more = useSelector(state => state.Language.languageJson.DriverSetting_Screen)

    const [isLiveOrder, setLiveOrder] = useState(false)
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
                        title={languageJson.HelpCenter_heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <>
                        <Text style={[styles.headingText,{marginTop:10}]}>Ahlan! {languageJson.Help_Text}</Text>
                            <View style={isLiveOrder ? styles.liveOrderContainer:styles.liveOrderContainers}>
                                {isLiveOrder ?
                                    <View>
                                        <Icon_1 name="magnify" size={25} color={Colors.themeColor} style={{alignSelf:"center",}} />
                                        <TextRowVise style={styles.liveOrderText}>{languageJson.LiveOrder_Heading}</TextRowVise>
                                        <Text style={styles.currentOrderText}>Cheese Burger</Text>
                                    </View>
                                    :
                                    <View style={{flexDirection:'row',}}>
                                        <Icon_1 name="magnify" size={25} color={Colors.themeColor} style={{alignSelf:'center',}} />
                                        <Text style={styles.noLiveOrderText}>{"Search Here"}</Text>
                                    </View>
                                }
                            </View>
                    
                        
                        <Text style={[styles.headingText_2]}>Setting</Text>
                        <View style={styles.helpContainer}> 
                        
                            <HelpCenter icon_1="account" title={languageJson.MyAccount_Label} onPress={()=>navigation.navigate('MyAccount')} />
                            
                            <HelpCenter icon_1="shopping" title={languageJson.MyOrders_Label} onPress={()=>navigation.navigate('HelpCenterMyOrders')} />
                            
                            <HelpCenter icon_1="credit-card-outline" title={languageJson.Payment_Label} onPress={()=>navigation.navigate('MakingPayment')} />
                            
                            <HelpCenter icon_1="ticket-percent-outline" title={languageJson.Vocher_Label} onPress={()=>navigation.navigate('Vouchers')} />
                        
                        </View>
                        <Text style={[styles.headingText_2]}>Support</Text>
                        <View style={styles.helpContainer}>                                                                                  
                            <HelpCenter icon_1="security" title={languageJson.Safety_Label} onPress={()=>navigation.navigate('SafetyConcern')} />
                            <HelpCenter icon_1="email-multiple-outline" title={languageJson.SupportRequest_Label} onPress={()=>navigation.navigate('MySupportRequest')} />
                            <HelpCenter icon_1="comment-quote-outline" title={languageJson.Suggestion_Heading} onPress={()=>navigation.navigate('HelpCenterSuggestion')} />
                            
                            {/* <HelpCenter image="" title={"Live Chat"} imageContainerStyle={styles.imageContainerStyle} onPress={() => navigation.navigate('ContactUs')} /> */}
                            
                            <HelpCenter icon_1="frequently-asked-questions" title={languageJson.Faq_Label} onPress={()=>navigation.navigate('FAQ')} />
                        </View>

                        <View style={styles.view_1}>
                                <Text style={styles.text_1}>Got more questions ?</Text>
                                <Text style={styles.text_2}>Reach out of us through any of these support channels.</Text>
                                <TouchableOpacity style={styles.touchBtn_1}>
                                        <Icon_1 name="email-outline" size={30} color={Colors.themeColor} />
                                        <Text style={styles.text_3}>care@baetoti.com</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchBtn_2}>
                                       <Icon_1 name="phone-outline" size={30} color={Colors.themeColor} />
                                        <Text style={styles.text_4}>9876543210</Text>
                                </TouchableOpacity>

                        </View>
                        <View style={styles.view_2} />
                        <View style={styles.view_3}>
                            <Text style={styles.text_5}>@ 2020 baetoti.</Text>
                            <Text style={styles.text_5}>All right reserved.</Text>
                        </View>
                        <View style={styles.view_4}>
                                <TouchableOpacity style={styles.touchBtn_3}>
                                    <Text style={styles.text_6}>Terms of Uses</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchBtn_3}>
                                    <Text style={styles.text_6}>Terms of Sales</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchBtn_3}>
                                    <Text style={styles.text_6}>Praivacy Policy</Text>
                                </TouchableOpacity>

                        </View>
                    </>    
                    </ScrollView>
                    <TouchableOpacity style={styles.chat_icon}
                        onPress={() => navigation.navigate('ContactUs')} >
                        <Icon_1 name="chat-outline" size={30} color={Colors.black} style={styles.liveChat_icon} />
                    </TouchableOpacity>
                </LinearGradient>
            </SafeAreaView>
            <SafeAreaView
                backgroundColor={Colors.ofwhite}
            />
        </Fragment>
    );
}
