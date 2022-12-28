import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

function App() {
  return (
    <View style={styles.appCcontainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal..." />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:'24',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width:70,
    marginRight: 8,
    padding:8
  }
});

export default App;
