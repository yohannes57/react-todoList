import React from 'react'

function TaskLayout() {
  return (
    <div>
        {/* name of task string
        complett checkboax
        edit button
        disabled delete button if the check bod checked it active
         */}
         <h2>nameof task</h2>
         <input type='checkbox' />
         <button >edit</button>
         <button >delete</button>
    </div>
  )
}

export default TaskLayout