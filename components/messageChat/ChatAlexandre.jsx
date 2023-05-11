import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import { useRouter } from "expo-router";
import styles from "./message_Style";
import TalkBalloon from "react-native-talk-balloon";

const ChatAlexandre = () => {

  const [mensagem, setMessagem] = React.useState('');
  const [pressSend, setPressSend] = React.useState(false);

  const handlePressSend = () => {
    setPressSend(true);
  }

  const router = useRouter();
  return (
    <View style = {styles.container} >
      
      <View style = {styles.header} >
        <View style = {{ flex: 0, alignItems: 'flex-start' }} >
            <TouchableOpacity onPress={() => router.back()}>
              <Text style = { styles.VoltarButton }>Voltar</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginRight: 35 }}>
          <Text style={styles.headerTitle}>Alexandre Matias</Text>
        </View>
      </View>

      <View  >
        <View style={styles.chatReceiver}>
          <TalkBalloon triangleDirection='bottom' triangleOffSet='10%' backgroundColor={'#F6F6F6'} >
            <Text style = {styles.message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis.</Text>
          </TalkBalloon>
          <Image source={require('../../assets/images/alexandre.png')} style = {styles.cardProfilesReceiver} />
        </View>

        <View style={styles.chatSender}>
          <TalkBalloon triangleDirection='bottom' triangleOffSet='69%' backgroundColor={'#5DB075'} >
            <Text style = {styles.message} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis.</Text>
          </TalkBalloon>
          <Image source={require('../../assets/images/alexandre.png')} style = {styles.cardProfilesSender} />
        </View>
            
        <View style={styles.chatReceiver}>
          <TalkBalloon triangleDirection='bottom' triangleOffSet='10%' backgroundColor={'#F6F6F6'} >
            <Text style = {styles.message}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis.</Text>
          </TalkBalloon>
          <Image source={require('../../assets/images/alexandre.png')} style = {styles.cardProfilesReceiver} />
        </View>

        {pressSend &&(
          <View style={styles.chatSender}>
            <TalkBalloon triangleDirection='bottom' triangleOffSet='69%' backgroundColor={'#5DB075'} >
              <Text style = {styles.message}>{mensagem}</Text>
            </TalkBalloon>
            <Image source={require('../../assets/images/alexandre.png')} style = {styles.cardProfilesSender} />
          </View>
        )}

      </View>

        
      <View style={styles.searchContainer}>
        <View styles={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Escrever Mensagem"
            value={mensagem}
            onChangeText={setMessagem}
          />
        </View>
        <View style = {styles.sendButton}>
          <TouchableOpacity  onPress={handlePressSend} >
            <Image source={require('../../assets/icons/send.png')} style = {styles.sendIcon} />
          </TouchableOpacity>
        </View>
        
      </View>

    </View>
  );
}
export default ChatAlexandre;