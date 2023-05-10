import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, PermissionsAndroid } from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';

import styles from "./createoffer";

const CreateOffer = () => {
  
  const router = useRouter();

  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [departureTime, setDepartureTime] = useState(new Date());
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);


  const [destination, setDestination] = useState('');
  const [endTime, setEndTime] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');
  const [deviation, setDeviation] = useState('');
  const [startLocal, setstartLocal] = useState('');

  function showDatePicker() {
    setDatePicker(true);
  };
  

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  const showDepartureTimePicker = () => {
    setShowDeparturePicker(true);
  };

  const showArrivalTimePicker = () => {
    setShowArrivalPicker(true);
  };

  const handleDepartureTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setShowDeparturePicker(false);
      setDepartureTime(selectedTime);
    }
  };

  const handleArrivalTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setShowArrivalPicker(false);
      setArrivalTime(selectedTime);
    }
  };
  
  const handleSave = () => {
  // Implement your logic to save the collected information here
  console.log('Destination:', destination);
  console.log('Date:', date);
  console.log('Arrival Time:', arrivalTime);
  console.log('Departure Time:', departureTime);
  console.log('Seats:', seats);
  console.log('Price:', price);
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
    <View style={styles.row}>
      <Text style = {styles.descritivo}>Destino:</Text>
      <View style = {{ flex: 7 }}>
        <TextInput
            style={styles.input}
            value={destination}
            onChangeText={setDestination}
          />
      </View>
    </View>
    
    <View style={styles.row }>
      <Text style={styles.descritivo2}>Data:</Text>
      <View  style={{flex:7,height: 40,}}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={{fontSize:19, borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10}}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {datePicker && (
          <DateTimePicker
            format="DD:MM:AAAA"
            value={date}
            mode={'date'}
            display="default"
            onChange={onDateSelected}

          />
        )}
      </View>
    </View>

    <View style={styles.row }>
      <Text style={styles.descritivo2}>Horário:</Text>
      <View  style={{flex:7}} >
          <View style={{flexDirection:'row',height: 40, }}>
            <TouchableOpacity onPress={showDepartureTimePicker}>
              <Text style={{fontSize:19 ,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,}}>{departureTime.toLocaleTimeString()}</Text>
            </TouchableOpacity>

            {showDeparturePicker && (
              <DateTimePicker
                value={departureTime}
                mode={"time"}
                display="default"
                onChange={handleDepartureTimeChange}
              />
            )}
            
            <Text style={{fontSize:19}}> - </Text>

            <TouchableOpacity onPress={showArrivalTimePicker}>
              <Text style={{fontSize:19,borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10}}>{arrivalTime.toLocaleTimeString()}</Text>
            </TouchableOpacity>

            {showArrivalPicker && (
              <DateTimePicker
                value={arrivalTime}
                mode="time"
                display="none"
                onChange={handleArrivalTimeChange}
              />
            )}
        </View>

      </View>
    </View>
    
    <View style={styles.row}>
      <Text style = {styles.descritivo}>Lugares:</Text>
      <View style = {{ flex: 7 }}>
        <TextInput
            style={styles.input}
            value={seats}
            onChangeText={setSeats}
          />
      </View>
    </View>  

    <View style={styles.row}>
      <Text style = {styles.descritivo}>Preço:</Text>
      <View style = {{ flex: 7}}>
        <TextInput
            style={styles.input}
            value={price}
            placeholder='€'
            onChangeText={setPrice}
          />
      </View>
    </View> 

    <View style={styles.row}>
      <Text style = {styles.descritivo3}>Local de Partida:</Text>
      <View style = {{ flex: 5}}>
        <TextInput
            style={styles.input}
            value={startLocal}
            onChangeText={setstartLocal}
          />
      </View>
    </View>   

     <View style={styles.row}>
      <Text style = {styles.descritivo}>Desvio:</Text>
      <View style = {{ flex: 7}}>
        <TextInput
            style={styles.input}
            value={deviation}
            placeholder='Km'
            onChangeText={setDeviation}
          />
      </View>
    </View> 
    <View style={styles.row}>
      <Text style = {styles.descritivo}>Definir rota:</Text>      
    </View>

    <View style = {{ alignItems: 'center', marginTop: 10,marginBottom:10 }}  >
      <MapView
        style={{height: 300, width: '100%'}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
      />   
      
    </View>
          

    
    <Button title="Save" onPress={handleSave} />
    </View>
  </View>
  );
  };
  
  export default CreateOffer;