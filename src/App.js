import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

function App() {
  return (
    <View style={styles.appCcontainer}>
      <View>
        <TextInput placeholder="Enter goals here..." />
      </View>
      <View>
        <Button title="Add Goal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
