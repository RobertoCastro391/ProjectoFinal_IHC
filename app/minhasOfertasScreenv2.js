import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { useRouter } from "expo-router";

import { MinhasOfertasv2, Footer } from '../components'

const accountScreen = () => {

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
            <ScrollView showsHorizontalScrollIndicator={true} >
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
                    <MinhasOfertasv2 />
                </View>
            </ScrollView>

            <View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}
export default accountScreen;