import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../config/index.json";
import MapViewDirections from 'react-native-maps-directions';
import styles from "./createoffer_Stylev2";

const CreateOfferv2 = () => {
  
  const router = useRouter();

  const mapEl = useRef(null);
  const [origin, setOrigin] = useState(null);
  const [distance, setDistance] = useState(null);

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

  const handlePlaceSelect2 = (data, details = null) => {
    setstartLocal({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421,
    });
    console.log(startLocal);
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
  
  const [obser, setObser] = useState('');
  const [startLocal, setstartLocal] = useState('');

  const [corNegociavel, setCorNegociavel] = useState('#BDBDBD');

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

  const handlePressNegocivelButton = () => {
    
    if (corNegociavel === '#BDBDBD') {
      setCorNegociavel('#5DB075');
    }
    if (corNegociavel === '#5DB075') {
      setCorNegociavel('#BDBDBD');
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
  router.push('minhasOfertasScreenv2');
  };
  
  return (
  <View style={styles.container}>
    <View style = {styles.header} >
        <View style = {{ flex: 0, alignItems: 'flex-start' }} >
            <TouchableOpacity onPress={(item) => router.back()}>
              <Text style = { styles.VoltarButton } >Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginRight: 35 }}>
            <Text style={styles.headerTitle}>CRIAR ANÚNCIO</Text>
          </View>
      </View>
    
    <View style={styles.container2}>
      <View style={styles.row}>
        <View style={{flex: 3, marginTop:4}}>
          <Text style = {styles.descritivo}>Destino:</Text>
        </View>
      
        <View style= {{ flex: 7, borderWidth: 1, borderColor: 'gray', width: '100%', marginBottom: 10 }} >
          <GooglePlacesAutocomplete
              placeholder='Procurar'
              fetchDetails={true}
              enablePoweredByContainer={false}
              onPress={handlePlaceSelect}
              onFail={(error) => console.error(error)}
              query={{
                key: config.googleapykey,
                language: 'en',
              }}
              
              style={{ listView: {height: 100} }}
            />   
      </View>
    </View>

    <View style={styles.row}>
      <View style={{ flex: 4, marginTop: 4 }}> 
        <Text style = {styles.descritivo3}>Local de Partida:</Text>
      </View>
      
      <View style= {{ flex: 5, borderWidth: 1, borderColor: 'gray', width: '100%', marginBottom: 10}} >
        <GooglePlacesAutocomplete
            placeholder='Procurar'
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={handlePlaceSelect2}
            query={{
              key: config.googleapykey,
              language: 'en',
            }}
            styles={{listView: {height: 100},} }
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
      <View style = {{ flex: 3}}>
        <TextInput
            style={styles.input}
            value={price}
            placeholder='€'
            onChangeText={setPrice}
          />
      </View>
      <View style = {{flex: 4}}>
        <TouchableOpacity style = {{ flex: 4 , backgroundColor: corNegociavel, borderRadius: 20, justifyContent: 'center', marginBottom: 10, marginLeft: 5 }} onPress={handlePressNegocivelButton}>
          <Text style = {styles.descritivo4}>Negociável</Text>
        </TouchableOpacity>
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
        
        {destination && startLocal &&
          <MapViewDirections
            origin={startLocal}
            destination={destination}
            apikey={config.googleapykey}
            strokeWidth={3}
            language="pt"
            onReady={result => {
              setDistance(result.distance)
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
      <View>
          {destination &&
            <Text>Distância: {distance} Km</Text>
          }
      </View>

      <View style={[styles.row, {marginTop: 10}]}>
        <Text style = {styles.descritivo}>Obs.:</Text>
      </View>

      <View style={{ width: '100%', marginTop: 5 }}>
        <TextInput
          style={styles.input}
          value={obser}
          onChangeText={setObser}
        />
        </View>  
    </View>
      <View>
        <TouchableOpacity style={styles.EntrarConta} onPress = {handleSave} >
            <Text style={styles.EntrarContaTitle}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
  };
  
  export default CreateOfferv2;