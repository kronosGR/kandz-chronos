import { useState, useEffect } from 'react'

import './App.css'
function App() {
  //const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timerList, setTimerList] = useState([])
  const [list, setList] = useState(null)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(timer + 1)
      }, 10)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, timer])

  useEffect(() => {
    let list = () => (
      <>
        {timerList.map((el, index) => (
          <TimerToString newTimer={el} key={index} />
        ))}
      </>
    )
    setList(list)
  }, [timerList])

  const startStop = () => {
    setIsRunning(!isRunning)
    if (isRunning) {
      setTimerList([...timerList, timer])
    }
  }

  const reset = () => {
    setTimer(0)
  }

  const emptyList = () => {
    setList(null)
    setTimerList([])
  }

  const TimerToString = ({ newTimer = 0 }) => {
    let time = 0
    time = newTimer == 0 ? (time = timer) : (time = newTimer)
    const hours = Math.floor(time / 360000)
    const mins = Math.floor((time % 360000) / 6000)
    const secs = Math.floor((time % 6000) / 100)
    const ms = time % 100

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
        <button type="button" onClick={startStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <div id="timer">
          <TimerToString />
        </div>
        <button type="button" onClick={reset} disabled={isRunning}>
          Reset
        </button>
      </div>
      <div className="timers">
        <div>
          {list}
          {timerList.length > 0 && (
            <button type="button" onClick={emptyList} id="empty-list">
              Empty List
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
