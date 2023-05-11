import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import {Logo, Createofferv2, Footer } from '../components'

const createOfferScreenv2 = () => {
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
            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
                 
                    <Createofferv2 />
                </View>
            </ScrollView>

            <View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}
export default createOfferScreenv2;