import React, { useState, createRef, useEffect, useCallback } from 'react';
import Container from '../../components/MapsContainer/MapsContainer.component';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { width, height } from 'react-native-dimension';
import Colors from '../../utills/Colors';
import styles from './BuyerOrderTracking.styles';
import pendingOrders from '../../DummyData/PendingOrders';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, } from 'react-native';
import StepIndicator from '../../components/StepIndicatorBuyerTrackOrder/StepIndicatorBuyerTrackOrder.component';
export default function DriverMapsHome({ route, navigation }) {
  /**
   * State used for User Location
   */
  const [userLocation, setUserLocation] = useState({
    latitude: 33.669304,
    longitude: 72.997088,
  });
  /**
   * Ref of mapview used for animating programmatically
   */
  const mapRef = createRef(null);
  return (
    <>
      <Container onBackPress={() => navigation.goBack()} back title="ORD260RT5640" orderId>
        <MapView
          style={styles.map}
          ref={mapRef}
          loadingEnabled={false}
          provider={PROVIDER_GOOGLE}
          mapPadding={{ bottom: height(7) }}
          region={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.045,
          }}>
          <Polyline
            strokeColor={Colors.buttonSecondaryBlue}
            coordinates={[
              { latitude: userLocation.latitude, longitude: userLocation.longitude }, // optional
              // ...this.state.coords,
              {
                latitude: 33.6682255,
                longitude: 72.9892784
              },
              {
                latitude: 33.6700113,
                longitude: 72.9879802
              },
              {
                latitude: 33.690618,
                longitude: 73.005442
              } // optional
            ]}

            strokeWidth={4}
          />
          <View>
            <Marker
              coordinate={userLocation}
              title={'marker.title'}
              anchor={{ y: 0.23 }}
              image={require('../../assets/DriverHome/pin.png')}
              description={'marker.description'}>
            </Marker>
            <Marker
              coordinate={{
                latitude: 33.690618,
                longitude: 73.005442
              }}
              title={'marker.title'}
              // anchor={{y:0.23}}
              image={require('../../assets/DriverHome/map.png')}
              description={'marker.description'}>
            </Marker>
          </View>

        </MapView>

        <View style={styles.flatlistContainer}>
          <StepIndicator currentPosition={pendingOrders.trackingData.statusId} />
        </View>
      </Container>
      <SafeAreaView />
    </>
  );
}
