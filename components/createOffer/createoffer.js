import React from 'react';
import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
  
    container: {
      marginTop: SIZES.xxLarge,
    },
  
    header: {
      flexDirection: 'row', 
      alignItems:'center'
    },
  
    headerTitle: {
      fontSize: 30, 
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
  
    selectDate: {
      flexDirection: 'row', 
      alignItems:'center', 
      marginTop: 32, 
      justifyContent: 'center'
    },
  
    title: {
      color: '#BDBDBD', 
      fontSize: 25, 
      fontWeight: 'bold'
    },
  
    title2: {
      color: '#BDBDBD', 
      fontSize: 16, 
      fontWeight: 'bold'
    },
  
    checkBox: {
      margin: 8, 
      width: 30, 
      height: 30,
      borderColor: '#BDBDBD'
    },
  
    genderIcon: {
      width: 45,
      height: 45,
    },
  
    EntrarConta: {
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#5DB075',
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 30,
      marginTop: 40,
      height: 65,
    },
  
    EntrarContaTitle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },

    container2: {
      marginTop: SIZES.xxLarge,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    VoltarButton: {
        fontSize: 20,
        color: '#5DB075',
        textAlign: 'center',
        fontWeight: 'bold'
      },
    
  
  });
  
  export default styles;