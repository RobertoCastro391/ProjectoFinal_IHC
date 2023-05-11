import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./account_Style";



const Account = () => {
  const router = useRouter();

  return (
    <View>
      
      
      <View style = {{ flex: 0, alignItems: 'flex-start', marginTop:20 }} >
        <TouchableOpacity onPress={() => router.back()}>
          <Text style = { styles.VoltarButton }>Voltar</Text>
        </TouchableOpacity>
      </View>
          
      
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.headerTitle}>Informações de Conta</Text>
      </View>
      
      <View style = {styles.header} >
        <Image source={require("../../assets/images/rita.jpg")} style = {styles.cardProfiles}/>
        
      </View>

      <View>
        <Text style={styles.name}>Rita Santos </Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={styles.subtitle}>Descrição: </Text>
        <Text style={styles.info}> Olá! Eu sou o Rita e estudo na UA. Juntei-me à
                        UNIRides para poupar nos custos das viagens e ajudar
                        quem sofre com as greves chatas da CP :)</Text>
        <Text style={styles.subtitle}>Email: </Text>
        <Text style={styles.info}>ritasantos@ua.pt </Text>
        <Text style={styles.subtitle}>Password: </Text>
        <Text style={styles.info}>*********** </Text>
        <Text style={styles.subtitle}>Data de Nascimento: </Text>
        <Text style={styles.info}>17/06/2000 </Text>
        <Text style={styles.subtitle}>Instituiçao: </Text>
        <Text style={styles.info}>Universidade de Aveiro </Text>
        <Text style={styles.subtitle}>Sexo: </Text>
        <Text style={styles.info}>Feminino </Text>

      </View>

      <View style={{marginTop: 10 }}>

        <TouchableOpacity style={styles.EntrarConta} onPress={() => router.push("/editAccount")}>
          <Text style={styles.EntrarContaTitle}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.EntrarConta} onPress={() => router.push('indexScreen')}>
          <Text style={styles.EntrarContaTitle}>Terminar Sessão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Account;
