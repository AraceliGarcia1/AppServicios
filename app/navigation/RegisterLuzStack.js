import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterLuz from "../screens/registerLuz/RegisterLuz"
const Stack = createStackNavigator();

export default function RegisterLuzStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="RegisterLuz"
                component={ RegisterLuz }
                options={{ title: "Pago Luz" }}
            />
        </Stack.Navigator>
    )
}