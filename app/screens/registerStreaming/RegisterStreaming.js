import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import RNPickerSelectet from "react-native-picker-select";
import React, { useState } from "react";
import * as Yup from "yup";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../utils/Firebase";
import uuid from "random-uuid-v4";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RegisterStreaming(props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const { navigation } = props;
  const [proveedor, setProveedor] = useState("");
  const [referencia, setReferencia] = useState("");
  const [alias, setAlias] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const cardData = [
    {
      name: "citibanamex 9012",
      imageUri: require("../../assets/citibanamex.png"),
    },
    {
      name: "banco azteca 5678",
      imageUri: require("../../assets/azteca.png"),
    },
    {
      name: "bbva 7899",
      imageUri: require("../../assets/bbva.png"),
    },
  ];
  const [isCardListVisible, setIsCardListVisible] = useState(false);

  const schema = Yup.object().shape({
    proveedor: Yup.string().required("Proveedor es obligatorio"),
    referencia: Yup.string().required("Referencia es obligatoria"),
    alias: Yup.string().required("Alias es obligatorio"),
    amount: Yup.number()
      .typeError("El monto debe ser un número")
      .required("Monto es obligatorio")
      .positive("El monto debe ser mayor a cero"),
  });

  const handleCardSelect = (index) => {
    setSelectedCardIndex(index);
    setIsCardListVisible(false);
  };
  const toggleCardListVisibility = () => {
    setIsCardListVisible(!isCardListVisible);
  };

  // const toggleSwitch = () => {
  //   console.log("ejecutando", !isEnabled);
  //   setIsEnabled((isEnabled) => !isEnabled);
  // };

  const handleSave = async () => {
    try {
      const amountNumber = parseFloat(amount);
      const isValid = await schema.isValid({
        proveedor,
        referencia,
        alias,
        amount: amountNumber,
      });
      if (isValid) {
        try {
          setLoading(true);
          const nameCard = cardData[selectedCardIndex].name;
          const docRef = await addDoc(collection(db, "streaming"), {
            id: uuid(),
            proveedor: proveedor,
            referencia: referencia,
            alias: alias,
            amount: amount,
            card: nameCard,
            createAt: new Date(),
          });
          navigation.navigate("resumenStreaming", { docId: docRef.id });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        throw new Error("Todos los campos son requeridos");
      }
    } catch (error) {
      console.error("Error de validación:", error.message);
      alert(error.message);
    }
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const onDateChange = (event, selectedDate) => {
  //   setShowDatePicker(false);
  //   if (selectedDate) {
  //     setSelectedDate(selectedDate);
  //   }
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={{ ...styles.label, fontWeight: "800", fontSize: 20 }}>
          Selecciona tu proveedor de streaming:
        </Text>
        <RNPickerSelectet
          selectedValue={proveedor}
          style={styles.picker}
          onValueChange={(itemValue) => setProveedor(itemValue)}
          items={[
            { label: "Netflix", value: "Netflix" },
            { label: "HBO", value: "HBO" },
            { label: "Disney +", value: "Disney" },
            { label: "Vix", value: "Vix" },
            { label: "Amazon prime", value: "AmazonPrime" },
            { label: "Paramount", value: "Paramount" },
          ]}
        ></RNPickerSelectet>
        <Text style={{ ...styles.label, fontWeight: "800", fontSize: 20 }}>
          Referencia
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Referencia"
          onChangeText={(text) => setReferencia(text)}
          underlineColorAndroid="#0A497C"
        />
        <Text style={{ ...styles.label, fontWeight: "800", fontSize: 20 }}>
          Alias
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Alias"
          onChangeText={(text) => setAlias(text)}
          underlineColorAndroid="#0A497C"
        />
        <Text style={{ ...styles.label, fontWeight: "800", fontSize: 20 }}>
          Monto a ingresar:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Monto"
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
          underlineColorAndroid="#0A497C"
        />
        <View style={styles.switchContainer}>
          <View style={styles.textContainer}>
            <Text style={{ fontWeight: "normal", marginTop: 5 }}>
              ¿Guardar? Selecciona la próxima fecha{" "}
            </Text>
          </View>
          {/* <Switch
            style={{ alignContent: "center", justifyContent: "center" }}
            trackColor={{ false: "#767577", true: "green" }}
            thumbColor={isEnabled ? "green" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          {isEnabled && (
            <DateTimePicker
              value={selectedDate}
              mode="calendar"
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          )} */}
        </View>
      </View>
      <TouchableOpacity onPress={toggleCardListVisibility}>
        <View style={styles.cardContent}>
          <Text
            style={{ ...styles.cardTitle, fontWeight: "800", fontSize: 20 }}
          >
            Tarjetas
          </Text>
          <Icon name="eye" size={40} color="black" />
        </View>
      </TouchableOpacity>
      {isCardListVisible && (
        <View>
          {cardData.map((card, index) => (
            <View style={styles.rowContainer} key={index}>
              <View style={styles.Card}>
                <Image style={styles.cardImage} source={card.imageUri} />
              </View>
              <RadioButton
                value={index}
                status={selectedCardIndex === index ? "checked" : "unchecked"}
                onPress={() => handleCardSelect(index)}
              />
            </View>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={{ ...styles.buttonText, textAlign: "center", width: 200 }}>
          Continuar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    paddingHorizontal: 16,
  },
  selectProveedor: {
    fontSize: 15,
  },
  picker: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#0A497C",
    marginBottom: 16,
  },
  input: {
    marginTop: 20,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 45,
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  cardImage: {
    width: 250,
    height: 150,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    maxWidth: 800,
    width: "90%",
    height: 450,
    marginTop: 20,
    // alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textContainer: {
    marginRight: 10,
  },
});
