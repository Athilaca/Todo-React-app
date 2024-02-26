import React,{useState} from 'react'
import AddTask from './AddTask';
import ListTask from './ListTask';

const TudoApp=()=> {
    const [tasks,setTasks]=useState([
        
    ]);
    
    const addTask=(title)=>{
      const newTask =[...tasks,{title}]
      setTasks(newTask);
    };

    const removeTask=(index)=>{
        const newTask =[...tasks]
        newTask.splice(index,1)
        setTasks(newTask)

    }

  return (
    <>
    <div className=' tudo-container'>
    <div className='header'> Today's Todo List</div>
    <div className='add-task'>
        <AddTask addTask={addTask} tasks={tasks}/>
        </div>
    
    <div className='tasks'>
        {tasks.map((task,index)=>(
    <ListTask task={task}  removeTask={removeTask} index={index}/>
    ))}
    </div>
    </div>
    </>
  );
}

export default TudoApp;