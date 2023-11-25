import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterJuegos from "../screens/registerJuegos/RegisterJuegos"
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
                name="RegisterJuegos"
                component={ RegisterJuegos }
                options={{ title: "Pago Juegos" }}
            />
        </Stack.Navigator>
    )
}