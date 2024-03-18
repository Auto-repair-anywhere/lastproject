import React, { useState, useEffect, useRef } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import AppBar from '../common/AppBar';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../common/CustomButton';
import * as Location from 'expo-location';
import { sendPostRequest } from '../../store/actions';
import { useRoute } from '@react-navigation/native';

const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { type, problem, spareTireOption, parkingGarageOption } = route.params;

  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapViewRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedLocation(coordinate);
    mapViewRef.current.animateToRegion({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'You need to grant permission to access your location.');
          return;
        }

        const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });

        setSelectedLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        mapViewRef.current.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    getUserLocation();
  }, []); 

  const handleFindMePress = () => {
    setLoading(true);
    const data = {
      latitude: selectedLocation?.latitude,
      longitude: selectedLocation?.longitude,
      driverId: 123
    };
    sendPostRequest(data)
      .then((res) => {
        navigation.navigate('DetailsRequest', { item : res.data });
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color="#FFFFFF" />}
      <AppBar title="Map View" />
      <View style={styles.container}>
        <MapView
          ref={mapViewRef}
          style={styles.map}
          onPress={handleMapPress}
          initialRegion={{
            latitude: selectedLocation ? selectedLocation.latitude : 37.78825,
            longitude: selectedLocation ? selectedLocation.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {selectedLocation && (
            <Marker
              coordinate={selectedLocation}
              title="Selected Location"
            />
          )}
        </MapView>
        <View style={styles.footer}>
          <CustomButton
            text="Confirm location"
            onPress={() => handleFindMePress()}
          />
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;
