import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { Searchbar, Avatar, Button, Card } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./initialPage_Style";



const InitialPage = () => {

 
 
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

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

  const onChangeSearch = query => setSearchQuery(query);

  const LeftContent = props => <Image source={require("../../assets/icons/user.png")} style = {{ width: 50, height: 50 }} />

  function showDatePicker() {
    setDatePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

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
          
          <View>
            <TouchableOpacity onPress={showDatePicker}>
              <Text>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {datePicker && (
              <DateTimePicker
                format="DD-MM-YYYY"
                value={date}
                mode={'date'}
                display="default"
                onChange={onDateSelected}
              />
            )}
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

          <View style = {styles.card} >
            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
              <Card.Content>
                <Text variant="titleLarge">Alexandre Matias</Text>
                <Text variant="bodyMedium">Card content</Text>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>
          </View>
          
        </View>
    </View>
   
  );
}

export default InitialPage;
