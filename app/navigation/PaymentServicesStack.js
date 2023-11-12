import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import PaymentServices from "../screens/paymentServices/PaymentServices";
const Stack = createStackNavigator();

export default function PaymentServicesStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="paymentServicesStack"
                component={ PaymentServices }
                options={{ title: "Favoritos" }}
            />
        </Stack.Navigator>
    )
}