import { View, Text, SafeAreaView ,StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { useRouter, Stack } from 'expo-router';

import { CriarConta } from '../components'

const criarConta = () => {

    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor: '#fff' }}>
            <Stack.Screen
                options={{
                    header: ({ navigation }) => (
                        <View style={{ height: 1 }}/>
                    ),
                    headerShadowVisible: true,
                    headerTitle: ''
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
                    <CriarConta />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default criarConta;