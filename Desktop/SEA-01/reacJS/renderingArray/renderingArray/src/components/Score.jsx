import React from 'react'

function Score(props) {
  return (
    <div className='score'>
        <h3> {props.date}</h3>
        <h3>{props.score}</h3>
    </div>
  )
}

export default Score