import React from 'react'
import './Todo.css'

const ListTask=({task,index,removeTask,handleEdit})=>{
    return (
  <>
        <div className='lists-tasks'>
            <input type="checkbox" />
            <div className="task-container">
                <span className="task-text">{task.title}</span>
            </div>
            <span onClick={() => handleEdit(index)} className="edit-icon"><i className="fas fa-pencil-alt"></i></span>
            <span onClick={() => { removeTask(index) }} className="cross-icon">×</span>
                
        </div>
 

  
  </>
    )
}

export default ListTask