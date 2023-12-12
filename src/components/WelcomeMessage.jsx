import React from 'react'
import ModuleCSS from './WelcomeMessage.module.css';
const WelcomeMessage = () => {
  return (
    <div>
      <center>
      <h1 className={`${ModuleCSS.h1}`}>Enjoy Your Day</h1>
      </center>
    </div>
  )
}

export default WelcomeMessage
