import { StyleSheet , View,Text, Pressable} from "react-native";
function GoalItems (props){
    return(
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalIndex} >
             <Text style={styles.goalText} >{props.text}</Text>
            </View>
      </Pressable>
      
    );
}
export default GoalItems;

const styles = StyleSheet.create({
    goalIndex:{
        backgroundColor:'purple',
        padding:10,
        borderRadius:20,
        margin:20,
      },
    goalText:{
      color:'#fff',
    },
})