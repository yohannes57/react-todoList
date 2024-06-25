import React, { useState } from 'react'

function Counter() {
    const [count ,setCount]=useState(0)
    function addUp(){
setCount(count+1);
    }
  return (
    <div>
        <button onClick={addUp}> {count}</button>
    </div>
  )
}

export default Counter