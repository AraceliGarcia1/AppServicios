
import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from 'react-native';

const Profile = () => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [userData, setUserData] = useState({
		fullName: 'Nombre Completo',
		username: 'Nombre de Usuario',
		email: 'correo@example.com',
		phoneNumber: '123-456-7890',
		personalInfo: 'Alguna información personal',
		password: '********',
		totalPayments: 5,
	});

	const handleEditPress = () => {
		setIsEditMode(!isEditMode);
	};

	const handleSavePress = () => {
		setIsEditMode(false);
	};

	const handleChangeText = (key, value) => {
		setUserData({ ...userData, [key]: value });
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.card}>
				<Image
					source={require("../../assets/user.png")}
					style={styles.profileImage}
				/>
				<Text style={{ ...styles.label, fontWeight: '800', fontSize: 20 }}>
					Nombre Completo:
				</Text>
				<Text>{userData.fullName}</Text>
				<Text style={{ ...styles.label, fontWeight: '800', fontSize: 20 }}>
					Usuario:
				</Text>
				<Text>{userData.username}</Text>
				<Text style={{ ...styles.label, fontWeight: '800', fontSize: 20 }}>
					Correo Electronico:
				</Text>
				<Text>{userData.email}</Text>
				<Text style={{ ...styles.label, fontWeight: '800', fontSize: 20 }}>
					Número de celular:
				</Text>
				<Text>{userData.phoneNumber}</Text>
				<Text style={{ ...styles.label, fontWeight: '800', fontSize: 20 }}>
					Contraseña:
				</Text>
				<Text>{userData.password}</Text>

				{isEditMode ? (
					<View>
						<TextInput
							style={styles.input}
							value={userData.fullName}
							onChangeText={(text) => handleChangeText('fullName', text)}
						/>
						<TextInput
							style={styles.input}
							value={userData.username}
							onChangeText={(text) => handleChangeText('username', text)}
						/>
						<TextInput
							style={styles.input}
							value={userData.email}
							onChangeText={(text) => handleChangeText('email', text)}
						/>
						<TextInput
							style={styles.input}
							value={userData.phoneNumber}
							onChangeText={(text) => handleChangeText('phoneNumber', text)}
						/>
						<TextInput
							style={styles.input}
							value={userData.password}
							onChangeText={(text) => handleChangeText('password', text)}
						/>
					</View>
				) : (
					<View>
						<Text style={{ ...styles.label, fontWeight: '800', fontSize: 20 }}>
							Total de pagos: {userData.totalPayments}
						</Text>
					</View>
				)}

				<TouchableOpacity
					style={styles.editButton}
					onPress={isEditMode ? handleSavePress : handleEditPress}
				>
					<Text style={{ color: '#fff', fontWeight: '800', fontSize: 15 }}>
						{isEditMode ? 'Guardar' : 'Editar Perfil'}
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		paddingTop: 20,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 20,
		maxWidth: 800,
		width: '90%',
		height: 800,
		marginTop: 20,
	},
	profileImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
		marginBottom: 20,
		alignSelf: 'center',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		padding: 8,
	},
	editButton: {
		backgroundColor: '#3498db',
		borderRadius: 6,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		width: 100,
	},
});

export default Profile;
