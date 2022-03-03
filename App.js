import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Universidade Católica de Pernambuco </Text>
      <Text>Curso : Sistemas  para a Internet</Text>
      <Text>Disciplina : Programação para  dispositivos móveis</Text>
      <Text>Professor : Marcio Bueno</Text> 
      <Text>Aluna : Gediane </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'justify',
    fontFamily:'fantasy'
  },
});
