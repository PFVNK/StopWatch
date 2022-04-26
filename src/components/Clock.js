import React, { useState, useEffect } from 'react'

import ControlPanel from './ControlPanel'

function Clock() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    console.log(running)
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  })

  return (
    <div className='container'>
      <div className='title-container'>
        <div className='title1'>STAHP</div>
        <div className='title2'>WATCH</div>
      </div>
      <div className='watch'>
        <div className='minutes'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</div>
        <div className='seconds'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</div>
        <div className='milli'>{("0" + ((time / 10) % 100)).slice(-2)}</div>
      </div>
      <ControlPanel
        setRunning={setRunning}
        setTime={setTime}
      />
    </div>
  )
}


export default Clock