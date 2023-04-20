import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const clickHandler = () => {
    alert('Botão Clicado');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          UniRides
        </Text>
        <Text style={styles.textStyle}>
          Inicie Sessão 
        </Text>
        <Button title = 'OLa'></Button>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'flex-start',
  },
  titleStyle: {
    fontSize: 67,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'cover',
    width: 56,
    height: 56,
  },
});