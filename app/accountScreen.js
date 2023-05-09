import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import { Account, Footer } from '../components'

const accountScreen = () => {
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
                    <Account />
                </View>
            </ScrollView>

            <View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}
export default accountScreen;