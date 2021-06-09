import React, { useState, useEffect, useCallback } from 'react';
import Container from '../../components/ChatListContainer/ChatListContainer.component';
import {
  View,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styles from './BuyerChat.styles';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import SearchInput, { createFilter } from 'react-native-search-filter';
import dataDummy from '../../DummyData/Chatlist';
import { GiftedChat, InputToolbar, Send, RenderMessageImageProps } from 'react-native-gifted-chat';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PopItemComponent from '../../components/PopItemComponent/PopItemComponent.Component';
const KEYS_TO_FILTERS = ['name'];
export default function BuyerHome({ route, navigation }) {
  /**
   * Self defined States
   */
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('');
  const [online, setOnline] = useState(false);
  const [messages, setMessages] = useState([]);
  const [threeDotsModal, setThreeDotsModal] = useState(false);
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.Chat_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const isProfileCompleted = useSelector(state => state.Configuration.isProfileCompleted)
  const languageJsonShow = useSelector(state => state.Language.languageJson.ServiceDetailsOverview_Screen)
  const appMode = useSelector(state => state.Auth.appMode)
  /**
   * Logged In User json for Gifted Chat
   */
   const popItems = [
    {
      image: require('../../assets/OverViewDetailAssets/flag.png'),
      title: languageJsonShow.Report_Label,
    },
    {
      image: require('../../assets/OverViewDetailAssets/blocked.png'),
      title: "Block",
    },
  ]; 
  const user = {
    _id: 1,
    avatar:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBAQEBAVFQ8QDw8QDxAPFRAPFQ8QFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQFy0fHR0rLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstKy0tLS0tKy0tKy0tLS0tLSstLf/AABEIAJYBTwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBQYEBwj/xAA/EAABBAAEAwUECAQFBQEAAAABAAIDEQQSITEFQVEGImFxgRMykaEHI0JScrHB0RSC4fAWYpKisjNUk8LSFf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgIDAAMBAAAAAAAAAAECEQMhEjETQVEyYXEi/9oADAMBAAIRAxEAPwD1dFKkgEzJFKkaRsySRpGkAEUaSSBIoIoBIpUiAkZBOAQCcgCEUkkgKSC8S+mDtK52LOGjc9rYGhju84CRxAc5waPxBuv3TyIRJsPSO3faPD4PDvZK4mWZhZHGynO10zEEim+PwteOT9oG65WDc955vT8I/dZh+OLgMz3E1l7xzU2qABPKjVLjkLibB06brSYyHtcY/iXtZGggAtDhXI3ueemiiw+IbpqBd1mAN+NH81WB456u9bN8kXE7hutUHXyHK09Q/KrN+u3qSCPzUzNANOVfBVuHmeCLAqtd9unyVrE4PFj3XbFRlGmGW63PZnBSTSQww4gwSuikyzNzEtDSHEU1wJsAjcLXDsXjD73GZz1pkg+H1yo+wLLxsJH2YpTtdNyAfmR8V6kprO1ij2EkPvcUxJ8tPzcUB9HrftcQxh8GvibfxYVtCggt1VcA7PwYFjmwh1vIMkkhzvkI0FmgABroABqeqtEkEESCKCYBBFBAJBFJMAgigUECCKBTAJJJIJJSICNIqNr0FJUnJI2NBSVIpI2ApGkkUbIKRpJJAJFBFAEIhNRCAekgkkBXmH0hdhopHz4kSOM2IfG4A19UGto5et6acqXp6x3ad4fI7v0Gd3luN/naXlprxY+WXbxLGdkMQ3o6tq/W1T43BPiFObR9CvWJ4jvy5LO9ocOx0Ty5osAm61CePJd9t8+DHW48+HgiyQixXO/6p8zXAkb+I5hQ5nDffkeq2cadr3WKvb008F38NxNEjrtrsTsf76lVIfrqurDavjyjXMAPXb+/FAj2/wCjCK8RI77mHLR/M9v/AMr0grzv6KwfaYknf2UW34nL0RZU77BBFAoIEkkEAkEkkAkEkqTAJIpUgGlApxCFIBqRRpJMjKSTkEBOkhmQLlnpZyVpoKKANpIJJkKSSVI2CSSpGkbBJJUjSNjRBFKkaRsEilSNJbABeMdv8Li8LIakzNe97mPoW+NxsZm/eBseNA6XQ9opeW9sMT7bEPcTbGnKzeso0/vzStb8Ett0wnDuKYvdxc4Zi3KcpuuYG9a8ldMcZm6x11sGvmu3DxQt7xYKPSrB8D0Rnx7dmCgFFy268cbHm/F8IYpnNrQnM2uQPJdXD+EBvexDRd9yJxptnbP4Xy+K6+MEvmDtKBv1C0DGCYNGgYwZtR7xcB7zjsKWmWV1GGHHLlWU7UYJrGNcGsa4SMAMbWRhzHNcaytAFgt3rmb2Cr+EsOdhI2c2vVW/ac6RtsZG2RRuzsKvU1Z1/wA3kqrhwoNI5vafUH+qrC/89o5ZPk6e1/RWfrJ/GJuv4Xbf7l6JS89+iirl6ujBPo6l6LSm1hfaOkqT6QpLZGIJ9IUnsGJJxQT2NAgigjYJBFBMEgiggiKaikUwakiggACiHI5UQxT5Q9FnSzI5EQxLcPVAFPCGVKkbgG0bTKSpASJJoRtIzgEQE0FODkuyODU4NTc6WdLsH0lSAKKQB7AQQdiCDXivn/tkJMDjpMM3EySRtDc5cxrR32hwHPMaI1FeS+gl5z9L+BYWYeYRZ5S4xkNc5jiwDMD3TqATX8yrH3204srLretsTFjI3xgMfYAF3vsqfHY6tGnbdV+PaIn2ywdQ8WT+a4H4yr+avHjntrnzX07ZJbFk6hytcBLmABJ2Fi9NqCzDXOkNDqLPRajh0Aa1tXY0N9Us/Q4rdn8a4YJIw7myyCs5hWhpa3kHN18ivQMAQ7R2oOhHgVT8W7MU1kuH0Dm5jESTTmuyvDHHoRseThqlx22K5ZJlv9b76Jm9555exPoczD+vyXpK80+iuYscIyw5nRkHT3Ko97ptXnS9LKWXty32CBSSKQNTU4ppTAJJJJgEEUKQQIJ1JpKcBIFGkqVEagiVG6Vo5oByCQeDzRJCZOikqQzI5lz9r2WVLKlaNo7MqSSRS2DaSpOST2DaSpFJPYCkqRST2RUnBBFPZDaNoIpGK84+mLhuKkZh5sNHJI2L2rZWRAvc3NlIdlGpHdINXyXoyrOMcaZhmknvPH2QdvM/onj1eg+Z3YTEynKIJM2ru8xzO6LN26h1VdNhJGSOjkaQ9hAeLBykixqLC9Qmx8mIONxEjiZDFI0f5QRVAcq2Wd7c8LdFNDjmC4MVFEHkbB2QVfnXyW27o9dzas4XggNfDT9SfmtIyEZRR8lQ4V40N6FXEeJFaeqwyu3ThNOiKb2dknQK+mYWYPAl3vSMxTz4CRweB8K+CyuQ4iSOBu8sjI9OjiAT8LW37bPax+CiFUI5CANqOWvRacePVrPmz7kQ9m+Pfwcwc9mZr2hjyPeDb0I5HYbr03AcQjnbmjdfUbEeYXjGJFUVZcD4o6Nw72nLUij58lVwlY16+gs1huPuaGl3ea7724PS/wB1c4LiUco0NHoa18j/AGfBZ3CwtusppTimlSZqSRcOqjfO0blMJECVT8S47HEN9egWfxfalztGivEq8cLS2v8AjHGmw6bnkAs3L2ilJsCh4qpnxReczjZUBlXRjxyTsmmwvagj32n01Xc/tSytLvyWHdiFC/Eo+OBq8d2kcfd081US8aed3n0VK6VRlycxkC9HaORuzr80X9rpSKAF9bWdJTXFHjA9vD0c6x7OMPvVSO4o93NY/DS21oeES9ZSDijmnXUJ8/FXO20S+GntpxKOqcHLIx4145q2wPEw7Q7pZcVg8lzmRBULZAdk/MsripLaSjzJZlPiaRJMzJWnIEgRUYKcHJ6I9RzTNYLca/Vc/EMX7NmYbkhrfPU/kCs3i8a46kk+arHDZO/i3HqBEel6XzPl0WD4ziy7u31J/b5rv4jOToFksdxUse6MYeVxvV31dHy72y28dTUPH2fh+7HMz77H7qRnFRLw7D4OSIFrpH4V8pOsGUB0DgOf2Tr90jyqcPj3zSBjcOWsomSRxHdaPAA3e2668O0RzsY4fVvkiLj0IsX4aPd8Alj1VZasVsnCJIXBjqpwtrh3mu8Qeib7F7DVaL03EcBaWAcmk6b2D+W26y2Kw4Bcw7tJaT4g0s+TDVa8ecyitwkDoYpsUD3mgww72JHgBzx4hhNeJvkoMO7K2Fjiahja0c8ocTJQ8BnWi4y1kWBhiI77z7d/kQQ35EfAqhw0Hc727u871WsmsWeV3Xe/HxE+zMjRIOT+4SORAO48Qo4Zhma3MDZFBpB1uuXgn4HDte7I+nNaLo6kcwPBXkEQYO60AcwNFUiLUuCxYb3H3RrXoeRVlFiTGbBthPeH/sAqR8wJpzfI9F2RydU0tNw7ipY7clmgy8qIsEdFFj+05BLWtNgkG9NVQjE5bI5OB89FNxBoewTDwDvI7H46fBLwlvZHzdoJjzAXBLxKV27z6aLnLlE8rSYyfQPe69SbPioXFRuchmKoJCVEXJFNpLZgSonKWkktjSFNNqUlRl6WzMeFDlUrzaai5DTY0iCoXYhoF5guKLjMZdltWhahye1y52ztIvME9so6oGnSCiHKFrx1T2vB5pE7oeIPbztWGG4uNnKjsdU4KbhKe618U4cNCpbWSgxTmbH0Vjh+KH7SxvHpXkvLRtVv/wCqzqpGcQaeanxp7WFo2uIYwdU4YxvVLxo2q+1eMDPZDmHF1eBGX9VlJ8fRN6Abqx7Z4rM40dmABZKSfM0m+VHzWmJrHGYgaEbUD8RaqpnVFI+tXAMb67pz3kxss7tI9A4gfIBTMjz+zZyvO7waFolV47EnCiMNALabnaeZIJsdDoosTMJml7TZFjoWuHI+Kl7RDPm8C13w1/VUmHeY3l49xzgHt8DsfMFZ33tp9PX+FYz2mGa4C8zGEcqJG6yHGdcU+IbvfG0ebw39SrjsjNcDo/ug5fIHRUHFJK4rqNA1snqyG2/7gFWc3pPFdWj2kl9rOQPdADW+DG2P781S8Vx4haGM1mf7vPKObz+g5/Fd2LmDA6V2tNAaPvOJOizEYdJI6R5tx3/YdAnl7E9Nf2TiBjN6vvNmOpJOpvqrxzFQ8OzRhrm7Fov9leRHME0uSbkV0F5yZhsAVBihSqMfM4SgAkAxAaGvec79AgLGHE7el+tn9Vc8JkzM9kTo4Fl9Adj6ErO4Uag+vmrTAyVz31QEUrSxxaR3mkg+ajcCVZ8bILmSV77BfmP6EfBVZejyOQhGnABAFLMpuSpiD9FCXKerTfZjmp81+CIao+yT3TtauaXFk7I8rR44xI6Lqud9JjpSo9SjdLpISoy5SRw3ug5gCexpVuxziKzaKBkPezB3zTRh3ICNwO6x8r+lp3xzSD7RpdDMa/7y4WkhF0uim5ZfqpItDxR7R7yEHG39bVNd806GgUvLL9PUX54rJvac3jMoVO6UBMOL5KJnyfp2Yrs8ak3RHaCXZZw4kpoxJ5K5ln+o6ad/FpXc6XXDxmRo1WWjxhXU3EXzUXPOfa5jjV//AIglBU3+IXVqdVn2sJ2KJgPVHz5fp/HGh4hMXxQvO7mknyzGvkqCd+Vx6HQ+HQ/3+ivmOb/DQA6uLXihzAc4fos9xLbnqCLP6rqwu5tlY6Wm4oj0D7/8jlYn6uMCvrJKvwbyCruDOD4G5zQjle156tAa8V1JzUu2WTNK11VoKHTotJ6RVXxUU8t/yj40P2VUIhTr2II/ZWnEzcrvM781wYjD5gW8jodx+SzW1XYyXle7SR4gjT8iq7j2nE31/wBm11+BeGf0Xb2KiySgAA5ICaOou3Uubj0VYwyfewkUem2ssj9P9C0nciPVqk444kNHIAu9dlycLZb2NrQubm8rXXxMHU8gP1UfB229vi78kr7H01Xsy1pDQAAdqadFH7WRvp5D8lKH60diN0x0d6O/1dVRI3TuJ7zB56/uqnjElYhg0B9k078y5w57q6jb9k6+Sy2OmDsXI4a5Q2Ll9nfX8RcihZxSm6Bs6ZnbV4AclZRyEVW3U7f1VTACdGN/YKywsGU25+Z3JoNgev7IC2kYXwWd2Pv+V1D9lwGgreCJ0kb421mcx2Xlbht6LNxzkEh4IIJBB5EbgrLPKS9tMO3b7QJX0CgGMapxxFo5LO54xpJTS152CgfC87hdbeMM6KObi7eiczl9Ff8AUDcKSmvwxCkHEAUyXiDdk9n0iMSblpPE7Sd0XhvVOWFUJfShc9dbmM6qN2VPcTqq7F4dw2XDIx/VX4eH6FRSYcBcmPLJ7a3BV4Rx2KsG8L9oNDS6G4DUUN10xsczqneXETGqDE8KfH9rRLDsA3Wglbn3VfLhWtOqU5djwcErASl/DgjddJhadinRYKtbVyxNxsVkmD8UY8LWytBAmNbSNp05RCBuphGEpHgmkmxOSppGOrS072zlAcOb3TvZlLUG2p4YwOwsTj7zfa/83Kh4g8kmx19f3Ws4ZhDFhGRuouLDK87ZGyWWt8ef9hZbiLhqL1XThNRnab2bGcYmM8jFINOXea75ZVbujt73crofBUPZmXJiqO0kb2UeZ0I/Iq74i4sfTeeUjyKuBU8RP1pUUbLcpeI17SzvoPgm4Zu5vXelP0r7XXAcT7OZ55ljWc+p/dR8UkzyR2O9b2u/l2/5OXDwriUcczmSE5u674gFW+KYJsUDH/08rTfiRr6rbH1GN91luMGi5vklwj34/Pl5FTdp2ASSDplr5Ll4TLRaTyf+YKj7X9NQ7Uoi9uXJQtls+C6GNvnoqSjvJmdXutc4jyWB4ZO5pf7Q94yPcQOrjmofFbiYU2Ru990V0WN4xh3xYtnswKcz6xr9Qa29dUUNBgpHOoDujwAcfjsF2xubG7QZjz5k+aq8Pjx7rGX1DaaL/ErPBtkdsQz8Db+Ljd/JAW3DJcSX5mZWeFE6eKpuLYjPPK4EEF5st0Djs4jzNlX3B3Oe7uvc9rTRcSAHHmB4DqqrtRgWwvBjcMry7NGDZidvXkRqPIrHnlsi8LNquTENA8VyjGa0kWAphiC55I03XRG8EqUhq4JyW7Jrcw1KVxDscbOia5rb1UDXjqlKwkikqbpDByKQN80AwgKJ1jklL/Yt06AE59LhzuUjX6I8qfVWbIlJH0OqSSxvbSOg4qq02UjMTZ1CSSysioZiOo0VRi7vdJJacZ0ySLQEbrpww0FlFJa29DTpay01+HCKSW6WoYzCt3pcuImrQBJJGN2yy6NYSUY4yXVe5ASSVobzHRtjiEbM2WNmXvHMXBt7lYzG7nySSXdJ0yZ3G4wwubKN43g+Y5/K1t84ndhpAKBja8g+DtkkkjUPESfaO87UEUOd7XkkZdaB0NdUklP0r7dPC4gcVK5wsgV60AtZwyIe0Dh9puar0sCtkkl0z+MYX3WV7Xx/WSebfyCpYxcR9PkQUUllfbSelxhcY5uVrgDYBDufqtLFg3uAOcAHXujWj5oJKk09+EawX6+ZWO7RQkvjdpbpMpvoQf2CSSWXoRy4XFxN3DtCQQMu4PmraDi8ZAaGO72zdGg/iOpSSSlPS34bM+QlgdlaPss7or8W5+Sk7ScNbHhoy0AFslEjd4IOrjzN/mUkkcn8SntlXaKZkV1aKS4cm+KV0I5pmIgBCSSmWtNRzfwoClijpJJLKiRJdJskm2iSSUgqCUWmtCSSr6Q//9k=',
  };
  /**
   * Reading User data and messages from navigation Parameters
   */
  useEffect(() => {
    setName(route.params.name)
    setOnline(route.params.online)
    setUserType(route.params.userType)
    setMessages([
      {
        _id: 1,
        text: "I'm Fine, Thank you?",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'data:image/jpeg;base64,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',
        },
      },
      {
        _id: 2,
        text: 'Hey! Engene',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar:
            'data:image/jpeg;base64,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',
        },
      },
      {
        _id: 3,
        text: 'How are you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: route.params.img ? route.params.img : 'https://placeimg.com/140/140/any'
        },
      },
      {
        _id: 4,
        text: 'Hey! Julia',
        createdAt: new Date(),
        image: 'https://placeimg.com/140/140/any',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: route.params.img ? route.params.img : 'https://placeimg.com/140/140/any'
        },
      },
    ]);
  }, []);
  useEffect(() => {
    if (appMode == 'buyer'&&isProfileCompleted==false)
      navigation.navigate('SignUp', { nextScreen: "chat" })
  }, [])
  /**
   * Function that calls on send message
   */
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  /**
   * Custome Message Container
   */
  const renderMessageContainer = props => {
    return (
      <View
        style={[
          styles.messagesContainer,
          user._id == props.currentMessage.user._id && {
            flexDirection: 'row-reverse',
          },
        ]}>

        {props.previousMessage.user ? (
          props.previousMessage.user._id != props.currentMessage.user._id && (
            <Image
              style={styles.avatar}
              source={{ uri: props.currentMessage.user.avatar }}
            />
          )
        ) : (
            <Image
              style={styles.avatar}
              source={{ uri: props.currentMessage.user.avatar }}
            />
          )}
        {props.previousMessage.user ? (
          props.previousMessage.user._id != props.currentMessage.user._id ? (
            <Text
              style={[
                styles.currentMessage,
                user._id == props.currentMessage.user._id
                  ? { borderTopRightRadius: 0, marginRight: width(4) }
                  : { borderTopLeftRadius: 0, marginLeft: width(4) },
              ]}>
              {props.currentMessage.text}
            </Text>
          ) : (
              <Text
                style={[
                  styles.currentMessage,
                  user._id == props.currentMessage.user._id
                    ? {
                      borderTopRightRadius: 0,
                      marginTop: 2,
                      marginRight: width(17),
                    }
                    : {
                      borderTopLeftRadius: 0,
                      marginTop: 2,
                      marginLeft: width(17),
                    },
                ]}>
                {props.currentMessage.text}
                {'\n'}<Text style={{ lineHeight: 4 }}>{'\n'}</Text>
                <Text style={styles.dateTime}>
                  {props.currentMessage.createdAt.toLocaleTimeString('en-US')}
                </Text>
              </Text>
            )
        ) : (
            <Text
              style={[
                styles.currentMessage,
                user._id == props.currentMessage.user._id
                  ? { borderTopRightRadius: 0, marginRight: width(4) }
                  : { borderTopLeftRadius: 0, marginLeft: width(4) },
              ]}>
              {props.currentMessage.text}
            </Text>
          )}
      </View>
    );
  };
  /**
   * Footer Method
   */
  const renderFooter = props => {
    return (
      <InputToolbar
        {...props}
        style={{ color: color.textBlack }}
        containerStyle={{
          backgroundColor: color.backgroundWhite, paddingHorizontal: width(2)
        }}
        placeholderTextColor={color.placeholderTextColor}
      />
    );
  };
  /**
   * Custom Send Button
   */
  const renderSend = (sendProps) => {
    return (
      <Send {...sendProps}>
        <View style={{ width: width(12), alignItems: 'center', paddingBottom: height(0.5) }}>
          <Image
            source={require('../../assets/buyerHome/send-blue.png')}
            style={{ width: 25, resizeMode: 'contain' }}
          />
        </View>
      </Send>
    );
  }
  /**
   * Custom Action Component
   */
  const renderAction = (sendProps) => {
    return (
      <Send {...sendProps}>
        <View style={{ width: width(12), alignItems: 'center', paddingBottom: height(1.5) }}>
          <Image
            source={require('../../assets/BuyerOrderDetails/plus.png')}
            style={{ width: 25, resizeMode: 'contain' }}
          />
        </View>
      </Send>
    );
  }

  return (
    <>
      <SafeAreaView style={{ backgroundColor: color.backgroundWhite }} />
      <StatusBar
        barStyle='dark-content'
        backgroundColor={color.backgroundWhite}
      />
      <Container title="Feature">
        {/* {console.log(messages)} */}
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={color.backgroundWhite}
        />
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={styles.backIconContainerStyle}>
              <Image
                style={styles.backIcon}
                source={require('../../assets/AddNewAssets/arrow-left.png')}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{name}</Text>
            <TouchableOpacity
              onPress={()=>setThreeDotsModal(true)}
            >
              <Image
                style={styles.trashIcon}
                source={require('../../assets/HomeAssets/more-black.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.subHeading, (userType == 'provider' || !online) && { color: color.lightGray }]}>{online ? languageJson.Online_Label : languageJson.Offline_Label}</Text>
        </View>
        <PopItemComponent
              isModalVisible={threeDotsModal}
              containerStyle={{ marginTop: height(6.5) ,position:"absolute" }}
              popItems={popItems}
              onPressClose={() => setThreeDotsModal(!threeDotsModal)}
        />
        {/* <View style={{height: height(85)}}> */}
        <GiftedChat
          messages={messages}
          placeholder={languageJson.TypeSomething}
          alignTop={true}
          renderAvatarOnTop={true}
          showUserAvatar
          renderMessage={renderMessageContainer}
          onSend={messages => onSend(messages)}
          alwaysShowSend={true}
          renderInputToolbar={renderFooter}
          textInputStyle={{ color: color.textBlack, textAlign: 'left', paddingHorizontal: width(3), fontSize: width(4), backgroundColor: color.opacitiveLightGray, borderRadius: width(2), marginTop: height(1), marginBottom: height(2), paddingTop: height(1) }}
          user={user}
          renderSend={renderSend}
          renderActions={renderAction}
        />
        {/* </View> */}

      </Container>
      
      <SafeAreaView style={{ backgroundColor: color.backgroundWhite }} />

    </>
  );
}
