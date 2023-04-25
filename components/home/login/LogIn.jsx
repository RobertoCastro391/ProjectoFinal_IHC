import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from "./LogIn_style";
import { COLORS, SIZES } from '../../../constants';


const LogIn = () => {
  const router = useRouter();
  
  return (
      <View>
        <Text>LogIN</Text>
      </View>
  );
};

export default LogIn;