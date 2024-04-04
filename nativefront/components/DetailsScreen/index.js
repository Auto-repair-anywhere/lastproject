import React, { useState, useEffect, useRef } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import AppBar from '../common/AppBar';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../common/CustomButton';
import * as Location from 'expo-location';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendPostRequest } from '../../store/actions';

const DetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { type, problem, spareTireOption, parkingGarageOption, carData } = route.params;

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




  const handleFindMePress = async () => {
    console.log("handleFindMePress");
    setLoading(true);
  
    try {
      const userId = await AsyncStorage.getItem('userId');
      const today = new Date();
      const formattedDate = today.toISOString().split('.')[0]; 
  
      const parkingDescription = parkingGarageOption === "Yes" ? 'Le véhicule doit être garé dans un garage.' : 'Le véhicule n\'a pas besoin d\'être garé dans un garage.';
  console.log("carData",carData);
      const data = {
        brand: "Kia", 
        problem: problem,
        description: spareTireOption === "Yes" ? 'Pneu de secours nécessaire' : 'Pas de pneu de secours nécessaire',
        moredescription: parkingDescription,
        milage: 50000,
        time: formattedDate,
        userId: userId || "0",
        latitude: selectedLocation?.latitude,
        longitude: selectedLocation?.longitude,
      };
      console.log("data");
      console.log(data);
      sendPostRequest(data)
        .then((res) => {
          console.log("res data");
          console.log(res);
          navigation.navigate('DetailsRequest', { item: res });
        })
        .catch(error => {
          console.log(error.body);
          console.error('Erreur :', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error('Erreur lors de la récupération de userId :', error);
      setLoading(false);
    }
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
