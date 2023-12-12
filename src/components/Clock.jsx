import React from 'react'

const Clock = () => {
  let date=  new Date();
  let formattedDate = date.toLocaleDateString(); // Get formatted date string
  let formattedTime = date.toLocaleTimeString(); // Get formatted time string

  return (
    <div className='container text-center'>
      <h1>Date is: {formattedDate} - {formattedTime}</h1>
    </div>
  )
}

export default Clock
