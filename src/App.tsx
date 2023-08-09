import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState<string>('');
  const [tasklist, SetTaskList] = useState<string[]>([]);

  const handleTask=(e:ChangeEvent<HTMLInputElement>)=>{
    setTask(e.target.value)
  }
  const handleAddButton=()=>{
    SetTaskList([...tasklist,task]);
    setTask('')
  }

  const handleDelete=(e:React.MouseEvent<HTMLSpanElement>)=>{
    const newList = tasklist.filter(item =>item !=e.currentTarget.id);
    SetTaskList(newList);
  }

  return (
    <div className="App">
      <h2>To Do List Application</h2>
      <div>
        <input type='text' value={task} onChange={handleTask} />
        <button className='btnAdd' onClick={handleAddButton}>Add</button>
      </div>
      <ul>
        {
          tasklist.map((item,index)=>
          <li className='liItem' key={index}>
            <span>{item}</span>
            <span className='btnRemove' onClick={handleDelete} id={item}>X</span>
          </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
