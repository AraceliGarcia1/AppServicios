import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import * as Yup from 'yup';


export default function RegisterJuegos(props){
  const { navigation } = props
    const [alias, setAlias] = useState('');
    const [referencia, setReferencia] = useState('');
    const [amount, setAmount] = useState('');
 
    const schema = Yup.object().shape({
        alias: Yup.string().required('Alias es obligatorio'),
        referencia: Yup.string().required('Referencia es obligatoria'),
        amount: Yup.number().typeError('El monto debe ser un número').required('Monto es obligatorio').positive('El monto debe ser mayor a cero'),
    });
    const handleSave = async() => {
       
        try {
          const amountNumber = parseFloat(amount);
          const isValid = await schema.isValid({ alias, referencia, amount: amountNumber });
      
          if (isValid) {
            console.log('Alias:', alias);
            console.log('Referencia:', referencia);
            console.log('Amount:', amount);
          } else {
            throw new Error('Todos los campos son requeridos');
          }
        } catch (error) {
          console.error('Error de validación:', error.message);
          alert(error.message);
        }
    };

    return (
      
        <View style={styles.container}>
        
          <TextInput
          style={styles.input}
          placeholder="Alias *"
          onChangeText={(text) => setAlias(text)}
          underlineColorAndroid="#0A497C"
        />
    
          <TextInput
            style={styles.input}
            placeholder="Referencia *"
            onChangeText={(text) => setReferencia(text)}
            underlineColorAndroid="#0A497C"
          />
    
          <TextInput
            style={styles.input}
            placeholder="Monto *"
            keyboardType="numeric"
            onChangeText={(text) => setAmount(text)}
            underlineColorAndroid="#0A497C"
          />
    
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      flex: 1,
      paddingHorizontal: 16,
    },
    inputContainer: {
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: 'pink',
    },
    input: {
      marginTop:20,
      height: 40,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    button: {
      marginTop:450,
      backgroundColor: 'green',
      borderRadius: 10,
      paddingVertical: 12,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });