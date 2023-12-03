

import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../utils/Firebase';

export default function ServiceSummaryLuz({ route }) {
	const { docId } = route.params;
	const [documento, setDocumento] = useState(null);
	const [loading, setLoading] = useState(true);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showGuardarModal, setShowGuardarModal] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const documentSnapshot = await getDoc(doc(db, 'luz', docId));
				if (documentSnapshot.exists()) {
					setDocumento(documentSnapshot.data());
				} else {
					console.log('El documento no existe');
				}
			} catch (error) {
				console.error('Error al obtener el documento:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [docId]);

	if (loading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="blue" />
			</View>
		);
	}

	const handleDeleteConfirm = async () => {
		try {
			await deleteDoc(doc(db, 'luz', docId));
			console.log('Documento eliminado correctamente');
			// You may want to navigate back or take other actions after deletion
		} catch (error) {
			console.error('Error al eliminar el documento:', error);
		} finally {
			setShowDeleteModal(false);
		}
	};

	const handleDeleteCancel = () => {
		setShowDeleteModal(false);
	};

	const handleGuardarConfirm = () => {
		
		setShowGuardarModal(false);
	};

	const handleGuardarCancel = () => {
		setShowGuardarModal(false);
	};

	return (
		<View style={styles.card}>
			
			<Text style={styles.label}>
				Alias:{' '}
				<Text style={{ fontWeight: 'normal', marginTop: 5 }}>
					{documento?.alias}
				</Text>
			</Text>
			<Text style={styles.label}>
				Monto:{' '}
				<Text style={{ fontWeight: 'normal', marginTop: 5 }}>
					{documento?.amount}
				</Text>
			</Text>
			<Text style={styles.label}>
				Referencia:{' '}
				<Text style={{ fontWeight: 'normal', marginTop: 5 }}>
					{documento?.referencia}
				</Text>
			</Text>
			<Text style={styles.label}>
				Tarjeta:{' '}
				<Text style={{ fontWeight: 'normal', marginTop: 5 }}>
					{documento?.card}
				</Text>
			</Text>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, styles.deleteButton]}
					onPress={() => setShowDeleteModal(true)}
				>
					<Text style={styles.buttonText}>Pagar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.guardarButton]}
					onPress={() => setShowGuardarModal(true)}
				>
					<Text style={styles.buttonText}>Guardar</Text>
				</TouchableOpacity>
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
							style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30 }}
						>
							¿Estás seguro de pagar este servicio?
						</Text>
						<View style={styles.modalButtons}>
							<TouchableOpacity
								style={[styles.button, { backgroundColor: 'green' }]}
								onPress={handleDeleteConfirm}
							>
								<Text style={{ color: 'white' }}>Pagar</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.button,
									{ backgroundColor: 'gray', marginLeft: 10 },
								]}
								onPress={handleDeleteCancel}
							>
								<Text style={{ color: 'white' }}>Cancelar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>

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
							¿Quieres guardar este servicio?
						</Text>
						<View style={styles.modalButtons}>
							<TouchableOpacity
								style={[styles.button, { backgroundColor: 'green' }]}
								onPress={handleGuardarConfirm}
							>
								<Text style={{ color: 'white' }}>Guardar</Text>
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
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 20,
		maxWidth: 800,
		width: '90%',
		height: 300, // Increased height to accommodate buttons and extra space
		marginTop: 20,
		alignSelf: 'center', // Align the card horizontally to the center
	},
	label: {
		fontWeight: '800',
		fontSize: 25,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'space-around',
	},
	button: {
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
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
	deleteButton: {
		backgroundColor: 'green',
	},
	guardarButton: {
		backgroundColor: 'green',
	},
	buttonText: {
		color: 'white',
		fontSize: 20, // Ajusta el tamaño del texto según tus preferencias
	},
});
