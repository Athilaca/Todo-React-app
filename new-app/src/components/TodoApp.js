import React,{useState} from 'react'
import AddTask from './AddTask';
import ListTask from './ListTask';

const TodoApp=()=> {
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
    const handleEdit = (index) => {
    const newTitle = prompt("Enter new task title:", tasks[index].title);
    if (newTitle !== null && newTitle.trim() !== "") {
        const newTasks = [...tasks];
        newTasks[index].title = newTitle;
        setTasks(newTasks);
    }
};


  return (
    <>
    <div className=' tudo-container'>
    <div className='header'> Today's Todo List</div>
    <div className='add-task'>
        <AddTask addTask={addTask} tasks={tasks}/>
        </div>
    
    <div className='tasks'>
        {tasks.map((task,index)=>(
    <ListTask task={task}  removeTask={removeTask} index={index} handleEdit={handleEdit}/>
    ))}
    </div>
    </div>
    </>
  );
}

export default TodoApp;