import React from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import { Stack } from 'expo-router';
import { useRouter } from "expo-router";

import { MinhasOfertas, Footer } from '../components'

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
                    <MinhasOfertas />
                </View>
            </ScrollView>

            <View>
                <View style={{ margin: 12 }}>
                        <TouchableOpacity style={{ justifyContent: 'center',textAlign: 'center', backgroundColor: '#5DB075', borderColor: '#fff', borderWidth: 2, borderRadius: 30, marginTop: 45, height: 65 }} onPress={(item) => {router.push("createOfferScreen")} } >
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', }}>Criar Anúncio</Text>
                        </TouchableOpacity>
                    </View>
                <Footer />
            </View>

        </SafeAreaView>
    )
}
export default accountScreen;