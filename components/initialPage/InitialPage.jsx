import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { Searchbar } from 'react-native-paper';
import DateTimePicker from "@react-native-community/datetimepicker";
//import DropDownPicker from "react-native-custom-dropdown";
//import SelectDropdown from 'react-native-select-dropdown'
import { Dropdown } from 'react-native-element-dropdown';

import styles from "./initialPage_Style";



const InitialPage = () => {

  const data = [
    { label: 'Preço mais alto', value: '1' },
    { label: 'Preço mais baixo', value: '2' },
    { label: 'Preço Negociável', value: '3' },
    { label: 'Mais lugares disponíveis', value: '4' },
    { label: 'Menos lugares disponíveis', value: '5' },
    { label: 'Condutor melhor avaliado', value: '6' },
    { label: 'Sexo F', value: '7' },
    { label: 'Sexo M', value: '8' },
    { label: 'Horário: __H:__M', value: '9' },
    ];

  const [value, setValue] = useState(null);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [date, setDate] = useState('01-01-2000');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
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

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 13 }}>
          
          <Image source={require("../../assets/icons/calendar.png")} style={{ height: 40, width: 40 }} resizeMode='contain' />
          
          <View style={{ flex: 1, alignItems: 'center' }}>
             <DateTimePicker
              value= { new Date() }
              dateFormat='day month year'
              minimumDate={new Date(2023, 4, 1)}
              maximumDate={new Date(2025, 4, 5)}      
              onChange={(date) => {
                setDate(date);
              }}
            />
          </View>

          <View style={{ flex: 1, alignItems: 'flex-end' }} >
            
            <Dropdown
              style={ styles.dropdown }
              placeholderStyle={ styles.placeholderStyle }
              selectedTextStyle={ styles.selectedTextStyle }
              inputSearchStyle={ styles.inputSearchStyle }
              
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Filtrar'}
              
              value={value}
              onChange={item => {
                setValue(item.value);
              }}

            />
          
          </View>    
        </View>

        <View style={{ alignItems: 'center', marginTop: 13 }}>

          <View style = {{ backgroundColor: '#E8E8E8', borderRadius: 8 }} >
              <Text>Implementar aqui um card para cadeia boleia</Text>
          </View>
          
        </View>
    </View>
  );
}

export default InitialPage;
