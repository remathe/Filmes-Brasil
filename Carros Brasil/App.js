import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const carData = [
  {
    id: '1',
    name: 'Volkswagen Fusca',
    description:
      'O Fusca é um dos carros mais icônicos do Brasil, símbolo da popularização do automóvel no país. Produzido por décadas, conquistou gerações com seu design único e resistência.',
    image: require('./assets/fusca.jpg'),
  },
  {
    id: '2',
    name: 'Chevrolet Opala',
    description:
      'Lançado em 1968, o Opala foi um dos primeiros modelos da GM no Brasil. Conhecido por seu desempenho e conforto, marcou época nas décadas de 70 e 80.',
    image: require('./assets/opala.jpg'),
  },
  {
    id: '3',
    name: 'Fiat Uno Mille',
    description:
      'Compacto e econômico, o Uno Mille fez sucesso desde os anos 80. Seu design simples e manutenção barata o tornaram um dos carros mais vendidos do Brasil.',
    image: require('./assets/uno.webp'),
  },
  {
    id: '4',
    name: 'Ford Escort XR3',
    description:
      'O XR3 foi um dos modelos esportivos mais desejados do Brasil nos anos 80 e 90, com visual arrojado e desempenho superior aos modelos comuns da época.',
    image: require('./assets/xr3.jpeg'),
  },
  {
    id: '5',
    name: 'Chevrolet Chevette',
    description:
      'O Chevette foi um carro popular da GM com longa produção no Brasil. Compacto, resistente e barato, era muito querido entre os motoristas iniciantes.',
    image: require('./assets/chevette.webp'),
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carros Brasil</Text>
      <FlatList
        data={carData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            {selected === item.id ? (
              <Text style={styles.description}>{item.description}</Text>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setSelected(selected === item.id ? null : item.id)}
              >
                <Text style={styles.buttonText}>Detalhes</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#006400',
  },
  card: {
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
