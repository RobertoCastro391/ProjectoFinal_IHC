import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./minhasOfertas_Style";



const MinhasOfertas = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style = {styles.header} >
        <View style = {{ flex: 0, alignItems: 'flex-start' }} >
            <TouchableOpacity onPress={() => router.back()}>
              <Text style = { styles.VoltarButton } >Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginRight: 35 }}>
            <Text style={styles.headerTitle}>Minhas Ofertas</Text>
          </View>
      </View>
    </View>
  );
}

export default MinhasOfertas;
