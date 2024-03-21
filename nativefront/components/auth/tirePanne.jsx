import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const Tire = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { problem, type, carData } = route.params;

  const [checkedTire, setCheckedTire] = useState(null);
  const [selectedSpareTireOption, setSelectedSpareTireOption] = useState(null);
  const [selectedParkingGarageOption, setSelectedParkingGarageOption] = useState(null);

  const handleTirePress = (tireName) => {
    setCheckedTire(tireName);
    console.log(`Tire ${tireName} checked`);
  };

  const handleOptionSelect = (option, question) => {
    if (question === "spareTire") {
      setSelectedSpareTireOption(option);
    } else if (question === "parkingGarage") {
      setSelectedParkingGarageOption(option);
    }
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

  const OptionButton = ({ option, question }) => (
    <TouchableOpacity
      style={{
        backgroundColor: (question === "spareTire" && selectedSpareTireOption === option) || (question === "parkingGarage" && selectedParkingGarageOption === option) ? 'blue' : 'white',
        paddingVertical: 8,
        width:75,
        justifyContent:'center',
        alignItems:'center'
     
      }}
      onPress={() => handleOptionSelect(option, question)}
    >
      <Text style={{ color: (question === "spareTire" && selectedSpareTireOption === option) || (question === "parkingGarage" && selectedParkingGarageOption === option) ? 'white' : 'blue' }}>{option}</Text>
    </TouchableOpacity>
  );

  const ImageWithRadioButtons = () => (
    <View style={{ position: 'relative', marginTop: 30 }}>
      <Image
        source={require('../../assets/blue-car-top-view-icon-isometric-3d-style-vector-11241097.jpg')}
        style={{ width: 200, height: 300, marginTop: 10 }}
      />
      <RadioButtonCorner position={{ top: -10, left: -40 }} name={"l1"} />
      <RadioButtonCorner position={{ top: -10, right: -40 }} name={"r1"} />
      <RadioButtonCorner position={{ bottom: 300, left: -40 }} name={"r2"} />
      <RadioButtonCorner position={{ bottom: 300, right: -40 }} name={"l2"} />
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Text style={{ marginTop: 5 }}>WHICH TIRE </Text>
      <ImageWithRadioButtons />
      <View style={{ marginTop: 30 }}>
        <Text>Do you have a spare tire?</Text>
        <View style={{
          flexDirection:'row',
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius:5,
          marginVertical: 5,
        }}>
            <OptionButton option="Yes" question="spareTire" />
            <OptionButton option="No" question="spareTire" />
        </View>
      </View>
      
      <View style={{ marginTop: 30 }}>
        <Text>Is the vehicle located in a parking garage?</Text>
        <View style={{
          flexDirection:'row',
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius:5,
          marginVertical: 5,
          justifyContent:'center',
          width:150,alignSelf:'center'
        }}>
           <OptionButton option="Yes" question="parkingGarage" />
           <OptionButton option="No" question="parkingGarage" />
          </View>
       
      </View>
      <TouchableOpacity
              style={{
                backgroundColor: 'rgb(58,159,253)',
                padding: 10,
                width: "60%",
                justifyContent: "center",
                borderRadius: 15,
                alignItems: "center",
                marginTop: 50

              }}
              onPress={() => navigation.navigate("CreateBreakdown", {
                type: type,
                problem: problem,
                spareTireOption: selectedSpareTireOption,
                parkingGarageOption: selectedParkingGarageOption,
                carData: carData
              })}
            >
              <Text style={{
                color: 'white',
                fontSize: 20,
                alignItems: "center"
              }}>Confirm</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Tire;
