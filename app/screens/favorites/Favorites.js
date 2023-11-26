import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Modal,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

export default function Favorites() {
	const navigation = useNavigation();
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const handleCreditCardPress = () => {
		navigation.navigate('tarjetas');
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

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.card}>
				<View style={styles.cardContent}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
						Internet departamento
					</Text>
					<Text>$250.00</Text>
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
			<View style={styles.card}>
				<View style={styles.cardContent}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
						Internet Casa
					</Text>
					<Text>$165.00</Text>
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
			<View style={styles.card}>
				<View style={styles.cardContent}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
						Internet oficina
					</Text>
					<Text>$530.00</Text>
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
							style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}
						>
							¿Estás seguro de que deseas eliminar este elemento?
						</Text>
						<View style={styles.modalButtons}>
							<TouchableOpacity
								style={[styles.button, { backgroundColor: 'green' }]}
								onPress={handleDeleteConfirm}
							>
								<Text style={{ color: 'white' }}>Eliminar</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{ backgroundColor: 'red', marginLeft: 10 },
								]}
								onPress={handleDeleteCancel}
							>
								<Text style={{ color: 'white' }}>Cancelar</Text>
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
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		paddingTop: 10,
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
