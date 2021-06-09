import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, View, Text, ScrollView } from 'react-native';
import styles from './About.Style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utills/Colors';
import Header from '../../components/HeaderAddNew/HeaderAddNew.component';
import ArrowButton from '../../components/ArrowButton/ArrowButton.Component';
import { height, width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import TextRowVise from '../../components/TextRowVise/TextRowVise.Component';
export default function About({ navigation }) {
  /**
   * Reading Screen Data from redux depending on selected language
   */
  const languageJson = useSelector(state => state.Language.languageJson.AboutApp_Screen)
  const selectdLanguage = useSelector(state => state.Language.selectdLanguage)
  const aboutText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo dui, aliquet quis condimentum a, porttitor eget neque. Cras facilisis nunc euismod magna imperdiet, eu sodales dolor sollicitudin. Maecenas pellentesque pha retra risus, id semper tortor iaculis a. Suspendisse gravida sem sapien, in ullamcorper odio mollis ut. Cras nec volutpat lacus, vitae aliquet massa. Integer rhoncus turpis ut turpis fermentum, vitae ornare tortor tincidunt. Curabitur at lectus quis leo sollicitudin tincidunt in iaculis ligula. Nunc finibus mi vitae lectus sagittis, ac hendrerit ex congue. Quisque volutpat turpis sit amet justo laoreet faucibus ut vel ligula. Nunc pellentesque elementum turpis vel dignissim. Etiam vel leo quis nibh placerat molestie. Pellentesque sit amet ligula vitae enim dignissim interdum quis vitae massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nNulla et finibus metus, sagittis faucibus augue. Morbi justo sapien, efficitur in metus nec, fermentum gravida ligula. Nullam mollis leo justo, vitae consectetur nisi sodales sit amet. Etiam eget magna quam. Integer cursus metus id sem hendrerit tristique. Pellentesque in metus at neque malesuada sollicitudin nec sed est.';

  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FCEAE6'} />
      <SafeAreaView style={(styles.container, { backgroundColor: '#FCEAE6' })} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#FCEAE6', '#F9ECDC', '#F9ECDC', '#f6f6f6']}
          style={{ flex: 1 }}>
          <View>
            <Header
              title={languageJson.AboutApp_Title}
              hideRightIcon
              onPressBack={() => navigation.goBack()}
              containerStyle={styles.headerContainer}
              backIconContainerStyle={styles.backIconContainerStyle}
            />
            <ScrollView
              style={styles.scroll}
              showsVerticalScrollIndicator={false}>
              <TextRowVise style={selectdLanguage == 'ar' ? [styles.aboutHeading, { marginRight: width(5) }] : styles.aboutHeading}>{languageJson.AboutApp_Title}</TextRowVise>
              <Text style={styles.aboutText}>{aboutText}</Text>
              <View style={{ marginTop: height(2) }}>
                <ArrowButton title={languageJson.TermofService_Button} onPress={() => { }} />
                <ArrowButton
                  title={languageJson.PrivacyPolicy_Button}
                  containerStyle={{ backgroundColor: Colors.purplePrimary }}
                  onPress={() => {navigation.navigate('Cart') }}
                />
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
      </SafeAreaView>
      <SafeAreaView backgroundColor='#f6f6f6' />
    </Fragment>
  );
}
