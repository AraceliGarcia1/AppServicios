import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterStreaming from "../screens/registerStreaming/RegisterStreaming"
const Stack = createStackNavigator();

export default function RegisterStreamingStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="RegisterStreaming"
                component={ RegisterStreaming }
                options={{ title: "Pago Streaming" }}
            />
        </Stack.Navigator>
    )
}