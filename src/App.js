import React from "react";
import {useState} from 'react'
import { StyleSheet, Text, View , Button, TextInput } from "react-native";

function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }
    
   function addGoalHandler() {
    
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}/>
        <Button title='Add Goal'/>
      </View>
      <View style={styles.goalContainer}>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
appContainer: {
  flex:1,
  paddingTop:50,
  paddingHorizontal:16
},
inputContainer: {
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItem:'center',
  paddingBottom: 24,
  borderBottomWidth:1,
  borderBottomColor:'#cccccc'
},
textInput:{
 borderWidth: 1,
 borderColor:'#cccccc',
 width: '70%',
 marginRight: 8,
 padding: 8
},
goalContainer:{
  flex:5
}
});

export default App;
