import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import CustomButton from '../common/CustomButton';
import AppBar from '../common/AppBar';
import { useRoute } from '@react-navigation/native';


const CreateBreakdownScreen = ({ navigation }) => {
  const route = useRoute();
  const { type, problem, spareTireOption, parkingGarageOption } = route.params;

  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.background}>
      <View style={{ flex: 1 }}>
        <AppBar title={"Location"}/>
        <View style={styles.container}>
          <Text style={styles.subTitle}>WHERE IS YOUR VEHICLE LOCATED?</Text>
          <CustomButton
            text="Find Me"
            onPress={() => navigation.navigate('Details', {
              type: type,
              problem: problem,
              spareTireOption: spareTireOption,
              parkingGarageOption: parkingGarageOption
            })}
        />
          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line}></View>
          </View>
          <CustomButton
            text="Enter Address"
            onPress={() => navigation.navigate('Details', {
              type: type,
              problem: problem,
              spareTireOption: spareTireOption,
              parkingGarageOption: parkingGarageOption
            })}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default CreateBreakdownScreen;

