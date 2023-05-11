import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { Searchbar, Avatar, Button, Card } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";
import TalkBalloon from "react-native-talk-balloon";

import styles from "./initialPage_Style";
import { set } from 'react-native-reanimated';


const InitialPage = () => {

  const router = useRouter();
 
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [showother, setShowother] = useState(false);
  const [showother1, setShowother1] = useState(false);
  const [showother2, setShowother2] = useState(false);
  const [showother3, setShowother3] = useState(false);

  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [showCard3, setShowCard3] = useState(true);
  const [showCard4, setShowCard4] = useState(true);


  const handleFilter = (value) => {
    if (value == '3') {
      setShowCard1(true);
      setShowCard2(false);
      setShowCard3(true);
      setShowCard4(true);
    }
    if (value == '0') {
      setShowCard1(true);
      setShowCard2(true);
      setShowCard3(true);
      setShowCard4(true);
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

  const onChangeSearch = query => setSearchQuery(query);

  const LeftContent = props => <Image source={require("../../assets/images/alexandre.png")} style = {styles.cardProfiles} />
  const LeftContent1 = props => <Image source={require("../../assets/images/mulher1.jpeg")} style = {styles.cardProfiles} />
  const LeftContent2 = props => <Image source={require("../../assets/images/homem1.jpeg")} style = {styles.cardProfiles} />
  const LeftContent3 = props => <Image source={require("../../assets/images/deusa.jpeg")} style = {styles.cardProfiles} />

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
  const handlePressInfo1 = () => {
    setShowother1(!showother1);
  }
  const handlePressInfo2 = () => {
    setShowother2(!showother2);
  }
  const handlePressInfo3 = () => {
    setShowother3(!showother3);
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
          <Text style={styles.EntrarContaTitle}>Criar Anúncio</Text>
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
        
        {showCard1 && (
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

        {showCard2 && (
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

        {showCard3 && (
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
        
        { showCard4 && (
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
                    <Text style={{ marginTop: 6, fontSize: 18 }}>DETI_UA</Text>
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
                    16/05/2023
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

export default InitialPage;
