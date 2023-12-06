import { StyleSheet, View, Image, TouchableOpacity, Text, Modal } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Cards() {
  const navigation = useNavigation()
  const [showGuardarModal, setShowGuardarModal] = useState(false);
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
  const handleGuardarConfirm = () => {
		navigation.navigate("paymentsHistoryStack")
		setShowGuardarModal(false);
	};

	const handleGuardarCancel = () => {
		setShowGuardarModal(false);
	};
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
        <TouchableOpacity style={styles.buttonDelete} onPress={() => navigation.navigate('favorites')}>
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowGuardarModal(true) }>
          <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <Modal
				animationType="fade"
				transparent={true}
				visible={showGuardarModal}
				onRequestClose={() => {
					handleGuardarCancel();
				}}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text
							style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}
						>
							¿Quieres pagar este servicio?
						</Text>
						<View style={styles.modalButtons}>
							<TouchableOpacity
								style={[styles.button, { backgroundColor: 'green' }]}
								onPress={handleGuardarConfirm}
							>
								<Text style={{ color: 'white' }}>Pagar</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{ backgroundColor: 'gray', marginLeft: 10 },
								]}
								onPress={handleGuardarCancel}
							>
								<Text style={{ color: 'white' }}>Cancelar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
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
  buttonDelete: {
    marginTop: 30,
    backgroundColor: "red",
    borderRadius: 10,
    width:120,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
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
		maxWidth: 300,
		width: '80%',
		alignItems: 'center',
	},
	modalButtons: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
	
});
