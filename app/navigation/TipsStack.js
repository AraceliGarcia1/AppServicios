import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Tips from "../screens/tips/Tips";
const Stack = createStackNavigator();

export default function TipsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle:{backgroundColor: '#0A497B'}
            }}
        >
            <Stack.Screen
                name="tipsStack"
                component={ Tips }
                options={{ title: "Tips" }}
            />
        </Stack.Navigator>
    )
}