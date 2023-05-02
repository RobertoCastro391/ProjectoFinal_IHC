import React from 'react';
import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  
  container: {
    marginTop: SIZES.xxLarge,
  },

  headerTitle: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  searchContainer: {
    backgroundColor: '#E5E5E5',
    justifyContent: "center",
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: SIZES.large,
    height: 65,
  },

  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
    height: "100%",
  },

  searchInput: {
    fontSize: 20,
    fontWeight: 'bold',
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },

  EntrarConta: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#5DB075',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: 45,
    height: 65,
  },

  EntrarContaTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  EsqucerPassword: {
    color: '#5DB075',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;
