import React, { useState } from 'react'

function Index() {
    const [Index ,setIndex]=useState(0)

    function nextHandler(){
        if(Index<=11)
        setIndex(Index+1);
    else{
        Index=12;
    }
    
    }
    function PrevHandler(){
        if(Index>0)
        setIndex(Index-1);
    else{
        Index=0;
    }
    }

  return (
    <div>
        <h1>{Index}</h1>

<button onClick={PrevHandler}>previous</button>
<button onClick={nextHandler}>next</button>
    </div>
  )
}

export default Index