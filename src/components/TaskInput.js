import React, {useState} from 'react'

export default function TaskInput({tasks, setTasks}) {

const createId = (array)=>{
  const ids = array.map((item)=>item.id)
  return Math.max(...ids) + 1
}


 //Save what iwrote into an Input into a state
const [input, setInput] = useState('')
//when i type a function should run that dsaved the states of the input

const handleChange = (e)=>{
setInput(e.target.value);
}

const handleForm=(e)=>{
e.preventDefault();

  if(input){
    const newTask = {
      id: createId(tasks),
      //remove the white space before an after the string
      text: input.trim(),
      status: true
    }
// add new task to the state
    //how do we update the task state
    //value of tasks?
    setTasks([newTask,...tasks ])

    //reset input

    setInput('')
  }
}
  return (
    <div className='new-todo'>
      <div className='check'>
        <div className='check-mark'></div>
      </div>
      <div className='new-todo-input'>
        <form onSubmit={handleForm}>
          <input value = {input} onChange={handleChange} type='text' placeholder='Create a new todo here...'></input>
        </form>
      </div>
    </div>
  )
}
