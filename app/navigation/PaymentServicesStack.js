import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentServices from "../screens/paymentServices/PaymentServices";
import RegisterGas from "../screens/registerGas/RegisterGas";
import RegisterInternet from "../screens/registerInternet/RegisterInternet";
import RegisterJuegos from "../screens/registerJuegos/RegisterJuegos";
import RegisterLuz from "../screens/registerLuz/RegisterLuz";
import RegisterWater from "../screens/registerServiceWater/RegisterWater";
import RegisterStreaming from "../screens/registerStreaming/RegisterStreaming";
import RegisterTelefono from "../screens/registerTelefono/RegisterTelefono";
import RegisterTelevision from "../screens/registerTelevision/RegisterTelevision";
const Stack = createStackNavigator();

export default function PaymentServicesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#0A497B" },
      }}
    >
      <Stack.Screen
        name="paymentServicesStack"
        component={PaymentServices}
        options={{ title: "Servicios" }}
      />
      <Stack.Screen
        name="gas"
        component={RegisterGas}
        options={{ title: "Gas Lp" }}
      />
      <Stack.Screen
        name="internet"
        component={RegisterInternet}
        options={{ title: "Internet" }}
      />
      <Stack.Screen
        name="juegos"
        component={RegisterJuegos}
        options={{ title: "Juegos" }}
      />
      <Stack.Screen
        name="luz"
        component={RegisterLuz}
        options={{ title: "Electricidad" }}
      />
      <Stack.Screen
        name="agua"
        component={RegisterWater}
        options={{ title: "Agua Potable" }}
      />
      <Stack.Screen
        name="streaming"
        component={RegisterStreaming}
        options={{ title: "Streaming" }}
      />
      <Stack.Screen
        name="telefono"
        component={RegisterTelefono}
        options={{ title: "Teléfono" }}
      />
      <Stack.Screen
        name="television"
        component={RegisterTelevision}
        options={{ title: "Televisión" }}
      />
    </Stack.Navigator>
  );
}
