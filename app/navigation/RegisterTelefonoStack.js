import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterTelefono from "../screens/registerTelefono/RegisterTelefono"
const Stack = createStackNavigator();

export default function RegisterTelefonoStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="RegisterTelefono"
                component={ RegisterTelefono }
                options={{ title: "Pago Telefono" }}
            />
        </Stack.Navigator>
    )
}