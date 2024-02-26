import React from 'react'
import './Tudo.css'

const ListTask=({task,index,removeTask})=>{
    return (
  <>
  
   <div className='lists-tasks'>
                <input type="checkbox" />
                <div className="task-container">
                    <span className="task-text">{task.title}</span>
                </div>
                <span onClick={() => { removeTask(index) }} className="cross-icon">×</span>
            </div>
 

  
  </>
    )
}

export default ListTask