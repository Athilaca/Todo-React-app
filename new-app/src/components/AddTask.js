import React,{useState} from 'react'
import './Tudo.css'

const AddTask=({addTask,tasks})=>{
    const[value,setValue]= useState("");

    const addItem =()=>{

      if (tasks.length >= 3) {
            alert("You can't add more than 5 tasks!");
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