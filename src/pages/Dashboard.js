import React from 'react'
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
// #3a Import onSnapshot,collection from 'firebase/firestore

import { onSnapshot, doc } from "firebase/firestore";
// #3b import db from './utils/firebase
import db, { auth } from "../utils/firebase";
import { signOut } from 'firebase/auth';
const data = [];

function Dashboard() {
  const [tasks, setTasks] = useState(data);


  const [filterStatus, setFilterStatus] = useState("all");


  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const [user, setUser] = useState({});

  const logout = async()=>{
    await signOut(auth)
    window.location ='/'
  }
  // useEffect(()=>{
  //   const unsub = onSnapshot(collection(db,"tasks"), (snapshot)=>{
  //     let todos = snapshot.docs.map((doc)=> ({...doc.data(), id:doc.id}))
    //   const handleFilter = () => {
    //         if (filterStatus === "active") {
    //           return setFilteredTasks(todos.filter((task) => task.status === false));
    //         } else if (filterStatus === "completed") {
    //           return setFilteredTasks(todos.filter((task) => task.status === true));
    //         } else {
    //           return setFilteredTasks(todos);
    //         }
    //       };
    //       handleFilter();
    // })
  //   return unsub
  // },[tasks,filterStatus])

  useEffect(()=>{
    //verify a user
    auth.onAuthStateChanged((currentUser)=>{
      if(currentUser.uid){
        console.log(currentUser.uid)
        setUser(currentUser.uid)
      } else {
        console.log("PlEASE SIGN IN")
      }
    })

    onSnapshot(doc(db,'users', `${user}`), (snapshot)=>{
     let todos = snapshot.data().tasks.map((task, id)=>({...task, id:id}))

     const handleFilter = () => {
      if (filterStatus === "active") {
        return setFilteredTasks(todos.filter((task) => task.status === false));
      } else if (filterStatus === "completed") {
        return setFilteredTasks(todos.filter((task) => task.status === true));
      } else {
        return setFilteredTasks(todos);
      }
    };
    handleFilter();
    })
    
  },[user, tasks, filterStatus])

  return (
    <div className='Dashboard'>
      <div className="container">
          <div className="header">
            <div className="title">TODO</div>
            <div className="theme">
              <img src="./images/icon-sun.svg" alt="theme" />
            </div>
          </div>

          <TaskInput tasks={tasks} setTasks={setTasks} 
          userId= {user}
          setUser={setUser}
          filteredTasks= {filteredTasks}/>


          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
            filteredTasks={filteredTasks}
            setFilteredTasks={setFilteredTasks}
            userId= {user}
          />
      </div>
      <h3 onClick={logout}>logout</h3>
    </div>
  )
}

export default Dashboard
