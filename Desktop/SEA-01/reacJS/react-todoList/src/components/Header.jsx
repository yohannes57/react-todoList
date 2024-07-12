import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <ul>
            <h1>To Do List</h1>
            <li>
                <Link to="/home" >home</Link>
                <Link to="/addtask">addTask</Link>
                <Link to='/file'>file</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Header