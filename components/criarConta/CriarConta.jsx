import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';

import styles from "./CriarConta_Style";
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
    } else {
      setCheckedMale(false);
    }
  };

  const handleFemaleCheckboxChange = (value) => {
    if (value) {
      setCheckedFemale(true);
      setCheckedMale(false);
    } else {
      setCheckedFemale(false);
    }
  };

  const handleCardPress = (item) => {
    router.push('criarContaScreen');
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
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerTitle}>Criar Conta</Text>
        </View>
      </View>

      <View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Email"
              />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Nome"
              />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                placeholder="Apelido"
              />
          </View>
        </View>

        <View style = {styles.selectDate}>
          <View>
            <Text style={styles.title}>Data de Nascimento: </Text>
          </View>

          <View>
            <TouchableOpacity onPress={showDatePicker}>
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {datePicker && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display="default"
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