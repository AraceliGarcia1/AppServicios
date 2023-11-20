import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from "react";

export default function RegisterGas(){
    const [alias, setAlias] = useState('');
    const [reference, setReference] = useState('');
    const [amount, setAmount] = useState('');

    const handleSave = () => {
        
        console.log('Alias:', alias);
        console.log('Reference:', reference);
        console.log('Amount:', amount);
    };

    return (
        <View style={styles.container}>
        
          <TextInput
          style={styles.input}
          placeholder="Alias"
          onChangeText={(text) => setAlias(text)}
          underlineColorAndroid="#0A497C"
        />
    
          <TextInput
            style={styles.input}
            placeholder="Referencia"
            onChangeText={(text) => setReference(text)}
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