import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelectet from "react-native-picker-select";
import React, {useState} from "react";

export default function RegisterTelefono(){
    const [proveedor, setProveedor] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [alias, setAlias] = useState('');
    const [amount, setAmount] = useState('');

    const handleSave = () => {
        
        console.log('Proveedor:', proveedor);
        console.log('Correo:', correo);
        console.log('Telefono:', telefono);
        console.log('Alias:', alias);
        console.log('Amount:', amount);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.selectProveedor}>Selecciona tu proveedor de telefonía:</Text>
        <RNPickerSelectet selectedValue={proveedor} style={styles.picker} onValueChange={(itemValue) => setProveedor(itemValue)}
         items={[
            {label: 'Telcel', value: 'Telcel'},
            {label: 'AT&T', value: 'AT&T'},
            {label: 'Movistar', value: 'Movistar'},
            {label: 'Unefon', value: 'Unefon'}
         ]}
        >

        </RNPickerSelectet>
    
        <TextInput
        style={styles.input}
        placeholder="Correo Electronico"
        onChangeText={(text) => setCorreo(text)}
        keyboardType="email-address"
        underlineColorAndroid="#0A497C"
      />

        <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            onChangeText={(text) => setTelefono(text)}
            underlineColorAndroid="#0A497C"
        />

        <TextInput
            style={styles.input}
            placeholder="Alias"
            onChangeText={(text) => setAlias(text)}
            underlineColorAndroid="#0A497C"
        />
    
          <TextInput
            style={styles.input}
            placeholder="Monto"
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
    selectProveedor:{
        fontSize: 15
    },
    picker: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#0A497C',
        marginBottom: 16,
        
    },
    input: {
      marginTop:20,
      height: 40,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    button: {
      marginTop:330,
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