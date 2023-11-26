import { StyleSheet, Text, View,  ActivityIndicator  } from 'react-native';
import React,{ useEffect, useState } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from "../../utils/Firebase";

export default function ServiceSummary({route}) {
  console.log(route)
  console.log(route.params)
  const { docId } = route.params;
  const [documento, setDocumento] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try{
        const documentSnapshot = await getDoc(doc(db, 'juegos', docId));
        if (documentSnapshot.exists()) {
          setDocumento(documentSnapshot.data());
  
          console.log("documento existe")
        } else {
          console.log('El documento no existe');
        }
      }catch(error){
        console.error('Error al obtener el documento:', error);
      }finally{
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

  return (
    <View>
      <Text>Alias: {documento?.alias}</Text>
      <Text>Monto: {documento?.amount}</Text>
      <Text>Referencia: {documento?.referencia}</Text>
      <Text>Tarjeta: {documento?.card}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
