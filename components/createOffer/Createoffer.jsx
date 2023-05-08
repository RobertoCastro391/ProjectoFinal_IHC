import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Button} from 'react-native';
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';

import styles from "./createoffer";

const Createoffer = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar as informações coletadas
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Telefone:', phone);
  };


  // const handleCardPress = (item) => {
  //   router.push('criarContaScreen');
  // };
  // codigo da pagina a redirezionar ainda por implementar

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
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </View>

    
   
  );
};

export default Createoffer;