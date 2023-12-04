import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useCallback } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {useFocusEffect } from '@react-navigation/native';
export default function PaymentHistory() {
  const [juegos, setJuegos] = useState([]);
  const [agua, setAgua] = useState([]);
  const [gas, setGas] = useState([]);
  const [internet, setInternet] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [television, setTelevision] = useState([]);
  const [luz, setLuz] = useState([]);
  const [streaming, setStreaming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [navigation, setNavigation] = useState(false);
 const reiniciarLoading = () => {
	console.log("se esta recargando")
    setLoading(true);
    fetchData();
  };

  useFocusEffect(
    useCallback(() => {
      reiniciarLoading();
      return () => {
        
      };
    }, [])
   );

    const fetchData = async () => {
		console.log("se esta recargando 2")
      try {
        const fetchJuegos = async () => {
          const snapshot = await getDocs(collection(db, "juegos"));
          const juegos = snapshot.docs.map((doc) => doc.data());
          setJuegos(juegos);
        };
        const fetchAgua = async () => {
          const snapshot = await getDocs(collection(db, "agua"));
          const agua = snapshot.docs.map((doc) => doc.data());
          setAgua(agua);
        };
        const fetchGas = async () => {
          const snapshot = await getDocs(collection(db, "gas"));
          const gas = snapshot.docs.map((doc) => doc.data());
          setGas(gas);
        };
        const fetchInternet = async () => {
          const snapshot = await getDocs(collection(db, "internet"));
          const internet = snapshot.docs.map((doc) => doc.data());
          setInternet(internet);
        };
        const fetchTelefono = async () => {
          const snapshot = await getDocs(collection(db, "telefono"));
          const telefono = snapshot.docs.map((doc) => doc.data());
          setTelefono(telefono);
        };
        const fetchTelevision = async () => {
          const snapshot = await getDocs(collection(db, "television"));
          const television = snapshot.docs.map((doc) => doc.data());
          setTelevision(television);
        };
        const fetchStreaming = async () => {
          const snapshot = await getDocs(collection(db, "streaming"));
          const streaming = snapshot.docs.map((doc) => doc.data());
          setStreaming(streaming);
        };
		const fetchLuz = async () => {
			const snapshot = await getDocs(collection(db, "luz"));
			const luz1 = snapshot.docs.map((doc) => doc.data());
      const luz = luz1.filter((item) => item.enable === true);
      //console.log("filtro",streamingFiltered)
			setLuz(luz);
		};
    
   
        await fetchJuegos();
        await fetchAgua();
        await fetchGas();
        await fetchInternet();
        await fetchTelefono();
        await fetchTelevision();
        await fetchStreaming();
		    await fetchLuz();
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      } finally {
        
      }
      setLoading(false);
    };
  
 
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
   
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Juegos</Text>
      {juegos.map((juego, index) => (
        <View key={`juegos-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {juego.alias}
            </Text>
            <Text>Precio: {juego.amount}</Text>
            <Text>Referencia:{juego.referencia}</Text>
            <Text>Tarjeta:{juego.card}</Text>
            <Text>Fecha:{juego.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Agua</Text>
      {agua.map((agua, index) => (
        <View key={`agua-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {agua.alias}
            </Text>
            <Text>Precio: {agua.amount}</Text>
            <Text>Referencia:{agua.referencia}</Text>
            <Text>Tarjeta:{agua.card}</Text>
            <Text>Fecha:{agua.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Gas</Text>
      {gas.map((gas, index) => (
        <View key={`gas-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {gas.alias}
            </Text>
            <Text>Precio: {gas.amount}</Text>
            <Text>Referencia:{gas.referencia}</Text>
            <Text>Tarjeta:{gas.card}</Text>
            <Text>Fecha:{gas.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Internet</Text>
      {internet.map((internet, index) => (
        <View key={`internet-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {internet.alias}
            </Text>
            <Text>Precio: {internet.amount}</Text>
            <Text>Referencia:{internet.referencia}</Text>
            <Text>Provedor:{internet.proveedor}</Text>
            <Text>Tarjeta:{internet.card}</Text>
            <Text>Fecha:{internet.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}

      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Teléfono</Text>
      {telefono.map((telefono, index) => (
        <View key={`telefono-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {telefono.alias}
            </Text>
            <Text>Precio: {telefono.amount}</Text>
            <Text>Teléfono:{telefono.telefono}</Text>
            <Text>Provedor:{telefono.proveedor}</Text>
            <Text>Tarjeta:{telefono.card}</Text>
            <Text>Fecha:{telefono.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}

      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Televisión</Text>
      {television.map((television, index) => (
        <View key={`television-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {television.alias}
            </Text>
            <Text>Precio: {television.amount}</Text>
            <Text>Referencia:{television.referencia}</Text>
            <Text>Provedor:{television.proveedor}</Text>
            <Text>Tarjeta:{television.card}</Text>
            <Text>Fecha:{television.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}

      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Streaming</Text>
      {streaming.map((streaming, index) => (
        <View key={`streaming-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {streaming.alias}
            </Text>
            <Text>Precio: {streaming.amount}</Text>
            <Text>Referencia:{streaming.referencia}</Text>
            <Text>Provedor:{streaming.proveedor}</Text>
            <Text>Tarjeta:{streaming.card}</Text>
            <Text>Fecha:{streaming.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}

	  <Text style={{ fontWeight: "bold", fontSize: 20 }}>Electricidad</Text>
      {luz.map((luz, index) => (
        <View key={`luz-${index}`} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Alias: {luz.alias}
            </Text>
            <Text>Precio: {luz.amount}</Text>
            <Text>Referencia:{luz.referencia}</Text>
            <Text>Tarjeta:{luz.card}</Text>
            <Text>Fecha:{luz.createAt.toDate().toLocaleString()}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    backgroundColor: "#f4f4f4",
    paddingTop: 10,
    marginLeft: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    maxWidth: 800,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 130,
    marginTop: 20,
  },
  cardButtons: {
    flexDirection: "row",
  },
  iconButton: {
    borderRadius: 6,
    padding: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    padding: 10,
    borderRadius: 6,
    width: 100,
    alignItems: "center",
  },
});
