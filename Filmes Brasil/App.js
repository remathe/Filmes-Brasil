import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

const imageData = [
  {
    id: '1',
    name: 'Cidade de Deus',
    description:
      'Lançado em 2002, o filme retrata a realidade das favelas do Rio de Janeiro nas décadas de 1960 e 1980. Baseado em fatos reais, a história acompanha a vida de Buscapé e Zé Pequeno em meio à violência e ao crime organizado.',
    image: require('./assets/cidade_de_deus.jpg'),
  },
  {
    id: '2',
    name: 'Central do Brasil',
    description:
      'Este drama emocionante de 1998 conta a jornada de uma ex-professora e um garoto órfão em busca de seu pai pelo interior do Brasil. O filme é conhecido por sua forte carga emocional e atuação memorável de Fernanda Montenegro.',
    image: require('./assets/central_do_brasil.jpg'),
  },
  {
    id: '3',
    name: 'Tropa de Elite',
    description:
      'Um dos filmes mais icônicos do cinema brasileiro, lançado em 2007, acompanha o Capitão Nascimento e sua luta contra o crime no Rio de Janeiro, mostrando o funcionamento do BOPE e a corrupção dentro do sistema.',
    image: require('./assets/tropa_de_elite.jpg'),
  },
  {
    id: '4',
    name: 'O Auto da Compadecida',
    description:
      'Baseado na peça teatral de Ariano Suassuna, o filme de 2000 mistura humor e crítica social ao contar as aventuras de João Grilo e Chicó no sertão nordestino, onde encontram figuras míticas e religiosas.',
    image: require('./assets/auto_da_compadecida.jpg'),
  },
  {
    id: '5',
    name: 'Que Horas Ela Volta?',
    description:
      'Este drama social de 2015 aborda as diferenças de classe no Brasil por meio da história de uma empregada doméstica e sua filha, que desafiam as barreiras impostas pela desigualdade social.',
    image: require('./assets/que_horas_ela_volta.jpeg'),
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
        <Text>...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filmes Brasil</Text>
      <FlatList
        data={imageData}
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
    height: 300,
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
