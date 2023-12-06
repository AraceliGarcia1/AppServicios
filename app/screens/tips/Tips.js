import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";

export default function Tips() {
  return (
    <View>
      <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <Text style={styles.cardTitle}>Ajusta la Temperatura del Termostato</Text>
        <Text style={styles.cardText}>¡Optimiza la temperatura! </Text>
        <Text style={styles.cardText}>Ahorra energía ajustando el termostato</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <Text style={styles.cardTitle}>Uso eficiente de Electrodomésticos </Text>
        <Text style={styles.cardText}>Usa lavadoras y lavavajillas de manera eficiente.</Text>
        <Text style={styles.cardText}>¡Ahorra agua y energía!</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <Text style={styles.cardTitle}>Repara Fugas de Agua</Text>
        <Text style={styles.cardText}>Fugas de agua, ¿las has revisado?</Text>
        <Text style={styles.cardText}>¡Pequeños problemas, grandes soluciones!</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <Text style={styles.cardTitle}>Apaga las luces</Text>
        <Text style={styles.cardText}>¿Te acuerdas de apagar las luces al salir?</Text>
        <Text style={styles.cardText}>¡Cada apagón cuenta para ahorrar energía!</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
        }}
      >
        <Text style={styles.cardTitle}>Duchas Rápidas</Text>
        <Text style={styles.cardText}>Intenta reducir el tiempo en la ducha</Text>
        <Text style={styles.cardText}>¡Menos tiempo, menos agua!</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5,
    padding: 8,
    borderRadius: 5,
    marginTop: 20,
    marginLeft:10,

},
cardTitle: {
  color: "#000",
  fontSize: 22,
  fontWeight:"bold",
  alignSelf: 'flex-start',
},
cardText: {
  color: "#000",
  fontSize: 19,
  alignSelf: 'flex-start',
},


});
