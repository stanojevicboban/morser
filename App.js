/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
    View,
  StatusBar,
} from 'react-native';

import Encoder from "./src/components/encoder/Encoder";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}>

          <Text style={styles.title}>Morse Code Interpreter</Text>
          <View style={styles.vinstructions}>
              <Text style={styles.instructions}>Instructions</Text>
              <Text style={styles.dashText}><Text style={styles.morseItem}>=</Text> Dash</Text>
              <Text style={styles.dashText}><Text style={styles.morseItem}>.</Text>  Dot</Text>
          </View>
          <Encoder />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#272727',
        height: '100%'
    },
    vinstructions: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        marginTop: 20,
        padding: 20,
        backgroundColor: '#1b262c',
        borderRadius: 4,
    },
    instructions: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 14,
        color: '#fff',
        marginBottom: 10,
    },
    dashText: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 16,
        color: '#fff'
    },
    morseItem: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 20,
        color: '#ff0000',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 28,
        color: '#fff',
        padding: 20,
        marginTop: 50,
    }
});

export default App;
