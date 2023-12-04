import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Modal,
} from "react-native";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import {useFocusEffect } from '@react-navigation/native';
export default function Favorites() {
  const navigation = useNavigation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCreditCardPress = () => {
    navigation.navigate("tarjetas");
  };
  const handleTrashPress = () => {
    setShowDeleteModal(true);
  };
  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const [juegos, setJuegos] = useState([]);
  const [agua, setAgua] = useState([]);
  const [gas, setGas] = useState([]);
  const [internet, setInternet] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [television, setTelevision] = useState([]);
  const [luz, setLuz] = useState([]);
  const [streaming, setStreaming] = useState([]);
  const [loading, setLoading] = useState(true);

  const reiniciarLoading = () => {
    setLoading(true);
    fetchData();
  };

  useFocusEffect(
    useCallback(() => {
      reiniciarLoading();
      return () => {};
    }, [])
  );

  const fetchData = async () => {
    try {
      const fetchJuegos = async () => {
        const snapshot = await getDocs(collection(db, "juegos"));
        const juegosList = snapshot.docs.map((doc) => doc.data());
		const juegos = juegosList.filter((item) => item.enable === true);
        setJuegos(juegos);
      };
      const fetchAgua = async () => {
        const snapshot = await getDocs(collection(db, "agua"));
        const aguaList = snapshot.docs.map((doc) => doc.data());
		const agua = aguaList.filter((item) => item.enable === true);
        setAgua(agua);
      };
      const fetchGas = async () => {
        const snapshot = await getDocs(collection(db, "gas"));
        const gasList = snapshot.docs.map((doc) => doc.data());
		const gas = gasList.filter((item) => item.enable === true);
        setGas(gas);
      };
      const fetchInternet = async () => {
        const snapshot = await getDocs(collection(db, "internet"));
        const internetList = snapshot.docs.map((doc) => doc.data());
		const internet = internetList.filter((item) => item.enable === true);
        setInternet(internet);
      };
      const fetchTelefono = async () => {
        const snapshot = await getDocs(collection(db, "telefono"));
        const telefonoList = snapshot.docs.map((doc) => doc.data());
		const telefono = telefonoList.filter((item) => item.enable === true);
        setTelefono(telefono);
      };
      const fetchTelevision = async () => {
        const snapshot = await getDocs(collection(db, "television"));
        const televisionList = snapshot.docs.map((doc) => doc.data());
		const television = televisionList.filter((item) => item.enable === true);
        setTelevision(television);
      };
      const fetchStreaming = async () => {
        const snapshot = await getDocs(collection(db, "streaming"));
        const streamingList = snapshot.docs.map((doc) => doc.data());
		const streaming = streamingList.filter((item) => item.enable === true);
        setStreaming(streaming);
      };
      const fetchLuz = async () => {
        const snapshot = await getDocs(collection(db, "luz"));
        const luzList = snapshot.docs.map((doc) => doc.data());
        const luz = luzList.filter((item) => item.enable === true);
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
	{juegos.map((juego, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {juego.alias}
          </Text>
          <Text>Precio: $ {juego.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

	  {agua.map((agua, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {agua.alias}
          </Text>
          <Text>Precio: $ {agua.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}
      
	  {gas.map((gas, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {gas.alias}
          </Text>
          <Text>Precio: $ {gas.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

	  {internet.map((internet, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {internet.alias}
          </Text>
          <Text>Precio: $ {internet.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

	  {television.map((television, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {television.alias}
          </Text>
          <Text>Precio: $ {television.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

	  {telefono.map((telefono, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {telefono.alias}
          </Text>
          <Text>Precio: $ {telefono.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

	  {streaming.map((streaming, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {streaming.alias}
          </Text>
          <Text>Precio: $ {streaming.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

	  {luz.map((luz, index) => (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
		  	Alias: {luz.alias}
          </Text>
          <Text>Precio: $ {luz.amount}</Text>
        </View>
        <View style={styles.cardButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleTrashPress}
          >
            <FontAwesomeIcon icon={faTrash} size={25} color="#e60f2f" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleCreditCardPress}
          >
            <FontAwesomeIcon icon={faCreditCard} size={30} color="#69933e" />
          </TouchableOpacity>
        </View>
      </View>
	  ))}

      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => {
          handleDeleteCancel();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}
            >
              ¿Estás seguro de que deseas eliminar este elemento?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "green" }]}
                onPress={handleDeleteConfirm}
              >
                <Text style={{ color: "white" }}>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "red", marginLeft: 10 },
                ]}
                onPress={handleDeleteCancel}
              >
                <Text style={{ color: "white" }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingTop: 10,
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
    height: 100,
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
