import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { Searchbar, Avatar, Button, Card } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";

import styles from "./initialPage_Style";


const InitialPage = () => {

  const router = useRouter();
 
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [showother, setShowother] = useState(false);

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

  const LeftContent = props => <Image source={require("../../assets/images/alexandre.png")} style = {styles.cardProfiles} resizeMode={'center'} />
  const LeftContent1 = props => <Image source={require("../../assets/images/mulher1.jpeg")} style = {styles.cardProfiles} resizeMode={'center'} />
  const LeftContent2 = props => <Image source={require("../../assets/images/homem1.jpeg")} style = {styles.cardProfiles} resizeMode={'center'}/>
  const LeftContent3 = props => <Image source={require("../../assets/images/deusa.jpeg")} style = {styles.cardProfiles} resizeMode={'center'}/>

  function showDatePicker() {
    setDatePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  const handlePressMinhasOfertas = (item) => {
    router.push('minhasOfertasScreen');
  }

  const handlePressContactar = (item) => {
    router.push('messageChatAlexScreen');
  }

  const handlePressInfo = () => {
    setShowother(!showother);
  }


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
          <Searchbar
            placeholder="Procura o teu destino"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ flex: 1, backgroundColor: '#E8E8E8', width: 254 , height: 55 }}
          />

          <TouchableOpacity style={ styles.EntrarConta } onPress = {handlePressMinhasOfertas}>
            <Text style={ styles.EntrarContaTitle }>
              Minhas Ofertas
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 13 }}>
          <TouchableOpacity onPress={showDatePicker}>
            <Image source={require("../../assets/icons/calendar.png")} style={{ height: 40, width: 40 }} resizeMode='contain' />
          </TouchableOpacity>
      
          <View style={styles.calendarioButton}>
            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.calendarioText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            
            {datePicker && (
              <DateTimePicker
                dateFormat="day month year"
                value={date}
                mode={'date'}
                display="calendar"
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

        <View style={{ alignItems: 'center', marginTop: 13}}>

          <View style = {styles.card} >
            <Card>
              <Card.Title title="Alexandre Matias" subtitle="Universidade de Aveiro" left={LeftContent} titleStyle={{ marginLeft: 20, fontWeight : 'bold', fontSize: 23, marginTop:10 }} subtitleStyle={{ marginLeft: 20, marginTop:-6}} />
              <Card.Content>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 4}}>
                  <Image source={ require("../../assets/icons/star.png")} style = {{ width: 12, height: 12 }} />
                  <Image source={ require("../../assets/icons/star.png")} style = {{ width: 12, height: 12 }}/>
                  <Image source={ require("../../assets/icons/star.png")} style = {{ width: 12, height: 12 }}/>
                  <Image source={ require("../../assets/icons/star.png")} style = {{ width: 12, height: 12 }}/>
                  <Image source={ require("../../assets/icons/star.png")} style = {{ width: 12, height: 12 }}/>
                </View>
                  <View style = {{marginTop:10}}>
                    <View style={{ flexDirection: 'row', marginTop: 5}}>
                      <Image source={ require("../../assets/icons/route.png")} style = {{ width: 50, height: 55, marginTop: 10, marginLeft:5, marginRight: -16 }}/>
                      <View style={{ flexDirection:'column'}}>
                        <Text style={{ marginTop: 8, fontSize : 18, fontWeight:'500'}}>Monção</Text>
                        <Text style={{  marginTop: 6, fontSize : 18}}>Convívio</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3, marginLeft: 5}}>
                      <Image source={ require("../../assets/icons/clock.png")} style = {{ width: 30, height: 30, marginTop: 3 }}/>
                      <Text style={{  marginTop: 5, fontSize : 18, marginLeft:3}}>16H - 18H</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3, marginLeft: 5}}>
                      <Image source={ require("../../assets/icons/euro.png")} style = {{ width: 30, height: 30, marginTop: 10 }}/>
                      <Text style={{  marginTop: 5, fontSize : 18, marginLeft:3}}>Negociável</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3, marginLeft: 5}}>
                      <Image source={ require("../../assets/icons/seat.png")} style = {{ width: 30, height: 30, marginTop: 10 }}/>
                      <Text style={{  marginTop: 5, fontSize : 18, marginLeft:3}}>3 disponíveis</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3, marginLeft: 5}}>
                      <Text style={{  marginTop: 5, fontSize : 18, marginLeft:3, fontWeight:'500'}}>Desvio Disponibilizado :</Text>
                      <Text style={{  marginTop: 6, fontSize : 18, marginLeft:3}}>10 Km</Text>
                    </View>
                </View>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity style= {{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-around',backgroundColor: '#5DB075',borderRadius: 30, height:45, width:'87%'}} onPress = {handlePressContactar}>
                  <Text style={{color:'#FFFFFF', marginLeft:25, fontWeight:'400', fontSize:20, marginBottom:4}}>Contactar para reservar</Text>
                  <Image source={require('../../assets/icons/envelope.png')} style={{ height: 25, width: 60 }} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity onPress = {handlePressInfo} >
                  <Image source={require('../../assets/icons/info.png')} style={{ height: 40, width: 40 }} resizeMode='contain' />
                </TouchableOpacity>

                

              </Card.Actions>
                {showother && (
                    <Text>Ola</Text>
                )}
            </Card>
          </View>
          <View style = {styles.card} >
            <Card>
              <Card.Title title="Maria Joana" subtitle="Universidade de Coimbra" left={LeftContent1} titleStyle={{ marginLeft: 12, fontWeight : 'bold', fontSize: 23, marginTop:7 }} subtitleStyle={{ marginLeft: 12, marginTop:-6}} />
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
          <View style = {styles.card} >
            <Card>
              <Card.Title title="João António" subtitle="Universidade do Minho" left={LeftContent2}titleStyle={{ marginLeft: 12, fontWeight : 'bold', fontSize: 23, marginTop:7 }} subtitleStyle={{ marginLeft: 12, marginTop:-6}} />
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
          <View style = {styles.card} >
            <Card>
              <Card.Title title="Carolina Marques" subtitle="Universidade de Lisboa" left={LeftContent3} titleStyle={{ marginLeft: 12, fontWeight : 'bold', fontSize: 23, marginTop:7 }} subtitleStyle={{ marginLeft: 12, marginTop:-6}} />
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
