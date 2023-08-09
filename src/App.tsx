import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState<string>('');
  const [tasklist, SetTaskList] = useState<string[]>([]);

  const handleTask=(e:ChangeEvent<HTMLInputElement>)=>{
    setTask(e.target.value)
  }
  const handleAddButton=(item:string)=>{
    if(item==""){
      alert('please add one task')
    }else{
      SetTaskList([...tasklist,task]);
      setTask('');
    }
  }

  const handleDelete=(e:React.MouseEvent<HTMLSpanElement>)=>{
    const newList = tasklist.filter(item =>item !=e.currentTarget.id);
    SetTaskList(newList);
  }

  return (
    <div className="App">
      <h2>To Do List Application</h2>
      <div>
        <input type='text' value={task} onChange={handleTask} placeholder='Add Task List' />
        <button className='btnAdd' onClick={()=>{handleAddButton(task)}} title='Add Task'>Add</button>
      </div>
      <ul>
        {
          tasklist.map((item,index)=>
          <li className='liItem' key={index}>
            <span>{item}</span>
            <span className='btnRemove' onClick={handleDelete} id={item} title='Delete Task'>X</span>
          </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
