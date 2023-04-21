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
        <Button
                // Some properties given to Button
                title="Geeks"
                onPress={clickHandler}
                style={ok.container}
            />
      </View>
    </SafeAreaView>
  );
};

export default App;

const ok = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#71EC4C',
      alignItems: 'center',
      alignContent: 'center',
  },
});

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
  ola: {
    flex: 1,
    backgroundColor: '#71EC4C',
    alignItems: 'center',
    justifyContent: 'center',
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