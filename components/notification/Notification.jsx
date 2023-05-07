import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./notification_Style";



const Notification = () => {
  const router = useRouter();

  return (
    <View>
      
      <View style = {styles.header} >
        <View style = {{ flex: 0, alignItems: 'flex-start' }} >
            <TouchableOpacity onPress={() => router.back()}>
              <Text style = { styles.VoltarButton } >Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginRight: 35 }}>
            <Text style={styles.headerTitle}>Notificações</Text>
          </View>
      </View>

      <View style = {styles.header} >
        <Text>
          Implementar aqui a cena das notificações 
        </Text>
      </View>

    </View>
  );
}

export default Notification;
