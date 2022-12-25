import React from "react";
import { StyleSheet, Text, View , Button } from "react-native";

function App() {
  return (
    <View style={styles.container}>
    <View> Yet another text </View>
      <Text style={{margin:16, borderWidth:2 , borderColor:'blue' , padding: 16}}>
      Hello World</Text>
      <Button title='Tap me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  backgroundColor: '#fff',
  alignItems:'center',
  justifyContent:'center'
  }
});

export default App;
