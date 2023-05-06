import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar } from 'react-native-paper';

import styles from "./initialPage_Style";

const InitialPage1 = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Searchbar
            placeholder="Procura o teu destino"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ flex: 1, backgroundColor: '#E8E8E8', width: 254 , height: 55 }}
          />
          <TouchableOpacity style={ styles.EntrarConta }>
            <Text style={ styles.EntrarContaTitle }>
              Minhas Ofertas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default InitialPage1;
