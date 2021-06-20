import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import api from './src/services/api';

export default function App(){
  const [cep, setCep] = useState('');
  return(
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center'}}>
        <Text style={styles.text} > Digite o CEP Desejado</Text>
        <TextInput 
          style={styles.input}
          placeholder="Ex: 65633638"
          value={cep}
          onChangeText={ (texto)=> setCep(texto) }
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#1d75cd'}]} >
          <Text style={styles.botaoText} >Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d'}]} >
          <Text style={styles.botaoText} >Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultado} >
        <Text style={styles.itemText} >
          CEP: 65633638
        </Text>
        <Text style={styles.itemText} >
          Lougradouro: Rua 16 timon
        </Text>
        <Text style={styles.itemText} >
          Bairro: Cidade nova
        </Text>
        <Text style={styles.itemText} >
          Cidade: Timon
        </Text>
        <Text style={styles.itemText} >
          Estado: MA
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 20,
    color: '#FFF'
  },
  resultado: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  itemText: {
    fontSize: 22
  },

});