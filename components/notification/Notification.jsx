import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
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

      <View style={{ marginTop: 5 , borderBottomWidth: 0.3, borderBottomColor: '#bdbdbd'}} >
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }} >
          <Image source={require('../../assets/images/alexandre.png')} style = {styles.cardProfiles} />
          <View style = {styles.containerMessage}>
            <Text style={styles.subtitle}>Alexandre Matias aceitou a tua soliciatção de boleia</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', marginTop: -4 }}>
            <Text style = {{ color: '#BDBDBD', fontSize: 18 }}>há 4 min.</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 5 , borderBottomWidth: 0.3, borderBottomColor: '#bdbdbd', justifyContent: 'center'}} >
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }} >
          <Image source={require('../../assets/images/deusa.jpeg')} style = {styles.cardProfiles} />
          <View style = {styles.containerMessage}>
            <Text style={styles.subtitle}>Carolina Marques aceitou a tua soliciatção de boleia</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', marginTop: -4 }}>
            <Text style = {{ color: '#BDBDBD', fontSize: 18 }}>há 10 dias</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Notification;
