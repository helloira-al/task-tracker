import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Study',
        day: 'Feb 25th at 5PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Travel',
        day: 'June 25th at 8AM',
        reminder: true
    },
    {
        id: 3,
        text: 'Eat',
        day: 'Jan 21st at 6PM',
        reminder: false
    },
    {
        id: 4,
        text: 'Dance',
        day: 'Jan 22nd at 2PM',
        reminder: false
    }
])
//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}
//Delete a task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id ===id ? {...task, reminder: !task.reminder} : 
      task
    )
  )
}
  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask (!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} showAdd={showAddTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>) : ('You have no tasks.')}
      
    </div>
  );
}

export default App;
