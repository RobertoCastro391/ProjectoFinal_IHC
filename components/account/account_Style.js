import React from 'react';
import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row', 
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  
  headerTitle: {
    fontSize: 30,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 40,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,  
  },
  subtitle: {
    fontSize: 25,
    color: COLORS.primary,
    
    marginTop: 10,  
  },
  info: {
    fontSize: 20,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,  
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
    width: '100%',
    height: 50,
    marginTop: 10,
  },

  EntrarContaTitle: {
    textAlign: 'center',
    fontSize: 20,
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

  cardProfiles: {
    width: 150, 
    height: 150,
    borderRadius : 150,
    marginTop : 25,
   },
});
export default styles;