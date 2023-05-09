import React from 'react'
import { View, Text, SafeAreaView ,StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { useRouter, Stack } from 'expo-router';

import { LogIn, SingUp, Logo } from '../components'

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor: '#fff' }}>
            
            <Stack.Screen
                options={{
                    header: ({ navigation }) => (
                        <View style={{ height: 1 }}/>
                    ),
                    headerShadowVisible: false,
                    headerTitle: ''
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
                    <Logo/>
                    <LogIn/>
                    <SingUp/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;