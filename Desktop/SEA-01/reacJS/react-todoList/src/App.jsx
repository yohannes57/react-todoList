import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import {Routes,Route} from 'react-router-dom'
import TaskLayout from './components/TaskLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes >
  <Route path='/' element={<AddTask />}/>
  <Route path='/addtask' element={<AddTask />}/>
  <Route path='/file' element={<TaskLayout />}/>
  
    </Routes>
    
    </>
  )
}

export default App
