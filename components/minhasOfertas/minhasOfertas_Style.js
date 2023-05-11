import React from 'react';
import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({

  container: {
    marginTop: 20,
  },
  
  header: {
    flexDirection: 'row', 
    alignItems:'center',
    justifyContent: 'center'
  },
  
  headerTitle: {
    fontSize: 30,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  VoltarButton: {
    fontSize: 20,
    color: '#5DB075',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  EntrarConta: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5DB075',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    height: 55,
    width: 94 
  },

  EntrarContaTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  dropdown: {
    height: 45,
    width: '90%',
    marginLeft: 10, 
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  
  placeholderStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  selectedTextStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  inputSearchStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  CriarOfertoButao: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#5DB075',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 45,
    height: 65,
  },

  CriarOfertoButaoTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default styles;