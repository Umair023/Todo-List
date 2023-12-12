import React, { useState } from 'react'
//import Test from './components/Test'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList1 from './components/TodoList1';
import Clock from './components/Clock';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  
  let handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New item added:${itemName} date:${itemDueDate}`);
    let newItem=[...enterValue,{name:itemName,date:itemDueDate}];
    setEnterValue(newItem);
  }

  let [enterValue,setEnterValue]=useState([]);

  let DeleteClick=(todoitemName)=>{
    
    let newItemArray=enterValue.filter((item)=>item.name!==todoitemName);
    setEnterValue(newItemArray);
  }
  return (
    <div>
      <Clock/>
      <div className='Todo-list-div'>
      <center><h1 style={{marginTop:'20px'}}>Todo List</h1></center>
      <TodoList onNewItem={handleNewItem}/>
      {enterValue.length==0 && <WelcomeMessage/>}  
      <TodoList1 lists={enterValue} ClickForDelete={DeleteClick}/>
    </div>
    </div>
  )
}

export default App
