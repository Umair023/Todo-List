import React from 'react'

const Test = () => {
  let name='React'
  let myfunction=()=>{
    return 'this is my function'
  }
  let number=2345
  return (
    <div>
      <h3>Hello{name} {myfunction()}, there is also {number}</h3>
    </div>
  )
}

export default Test
