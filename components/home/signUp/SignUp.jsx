import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';

import styles from "./SignUp_Style";
import { COLORS, SIZES } from '../../../constants';


const SignUp = () => {
  const router = useRouter();
  
  /*const handleCardPress = (item) => {
    router.push('/job-details/${item.job_id}');
    setSelectedJob(item.job_id);
  };*/

  return (
    <View style={{ marginTop: 50 }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Não tens conta?</Text>
        <Text style={styles.headerTitle}>Cria já uma!</Text>
      </View>

      <View>
          <TouchableOpacity style={styles.EntrarConta}>
              <Text style={styles.EntrarContaTitle}>Criar Conta</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
