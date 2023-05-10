import React from 'react';
import { View, Text, TouchableOpacity, Image} from "react-native";
import { useRouter } from "expo-router";
import styles from "./message_Style";

const ChatAlexandre = () => {
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
          <Text style={styles.headerTitle}>Alexandre Matias</Text>
        </View>
      </View>
    </View>
  );
}

export default ChatAlexandre;