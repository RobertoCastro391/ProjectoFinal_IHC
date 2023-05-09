import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button} from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from "./createoffer";

const CreateOffer = () => {
  
  const router = useRouter();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [destination, setDestination] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');
  const [origin, setOrigin] = useState('');
  const [deviation, setDeviation] = useState('');

  function showDatePicker() {
    setDatePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  
  const handleSave = () => {
  // Implement your logic to save the collected information here
  console.log('Destination:', destination);
  console.log('Date:', date);
  console.log('Start Time:', startTime);
  console.log('End Time:', endTime);
  console.log('Seats:', seats);
  console.log('Price:', price);
  console.log('Origin:', origin);
  console.log('Deviation:', deviation);
  };
  
  return (
  <View style={styles.container}>
    <View style = {styles.header} >
        <View style = {{ flex: 0, alignItems: 'flex-start' }} >
            <TouchableOpacity onPress={() => router.back()}>
              <Text style = { styles.VoltarButton } >Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginRight: 35 }}>
            <Text style={styles.headerTitle}>CRIAR ANÚNCIO</Text>
          </View>
      </View>
  <View style={styles.container2}>
  <TextInput
         style={styles.input}
         placeholder="Destination"
         value={destination}
         onChangeText={setDestination}
       />
  <View>
            <TouchableOpacity onPress={showDatePicker}>
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {datePicker && (
              <DateTimePicker
                format="DD-MM-YYYY"
                value={date}
                mode={'date'}
                display="default"
                onChange={onDateSelected}
              />
            )}
          </View>
  <TextInput
         style={styles.input}
         placeholder="Start Time"
         value={startTime}
         onChangeText={setStartTime}
       />
  <TextInput
         style={styles.input}
         placeholder="End Time"
         value={endTime}
         onChangeText={setEndTime}
       />
  <TextInput
         style={styles.input}
         placeholder="Seats"
         value={seats}
         onChangeText={setSeats}
       />
  <TextInput
         style={styles.input}
         placeholder="Price"
         value={price}
         onChangeText={setPrice}
       />
  <TextInput
         style={styles.input}
         placeholder="Origin"
         value={origin}
         onChangeText={setOrigin}
       />
  <TextInput
         style={styles.input}
         placeholder="Deviation"
         value={deviation}
         onChangeText={setDeviation}
       />
  <Button title="Save" onPress={handleSave} />
  </View>
  </View>
  );
  };
  
  export default CreateOffer;