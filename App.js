import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Navigation from "./src/navigation/navigation";
import {Provider} from 'react-redux'
import {store} from './src/redux/store/store'

//import Home from './src/screens/Home'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
