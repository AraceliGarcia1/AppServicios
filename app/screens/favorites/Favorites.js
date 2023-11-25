import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function Favorites() {
	const cardData = [
		{
			imageUri:
				'https://dineroexperto.com.mx/uploads/productos/0fc062410104ccb0a3519ff5d1b093792f44ed6c.png',
		},
		{
			imageUri:
				'https://www.bancoazteca.com.mx/empresas/pagos-y-dispersiones/nomina-empresarial-azteca/_jcr_content/root/responsivegrid/content_container_co/responsivegrid/image.coreimg.png/1645114396136/tarjeta-azteca-debito-mastercard.png',
		},
		{
			imageUri:
				'https://credexia.com/wp-content/uploads/2020/06/tarjeta-joven-ahora.png',
		},
	];

	const [selectedCardIndex, setSelectedCardIndex] = useState(null);

	const handleCardSelect = (index) => {
		setSelectedCardIndex(index);
		// Puedes hacer más cosas cuando se selecciona una tarjeta aquí
	};

	return (
		<View>
			{cardData.map((card, index) => (
				<View style={styles.rowContainer} key={index}>
					<View style={styles.card}>
						<Image style={styles.cardImage} source={{ uri: card.imageUri }} />
					</View>
					<RadioButton
						value={index}
						status={selectedCardIndex === index ? 'checked' : 'unchecked'}
						onPress={() => handleCardSelect(index)}
					/>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: '80%',
		aspectRatio: 16 / 9,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5.46,
		elevation: 10,
		borderRadius: 10,
		overflow: 'hidden',
	},
	cardImage: {
		width: '100%',
		height: '100%',
		borderRadius: 5,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 30,
		marginTop: 20,
	},
});
