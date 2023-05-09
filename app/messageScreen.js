import React from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Stack } from 'expo-router';

import { Message, Footer } from '../components'

const messageScreen = () => {
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
                    <Message />
                </View>
            </ScrollView>

            <View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}
export default messageScreen;