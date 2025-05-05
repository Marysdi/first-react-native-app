import { useState } from "react";
import { TextInput,StyleSheet, View, Button } from "react-native"



function GoalInput (props) {
     const [enteredGoalText ,setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return ( 
        <View style={styles.inputContainer}>
            <TextInput placeholder='Your course goal!' 
             style={styles.textInput} 
             onChangeText={goalInputHandler} 
             value={enteredGoalText}
             />
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    )
}
export default GoalInput 
 const styles = StyleSheet.create(
    {
        textInput :{
            borderWidth: 1,
            borderColor: '#ccccccc',
            width:'70%',
            margin:5,
          },
          inputContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderBottomWidth:2,
            borderColor:'#b2b2b2',
            paddingBottom:20,
            marginBottom:10,
          },
    }
 )