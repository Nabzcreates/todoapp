import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filteredTasks, setFilteredTasks}) {

const clearCompleted=()=>{
  setTasks(tasks.filter((task)=>task.status === false))
}

  // console.log(tasks)
  return (
    <div className='todo-items-wrapper'>
      <div className='todo-items'>
       {
        filteredTasks.map((item)=>{
        return <Task task={item}
                tasks ={tasks} key={item.id}
                setTasks={setTasks}
                />
        })
       }
      </div>

      {/* can be its own component */}
      <div className='todo-items-info'>
        <div className='items-left'>
          {filteredTasks.length} items left
        </div>
        <FilterControl
      
          filterStatus={filterStatus}
          setFilterStatus ={setFilterStatus}
            />
        <div className='items-clear'>
        <span onClick={clearCompleted}>Clear completed</span>
        </div>
      </div>
      
    </div>
  )
}

export default TaskList

// import React from "react";
// import Task from "./Task";
// import FilterControl from "./FilterControl";
// // #7a import deleteDoc and doc from 'firebase/firestore"
// // #7b import db from '../utils/firebase"


// function TaskList({
//   tasks,
//   setFilterStatus,
//   filterStatus,
//   filteredTasks,
//   setTasks,
// }) {

//   const clearCompleted = () => {
//     setTasks(tasks.filter((task) => task.status === false));

//     // #8 Look through every filtered task and if the status has a value of false it will stay in the array

//   };
//   return (
//     <div className="todo-items-wrapper">
//       <div className="todo-items">
//         {/* #5 pass down tasks and setTasks for later! */}
//         {/* #11 switch tasks.map to filteredTasks.map() */}
//         {filteredTasks.map((item) => {
//           return (
//             <Task task={item} key={item.id} tasks={tasks} setTasks={setTasks} />
//           );
//         })}
//       </div>

//       {/* Can be it's own component */}
//       <div className="todo-items-info">
//         <div className="items-left">
//           <p> {filteredTasks.length} items left</p>
//         </div>

//         {/* #8 Create a FilterControl component  and pass down filterStatus and setFilterStatus*/}
//         <FilterControl
//           setFilterStatus={setFilterStatus}
//           filterStatus={filterStatus}
//         />
//         {/* #9 In FilterControl create a function that onClick the status gets set to the span that was clicked */}

//         <div className="items-clear">
//           {/* #12a create an onClick that runs a function to clear completed tasks */}
//           <span onClick={clearCompleted}>Clear Completed</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskList;
