import React, { useState, useRef } from 'react';
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { Searchbar, Avatar, Button, Card } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";
import TalkBalloon from "react-native-talk-balloon";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../config/index.json";
import MapViewDirections from 'react-native-maps-directions';

import styles from "./initialPagev2_Style";


const InitialPagev2 = () => {

    const router = useRouter();

    const handlePlaceSelect1_1 = (data, details = null) => {
      setDestination({
        latitude: 40.656735,
        longitude: -7.913044,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(destination);
    };
  
    const handlePlaceSelect1_2 = (data, details = null) => {
      setstartLocal({
        latitude: 40.208910,
        longitude: -8.414411,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(startLocal);
   
    }
    const handlePlaceSelect2_1 = (data, details = null) => {
      setDestination({
        latitude: 41.544776,
        longitude: -8.574631,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(destination);
    };
  
    const handlePlaceSelect2_2 = (data, details = null) => {
      setstartLocal({
        latitude: 41.559882,
        longitude: -8.400233,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(startLocal);
   
    }
    const handlePlaceSelect3_1 = (data, details = null) => {
      setDestination({
        latitude: 42.077112,
        longitude: -8.482382,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(destination);
    };
  
    const handlePlaceSelect3_2 = (data, details = null) => {
      setstartLocal({
        latitude: 40.633975,
        longitude: -8.648378,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(startLocal);
   
    }
    const handlePlaceSelect4_1 = (data, details = null) => {
      setDestination({
        latitude: 42.077112,
        longitude: -8.482382,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(destination);
    };
  
    const handlePlaceSelect4_2 = (data, details = null) => {
      setstartLocal({
        latitude: 40.633165,
        longitude: -8.659322,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log(startLocal);
   
    }
    const mapEl = useRef(null);

    
    const [destination, setDestination] = useState(null);
    const [startLocal, setstartLocal] = useState('');
 
    const [datePicker, setDatePicker] = useState(false);
    
    const [date, setDate] = useState(new Date());
  
    const [showother, setShowother] = useState(false);
    const [showother1, setShowother1] = useState(false);
    const [showother2, setShowother2] = useState(false);
    const [showother3, setShowother3] = useState(false);
    const [showother4, setShowother4] = useState(false);

    const [showSearchCard1, setShowSearchCard1] = useState(true);
    const [showSearchCard2, setShowSearchCard2] = useState(true);
    const [showSearchCard3, setShowSearchCard3] = useState(true);
    const [showSearchCard4, setShowSearchCard4] = useState(true);
    const [showSearchCard5, setShowSearchCard5] = useState(true);

    const [showFilterCard1, setShowFilterCard1] = useState(true);
    const [showFilterCard2, setShowFilterCard2] = useState(true);
    const [showFilterCard3, setShowFilterCard3] = useState(true);
    const [showFilterCard4, setShowFilterCard4] = useState(true);
    const [showFilterCard5, setShowFilterCard5] = useState(true);

    const [showDateCard1, setShowDateCard1] = useState(true);
    const [showDateCard2, setShowDateCard2] = useState(true);
    const [showDateCard3, setShowDateCard3] = useState(true);
    const [showDateCard4, setShowDateCard4] = useState(true);
    const [showDateCard5, setShowDateCard5] = useState(true);

    const handleDate = (value) => {
      if (value == '17/05/2023') {
        setShowDateCard1(true);
        setShowDateCard2(false);
        setShowDateCard3(false);
        setShowDateCard4(false);
        setShowDateCard5(false);
      }
      else if (value == '11/05/2023') {
        setShowDateCard1(false);
        setShowDateCard2(true);
        setShowDateCard3(false);
        setShowDateCard4(false);
        setShowDateCard5(false);
      }
      else if (value == '12/05/2023') {
        setShowDateCard1(false);
        setShowDateCard2(false);
        setShowDateCard3(true);
        setShowDateCard4(false);
        setShowDateCard5(false);
      }
      else if (value == '15/05/2023') {
        setShowDateCard1(false);
        setShowDateCard2(false);
        setShowDateCard3(false);
        setShowDateCard4(true);
        setShowDateCard5(true);
      }
      else {
        setShowDateCard1(true);
        setShowDateCard2(true);
        setShowDateCard3(true);
        setShowDateCard4(true);
        setShowDateCard5(true);
      }

    }
    
    const handleFilter = (value) => {
      if (value == '3') {
        setShowFilterCard1(true);
        setShowFilterCard2(true);
        setShowFilterCard3(false);
        setShowFilterCard4(true);
        setShowFilterCard5(false);
      }
      if (value == '0') {
        setShowFilterCard1(true);
        setShowFilterCard2(true);
        setShowFilterCard3(true);
        setShowFilterCard4(true);
        setShowFilterCard5(true);
      }
    }

    const handleSearchBar = (value) => {
      
      if (value == 'Aveiro') {
        setShowSearchCard1(true);
        setShowSearchCard2(false);
        setShowSearchCard3(false);
        setShowSearchCard4(false);
        setShowSearchCard5(false);
      }

      if (value == 'Manhente') {
        setShowSearchCard1(false);
        setShowSearchCard2(false);
        setShowSearchCard3(true);
        setShowSearchCard4(false);
        setShowSearchCard5(false);
      }
      
      if (value == 'Monção') {
        setShowSearchCard1(false);
        setShowSearchCard2(false);
        setShowSearchCard3(false);
        setShowSearchCard4(true);
        setShowSearchCard5(true);
      }

      if (value == 'Viseu') {
        setShowSearchCard1(false);
        setShowSearchCard2(true);
        setShowSearchCard3(false);
        setShowSearchCard4(false);
        setShowSearchCard5(false);
      }

      if (value == '') {
        setShowSearchCard1(true);
        setShowSearchCard2(true);
        setShowSearchCard3(true);
        setShowSearchCard4(true);
        setShowSearchCard5(true);
      }
    }

    
  
    const data = [
      { label: 'Limpar', value: '0' },
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
  
    const onChangeSearch = (query) => {
      setSearchQuery(query); 
      console.log(query);
      handleSearchBar(query);
    }

    
  
    const LeftContent = props => <Image source={require("../../assets/images/alexandre.png")} style = {styles.cardProfiles} />
    const LeftContent1 = props => <Image source={require("../../assets/images/mulher1.jpeg")} style = {styles.cardProfiles} />
    const LeftContent2 = props => <Image source={require("../../assets/images/homem1.jpeg")} style = {styles.cardProfiles} />
    const LeftContent3 = props => <Image source={require("../../assets/images/deusa.jpeg")} style = {styles.cardProfiles} />
    const LeftContent4 = props => <Image source={require("../../assets/images/rita.jpg")} style = {styles.cardProfiles} />

    function showDatePicker() {
      setDatePicker(true);
    };
  
    function onDateSelected(event, value) {
      setDate(value);
      handleDate(value.toLocaleDateString());
      setDatePicker(false);
    };
  
    const handlePressMinhasOfertas = (item) => {
      router.push('minhasOfertasScreenv2');
    }
  
    const handlePressContactar = (item) => {
      router.push('messageChatAlexScreen');
    }

    const handlePressOferta = (item) => {
        router.push('minhasOfertasScreenv2');
    }
  
    const handlePressInfo4 = () => {
        setShowother4(!showother4);
      }
    const handlePressInfo = () => {
      setShowother(!showother);
      setShowother1(false);
      setShowother2(false);
      setShowother3(false);
      setShowother4(false);
      handlePlaceSelect1_1();
      handlePlaceSelect1_2();
    }
    const handlePressInfo1 = () => {
      setShowother1(!showother1);
      setShowother(false)
      setShowother2(false);
      setShowother3(false);
      setShowother4(false)
      handlePlaceSelect2_1();
      handlePlaceSelect2_2();
      
    }
    const handlePressInfo2 = () => {
      setShowother(false)
      setShowother1(false)
      setShowother2(!showother2);
      setShowother3(false)
      setShowother4(false)
      handlePlaceSelect3_1();
      handlePlaceSelect3_2();
      
    }
    const handlePressInfo3 = () => {
      
      setShowother(false)
      setShowother1(false)
      setShowother2(false);
      setShowother3(!showother3);
      setShowother4(false)
      handlePlaceSelect4_1();
      handlePlaceSelect4_2();
    }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Searchbar
          placeholder="Procura o teu destino"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            flex: 1,
            backgroundColor: "#E8E8E8",
            width: 254,
            height: 55,
          }}
        />

        <TouchableOpacity
          style={styles.EntrarConta}
          onPress={handlePressMinhasOfertas}
        >
          <Text style={styles.EntrarContaTitle}>Minhas Ofertas</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 13 }}
      >
        <TouchableOpacity onPress={showDatePicker}>
          <Image
            source={require("../../assets/icons/calendar.png")}
            style={{ height: 40, width: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.calendarioButton}>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.calendarioText}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>

          {datePicker && (
            <DateTimePicker
              dateFormat="day month year"
              value={date}
              mode={"date"}
              display="calendar"
              onChange={onDateSelected}
            />
          )}
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Filtrar"}
            value={value}
            onChange={(value) => {console.log(value.value); handleFilter(value.value);}}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 13 }}>
        {showFilterCard1 && showSearchCard1 && showDateCard1 &&(
          <View style={styles.card}>
          <Card>
            <Card.Title
              title="Rita Santos"
              subtitle="Universidade de Aveiro"
              left={LeftContent4}
              titleStyle={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 23,
                marginTop: 10,
              }}
              subtitleStyle={{ marginLeft: 20, marginTop: -6 }}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  marginLeft: 4,
                }}
              >
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Image
                    source={require("../../assets/icons/route.png")}
                    style={{
                      width: 50,
                      height: 55,
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: -16,
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{ marginTop: 8, fontSize: 20, fontWeight: "500" }}
                    >
                      Aveiro
                    </Text>
                    <Text style={{ marginTop: 6, fontSize: 18 }}>Café das Termas, Monção</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                    <Image
                source={require("../../assets/icons/calendar2.png")}
                style={{ width: 35, height: 30, marginTop: 6, marginLeft:-3 }}
              />
              <Text style={{ marginTop: 6, fontSize: 18}}>
                17/05/2023
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
                marginLeft: 5,
              }}
            >
                  <Image
                    source={require("../../assets/icons/clock.png")}
                    style={{ width: 30, height: 30, marginTop: 3 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    18H45 - 19H
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/euro.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    Negociável
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/seat.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    3 disponíveis
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 18,
                      marginLeft: 3,
                      fontWeight: "500",
                    }}
                  >
                    Desvio Disponibilizado :
                  </Text>
                  <Text style={{ marginTop: 6, fontSize: 18, marginLeft: 3 }}>
                    10 Km
                  </Text>
                </View>
              </View>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: "#5DB075",
                  borderRadius: 30,
                  height: 45,
                  width: "87%",
                }}
                onPress={handlePressOferta}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    marginLeft: 18,
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                  Minha Oferta
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePressInfo4}>
                <Image
                  source={require("../../assets/icons/info.png")}
                  style={{ height: 40, width: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Card.Actions>
            {showother4 && (
              <>
                <Card style={{ width: "95%", marginLeft: 9 }} mode="outlined">
                  <Card.Title
                    title="Motorista:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent4} style={{ marginTop: -15 }} />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 20,
                        marginTop: -10,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                  </View>
                  <Card.Content>
                    <TalkBalloon
                      triangleDirection="top"
                      triangleOffSet="9%"
                      width="95%"
                      borderColor="#5DB075"
                    >
                      <Text>
                        Olá! Eu sou o Rita e estudo na UA. Juntei-me à
                        UNIRides para poupar nos custos das viagens e ajudar
                        quem sofre com as greves chatas da CP :)
                      </Text>
                      
                    </TalkBalloon>
                  </Card.Content>
                </Card>
                <Card style={{ width: "95%", marginLeft: 9, marginTop:6 }} mode="outlined">
                  <Card.Title
                    title="Comentários:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-60, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="20%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Muito bom! Senti-me muito segura e em boa companhia :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <View style={{ flexDirection: "row", marginTop:-10 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-40, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="25%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Recomendo! :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <Card.Content>
                  </Card.Content>
                </Card>
              </>
            )}
          </Card>
        </View>
        )}

        {showFilterCard2 && showSearchCard2 && showDateCard2 && (
          <View style={styles.card}>
          <Card>
          <Card.Title
              title="Maria Joana"
              subtitle="Universidade de Coimbra"
              left={LeftContent1}
              titleStyle={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 23,
                marginTop: 10,
              }}
              subtitleStyle={{ marginLeft: 20, marginTop: -6 }}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  marginLeft: 4,
                }}
              >
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Image
                    source={require("../../assets/icons/route.png")}
                    style={{
                      width: 50,
                      height: 55,
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: -16,
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{ marginTop: 8, fontSize: 20, fontWeight: "500" }}
                    >
                      Viseu
                    </Text>
                    <Text style={{ marginTop: 6, fontSize: 18 }}>Café Avenida, Coimbra</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/calendar2.png")}
                    style={{ width: 35, height: 30, marginTop: 6, marginLeft:-3 }}
                  />
                  <Text style={{ marginTop: 6, fontSize: 18}}>
                    11/05/2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/clock.png")}
                    style={{ width: 30, height: 30, marginTop: 3 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    16H - 18H
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/euro.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    Negociável
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/seat.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    4 disponíveis
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 18,
                      marginLeft: 3,
                      fontWeight: "500",
                    }}
                  >
                    Desvio Disponibilizado :
                  </Text>
                  <Text style={{ marginTop: 6, fontSize: 18, marginLeft: 3 }}>
                    10 Km
                  </Text>
                </View>
              </View>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: "#5DB075",
                  borderRadius: 30,
                  height: 45,
                  width: "87%",
                }}
                onPress={handlePressContactar}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    marginLeft: 25,
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                  Contactar para reservar
                </Text>
                <Image
                  source={require("../../assets/icons/envelope.png")}
                  style={{ height: 25, width: 60 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePressInfo}>
                <Image
                  source={require("../../assets/icons/info.png")}
                  style={{ height: 40, width: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Card.Actions>
            {showother && (
              <>
                <Card style={{ width: "95%", marginLeft: 9 }} mode="outlined">
                <MapView
                    style={{height: 300, width: '100%',}}
                    ref = {mapEl}>
                    
                    {destination && startLocal &&
                      <MapViewDirections
                        origin={startLocal}
                        destination={destination}
                        apikey={config.googleapykey}
                        strokeWidth={3}
                        language="pt"
                        onReady={result => {
                          mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:50,
                                    bottom:50,
                                    left:50,
                                    right:50
                                } 
                            }
                          )
                          }
                        }
                      />
                    }
                  </MapView> 
                  <Card.Title
                    title="Motorista:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent1} style={{ marginTop: -15 }} />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 20,
                        marginTop: -10,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                  </View>
                  <Card.Content>
                    <TalkBalloon
                      triangleDirection="top"
                      triangleOffSet="9%"
                      width="95%"
                      borderColor="#5DB075"
                    >
                      <Text>
                        Olá! Eu sou a Maria Joana e estudo na UC. Juntei-me à
                        UNIRides para poupar nos custos das viagens e ajudar
                        quem sofre com as greves chatas da CP :)
                      </Text>
                      
                    </TalkBalloon>
                  </Card.Content>
                </Card>
                <Card style={{ width: "95%", marginLeft: 9, marginTop:6 }} mode="outlined">
                  <Card.Title
                    title="Comentários:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-60, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="20%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Muito bom! Senti-me muito segura e em boa companhia :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <View style={{ flexDirection: "row", marginTop:-10 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-40, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="25%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Recomendo! :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <Card.Content>
                  </Card.Content>
                </Card>
              </>
            )}
          </Card>
        </View>
        )}

        { showFilterCard3 && showSearchCard3 && showDateCard3 && (
          <View style={styles.card}>
          <Card>
            <Card.Title
              title="João António"
              subtitle="Universidade do Minho"
              left={LeftContent2}
              titleStyle={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 23,
                marginTop: 10,
              }}
              subtitleStyle={{ marginLeft: 20, marginTop: -6 }}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  marginLeft: 4,
                }}
              >
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Image
                    source={require("../../assets/icons/route.png")}
                    style={{
                      width: 50,
                      height: 55,
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: -16,
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{ marginTop: 8, fontSize: 20, fontWeight: "500" }}
                    >
                      Manhente
                    </Text>
                    <Text style={{ marginTop: 6, fontSize: 18 }}>Escola de Psicologia da UM</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                <Image
                    source={require("../../assets/icons/calendar2.png")}
                    style={{ width: 35, height: 30, marginTop: 6, marginLeft:-3 }}
                  />
                  <Text style={{ marginTop: 6, fontSize: 18}}>
                    12/05/2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/clock.png")}
                    style={{ width: 30, height: 30, marginTop: 3 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    11H - 12H
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/euro.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    10€
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/seat.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    3 disponíveis
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 18,
                      marginLeft: 3,
                      fontWeight: "500",
                    }}
                  >
                    Desvio Disponibilizado :
                  </Text>
                  <Text style={{ marginTop: 6, fontSize: 18, marginLeft: 3 }}>
                    15 Km
                  </Text>
                </View>
              </View>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: "#5DB075",
                  borderRadius: 30,
                  height: 45,
                  width: "87%",
                }}
                onPress={handlePressContactar}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    marginLeft: 25,
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                  Contactar para reservar
                </Text>
                <Image
                  source={require("../../assets/icons/envelope.png")}
                  style={{ height: 25, width: 60 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePressInfo1}>
                <Image
                  source={require("../../assets/icons/info.png")}
                  style={{ height: 40, width: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Card.Actions>
            {showother1 && (
              <>
                <Card style={{ width: "95%", marginLeft: 9 }} mode="outlined">
                <MapView
                    style={{height: 300, width: '100%',}}
                    ref = {mapEl}>
                    
                    {destination && startLocal &&
                      <MapViewDirections
                        origin={startLocal}
                        destination={destination}
                        apikey={config.googleapykey}
                        strokeWidth={3}
                        language="pt"
                        onReady={result => {
                          mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:50,
                                    bottom:50,
                                    left:50,
                                    right:50
                                } 
                            }
                          )
                          }
                        }
                      />
                    }
                  </MapView> 
                  <Card.Title
                    title="Motorista:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent2} style={{ marginTop: -15 }} />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 20,
                        marginTop: -10,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                  </View>
                  <Card.Content>
                    <TalkBalloon
                      triangleDirection="top"
                      triangleOffSet="9%"
                      width="95%"
                      borderColor="#5DB075"
                    >
                      <Text>
                        Olá! Eu sou o João António e estudo na UM. Juntei-me à
                        UNIRides para poupar nos custos das viagens e ajudar
                        quem sofre com as greves chatas da CP :)
                      </Text>
                      
                    </TalkBalloon>
                  </Card.Content>
                </Card>
                <Card style={{ width: "95%", marginLeft: 9, marginTop:6 }} mode="outlined">
                  <Card.Title
                    title="Comentários:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-60, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="20%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Muito bom! Senti-me muito segura e em boa companhia :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <View style={{ flexDirection: "row", marginTop:-10 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-40, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="25%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Recomendo! :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <Card.Content>
                  </Card.Content>
                </Card>
              </>
            )}
          </Card>
        </View>
        )}

        { showFilterCard4 && showSearchCard4 && showDateCard4 && (
          <View style={styles.card}>
          <Card>
            <Card.Title
              title="Alexandre Matias"
              subtitle="Universidade de Aveiro"
              left={LeftContent}
              titleStyle={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 23,
                marginTop: 10,
              }}
              subtitleStyle={{ marginLeft: 20, marginTop: -6 }}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  marginLeft: 4,
                }}
              >
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Image
                    source={require("../../assets/icons/route.png")}
                    style={{
                      width: 50,
                      height: 55,
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: -16,
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{ marginTop: 8, fontSize: 20, fontWeight: "500" }}
                    >
                      Monção
                    </Text>
                    <Text style={{ marginTop: 6, fontSize: 18 }}>Convívio</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/calendar2.png")}
                    style={{ width: 35, height: 30, marginTop: 6, marginLeft:-3 }}
                  />
                  <Text style={{ marginTop: 6, fontSize: 18}}>
                    15/05/2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/clock.png")}
                    style={{ width: 30, height: 30, marginTop: 3 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    16H - 18H
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/euro.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    Negociável
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/seat.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    3 disponíveis
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 18,
                      marginLeft: 3,
                      fontWeight: "500",
                    }}
                  >
                    Desvio Disponibilizado :
                  </Text>
                  <Text style={{ marginTop: 6, fontSize: 18, marginLeft: 3 }}>
                    10 Km
                  </Text>
                </View>
              </View>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: "#5DB075",
                  borderRadius: 30,
                  height: 45,
                  width: "87%",
                }}
                onPress={handlePressContactar}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    marginLeft: 25,
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                  Contactar para reservar
                </Text>
                <Image
                  source={require("../../assets/icons/envelope.png")}
                  style={{ height: 25, width: 60 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePressInfo2}>
                <Image
                  source={require("../../assets/icons/info.png")}
                  style={{ height: 40, width: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Card.Actions>
            {showother2 && (
              <>
                <Card style={{ width: "95%", marginLeft: 9 }} mode="outlined">
                <MapView
                    style={{height: 300, width: '100%',}}
                    ref = {mapEl}>
                    
                    {destination && startLocal &&
                      <MapViewDirections
                        origin={startLocal}
                        destination={destination}
                        apikey={config.googleapykey}
                        strokeWidth={3}
                        language="pt"
                        onReady={result => {
                          mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:50,
                                    bottom:50,
                                    left:50,
                                    right:50
                                } 
                            }
                          )
                          }
                        }
                      />
                    }
                  </MapView> 
                  <Card.Title
                    title="Motorista:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent} style={{ marginTop: -15 }} />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 20,
                        marginTop: -10,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                  </View>
                  <Card.Content>
                    <TalkBalloon
                      triangleDirection="top"
                      triangleOffSet="9%"
                      width="95%"
                      borderColor="#5DB075"
                    >
                      <Text>
                        Olá! Eu sou o Alexandre e estudo na UA. Juntei-me à
                        UNIRides para poupar nos custos das viagens e ajudar
                        quem sofre com as greves chatas da CP :)
                      </Text>
                      
                    </TalkBalloon>
                  </Card.Content>
                </Card>
                <Card style={{ width: "95%", marginLeft: 9, marginTop:6 }} mode="outlined">
                  <Card.Title
                    title="Comentários:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-60, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="20%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Muito bom! Senti-me muito segura e em boa companhia :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <View style={{ flexDirection: "row", marginTop:-10 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-40, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="25%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Recomendo! :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <Card.Content>
                  </Card.Content>
                </Card>
              </>
            )}
          </Card>
        </View>
        )}

        {showFilterCard5 && showSearchCard5 && showDateCard5 && (
          <View style={styles.card}>
          <Card>
            <Card.Title
              title="Carolina Marques"
              subtitle="Universidade de Aveiro"
              left={LeftContent3}
              titleStyle={{
                marginLeft: 20,
                fontWeight: "bold",
                fontSize: 23,
                marginTop: 10,
              }}
              subtitleStyle={{ marginLeft: 20, marginTop: -6 }}
            />
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                  marginLeft: 4,
                }}
              >
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
                <Image
                  source={require("../../assets/icons/star.png")}
                  style={{ width: 12, height: 12 }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <Image
                    source={require("../../assets/icons/route.png")}
                    style={{
                      width: 50,
                      height: 55,
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: -16,
                    }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{ marginTop: 8, fontSize: 20, fontWeight: "500" }}
                    >
                      Monção
                    </Text>
                    <Text style={{ marginTop: 6, fontSize: 18 }}>DETI-UA</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                <Image
                    source={require("../../assets/icons/calendar2.png")}
                    style={{ width: 35, height: 30, marginTop: 6, marginLeft:-3 }}
                  />
                  <Text style={{ marginTop: 6, fontSize: 18}}>
                    15/05/2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/clock.png")}
                    style={{ width: 30, height: 30, marginTop: 3 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    10H - 12H
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/euro.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    9€
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Image
                    source={require("../../assets/icons/seat.png")}
                    style={{ width: 30, height: 30, marginTop: 10 }}
                  />
                  <Text style={{ marginTop: 5, fontSize: 18, marginLeft: 3 }}>
                    4 disponíveis
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 3,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 5,
                      fontSize: 18,
                      marginLeft: 3,
                      fontWeight: "500",
                    }}
                  >
                    Desvio Disponibilizado :
                  </Text>
                  <Text style={{ marginTop: 6, fontSize: 18, marginLeft: 3 }}>
                    5 Km
                  </Text>
                </View>
              </View>
            </Card.Content>
            <Card.Actions>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  backgroundColor: "#5DB075",
                  borderRadius: 30,
                  height: 45,
                  width: "87%",
                }}
                onPress={handlePressContactar}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    marginLeft: 25,
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                  Contactar para reservar
                </Text>
                <Image
                  source={require("../../assets/icons/envelope.png")}
                  style={{ height: 25, width: 60 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePressInfo3}>
                <Image
                  source={require("../../assets/icons/info.png")}
                  style={{ height: 40, width: 40 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Card.Actions>
            {showother3 && (
              <>
                <Card style={{ width: "95%", marginLeft: 9 }} mode="outlined">
                <MapView
                    style={{height: 300, width: '100%',}}
                    ref = {mapEl}>
                    
                    {destination && startLocal &&
                      <MapViewDirections
                        origin={startLocal}
                        destination={destination}
                        apikey={config.googleapykey}
                        strokeWidth={3}
                        language="pt"
                        onReady={result => {
                          mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:50,
                                    bottom:50,
                                    left:50,
                                    right:50
                                } 
                            }
                          )
                          }
                        }
                      />
                    }
                  </MapView> 
                  <Card.Title
                    title="Motorista:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent3} style={{ marginTop: -15 }} />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 20,
                        marginTop: -10,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                  </View>
                  <Card.Content>
                    <TalkBalloon
                      triangleDirection="top"
                      triangleOffSet="9%"
                      width="95%"
                      borderColor="#5DB075"
                    >
                      <Text>
                        Olá! Eu sou o Carolina e estudo na UA. Juntei-me à
                        UNIRides para poupar nos custos das viagens e ajudar
                        quem sofre com as greves chatas da CP :)
                      </Text>
                      
                    </TalkBalloon>
                  </Card.Content>
                </Card>
                <Card style={{ width: "95%", marginLeft: 9, marginTop:6 }} mode="outlined">
                  <Card.Title
                    title="Comentários:"
                    titleStyle={{ fontWeight: "bold", fontSize: 22 }}
                  />
                  <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-60, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="20%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Muito bom! Senti-me muito segura e em boa companhia :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <View style={{ flexDirection: "row", marginTop:-10 }}>
                    <Card.Title left={LeftContent} style={{ marginTop:-40, marginRight:10}} />
                    <TalkBalloon
                      triangleDirection="left"
                      triangleOffSet="25%"
                      width='670%'
                      borderColor="#5DB075"
                    >
                      <Text>
                      Recomendo! :)
                      </Text>
                      <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Image
                        source={require("../../assets/icons/star.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </View>
                    </TalkBalloon>
                  </View>
                  <Card.Content>
                  </Card.Content>
                </Card>
              </>
            )}
          </Card>
        </View>
        )}
      </View>
    </View>
  );
}

export default InitialPagev2;