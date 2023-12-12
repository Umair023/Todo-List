import React, { useState } from 'react'

const TodoList1 = (props) => {
  let {lists,ClickForDelete}=props
  
 
  return (
   <>
    {lists.map((item,index)=>(
      
      <div className='container text-center' style={{marginTop:'20px'}} key={index}>
      <div className="row">
        <div className="col-6">{item.name}</div>
        <div className="col-4">{item.date}</div>
        <div className="col-2">
          <button type="button" className='btn btn-danger' onClick={()=>ClickForDelete(item.name)}>Delete</button>
        </div>
      </div>
      
    </div>
    
    ))}

    </>
  )
}

export default TodoList1
