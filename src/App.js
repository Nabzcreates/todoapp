import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import {useState, useEffect} from 'react'

const data = [
  { id: 1, text: "Finish contacts hw", status: true },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];


//make a css class for hwen a task is checked
//make status=true




function App() {
//create a state that holds the data arr
  const [tasks, setTasks] = useState(data);

  const [filterStatus, setFilterStatus] = useState("all");

  const [filteredTasks, setFilteredTasks] = useState(tasks)

useEffect(()=>{
    const handleFilter =()=>{
      if(filterStatus === "active"){
      console.log("active")

      return setFilteredTasks(tasks.filter((task)=> task.status === false))
       
      } else if(filterStatus === "completed"){
      console.log("completed")
      return setFilteredTasks(tasks.filter((task)=> task.status === true))

      } else{
      console.log("is all", filterStatus, tasks)
      
      return setFilteredTasks(tasks)
      }
    }
    handleFilter()
  }, [tasks,filterStatus])

  return (
    <div className="App">
      <div className="container">
            <div className="header">
              <div className="title">
                TODO
              </div>
              <div className="theme">
                <img src="./images/icon-sun.svg" alt=""/>
              </div>
            </div>

            <TaskInput
            tasks= {tasks}
            setTasks={setTasks}
            />
            {/* //component that hold the task list */}
            <TaskList
            tasks= {tasks}
            setTasks={setTasks}
            filterStatus={filterStatus}
            setFilterStatus ={setFilterStatus}
            filteredTasks = {filteredTasks}
            setFilteredTasks = {setFilteredTasks}
            />
      </div>
    </div>
  );
}

export default App;
