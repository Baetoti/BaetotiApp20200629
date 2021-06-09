import React, { Fragment, useState, useEffect,useCallback } from 'react';
import { SafeAreaView, View, StatusBar, FlatList, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MoreHeader from '../../components/MoreHeader/MoreHeader.Component';
import { useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import TouchableOpacityRowVise from '../../components/TouchableOpacityRowVise/TouchableOpacityRowVise.Component';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component'
import ViewRowVise from '../../components/ViewRowVise/ViewRowVise.Component'
import { mySupportRequest } from '../../DummyData/helpCenter';
import Colors from '../../utills/Colors';
import Button from '../../components/Button/Button.component';
import { width, height } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { GiftedChat, Bubble} from 'react-native-gifted-chat';
export default function MySupportRequest({ navigation, route }) {
    /**
     * Reading Screen Data from redux depending on selected language
     */
    const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
    const appMode = useSelector(state => state.Auth.appMode)
    const languageJson = useSelector(
        state => state.Language.languageJson.mySupportRequest,
    );
    // const [item, setItem] = useState(route?.params?.item)
    // console.log(item)
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: `Dear Ahmad Hasham,

                Thank you for reaching out to us.
                
                Please know that we are unable to investigate your issue at the moment because we can’t navigate regarding the order you have placed and for which you are inquiring.
                
                If you could please share your contact details/ E-mails or the order code so that your query is resolved accordingly.
                
                Kindly reply to this email or contact us via Live Chat if there is anything else we can assist you with.
                
                Thank you.
                
                Warm regards,
                Amber Naz,
                betoti Customer Care Team
                Website | www.betoti.com
                ref:_00Dw0l3C7._5006932UY5D:ref`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: require('../../assets/AddNewAssets/ic_launcher_round.png'),
                },
            },
        ])
    }, [])
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    const _renderBubble = (props) => {
        return (<Bubble {...props}
            textStyle={{
                right: {
                    color: Colors.black,
                },
                // left: {
                //     color: Colors.white,
                // }
            }}
            wrapperStyle={{
                right: {
                    backgroundColor: Colors.white,
                },
                // left: {
                //     backgroundColor: 'white',
                // }
            }} />)
    }
    return (
        <Fragment>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.white}
            />
            <SafeAreaView
                style={(styles.container, { backgroundColor: Colors.white })}
            />
            <SafeAreaView style={styles.container}>

                <LinearGradient
                    colors={[Colors.white,Colors.white]}
                    style={{ flex: 1 }}
                >
                    {/* <KeyboardAvoidingView behavior='position'> */}
                    <MoreHeader
                        title={languageJson.SupportRequest_Heading}
                        isImage={true}
                        onPress={() => navigation.goBack()}
                    />
                    {/* <View style={styles.mainContainer}>
                            <FlatList
                                data={item}
                                ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                                renderItem={_showMySupportRequest}
                                contentContainerStyle={styles.flatList}
                                showsVerticalScrollIndicator={false}
                                nestedScrollEnabled
                            />
                        </View>
                      
                        <ViewRowVise style={styles.textInputContainer}>
                            <View style={styles.textInputInnerContainer}>
                                <TextInput
                                    placeholder={'write a message ...'}
                                    ref={messageRef}
                                    placeholderTextColor={Colors.placeHolderTextColor}
                                    autoCapitalize='none'
                                    style={selectdLanguage == 'ar' ? [styles.textInput, { textAlign: 'right' }] : styles.textInput}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <TouchableOpacity style={styles.sendButtonContainer}>
                                <Feather name='send' size={width(5)} color={Colors.buttonBlue} />
                            </TouchableOpacity>
                        </ViewRowVise> */}
                    {/* </KeyboardAvoidingView> */}
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        showUserAvatar={true}
                        isCustomViewBottom
                        // renderCustomView={() => <View style={styles.line} />}
                        user={{
                            _id: 1,
                            avatar: 'https://placeimg.com/140/140/any',
                            createdAt: new Date(),
                        }}
                        renderBubble={_renderBubble}
                        renderAvatarOnTop={true}
                        
                    />
                </LinearGradient>

            </SafeAreaView>
            <SafeAreaView
                backgroundColor={Colors.white}
            />
        </Fragment>
    );
}
