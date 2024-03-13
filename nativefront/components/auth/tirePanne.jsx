import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tire = () => {
  const navigation = useNavigation();
  const [checkedTire, setCheckedTire] = useState(null);

  const handleTirePress = (tireNumber) => {
    setCheckedTire(tireNumber);
    console.log(`Tire ${tireNumber} checked`);
    // Add your logic here to handle the check state for each tire
  };

  const RadioButtonCorner = ({ position }) => (
    <TouchableOpacity onPress={() => handleTirePress(position)}>
      <View style={{ position: 'absolute', ...position, flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value={position}
          status={checkedTire === position ? 'checked' : 'unchecked'}
          onPress={() => handleTirePress(position)}
        />
        <Text style={{ marginLeft: 5 }}>Check</Text>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WHICH TIRE </Text>

      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: 'https://cdn3.vectorstock.com/i/1000x1000/10/97/blue-car-top-view-icon-isometric-3d-style-vector-11241097.jpg' }}
          style={{ width: 200, height: 300, marginTop: 20 }}
        />

        {/* Radio buttons for each tire */}
        <RadioButtonCorner position={{ top: -10, left: -30 }} />
        <RadioButtonCorner position={{ top: -10, right: -30 }} />
        <RadioButtonCorner position={{ bottom: 350, left: -30 }} />
        <RadioButtonCorner position={{ bottom: 350, right: -30 }} />
      </View>

    <View>
      <Text>do you have a spare tire</Text>
        <TouchableOpacity>
          <Text>yes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>no</Text>
        </TouchableOpacity>

    </View>


    </View>
  );
};

export default Tire;
