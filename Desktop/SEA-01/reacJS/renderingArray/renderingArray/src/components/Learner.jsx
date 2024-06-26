import React from 'react'

function Learner({name,bio}) {
  return (
    <div className='learner'>
       <div><h1>{name}</h1></div>
       <div><p>{bio}</p></div>

    </div>
  )
}

export default Learner