import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";

export default function PaymentServices() {
  return (
    <View>
      <View style={styles.rowContainer} >
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>
            Agua
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>
            Internet
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer} >
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Teléfono</Text>
          
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Gas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer} >
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Televisión</Text>
          
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Electricidad</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer} >
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Streaming</Text>
          
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Juegos</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
card: {
    width: '48%',
    height:80.0,
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
    marginTop: 15,
    marginLeft:10,

},
cardTitle: {
  color: "#808080",
  fontSize: 22,
  alignSelf: 'center',
},
rowContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16, 
},


});
