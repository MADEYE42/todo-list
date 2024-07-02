import React, { useState } from 'react'
import { FaAccessibleIcon } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus } from 'react-icons/ai';
import { GrCompliance } from "react-icons/gr";

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  // add tasks
  const handleSubmit = (e) => {
    e.preventDefault()
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTasks([...tasks, addTask])
    setInput('')
  }

  // delete tasks
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
    setTasks(filteredTasks)
    console.log('task deleted')
  }

  // toggle completed task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task => (
        task.id === id ? { ...task, completed: !task.completed } : task
      ))
    )
  }

  const date = new Date()
  // console.log(date)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  return (
    <div className='app'>
      <div className="container">
        <h1><FaAccessibleIcon /> DisabList</h1>

        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <AiOutlinePlus className='icon' />
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='Enter a task'
              type="text" />
          </div>
        </form>

        <div>
          {tasks.map(task => (
            <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} >
              <p>{task.text} </p>
              <GrCompliance onClick={() => toggleComplete(task.id)} className='icon' />
              <MdDelete onClick={() => deleteTask(task.id)}className='icon'  />
            </div>
          ))}
        </div>

          <p className='length'>{(tasks < 1) ? 'You have no tasks' : `Tasks: ${tasks.length}`}</p>
      </div>
    </div>
  );
}

export default App;