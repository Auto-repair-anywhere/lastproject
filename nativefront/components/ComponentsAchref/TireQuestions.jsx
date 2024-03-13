import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet,KeyboardAvoidingView, Platform , Image } from 'react-native';

const App = () => {
  const [selectedTire, setSelectedTire] = useState(null);
  const [hasSpareTire, setHasSpareTire] = useState(null);
  const [isInGarage, setIsInGarage] = useState(null);
  const [specialNote, setSpecialNote] = useState('');
  const [showSpecialNoteInput, setShowSpecialNoteInput] = useState(false);

  const handleTireSelection = (tire) => {
    setSelectedTire(tire);
  };

  const handleSpareTireSelection = (option) => {
    setHasSpareTire(option);
  };

  const handleLocationSelection = (option) => {
    setIsInGarage(option);
  };

  const handleSpecialNoteChange = (text) => {
    setSpecialNote(text);
  };

  const handleAddSpecialNote = () => {
    setShowSpecialNoteInput(true);
  };

  const handleConfirm = () => {
    // Perform action with selected options and special note
    console.log('Selected Tire:', selectedTire);
    console.log('Has Spare Tire:', hasSpareTire);
    console.log('Is in Garage:', isInGarage);
    console.log('Special Note:', specialNote);
    // Clear special note input and hide it
    setSpecialNote('');
    setShowSpecialNoteInput(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
      <Image source={require('../../assets/carwheels.png')} style={styles.image} />

        <Text style={styles.title}>Which tire is flat?</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Front Left"
            onPress={() => handleTireSelection('frontLeft')}
            color={selectedTire === 'frontLeft' ? 'red' : undefined}
          />
          <Button
            title="Front Right"
            onPress={() => handleTireSelection('frontRight')}
            color={selectedTire === 'frontRight' ? 'red' : undefined}
          />
          <Button
            title="Rear Left"
            onPress={() => handleTireSelection('rearLeft')}
            color={selectedTire === 'rearLeft' ? 'red' : undefined}
          />
          <Button
            title="Rear Right"
            onPress={() => handleTireSelection('rearRight')}
            color={selectedTire === 'rearRight' ? 'red' : undefined}
          />
        </View>
        <Text style={styles.title}>Do you have a spare tire?</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Yes"
            onPress={() => handleSpareTireSelection('Yes')}
            color={hasSpareTire === 'Yes' ? 'green' : undefined}
          />
          <Button
            title="No"
            onPress={() => handleSpareTireSelection('No')}
            color={hasSpareTire === 'No' ? 'red' : undefined}
          />
        </View>
        <Text style={styles.title}>Is the vehicle located in a parking garage?</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Yes"
            onPress={() => handleLocationSelection('Yes')}
            color={isInGarage === 'Yes' ? 'green' : undefined}
          />
          <Button
            title="No"
            onPress={() => handleLocationSelection('No')}
            color={isInGarage === 'No' ? 'red' : undefined}
          />
        </View>
        <Button title="Add special note" onPress={handleAddSpecialNote} />
        {showSpecialNoteInput && (
          <TextInput
            style={styles.specialNoteInput}
            placeholder="Enter special note"
            value={specialNote}
            onChangeText={handleSpecialNoteChange}
          />
        )}
        <View style={styles.confirmButtonContainer}>
          <Button title="Confirm" onPress={handleConfirm} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  image: {
marginBottom:30
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  specialNoteInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  confirmButtonContainer: {
    marginTop: 10,
  }
});

export default App;
