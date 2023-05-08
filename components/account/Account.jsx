import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./account_Style";



const Account = () => {
  const router = useRouter();

  return (
    <View>
      
      
      <View style = {{ flex: 0, alignItems: 'flex-start' }} >
        <TouchableOpacity onPress={() => router.back()}>
          <Text style = { styles.VoltarButton }>Voltar</Text>
        </TouchableOpacity>
      </View>
          
      
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.headerTitle}>Informações de Conta</Text>
      </View>
      
      <View style = {styles.header} >
        <Text>
          Implementar aqui a cena das Informações de conta
        </Text>
      </View>
    </View>
  );
}

export default Account;
