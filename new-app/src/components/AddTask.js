import React,{useState} from 'react'
import './Todo.css'

const AddTask=({addTask,tasks})=>{
    const[value,setValue]= useState("");

    const addItem =()=>{

      if (!value.trim()) {
            return;
        }
      addTask(value);
      setValue("")
    };
    return (
    <>
    
    <input  className='input' type="text" placeholder="Add a new task..." value={value} onChange={(e)=>{setValue(e.target.value)}}/>
    <button className="add-task-btn" onClick={addItem}>+</button>
    
    </>
   

    )
}

export default AddTask
