/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  
  return (    
          <View style={styles.container}>
            <Text style={styles.nome}>Guilherme, Hello World</Text>
             <View style={styles.post}>
                  <Text style={styles.titulo}>Primeiro projeto em React Native</Text>
                  <Text style={styles.descricao}>FUNFOUUU</Text>
             </View>
             
             <View style={styles.post}>
                  <Text style={styles.titulo}>Primeiro projeto em React Native</Text>
                  <Text style={styles.descricao}>FUNFOUUU</Text>
             </View>
             
             <View style={styles.post}>
                  <Text style={styles.titulo}>Primeiro projeto em React Native</Text>
                  <Text style={styles.descricao}>FUNFOUUU</Text>
             </View>

             <View style={styles.post}>
                  <Text style={styles.titulo}>Primeiro projeto em React Native</Text>
                  <Text style={styles.descricao}>FUNFOUUU</Text>
             </View>              
          </View>    
      
    
  );

};

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#333",
    flex: 1,
    alignItems: "center"
  },
  nome: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#993399"
  },
  post: {
    margin: 20,
    padding: 20,
    backgroundColor: "#993399",
    borderRadius: 3
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff"
  },
  descricao: {
    color: "#fff"
  }
});

export default App;
