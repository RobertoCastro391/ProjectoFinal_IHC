import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import { Notification, Footer } from '../components'

const notificationScreen = () => {
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
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
                    <Notification />
                </View>
            </ScrollView>

            <View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}
export default notificationScreen;