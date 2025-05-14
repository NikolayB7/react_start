import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './Component/Video';
import './App.css'

function App() {
  
  const res = "Work App"

  return (
    <>
      
       <div className="video-container">
         <Video/>
       </div>
    </>
  )
}

export default App
