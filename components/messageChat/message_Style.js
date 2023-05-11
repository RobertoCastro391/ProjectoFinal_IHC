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

  message: {
    fontSize: 18,
  },

  VoltarButton: {
    fontSize: 20,
    color: '#5DB075',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  chatReceiver: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10
  },

  chatSender: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 10
  },

  cardProfilesReceiver: {
    width: 70, 
    height: 70,
    borderRadius : 40,
    marginTop : 5,
    marginLeft: 10
  },

  cardProfilesSender: {
    width: 70, 
    height: 70,
    borderRadius : 40,
    marginTop : 5,
    marginRight: 10
  },
  
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    height: 65,
    marginTop: 33,
  },

  searchWrapper: {
    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
  },

  searchInput: {
    
    fontSize: 20,
    fontWeight: 'bold',
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },

  sendButton: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 15,
    alignItems: 'flex-end'
  },

  sendIcon: {
    width: 45,
    height: 45,
  },

  footer: {
    verticalAlign: 'bottom',
  }
});
export default styles;