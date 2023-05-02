import React from 'react';
import { View, Image } from 'react-native';
import styles from './Logo_Style';

const SignUp = () => {
  return (
    <View style={styles.container} >
      <Image source={require("../../../assets/logo/logo1.png")}
        style={styles.Image}
      />
    </View>
  );
};
export default SignUp;