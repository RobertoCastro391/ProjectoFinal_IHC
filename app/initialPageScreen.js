import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useRouter, Stack } from 'expo-router';

import { Logo, InitialPage, Footer  } from '../components'

const initialPageScreen = () => {

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
                    <Logo />
                    <InitialPage />
                </View>
            </ScrollView>

            <View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}

export default initialPageScreen;
