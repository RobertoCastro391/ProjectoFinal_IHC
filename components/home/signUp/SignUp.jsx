import React from 'react';
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from 'react-native';

import styles from "./SignUp_Style";

const SignUp = () => {
  const router = useRouter();
  
  const handleCardPress = (item) => {
    router.push('criarContaScreen');
  };

  const handleCardPress2 = (item) => {
    router.push('createOfferScreen');
  };

  return (
    <View style={{ marginTop: 50 }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Não tens conta?</Text>
        <Text style={styles.headerTitle}>Cria já uma!</Text>
      </View>

      <View>
          <TouchableOpacity style={styles.EntrarConta} onPress={handleCardPress} >
              <Text style={styles.EntrarContaTitle}>Criar Conta</Text>
          </TouchableOpacity>
      </View>

      <View>
          <TouchableOpacity style={styles.EntrarConta} onPress={handleCardPress2} >
              <Text style={styles.EntrarContaTitle}>Criar Conta</Text>
          </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default SignUp;
