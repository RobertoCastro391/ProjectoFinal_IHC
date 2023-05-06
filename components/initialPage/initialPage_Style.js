import React from 'react';
import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  
  container: {
    marginTop: 15,
  },
  
  headerTitle: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
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
});
export default styles;