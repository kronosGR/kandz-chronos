import { useState, useEffect } from 'react'

import './App.css'
function App() {
  //const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(timer + 1)
      }, 10)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, timer])

  const startStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setTimer(0)
  }

  const TimerToString = () => {
    const hours = Math.floor(timer / 360000)
    const mins = Math.floor((timer % 360000) / 6000)
    const secs = Math.floor((timer % 6000) / 100)
    const ms = timer % 100

    return (
      <div>
        {hours}:{mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}:
        {ms.toString().padStart(2, '0')}
      </div>
    )
  }

  return (
    <div className="content">
      <h1 id="title">Chronos</h1>
      <div className="content-timer">
        <button type="button" id="start-stop" onClick={startStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <div id="timer">
          <TimerToString />
        </div>
        <button type="button" id="reset-lap" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="laps"></div>
    </div>
  )
}

export default App
