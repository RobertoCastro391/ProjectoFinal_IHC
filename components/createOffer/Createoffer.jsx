import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, PermissionsAndroid } from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../config/index.json";
import MapViewDirections from 'react-native-maps-directions';
import styles from "./createoffer";

const CreateOffer = () => {
  
  const router = useRouter();

  const mapEl = useRef(null);
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    (async function () {
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421,
            })
        } else {
            throw new Error('Location permission not granted');
        }

    })();
  }, []);

  const handlePlaceSelect = (data, details = null) => {
    setDestination({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421,
    });
    console.log(destination);
  };
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [departureTime, setDepartureTime] = useState(new Date());
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showArrivalPicker, setShowArrivalPicker] = useState(false);


  const [destination, setDestination] = useState(null);
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
      <View style = {{ flex: 7, }}>
        <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            onPress={handlePlaceSelect}
            query={{
              key: config.googleapykey,
              language: 'en',
          }}
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
        initialRegion={origin}
        showsUserLocation={true}
        ref = {mapEl}>
        
        {destination && 
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleapykey}
            strokeWidth={3}
            onReady={result => {
              mapEl.current.fitToCoordinates(
                result.coordinates,{
                    edgePadding:{
                        top:50,
                        bottom:50,
                        left:50,
                        right:50
                    } 
                }
              )
              }
            }
          />
        }
      </MapView>   
      
    </View>
    
    
    

    
    <Button title="Save" onPress={handleSave} />
    </View>
  </View>
  );
  };
  
  export default CreateOffer;