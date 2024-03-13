import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import {IP} from "../../ip.json"

const Tire = () => {
  const navigation = useNavigation();
  const [checkedTire, setCheckedTire] = useState(null);

  const handleTirePress = (tireNumber) => {
    const tireName = getTireName(tireNumber);
    setCheckedTire(tireName);
    console.log(`Tire ${tireName} checked`);
  };



  const RadioButtonCorner = ({ position, name }) => (
    <TouchableOpacity onPress={() => handleTirePress(name)}>
      <View style={{ position: 'absolute', ...position, flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value={name}
          status={checkedTire === name ? 'checked' : 'unchecked'}
          color={'blue'}
          onPress={() => handleTirePress(name)}
        />
        <Text style={{ marginLeft: 5 }}>Check</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text style={{marginTop:5}}>WHICH TIRE </Text>

      <View style={{ position: 'relative',marginTop:30 }}>
        <Image
          source={require('../../assets/blue-car-top-view-icon-isometric-3d-style-vector-11241097.jpg')}
          style={{ width: 200, height: 300, marginTop: 10 }}
        />

        <RadioButtonCorner position={{ top: -10, left: -40 } } name={"l1"} />
        <RadioButtonCorner position={{ top: -10, right: -40 } } name={"r1"} />
        <RadioButtonCorner position={{ bottom: 300, left: -40 } }  name={"r2"}/>
        <RadioButtonCorner position={{ bottom: 300, right: -40 } } name={"l2"} />
      </View>

      <View style={{marginTop:30}}>
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
