import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';

import styles from "./SignUp_Style";
import { COLORS, SIZES } from '../../../constants';


const SignUp = () => {
  const router = useRouter();
  
  /*const handleCardPress = (item) => {
    router.push('/job-details/${item.job_id}');
    setSelectedJob(item.job_id);
  };*/

  return (
    <View>
      <Text>SignUP</Text>
    </View>
  );
};
export default SignUp;
