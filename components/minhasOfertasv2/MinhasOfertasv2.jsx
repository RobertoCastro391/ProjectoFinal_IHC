import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./minhasOfertas_Stylev2";
import { Card } from 'react-native-paper'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from "../config/index.json";



const MinhasOfertasv2 = () => {

  const router = useRouter();
  
  const [showother, setShowother] = useState(false);
  const [destination, setDestination] = useState(null);
  const [startLocal, setstartLocal] = useState('');

  const handlePlaceSelect = (data, details = null) => {
    setDestination({
      latitude: 40.640402,
      longitude: -8.653747,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421,
    });
    console.log(destination);
  };

  const handlePlaceSelect2 = (data, details = null) => {
    setstartLocal({
      latitude: 42.077077,
      longitude: -8.480822,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000421,
    });
    console.log(startLocal);
 
  }
  const mapEl = useRef(null);
  const handlePressAlterar = (item) => {
    router.push('createOfferScreenv2');
  }
  const handlePressInfo = () => {
    setShowother(!showother);
    handlePlaceSelect();
    handlePlaceSelect2();
  }  


  return (
    <View style={{marginTop: 30}}>
      <View style = {styles.header} >
        <View style = {{ flex: 2 , alignItems: 'flex-start' }} >
            <TouchableOpacity onPress={() => router.push('initialPagev2Screen')}>
              <Text style = { styles.VoltarButton } >Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 7, alignItems: 'center', marginRight: 35 }}>
            <Text style={styles.headerTitle}>Minhas Ofertas</Text>
          </View>
        <TouchableOpacity style = {{ flex: 1 }} onPress={ (item) => router.push('createOfferScreenv2')}>
          <Image source={require('../../assets/icons/plus.png')} style = {{ height: 40, width: 40 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
          <Card>
            <Card.Content>
              <View >
                <View style={{ flexDirection: "row"}}>
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
                    <Text style={{ marginTop: 6, fontSize: 18 }}>Monção - Café das Termas</Text>
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
                  flex: 5,
                }}
                onPress={handlePressAlterar}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                Alterar
                </Text>
                
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5DB075",
                  borderRadius: 30,
                  height: 45,
                  width: "87%",
                  flex: 5,
                }}
                onPress={handlePressInfo}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "400",
                    fontSize: 20,
                    marginBottom: 4,
                  }}
                >
                  Rota
                </Text>
              
              </TouchableOpacity>
            </Card.Actions>
            {showother && (
              <>
                <Card style={{ width: "95%", marginLeft: 9, marginTop:6, marginBottom:10 }} >
                  
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
                </Card>
              </>
            )}
          </Card>
        </View>
    </View>
  );
}

export default MinhasOfertasv2;
