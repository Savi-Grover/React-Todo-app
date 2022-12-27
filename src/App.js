import { useState } from 'react'
// custom components
import CustomForm from './Components/CustomForm'
import TaskList from './Components/TaskList'
import EditForm from './Components/EditForm'
function App() {
    const [tasks, setTasks] = useState([]);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setisEditing] = useState(false);
    const [isPreviousFocusEl, setPreviousFocusEl] = useState(false);

    const addTask = (task) => {
      setTasks(prevState => [...prevState, task])

    }

    const deleteTask = (id) => {
      setTasks(prevState => prevState.filter(t => t.id !== id));
    }

  /*--here toggleTask is taking the id, iterating on list- checking 
  if id given equal to id in list then update the check status to opposite state
  if id not equal then simply return as it is t 
  */
  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }
  const closeEditMode =() =>{
    setisEditing(false);
    // todo : previous state focus
    isPreviousFocusEl.focus();
  }
 
  // const closeEditTask =(task) =>{
  //   setEditedTask(task);
  //   setisEditing(true);
  // }
  //close the edit mode
  const enterEditMode=(task) =>{
    setEditedTask(task);
    setisEditing(true);
    setPreviousFocusEl(document.activeElement);

    //todo: set focus back to original and save updated task
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && (
          <EditForm 
          editedTask={editedTask}
          updateTask={updateTask}
        />
        )
      }
      
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App