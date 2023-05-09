import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';

import styles from "./CriarConta_Style";
import { set } from 'react-native-reanimated';
//import "react-datepicker/dist/react-datepicker.css";

const CriarConta = () => {

  const router = useRouter();
  
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [isCheckedMale, setCheckedMale] = useState(false);
  const [isCheckedFemale, setCheckedFemale] = useState(false);

  const [hasGalleryPermision, setHasGalleryPermision] = useState(null);
  const [image, setImage] = useState(null);
  const [hasImage, setHasImage] = useState(null);

  const [isCheckedNewsletter, setCheckedNewsletter] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [apelido, setApelido] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [genero, setGenero] = useState('');

  const handleCardPress = (item) => {
    router.push('initialPageScreen');
    console.log('Nome:', name);
    console.log('Apelido:', apelido);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Data de Nascimento:', date);
    console.log('Instituição:', instituicao);
    console.log('Genero:', genero);
    console.log('Imagem:', image);
    console.log('Newsletter:', isCheckedNewsletter);
  };

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermision(galleryStatus.status === 'granted');
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled){
      setHasImage(true);
      setImage(result.assets[0].uri);
    }
  };

  if (hasGalleryPermision === false) {
    return <Text>No Permision to acess foto gallery!</Text>
  }

  const handleMaleCheckboxChange = (value) => {
    if (value) {
      setCheckedMale(true);
      setCheckedFemale(false);
      setGenero('Masculino');
    } else {
      setCheckedMale(false);
      setGenero('Feminino');
    }
  };

  const handleFemaleCheckboxChange = (value) => {
    if (value) {
      setCheckedFemale(true);
      setCheckedMale(false);
      setGenero('Feminino');
    } else {
      setCheckedFemale(false);
      setGenero('Masculino');
    }
  };

  function showDatePicker() {
    setDatePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  return (
    <View>
      <View style = {styles.header}>
        <View style = {{ flex: 0, alignItems: 'flex-start' }} >
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require('../../assets/icons/left.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={styles.headerTitle}>Criar Conta</Text>
        </View>
      </View>

      <View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
              />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Apelido"
                value={apelido}
                onChangeText={apelido}
              />
          </View>
        </View>

        <View style = {styles.selectDate}>
          <View>
            <Text style={styles.title3}>Data de Nascimento: </Text>
          </View>

          <View style={styles.calendarioButton}>
            
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.calendarioText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            
            {datePicker && (
              <DateTimePicker
                dateFormat="day month year"
                value={date}
                mode={'date'}
                display="calendar"
                onChange={onDateSelected}

              />
            )}
          </View>
          
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Instituição"
                value={instituicao}
                onChangeText={setInstituicao}
              />
          </View>
        </View>

        <View style = {styles.selectDate}>

          <Text style={styles.title}>Sexo:</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox
              style={styles.checkBox}
              value={isCheckedMale}
              onValueChange={handleMaleCheckboxChange}
            />
            <Image
                style={styles.genderIcon}
                source={require('../../assets/icons/male.png')}
                resizeMode={'contain'}
              />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox
                style={styles.checkBox}
                value={isCheckedFemale}
                onValueChange={handleFemaleCheckboxChange}
              />
              <Image
                style={styles.genderIcon}
                source={require('../../assets/icons/female.png')}
                resizeMode={'contain'}
              />
          </View>
        </View>

        <View style = {styles.selectDate}>

          <View style={{flexDirection: 'row', borderColor:'black', borderWidth: 3, alignItems: 'center'}}>
              <TouchableOpacity onPress={() => PickImage()}>
                {!hasImage ? <Image source={require('../../assets/icons/imagePerfil.png')} resizeMode={'contain'} style={{ height: 100, width: 100}} /> : <Image source={{uri: image}} resizeMode={'contain'} style={{ height: 100, width: 100}} />}
              </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 13 }}>
            <TouchableOpacity onPress={() => PickImage()}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Faz upload da tua foto de perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.selectDate}>

          <View style={{ flexDirection: 'row' }}>
            <Checkbox
              style={styles.checkBox}
              value={isCheckedNewsletter}
              onValueChange={setCheckedNewsletter}
            />
          </View>

          <View>
            <Text style={styles.title2}>Gostaria de receber a sua newsletter e outras informações promocionais</Text>
          </View>

        </View>

        <View>
            <TouchableOpacity style={styles.EntrarConta} onPress={handleCardPress}>
                <Text style={styles.EntrarContaTitle}>Criar Conta</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default CriarConta;