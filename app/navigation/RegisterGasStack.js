import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterGas from "../screens/registerGas/RegisterGas"
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
                name="RegisterGas"
                component={ RegisterGas }
                options={{ title: "Pago Gas" }}
            />
        </Stack.Navigator>
    )
}