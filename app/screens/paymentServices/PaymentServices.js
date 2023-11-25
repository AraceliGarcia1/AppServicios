import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function PaymentServices(props) {
  const navigation = useNavigation()
  const { gas } = props;
  return (
    <View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card} onPress={() =>  navigation.navigate('agua')}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Agua Potable</Text>
            <Icon name="water-outline" size={40} color="blue" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('internet')}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Internet</Text>
            <Icon name="wifi" size={40} color="blue" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card} onPress={() =>navigation.navigate('telefono')}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Teléfono</Text>
            <Icon name="cellphone-message" size={40} color="red" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('gas')}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Gas LP</Text>
            <Icon name="gas-cylinder" size={40} color="orange" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('television')}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Televisión</Text>
            <Icon name="television" size={40} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('luz')}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Electricidad</Text>
            <Icon name="lightbulb-on-outline" size={40} color="yellow" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('streaming')}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Streaming</Text>
            <Icon name="youtube-subscription" size={40} color="red" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('juegos')}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Juegos</Text>
            <Icon name="gamepad-variant" size={40} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 120.0,
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
    marginLeft: 10,
  },
  cardTitle: {
    color: "#000",
    fontSize: 22,
    alignSelf: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft:10,
    marginRight:30
    
  },
  cardContent: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
  },
});