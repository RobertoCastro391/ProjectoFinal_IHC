import React from 'react'
import { View, Text, SafeAreaView ,StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRouter, Stack } from 'expo-router';

import { LogIn, SingUp } from '../components'



const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor: '#fff' }}>
            
            <Stack.Screen
                options={{
                    hearderStyle: { backgroundColor: '#fff' },
                    headerShadowVisible: false,
                    headerTitle: ''
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
                    <LogIn/>
                    <SingUp/>
                </View>
            </ScrollView>

        </SafeAreaView>
        
    )
}
export default Home;