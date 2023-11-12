import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import PaymentHistory from "../screens/paymentHistory/PaymentHistory";
const Stack = createStackNavigator();

export default function PaymentsHistoryStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="paymentsHistoryStack"
                component={ PaymentHistory }
                options={{ title: "Historial" }}
            />
        </Stack.Navigator>
    )
}