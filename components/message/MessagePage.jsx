import React from 'react';
import { View, Text, TouchableOpacity, Image} from "react-native";
import { useRouter } from "expo-router";
import styles from "./message_Style";

const MessagePage = () => {
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
            <Text style={styles.headerTitle}>Mensagens</Text>
          </View>
      </View>

      <View style={{ marginTop: 5 , borderBottomWidth: 0.3, borderBottomColor: '#bdbdbd'}} >
        <TouchableOpacity onPress={(item) => {router.push('messageChatAlexScreen')}} >
          <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }} >
            <Image source={require('../../assets/images/alexandre.png')} style = {styles.cardProfiles} />
            <View style = {styles.containerMessage}>
              <Text style={styles.title}>Alexandre Matias</Text>
              <Text style={styles.subtitle}>Ok! Obrigada, até amanhã :)</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginTop: -4 }}>
              <Text style = {{ color: '#BDBDBD', fontSize: 18 }}>há 4m</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 5 , borderBottomWidth: 0.3, borderBottomColor: '#bdbdbd', justifyContent: 'center'}} >
        <TouchableOpacity >
          <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }} >
            <Image source={require('../../assets/images/deusa.jpeg')} style = {styles.cardProfiles} />
            <View style = {styles.containerMessage}>
              <Text style={styles.title}>Carla Dias</Text>
              <Text style={styles.subtitle}>Olá! Estarias disponível para sair às 16h no próximo fim-de-semana!</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginTop: -4 }}>
              <Text style = {{ color: '#BDBDBD', fontSize: 18 }}>há 4m</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MessagePage;