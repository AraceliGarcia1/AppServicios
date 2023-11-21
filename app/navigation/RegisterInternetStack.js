import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterInternet from "../screens/registerInternet/RegisterInternet"
const Stack = createStackNavigator();

export default function RegisterInternetStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="RegisterInternet"
                component={ RegisterInternet }
                options={{ title: "Pago Internet" }}
            />
        </Stack.Navigator>
    )
}