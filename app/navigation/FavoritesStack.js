import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/favorites/Favorites";
const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#14CFFF" },
      }}
    >
      <Stack.Screen
        name="favoritesStack"
        component={Favorites}
        options={{ title: "Favoritos" }}
      />
      
    </Stack.Navigator>
  );
}
