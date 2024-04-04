import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
import CustomButtonWithSvg from '../common/CustomButtonWithSvg';
import CustomButton from '../common/CustomButton';
//import { acceptBreakdown, getProfessionelPosition } from '../../store/actions';
import { heightPercentageToDP, widthPercentageToDP } from '../utils/global_styles';
import { acceptBreakdown, getProfessionelPosition } from '../../store/actions';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsRequestScreen = ({  }) => {
  const route = useRoute();
  const [item, setItem] = useState(route.params?.item);
    console.log("item");
  console.log(item);
  /*const [clientLocation, setClientLocation] = useState({
    latitude: 0, 
    longitude: 0, 
  });*/

  
 /* useEffect(() => {
    if (item) {
      const { latitude, longitude } = item;
      setClientLocation({ latitude, longitude });
    }
  }, [item]);*/

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

  const handleAccept = async () =>  {
    setIsLoading(true);
    const professionalId = await AsyncStorage.getItem('userId');

    acceptBreakdown(item?.idrequest,professionalId)
      .then((res) => {
        console.log("acceptBreakdown");
        setItem(res)
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
    if (mapViewRef.current && item?.latitude !== 0 && item?.longitude !== 0) {
      mapViewRef.current.animateToRegion({
        latitude: item?.latitude,
        longitude: item?.longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      });
    }
  }, [item]);

  useEffect(() => {
    const interval = setInterval(() => {
      getProfessionelPosition(item?.id_professionel)
        .then((res) => {
          console.log("getProfessionelPosition");
          console.log(res.data);
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
        latitude: parseFloat(item?.latitude), 
        longitude: parseFloat(item?.longitude), 
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}
    >
      <Marker coordinate={{
        longitude: parseFloat(item?.longitude),
        latitude: parseFloat(item?.latitude)
      }} title="Client" pinColor="blue" />
      <Marker coordinate={driverLocation} title="Driver" pinColor="green" />
    </MapView>
</View>
<View style={styles.textContainer}>
    
    <Text style={styles.title}>{item?.brand}</Text>
    <Text style={styles.description}>{item?.problem}</Text>
    <Text style={styles.description}>{item?.description}</Text>
    <Text style={styles.description}>{item?.moredescription}</Text>
    {item?.status == "waiting" && <CustomButton
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

