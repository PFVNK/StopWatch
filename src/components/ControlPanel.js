import React from 'react'

function ControlPanel({
  setRunning,
  setTime
}) {

  return (
    <div className='control-container'>
      <button className='button start' onClick={() => setRunning(true)}>START</button>
      <button className='button stop' onClick={() => setRunning(false)}>STOP</button>
      <button className='button reset' onClick={() => setTime(0)}>RESET</button>
    </div>
  )
}


export default ControlPanel