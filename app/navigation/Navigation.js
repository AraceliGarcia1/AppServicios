import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import PaymentsHistoryStack from "./PaymentHistoryStack";
import FavoritesStack from "./FavoritesStack";
import ProfileStack from "./ProfileStack";
import PaymentServicesStack from "./PaymentServicesStack";
import TipsStack from "./TipsStack";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="profile"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
         <Tab.Screen
          name="payment"
          component={PaymentServicesStack}
          options={{ title: "Servicios" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="history"
          component={PaymentsHistoryStack}
          options={{ title: "Historial de Pago" }}
        />
         <Tab.Screen
          name="tips"
          component={TipsStack}
          options={{ title: "Tips" }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{ title: "Perfil" }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "history":
      iconName = "history";
      break;

    case "favorites":
      iconName = "heart-circle";
      break;

    case "payment":
      iconName = "cash-multiple";
      break;
    case "profile":
      iconName = "account-outline";
      break;

    case "tips":
      iconName = "bookmark-check-outline";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};
