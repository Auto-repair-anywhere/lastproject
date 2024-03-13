import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ParkingQuestionPage = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Is the vehicle located in a parking garage?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.noteLink}
        onPress={() => setShowInput(!showInput)}
      >
        <Text style={styles.noteLinkText}>Add special note</Text>
        {showInput && (
          <View style={styles.noteInputContainer}>
            <TextInput
              style={styles.noteInput}
              multiline={true}
              placeholder="Enter your special note here..."
            />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 150,
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(58,159,253)',
    fontWeight: 'bold',
    marginTop:50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  noteLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  noteLinkText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop:50,
  },
  noteInputContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  noteInput: {
    fontSize: 12,
    padding: 5,
    borderWidth: 2,
    borderColor: 'gray',
    width:300,
    height:100,
    borderRadius: 5,
    marginTop:30,
  },
  confirmButton: {
    backgroundColor: 'rgb(58,159,253)',
    padding: 10,
    marginTop: 300, 
    marginLeft:110,
    borderRadius: 5,
    width:200,

  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredButton: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default ParkingQuestionPage;
