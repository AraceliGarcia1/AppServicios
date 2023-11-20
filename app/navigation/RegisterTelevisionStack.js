import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterTelevision from "../screens/registerInternet/RegisterInternet"
const Stack = createStackNavigator();

export default function RegisterTelevisionStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="RegisterTelevision"
                component={ RegisterTelevision }
                options={{ title: "Pago Television" }}
            />
        </Stack.Navigator>
    )
}