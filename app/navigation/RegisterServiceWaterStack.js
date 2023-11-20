import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import RegisterServiceWaterStarck from "../screens/registerServiceWater/RegisterWater";
const Stack = createStackNavigator();

export default function RegisterServiceWarter() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="registerServiceWaterStack"
                component={ RegisterServiceWaterStarck }
                options={{ title: "Pago Agua" }}
            />
        </Stack.Navigator>
    )
}