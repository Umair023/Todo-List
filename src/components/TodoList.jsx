import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = (props) => {
  let {onNewItem}=props

  const [toDoName,setTodoName]=useState();
  const [dueDate,setDueDate]=useState();
  
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }

  const handDueDate=(event)=>{
   setDueDate(event.target.value);
  }

  const handleAddButtonClick=()=>{
    onNewItem(toDoName,dueDate);
    setTodoName('');
    setDueDate('');
  }
  return (
    <>
      <div className='container text-center' style={{marginTop:'100px'}}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder='Enter Todo Here' value={toDoName} 
            onChange={handleNameChange}/>
          </div>
          <div className="col-md-4">
            <input type="date" value={dueDate} onChange={handDueDate} />
          </div>
          <div className="col-md-2">
            <button type="button" className='btn btn-primary' onClick={handleAddButtonClick}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList
