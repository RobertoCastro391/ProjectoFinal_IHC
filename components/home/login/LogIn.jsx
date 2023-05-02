import React from 'react';
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from "./LogIn_style";


const LogIn = () => {
  
  const router = useRouter();
  
  return (
      <View style={{ marginTop: 30 }}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Entra na tua conta</Text>
        </View>

        <View style={styles.searchContainer}>
          <View styles={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Email"
            />
          </View>
        </View>

        <View style={styles.searchContainer} >
          <View styles={styles.searchWrapper} >
            <TextInput
              style={styles.searchInput}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        
        <View>
          <TouchableOpacity style={styles.EntrarConta}>
              <Text style={styles.EntrarContaTitle}>Entar na conta</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8 }}>
          <TouchableOpacity>
            <Text style={styles.EsqucerPassword}>Esqueceste-te da password?</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default LogIn;