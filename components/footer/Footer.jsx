import React from 'react';
import { useRouter } from "expo-router";
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './Footer_style';

const Footer = () => {

    const router = useRouter();

    const handleNotificationButton = (item) => {
        router.push('notificationScreen');
    }

    const handleMessageButton = (item) => {
        router.push('messageScreen');
    }

    const handleAccountButton = (item) => {
        router.push('accountScreen');
    }

    return (
        <View style={ styles.container } >

            <View style={ styles.FooterStyle } >
                <View style = {{ flex: 1, alignItems: 'flex-start', marginLeft: 30 }} >
                    <TouchableOpacity onPress={handleNotificationButton} >
                        <Image source={require("../../assets/icons/bell.png")} style = {{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                </View>

                <View style = {{ flex: 1, alignItems: 'center' }} >
                    <TouchableOpacity onPress={handleMessageButton} >
                        <Image source={require("../../assets/icons/envelope.png")} style = {{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                </View>
                
                <View style = {{ flex: 1, alignItems: 'flex-end',  marginRight: 30 }} >
                    <TouchableOpacity onPress={handleAccountButton} >
                        <Image source={require("../../assets/icons/user.png")} style = {{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                </View>
            </View>  
        </View>
    )
}
export default Footer;
