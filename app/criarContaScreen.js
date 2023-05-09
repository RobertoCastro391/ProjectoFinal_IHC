import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
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
            <ScrollView showsVerticalScrollIndicator={true} >
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
                    <CriarConta />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default criarConta;