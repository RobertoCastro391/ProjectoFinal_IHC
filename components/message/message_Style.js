import React from 'react';
import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row', 
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  
  headerTitle: {
    fontSize: 30,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  title: {
    fontWeight : 'bold', 
    fontSize: 20,
  },

  subtitle: {
    marginTop:-1,
    fontSize: 15,
  },

  containerMessage: {
    flex: 2,
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginLeft: 15, 
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

  cardProfiles: {
    width: 70, 
    height: 70,
    borderRadius : 40,
    marginTop : 20,
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
});
export default styles;