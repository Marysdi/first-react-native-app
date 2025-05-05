import { useState } from 'react';
import { FlatList,View,Modal ,Text, Button} from 'react-native';
import { StyleSheet } from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [courseGoal ,setCourseGoal] = useState([]);
  const [modalVisible ,setModalVisible]=useState(false);
  const [selectedGoalId , setSelectedGoalId]=useState(null);
  
  function addGoalHandler(enteredGoalText){
    setCourseGoal((currentCourseGoal)=>[...currentCourseGoal,{ text: enteredGoalText, id: Math.random().toString()}])
  }
  function startDeleteGoalItem(id){
    setModalVisible(true);
    setSelectedGoalId(id);

  }
  function deleteHandler(){
    setCourseGoal((currentCourseGoal)=>{
      return currentCourseGoal.filter((goal) => goal.id !== selectedGoalId);
    })
    setModalVisible(false);
    setSelectedGoalId(null);
  }
  function cancelDeleteHandler(){
    setModalVisible(false);
  }
  
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goal}>
        <FlatList 
        data={courseGoal} 
        renderItem={(itemData)=> {
          return <GoalItems 
          text={itemData.item.text}
          id={itemData.item.id}
           onDeleteItem={startDeleteGoalItem}
           />;}
        }
        keyExtractor={(item, index) =>{return item.id;}}
        />
      </View>
      <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      
      >
        <View style={styles.modalContainer}>
          <View>
            <Text>Are you sure you want to delete this goal?</Text>
          </View>
          <View style={styles.modalButton}>
            <View>
                  <Button title="Yes" onPress={deleteHandler} color="red"/>
            </View>
            <View>
                 <Button title="No"   onPress={cancelDeleteHandler}/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:10,
  },
  goal:{
    flex: 6,
  },
  modalContainer:{
    flex: 1,
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginTop:'90%',
    borderRadius:40,
    
  },
  modalButton:{
    flexDirection: 'row',
    marginTop: 20,
    width: '60%',
    justifyContent: 'space-between',
  }
  
});
