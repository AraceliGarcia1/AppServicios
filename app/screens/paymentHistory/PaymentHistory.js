import { StyleSheet, Text, View, ActivityIndicator,TouchableOpacity, ScrollView,} from "react-native";
import React, { useState, useEffect } from "react";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function PaymentHistory() {
  const [juegos, setJuegos] = useState([]);
  const [agua, setAgua] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
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
        await fetchJuegos();
        await fetchAgua();
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
			Juegos
		</Text>
      {juegos.map((juego, index) => (
        <View style={styles.card}>
				<View style={styles.cardContent}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Alias: {juego.alias}
</Text>
					<Text>Precio: {juego.amount}</Text>
          <Text>Referencia:{juego.amount}</Text>
          <Text>Tarjeta:{juego.card}</Text>
				</View>

			</View>

      ))}
      {agua.map((agua, index) => (
        <View key={index}>
          <Text>{agua.amount}</Text>
          <Text>{agua.referencia}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'flex-start',
		//alignItems: 'center',
		backgroundColor: '#f4f4f4',
		paddingTop: 10,
    marginLeft:40
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 20,
		maxWidth: 800,
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 100,
		marginTop: 20,
	},
	cardButtons: {
		flexDirection: 'row',
	},
	iconButton: {
		borderRadius: 6,
		padding: 10,
		marginLeft: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 20,
		width: '80%',
		alignItems: 'center',
	},

	modalButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30,
	},
	button: {
		padding: 10,
		borderRadius: 6,
		width: 100,
		alignItems: 'center',
	},

});
