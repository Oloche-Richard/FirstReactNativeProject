import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
