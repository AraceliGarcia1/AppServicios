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
import Cards from "../screens/favorites/Cards";
import ServiceSummary from "../screens/paymentServices/ServiceSummary";
import ServiceSummaryGas from "../screens/paymentServices/ServiceSummaryGas";
import ServiceSummaryInternet from "../screens/paymentServices/ServiceSummaryInternet";
import ServiceSummaryAgua from "../screens/paymentServices/ServiceSummaryAgua";
import ServiceSummaryTelefono from "../screens/paymentServices/ServiceSummaryTelefono";
import ServiceSummaryStreaming from "../screens/paymentServices/ServiceSummaryStreaming";
import ServiceSummaryTelevision from "../screens/paymentServices/ServiceSummaryTelevision";
import ServiceSummaryLuz from "../screens/paymentServices/ServiceSummaryLuz";
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
      <Stack.Screen
        name="tarjetas"
        component={Cards}
        options={{ title: "Mis tarjetas" }}
      />
       <Stack.Screen
        name="resumen"
        component={ServiceSummary}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resumenTelefono"
        component={ServiceSummaryTelefono}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resumenGas"
        component={ServiceSummaryGas}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resumenInternet"
        component={ServiceSummaryInternet}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resumenAgua"
        component={ServiceSummaryAgua}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resumenStreaming"
        component={ServiceSummaryStreaming}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resumenTelevision"
        component={ServiceSummaryTelevision}
        options={{ title: "Resumen del Servicio" }}
      />
      <Stack.Screen
        name="resummenLuz"
        component={ServiceSummaryLuz}
        options={{ title: "Resumen del Servicio" }}
      />
      

    </Stack.Navigator>
  );
}
