import React from 'react'
import { useReducer } from 'react'

function AddTask() {
    const[task,dispatch]=useReducer(reducer,0)

function reducer(){
    
}

    function handleInput(e){

    }
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input type="text" 
            placeholder='Add task'
            onChange={handleInput}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTask