import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants";

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
    borderRadius: 30,
    height: 55,
    width: 94,
  },

  EntrarConta2: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#5DB075',
    borderColor: '#fff',
    borderRadius: 30,
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

  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
 
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 8,
    width : '100%',
    marginTop : 20,
  },

  cardProfiles: {
    width: 65, 
    height: 65,
    borderRadius : 40,
    marginTop : 8,
   },

   cardHeader: {
    fontWeight : 'bold',
   },

  calendarioButton: {
    marginLeft: 10,
    borderWidth: 0,
    backgroundColor : '#E8E8E8',
    borderRadius: 8,
    fontSize: 20,
  },

  calendarioText: {
    margin: 10,
    backgroundColor : '#E8E8E8',
    borderRadius: 8,
    fontSize: 20,
  },

  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
export default styles;