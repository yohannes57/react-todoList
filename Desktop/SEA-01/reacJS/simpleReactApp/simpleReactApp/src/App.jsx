import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Counter from './components/Counter'
import Adder from './components/Adder'
import Index from './components/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
   <Header />
   <Content 
   color="darkgreen" text="This is my first ever application  ,no I am lying"/>
    <Content 
   color="yellow" text="This is my first ever application  ,no I am lying"/>
    <Content 
   color="red" text="This is my first ever application  ,no I am lying"/>
   <Footer />
   <Counter />
   {/* <Adder /> */}
   <Index />
    </div>
  )
}

export default App
