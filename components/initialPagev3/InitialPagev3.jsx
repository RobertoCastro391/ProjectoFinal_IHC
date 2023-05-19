import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, Image } from "react-native";
import { Searchbar, Avatar, Button, Card } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";
import TalkBalloon from "react-native-talk-balloon";

import styles from "./initialPagev2_Style";


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

  const LeftContent = props => <Image source={require("../../assets/images/deusa.jpeg")} style = {styles.cardProfiles} resizeMode={'center'} />
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
    router.push('minhasOfertasScreenv2');
  }

  const handlePressContactar = (item) => {
    router.push('messageChatAlexScreen');
  }

  const handlePressInfo = () => {
    setShowother(!showother);
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
            onChange={(item) => {
              setValue(item.value);
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 13 }}>
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
                      style={{ marginTop: 8, fontSize: 18, fontWeight: "500" }}
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
      </View>
    </View>
  );
}

export default InitialPage;