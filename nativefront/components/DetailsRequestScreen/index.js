import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
import CustomButtonWithSvg from '../common/CustomButtonWithSvg';
import CustomButton from '../common/CustomButton';
//import { acceptBreakdown, getProfessionelPosition } from '../../store/actions';
import { heightPercentageToDP, widthPercentageToDP } from '../utils/global_styles';
import { acceptBreakdown, getProfessionelPosition } from '../../store/actions';

const DetailsRequestScreen = ({ route }) => {
  const [item, setItem] = useState(null);
  const [clientLocation, setClientLocation] = useState({
    latitude: 0, 
    longitude: 0, 
  });


  useEffect(() => {
    console.log("route.params");
    console.log(route.params);
    setItem(route.params.item);
  }, [route.params.item]);

  
  useEffect(() => {
    if (item) {
      const { latitude, longitude } = item;
      setClientLocation({ latitude, longitude });
    }
  }, [item]);

  const [driverLocation, setDriverLocation] = useState({
    latitude: 35.8256,
    longitude: 10.6379, 
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setDriverLocation(prevLocation => ({
        latitude: prevLocation.latitude - 0.01,
        longitude: prevLocation.longitude + 0.001,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleAccept = () => {
    setIsLoading(true);
    console.log("item.id");
    console.log(item.id);
    acceptBreakdown(item.id)
      .then((res) => {
        setItem(res?.data)
        console.log('Breakdown accepted successfully');
      })
      .catch(error => {
        console.error('Error accepting breakdown:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const mapViewRef = useRef(null);

  useEffect(() => {
    if (mapViewRef.current && clientLocation.latitude !== 0 && clientLocation.longitude !== 0) {
      mapViewRef.current.animateToRegion({
        latitude: clientLocation.latitude,
        longitude: clientLocation.longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      });
    }
  }, [clientLocation]);

  useEffect(() => {
    const interval = setInterval(() => {
      getProfessionelPosition(item?.driverId)
        .then((res) => {
          const { latitude, longitude } = res.data;
          setDriverLocation({ latitude, longitude });
        })
        .catch(error => {
          console.error('Error fetching professional position:', error);
        });
    }, 5000); 
  
    return () => clearInterval(interval);
  }, [item?.status == "accept"]);

  

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="blue" />}
      <View style={styles.mapViewContainer}>
        <MapView
           ref={mapViewRef}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: clientLocation.latitude, 
            longitude: clientLocation.longitude, 
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          <Marker coordinate={clientLocation} title="Client" pinColor="blue" />
          <Marker coordinate={driverLocation} title="Driver" pinColor="green" />
        </MapView>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Adonz Automotive</Text>
        <Text style={styles.subTitle}>Muscat, Sulatanate of Oman</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
        </Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        {item?.status == "in_progress" && <CustomButton
          text={"Accept"}
          buttonStyle={{ marginHorizontal: widthPercentageToDP(60) }}
          onPress={handleAccept}
         />}
        <View style={{ 
          marginHorizontal:widthPercentageToDP(12),
          position:'absolute',end:0,start:0,bottom: heightPercentageToDP(24), flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{
            flex:7,
            flexDirection:'row',
          }}>
          <CustomButtonWithSvg
            text="Call"
            svgUri={require('../../assets/icons/call_icon.png')}
            buttonStyle={{  }}
          />
          <CustomButtonWithSvg
            text="Chat"
            svgUri={require('../../assets/icons/whatsapp_icon.png')}
            buttonStyle={{  }}
          />
          </View>
         
          <CustomButtonWithSvg
            svgUri={require('../../assets/icons/share_icon.png')}
            buttonStyle={{ width: '20%' }}
          />
        </View>
      </View>
    </View>
  );
}

export default DetailsRequestScreen;

