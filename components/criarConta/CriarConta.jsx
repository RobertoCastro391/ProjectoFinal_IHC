import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from "./CriarConta_Style";


const CriarConta = () => {
  
  const router = useRouter();
  
  return (
      <View style = {{ flexDirection: 'row', alignItems:'center' }}>
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require('../../assets/icons/left.png')} />  
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 56 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Criar Conta</Text>
        </View>
      </View>
  );
};

export default CriarConta;