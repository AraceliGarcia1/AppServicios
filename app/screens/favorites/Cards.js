import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Cards() {
  const navigation = useNavigation()
  const cardData = [
    {
      id:1,
      name:'citibanamex 9012',
      imageUri: require("../../assets/citibanamex.png"),
    },
    {
      id:2,
      name:'banco azteca 5678',
      imageUri:require("../../assets/azteca.png"),
    },
    {
      id:3,
      name:'bbva 7899',
      imageUri:require("../../assets/bbva.png"),
    },
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <View>
      {cardData.map((card, index) => (
        <View style={styles.rowContainer} key={index}>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={card.imageUri } />
          </View>
          <RadioButton
            value={index}
            status={selectedCardIndex === index ? "checked" : "unchecked"}
            onPress={() => handleCardSelect(index)}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('resumen')}>
          <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    aspectRatio: 16 / 9,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.46,
    elevation: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginRight:40,
    marginLeft:40,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: "green",
    borderRadius: 10,
    width:120,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
